# Naveliqo website

## Cleaning MVP update — 2026-09-21

Existing stack retained; no new dependencies. Homepage now focuses on US residential cleaning while `app/site-config.ts` retains the general parent brand. `app/industries.ts` reserves six vertical slots; only Cleaning has routes. `/cleaning`, `/cleaning/demo`, `/cleaning/pilot` remain noindex with no canonical/schema. Generic hubs now all have contentReady=false.

Demo: fictional fixed records and deterministic templates, no AI/network/storage. Pilot builder: local select-based brief and `.txt` download, no lead submission or email. A configured public inbox is still missing. These local tools do not prove a Google/Make integration. Run `pnpm test:cleaning` or `pnpm test:project`; running-site validation is `pnpm test:site`. Refer to `../03_網站/CLEANING_MVP_SPEC.md` and `../07_Codex/CLEANING_MVP_SPRINT1_REPORT.md` for current scope and evidence.

Local Vinext/React site for **Simple AI Automation for Small Business**. Internal project codename: Project Dollar. The codebase is responsive, server-rendered, SEO-aware, and intentionally gated against accidental public indexing while the public inbox, final human approval, staging, and release decision remain incomplete.

The approved Naveliqo name, positioning, tagline, and `https://naveliqo.com` canonical origin are centralized in `app/site-config.ts`. `.env.example` contains those approved public values; contact and Google integration values remain blank. The header uses a text-only wordmark fallback, and the current OG image is a temporary staging asset—not a final logo or visual identity.

## Local development

Requirements: Node.js 22.13+ and pnpm.

For a loopback-only production preview after building, use `pnpm start --hostname 127.0.0.1` (this Vinext version uses `--hostname`, not `--host`). This is a local preview, not a deployment.

```powershell
pnpm install
pnpm dev
```

To review an unpublished article locally, set `NEXT_PUBLIC_SHOW_DRAFTS=true`. Draft preview is automatically disabled when `SITE_LAUNCH_READY=true`.

## Validation

```powershell
pnpm lint
pnpm build
pnpm check:placeholders
pnpm test:project
pnpm test:site
```

`build` and `test:project` run the production placeholder guard. Approved development-only matches produce explicit launch-blocking warnings; new high-risk matches such as TODO/FIXME, sample addresses, Lorem, unapproved prices, fabricated reviews, or statistical claims fail production validation.

`test:site` expects a development or production server at `http://localhost:3000`. Set `SITE_URL` only when testing another approved local origin. In preparation mode with draft preview disabled, the test expects the article draft to return 404, site-wide `noindex`, Hub-level canonical/schema protection, a crawl-blocking `robots.txt`, and an empty sitemap.

Internal links use the centralized `app/components/site-link.tsx` standard-anchor wrapper. This avoids a verified client-navigation/prefetch runtime failure in the pinned Vinext beta while retaining semantic, crawlable links and reliable full-page navigation. Re-test before changing back to framework client links during a future dependency upgrade.

## Hub indexing system

Hub readiness is centralized in `app/route-indexing.ts`. AI Automation is the only Hub with `contentReady=true` because it contains a substantive standalone foundation; the other six remain false. The global launch gate still keeps all seven noindex. An unready Hub has no canonical, page structured data, or sitemap entry even if the site-wide gate is later enabled.

## Article content system

Article records live in `app/content/articles.ts` and use one shared semantic renderer. The registry supports `draft`, `needs_review`, `published`, and `needs_update` states. An article becomes publicly renderable only when all publication gates pass:

1. `status` is `published`.
2. `editorialReady`, `humanApproved`, and `evidenceComplete` are true.
3. A real author owner and publication date are assigned.
4. Metadata, Article schema, topic-hub links, and the sitemap are then generated from the same record.
5. The global site launch gate must also pass before the article route becomes publicly available.

The foundation article remains a draft. It has no public navigation link, canonical, Article schema, publication date, or sitemap entry. Seven vendor-neutral launch candidates have `editorialReady=true`, current primary-source dates, and honest evidence boundaries, but remain `needs_review` and unavailable until the owner completes the single approval record and publication dates are added. Move to validated Markdown/MDX before the volume makes typed records cumbersome.

Workflows, Tutorials, AI Automation, and Blog automatically list only records that pass the centralized publication gate. Review candidates never appear in those lists.

The full editorial process is documented in `../05_內容/PUBLISHING_WORKFLOW.md`.

## Launch gate

Public indexing requires all conditions below:

- The approved `Naveliqo` brand supplied through `NEXT_PUBLIC_SITE_NAME`.
- The approved `https://naveliqo.com` origin supplied through `NEXT_PUBLIC_SITE_URL`.
- A syntactically valid, non-example public inbox supplied through `NEXT_PUBLIC_CONTACT_EMAIL`.
- Explicit human content and trust-page approvals through `CONTENT_LAUNCH_APPROVED=true` and `TRUST_PAGES_APPROVED=true`.
- An explicit `SITE_LAUNCH_READY=true` after the deployment checklist passes.

Until then, global metadata uses `noindex`, `robots.txt` disallows crawling, the sitemap is empty, and Organization structured data is withheld. Google Analytics, AdSense, affiliate tracking, email handling, payment, and deployment are not connected.

## Remaining human blocker

Provide and approve one real monitored public contact inbox first. The earlier seven-article approval proposal is superseded by the Cleaning MVP direction; do not publish generic guides to satisfy an obsolete launch count. Operator/privacy/provider facts, pilot scope/fees, connected-account permissions and release approval remain separate. Deployment, DNS, HTTPS, backups, rollback, real-device QA, Search Console, analytics, and AdSense are not authorized by this sprint.
