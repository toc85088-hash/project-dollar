# Cleaning MVP Sprint 1.5

Date: 2026-09-24 (work began 23 September). Local-only; continued from clean `8bf067f`. No rebuild/redesign, dependency change, deployment, DNS edit, external login, email send, outreach, purchase, indexing, remote push or Sprint 2.

## Completed

- Centralized owner-approved `hello@naveliqo.com`; used across Home, footer, Contact, About, Cleaning, pilot and legal pages. Reject a different contact override without printing it. Private forwarding address is neither requested nor exposed.
- Centralized **Get a Free 90-Second Demo** → the real browser demo; **Ask About the Pilot Setup** → the public mailto. Added copyable-email fallback and scope links, not a fake submission.
- Integrated approved **US$149–199** pilot setup range, included scope, exclusions, customer responsibilities, limitations and written-agreement boundary. No guaranteed results or invented vendor prices.
- Preserved interactive fictional demo and local brief download; explicitly not a Gmail/Make/CRM/calendar/booking/customer connection. Included range/exclusions in the downloaded brief.
- Aligned trust pages with current contact, inbound Email Routing, local tools, no checkout/tracking/affiliate relationships and no claimed legal review or fabricated organisation.
- Prepared exact safe environment values and deployment/HTTPS/DNS/smoke/rollback checklist, including non-destructive recovery from `8bf067f`.
- Sites workflow kept the existing architecture and local-only preview; no hosting registration, source sync or deployment.
- Owner subsequently selected **Cloudflare Workers**. Added explicit release config and source/generated-config guard; retained the existing adapter/runtime date. Local Workers dry-run and workerd route/browser QA passed. Public Worker/version URLs, custom routes and optional persisted Worker logs remain off. Privacy names the selected host without claiming zero infrastructure processing.

## Files changed

Created: `website/app/cleaning/offer.ts`, `website/wrangler.json`, `website/scripts/check-worker.mjs`, `03_網站/CLEANING_PRODUCTION_ENVIRONMENT.md`, `07_Codex/CLEANING_CTA_AUDIT.md`, this report.

Updated: `website/.env.example`, `.gitignore`, Vite/ESLint config, package build script, website/root READMEs; site config, homepage, shared shell, CSS, standard trust content, Cleaning service/demo/pilot pages and brief client; placeholder/project/site/Cleaning checks; brand status, Cleaning specification, pilot-offer document, deployment checklist, current launch-readiness note and Roadmap. Historical sprint reports, articles, assets, legacy files and Git history are preserved.

## Tests

| Check | Result |
| --- | --- |
| `pnpm lint` | PASS including final Worker guard/generated-output exclusion; interrupted final check completed after resumption |
| `pnpm exec tsc --noEmit --strict` | PASS including final adapter config |
| `pnpm build` including production placeholder/editorial guards | PASS; 0 unapproved findings / 0 development-only warnings; all five build stages complete |
| Editorial isolation | PASS with intentional Article 1 hold: three marker types remain only in a non-publishable draft; not concealed or published |
| `node scripts/check-cleaning.mjs` | PASS: approved config, private-contact override rejection, closed gate, exact range/CTAs; success, missing/invalid email, area/scope/size, duplicates, no send/booking and local-only model invariants |
| Production `pnpm test:site` | PASS: 17 public routes, 16 unique internal links, section targets, CTA recipients/destinations, no CC/BCC or private Gmail address, metadata, 404, 9 isolated article routes, hub/route indexing guards, robots and empty sitemap |
| Workers configuration and runtime | PASS: source/generated vars match, unique compatibility flags, disconnected resources/public routes; same full route suite passes in local workerd; Chrome contact/demo hydration and successful case pass with no observed console errors |
| Wrangler `deploy --dry-run` | PASS; explicitly exited without upload. Final package: 842.46 KiB / gzip 250.38 KiB, 21 assets; these are local artifact sizes, not measured production performance |
| `node scripts/check-project.mjs` | PASS: 50 core documents, 11 briefs, 11 research checklists, 65 preserved legacy files and article/launch safeguards |
| Chrome production-browser QA | PASS: desktop primary CTA opens demo; success → owner-review draft/task/status previews; missing-email → manual review/no draft; neither confirms a booking or sends mail |
| Responsive/navigation | PASS spot checks: 360px Home and pilot no horizontal overflow; menu opens by keyboard Enter with visible focus; menu pilot link works and closes on navigation. 768px pilot no overflow; Contact renders and footer navigation works |
| Pilot brief | PASS: generated approved range/limitations; download read back as `C:/Users/Xu/Downloads/cleaning-pilot-brief (1).txt` (1,270 bytes). Changing a choice invalidates the previous brief. No submission occurred |
| Browser error/warn log | No entries observed in this QA session |
| Git diff / integrity | `git diff --check` clean; full fsck reported dangling blobs only, no corrupt/missing objects; no pruning or history rewrite |

