# Workbook architecture

## Tabs and source of truth

Keep the seven core tabs in the order below. Other templates put the flowchart first; keep Summary first, because the approver reads it and never the flowchart. Append one named monthly tab per month, then optional Raw and Reforecast tabs. Monthly tabs are formula views of Plan with the same columns, not independent input models.

| Tab | Role | Required contents |
| --- | --- | --- |
| Summary | One-screen approval | Period, net, fee, VAT, gross, gross USD, split by channel and month, KPI targets, assumption date, version/status, owner, approver and sign-off date; colour legend |
| Plan | Canonical row model | Stable Line ID plus month, dates, dimensions, budget block, performance block, business block, awareness measures and readiness |
| Flowchart | Flight view | Same row keys, Monday week dates, weekly net spend, filled active cells, totals and reconciliation checks |
| Assumptions | Input register | VAT, fee, FX, source/date, benchmark rows, conversion rates, confidence, approvals and validation lists |
| Plan vs actual | Reconciliation | Same keys and planned columns, actual metrics, absolute/relative variances, percent used, status, comment, cause and action |
| Glossary | Finance definitions | Term, plain meaning, formula, unit, number owner and budget/attribution basis |
| Changes | Approval history | Date, who, what changed, why, approver, budget delta and affected version |

Line ID identifies a channel/product/format/objective/buying-model combination; month disambiguates repeated lines. Split a line when a different flight or assumption set needs separate reconciliation. Maintain a campaign or UTM mapping to the composite key; do not infer it from free text at month end.

## Formula chain and financial basis

Use the asset's cells and headers consistently. Store net media as an input; calculate fee = net x fee rate, VAT = (net + fee) x VAT rate and gross = net x (1 + VAT) x (1 + fee). This is the required planning convention, with fee charged on net and VAT on media plus fee. Show any invoice or self-assessment difference in a finance reconciliation note or explicit bridge. Never assume a jurisdiction's tax treatment or type a rate from memory; take VAT and fee from the contract.

Convert gross to USD by dividing by FX, defined as base-currency units per USD. Label gross USD so it cannot be mistaken for working-media net. Keep production and other non-media costs separate with an explicit inclusion/exclusion statement; do not let them vanish from the approval ceiling.

| Model | Performance calculation | Business calculation |
| --- | --- | --- |
| CPM | impressions = net / assumed CPM x 1000; clicks = impressions x assumed CTR | leads = clicks x CR to lead; CPL = net / leads; sales = leads x CR to sale; CPS = net / sales |
| CPC | clicks = net / assumed CPC; impressions = clicks / assumed CTR | Use the same lead and sale chain |
| Awareness | impressions = net / CPM x 1000; reach = impressions / assumed frequency | Leave lead and sale metrics inapplicable, not a promise of zero leads |

CTR and conversion rates are benchmark links in Plan. Derived actual CTR uses actual clicks / actual impressions. Use net in performance cost calculations and disclose that basis. Do not average row CPL, CTR or CR for totals: sum matching numerators and denominators, then divide. An awareness row does not inherit a lead target just because it shares a table.

Guard each division using `IF(denominator=0, 0, ...)`. A zero from a guard is not a valid forecast when an input is absent. Add readiness states: No assumption set, Missing assumptions and Ready on Plan; Pending actuals and Unplanned spend on Plan vs actual. Distinguish blank unknowns from numeric zero in the input register. Round with formats only.

## Assumptions and validation

Store global scalars once. Each benchmark row needs key, metric, value, unit, channel/product/format scope, source URL or file link, source period, checked date, confidence, owner and approval status. Register CTR, both conversion rates, CPM/CPC and frequency separately. State the source system and definition for leads and issued/sold outcomes.

Use source-based scenarios when they answer an approval question; do not invent three plausible-looking rates. Keep validation options in one register. Use range-based validation when options come from cells. Keep global scalar names optional; the assets use explicit cells so the chain remains inspectable.

## Flowchart and monthly tabs

Put the same composite row keys down the left and weeks headed by Monday dates across the top. Put month labels above without merging cells. Store weekly net spend, not binary marks. Shade spend above zero and use one-hue intensity for pulsing. Continuous, flighting and pulsing describe allocation patterns; the cell amounts are the plan.

