# Cleaning MVP — Production Environment Preparation

Updated: 2026-09-24. Prepared locally; no hosting environment or DNS changed. The website hosting platform still needs an owner decision. Email Routing alone does not identify it.

## Exact public configuration

`website/.env.example` is the source template. Set these identically at build/runtime where the eventual host requires them; a deployed artifact must be rebuilt when build-time public values change.

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

`NODE_ENV=production` is supplied by the production build/runtime; runtime port/binding is provider-specific, not a public site value. Use Node 22.13+ and the existing pnpm lockfile. The local production check uses `pnpm build` then `pnpm start --hostname 127.0.0.1`; it is not a deployment command. Do not use that loopback binding as an unreviewed hosting recipe.

## Gates and boundaries

- A known domain/email is not launch approval. All four flags above remain false.
- An explicitly authorised public informational release can retain closed indexing gates. Do not enable `SITE_LAUNCH_READY` to make it accessible.
- Generic articles remain unpublished; all thin hubs and Cleaning routes stay noindex; robots disallows crawling and sitemap stays empty.
- Email links only open the visitor's composer; there is no server mail sender or lead submission endpoint.
- The fictional demo and downloadable brief are browser-only. No Gmail/Make/CRM/calendar/booking connection exists.
- Pilot range and CTA copy are centralized in `website/app/cleaning/offer.ts`; domain, brand and inbox in `website/app/site-config.ts`.

## Provider-specific completion after host selection

Confirm target runtime compatibility with the existing build, build-time versus runtime variable injection, access controls, technical logging/retention, HTTPS/custom-domain procedure, release artifact persistence and rollback. The Vite configuration contains a Cloudflare adapter but that does **not** establish a provisioned or tested hosting environment. Do not invent a deployment project, account ID, route or token.

Cloudflare Email Routing handles inbound delivery. It does not by itself verify branded outbound replies. The owner should use a reply configuration that does not disclose the private forwarding destination; this sprint did not log in, inspect mailbox headers or send test email. The approved active/monitored status is owner-provided evidence, not an agent-performed delivery test.

Reference checked 2026-09-23: [Cloudflare Email Service documentation](https://developers.cloudflare.com/email-service/) distinguishes incoming routing from email sending. No sending product or paid plan was enabled.
