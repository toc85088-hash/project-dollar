# Article 01 Test Plan

Article：**What Should a Small Business Automate First?**

Updated：2026-08-31

Status：Approved test accounts/workspace are available；**OAuth remains unapproved and no scenario build、test run or screenshot has occurred**。

Safety：只使用完全 fictional、non-sensitive records；不寄信、不建立付款、不承諾價格或服務、不連接 production records。

## Evidence completion round decision

- Selected workflow：unchanged and still usable.
- Official capability documentation：`VERIFIED` as limited vendor documentation.
- Exact end-to-end workflow：`UNRESOLVED`.
- Success case：`UNRESOLVED`.
- Missing-reply-address failure case：`UNRESOLVED`.
- Human fallback：`UNRESOLVED`.
- First-hand workflow claims marked `TESTED`：**0**.
- Stop reason：this session has no authenticated browser-control surface, and the first Google connection requires a separately reviewed OAuth grant.
- Exact build configuration and two minimum fictional test records：prepared in `ARTICLE_01_WORKFLOW_BUILD_SPEC.md` and `ARTICLE_01_TEST_DATA.csv`.

No local mock can test Google Forms, Google Sheets, Gmail, Google Tasks, Make modules, OAuth permissions, plan eligibility or execution logs. Simulating those interfaces would not be real-world evidence.

## Selected demonstration workflow

`fictional lead submits Google Form`

`→ Google Forms stores response in linked Google Sheet`

`→ Make detects a new row`

`→ required-field and exception filter`

`→ Gmail creates an acknowledgement draft (never sends)`

`→ Google Tasks creates an owner follow-up task`

`→ Make records processing status in the test Sheet`

`→ human owner reviews the draft, task and log`

The workflow is intentionally rule-based. The first lesson is that a useful first automation may not need AI. If the deterministic handoffs prove stable, a later test could evaluate one bounded AI-assisted step, such as suggesting a category for human review. That later AI test is outside this round.

## Why this workflow was selected

- Beginner-relevant across service, professional and local businesses.
- A single trigger and visible outputs make the flow easy to explain.
- Fictional data can exercise the path without customer records.
- A Gmail draft is reversible and reviewable; there is no automatic external send.
- Google Sheet rows and Google Tasks provide visible test evidence.
- The owner remains responsible for any reply, commitment or follow-up.
- It demonstrates a complete handoff without claiming AI is required everywhere.

This selection is an editorial recommendation, not a claim that the workflow is suitable, easy, secure, free or effective for every business.

## Recommended tools and evidence status

| Tool | Proposed role | Why selected | Capability status | Workflow test status |
|---|---|---|---|---|
| Google Forms | Fictional lead input | Structured fields and a visible submission point | VERIFIED from Google documentation | UNRESOLVED |
| Google Sheets | Test record/source row and status log | Human-readable baseline and audit table | VERIFIED from Google documentation | UNRESOLVED |
| Make | Visual trigger/filter/actions | Visual scenario is suitable for explaining each handoff | VERIFIED as documented scenario pattern | UNRESOLVED |
| Gmail | Acknowledgement draft only | Draft can be reviewed before any external action | VERIFIED catalogue action | UNRESOLVED |
| Google Tasks | Owner follow-up task | Keeps the final action internal and reviewable | VERIFIED catalogue capability | UNRESOLVED |

## Required accounts and approval boundary

- One Google account with permission to create a Form, linked Sheet, Gmail draft and Google Task.
- One Make account/workspace allowed for a fictional-data test.
- OAuth permissions connecting Make to the selected Google services.
- A human owner who reviews account settings, app permissions and test-only boundaries.

**External account/login required：YES.**

**Approved account/workspace availability：YES, confirmed by the user on 2026-08-31.**

**OAuth permission approval：NO. Each new permission screen remains a hard stop.**

The Google test account and Make workspace have been prepared by the human user and are approved for this fictional test. The Make workspace is intended to remain on its non-paid/free plan. This does not approve any OAuth scope, paid feature, trial or payment path.

