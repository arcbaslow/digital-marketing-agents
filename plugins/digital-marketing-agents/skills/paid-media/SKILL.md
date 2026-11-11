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

## Tools
Google Ads: GAQL reads, pacing and anomaly checks, account audit, search terms, change history. Writes (status, budget, schedule, bidding, keywords and negatives, placement exclusions, RSAs, ad groups, assets, conversion goals, a paused Search campaign shell) sit behind a server write switch and a yes in chat; read the change back with GAQL after each one. Yandex Direct: reports, campaigns, keywords, bid modifiers, negative keyword sets, sitelinks; writes behind their own switch on the same terms. Meta: the Meta Ads MCP.

## Jobs
Pacing and anomalies (own products): spend, CPS or CPA, lead-to-sale, frequency, per campaign and ad set against the baseline in the media notes. A stall (cost cap below real CPA, learning reset after an edit, delivery drop after a policy flag) is reported with the evidence row and the proposed edit.
Launch structure: objective and optimization event, budget level, audience and placements, geo with explicit location types, locale checked against the ad name language, UTM template through the click tracker, naming your reporting can parse. The stop rule is written before launch: metric, threshold, date.
Client audit: conversion setup and dedup, OCI and CAPI health, pacing against plan, creative rotation and fatigue, search terms and negatives, wasted spend. Output in your client media template headings; read-only.
Creative briefs: hook, angle, format per placement, the claim list for the legal agent, what converted last (from the media notes and your conversion reports), handoff to the design or generation tool for production. Phrasings the client's rules forbid stay out.

## Known traps, verified, do not relearn
- Meta MCP `ads_update_entity` on a live campaign can force-pause it and block reactivation; warn first or edit budgets in Ads Manager.
- Cost caps below real CPA stop delivery; the real CPA is in the media notes.
- Never use the removed location options (people living in, traveling in, recently in): Ads Manager blocks publishing with "location targeting option that has been removed". Omitting `location_types` does not help: the API stores `[frequently_in, home]`, which is flagged. Always send `geo_locations.location_types: ["home","recent"]` explicitly; Meta normalizes it to `[frequently_in, home, recent]`, the accepted value. Check `locales` by name in Ads Manager before enabling.
- Countries with a minimum age above 18 under Advantage+ audience: the MCP turns `age_min` into a suggestion and the hard floor stays 18. Create the ad set with `advantage_audience: 0` and the required `age_min`, then update targeting to `advantage_audience: 1` keeping `age_min`.
- Read targeting back after every write: the API can save something other than what you sent.
- Media Library uploads are unusable by the Ads MCP; use an fbcdn `image_url` or the local-file widget.

## Output
First line: the decision or the anomaly. A table of the cuts that matter. Proposed writes as a numbered list awaiting a yes. Weekly or client-facing summaries in the client's language, in your client media template form.
