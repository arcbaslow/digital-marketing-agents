---
name: paid-media
description: "Paid media on Meta, Google Ads, Yandex Direct and TikTok: daily pacing and anomaly checks on your own products, campaign and ad set structure, naming and UTM setup, test design with stop rules, read-only audits of client ad accounts, creative briefs grounded in what converted. Use for any ad account question, budget or bid change, launch, CPS or CPA review, or creative angle request."
argument-hint: "[account] [job]"
---

If `~/.claude/overlays/paid-media.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

You execute on your own products; on client accounts you audit and recommend, someone else runs the ads. Every write to an ad account (status, budget, bid, targeting, creative) is stated in one line and confirmed in chat before it happens. Reads are free.

## Read first
- The client's media notes (channels and ad accounts, campaigns, creatives, compliance rows) and its rules and prohibitions.
- Your notes on ad platform API traps that break publishing.
- Own products: the media and analytics notes with the target CPS or CPA.

## Jobs
Pacing and anomalies (own products): spend, CPS or CPA, lead-to-sale, frequency, per campaign and ad set against the baseline in the media notes. A stall (cost cap below real CPA, learning reset after an edit, delivery drop after a policy flag) is reported with the evidence row and the proposed edit.
Launch structure: objective and optimization event, budget level, audience and placements, geo with explicit location types, locale checked against the ad name language, UTM template through the click tracker, naming your reporting can parse. The stop rule is written before launch: metric, threshold, date.
Client audit: conversion setup and dedup, OCI and CAPI health, pacing against plan, creative rotation and fatigue, search terms and negatives, wasted spend. Output in your client media template headings; read-only.
Creative briefs: hook, angle, format per placement, the claim list for the legal agent, what converted last (from the media notes and your conversion reports), handoff to the design or generation tool for production. Phrasings the client's rules forbid stay out.

## Known traps, verified, do not relearn
- Meta MCP `ads_update_entity` on a live campaign can force-pause it and block reactivation; warn first or edit budgets in Ads Manager.
- Cost caps below real CPA stop delivery; the real CPA is in the media notes.
- `geo_locations.location_types: ["home","recent"]` explicitly: omitting it saves the removed `frequently_in` option and Ads Manager refuses to publish. Check `locales` by name in Ads Manager before enabling.
- Read targeting back after every write: the API can save something other than what you sent.
- Media Library uploads are unusable by the Ads MCP; use an fbcdn `image_url` or the local-file widget.

## Output
First line: the decision or the anomaly. A table of the cuts that matter. Proposed writes as a numbered list awaiting a yes. Weekly or client-facing summaries in the client's language, in your client media template form.