- Google account：new account is not necessarily required; an existing or dedicated test account must be explicitly approved.
- Make account：new account is needed only if no approved non-paid test workspace exists.
- Personal/business data：not required. Use fictional names, unique test IDs, reserved `.test` addresses and non-sensitive messages only.
- Payment information：not required and must not be requested.

## Free-plan verification

Make’s official pricing page displayed a Free plan on 2026-08-31 with no time limit, up to 1,000 credits per month, a visual builder, routers/filters and a 15-minute minimum scheduled interval. Documentation status：`VERIFIED`。Complete-workflow/account fit：`UNRESOLVED` until the approved workspace state and modules are observed。`[VERIFY CURRENT PLAN]`

This does not prove the full selected workflow can be completed at no cost in the approved account, region or future publication date. Google account/workspace licensing, admin restrictions, module availability and credit usage must be checked by the human tester before the build. No price is stated in the article.

Zapier was reviewed as an alternative. Its official Free-plan page listed two-step Zaps, which do not directly match this proposed multi-action demonstration, and said new accounts begin with a premium trial. To avoid starting a trial and to keep the visual flow in one scenario, Make is the proposed test tool. This is not a product verdict.

## Setup requirements after explicit approval

1. Create a separate test Form titled clearly as fictional/non-production.
2. Use fields such as fictional name, `.test` email address, service category, short message, preferred follow-up and consent-test flag.
3. Link responses to a new test Sheet and review access on both the Form and Sheet.
4. Confirm Forms response-summary sharing is disabled unless a human deliberately needs it.
5. Create a dedicated Make test scenario; connect only the minimum Google permissions required.
6. Add a new-row trigger, required-field filter, exception route, Gmail `Create a Draft` action, Google Tasks create-task action and status-write action.
7. Do not add Gmail Send Email or any other external-send module.
8. Keep the scenario disabled except during supervised test runs.
9. Record tool, plan, region, account type, module versions/settings and verification date without exposing identifiers or credentials.
10. Obtain human approval of the test boundary before the first run.

## What can be checked automatically without external login

- Article status, `humanApproved` and evidence flags.
- Presence of unresolved editorial markers.
- Draft route isolation, robots and sitemap gates.
- Test-case schema and expected-result completeness.
- Whether captured documentation contains banned outcome language.
- Whether the final redacted log contains every required test ID and result field.

These project checks do not test Make, Google Forms, Gmail, Google Tasks, OAuth, delivery or user experience.

## What requires human login or approval

- Creating or selecting the Google and Make test accounts/workspaces.
- Reviewing terms, data handling, plan limits and admin restrictions.
- Granting and later reviewing OAuth permissions.
- Building the scenario in current product interfaces.
- Running fictional submissions and inspecting execution logs.
- Verifying that drafts never send and retries do not duplicate tasks.
- Capturing and redacting real screenshots.
- Deciding whether results support any first-hand statement.

## Fictional test data

The minimum evidence round uses exactly the two prepared records in `ARTICLE_01_TEST_DATA.csv`:

1. `NAV-A1-20260831-SUCCESS-001` — complete fictional enquiry using a reserved `.test` reply address; expected normal route.
2. `NAV-A1-20260831-FAIL-MISSING-REPLY-001` — blank reply address; expected exception/manual-review route and no Gmail draft.

Names and companies are unmistakably fictional. No real inbox, `test@example.com`, customer record or sensitive data is permitted.

An expanded reliability round may later cover missing name/service, ambiguous/high-stakes content, duplicates, edits, retries and partial downstream failures. Those cases are **not** part of the minimum evidence completion and remain necessary before any one-and-only-one, retry-safety, broader exception-handling or production-reliability claim.

## Test steps

1. Record the manual baseline for intake, row entry, acknowledgement drafting, owner notification/task creation and status tracking.
2. Define required fields, accepted categories, allowed acknowledgement copy, exception reasons, reviewer and manual fallback.
3. Review permissions and ensure no real/contact/sensitive data exists in the test workspace.
4. Capture the disabled scenario map before execution. `[SCREENSHOT REQUIRED]`
5. Run one complete fictional case while supervised. `[TEST REQUIRED]`
6. Verify the source row, filter result, Gmail draft, Google Task and status row against expected values.
7. Confirm zero external messages were sent.
8. Run the prepared missing-reply-address case; verify it routes to manual handling with no Gmail draft.
9. Confirm Gmail Sent contains no item for either unique test ID and the success item exists only in Drafts.
10. Disable the scenario and complete the failure case with the manual fallback.
11. Capture the required redacted evidence without claiming unrun duplicate/retry behavior.
12. Export a redacted test log and have a second human review claims against evidence.

