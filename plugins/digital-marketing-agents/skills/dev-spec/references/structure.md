# Specification structure

Keep this order so a product owner finds the purpose, a developer finds the contract, QA finds acceptance, and the project manager finds the next action. Add depth under the relevant component, not new introductory chapters.

## 1. Title and version

Use `<Client> - <topic>: spec for <audience>`. Name the systems in a subtitle. Put version number and date immediately below it, then status, owner and approvers in a compact table. State the decision required in one sentence. Status metadata adds clarity without displacing the consultant's established order.

## 2. Overview

| Subsection | What to write | Why it exists |
| --- | --- | --- |
| 2.1 About this document | Audience, covered work and what another team or document does instead | Prevent an accidental transfer of responsibility |
| 2.2 Why | Problem with numbers, periods, units and numbered source links | Let the product owner judge the cost of doing nothing |
| 2.3 Goals | Verifiable outcomes with acceptance references | Make approval about results rather than activity |
| 2.4 What already exists and is not touched | Current systems, settled decisions and unchanged emitters | Prevent duplicate tracking and scope expansion |
| 2.5 Out of scope | Plausible adjacent work excluded from this version | Stop reasonable but unbudgeted expectations |
| 2.6 Dependencies | Dependency, owner, needed by, degraded behaviour and recovery | Allow an independent release when optional work is late |
| 2.7 Relation to earlier specs | Link and version, superseded sections and retained rules | Avoid two valid-looking contracts |
| 2.8 Glossary | Plain meaning, technical term and data implication | Let legal, DPO and procurement read the same document |

If the business baseline is unavailable, write the missing source as a question. Do not invent a motivating percentage. A design target has an owner and rationale; it is not a historical fact.

## 3. Flow table

Use step, where it runs, what is passed and key joining the next step. Add consent gate, failure outcome and owner when they affect the contract. Follow a single transaction through every hop. State when a join does not exist rather than implying attribution is complete.

For identity, distinguish internal IDs, external IDs and hashed values. Specify where transformation happens and who may receive the result. Put deduplication at the receiving boundary, with key, lifetime and retry behaviour.

## 4. Components and systems

Repeat one component section per system. Start with its responsibility and a trigger sentence: "When <condition>, <system> must <observable response>." Use a field table with field, source, format and rule. Inside format and rule, include type, requiredness, allowed values, null/default behaviour, validation and redaction. Add destination-specific parameter names where mapping is needed.

For an event contract include event name, purpose, trigger, platform, owner, status, consent gate and dedup key. Preserve the client's naming convention; IDs stay strings and timestamps specify UTC or the explicit required zone and unit. Define numeric bounds and enumerated values rather than an unexplained boolean.

Add short rule bullets, one concise request code block with placeholders, limits with their reasons and a test mode. State retries, idempotency, error handling, rate limits and monitoring where applicable. For CRM or push, specify eligibility, suppression, frequency, locale, approved copy and opt-out behaviour. For exports, specify schema, cadence, cut-off, incremental key, delivery, late corrections and reconciliation. For attribution, specify model, lookback, identity gaps and unmatched cases.

Put minimal security and privacy rules beside the fields they govern. Name consent source, data purpose, access owner, retention and deletion path. Token instructions name the issuer and authorised retrieval location, never a token or secret-bearing URL.

## 5. Value and mapping rules

Use input, condition, derived value, reason, precedence, fallback, effective date and owner. Include product-line mappings, revenue basis, refunds or reversals and segment rules when relevant. A revenue value needs currency and tax basis. Test overlaps and unmatched values. Omit this section only if nothing is derived, and state that fact.

## 6. Verification

Use recipient or component, test mode, what is checked, expected payload or result, evidence location and owner. This is the procedure, not the acceptance verdict. Test a permitted synthetic transaction through the chain. Compare sending and receiving counts on matching windows; inspect rejecting and duplicate cases too.

## 7. Acceptance criteria

Use check, norm with a number, how measured, sample/window and owner. Refer to requirement IDs. Turn "works correctly" into observable outcomes: a permitted trigger yields exactly one accepted event within an approved interval; a denied-consent trigger yields zero prohibited sends. The interval and sample size are agreed inputs, not universal vendor constants.

Use Given/When/Then inside the measurement cell for scenario checks. Include absent dependency, missing fields, duplicates, late data, invalid enum, failure recovery and privacy gates. Distinguish zero defects in a test set from a claim about all production traffic.

## 8. Launch order

Use stage, owner, action, evidence, condition to proceed and rollback trigger/action. Move from test to limited production to the agreed observation window to acceptance. Name the rollback decision-maker and what happens to queued or replayed data. Add risk and mitigation beside the stage where they matter.

## 9. Open questions

Number questions and include answer owner, due date, blocked requirement and provisional behaviour. Keep questions answerable by number. A default is provisional until its owner approves it; do not bury it in a field table as a settled decision.

## 10. Ownership

Use area, who and what. Cover implementation, credentials, consent, source data, mapping rules, QA, production monitoring, acceptance and rollback. Name roles if people are not yet assigned; flag the assignment gap.

## 11. Sources

Number official API references and earlier specs with version or access date and relevant section. Link each nontrivial external constraint to a source. Recheck vendor-specific time windows and deduplication rules for the actual integration; no generic limit applies to every platform.

## 12. Developer appendix and changes

For mixed readers, move full schemas, job schedules, request contracts, event payloads and approved copy texts here. Keep short request examples in the component sections. Add an appendix index if there is substantial material. End version two and later with date, version, change, reason and affected requirement or acceptance IDs, because exports carry no edit history.

## Sources

- [Google design docs](https://www.industrialempathy.com/posts/design-docs-at-google/) for scope and rationale.
- [Shape Up pitch](https://basecamp.com/shapeup/1.5-chapter-06) for bounded work and exclusions.
- [Kubernetes KEP template](https://github.com/kubernetes/enhancements/blob/master/keps/NNNN-kep-template/README.md) and [PEP 12](https://peps.python.org/pep-0012/) for tests, rollout and status.
- [Segment ecommerce specification](https://www.twilio.com/docs/segment/connections/spec/ecommerce/v2) for trigger, property table and request.
- [Snowplow tracking design](https://docs.snowplow.io/docs/fundamentals/tracking-design-best-practice/) for owned event specifications.
- [GOV.UK analytics record](https://docs.publishing.service.gov.uk/analytics) for attribute, consent and redaction structure; check its currency before reuse.
