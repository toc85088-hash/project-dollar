# Article 01 Workflow Build Specification

Article：**What Should a Small Business Automate First?**

Prepared：2026-08-31

State：**PREPARED — NOT BUILT / NOT TESTED / OAUTH NOT GRANTED**

This is the exact non-production build specification for the Article 1 evidence test. It uses only fictional data and does not authorize OAuth, sending email, enabling a scheduled scenario, publishing the article, deploying the website or enabling indexing.

## Safety invariants

- Use the approved Google test account and approved Make workspace only.
- Keep the Make scenario scheduling toggle **OFF**. A supervised **Run once** is the only permitted execution mode.
- Never add Gmail `Send an Email`, `Send a Draft Email`, forwarding, webhook or other external-send actions.
- Gmail may create a draft only. A human must inspect it; it must never be sent.
- Do not use a real inbox as a recipient. Every reply address must be blank or use the reserved `.test` top-level domain.
- Do not start a paid trial, upgrade a plan, add payment information or enable a paid feature.
- Stop before every new OAuth/permission grant. Record the exact consent-screen text; do not infer scopes from this document.
- Do not turn any result into a `TESTED` claim until the real run and evidence review are complete.

## Named test resources

| Resource | Exact name | State before OAuth |
|---|---|---|
| Google Form | `NAV-A1 FICTIONAL LEAD TEST 2026-08-31` | To be created in approved test account |
| Linked Sheet | `NAV-A1 FICTIONAL LEAD TEST RESPONSES 2026-08-31` | To be linked to the Form |
| Make scenario | `NAV-A1-FICTIONAL-LEAD-TEST-20260831` | Scheduling OFF; not built in this session |
| Google Tasks list | `NAV-A1 Fictional Evidence Test` | Use a test-only list if the current UI permits creation without expanding access |
| Test-data file | `ARTICLE_01_TEST_DATA.csv` | Prepared locally; do not import real records |

## Google Form field structure

Create the fields in this order:

| Field | Type | Required | Allowed content / setting |
|---|---|---:|---|
| Test ID | Short answer | YES | Must start with `NAV-A1-20260831-` |
| Fictional name | Short answer | YES | Fictional person only |
| Reply address | Short answer | NO | Blank for the failure test, otherwise reserved `.test` address only |
| Fictional company | Short answer | YES | Clearly labelled fictional company |
| Service category | Dropdown | YES | `Fictional inspection request` or `Fictional repair enquiry` |
| Message | Paragraph | YES | Non-sensitive fictional request only |
| Fictional data confirmation | Multiple choice | YES | Only choice: `FICTIONAL TEST DATA ONLY` |

Form settings before any submission:

- Do not collect email addresses automatically.
- Do not send response receipts.
- Do not expose a response summary.
- Do not request file uploads, phone numbers, addresses, customer IDs or other personal data.
- Restrict access to the approved test context; do not publish or share the Form publicly.
- Review Form and linked-Sheet collaborator access separately.

## Linked Sheet columns

The Form creates the response columns. Add the status columns at the right without renaming the response headers.

| Column | Source | Expected use |
|---|---|---|
| Timestamp | Google Forms | Submission time |
| Test ID | Form | Trace key across all evidence |
| Fictional name | Form | Draft salutation and task context |
| Reply address | Form | Blank or `.test` only |
| Fictional company | Form | Fictional context only |
| Service category | Form | Approved neutral category |
| Message | Form | Fictional request |
| Fictional data confirmation | Form | Safety filter input |
| Processing Status | Added status column | Final normal/exception state |
| Exception Reason | Added status column | Explicit missing/unsafe input reason |
| Draft Created | Added status column | Record after manual verification of draft output |
| Task Created | Added status column | Record after manual verification of task output |
| Processed At | Added status column | Make execution time if visible |
| Human Review Status | Added status column | Starts `PENDING` |
| Manual Fallback Notes | Added status column | Human-only fallback record |
| Evidence Notes | Added status column | Screenshot/log reference without account identifiers |

