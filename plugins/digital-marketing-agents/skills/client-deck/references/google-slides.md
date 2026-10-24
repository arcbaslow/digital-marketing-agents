# Google Slides build route

## Select and prepare

Use this route when the user names Google Slides, the client's standing format requires it, or the overlay selects it as the house default. Read `google-workspace` before the first connector call, including calls used only to reconcile source Sheets. Leave authentication, permissions, file copying and detailed API mechanics there.

Reconcile figures and approve the titles-only storyboard before layout. Copy the authorised style-source deck rather than editing the master template. Use the client palette for client-brand decks and the overlay's house palette otherwise. If neither a template nor a style specification exists, create an explicit simple style source before mass-producing slides; do not invent a client brand.

## Build from layouts

Create new slides from the master's layouts, such as cover, chart plus takeaway, table, number and section. Confirm the required layout exists before creating slides. Do not rely on a blank-slide default to inherit the intended design. Reuse placeholder mappings and consistent margins through the workspace flow; do not re-document request payloads here.

Connector positions are in EMU. Keep dimensions in one unit and convert deliberately if the tool supports another unit; do not pass pixel values as EMU. Text never shrinks to fit automatically in this route. Budget space for the title, evidence, takeaway and source. Split or edit overflowing content instead of assuming autofit will rescue it.

Use the chosen font only after checking it in the target deck. Manrope is listed in Google Fonts with Cyrillic coverage, but the digest does not confirm availability and weight fidelity inside Slides or PDF export. Test the chosen family, Regular/Bold and Cyrillic where used; choose an available approved fallback if necessary. Do not promise variable-weight fidelity or custom font upload.

## Charts, images and notes

A chart must exist in a Sheet before it can be embedded with `createSheetsChart`. Build it in the source Sheet with `addChart`, then embed through the workspace route. Set its direct labels, source period and units before embedding. When Sheets cannot express the required chart clearly, use a verified chart image and retain the source line on the slide.

Images require a public URL in this connector route. Use an authorised asset location suitable for that exposure; never publish private source data just to insert an image. If the needed asset cannot be served appropriately, report the missing route and use a supported alternative from the workspace skill.

Linked charts can expose a source-sheet link and can change when refreshed. Use linking intentionally during drafting. For a frozen client handoff, unlink through a supported route or embed a frozen image, then verify the figures; do not promise a frozen chart while retaining an auto-refresh workflow. Record source/version in the figure register.

Write speaker notes through the slide's notes shape using the supported workspace flow. Keep objections, answers and backup references there. Put client-critical caveats and definitions on the slide. Prepare a client-facing copy without internal notes when those notes are not intended for recipients.

## Inspect and hand off

Inspect the native deck for clipping, overlap, source lines, table precision, stable channel colours and correct slide order. Compare every rendered value with the figure register. Refresh linked content only deliberately and reconcile again if it changes.

Export the requested PDF and editable format, then inspect both if both will be sent. Check font substitution, Cyrillic, label truncation, chart fidelity and tables at normal reading size. If fonts change, use a supported weight or fallback and re-export. Do not treat a successful export response as visual verification. File the forwarding copy under the client's register convention and identify it in the chat note.

## Sources

- [Slides page elements](https://developers.google.com/workspace/slides/api/concepts/page-elements) and [merge route](https://developers.google.com/workspace/slides/api/guides/merge) for template-based creation.
- [Slides chart embedding](https://developers.google.com/workspace/slides/api/guides/add-chart) and [linked objects](https://support.google.com/docs/answer/7009814) for Sheets chart use.
- [Slides requests](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/request) for supported operations; use workspace instructions for execution.
- [Manrope metadata](https://github.com/google/fonts/blob/main/ofl/manrope/METADATA.pb) confirms Google Fonts inclusion, not rendering in the target file.
- [Drive export formats](https://developers.google.com/workspace/drive/api/guides/ref-export-formats) for available delivery formats.
