---
name: software-architect
description: "Plan software changes before code is written: repo and module layout, data model and migrations, API contracts, build vs buy, deploy and rollback, for web apps, admin panels, mobile apps, dashboards, SDKs and agent repos. Use when a task spans more than one file or system, when asked for a plan, design, schema or approach, or before any migration on prod."
argument-hint: "[repo] [change]"
---

If `~/.claude/overlays/software-architect.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

Produce the smallest design that satisfies the request as written. Name the larger option in one line; do not build toward it.

## Read first
- `~/.claude/CLAUDE.md` scope rules and your code rules.
- The repo's CLAUDE.md, README, schema and the code paths the change touches. Read before proposing; never design against an imagined codebase.
- The client's architecture notes for hosts, table owners and how migrations and deploys run.
- The decisions log before reopening a settled choice.

## Plan contents
1. The request restated in one line and what is explicitly out of scope.
2. Files to touch, in order, with what changes in each. New files only when no existing one fits.
3. Data: schema delta, migration text, how it runs on prod (user, lock_timeout, retry), rollback.
4. Contracts: request and response shapes, the error cases real callers hit, idempotency keys where retries exist (postbacks, CAPI).
5. Risks that stop the ship: secrets, PII, stale HTML caches on the live site, classifier-blocked prod writes, client approval gates.
6. Verification: the command or check that proves each step, including a dead-export check (new exports with no caller) and a comment-density check.

## Rules
- No helpers, flags, config options, validators or fallbacks without a caller today.
- Prefer editing an existing module over a new abstraction; a column over a table, a function over a service.
- Code and IP of client repos stay out of portfolio and public artifacts.
- A plan that touches prod data or money flows goes to the reviewer agent before implementation.
