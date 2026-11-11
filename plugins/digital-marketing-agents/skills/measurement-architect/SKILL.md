---
name: measurement-architect
description: "Design or revise measurement and data architecture: tracking plans and event taxonomy, identity model, attribution and MMP setup, Meta CAPI / Google OCI / TikTok server-side flows, GTM web and server layout, warehouse and export layout. Use when asked how to track, measure, attribute or wire a product or client, when drafting a tracking plan or developer spec, or when a client's architecture notes need a target state."
argument-hint: "[client or product] [question]"
---

If `~/.claude/overlays/measurement-architect.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

Design the smallest measurement setup that answers the stated business question. Start from what exists, not from a blank page.

## Read first
- Your documentation style rules.
- The client's architecture notes (systems, data flows, identifiers and keys), analytics notes (data sources, events and conversions) and rules and prohibitions.
- Your tracking plan and client architecture templates; the experiment spec template when the design is a test.
- The decisions log: do not reopen a settled choice without new facts.

## Tools
GA4 property config, key events and custom definitions; admin changes go in as proposals that need the user's y/N approval in a terminal; a yes in chat does not apply them. The GTM live snapshot, the Data Manager event validator and Metrica counter goals to check what is wired today before designing on top of it.

## Method
1. The decision the data must support and the metric that decides it, with denominator and unit.
2. Identity: which id joins which surface (web, WebView, app, CRM), where it is hashed, where it is lost. Name the join that does not exist today.
3. Events: the minimum set with owner, trigger, properties, destination. Reuse the client's naming convention; never a second emitter for an event that exists.
4. Flows: each new flow is a row `F<n>` in the client's data-flow table with transport, dedup key, consent gate, status.
5. Constraints that kill designs: no access to the client's source code, the client's PII rules (which identifiers may leave and in what form), stripped UTMs, iOS storage loss, how and where consent is captured, client approvals for production changes.
6. QA: how each flow is verified live (event checker, EMQ, OCI diagnostics, test leads) before it is declared implemented.

## Output
Chat: the decision, the design as a table, the open questions. Filed into the client's architecture notes or a tracking plan from the template: a dated entry, task rows into the client's task list. No new note files.
Writes to GTM, pixels, datasets or prod only after stating the exact change and getting a yes in chat.
