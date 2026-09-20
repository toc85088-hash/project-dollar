# Naveliqo — Cleaning MVP Sprint 1

Date: 2026-09-21. Scope: local implementation and verification only.

## Completed

- Kept Naveliqo, approved domain, general positioning and tagline. No permanent Cleaning rename.
- Refocused homepage and main navigation on US residential cleaning inquiries, quote preparation and booking handoffs.
- Added `/cleaning`, `/cleaning/demo`, `/cleaning/pilot` within the existing Vinext/React app. No framework rebuild or new dependency.
- Added centralized vertical registry for Cleaning, HVAC, Plumbing, Landscaping, Pest Control and Other Home Services. Only Cleaning has pages; future empty destinations remain 404.
- Implemented a deterministic local demo: complete inquiry, missing reply address, outside illustrative service area, duplicate TEST ID. Owner controls every send, price and appointment. No AI API or external integration.
- Added select-based pilot brief generation and a real local `.txt` download. No false lead submission or active intake.
- Wrote proposed pilot scope, acceptance boundaries, discovery plan and six source-linked business prospects. No outbound messages or form submissions.
- Updated About and data-handling/terms descriptions to match the local tools. No invented company, staff, office, inbox or legal review.
- Preserved all generic articles, research and 65 legacy `.md.txt` files. Seven articles remain needs_review; Article 1 remains draft. Zero published. Returned AI Automation to contentReady=false with the other generic hubs.

## Existing work preserved

Started on `master` at `e84f7dc` with 14 modified tracked files and one untracked launch-approval record from the interrupted earlier sprint. Preserved its editorialReady gate, seven review-ready records, 18 September source register, trust baseline, scaffold guard fixes and documentation. The new direction supersedes the old seven-article approval proposal; no publication approval was inferred. Those scoped inherited edits are included in the local sprint checkpoint, not represented as newly researched this round.

## Files created

- `01_市場研究/CLEANING_MVP_STRATEGY.md`
- `03_網站/CLEANING_MVP_SPEC.md`
- `06_收入/CLEANING_PILOT_OFFER.md`
- `06_收入/CLEANING_LEAD_GENERATION.md`
- `07_Codex/CLEANING_MVP_SPRINT1_REPORT.md`
- `website/app/industries.ts`
- `website/app/cleaning/page.tsx`, `metadata.ts`, `demo-model.ts`
- `website/app/cleaning/demo/page.tsx`, `demo-client.tsx`
- `website/app/cleaning/pilot/page.tsx`, `pilot-client.tsx`
- `website/scripts/check-cleaning.mjs`

## Files modified this sprint

Root README, brand-positioning document, Roadmap, website README; current launch-readiness report, prior approval proposal and hub audit; site config, homepage, site shell, CSS, standard page content, generic hub policy; package scripts, project validation and running-site checks. Full exact inventory is available in this sprint’s local commit. Existing article source changes listed above were carried forward, not published.

## Tests

| Check | Result / evidence boundary |
| --- | --- |
| TypeScript `pnpm exec tsc --noEmit` | PASS; strict mode retained |
| `pnpm lint` | PASS |
| Placeholder production validation | PASS; 0 unapproved high-risk findings, 0 development-only warnings |
| Editorial marker validation | PASS with intentional Article 1 PRODUCTION HOLD: TEST REQUIRED, SCREENSHOT REQUIRED, VERIFY CURRENT PLAN; no marked record publishable |
| `pnpm test:cleaning` | PASS: success, blank/invalid email, area, unsupported service, invalid home details, duplicate handling, immutable input, no send/booking, fictional records, local-only components, vertical slots and generic hub gates |
| `pnpm test:project` | PASS after report addition: 47 core documents, 11 briefs, 11 checklists, 65 preserved legacy files |
| `pnpm build` | PASS; all five Vinext build phases completed |
| Development route check | PASS: 17 accessible routes, 18 discovered links, 9 unavailable article routes, five future vertical 404s, fragment targets, metadata, noindex, robots and sitemap |
| Production route check | PASS: 17 accessible routes, 16 discovered links, same draft/hub/404/robots/sitemap protections; development-only links explain count difference |
| Browser demo | PASS in Chrome: success preview, missing-email manual review, outside-area manual review, repeat-ID skip; displayed email sent No and booking NOT CONFIRMED. Success and missing-email repeated on the production build |
| Browser pilot builder | PASS: changed handoff to quote details, generated accurate brief and clicked download; actual `C:/Users/Xu/Downloads/cleaning-pilot-brief.txt` read back (1,086 bytes), including selected quote handoff |
| Browser responsive spot checks | 360px homepage/demo, 768px pilot, 1280px homepage: DOM widths within viewport; mobile menu and navigation worked. These are emulated viewport spot checks, not physical-device certification |
| Keyboard spot check | Enter on demo action generated the review result after hydration; labels, native select controls and aria-live result regions present |
| Browser error log | No error/warn entries in inspected demo/pilot session |
| Full screen-reader / accessibility / performance audit | NOT COMPLETED; no accessibility score, Lighthouse score or Core Web Vitals claim |
| Git diff/integrity | PASS: `git diff --check`; `git fsck --full` exited 0 with existing dangling blobs, not corrupt/missing objects. No pruning or history rewrite |