For a uniform daily flight, allocate each week's intersection with start/end dates as a share of inclusive flight days. For custom flights, use explicit weekly inputs with their own approval and check totals. A visual overlap rule alone does not allocate money. Include partial weeks at both month boundaries and avoid allocating the same day twice across monthly rows. The asset gives the exact formula and zero checks.

Show row difference = weekly sum - planned net, weekly total rows and an overall difference. All differences must equal zero within the disclosed rounding tolerance. Put launch or creative-rotation markers in a separate labelled row with details in notes; do not replace spend cells with text.

Name monthly tabs by the client's convention and month, with the Plan column layout. Pull their rows from Plan. Summary totals use Plan, never Plan plus its monthly views. Freeze the approved version and record later changes with approver and effect; put reforecast in a separate named view or version.

## Plan vs actual

Preserve Plan's A:AF columns and row order, with a formula copy linked by immutable key rather than a position that can silently shift. Append actual columns and variances as specified in the asset. Reconcile imports using Line ID plus month; preserve any source exports unchanged in clearly named Raw tabs. Include source, refresh date and mapping coverage checks.

Match period boundaries, currency, time zone, attribution window/model, conversion definition and tax/fee basis. Mark unmapped actuals and late conversions as pending reconciliation. Agree the closing lag with the source owner, since platforms restate spend and conversions for days after month end. Compare approved Plan to actuals; keep later reforecast distinct.

Show actual spend, impressions, clicks, leads, sold, actual CTR/CPL/CPS, absolute variance, relative variance and percent used. For key outcomes repeat variance pairs as needed. A zero-plan row with actual spend needs an "unplanned spend" status even though its guarded relative ratio is zero. Pacing thresholds are inputs the client approves; 90-110% is a common starting band, not a rule.

## Sheets build notes

Read `google-workspace` before the first connector call and leave API mechanics there. Both connector write tools parse like UI entry. Write formulas as formulas; for an identifier that looks like a number or a date, write one guarded value, read it back and only then fill the column. Do not assume a RAW option exists on those tools.

Read `properties.locale` before the first formula. The connectors parse formulas in the spreadsheet's locale: commas in en_US, `;` in ru_RU and other comma-decimal locales, English function names in both. A formula written with the wrong separator is stored as `#ERROR!` ("Formula parse error") and switching the locale afterwards does not re-parse it, so rewrite it. API-created files start in en_US; set the locale first when the client works in ru_RU. Verified 25.10.2026 with the asset formulas in a ru_RU file.

Formatting uses numeric sheet IDs with 0-based, end-exclusive ranges. Charts use `addChart` inside the sheet. Follow workspace guidance for field masks, batching, access and formula protection. Freeze headers and key columns. Use one base-currency format, one rate format and one date format; separately label USD. Test locale rendering rather than asserting a currency pattern works everywhere.

Use notes for static source/method facts and comments for open approval questions. Protect formulas and approved outputs under authorised access settings. Keep conditional formatting purposeful: variance signals and Flowchart spend shading, rather than rainbow decoration.

## Sources

- [ICAEW spreadsheet principles](https://www.icaew.com/technical/technology/excel-community/20-principles-for-good-spreadsheet-practice-2024-edition) for audience, separation and traceability.
- [Guideline media plan framework](https://www.guideline.ai/articles/media-plan-template-a-cross-channel-framework-with-a-worked-example) and [Bionic media planning](https://www.bionic-ads.com/media-planning/media-plan/) for plan dimensions and flowchart limits.
- [Gaas forecast template](https://trygaas.com/templates/ppc-budget-forecast-template) for assumptions and missing-input visibility.
- [Supermetrics budget pacing](https://supermetrics.com/template-gallery/google-sheets-budget-pacing-channel-level) for reconciliation views; set client-specific thresholds.
- [Google Reach Planner](https://support.google.com/google-ads/answer/9427120) for awareness measures and forecast limits.
- [Sheets value input](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) and [format guide](https://developers.google.com/workspace/sheets/api/guides/formats) for parsing and locale checks.
