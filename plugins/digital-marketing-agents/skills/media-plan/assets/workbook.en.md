# Media plan workbook

Use the following tab order and cell map. Replace angle-bracket placeholders with approved values. Formulas use English function names with commas between arguments; the connectors parse them in the spreadsheet's locale, so in a comma-decimal locale such as ru_RU write every separator as `;` (a comma formula is stored as `#ERROR!`, and a later locale change does not repair it). Read the file's `properties.locale` before the first formula: files created through the API start in en_US. Tested 25.10.2026 in a ru_RU file: every formula below computes with `;`. Translate status literals only with the matching formulas and validation lists. Dates are real date values, not date-looking text; preserve Line IDs as text. Format the date columns of Flowchart and Plan vs actual as dates, because keyed lookups return serial numbers.

## 1. Summary

| Cell/area | Header | Value or formula |
| --- | --- | --- |
| B2 | Period | <start and end dates> |
| B3 | Currency | ='Assumptions'!B6 |
| B4 | Net media | =SUM('Plan'!J2:J) |
| B5 | Agency fee | =SUM('Plan'!M2:M) |
| B6 | VAT | =SUM('Plan'!N2:N) |
| B7 | Gross budget | =SUM('Plan'!O2:O) |
| B8 | Gross budget, USD | =SUM('Plan'!Q2:Q) |
| B9 | Assumptions as of | ='Assumptions'!B5 |
| D2:E6 | Version / Status / Owner / Approver / Sign-off date | <version / status / roles / date> |
| D8:E9 | Forecast limits / Other costs | <uncertainties, included and excluded costs> |
| A12:C<last channel row> | Channel / Net budget / Gross budget | Channel list; =SUMIF('Plan'!E$2:E,A13,'Plan'!J$2:J); =SUMIF('Plan'!E$2:E,A13,'Plan'!O$2:O) in first data row |
| E12:G<last target row> | KPI / Target / Basis and owner | <agreed targets, period, unit, forecast or commitment, source owner> |
| A<month start>:C<month end> | Month / Net budget / Gross budget | Month dates; SUMIF on Plan B against J and O |
| E<legend start>:F<legend end> | Cell role / Meaning | Blue input, black same-sheet formula, green cross-sheet link; light input fill |

Keep this view on one screen. Display money as whole values, rates as one decimal and dates consistently. Currency headings use <base currency>; the USD column is explicitly separate. Show forecast does not guarantee results and state the approval decision.

## 2. Plan

Row 1 is a single unmerged header row. Data starts in row 2. Repeat formulas downward. Each row names its benchmark set in AE (a blue input key) and R, S, T, W, Z and AD look that key up in Assumptions, so sorting or inserting rows on either tab breaks nothing. Validate objective as Performance or Awareness, and buying model as CPM or CPC; awareness uses CPM.

| Col | Header | Input or row 2 formula |
| --- | --- | --- |
| A | Line ID | <stable text key> |
| B | Month | <first date of month> |
| C | Start date | <date within month> |
| D | End date | <date within month, not before start> |
| E | Channel | <channel> |
| F | Product | <product> |
| G | Format | <format> |
| H | Objective | <Performance or Awareness> |
| I | Buying model | <CPM or CPC> |
| J | Net budget, <base currency> | <approved net media input> |
| K | VAT rate | ='Assumptions'!$B$2 |
| L | Agency fee rate | ='Assumptions'!$B$3 |
| M | Agency fee, <base currency> | =IF(A2="","",J2*L2) |
| N | VAT, <base currency> | =IF(A2="","",(J2+M2)*K2) |
| O | Gross budget, <base currency> | =IF(A2="","",J2*(1+K2)*(1+L2)) |
| P | FX, <base currency>/USD | ='Assumptions'!$B$4 |
| Q | Gross budget, USD | =IF(A2="","",IF(P2=0,0,O2/P2)) |
| R | Assumed CPM, <base currency> | =IF($AE2="","",INDEX('Assumptions'!$E$14:$E,MATCH($AE2,'Assumptions'!$A$14:$A,0))) |
| S | Assumed CPC, <base currency> | =IF($AE2="","",INDEX('Assumptions'!$F$14:$F,MATCH($AE2,'Assumptions'!$A$14:$A,0))) |
| T | Assumed CTR | =IF(OR(H2="Awareness",$AE2=""),"",INDEX('Assumptions'!$G$14:$G,MATCH($AE2,'Assumptions'!$A$14:$A,0))) |
| U | Impressions | =IF(A2="","",IF(I2="CPC",IF(OR(N(S2)=0,N(T2)=0),0,J2/N(S2)/N(T2)),IF(N(R2)=0,0,J2/N(R2)*1000))) |
| V | Clicks | =IF(A2="","",IF(H2="Awareness","",IF(I2="CPC",IF(N(S2)=0,0,J2/N(S2)),U2*N(T2)))) |
| W | CR to lead | =IF(OR(H2="Awareness",$AE2=""),"",INDEX('Assumptions'!$H$14:$H,MATCH($AE2,'Assumptions'!$A$14:$A,0))) |
| X | Leads | =IF(A2="","",IF(H2="Awareness","",N(V2)*N(W2))) |
| Y | CPL, <base currency> net | =IF(A2="","",IF(H2="Awareness","",IF(X2=0,0,J2/X2))) |
| Z | CR to sale | =IF(OR(H2="Awareness",$AE2=""),"",INDEX('Assumptions'!$I$14:$I,MATCH($AE2,'Assumptions'!$A$14:$A,0))) |
| AA | Issued or sold | =IF(A2="","",IF(H2="Awareness","",N(X2)*N(Z2))) |
| AB | CPS, <base currency> net | =IF(A2="","",IF(H2="Awareness","",IF(AA2=0,0,J2/AA2))) |
| AC | Reach, people | =IF(A2="","",IF(H2="Awareness",IF(N(AD2)=0,0,U2/N(AD2)),"")) |
| AD | Frequency | =IF(AND(H2="Awareness",$AE2<>""),INDEX('Assumptions'!$J$14:$J,MATCH($AE2,'Assumptions'!$A$14:$A,0)),"") |
| AE | Assumption set | <key from Assumptions column A, blue input> |
| AF | Readiness | Use formula below, translated with status literals if needed |

