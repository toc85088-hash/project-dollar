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

## Files changed

Created: `website/app/cleaning/offer.ts`, `03_網站/CLEANING_PRODUCTION_ENVIRONMENT.md`, `07_Codex/CLEANING_CTA_AUDIT.md`, this report.

Updated: `website/.env.example`, website/root READMEs; site config, homepage, shared shell, CSS, standard trust content, Cleaning service/demo/pilot pages and brief client; placeholder/project/site/Cleaning checks; brand status, Cleaning specification, pilot-offer document, deployment checklist, current launch-readiness note and Roadmap. Historical sprint reports, articles, assets, legacy files and Git history are preserved.

## Tests

| Check | Result |
| --- | --- |
| `pnpm lint` | PASS |
| `pnpm exec tsc --noEmit --strict` | PASS |
| `pnpm build` including production placeholder/editorial guards | PASS; 0 unapproved findings / 0 development-only warnings; all five build stages complete |
| Editorial isolation | PASS with intentional Article 1 hold: three marker types remain only in a non-publishable draft; not concealed or published |
| `node scripts/check-cleaning.mjs` | PASS: approved config, private-contact override rejection, closed gate, exact range/CTAs; success, missing/invalid email, area/scope/size, duplicates, no send/booking and local-only model invariants |
| Production `pnpm test:site` | PASS: 17 public routes, 16 unique internal links, section targets, CTA recipients/destinations, no CC/BCC or private Gmail address, metadata, 404, 9 isolated article routes, hub/route indexing guards, robots and empty sitemap |
| `node scripts/check-project.mjs` | PASS: 50 core documents, 11 briefs, 11 research checklists, 65 preserved legacy files and article/launch safeguards |
| Chrome production-browser QA | PASS: desktop primary CTA opens demo; success → owner-review draft/task/status previews; missing-email → manual review/no draft; neither confirms a booking or sends mail |
| Responsive/navigation | PASS spot checks: 360px Home and pilot no horizontal overflow; menu opens by keyboard Enter with visible focus; menu pilot link works and closes on navigation. 768px pilot no overflow; Contact renders and footer navigation works |
| Pilot brief | PASS: generated approved range/limitations; download read back as `C:/Users/Xu/Downloads/cleaning-pilot-brief (1).txt` (1,270 bytes). Changing a choice invalidates the previous brief. No submission occurred |
| Browser error/warn log | No entries observed in this QA session |
| Git diff / integrity | `git diff --check` clean; full fsck reported dangling blobs only, no corrupt/missing objects; no pruning or history rewrite |

Known non-failing build notices: Vinext beta static route classification is incomplete (`?`); Vite reports plugin timing. Real served routes were tested, not inferred from the build table. Linked dependencies required elevated local execution; no new installation. Browser QA is an agent-run emulated viewport spot check, not a physical-device, screen-reader or Core Web Vitals certification. Email-client sending/delivery and external connectors were not tested; active/monitored inbox status comes from the owner.

## Remaining blocker and one human action

**Choose the website hosting platform.** The current project does not identify an approved website hosting target. Cloudflare Email Routing does not resolve that choice. Environment values and rollback instructions are ready, but target runtime, infrastructure privacy/log settings, actual HTTPS/cutover and provider-specific rollback cannot honestly be marked verified yet. No account creation or deployment was inferred.

Trust readiness below means launch-safe copy for the current informational application, not legal certification or approval of unknown host settings. Any selected host must match the notice. Branded outbound replies must not reveal the private destination; Email Routing approval is not a claim that outbound sending was verified.

Generic articles and real Make evidence are not blockers to this narrowly scoped informational site. They remain isolated. No article was approved or published. A connected paid pilot needs its own written agreement, scoped permissions, compatibility and real test evidence before work/live activation; the website makes that explicit.

## Readiness

- Public contact ready: **YES**
- Pilot offer ready: **YES**
- Trust pages ready: **YES** (current application copy)
- CTA flow ready: **YES**
- Production environment ready: **NO** (values prepared; target host undecided)
- Production build ready: **YES**
- Safe to deploy publicly: **NO** (host-specific release validation remains)
- Safe to enable indexing: **NO**
- Safe to proceed to Sprint 2: **NO**

Global gate CLOSED; all four environment flags false; robots `Disallow: /`; empty sitemap; all generic hubs contentReady=false; Cleaning noindex; 0 published articles. No Search Console, GA4, AdSense or affiliate code/link added.

Local checkpoint message: `feat: finalize cleaning MVP contact and pilot offer`. Git has no configured identity in this execution context, so the commit uses the existing repository agent identity `Project Dollar Codex <codex@localhost>` through command-scoped options; no human identity or global configuration is invented. Resolve this report's commit using `git log -1 --format="%h %s" -- 07_Codex/CLEANING_MVP_SPRINT_1_5_REPORT.md`; final worktree verification is performed after creating the local commit. Local preview was stopped after QA. No push.
