# Article 01 OAuth Boundary Report

Report date：2026-08-31

Site/article state：**PRE-LAUNCH / DRAFT / NOT PUBLISHED**

## Outcome

The Article 1 workflow is prepared locally through the last safe step before creating the first Google connection in Make. The approved Google test account and approved Make workspace are available, and Make onboarding is complete. No account content was accessed from this Codex session because an authenticated browser-control interface is not available here.

No OAuth permission was requested or granted. No scenario was created or run. No Gmail draft, Google Task, Form, Sheet row, external message or screenshot was created. No paid trial, purchase, deployment, indexing or article publication occurred.

## Current step

**STOPPED BEFORE CREATING THE FIRST GOOGLE SHEETS CONNECTION IN MAKE.**

The next product action would be to add/configure Google Sheets `Watch New Rows` and choose **Create a connection**. That action may hand off to a Google consent screen. The permission screen must be inspected before approval.

## App requesting access

**Not yet observed.**

The expected connection path is Make requesting authorization through Google for the relevant Google app connection. This expectation is not evidence of the actual app identity displayed on the consent screen. The human tester must record the exact requesting-app name shown by Google.

## Exact permissions/scopes shown

**NOT OBSERVED — NO PERMISSION SCREEN WAS OPENED.**

No OAuth scope string or permission label is recorded because inventing one would violate the evidence rules. The exact consent-screen wording must be copied or captured from the real screen, with the account identity redacted, before any Continue/Allow action.

## Why access may be needed

These are workflow needs, not claims about the exact scopes Google will display:

| Connection | Narrow workflow need | Not authorized |
|---|---|---|
| Google Sheets | Read the new fictional Form-response row and update status cells in that same test Sheet | Other Drive files, unrelated Sheets or broader account data |
| Gmail | Create one acknowledgement **draft** in the test account | Sending mail, reading unrelated mail, changing settings or forwarding |
| Google Tasks | Create internal review/follow-up tasks in the test-only list | Unrelated account data or actions beyond the test tasks |

Google Forms itself is used to create the fictional submission and linked Sheet in the approved test account. It must not be connected to Make unless the live configuration proves it is strictly necessary; the selected trigger is Google Sheets.

## Does any permission appear broader than necessary?

**UNRESOLVED.** No real permission text is visible yet, so breadth cannot be assessed honestly.

If the screen includes broad access to all Gmail messages, all Drive files, account-wide management, sending email, deletion or another capability not limited to the stated workflow, stop and report it as potentially broader than necessary. Do not approve merely because the workflow specification needs a narrower action.

Current Make documentation for Google Tasks may describe additional Google Cloud/OAuth-client setup. If the live account requests API enablement, client-secret creation, Cloud project changes or other setup beyond a normal consent screen, stop again. Those actions are not authorized by the current request.

## What the human needs to click manually

Because this session cannot control an authenticated browser, the human tester must perform only these steps:

1. Open the approved Make workspace and create/open the disabled scenario named `NAV-A1-FICTIONAL-LEAD-TEST-20260831`.
2. Add Google Sheets `Watch New Rows`.
3. Select **Create a connection** (or the equivalent current UI control).
4. Continue only until the Google consent/permission screen is visible.
5. **STOP. Do not click Continue, Allow, Accept or any equivalent approval button.**
6. Copy the exact app name and every permission/scope label shown, or capture a screenshot with the account email, avatar, IDs and session data redacted.
7. Provide that exact information for scope review and separate approval.

Do not open the Gmail or Google Tasks connection screens yet. Each connection must be reviewed as a separate OAuth boundary unless the product presents a combined screen.

## Prepared locally

- `05_內容/research/ARTICLE_01_WORKFLOW_BUILD_SPEC.md` — exact field schema, Sheet columns, scenario routes, module mappings, safety invariants, run order and screenshot plan.
- `05_內容/research/ARTICLE_01_TEST_DATA.csv` — two fictional, non-sensitive records with unique traceable test IDs.
- Updated Evidence Checklist, Test Plan and Claim Ledger with the approved account/workspace state and unchanged `0 TESTED` result.

Prepared test IDs:

- `NAV-A1-20260831-SUCCESS-001`
- `NAV-A1-20260831-FAIL-MISSING-REPLY-001`

## Evidence state

| Item | Result |
|---|---|
| Workflow configured in Make | NO |
| OAuth granted | NO |
| Normal success run | NO |
| Missing-reply-address run | NO |
| Zero sent emails confirmed | NO — requires real account inspection after run |
| Gmail item confirmed draft-only | NO |
| Google Task confirmed | NO |
| Sheet status confirmed | NO |
| Scenario disabled after testing | NOT APPLICABLE — no scenario/run yet |
| Manual fallback demonstrated | NO |
| Evidence screenshots | 0 |
| Workflow claims marked `TESTED` | 0 |

## Safeguards preserved

- Article remains `status: draft` and `humanApproved: false`.
- `evidenceComplete` and `screenshotsComplete` remain false.
- No publication, deployment, DNS, indexing, Search Console, analytics, AdSense or affiliate action occurred.
- No real data, email send, payment, paid trial or invented evidence was used.

## Local verification

These checks verify the repository and launch gates only; they are not substitutes for the external workflow test.

| Check | Result |
|---|---|
| Project integrity | PASS — 39 required documents, 10 briefs, 10 research checklists and launch/article safeguards |
| Placeholder validation | PASS/HOLD — 0 unapproved high-risk findings; 2 existing development-only Sites scaffold warnings |
| Editorial marker validation | PASS/HOLD — 3 unresolved marker types remain in the non-publishable Article 1 source |
| ESLint | PASS |
| TypeScript strict | PASS |
| Production build | PASS |
| Local route/internal-link test | PASS — 13 public routes and 13 unique internal links |
| Hub indexing guards | PASS |
| Draft isolation | PASS |
| robots | PASS — pre-launch blocking retained |
| sitemap | PASS — empty before launch |
| 404 | PASS |
| `git diff --check` | PASS |
| Git object connectivity | PASS — `git fsck` exited successfully; unreachable historical blobs were reported and left untouched |

No authenticated browser test, visual browser QA or external product test is claimed.

## Decision

- Safe to inspect the first OAuth screen manually：**YES, if the human stops before approval.**
- Safe to grant OAuth now：**NO — exact permissions have not been reviewed.**
- Evidence complete：**NO.**
- Safe to publish：**NO.**