```gs
=IF(A2="","",IF(OR($AE2="",ISNA(MATCH($AE2,'Assumptions'!$A$14:$A,0))),"No assumption set",IF(OR(J2="",'Assumptions'!$B$2="",'Assumptions'!$B$3="",P2=0,INDEX('Assumptions'!$N$14:$N,MATCH($AE2,'Assumptions'!$A$14:$A,0))<>"Approved",AND(I2="CPM",N(R2)=0),AND(I2="CPC",N(S2)=0),AND(H2="Performance",OR(N(T2)=0,ISBLANK(INDEX('Assumptions'!$H$14:$H,MATCH($AE2,'Assumptions'!$A$14:$A,0))),ISBLANK(INDEX('Assumptions'!$I$14:$I,MATCH($AE2,'Assumptions'!$A$14:$A,0))))),AND(H2="Awareness",N(AD2)=0),AND(H2="Awareness",I2="CPC")),"Missing assumptions","Ready")))
```

Budget block is J:Q, performance is R:V, business is W:AB, and awareness measures are AC:AD. No division is hidden with IFERROR. Guarded zeros are not valid forecasts until AF is Ready. Show missing rows in Summary; do not submit a complete-looking forecast while any required line is incomplete.

For totals use SUM on additive columns. Calculate aggregate performance CTR as SUM(V) / SUM(U) over Performance rows only, guarded by IF. Calculate aggregate CPL as performance net / total leads and CPS as performance net / total sales, with guarded denominators. Do not sum AC across channels or average Y/AB. Keep total rows outside the filtered data range or on Summary.

## 3. Flowchart

| Col/row | Header | Value or formula |
| --- | --- | --- |
| A:E, row 2 onward | Line ID / Month / Start / End / Net budget | A:B from the key list; C:E keyed lookups, for C: =IF($A2="","",INDEX(FILTER('Plan'!C$2:C,'Plan'!$A$2:$A=$A2,'Plan'!$B$2:$B=$B2),1)), copied to D (Plan D) and, with the return column changed to J, to E (Plan J); #N/A means the key is missing in Plan |
| F1 onward | Week starting <Monday date> | Real Monday dates; subsequent header =F1+7 |
| F2 onward | Weekly net spend | Formula below for uniform daily allocation |
| After last week | Allocated / Difference | =SUM(F2:<last week cell>); =<allocated cell>-E2 |
| Below data | Weekly total / Overall difference | SUM each week; sum of row differences |
| Below totals | Events | <launch / creative rotation / end, with detail in notes> |

```gs
=IF($A2="","",IF($D2-$C2+1=0,0,$E2*MAX(0,MIN($D2,F$1+6)-MAX($C2,F$1)+1)/($D2-$C2+1)))
```

Validate D >= C before calculation. Include every intersecting week, including partial weeks. For flighting or pulsing replace equal daily allocation with approved weekly inputs and keep the same total checks. Fill cells with spend > 0; a one-hue scale can show intensity. Differences must be within the tolerance in Assumptions B9.

## 4. Assumptions

| Cell | Header | Input |
| --- | --- | --- |
| B2 | VAT rate | <approved rate and treatment> |
| B3 | Agency fee rate | <approved fee on net> |
| B4 | FX, <base currency>/USD | <dated rate> |
| B5 | Assumptions as of | <date> |
| B6 | Base currency | <currency> |
| B7 | Time zone | <zone> |
| B8 | Attribution model/window | <model and window> |
| B9 | Reconciliation tolerance, <base currency> | <approved tolerance> |

For B2:B9 put source, effective period, checked date, owner and approval status in adjacent labelled columns or cell notes. Do not use an unverified tax rate or FX source.

