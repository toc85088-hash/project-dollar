# Cleaning MVP — Local Implementation Contract

Date: 2026-09-21. Existing Vinext / React architecture retained. No new dependency, account, hosted backend, deployment, or database.

Sprint 1.5 update (2026-09-24): owner-approved public inbox `hello@naveliqo.com` is now centralized and usable through visitor-controlled mailto links. Approved setup range and two conversion CTAs live in `app/cleaning/offer.ts`; the pilot is an enquiry offer with written scope/fee agreement before work, not a checkout. See `CLEANING_PRODUCTION_ENVIRONMENT.md` and `DEPLOYMENT_CHECKLIST.md`. All indexing/publication safeguards below are unchanged.

## Information architecture

| Path | Purpose | Indexing |
| --- | --- | --- |
| `/` | Current Cleaning-focused conversion page under Naveliqo | noindex; existing preparation canonical retained, not launch approval |
| `/cleaning` | Service scope: follow-up, quote preparation, booking handoff | noindex; no canonical/schema |
| `/cleaning/demo` | Fictional, deterministic browser simulation | noindex; no canonical/schema |
| `/cleaning/pilot` | Proposed scope + locally downloadable planning brief | noindex; no canonical/schema |
| Existing generic hubs | Retained resources outside primary navigation | all contentReady=false; noindex |
| Future verticals | Reserved in code registry, no routes | 404, not in navigation/sitemap |

Brand stays in `app/site-config.ts`. Vertical names and current focus stay in `app/industries.ts`. Cleaning metadata is centralized in `app/cleaning/metadata.ts`; explicit noindex must not be relaxed when a domain is known. A future release needs both global and route-specific approval. Global gate closed, robots Disallow `/`, sitemap empty.

## Demo contract

`app/cleaning/demo-model.ts` is a pure function with no network, AI call, account connection or storage. Inputs are fixed fictional records, not visitor/customer data.

Fields: testId, firstName, replyEmail, ZIP, service, frequency, bedroom count, bathroom count, requested timing. ZIP 78701 is an illustrative test rule, not Naveliqo’s actual service-area restriction or client coverage.

| Case | TEST ID | Expected result |
| --- | --- | --- |
| Complete | NAV-CLN-S1-20260921-OK | READY FOR OWNER REVIEW; reply-text preview, task text, checklist, status |
| Missing email | NAV-CLN-S1-20260921-NOEMAIL | MANUAL REVIEW; no draft; manual task |
| Outside demo area | NAV-CLN-S1-20260921-AREA | MANUAL REVIEW; no draft; scope-review task |
| Same ID again | Reuse any processed ID | DUPLICATE SKIPPED; no new draft/task |

Every result: booking NOT CONFIRMED, emailSent=false. `.test` email addresses never receive email. A text preview is not a Gmail draft; a task preview is not a Google Task; a log preview is not a Sheet update. Refresh/reset clears memory. Duplicate detection is demonstrative, not durable concurrency protection.

## Pilot brief

Four select inputs only: inquiry channel, first handoff, current tools, cleaning service. No personal fields, free text, contact details, analytics event or backend submission. Submit builds local text; download creates a browser Blob file. Changes invalidate the earlier brief. Refresh clears state. No session/local storage. The approved public mailto opens the visitor's composer; no automatic sends. The downloaded brief includes the approved setup range and exclusions but is not an order or accepted service agreement.

## Connected pilot acceptance — NOT COMPLETED

Keep account access and OAuth separate. Inspect existing native automations first. Confirm exact account plan/limits using current official sources and the actual workspace; do not assume free plan is sufficient. No trial/payment.

Normal inquiry must create draft only, follow-up task, and persistent log; missing reply must enter manual review without guessing; out-of-area must stop commitments; duplicate event must be idempotent in persistent storage; partial failure must be visible without falsely marking completion. Confirm zero Sent items; owner must be able to disable and recover manually. Capture redacted real evidence before any tested-integration claim.

## Validation

`pnpm test:cleaning` tests pure model and local-only invariants. `pnpm test:site` checks 17 accessible routes, actual href/fragment targets, five future vertical 404s, isolated article routes and gates. `pnpm test:project`, lint, strict TypeScript, production build remain required. Browser interactions and viewport results are separately recorded in the sprint report; unit tests are not a substitute for integration evidence.
