const fs = require('fs');
const path = require('path');
const os = require('os');

const C = path.join(os.homedir(), '.claude');

fs.mkdirSync(path.join(C, 'overlays'), { recursive: true });
console.log(`overlays directory: ${path.join(C, 'overlays')}`);

const cm = path.join(C, 'CLAUDE.md');
let txt = '';
try { txt = fs.readFileSync(cm, 'utf8'); } catch {}
if (!/^## Personas/m.test(txt)) {
  fs.appendFileSync(cm, (txt && !txt.endsWith('\n') ? '\n\n' : txt ? '\n' : '') + fs.readFileSync(path.join(__dirname, 'CLAUDE-personas.md'), 'utf8'));
  console.log(`personas block added: ${cm}`);
} else {
  console.log(`personas block present: ${cm}`);
}