Row 13 headers, A:N: Assumption set | Channel/product/format scope | Source period | Checked date | CPM | CPC | CTR | CR to lead | CR to sale | Frequency | Source | Confidence | Owner | Approval status.

Row 14 onward: <key>, <scope>, <period>, <date>, <values or blanks>, <source link>, <confidence>, <role>, <Draft or Approved>. Each metric cell needs its own source, period, date and unit in a note if they differ from the row's source. Approval applies to all required metrics in that set. Keep validation lists in a separate labelled range. Do not substitute zero for a missing benchmark.

## 5. Plan vs actual

Keep A:AF with the same headers and planned values as Plan. Populate A:B from the canonical key list. For C:AF use keyed lookups, not positional links that break on sorting. Example for J2, copied across with the return column adjusted:

```gs
=IF($A2="","",IF(COUNTIFS('Plan'!$A$2:$A,$A2,'Plan'!$B$2:$B,$B2)=0,"Missing plan key",INDEX(FILTER('Plan'!J$2:J,'Plan'!$A$2:$A=$A2,'Plan'!$B$2:$B=$B2),1)))
```

Validate unique A+B pairs before the lookup. Append the following columns; collect actual inputs from a reconciled export mapped by the same key. Mark pending actuals with status, not a silent zero. Actual cost metrics below use net media.

| Col | Header | Input or row 2 formula |
| --- | --- | --- |
| AG | Actual net, <base currency> | <reconciled actual> |
| AH | Actual fee, <base currency> | <reconciled fee> |
| AI | Actual VAT, <base currency> | <reconciled VAT> |
| AJ | Actual gross, <base currency> | =IF(AX2<>"Reconciled","",SUM(AG2:AI2)) |
| AK | Actual impressions | <actual> |
| AL | Actual clicks | <actual or blank if inapplicable> |
| AM | Actual leads | <actual or blank if inapplicable> |
| AN | Actual issued or sold | <actual or blank if inapplicable> |
| AO | Actual CTR | =IF(AX2<>"Reconciled","",IF(H2="Awareness","",IF(AK2=0,0,AL2/AK2))) |
| AP | Actual CPL, <base currency> net | =IF(AX2<>"Reconciled","",IF(H2="Awareness","",IF(AM2=0,0,AG2/AM2))) |
| AQ | Actual CPS, <base currency> net | =IF(AX2<>"Reconciled","",IF(H2="Awareness","",IF(AN2=0,0,AG2/AN2))) |
| AR | Net variance, <base currency> | =IF(AX2<>"Reconciled","",AG2-J2) |
| AS | Net variance, % | =IF(AX2<>"Reconciled","",IF(J2=0,0,(AG2-J2)/J2)) |
| AT | Percent used, net | =IF(AX2<>"Reconciled","",IF(J2=0,0,AG2/J2)) |
| AU | Lead variance, count | =IF(AX2<>"Reconciled","",IF(H2="Awareness","",AM2-X2)) |
| AV | Lead variance, % | =IF(AX2<>"Reconciled","",IF(H2="Awareness","",IF(X2=0,0,(AM2-X2)/X2))) |
| AW | Pacing status | =IF(AX2<>"Reconciled","Pending actuals",IF(AND(J2=0,AG2<>0),"Unplanned spend","Compare with approved thresholds")) |
| AX | Actuals status | <Pending or Reconciled> |
| AY | Comment | <one-line explanation> |
| AZ | Cause | <confirmed / suspected / unknown and evidence> |
| BA | Action | <action, owner and date> |

Append sold or other KPI variance pairs when they govern approval; keep the same absolute/relative formula pattern. Actual spend on zero plan is flagged in AW even when AS/AT are guarded to zero. Put thresholds in Assumptions if automated pacing bands are required.

## 6. Glossary

Columns: Term | Plain meaning | Formula | Unit | Number owner | Basis and caveat. Populate using `references/review.md`, including net/gross, VAT, FX, reach, frequency, CPM, CTR, CPC, CR, CPL, issued/sold, CPS, variance and percent used. Define the actual lead and sale statuses used by the client.

## 7. Changes

Columns: Date | Who | What changed | Why | Approver | Net/gross delta | Version/status. Record approval and every later change. Keep the approved baseline and reforecast identifiable; do not rewrite the approval record.

## Monthly tabs and optional source tabs

Append `Plan <YYYY-MM>` per month, preserving Plan A:AF. Put the month date in AH1 and row 1 headers from Plan. In A2 use the following view formula, with the month value stored as a real date:

```gs
=IF(COUNTIF('Plan'!B2:B,$AH$1)=0,"No planned rows",FILTER('Plan'!A2:AF,'Plan'!B2:B=$AH$1))
```

Protect the view from manual edits. Optional `Raw <source period>` tabs keep exports unchanged with source/refresh notes. Optional Reforecast uses the same keys and columns and names the approved baseline version it compares with. Summary always totals Plan, not its duplicate monthly views.