Known non-failing build notices: Vinext beta static route classification is incomplete (`?`); Vite reports plugin timing. Real served routes were tested, not inferred from the build table. Linked dependencies required elevated local execution; no new installation. Browser QA is an agent-run emulated viewport spot check, not a physical-device, screen-reader or Core Web Vitals certification. Email-client sending/delivery and external connectors were not tested; active/monitored inbox status comes from the owner.

Worker QA caught duplicate `nodejs_compat` flags from merging old inline config with the explicit config; removed the duplicate and added a regression assertion. Generated `.wrangler/dry-run` output initially triggered source-scan findings; excluded that already ignored generated directory, retaining source and runtime checks. Final build/runtime tests passed. The unavailable Sites hosting skill path was not used to publish; Cloudflare official docs and installed CLI were used for local preparation. A usage-limit approval failure delayed only final QA/commit; resumed checks succeeded without bypassing approval.

## Remaining human release boundary

**No local implementation blocker remains. One human action: authorise the controlled Cloudflare Workers deployment/DNS cutover when ready.** This sprint does not perform it. At that step the owner verifies account access/plan, prior DNS state, actual HTTPS and live smoke results; the Cloudflare-specific checklist includes rollback. No remote Worker, live certificate or deployed rollback version is claimed to exist.

Readiness means the checked-in release package/config is ready for that process, not already provisioned infrastructure. Trust readiness concerns the current informational copy, not legal certification. Optional Worker logs are disabled; account settings must match the notice. Branded outbound replies must not reveal the private destination; no outbound-delivery claim is made.

Generic articles and real Make evidence are not blockers to this narrowly scoped informational site. They remain isolated. No article was approved or published. A connected paid pilot needs its own written agreement, scoped permissions, compatibility and real test evidence before work/live activation; the website makes that explicit.

## Readiness

- Public contact ready: **YES**
- Pilot offer ready: **YES**
- Trust pages ready: **YES** (current application copy)
- CTA flow ready: **YES**
- Production environment ready: **YES** (Workers configuration locally validated; no remote provisioning)
- Production build ready: **YES**
- Safe to deploy publicly: **YES** (ready for controlled, separately authorised noindex release; not deployed)
- Safe to enable indexing: **NO**
- Safe to proceed to Sprint 2: **YES** (only when separately requested; not started)

Global gate CLOSED; all four environment flags false; robots `Disallow: /`; empty sitemap; all generic hubs contentReady=false; Cleaning noindex; 0 published articles. No Search Console, GA4, AdSense or affiliate code/link added.

Local checkpoints: `6b51640 feat: finalize cleaning MVP contact and pilot offer`, followed by `chore: verify Workers release readiness for cleaning MVP`. Git has no configured identity in this execution context, so commits use the existing repository agent identity `Project Dollar Codex <codex@localhost>` through command-scoped options; no human identity or global configuration is invented. Resolve the final report commit using `git log -1 --format="%h %s" -- 07_Codex/CLEANING_MVP_SPRINT_1_5_REPORT.md`; final worktree verification follows that commit. Local preview is stopped at handoff. No push.
