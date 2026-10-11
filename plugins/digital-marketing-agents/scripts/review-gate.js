const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const git = (cwd, args, input) =>
  execFileSync('git', args, { cwd, input, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });

const winPath = p => p.replace(/^\/([a-zA-Z])\//, (_, d) => `${d.toUpperCase()}:/`);
const toplevel = cwd => git(cwd, ['rev-parse', '--show-toplevel']).trim();
// git's empty tree, the diff base in a repo that has no commits yet.
const EMPTY_TREE = '4b825dc642cb6eb9a060e54bf8d69288fbee4904';
const base = root => { try { git(root, ['rev-parse', '--verify', '-q', 'HEAD']); return 'HEAD'; } catch { return EMPTY_TREE; } };

// Hash of every changed or untracked path's current content, so the value is the same
// before and after `git add`: the reviewer stamps before staging, the gate checks after.
function fingerprint(root) {
  const list = args => git(root, args).split('\0').filter(Boolean);
  const paths = [...new Set([
    ...list(['diff', '--no-renames', base(root), '--name-only', '-z']),
    ...list(['ls-files', '--others', '--exclude-standard', '-z']),
  ])].sort();
  const present = paths.filter(p => fs.existsSync(path.join(root, p)));
  const hashes = present.length
    ? git(root, ['hash-object', '--stdin-paths'], present.join('\n') + '\n').trim().split('\n')
    : [];
  const byPath = Object.fromEntries(present.map((p, i) => [p, hashes[i]]));
  const text = paths.map(p => `${p} ${byPath[p] || 'D'}`).join('\n');
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 16);
}

const stampFile = root => path.resolve(root, git(root, ['rev-parse', '--git-dir']).trim(), 'claude-review');

if (process.argv[2] === 'stamp') {
  const verdict = process.argv[3] === 'ship' ? 'ship' : 'fix';
  const root = toplevel(process.cwd());
  fs.writeFileSync(stampFile(root), `${verdict} ${fingerprint(root)}\n`);
  console.log(`stamped ${verdict}`);
  process.exit(0);
}

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const raw = (input.tool_input && input.tool_input.command) || '';
// Heredoc bodies are data being written, not commands being run.
const cmd = raw.replace(/<<-?\s*(['"]?)(\w+)\1[^\n]*\n[\s\S]*?\n\s*\2(?=\n|$)/g, '');
const deny = reason => {
  console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: 'deny', permissionDecisionReason: reason } }));
  process.exit(0);
};
const commits = [...cmd.matchAll(/(^\s*|[;&|(]\s*|\n\s*|\b(?:sh|bash|zsh|pwsh|powershell)(?:\.exe)?\s+(?:-\w+\s+)*-(?:\w*c|Command)\s+["']\s*)(?:\w+=\S*\s+)*git(?:\.exe)?\s+((?:(?:-[cC]\s+(?:"[^"]*"|'[^']*'|\S+)|--[\w-]+(?:=\S+)?)\s+)*)commit\b/g)];
if (!commits.length) process.exit(0);
if (commits.length > 1) deny('one git commit per command, so each is checked against its own repo: run them as separate calls');
const commit = commits[0];

// Shell directory changes before the commit apply in order; git -C counts only on the commit itself.
const dir = m => winPath((m[1] || m[2] || m[3]).replace(/^(?:~|\$HOME|\$env:USERPROFILE)(?=$|[\\/])/i, os.homedir()));
const start = winPath(input.cwd || process.cwd());
let cwd = start;
for (const m of cmd.slice(0, commit.index).matchAll(/\b(?:cd|pushd|Set-Location|Push-Location)\s+(?:-(?:Literal)?Path\s+)?(?:"([^"]+)"|'([^']+)'|([^\s;&|]+))/g)) cwd = path.resolve(cwd, dir(m));
for (const m of commit[2].matchAll(/-C\s+(?:"([^"]+)"|'([^']+)'|(\S+))/g)) cwd = path.resolve(cwd, dir(m));
const commitArgs = cmd.slice(commit.index + commit[0].length).match(/^[^;&|\n]*/)[0].replace(/"[^"]*"|'[^']*'/g, '');

let root;
try { root = toplevel(cwd); } catch {
  if (cwd !== start) deny('could not resolve the directory this commit runs in: commit from inside the repo or with git -C <path>');
  process.exit(0);
}

let stamp = '';
try { stamp = fs.readFileSync(stampFile(root), 'utf8').trim(); } catch {}
const fp = fingerprint(root);
if (stamp !== `ship ${fp}`) deny(stamp.endsWith(fp)
  ? 'reviewer verdict for these changes is "fix first": fix the findings, run the reviewer again, then commit'
  : 'no reviewer verdict for the current changes: run the reviewer agent on this diff (it stamps the result), then commit');

// The stamp covers the working tree but a commit takes the index: a path staged with other
// content (git add -p, or edited or deleted after staging) was never reviewed. -a restages it.
const staged = git(root, ['diff', '--cached', '--name-only', '-z']).split('\0').filter(Boolean);
const unstaged = new Set(git(root, ['diff', '--name-only', '-z']).split('\0').filter(Boolean));
const commitAll = /(^|\s)-(?:-all\b|[A-Za-z]*a[A-Za-z]*\b)/.test(commitArgs);
if (!commitAll && staged.some(p => unstaged.has(p))) {
  deny('staged content differs from the working tree the reviewer saw: stage whole files in a separate call, or run the reviewer again, then commit');
}
