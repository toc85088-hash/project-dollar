# Naveliqo website

## Cleaning MVP update — Sprint 1.5, 2026-09-24

Existing stack retained; no new dependencies. Homepage now focuses on US residential cleaning while `app/site-config.ts` retains the general parent brand. `app/industries.ts` reserves six vertical slots; only Cleaning has routes. `/cleaning`, `/cleaning/demo`, `/cleaning/pilot` remain noindex with no canonical/schema. Generic hubs now all have contentReady=false.

Demo: fictional fixed records and deterministic templates, no AI/network/storage. Pilot builder: local select-based brief and `.txt` download, no lead submission or email. The owner-approved public inbox is `hello@naveliqo.com`; mail links open the visitor's composer and do not send. The approved pilot setup range and two conversion CTAs live in `app/cleaning/offer.ts`. These local tools do not prove a Google/Make integration. Run `pnpm test:cleaning` or `pnpm test:project`; running-site validation is `pnpm test:site`. See `../07_Codex/CLEANING_MVP_SPRINT_1_5_REPORT.md` for results and `../03_網站/DEPLOYMENT_CHECKLIST.md` for the separate release boundary.

Local Vinext/React site for **Simple AI Automation for Small Business**. Internal project codename: Project Dollar. The codebase is responsive, server-rendered, SEO-aware, and intentionally gated against accidental public indexing. Public contact approval does not open the indexing or article publication gates.

The approved Naveliqo name, positioning, tagline, `https://naveliqo.com` canonical origin and public inbox are centralized in `app/site-config.ts`. `.env.example` contains those approved public values; Google integration values remain blank. A contact override differing from the approved public inbox fails closed without printing its value. The header uses a text-only wordmark fallback; no final logo is claimed.

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
pnpm check:worker
```

`build` and `test:project` run the production placeholder guard. Approved development-only matches produce explicit launch-blocking warnings; new high-risk matches such as TODO/FIXME, sample addresses, Lorem, unapproved prices, fabricated reviews, or statistical claims fail production validation.

`build` also validates the source/generated Cloudflare Workers configuration. The owner selected Workers; `wrangler.json` provides approved public values, closed gates, no public routes/preview URLs and no optional persisted Worker logs. The production bundle has passed local workerd route and browser smoke tests, not a live deployment. See `../03_網站/CLEANING_PRODUCTION_ENVIRONMENT.md` for local-only commands and `../03_網站/DEPLOYMENT_CHECKLIST.md` for the separately authorised release/DNS procedure. `.wrangler` holds generated local artifacts and is excluded from source lint/scans, not from runtime checks.

`test:site` expects a development or production server at `http://localhost:3000`. Set `SITE_URL` only when testing another approved local origin. In preparation mode with draft preview disabled, the test expects the article draft to return 404, site-wide `noindex`, Hub-level canonical/schema protection, a crawl-blocking `robots.txt`, and an empty sitemap.

Internal links use the centralized `app/components/site-link.tsx` standard-anchor wrapper. This avoids a verified client-navigation/prefetch runtime failure in the pinned Vinext beta while retaining semantic, crawlable links and reliable full-page navigation. Re-test before changing back to framework client links during a future dependency upgrade.

## Hub indexing system

Hub readiness is centralized in `app/route-indexing.ts`. All seven generic hubs currently have `contentReady=false` under the Cleaning MVP direction. An unready Hub has no canonical, page structured data, or sitemap entry even if the site-wide gate is later enabled. The three Cleaning routes also retain their current noindex policy.

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
- The approved public inbox `hello@naveliqo.com`; a different `NEXT_PUBLIC_CONTACT_EMAIL` is rejected.
- Explicit human content and trust-page approvals through `CONTENT_LAUNCH_APPROVED=true` and `TRUST_PAGES_APPROVED=true`.
- An explicit `SITE_LAUNCH_READY=true` after the deployment checklist passes.

Until then, global metadata uses `noindex`, `robots.txt` disallows crawling, the sitemap is empty, and Organization structured data is withheld. Google Analytics, AdSense, affiliate tracking, server-side email handling, payment, and deployment are not connected. A later owner-authorized informational deployment can retain these exact closed gates; public availability and search indexing are different approvals. Do not change gates just to make a deployment possible.

## Remaining human release boundary

Public inbox, advertised setup range and Cloudflare Workers target are approved. Local configuration/runtime QA is complete. The owner must separately authorise the actual deployment and DNS cutover, then execute account/HTTPS/live smoke checks in the checklist. No account, domain or rollback-version existence is inferred from local QA. The seven-article proposal is superseded; do not publish generic guides or run a real customer automation to satisfy this informational release. No deployment, DNS changes, indexing or Sprint 2 work is authorized here.
