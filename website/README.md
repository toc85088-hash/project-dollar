# PROJECT DOLLAR Website Prototype

Local-only Vinext/React prototype for **Simple AI Automation for Small Business**. It is responsive, server-rendered, and contains the required topic hubs, trust/legal pages, one article template in use, metadata, JSON-LD, `robots.txt`, and `sitemap.xml`.

The temporary brand is configured once in `app/site-config.ts`. Before public launch, replace the brand there, regenerate the social card, and set approved environment values.

## Local development

Requirements: Node.js 22.13+ and pnpm.

```powershell
pnpm install
pnpm dev
```

Optional environment values:

```text
NEXT_PUBLIC_SITE_URL=https://approved-production-domain.example
NEXT_PUBLIC_CONTACT_EMAIL=approved-public-address@example.com
```

Do not use a sample value for a public launch. The URL must be the final HTTPS origin so canonical, sitemap, robots, and structured data agree.

## Validation

```powershell
pnpm lint
pnpm build
pnpm test:project
pnpm test:site
```

`test:site` expects the development server at `http://localhost:3000`. Set `SITE_URL` only when testing another explicitly approved local origin.

## Publishing support

The prototype demonstrates a full article route and shared site shell. A new article should not be added until its brief is approved and evidence is complete.

1. Create the article route under `app/blog/<clean-slug>/page.tsx` using the foundation article as the semantic template.
2. Add unique metadata, self-canonical, visible author/review/date information, Article JSON-LD, Breadcrumb JSON-LD, and related links.
3. Add the route to `app/sitemap.ts` only when the article is complete, indexable, and human-approved.
4. Add the article to the Blog and its topic hub; run link and site checks.
5. Detail pages must use a truthful item-specific social image or explicitly clear inherited images. Never imply a test or asset exists when it does not.

For a larger publication, migrate article bodies to a validated Markdown/MDX or CMS pipeline before scaling. The P1 requirement includes front-matter schema, draft/verified/published status, previews, and build-time validation; automatic publication remains prohibited.

## Launch blockers

- Brand name, domain, public email, authors, and legal/privacy text require human approval.
- The sample article is a prototype draft and requires editorial/fact review before public publication.
- No analytics, Search Console, AdSense, affiliate tracking, email provider, contact form, payment, or paid service is connected.
- Dependency build scripts remain disabled by the workspace security policy; do not approve them without a separate dependency review.