## Fixes and tooling limitations encountered

- Initial homepage metadata override dropped inherited OG siteName/image. Fixed explicit parent-brand OG/Twitter values and reran route checks successfully. Existing OG asset retained; not declared a final visual identity.
- Windows sandbox could not read linked node_modules. TypeScript, lint and build used approved elevated local execution; no package purchase/install or remote deployment.
- The Sites skill helper path was unavailable when invoking its build wrapper; the existing checked-in production build command completed instead. No architecture replacement.
- In-app browser reported a session error; Chrome local-only QA succeeded instead. One download-event waiter timed out, but actual downloaded file and selected content were independently verified; no second download needed.
- One keyboard attempt during route hydration had no result; after checking current UI, Enter worked. No claim of exhaustive hydration timing coverage.
- `vinext start --host` did not bind as intended: this version requires `--hostname`. The first production-test process was stopped; subsequent preview uses `pnpm start --hostname 127.0.0.1`. No hosting or DNS change.

## Safeguards

Global launch gate CLOSED. Generic and Cleaning pages noindex. Robots Disallow `/`. Sitemap empty. No Article 1 publication, no generic publication, no new schema on Cleaning pages, no Google/Make interaction, no OAuth, no email send, no payment/trial, no deployment, no DNS change, no Search Console/analytics/AdSense/affiliate action, no remote push, no legacy deletion.

## Remaining blockers and human decisions

1. No real monitored public inbox: pilot intake remains unavailable. The brief is a local planning artifact, not captured lead data.
2. Owner approval of actual pilot fee/scope, operator identity, privacy/provider facts and service agreement is still required. No lawyer review claimed.
3. Real Google/Make or other integration needs independently reviewed permissions, current plan checks and fictional success/exception/partial-failure/no-send evidence. This demo must never be cited as that test.
4. Real customer discovery has not occurred. Six websites establish observable flows only, not customer pain, demand, interest, or revenue.
5. Private staging, real-device/screen-reader review, backup/rollback/provider review and explicit public release/indexing approval remain outstanding.

Exactly one immediate owner action: **provide and approve one real monitored public contact email**. No password or payment details are needed. This does not authorize sending, deployment or indexing.

## Next safe work

Codex can refine local copy/demo behavior, add failure simulations and tests, and prepare fictional integration fixtures. Human approval is needed for offer terms and external access. Real provider/account verification and consenting discovery are required before integration/outcome claims. Keep Article 1 separate; do not chase generic article count.

## Readiness

- Cleaning local MVP review-ready: YES
- Active lead collection / sales intake ready: NO
- Real connected automation tested: NO
- Safe to deploy publicly: NO
- Safe to enable indexing: NO
- Search Console ready: NO
- AdSense application ready: NO

## Final checkpoint

Production preview command: `pnpm start --hostname 127.0.0.1`, port 3000; `Get-NetTCPConnection` confirmed the listening address is exactly `127.0.0.1`. Final production route check passed with 17 routes / 16 links / 9 isolated article routes and unchanged robots/sitemap gates. The demo’s actual account integration remains NOT TESTED.

Local checkpoint uses commit subject `feat: add cleaning-first Naveliqo MVP and pilot demo`; the commit containing this report is discoverable with `git log -1 --format="%h %s" -- 07_Codex/CLEANING_MVP_SPRINT1_REPORT.md`. Final commit hash and observed worktree status are reported in the handoff message. No push or deployment.
