# Figma Slides build route

## Session and style source

Use this route when the user names Figma Slides or the standing or house format selects it. Call the Figma MCP server's `create_session` with the file key first. Read the `figma-use` skill and its Slides guidance before calling `use_figma`. Build through `use_figma` scripts using the plugin API. If these tools or the skill are unavailable, prepare the storyboard and report the missing route instead of inventing API support.

Keep one deck as the style source. Copy its slides and replace content rather than drawing every report from scratch. Use a client-branded source for client-brand work; otherwise use the overlay's house source. Record the selected layout and data figure IDs per slide so future reports remain consistent.

Slides are fixed at 1920 x 1080 and sit in slide rows inside the slide grid. Use rows as storyline chapters where the session supports it. Work in small batches, typically three to five slides, then inspect. Read the active session's capabilities rather than treating public API omissions or forum claims as the current runtime contract.

## Plugin layout rules

Load the required family and style with `loadFontAsync` before setting characters or editing font-dependent text properties. Verify available style strings rather than guessing a spelling such as SemiBold. Test the actual font, Cyrillic and export, including any fallback. Font availability in another tool does not prove availability in this session.

Use fixed vertical offsets for text blocks. In this workflow a text node's height is not dependable immediately after resize; do not position the next block from that immediate height read. The public API documentation does not describe this; it is observed behaviour in the MCP flow. Inspect actual geometry in a later call and repair clipping or excess space.

Append nodes to their intended parent before setting x/y at each nesting level. Give content containers explicit widths. Follow the current `figma-use` guidance on auto-resize and container support; do not treat a slide as a generic resizable frame or assume it supports every Design API operation.

For a new source deck, start from this grid and adjust it once the deck has been read on a laptop:

| Role | Starting value |
| --- | --- |
| Margins | 96 px left/right, 72 px top/bottom |
| Columns | 12 columns, 24 px gutters, 122 px column width |
| Claim | 48 px bold, at most two lines |
| Body / chart title | 28 px / 36 px |
| Table and axis / source | 24 px / 20 px |
| Spacing | 8, 16, 24, 48, 96 px |

Use the established source deck's scale when one exists. Reserve a source area near the bottom, with a consistent slide number. Check legibility at laptop size rather than relying only on pixel floors. Do not decorate with blur, gradients or glass effects that obscure evidence or export poorly.

## Images, charts, tables and notes

Send images through `upload_assets` and place them as image fills on rectangles using the returned image handle. Do not fetch arbitrary URLs inside the script sandbox. Keep aspect ratio and source provenance. Charts can be rendered as verified images or constructed from data with the plugin API; do not assume native chart support or rely on an untested Community plugin.

For exact values, reuse the source deck's table layout. Follow the current `figma-use` guidance for table support; the public API page and the MCP skill disagree, so do not rely on `createTable` in a Slides file. Use aligned text and shapes when supported and appropriate, then validate the values and bounds.

Set speaker notes per slide. The MCP skill documents `slide.speakerNotes` as a markdown string and the public SlideNode page does not, so write one note and read it back before filling the deck. If unavailable, use the supported UI flow or report the notes step as incomplete. Keep notes in supported plain text/markdown, with likely objections, answers and backup references.

Appendix slides may be skipped for live presenting when supported, but they remain in the file. Hidden/skipped slides and notes are not an access boundary. Do not claim a forum-reported live-link exposure is verified; instead create an intentional client-facing copy or PDF whenever the working deck includes internal content.

## Validate each batch and export

Return created slide IDs and relevant validation results from scripts, not only a success message. Check overlap, clipping, out-of-bounds content, title lines, text width, source presence and chart/table values. Inspect rendered slides after each batch and recheck changed slides. Keep one data register for repeated figures.

Inspect requested PDF and PPTX separately. Whether notes reach the export, whether PDF text stays selectable and how fonts render are not confirmed. Test those properties when required; do not promise them. Use PDF for a stable read-ahead and an editable export only after checking its shapes, images, fonts and layout. Provide a stripped duplicate if the native client file should exclude internal notes or backup material.

## Sources

- [Figma working in Slides](https://developers.figma.com/docs/plugins/working-in-slides), [SlideNode](https://developers.figma.com/docs/plugins/api/SlideNode/) and [text handling](https://developers.figma.com/docs/plugins/working-with-text/) for the public plugin surface; compare with current MCP guidance.
- Figma MCP resource `skill://figma/figma-use-slides` for session-specific scripting; discover it through the active server.
- [Figma Slides help](https://help.figma.com/hc/en-us/articles/24848334599447) for product workflow and [teams' deck systems](https://www.figma.com/blog/how-teams-tap-into-the-power-of-design-with-figma-slides/) for reusable sources.
- [Earnings Report Presentation](https://www.figma.com/community/file/1501338463793592710), [grid-system reference](https://www.figma.com/community/file/1435693307742950789), [Quarterly Business KPI Review](https://www.figma.com/community/file/1099423145832831244) and [Raise deck](https://www.figma.com/community/file/1479866880691206473) are Community exemplars; check their quality and availability before copying a layout.
