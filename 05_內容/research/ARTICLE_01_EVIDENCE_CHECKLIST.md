# Article 01 Minimum Evidence Checklist

Article：**What Should a Small Business Automate First?**

Created：2026-08-30

Status：**BLOCKED AT EXTERNAL LOGIN BOUNDARY**

Selected workflow：

`fictional Google Form lead → linked Google Sheet → Make required-field/exception filter → Gmail acknowledgement draft (never send) → Google Tasks follow-up → Sheet status log → human review/manual fallback`

This checklist defines the minimum evidence required before publication. It does not record a completed test. Every unchecked publication blocker remains `UNRESOLVED`.

## Status definitions

- `VERIFIED`：current official documentation directly supports the limited capability or plan statement.
- `TESTED`：the exact selected workflow step was run with fictional data and evidence was retained.
- `UNRESOLVED`：login, configuration, execution, screenshot or human review is still required.
- `REMOVE`：the claim must not appear unless a later test supports a carefully limited replacement.

## 1. Workflow steps

Minimum end-to-end evidence must show all of the following in one supervised test workspace:

| Required evidence | Minimum pass condition | Current status |
|---|---|---|
| Form submission | One fictional, non-sensitive lead is accepted by the test Google Form | UNRESOLVED |
| Source record | The same test ID appears once in the linked Google Sheet | UNRESOLVED |
| Make trigger | The scenario detects the intended new row, not an unrelated edit or old row | UNRESOLVED |
| Required-field filter | Complete input follows the normal route; incomplete input follows the exception route | UNRESOLVED |
| Gmail acknowledgement | One draft is created with only approved fictional facts; no message is sent | UNRESOLVED |
| Owner follow-up | One Google Task is created with the correct test ID and due-date rule | UNRESOLVED |
| Status log | The Sheet records the run status and any exception without hiding failure | UNRESOLVED |
| Human review | A named tester checks the row, draft, task and log before any external action | UNRESOLVED |

Publication requires all eight items to become `TESTED`. Official integration pages alone cannot satisfy this section.

## 2. Tool capability

| Capability | Required evidence | Current status |
|---|---|---|
| Google Forms → Google Sheets | Current Google documentation plus a real linked test Sheet | VERIFIED documentation / UNRESOLVED test |
| Make reads the selected Sheet event | Current Make module visible in the approved account plus one successful run | UNRESOLVED |
| Make filter/exception route | Saved scenario configuration plus normal and failure execution logs | UNRESOLVED |
| Make → Gmail `Create a Draft` | Current module visible plus one real draft; no Send module or bypass path | VERIFIED documentation / UNRESOLVED test |
| Make → Google Tasks | Current module visible plus one real fictional follow-up task | VERIFIED catalogue / UNRESOLVED test |
| Status write-back | Current module/action plus one traceable status update | UNRESOLVED |

Minimum official source refresh before publication:

- Google Forms response storage and collaborator permissions.
- Google Forms response-summary sharing and notification behavior.
- Make scenario planning/permissions documentation.
- Make Gmail and Google Tasks integration documentation.

## 3. Free-plan availability

The current Make pricing page was verified on 2026-08-30 as displaying a Free plan and published limits. That does **not** prove the selected account can run this complete workflow without a paid plan.

Required before publication:

- [ ] Recheck the official Make pricing page on the publication-review date.
- [ ] Confirm the approved account is on a non-paid plan and no paid trial is active.
- [ ] Confirm Google Sheets, Gmail draft, Google Tasks, filters and required scenario behavior are available on that account.
- [ ] Record visible usage/interval limits without entering payment information.
- [ ] Confirm the test will remain below the visible free allowance.

Current status：`UNRESOLVED` for the complete workflow. The article must retain `[VERIFY CURRENT PLAN]`.

## 4. Setup complexity

Do not claim that setup is “easy” or give an exact setup time before a real beginner-oriented test.

Minimum evidence:

- [ ] Record whether an existing approved Google account was sufficient.
- [ ] Record whether a new Make account was required.
- [ ] Record the number of app connections and scenario modules actually used.
- [ ] Record the real setup start/end time, interruptions and permission problems.
- [ ] Have a non-developer human review whether the written steps are understandable.
- [ ] Preserve any confusing or failed setup step instead of removing it from the log.

Current status：`UNRESOLVED`.

## 5. Success case

Use one complete fictional lead with a unique ID and a reserved `.test` email address.

Minimum pass condition:

1. One Form response creates one Sheet row.
2. Make processes the intended row once.
3. One Gmail draft contains only approved fictional details.
4. Zero external emails are sent.
5. One Google Task contains the correct test ID and follow-up instruction.
6. The status log links the outputs to the same test ID.
7. The human reviewer can discard the draft/task and complete the work manually.

