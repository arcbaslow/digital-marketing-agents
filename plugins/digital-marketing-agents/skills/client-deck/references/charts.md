# Evidence and visual rules

## Choose by the reader's question

| Question | Form | Check |
| --- | --- | --- |
| What changed over enough periods? | Line chart | Show gaps, period and forecast distinction |
| Which channel or product is larger? | Ordered horizontal bars | Start at zero and label values directly |
| Which month drove the change? | Simple month-by-month panels | Same scale, one highlighted bar per panel |
| How does the mix differ? | Stacked bars | Few segments, touching edges, outer corners only rounded |
| How far from plan? | Diverging bar or a single target comparison | Define positive/negative meaning and plan basis |
| Where does the funnel lose volume? | Stage-ordered horizontal bars | Label counts and step conversion; do not use decorative funnel area |
| What are the exact values? | Table | Units in headers, aligned precision and right-aligned numbers |
| Is the base too small? | Counts/table plus "not enough data" | Do not draw a trend from three points |

Prefer a few simple monthly panels to one dense multi-week chart with competing panels. This reflects the consultant's client feedback, not a universal charting theorem. Keep identical scales for the same metric across comparable panels. Bars start at zero. If a line uses a restricted range, show the range clearly and explain any axis break.

Use a pie only when part-to-whole matters, there are at most five categories and one slice dominates; otherwise prefer bars. Split crowded charts rather than adding a second axis. Four lines or stacked segments is a useful complexity check, not a quota to fill.

## Labels and numbers

State the claim in the slide title. Put a neutral chart subtitle with measure, unit and period above the evidence. Under every chart put `Source: <source>, <period>, <unit>` plus the filter, attribution or definition caveat needed to interpret it. A chart image must retain its source line in export.

Label series directly at bar or line ends where possible. Use a legend only when direct labels become ambiguous. Use thousands separators and one decimal in chart labels, with locale-appropriate separators. Keep exact money and integer counts in supporting tables when needed; decimal display precision does not imply fractional people. Keep rounding consistent and disclose a rounding difference if totals appear not to foot.

State absolute and relative change with the base: `<current value>, <absolute change> and <relative change> vs <base period> (<base value>)`. For rates use percentage points for the absolute difference. A zero base makes relative change undefined; say so instead of showing an invented percentage. Do not compare month lengths, cohorts or windows without explaining the basis.

## Colour and geometry

Choose the client's palette for client-brand work or the house palette from the overlay otherwise. Give one dominant accent to the claim and quiet grey to comparisons. Keep a stable channel-colour map across the whole deck; when a named channel is highlighted, retain its assigned colour rather than recolouring it arbitrarily. If several channels need highlighting, split panels or use neutral comparisons rather than conflicting colour meanings.

Use background, ink, accent and neutral roles consistently. Use red/green only with a sign, arrow or text so colour is not the only cue. "Other" and "no data" can share a neutral family but need distinct text labels. Avoid gradients, 3D, shadows and heavy grids that compete with the evidence.

Stacked bar segments touch without internal gaps or rounded inner corners. Round only the whole stack's outside corners, using a mask/container if necessary. Keep a zero baseline and align chart edges. Make direct labels legible against their backgrounds. Do not use a legend as a substitute for stating what matters.

## Sparse data and uncertainty

Keep missing observations visibly missing. Do not connect across gaps as if data existed. Use dashed lines only for estimates or forecasts and label them. Write the sample size and limitation on the slide; small samples often need counts rather than percentages. Do not describe three points as a trend or smooth them into a confident curve.

A decline needs size, period and cause status. Show confirmed causes separately from suspected and unknown causes. When sources disagree, name the preliminary source chosen and the discrepancy, or omit the figure until reconciled. A hidden footnote cannot repair a misleading title.

## Tables and reading size

Use a table for exact lookup or mixed units. Keep column units explicit, row labels short, numbers aligned and only a few rules. Highlight one row or column rather than every good/bad cell. Split wide or tall tables into meaningful groups and keep full detail in the appendix.

Test at laptop viewing size and in the requested export. For a new Figma style source, the route reference offers a starting type scale and grid, not an evidence-based universal floor. For Google Slides, use the existing master and split content when it does not fit. Never shrink everything to make a dense chart pass.

## Sources

- [FT Visual Vocabulary](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary) for chart choice.
- [UK Analysis Function chart guidance](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) and [writing about data](https://analysisfunction.civilservice.gov.uk/policy-store/writing-about-data/) for labels, sources and tables.
- [Datawrapper text](https://www.datawrapper.de/blog/text-in-data-visualizations), [colour roles](https://www.datawrapper.de/blog/colors-for-data-vis-style-guides) and [patchy data](https://www.datawrapper.de/academy/patchy-data) for direct labels and missingness.
- [Storytelling with Data bars](https://www.storytellingwithdata.com/blog/2020/2/19/what-is-a-bar-chart) for bar baselines.
