# Writing and review

## Readable obligations

Write one idea per sentence, usually 15-20 words. Split sentences above about 25 words when doing so preserves the meaning. This is an editing heuristic, not a proven comprehension threshold for technical specs. Put reasoning in prose and enumerations in tables. Use sentence case and real heading levels without skipping levels.

Define obligation words once: must is required for acceptance, must not is prohibited, should is a recommendation with a reason, may is permitted. In Russian use «должен», «нельзя», «рекомендуется» and «можно» consistently. Avoid "shall", which can read as either a requirement or a prediction. Do not uppercase requirement words.

Use "When <trigger>, <system> must <response>." Add a stable requirement ID if QA or a reviewer needs to cite it. State the event's business purpose before its fields. "Track signup" is incomplete until it states the exact successful state, firing surface, repeated-trigger behaviour and expected recipient.

Spell out acronyms on first use. Keep the main body readable by product, security and legal readers. Use the client's working language; retain exact API field names inside developer tables and code. No promotional claims, bold-label bullet rituals, emoji headings or decorative labels.

## Evidence and acceptance

Every measured number needs period, unit and source. Every target or limit needs an owner, basis and measurement window. Mark hypotheses and preliminary figures. "Implemented" requires live sending and receiving evidence for the declared scope; a configured tag or a successful test request alone does not establish production coverage.

| Weak statement | Rewrite as a contract |
| --- | --- |
| Send promptly | Send within <approved duration and unit> of <trigger>, measured by <method> |
| No duplicates | Receive <approved count> per <dedup key> in <window>, verified using <evidence> |
| Support all products | Apply <mapping version> to <enumerated product set>; route unknowns to <fallback> |
| Tracking works | Given <state>, when <trigger>, then <observable payload or result> |

Give acceptance checks a numeric norm, test window or sample, method and evidence owner. Separate contract validation from end-to-end delivery and business reconciliation. Include negative and recovery cases. Do not report an arbitrary sample as proof of an unmeasured population.

## Data and request examples

Use angle-bracket placeholders for every value, including hashes. A JSON illustration containing placeholders is illustrative, not a runnable or schema-valid request until substituted. Label its expected types in the field table. Never include personal data, real IDs, secrets or token-bearing URLs.

State who issues credentials and where the authorised developer retrieves them. Describe hashing algorithm, normalisation and permitted recipient only when the actual integration requires them. A hash can still be personal data. Name consent and deletion owners rather than implying hashing resolves legal questions.

Verify current platform constraints in official documentation. Do not reuse a remembered 48-hour, 72-hour or seven-day window across vendors. Match browser/server dedup keys and event names according to that vendor's current contract. If relevant to a GTM flow, initialise the data layer above the snippet, use `push()`, preserve case and never reassign it.

## Google Docs notes

Read `google-workspace` before the first connector call. Delegate positions, tabs, suggesting mode and permission mechanics to it. Create through Drive `create_file` with `contentMimeType: "text/html"`, then edit through Docs. HTML headings, paragraphs, lists, bold and links become native formatting; do not assume table header styling transfers.

After conversion, make table header rows bold with a fill and inspect identifiers containing underscores. Use Heading 1-3 styles for navigation. Prefer Pages and one tab for a spec forwarded as PDF. Check the whole requested export, not just the current tab. Mirror version names in the in-document change list, since recipients of exports cannot see native history.

Inspect table widths, repeated headers on long tables where available, page breaks, code wrapping, links and fonts. Open PDF and DOCX if both are deliverables. Test smart chips and complex tables rather than relying on unverified export fidelity. Keep ordinary tables and links when those features add no value.

## Review traps

- A request example contradicts its field table or omits a required field.
- A dependency has an owner but no degraded behaviour, making an optional system a hidden release blocker.
- An event has properties but no trigger, purpose, consent gate or deduplication rule.
- "Fast", "user-friendly", "as needed" and "etc." replace an observable norm.
- Scope includes implementation work without a responsible team or an acceptance owner.
- A hypothesis appears as a cause, or configuration appears as live implementation evidence.
- Long payloads bury the decision; questions have neither numbers nor answer owners and dates.
- A revision changes the contract without identifying affected requirements or tests.

## Sources

- [OPM plain language](https://www.opm.gov/information-management/plain-language/) and [GOV.UK sentence length](https://insidegovuk.blog.gov.uk/2014/08/04/sentence-length-why-25-words-is-our-limit/) for editing heuristics.
- [EARS](https://alistairmavin.com/ears/) and [Cucumber reference](https://cucumber.io/docs/gherkin/reference/) for trigger clauses and observable checks.
- [INCOSE requirement guidance](https://www.incose.org/docs/default-source/working-groups/requirements-wg/guidetowritingrequirements/incose_rwg_gtwr_v4_summary_sheet.pdf) for singular, verifiable requirements.
- [Google data layer](https://developers.google.com/tag-platform/tag-manager/datalayer) for integration-specific rules.
- [Docs page setup](https://support.google.com/docs/answer/11528737) and [Docs tabs](https://developers.google.com/workspace/docs/api/how-tos/tabs) for forwardable document choices.
- [Drive export formats](https://developers.google.com/workspace/drive/api/guides/ref-export-formats) for export options; inspect actual output.