Do not insert blank rows inside the response table. Make's current Google Sheets documentation warns that `Watch New Rows` does not process later rows after a blank row.

## Make scenario map

The current documented module names are:

1. Google Sheets — `Watch New Rows`
2. Router with mutually exclusive normal and exception filters
3. Normal route: Gmail — `Create a Draft Email`
4. Normal route: Google Tasks — `Create a Task`
5. Normal route: Google Sheets — `Update a Row`
6. Exception route: Google Tasks — `Create a Task`
7. Exception route: Google Sheets — `Update a Row`

Do not add a Gmail module to the exception route. Do not use `Send an Email`, `Send a Draft Email` or `Make an API Call` anywhere in the scenario.

## Module configuration

### 1. Google Sheets — Watch New Rows

- Connection：stop before creating or approving the connection.
- Spreadsheet：`NAV-A1 FICTIONAL LEAD TEST RESPONSES 2026-08-31`
- Sheet：the Form responses sheet created by Google Forms.
- Table contains headers：YES.
- Row with headers：the full header row, beginning at row 1.
- Value render option：formatted value unless the live test demonstrates a mapping issue.
- Limit：1 for each supervised minimum-evidence run.
- Starting point：choose only the new test row submitted for the supervised run. Do not ingest old rows.

### 2. Router filters

Normal-route rule:

```text
Test ID starts with "NAV-A1-20260831-"
AND Reply address is not empty
AND Reply address ends with ".test"
AND Fictional data confirmation equals "FICTIONAL TEST DATA ONLY"
AND Processing Status is empty
```

Exception-route rule:

```text
Test ID starts with "NAV-A1-20260831-"
AND (
  Reply address is empty
  OR Reply address does not end with ".test"
  OR Fictional data confirmation does not equal "FICTIONAL TEST DATA ONLY"
)
AND Processing Status is empty
```

The precise operator labels must be matched to the current Make UI after OAuth approval. The logical rules above are fixed; do not weaken the `.test` and fictional-confirmation guards to make a run pass.

### 3. Gmail — Create a Draft Email (normal route only)

- Connection：stop before creating or approving the connection.
- To：map `Reply address`.
- CC / BCC：empty.
- Subject：`[FICTIONAL TEST — DO NOT SEND] We received {{Test ID}}`
- Body type：plain text / simple text option available in the current UI.
- Attachments：none.
- Thread ID：empty.

Body:

```text
FICTIONAL NON-PRODUCTION TEST DRAFT — DO NOT SEND.

Hello {{Fictional name}},

This draft acknowledges receipt of fictional request {{Test ID}} for {{Service category}}.

A human reviewer must inspect this draft and decide whether to discard it. No price, availability, appointment, policy, refund, discount, outcome, or service commitment is made.

— Naveliqo Article 1 Test
```

### 4. Google Tasks — Create a Task (normal route)

- Connection：stop before creating or approving the connection.
- Task list：`NAV-A1 Fictional Evidence Test`.
- Title：`[FICTIONAL TEST] Review draft for {{Test ID}}`
- Notes：`Review the Gmail draft and Sheet row. Never send the draft. Confirm the data is fictional, then record the human decision in the Sheet.`
- Due date：leave empty for the minimum run unless the live module requires a value.

### 5. Google Sheets — Update a Row (normal route)

- Spreadsheet and Sheet：same as the trigger.
- Row number：map the row number emitted by `Watch New Rows`.
- Preserve all Form response cells.
- Processing Status：`DRAFT_CREATED_TASK_CREATED_REVIEW_REQUIRED`
- Exception Reason：empty.
- Draft Created：`YES — VERIFY IN GMAIL DRAFTS`
- Task Created：`YES — VERIFY IN GOOGLE TASKS`
- Processed At：map the Make execution time if available; otherwise leave blank and record manually.
- Human Review Status：`PENDING`
- Manual Fallback Notes：empty.
- Evidence Notes：`NORMAL ROUTE — {{Test ID}}`

### 6. Google Tasks — Create a Task (exception route)

