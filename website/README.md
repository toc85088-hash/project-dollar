# Project Dollar website

Local Vinext/React site for **Simple AI Automation for Small Business**. The codebase is responsive, server-rendered, SEO-aware, and intentionally gated against accidental public indexing while the brand, domain, legal text, contact channel, and content remain unapproved.

The temporary brand and integration values are centralized in `app/site-config.ts`. Copy `.env.example` to a local `.env` only when real, owner-approved values are available. Blank values are expected during preparation.

## Local development

Requirements: Node.js 22.13+ and pnpm.

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

## Hub indexing system

Hub readiness is centralized in `app/route-indexing.ts`. AI Automation, Workflows, AI Tools, Tutorials, Comparisons, Templates, and Blog currently use `contentReady=false`. Until an editor manually changes an approved Hub to true, it has no canonical, no page structured data, and no sitemap entry—even if the site-wide launch gate is later enabled.

## Article content system

Article records live in `app/content/articles.ts` and use one shared semantic renderer. The registry supports `draft`, `needs_review`, `published`, and `needs_update` states. An article becomes publicly renderable only when all publication gates pass:

1. `status` is `published`.
2. `humanApproved` and `evidenceComplete` are true.
3. A real author owner and publication date are assigned.
4. Metadata, Article schema, topic-hub links, and the sitemap are then generated from the same record.

The foundation article remains a draft. It has no public navigation link, canonical, Article schema, publication date, or sitemap entry. Future article bodies can be added to the registry; move to validated Markdown/MDX before the volume makes typed records cumbersome.

The full editorial process is documented in `../05_內容/PUBLISHING_WORKFLOW.md`.

## Launch gate

Public indexing requires all conditions below:

- A final brand supplied through `NEXT_PUBLIC_SITE_NAME`.
- A real HTTPS origin supplied through `NEXT_PUBLIC_SITE_URL`.
- A syntactically valid, non-example public inbox supplied through `NEXT_PUBLIC_CONTACT_EMAIL`.
- Explicit human content and trust-page approvals through `CONTENT_LAUNCH_APPROVED=true` and `TRUST_PAGES_APPROVED=true`.
- An explicit `SITE_LAUNCH_READY=true` after the deployment checklist passes.

Until then, global metadata uses `noindex`, `robots.txt` disallows crawling, the sitemap is empty, and Organization structured data is withheld. Google Analytics, AdSense, affiliate tracking, email handling, payment, and deployment are not connected.

## Remaining human blockers

- Final brand, domain, public inbox, author identities, legal/privacy text, and consent choices.
- Real research, reproducible workflow/tool testing, screenshots, fact check, and article approval.
- Google property creation, ownership verification, tag installation approval, and AdSense application.
- Hosting, DNS, HTTPS, production environment, backups, rollback, and final launch review.
