---
name: dev-spec
description: "Write or revise a client developer specification in Google Docs for tracking, server-side conversions, CRM and push scenarios, attribution backends or data exports. Use for ТЗ, technical specification, spec for the developers, implementation contract or QA acceptance criteria, including when an architecture discussion must become a handoff document."
argument-hint: "[client] [topic] [audience]"
---

If `~/.claude/overlays/dev-spec.md` exists, read it before starting: it holds house palette and font, client document rules, file naming and the document register, Drive folders, system context and known traps. If a named note is missing, say so and keep that dependency visible.

Write a contract a developer can build and QA can verify, with an overview a product owner can approve.

## Read first

- Read the client's architecture, earlier specs, decisions and data restrictions before proposing a new flow.
- Read `references/structure.md` before outlining; it explains the reader and reason for every section.
- Read `references/writing.md` before drafting requirements and again before the final review.
- Use `assets/skeleton.en.md` or `assets/skeleton.ru.md` in the client's working language.
- Read the `google-workspace` skill before the first Google connector call; it owns file mechanics.
- If that skill or a required connector is unavailable, prepare the content and report the missing route without inventing calls.

## Method

1. Define the handoff.
   Name the product owner, developer audience, QA recipient and decision the document asks for.
   Confirm the working language, status, approvers, version, date and registered file name.

2. Establish the baseline.
   Read what exists and what earlier specs already settle; link them instead of repeating conflicting rules.
   Distinguish observed behaviour, proposed behaviour and hypotheses before writing the overview.

3. Write the overview in the supplied order.
   Explain audience and boundaries, why, verifiable goals, existing systems, exclusions and dependencies.
   Add degraded behaviour per dependency, relation to earlier specs and a glossary for mixed readers.

4. Map the flow before describing components.
   Give each step its runtime, passed data and join key to the next step.
   Name missing joins, consent gates, deduplication boundaries and failure paths explicitly.

5. Specify each component as an implementation contract.
   Provide its field table, short rules, placeholder request, justified limits and test mode.
   State triggers, allowed values, types, requiredness and the owner of each external dependency.

6. Separate derivation from transport.
   Put product, revenue and segment mappings in a value table with the reason for each rule.
   Define precedence, unmatched values and effective dates so two teams derive the same result.

7. Write verification and acceptance before launch instructions.
   Distinguish how to inspect a payload from the numeric norm that decides acceptance.
   Cover duplicate, late, missing, rejected and consent-denied cases as well as the happy path.

8. Stage the launch.
   Give each stage an owner, evidence and condition to proceed; include rollback and its trigger.
   Keep optional dependencies optional by specifying what still ships when they are absent.

9. Resolve the handoff boundaries.
   Number client questions with answer owner and due date; add area, who and what in ownership.
   Finish numbered sources and move full schemas, schedules and payloads to the developer appendix.

10. Review, build and inspect.
    Run the checks below against the source evidence, then inspect the converted document and export.
    In version two and later, append changes with their effect on implementation and acceptance.

## Rules

- Give every reported number its period, unit and source; give design limits their rationale and approval basis.
- Mark a hypothesis as a hypothesis or leave it out; do not turn a target into an observed result.
- Write "implemented" only when live evidence proves the relevant flow works.
- Use stable requirement IDs when tests or comments need to cite a rule.
- Write one requirement per sentence, with a named system, trigger and observable response.
- Define must, must not, should and may once; keep obligation strength consistent in translation.
- Use the client's existing event names; do not create a second emitter for an existing event.
- Treat identifiers as strings and state timestamp unit, time zone and allowed lateness.
- Verify current vendor-specific windows and required fields in official documentation before fixing them in a spec.
- State consent, minimisation, retention, redaction and authorised recipients for each data flow.
- Never include secrets; say who issues a token and where the authorised team retrieves it.
- Use hashes and angle-bracket placeholders in examples; never paste personal data or live identifiers.
- Explain that hashing does not by itself remove privacy obligations.
- Keep request examples consistent with the field table, including optional fields and missing-value behaviour.
- Number questions so the client can answer by number; do not hide unresolved choices in normative text.
- Spell out acronyms on first use; keep platform-specific names in developer sections.
- Use prose for reasoning and tables for fields, mappings, ownership and checks.
- Use short sentences and sentence case; avoid vague words such as "fast" or "etc." in requirements.
- Keep long schema dumps out of the mixed-reader body; retain one short request per component there.
- Do not claim the document complies with a standard merely because its structure resembles one.

## Build

1. Read `google-workspace` before any connector call and follow its permissions and file handling.
   Select the overlay's Drive folder and document-register naming convention.
   Create a new version or edit the authorised draft; preserve the earlier approved contract.

2. Create the Doc with Drive `create_file` and `contentMimeType: "text/html"`.
   Convert headings, paragraphs, lists, bold and links to native formatting, then edit with the Docs connector.
   Follow `google-workspace` for positions, tabs and suggesting mode instead of guessing indexes.

3. Apply real Heading 1-3 styles and use Pages for a forwardable spec.
   Prefer one tab when the client will forward a PDF; keep status and version visible in the document.
   After conversion, make table header rows bold with a fill and check identifiers containing underscores.

4. Inspect the file as a reader and inspect the requested export.
   Check outline, table widths, page breaks, code wrapping, links and placeholder integrity.
   Test PDF and DOCX when both will be sent; do not assume their rendering matches the native file.

## Before sending

- [ ] The overview tells each reader what they own and what this document excludes.
- [ ] Every problem number traces to a dated source and every goal can be checked.
- [ ] Dependencies name degraded behaviour; existing systems and prior-spec replacements are explicit.
- [ ] Flow steps join end to end, including retries, deduplication and consent boundaries.
- [ ] Each component has fields, rules, a consistent request, limits with reasons and a test mode.
- [ ] Derived values have mappings, defaults, precedence and a rule owner.
- [ ] Verification names the recipient and inspection method; acceptance names numeric norms and measurement.
- [ ] Launch stages have exit conditions, evidence, owners and rollback instructions.
- [ ] Questions are numbered with answer owners and dates; ownership has no unassigned area.
- [ ] Sources are numbered and official API references were checked for the actual integration.
- [ ] No secret, personal data, unexplained acronym or unsupported implementation claim remains.
- [ ] The final file and export preserve headings, table headers, code and underscore identifiers.
- [ ] Version two or later ends with a change list; file name matches the client's register.
- [ ] Complete the applicable reviewer workflow before client handoff and resolve blocking findings.

## Output

Deliver the Google Doc link in the client's working language and the requested inspected export.
File it in the authorised Drive folder and record version, status and link in the client's document register.
If the register is unavailable, name that unfinished filing step instead of claiming it is complete.

Accompany the file with three short lines in chat:
- State what the spec enables and its version and status.
- State the decision or numbered answers needed, with owner and requested date.
- State unresolved dependencies, hypotheses or acceptance evidence still missing.