## Success conditions

- Zero external messages sent.
- Zero real or sensitive records used.
- Every accepted test lead receives one source row, one acknowledgement draft, one follow-up task and one traceable status record—or any deviation is recorded as a failure.
- Missing, ambiguous, complaint, price, sensitive-looking and high-stakes cases do not create a ready-to-send promise.
- Duplicate, edit and retry cases do not silently create uncontrolled duplicate work.
- The owner can disable the scenario and use the documented manual fallback.
- Logs identify test case, expected result, actual result, reviewer correction and failure.
- Any missed condition remains visible; failed cases are not deleted to improve the article.

These are test acceptance criteria, not completed results.

## Failure cases to preserve

- A missing field still generates a confident acknowledgement.
- A draft invents price, availability, policy, discount, refund or appointment information.
- A complaint or high-stakes request follows the normal path.
- A message field changes workflow instructions.
- Permission/network failure is silent or produces partial unlogged work.
- A retry or row edit creates duplicate drafts/tasks.
- A Gmail Send action exists or any external message leaves the account.
- Form/Sheet permissions expose records to unintended collaborators.
- Response summaries expose fictional responses contrary to the test setting.
- Reviewer/maintenance work makes the full workflow worse than the manual baseline.

## Screenshot requirements

All screenshots must come from the actual supervised test and be redacted. No mock product UI is acceptable.

1. Vendor-neutral workflow map and FIRST score.
2. Make plan/limit page with date. `[VERIFY CURRENT PLAN]` `[SCREENSHOT REQUIRED]`
3. Test Form fields and access settings.
4. Linked Sheet structure and separately reviewed permissions.
5. Disabled Make scenario overview.
6. Trigger, filter and exception route configuration.
7. Gmail `Create a Draft` module with no send path.
8. Google Tasks mapping.
9. Normal-case source row, draft, task and status.
10. Ambiguous/high-risk manual route.
11. Duplicate/retry/failure execution log.
12. Disabled scenario and manual fallback evidence.
13. Redacted measurement/test summary.

Redact tokens, workspace IDs, account email, cookies, billing, API keys, OAuth data and any identifier. If a screenshot cannot be safely captured, omit it and leave the evidence requirement unresolved.

## Claims forbidden before testing

- “We tested,” “works,” “easy,” “reliable,” “safe,” “secure,” “compliant” or “production-ready.”
- Setup duration, exact number of clicks/steps, reliability or completion rate.
- Time/money savings, fewer errors, faster responses, higher conversion, revenue or ROI.
- That every selected module is available on every account/region/plan.
- That the workflow is free or that current plan limits will remain unchanged.
- That human review cannot be bypassed or duplicate work cannot occur.
- Any privacy/security/data-retention/training/deletion guarantee.
- Any customer, tester, owner or reviewer experience.

## Test record

- Tool(s)：Google Forms、Google Sheets、Make、Gmail、Google Tasks (planned only)
- Plan / region：Not confirmed
- Account/workspace availability approval：YES — user confirmed 2026-08-31
- External login performed：NO
- OAuth permission granted：NO
- Evidence-round date：2026-08-31
- Exact workflow specification：PREPARED LOCALLY
- Minimum fictional test records：2 PREPARED LOCALLY
- Stop reason：Authenticated browser control unavailable in this session; exact OAuth screen not observed and permission grant not approved
- Test date：Not run
- Tester：Not assigned
- Reviewer：Not assigned
- Cases passed / failed：Not run
- Screenshots captured：0
- Claim Ledger updated from real test：NO
- Workflow status：UNRESOLVED
- Claims marked TESTED：0
- Human publication approval：**NO**
