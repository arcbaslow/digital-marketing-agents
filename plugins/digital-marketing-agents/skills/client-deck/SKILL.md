---
name: client-deck
description: "Build or revise a corporate client report, audit readout or proposal deck for reading with or without a presenter, in Google Slides or Figma Slides. Use for monthly report deck, board deck, client presentation, отчётная презентация, proposal slides or Figma Slides, including when an analysis needs a decision-ready readout."
argument-hint: "[client] [report, audit or proposal] [tool]"
---

If `~/.claude/overlays/client-deck.md` exists, read it before starting: it holds house palette and font, client palettes, standing slide format and house tool default, file naming and the document register, Drive folders, style-source decks and known traps. If a named source is missing, identify the gap instead of inventing its style or figures.

Make the titles tell the argument and the evidence prove it for a reader who has no presenter.

## Read first

- Read the brief, previous deck, source sheets or exports, decisions and client's reporting rules.
- Read `references/storyline.md` before writing titles and `references/charts.md` before choosing evidence.
- Use `assets/storyboard.en.md` or `assets/storyboard.ru.md` for the required report, audit or proposal spine.
- Choose the tool by the user's instruction, then the client's standing format, then the overlay's house default.
- Read `references/google-slides.md` for Google Slides or `references/figma-slides.md` for Figma Slides.
- Read `google-workspace` before the first Google connector call, including source-sheet reads.
- For Figma, call `create_session` with the file key first and read `figma-use` before `use_figma`.
- If the required skill or route is unavailable, prepare the storyboard and name the missing build dependency.

## Method

1. Define the reader and decision.
   Name who receives the deck, what they need to decide and what they already know.
   Confirm working language, period, read-ahead use, brand, file format and approval date.

2. Reconcile every figure before building.
   Trace each value to the source sheet or export, with metric definition, unit and period.
   Recompute changes, totals and ratios; resolve discrepancies before repeating a figure on slides.

3. Write the titles-only storyboard.
   Start with title and executive summary, then sections that prove the argument, asks and appendix.
   Read titles in order; remove any slide whose message does not advance the decision.

4. Write the executive summary as the decision in miniature.
   State what happened, why and what the client is asked to decide, in the later slides' order.
   Name material misses and uncertainty here as well as on the relevant evidence slides.

5. Choose evidence for each claim.
   Use a chart for a pattern, a table for exact lookup and a short explanation for implications.
   Prefer simple month-by-month panels with one highlighted bar over a dense multi-week chart.

6. Choose the palette and style source.
   Use the client's palette for a client-branded deck; otherwise use the overlay's house palette.
   Keep one dominant accent and stable channel colours; copy established slide layouts.

7. Draft the reader-facing takeaways.
   State what the evidence supports and its implication in two or three short lines beside the chart.
   Put decisions, definitions and material caveats on slides, not only in speaker notes.

8. Write asks and notes.
   Give each requested action an owner and date; repeat the essential asks in the executive summary.
   Add likely objections, concise answers and backup slide references to speaker notes.

9. Build in the chosen tool.
   Follow only the selected route reference; use the source deck as the style source.
   Inspect each batch for clipping, overlap, inconsistent labels and source-line legibility.

10. Reconcile and review the final deck.
    Compare rendered figures to the evidence register and repeated figures across slides.
    Inspect the requested export and client-facing copy before filing and handoff.

## Rules

- Put one message on each slide, stated as an active sentence in its title.
- Aim below fifteen words and no more than two title lines; split the slide rather than shrinking the title.
- Include a number and comparison when the evidence supports them; never invent precision to strengthen a title.
- Keep section dividers brief; they orient the reader rather than carry an unsupported claim.
- Put evidence under the title and a source line under every chart with source, period and unit.
- Spell out acronyms on first use; a CFO should not need an analytics glossary to understand the ask.
- State not done as not done; distinguish completed work from plans and configured work from live evidence.
- State a decline with its size, period and known cause; separate confirmed, suspected and unknown causes.
- Label unverified or preliminary numbers visibly or leave them out.
- Show absolute and relative change with the base period; use percentage points for changes in rates.
- Use thousands separators and one decimal in chart labels; retain exact values in supporting tables.
- Use one highlighted series against grey comparisons, with direct labels where possible.
- Keep the same colour for the same channel throughout; a highlighted channel keeps its assigned colour.
- Make stacked bar segments touch and round only the outside corners of the whole stack.
- Use the same scale in comparable panels; do not truncate bar axes.
- Say "not enough data" on the slide instead of drawing a trend chart from three points.
- Never sum channel reach or compare attribution windows without a stated basis.
- Keep charts and titles readable on a laptop and test the actual export at normal viewing size.
- Keep essential caveats on the slide; notes hold objections and backup, not hidden qualifications.
- Do not use mono uppercase wide-tracked eyebrow labels, decorative icon triplets or stock imagery without a purpose.
- Keep appendix detail available to read without forcing it through the main narrative.
- Keep internal objection notes out of a client-facing copy unless explicitly intended for that audience.

## Build

1. Use Google Slides when the user names it or the standing format requires it.
   Read `references/google-slides.md` and `google-workspace` before connector calls.
   Copy the template, use master layouts, and put any chart in a Sheet before embedding it.

2. Use Figma Slides when the user names it or the selected standing or house format uses it.
   Read `references/figma-slides.md`, call `create_session` with the file key and read `figma-use` before `use_figma`.
   Copy slides from one style-source deck and build with plugin API scripts on 1920 x 1080 slides.

3. Apply fonts and images through the selected route's supported mechanics.
   Verify the chosen font, Cyrillic where needed and the final export; do not assume font availability.
   Keep fixed vertical offsets in Figma text layout instead of reading height immediately after resizing.

4. Inspect the final native deck and requested PDF or editable export.
   Check titles, source lines, charts, fonts, tables, page boundaries, slide order and speaker notes.
   Produce a client-facing copy when the working file contains internal notes or unapproved material.

## Before sending

- [ ] Every displayed figure reconciles to a source sheet or export on the same definition, unit and period.
- [ ] Repeated figures match, totals foot and changes use the stated base period.
- [ ] Slide 2 says what happened, why and what decision is needed, including material bad news.
- [ ] Titles alone tell the story; every slide body proves its title and contains one message.
- [ ] Charts have source, period and unit; direct labels, scales and number formats are consistent.
- [ ] Simple panels replace dense multi-week views where they improve reading; sparse data is labelled.
- [ ] Colour roles are consistent, comparison series are quiet and stacked segments touch.
- [ ] Not done, declines, uncertainty and suspected causes are described accurately and visibly.
- [ ] The asks name owners and dates; appendix and likely-objection notes are complete.
- [ ] The selected tool route follows workspace or Figma session and skill prerequisites.
- [ ] Fonts, Cyrillic, source lines, tables and images survive the inspected export without clipping.
- [ ] The client-facing file contains only intended notes, links, hidden slides and source access.
- [ ] File name, folder, version and document-register entry match the client's convention.
- [ ] Complete the applicable reviewer workflow and resolve blocking findings before client handoff.

## Output

Deliver the Google Slides or Figma Slides file and the requested inspected export in the client's working language.
Use a client-safe copy or PDF when the working deck contains internal notes; identify which file is for forwarding.
File it in the authorised store and record version, period and link in the document register when available.

Accompany the file with three short lines in chat:
- State the main finding and the period or proposal scope.
- State the decision requested, its owner and requested date.
- State material uncertainty, missing work or limits on the evidence.
