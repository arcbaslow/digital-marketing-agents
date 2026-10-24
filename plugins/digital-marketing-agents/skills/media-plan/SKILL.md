---
name: media-plan
description: "Create or revise a paid media plan in Google Sheets that a client approves and finance reconciles. Use for медиаплан, media budget, budget split, channel allocation, flighting, monthly plan or plan vs actual, even when the request sounds like a simple spend table."
argument-hint: "[client] [period] [budget and currency]"
---

If `~/.claude/overlays/media-plan.md` exists, read it before starting: it holds client finance rules (VAT, fee and FX basis), benchmark sources, file naming and the document register, Drive folders and known traps. If a named source is missing, identify the gap before treating its values as approved.

Build one approval view and one calculation model that finance can reconcile without rebuilding it.

## Read first

- Read the brief, approved budget, product targets, prior plan and finance's tax and fee basis.
- Read `references/workbook.md` before designing the workbook or importing actuals.
- Read `references/review.md` before approval review and when defining KPIs for non-media readers.
- Use `assets/workbook.en.md` or `assets/workbook.ru.md` for matching headers and cell formulas.
- Read `google-workspace` before the first Google connector call; it owns workbook file mechanics.
- If the skill or a required connector is unavailable, prepare the model specification and name the missing route.

## Method

1. Define what is being approved.
   Confirm period, currency, budget ceiling, products, objectives, target KPIs and budget owner.
   Record version, status, approver and sign-off date; distinguish approved from proposed values.

2. Fix the financial basis before forecasting.
   Confirm VAT treatment, agency fee base, FX direction and source, and costs outside working media.
   Store each rate once with its effective date; do not infer tax treatment from a platform name.

3. Register assumptions.
   Give every benchmark metric a value, unit, channel/product scope, source, period, date and confidence.
   Mark missing inputs as missing; never make a zero forecast look like evidence of no demand.

4. Build the row model in Plan.
   Use one row per channel x product x format per month and buying model, with a stable Line ID.
   Use Line ID plus month as the reconciliation key and preserve that key in campaign mapping.

5. Calculate budgets, performance and business outcomes.
   Keep budget net and gross, then the performance block, then the business block in the same columns.
   Branch CPM and CPC buying correctly; use reach, frequency and CPM for awareness lines.

6. Build the approval screen from formulas.
   Show period, net, fees, VAT, gross, channel split, targets and assumption date on Summary.
   Explain what is forecast, what is approved and what decision the client needs to make.

7. Lay out flights against the same rows.
   Use Monday dates across Flowchart and fill active weeks; allocate spend, not just coloured boxes.
   Check that weekly amounts reconcile to each Plan line and the whole approved budget.

8. Add monthly views and reconciliation.
   Keep one named monthly tab per month, linked to Plan rather than independently maintained.
   Copy row keys and planned columns to Plan vs actual, then add actuals, variances and percent used.

9. Review scenarios and trade-offs.
   Change only registered assumptions for conservative, expected and aggressive cases when useful.
   Keep reforecast separate from the approved Plan; log budget changes with reason and approver.

10. Inspect and hand off.
    Recalculate and check totals, empty rows, the formula branches and the approval view.
    Record the approved version in Changes and the client's document register when available.

## Rules

- Keep the first tabs in this order: Summary, Plan, Flowchart, Assumptions, Plan vs actual, Glossary, Changes.
- Translate tab names into the client's working language; keep the order and formula references consistent.
- Append named monthly tabs after Changes; do not leave default or unexplained tabs.
- Use one column structure across channels; never merge header cells over data rows or merge data cells.
- Keep inputs blue, same-sheet formulas black and cross-sheet links green; show a legend on Summary.
- Add a light input fill so readers can identify editable cells in greyscale.
- Calculate gross as net x (1 + VAT) x (1 + fee) under the agreed fee and VAT basis.
- If the invoice basis differs, reconcile it explicitly with finance instead of silently changing the formula.
- Show agency fee and VAT amounts separately so the gross total can be reconciled.
- Put global rates in Assumptions; formulas link to cells instead of hiding constants.
- Guard division with `IF(denominator=0, 0, ...)`; do not hide errors with `IFERROR`.
- Use a readiness status to distinguish a guarded zero from a genuine zero forecast.
- Use formulas for every total and ratio; compute aggregate ratios from aggregate numerators and denominators.
- Use one base-currency money format per tab; label and format the separate USD column explicitly.
- Use one dated FX cell, defined as base-currency units per USD, and disclose which budget is converted.
- Round by display format, not intermediate formulas; state periods, units and attribution windows.
- Never sum reach across channels; show the overlap model or leave combined reach unavailable.
- Keep actuals on the same period, time zone, attribution model and financial basis as Plan.
- Calculate percent used from actual spend over approved spend on the same net or gross basis.
- Preserve the approved baseline; append change records rather than overwriting approval history.
- Protect formula ranges through the authorised workspace workflow; protection does not replace access control.
- Keep source exports intact if a Raw tab is needed; map them to Line ID and month explicitly.

## Build

1. Read `google-workspace` before any connector call and follow its file and permission workflow.
   Use the overlay's folder, naming convention and language; create the seven core tabs first.
   Apply the matching asset specification before adding monthly views or raw source tabs.

2. Test one formula and read it back before writing the model.
   Formula separator behaviour through connectors is unverified; do not assert a locale rule.
   Both write tools parse like the Sheets UI, so send formulas as formulas and guard date-like or numeric text.

3. Apply formatting using numeric sheet IDs and 0-based, end-exclusive ranges.
   Freeze headers and key columns; use validation lists, notes for methods and comments for approval questions.
   Build any charts with `addChart` in the sheet and keep Summary readable on one screen.

4. Recalculate and inspect the workbook, not just the write response.
   Check formulas, formats, totals, missing-input statuses, weekly allocations and monthly views.
   Test the requested print or export view when finance will use it; keep column headers visible.

## Before sending

- [ ] Summary shows period, net and gross, fees, VAT, channel split, target KPIs and assumption date.
- [ ] Status, owner, approver, sign-off date and required approval decision are visible.
- [ ] All benchmarks, VAT, fee, FX and conversion assumptions have sources, dates and owners.
- [ ] Budget, performance and business blocks use matching columns on every row and monthly tab.
- [ ] CPM, CPC and awareness branches behave correctly, including zero-denominator and missing-input cases.
- [ ] No merged data cells, typed totals, stray default tabs, parse errors or inconsistent money formats remain.
- [ ] Inputs, formulas and cross-sheet links follow the legend and formula protections are appropriate.
- [ ] Flowchart weekly totals equal Plan by row and in total, including partial weeks and flights.
- [ ] Monthly tabs reconcile to Plan and do not create a second source of approved inputs.
- [ ] Plan vs actual preserves keys, uses comparable actuals and includes absolute and relative variance.
- [ ] Percent used, comments, causes and actions are visible; absent actuals are marked as pending.
- [ ] Glossary defines finance-facing KPIs, their formulas, units and number owners.
- [ ] Approved Plan and reforecast are distinct; Changes records who changed what and why.
- [ ] Complete the applicable reviewer workflow and resolve blocking findings before client handoff.

## Output

Deliver the Google Sheets link in the client's working language and the requested inspected export.
File the workbook in the authorised folder and record its version and approval status in the document register.
Name any unfinished filing step if that register is unavailable.

Accompany the file with three short lines in chat:
- State the period, net and gross budget, currency and forecast status.
- State the split or KPI decision requested, its owner and approval date.
- State uncertain assumptions, excluded costs or actuals still awaiting reconciliation.
