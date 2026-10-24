# <Client> - <topic>: spec for <audience>

<System list and integration boundary>

Version <version number> | Date <date>

| Status | Owner | Approvers | Decision needed |
| --- | --- | --- | --- |
| <status> | <role> | <roles> | <decision and date> |

## 2. Overview

### 2.1 About this document

<Who reads this, what it covers, and what another team or document does instead.>

### 2.2 Why

<Problem, number, period, unit and numbered source. Mark hypotheses explicitly.>

### 2.3 Goals

| Goal | Verifiable outcome | Acceptance reference |
| --- | --- | --- |
| <goal> | <norm and window> | <check ID> |

### 2.4 What already exists and is not touched

<Systems, emitters and settled decisions retained in this version.>

### 2.5 Out of scope

<Plausible adjacent work excluded from this version and its owner.>

### 2.6 Dependencies

| Dependency | Owner | Needed by | Degraded behaviour if missing | Recovery |
| --- | --- | --- | --- | --- |
| <dependency> | <role> | <stage/date> | <what still ships and what stops> | <recovery> |

### 2.7 Relation to earlier specs

| Earlier spec and version | Replaces or refines | Retained rules |
| --- | --- | --- |
| <link/version> | <sections and reason> | <sections> |

### 2.8 Glossary

| Term | Plain meaning | Data or responsibility implication |
| --- | --- | --- |
| <term> | <meaning> | <implication> |

## 3. Flow

| Step | Where it runs | What is passed | Key joining the next step | Consent/failure outcome |
| --- | --- | --- | --- | --- |
| <step ID> | <runtime> | <fields> | <key or missing join> | <rule> |

## 4. <Component or system, repeat per component>

<Responsibility. When <trigger>, <system> must <observable response>.>

| Field | Source | Format | Rule |
| --- | --- | --- | --- |
| <field> | <source> | <type, unit, zone> | <required, allowed values, null/default, redaction> |

- <Requirement ID, consent and deduplication rule.>
- <Requirement ID, retries, error and monitoring behaviour.>

Illustrative request with placeholders; substitute types according to the field table before testing.

```json
{
  "<field name>": "<value or hash placeholder>"
}
```

| Limit | Unit and window | Reason/source | Test mode |
| --- | --- | --- | --- |
| <limit> | <unit/window> | <basis/link> | <mode and expected result> |

<Credential issuer and authorised retrieval location, without the credential.>

## 5. Values and mappings

| Input/condition | Derived value | Reason | Precedence/fallback | Effective date | Owner |
| --- | --- | --- | --- | --- | --- |
| <condition> | <value and basis> | <reason> | <rule> | <date> | <role> |

## 6. Verification

| Recipient or component | Test mode | What is checked | Expected result/evidence | Owner |
| --- | --- | --- | --- | --- |
| <recipient> | <mode> | <payload or reconciliation> | <result/location> | <role> |

## 7. Acceptance criteria

| Check/requirement ID | Norm with a number | How measured | Sample and window | Owner |
| --- | --- | --- | --- | --- |
| <check ID> | <count, rate or duration> | <Given state, When trigger, Then observable result> | <sample/window> | <role> |

## 8. Launch order

| Stage | Owner | Action/evidence | Condition to proceed | Rollback trigger and action |
| --- | --- | --- | --- | --- |
| <stage> | <role> | <action/evidence> | <exit norm> | <trigger/action/decision owner> |

## 9. Open questions to the client

| Number | Question | Who answers | Due date | Blocked requirement/provisional behaviour |
| --- | --- | --- | --- | --- |
| <number> | <answerable question> | <role> | <date> | <impact/default awaiting approval> |

## 10. Ownership

| Area | Who | What |
| --- | --- | --- |
| <area> | <role> | <implementation, QA, acceptance or operational responsibility> |

## 11. Sources

1. <Official API link, relevant section and checked date.>
2. <Earlier spec link, version and affected sections.>

## 12. Developer appendix

<Index of table schemas, job schedules, request contracts, full event payloads and approved copy texts. Keep the component examples in the main body.>

## Changes

<Include at the end from version two onward.>

| Version/date | What changed | Why | Affected requirements and acceptance |
| --- | --- | --- | --- |
| <version/date> | <change> | <reason> | <IDs> |