Current status：`UNRESOLVED`; no success run occurred.

## 6. One realistic failure case

Minimum required failure case：**missing reply address**.

Expected behavior:

1. The Form/Sheet record keeps the fictional test ID and missing-field state.
2. The Make filter routes the record to the exception/manual path.
3. No ready-to-send acknowledgement draft is created.
4. No external message is sent.
5. The owner receives a visible manual-review item or status.
6. The log records the failure reason without inventing a replacement address.

Current status：`UNRESOLVED`; no failure run occurred.

Duplicate/retry testing remains desirable and is required before claiming one-and-only-one behavior. If it is not tested, that reliability claim stays `UNRESOLVED` or is removed.

## 7. Human fallback

Minimum fallback evidence:

- [ ] Disable/pause the Make scenario.
- [ ] Confirm no pending route sends an external message.
- [ ] Process one fictional lead manually from the Form/Sheet record.
- [ ] Manually create or record the follow-up action.
- [ ] Record who owns exception review and how a failed run is found.

Current status：`UNRESOLVED`.

## 8. Screenshots required

Only screenshots from the actual approved test are acceptable. Redact account email, workspace IDs, tokens, cookies, billing, API keys, OAuth details and any identifier.

Minimum screenshot set:

1. Dated official Make plan/limits page used for the final check.
2. Google Form and linked Sheet structure with access settings reviewed separately.
3. Full Make scenario overview showing the trigger, filter, draft action, task action and status route—with no Send action.
4. Success evidence: matching fictional test ID in the Sheet row, Gmail draft, Google Task and status log.
5. Failure evidence: missing-reply-address exception route and recorded reason.
6. Disabled scenario plus documented manual fallback result.

Current status：`UNRESOLVED`; screenshots captured：**0**.

## 9. Claims requiring current official sources

| Claim | Required source | Refresh point | Current status |
|---|---|---|---|
| Forms responses can be stored in a linked Sheet | Google Docs Editors Help | Before final fact check | VERIFIED 2026-08-30 |
| Form and Sheet collaborator access must be reviewed separately | Google Docs Editors Help | Before final fact check | VERIFIED 2026-08-30 |
| Response-summary sharing can expose responses | Google Docs Editors Help | Before final fact check | VERIFIED 2026-08-30 |
| Make lists Gmail `Create a Draft` | Make integration documentation | Before test and before publication | VERIFIED 2026-08-30 |
| Make lists Google Tasks creation capability | Make integration documentation | Before test and before publication | VERIFIED 2026-08-30 |
| Make Free-plan availability and limits | Make pricing | Test day and publication-review day | VERIFIED page / UNRESOLVED account fit |
| Risk/testing/human-oversight wording | NIST, OAIC and Canada OPC guidance | Before final legal/editorial review | VERIFIED sources / human applicability review required |

No external statistic is required for this article. If a statistic is later proposed, it needs the original study and methodology or must be removed.

## 10. External login boundary

### Tools required

- **Google account**：create/access the test Form, Sheet, Gmail draft and Google Task.
- **Make account**：build and run the visual scenario and inspect execution logs.

### Is the free plan sufficient?

The official Make page indicates a Free plan that appears suitable for a small test, but complete suitability is `UNRESOLVED` until the approved account is inspected. No plan upgrade, payment method or paid trial is allowed.

### Is a new account required?

- Google：not necessarily; use only an existing or dedicated test account explicitly approved by the user.
- Make：a new account is required only if the user has no approved non-paid test workspace. Account creation needs explicit approval and must not start a paid trial.

### Exact actions after explicit approval

1. Review the visible plan and confirm no paid trial/payment path is active.
2. Create a clearly labelled non-production Form and linked Sheet.
3. Review Form and Sheet access separately.
4. Connect the minimum Google permissions to a disabled Make test scenario.
5. Configure the trigger, required-field filter, exception route, Gmail draft, Google Task and status log.
6. Run one success case and the missing-reply-address failure case with fictional data.
7. Disable the scenario, execute the manual fallback and capture redacted evidence.
8. Update the ledger only from observed results.

### Data required

No personal or business data is needed. Use fictional names, fictional service requests, unique test IDs and reserved `.test` email addresses. No customer, employee, payment, health, legal, confidential or identifiable data is permitted.

## Publication stop gate

Publication remains blocked until:

- workflow steps, success case, failure case and fallback are `TESTED`;
- screenshots are complete and redacted;
- current plan/module claims are refreshed;
- every editorial marker is resolved or the related claim is removed;
- a real author, fact checker and human approver are assigned;
- `status: draft` and `humanApproved: false` are changed only by explicit future publication approval.

Current result：**EVIDENCE INCOMPLETE / SAFE TO CONTINUE ONLY AFTER EXPLICIT LOGIN APPROVAL**.
