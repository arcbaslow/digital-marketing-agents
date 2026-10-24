# Approval and reconciliation review

## Read it as finance

Summary must answer what period and currency this covers, what cash amount is approved, what working media buys, what is forecast and who signs off. Show net, agency fee, VAT and gross together. Label USD as a conversion at a dated rate, not a second budget. Show target KPIs beside spend and state that forecasts are estimates, not guarantees.

Use units in headers and one money format per base-currency column. Format money and counts as whole displayed values, rates with one decimal, and dates consistently with the working language. Keep precise model values underneath. Put version, status, owner, approver, sign-off date and assumptions-as-of date in the visible approval area. Avoid an approval screen that requires horizontal scrolling.

The colour legend belongs on Summary: blue input, black formula, green cross-sheet link. Use a light input fill as a second cue. A formula linked to another sheet takes the green role even if it also calculates. Colour roles describe behaviour, not client branding.

## Checks before approval

- Recompute fee, VAT and gross from the documented basis and reconcile any invoice differences.
- Tie each channel subtotal, monthly view and Summary total back to Plan using formulas.
- Tie every weekly allocation to its row budget and the grand total; inspect first and last partial weeks.
- Exercise CPM, CPC and awareness lines, empty lines, zero denominators and missing benchmarks.
- Verify readiness status does not present guarded zeros as complete forecasts.
- Check weighted aggregate CTR, conversion rates, CPL and CPS; never average the ratios.
- Reconcile actual mappings, duplicate row keys, unmapped rows and source totals before comparing performance.
- Inspect percent used and variance signs, including zero-plan actual spend and pending actuals.
- Check tax basis, period, FX, time zone and attribution model are comparable on both sides.
- Confirm approved inputs are frozen, reforecast is separate and Changes records the approver and delta.

## KPI glossary for finance and procurement

Copy these definitions into Glossary in the client's language, adding the actual number owner and business definition. Use net media for cost KPIs unless another basis is explicitly approved.

| Term | Plain meaning | Formula | Unit and caveat |
| --- | --- | --- | --- |
| Net media budget | Money available to buy placements before fee and VAT | Input | Base currency; separate production costs |
| Agency fee | Charge for the agreed agency service | net x fee rate | Base currency; confirm contract basis |
| VAT | Tax provision under the approved planning treatment | (net + fee) x VAT rate | Base currency; verify invoice/self-assessment treatment |
| Gross budget | Total planning amount including fee and VAT | net x (1 + VAT) x (1 + fee) | Base currency; reconcile other costs separately |
| FX | Base-currency units per one USD | Dated source input | Base currency/USD; name source and owner |
| Impressions | Times an ad was served, not unique people | net / CPM x 1000 for CPM buys | Count in stated period |
| Reach | Estimated distinct people reached | impressions / frequency for awareness planning | People; do not sum across channels |
| Frequency | Average impressions per reached person | impressions / reach | Times per person; plan input for awareness |
| CPM | Cost of one thousand impressions | net / impressions x 1000 | Currency/1000 impressions |
| Clicks | Measured ad interactions under the platform's click definition | impressions x CTR or net / CPC | Count; name click type |
| CPC | Cost per click | net / clicks | Currency/click |
| CTR | Share of impressions that generate a click | clicks / impressions | Percent; not a conversion rate |
| CR to lead | Share of clicks producing the defined lead | leads / clicks | Percent; define unique lead and attribution |
| Leads | Applications or contacts meeting the agreed lead definition | clicks x CR to lead | Count; not necessarily approved or issued |
| CPL | Cost per defined lead | net / leads | Currency/lead; state gross if used instead |
| CR to sale | Share of leads reaching issued or sold status | sales / leads | Percent; define status, lag and reversals |
| Issued or sold | Completed business outcome, with cancellations handled as agreed | leads x CR to sale | Count; reconcile with the business source |
| CPS | Cost per issued or sold outcome | net / sales | Currency/outcome |
| Absolute variance | Actual minus approved plan | actual - plan | Same unit as compared metric |
| Relative variance | Difference as a share of plan | IF(plan=0, 0, (actual-plan)/plan) | Percent; flag zero-plan cases separately |
| Percent used | Share of approved spend consumed | IF(plan spend=0, 0, actual spend/plan spend) | Percent; same net/gross basis on both sides |

Add one owner per number, typically the source or finance role, rather than an unassigned team. Define CPA or ROAS only if used; state exactly what action or revenue basis their denominator represents. Do not introduce awareness rating measures that the client does not need.

## Anti-patterns

- Merged headers over data, merged data cells and incompatible layouts between plan and fact.
- Typed totals, copied assumptions hidden in formulas, round forecasts without supporting benchmarks.
- Three currency formats in one tab or a USD column without a dated FX basis.
- `#DIV/0!`, blanket `IFERROR`, or missing inputs represented as a complete zero forecast.
- Default-named tabs, duplicate monthly inputs and double-counted monthly views in Summary.
- Summed reach, averaged CPL or rates, or percent used on mismatched gross and net budgets.
- A coloured flight grid with no allocation amounts or check that it ties to the budget.
- Unexplained pacing thresholds, attribution mismatches or reforecast overwriting the approved baseline.
- An actuals total that matches only because unmapped campaigns were dropped.
- A forecast presented as a guarantee or a tax treatment inferred from a vendor article.

## Sources

- [ICAEW spreadsheet principles](https://www.icaew.com/technical/technology/excel-community/20-principles-for-good-spreadsheet-practice-2024-edition) for auditability.
- [CFI model formatting](https://corporatefinanceinstitute.com/resources/excel/cool-excel-spreadsheets/) for the adopted input and formula convention; colour schemes vary across practitioners.
- [Google Reach Planner](https://support.google.com/google-ads/answer/9427120) for awareness definitions and forecast caveats.
- [Supermetrics pacing](https://supermetrics.com/blog/diy-budget-pacing-reports) and [kokoc media planning](https://kokoc.com/blog/mediaplan-chto-eto-takoe/) for pacing and financial reconciliation examples.
