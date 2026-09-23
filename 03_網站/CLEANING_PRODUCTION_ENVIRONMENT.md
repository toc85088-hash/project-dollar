# Cleaning MVP — Production Environment Preparation

Updated: 2026-09-24. Owner selected **Cloudflare Workers**, retaining the existing Vinext/Vite adapter. Release configuration is prepared and tested locally; no hosting account, remote Worker or DNS was changed.

## Exact public configuration

`website/.env.example` is the application-value template. `website/wrangler.json` records these same public values as Worker runtime bindings; `scripts/check-worker.mjs` rejects drift in both source and generated configuration. Rebuild when changing build-time public values.

```dotenv
NEXT_PUBLIC_SITE_NAME=Naveliqo
NEXT_PUBLIC_SITE_URL=https://naveliqo.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@naveliqo.com
NEXT_PUBLIC_SHOW_DRAFTS=false
SITE_LAUNCH_READY=false
CONTENT_LAUNCH_APPROVED=false
TRUST_PAGES_APPROVED=false
GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=
```

No application API keys, Google OAuth credentials, customer-account tokens, database or payment secrets are required for this informational MVP. Do not populate the unused Google settings. Do not put the private forwarding inbox in environment variables, source, build logs or artifacts. Site config rejects any contact override other than the approved public address without printing the rejected value.

`NODE_ENV=production` is supplied by the production build/runtime. Use Node 22.13+ for building, with the existing pnpm lockfile. Cloudflare executes the generated Worker, not a Node listening server. The retained `nodejs_compat` flag and compatibility date `2026-05-15` support runtime `process.env` bindings; no compatibility-date upgrade was needed. See [Cloudflare environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/).

## Gates and boundaries

- A known domain/email is not launch approval. All four flags above remain false.
- An explicitly authorised public informational release can retain closed indexing gates. Do not enable `SITE_LAUNCH_READY` to make it accessible.
- Generic articles remain unpublished; all thin hubs and Cleaning routes stay noindex; robots disallows crawling and sitemap stays empty.
- Email links only open the visitor's composer; there is no server mail sender or lead submission endpoint.
- The fictional demo and downloadable brief are browser-only. No Gmail/Make/CRM/calendar/booking connection exists.
- Pilot range and CTA copy are centralized in `website/app/cleaning/offer.ts`; domain, brand and inbox in `website/app/site-config.ts`.

## Workers release configuration — locally verified

- Source: `website/wrangler.json`; generated deployable configuration: `website/dist/server/wrangler.json` with `index.js` and assets in `../client`. Never hand-edit generated output.
- Worker release name: `naveliqo-cleaning-mvp` (local configuration name, not a claim that a remote Worker exists).
- `workers_dev=false`, `preview_urls=false`, `routes=[]`: no public target is enabled by the prepared config. Domain association remains a separate, explicit release/DNS action.
- Optional persisted Worker logs and Wrangler usage telemetry are off. This does not mean Cloudflare infrastructure processes no request/security data. Privacy copy describes that distinction; no GA4/ad code is installed.
- No D1, R2, KV, queues, email, schedules or external service bindings. No account ID/token is invented or committed. `.dev.vars*` is ignored alongside `.env*`.

Verified commands from `website` (all local):

```powershell
pnpm build
pnpm exec wrangler deploy --config dist/server/wrangler.json --dry-run --outdir .wrangler/dry-run
pnpm exec wrangler dev --config dist/server/wrangler.json --local --ip 127.0.0.1 --port 3000 --inspector-port 9231
```

The first Wrangler command **must retain `--dry-run`**: it performed package checks and exited without uploading. `--local` disables remote bindings for runtime QA. Validation used telemetry disabled and `CLOUDFLARE_LOAD_DEV_VARS_FROM_DOT_ENV=false`; no login. The local Worker passed the full route suite and a browser hydration/demo check. This does not claim deployed-account, live HTTPS or production-traffic verification.

Sources checked 2026-09-24: [Vite/Workers runtime](https://developers.cloudflare.com/workers/vite-plugin/) and [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/). Use `DEPLOYMENT_CHECKLIST.md` for the remaining human-controlled release steps, not an automatic command runner.

Cloudflare Email Routing handles inbound delivery. It does not by itself verify branded outbound replies. The owner should use a reply configuration that does not disclose the private forwarding destination; this sprint did not log in, inspect mailbox headers or send test email. The approved active/monitored status is owner-provided evidence, not an agent-performed delivery test.

Reference checked 2026-09-23: [Cloudflare Email Service documentation](https://developers.cloudflare.com/email-service/) distinguishes incoming routing from email sending. No sending product or paid plan was enabled.