- Task list：`NAV-A1 Fictional Evidence Test`.
- Title：`[FICTIONAL TEST][EXCEPTION] Missing or unsafe reply address — {{Test ID}}`
- Notes：`Do not create or send an acknowledgement. Review the Sheet row manually, record the missing/unsafe reply address, and complete the manual fallback.`
- Due date：leave empty for the minimum run unless required.

### 7. Google Sheets — Update a Row (exception route)

- Row number：map the source row number.
- Processing Status：`EXCEPTION_MANUAL_REVIEW_REQUIRED`
- Exception Reason：`MISSING_OR_NON_TEST_REPLY_ADDRESS`
- Draft Created：`NO`
- Task Created：`YES — VERIFY IN GOOGLE TASKS`
- Processed At：map execution time if available.
- Human Review Status：`PENDING`
- Manual Fallback Notes：`Review source row; do not contact anyone; record completion manually.`
- Evidence Notes：`EXCEPTION ROUTE — {{Test ID}}`

## Required supervised run order after separate OAuth approval

1. Confirm the Make plan/workspace shows no paid trial and requires no payment information.
2. Confirm the scenario scheduling toggle is OFF.
3. Confirm the scenario contains exactly the seven modules/routes above and no send/API-call action.
4. Use **Run once** and submit the success row from `ARTICLE_01_TEST_DATA.csv`.
5. Match the same test ID in the Sheet, Make execution, Gmail Drafts and Google Tasks.
6. Inspect Gmail Sent and the Make scenario for send actions; record zero sent emails only if actually observed.
7. Use **Run once** and submit the missing-reply-address row.
8. Verify the exception route creates no Gmail draft, creates the manual-review task and updates the Sheet reason.
9. Turn/leave scenario scheduling OFF and confirm it is disabled.
10. Complete the manual fallback in the Sheet without contacting any address.
11. Capture and redact the required screenshots.
12. Update the Claim Ledger from observed evidence only.

## Manual fallback demonstration

With the scenario OFF, the human reviewer finds the exception row by Test ID, checks that no Gmail draft or sent item exists for that ID, opens/creates the internal review task, and writes the following in the same Sheet row:

- `Human Review Status` → `MANUAL REVIEW COMPLETE`
- `Manual Fallback Notes` → `Reviewed fictional row; no contact attempted; follow-up retained as internal test task.`

This demonstrates a reversible fallback only for the fictional test. It does not prove production suitability.

## OAuth hard stop record

At the first Google connection prompt, stop before approval and record:

| Required record | Value now |
|---|---|
| Current step | Before creating the first Google Sheets connection in Make |
| App requesting access | Not yet observed; expected handoff is Make → Google authorization |
| Exact permission/scopes shown | **NOT OBSERVED — must be copied from the real consent screen** |
| Why permission is needed | Sheet row read/update; Gmail draft creation; Google Task creation, each only if shown for the corresponding connection |
| Broader than necessary? | **UNRESOLVED until exact scope text is visible** |
| Manual action | Open the connection flow, stop on the Google consent screen, do not click Continue/Allow, redact account identifiers, and provide the exact permission text for review |

OAuth approval is a separate human decision. Account availability does not authorize the grant.

## Required redacted evidence screenshots

1. Current Make plan/workspace state showing non-paid status and no active trial, with account identifiers redacted.
2. Form field structure and linked Sheet headers; separate access-setting review for both resources.
3. Full disabled Make scenario showing every module/filter and no send action.
4. Success case with matching `NAV-A1-20260831-SUCCESS-001` across Sheet, execution, Gmail draft, task and status.
5. Gmail Drafts and Sent evidence showing the item is a draft and zero emails were sent for the test ID.
6. Failure case with `NAV-A1-20260831-FAIL-MISSING-REPLY-001`, exception route, no Gmail draft and recorded reason.
7. Scenario scheduling OFF after the runs.
8. Completed manual fallback fields for the failure row.

Redact account email, profile image, workspace/team IDs, spreadsheet/Form IDs, tokens, cookies, OAuth details, billing identifiers and browser/session data. Do not fabricate or reconstruct a screenshot.
