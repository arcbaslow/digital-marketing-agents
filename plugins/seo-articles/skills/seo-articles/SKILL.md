---
name: seo-articles
description: "Research, write or revise SEO articles, explainers, glossary entries and calculator/tool copy in any project's content system. Use for decision pages, especially finance, health, legal or tax: composition around one reader decision, explanatory visuals, reproducible worked examples, metadata and structured data."
---

If `~/.claude/overlays/seo-articles.md` exists, read it before starting: it lists the clients, accounts, data sources and known traps for this setup. If a note this file names does not exist, skip that step and say so.

# SEO articles

Use this workflow in Claude Code, Codex or Cowork. It is project-agnostic: the project's own source, style guide and build define the mechanics; this file defines the editorial standard. Project-specific paths, commands, limits and product facts live in the overlay or the repo's `CLAUDE.md`.

Read [the editorial pattern](references/editorial-pattern.md) when designing a page and [financial checks](references/financial-checks.md) before writing monetary or regulatory claims.

## Start from the project's source

Work from current source, never from an old generated page or a live URL. Locate the content root and read, in this order: the style guide (`STYLE.md`, `CONTENT.md`, `CLAUDE.md` or equivalent), the page manifest or frontmatter schema (`pages.json`, `_data/*`, frontmatter of sibling pages), the target body, and the build or template script that renders bodies into pages. If the project has no style guide, read two or three published pages of the same type, write down the conventions you infer (heading depth, byline, disclosures, FAQ block, related links, sources) and follow them. Once you have mapped a new project, record it in the overlay or the repo's `CLAUDE.md` in this shape: repo, content paths, manifest, style guide, build and check commands, languages, metadata limits, where product claims are verified.

## Establish the page's job

Inventory what is published separately from drafts that exist as files but are absent from the manifest or navigation. Preserve existing paths, language pairs, author identity and publication status unless the user asks to change them.

Every page is built around one distinct decision the reader is making. Two pages about the same product for different amounts, cities or plans are not two decisions: one explains the fee burden, the other tests term against total cost. Do not create parameter-swapped copies and do not impose a word-count target; length follows the decision.

Check product and service claims against configuration and implementation before writing them. Read the code that selects, ranks or filters offers before describing ranking, commissions, eligibility checks, availability or speed. Record contradictions between copy and code; fix unsupported editorial claims, never silently change the product. Do not manufacture a reviewer, expert credential, provider count, user story or public author profile.

## Compose for a reader making a decision

Lead with the direct answer and a concrete limit or number. Follow with a short standfirst and a compact two-column summary of takeaways and cautions (use the manifest field for it when the template has one). Then: the mechanism, a reproducible worked example, a comparison of the realistic options, a practical next step. Headings describe the section; links are contextual; a checklist appears only where the reader must perform a sequence. The real answer is in server-rendered HTML, not behind a script or inside an image.

Use the shared template for navigation, byline, disclosures, FAQ, related pages and sources. Long articles get section navigation; a glossary entry needs less structure. A table earns its place when it supports a comparison; a callout isolates one costly mistake or useful exception rather than restating the paragraph. Say plainly when the product is a poor fit for the reader. End with a useful next action, not a repeated conclusion.

FAQs answer genuine residual questions, not rephrased headings. Store question and answer once (manifest or frontmatter) so visible content and any FAQPage JSON-LD stay identical. Do not promise FAQ or HowTo rich results: Google dropped HowTo rich results in September 2023 and stopped showing FAQ rich results from 7 May 2026 (Search Central updates log, https://developers.google.com/search/updates, checked 11 October 2026).

## Numbers, examples and regulated claims

Every figure must be reproducible from inputs stated on the page: principal, rate, term, fees, dates, tax regime. State the formula in prose next to the example and recompute it in a script before publishing; a worked example that does not reproduce is worse than none. Keep currency, units and rounding consistent across the page and across language versions. Rates, fees, limits and legal thresholds carry the date they were checked and a primary source (regulator, law text, provider's own terms), not a competitor's article. Distinguish what this product does from what the market generally does. A claim that cannot be sourced is cut. On YMYL topics (finance, health, legal, tax) use the disclosure block the template provides; do not invent one.

## Images and diagrams

Cover, explanatory diagram and social card are three different assets: a cover establishes the subject, a labeled diagram explains a relationship, a 1200 × 630 card serves link previews. Keep the project's existing brand and licensed assets; never copy another site's artwork or treat its visual style as evidence of SEO performance.

Prefer HTML/CSS or accessible SVG for exact values, timelines and process flows, with readable labels, a caption, and the same essential information in prose or a table. Use image generation only when an original raster illustration is needed; numbers and disclosures never go into pixels. Decorative images get empty alt; informative images get specific alt or an accessible title. Reserve dimensions, ship responsive renditions where the pipeline has them, prioritize the above-fold hero, lazy-load the rest. Inspect at narrow and wide widths.

## Metadata and schema

Title, h1, description and standfirst each do a job; they are related, not mechanically identical. Use the project's limits; default to title ≤ 60-65 and description ≤ 155-165 characters when it has none. Keep self-canonicals, reciprocal hreflang alternates for every language pair, and crawlable internal links. Publication dates are evidence-based and stable: omit an unknown original date rather than invent one; move the modified date only after a substantive revision.

Schema by page type: Article for editorial pages, CollectionPage for hubs, WebPage for tools and policy pages, ProfilePage only with truthful person data, BreadcrumbList following visible navigation. Headline, author, image, dates, language and citations in JSON-LD must match the page. Do not add AggregateRating, Offer, FAQ or HowTo markup to chase a search feature. Structured data describes the page; it guarantees nothing.

## Implementation and verification

Edit the content source (`content/<lang>/*.html`, Markdown, MDX or whatever the project uses) and its manifest; shared behavior belongs in the template, build script and shared stylesheet, not copied into pages. Preserve calculator inputs, embeds and tracking snippets when revising surrounding copy. Change calculator code only when its output contradicts the stated method, and then verify known values and edge cases (zero interest, zero capacity, maximum term). Every language version preserves the same assumptions, limits and disclosures as the source language.

Run the project's build, content check, link check and CSP check if they exist (`package.json` scripts or the Makefile tell you which). If inline scripts changed and the project hashes them for CSP, regenerate the hashes and recheck; a checked-in server snippet still has to be applied on deployment. Review the generated HTML for working anchors, assets, language pairs, visible/schema agreement and stable dates. Open representative pages in a browser: mobile overflow, FAQ expansion, calculator edge cases.

Deliver a file-linked summary, a coverage inventory (created, revised, left as draft), verification results and remaining source or deployment limitations. Creating the revision is not publishing it.
