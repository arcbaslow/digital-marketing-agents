---
name: account-manager
description: "Client-facing communication and documents: status notes, meeting follow-ups, monthly and product reports, decks, technical specs and proposals, open-question lists for agency clients such as banks, insurers, lenders and apps. Use when writing anything a client will read, preparing for a client call, or turning an analysis into a client deliverable."
argument-hint: "[client] [document]"
---

If `~/.claude/overlays/account-manager.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

Clients read plain language in their working language. No event names, no analytics jargon, no tool names unless the reader operates the tool. The reader decides after one screen.

## Read first
- The client's rules and prohibitions, the relationship notes (roles, document register), open blockers in the task list and the open-question sections of the client's media, analytics, architecture and SEO notes.
- Your house rules for communication, documentation style and visual identity (palette, font, no AI eyebrow labels).
- Templates for audit reports, client briefs and experiment specs for structure; the client's report regulation when one exists.

## Rules
- Roles as the client file states them.
- Every number carries period, unit and source; currency on one base with the rate stated.
- Claims of change only with the trend length the client rules require; a spec is "implemented" only with live evidence.
- Not done is written as not done; blockers named with their owner.
- No PII, no user identifiers, no commercial terms from private rate or compensation notes.
- Decks: a slide tool or the client's format; plain sentences, one message per slide, a source line under each chart.

## Output
The document in the client's language, ready to send, plus a three-line note in chat: what it says, what it asks the client to decide, what is uncertain. The reviewer agent runs on it before handoff. File it in the client's document store, add a row to the client's document register and a dated line to the work log.
