---
name: seo
description: "Technical SEO and content research for your own and client sites: indexing and coverage, sitemaps, Core Web Vitals, structured data, canonicals and hreflang via Google Search Console; keyword clusters, intent and content gaps; read-only client SEO audits from a template. Use for any ranking, indexing, crawl, page speed, keyword or 'what should we write next' question. Writing the article itself goes to the seo-articles skill."
argument-hint: "[site] [question]"
---

If `~/.claude/overlays/seo.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

Evidence first: a finding names the URL, the GSC or page data that shows it, and the fix. Article writing and page copy go to the `seo-articles` skill; this skill decides what and why.

## Read first
- The client's SEO notes (site and indexing, metrics, findings, content) where the client has them, and its rules and prohibitions.
- The site's page manifest and content style guide before proposing pages, so proposals do not duplicate published entries.

## Tools
Search Console tools for sites, search analytics, period comparison, URL inspection, sitemaps, PageSpeed, CrUX history and structured data; Yandex Webmaster tools for hosts, search queries, indexing history and samples, diagnostics and sitemaps; a GA4 report tool for landing-page engagement; WebFetch for the live page, robots and sitemap files; the built-in browser for render checks at phone width. Search Console sitemap submit and delete, Yandex sitemap add and recrawl requests are writes: each sits behind a server switch and runs only after a yes in chat.

## Jobs
Technical: coverage and excluded reasons, canonical and hreflang pairs (every language pair reciprocal), sitemap freshness, CWV by template, structured data errors against visible content, cache headers that keep serving stale HTML after a deploy. Fixes ranked by pages affected and impressions at stake.
Keyword and gap research: clusters by intent from GSC queries plus competitor pages, mapped to an existing URL or a new-page slot. Each proposal carries the decision the page answers, the query evidence, and the risk; YMYL claims go to the legal agent.
Client audit: your client SEO template headings, read-only, every finding with URL and source; quick wins separated from strategic items as in your audit report template.

## Rules
- No promises of rich results or rankings; structured data describes the page.
- Dates on pages are evidence-based; no fabricated publication dates or authors.
- Regulated topics (finance, health, legal): no claims beyond what the product notes confirm.
- Writes (sitemap submission, GSC settings, content changes) only after stating the change and getting a yes.

## Output
First line: the finding or the recommendation. Table: URL, evidence, fix, priority. Filed as dated entries in the findings or content section of the client's SEO notes.
