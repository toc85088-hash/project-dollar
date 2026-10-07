# Pilot notification setup — Workers Free

Updated: 2026-10-08 (Asia/Taipei). Deployed on the existing Worker; the owner confirmed actual notification delivery. No purchase, upgrade, arbitrary-recipient Email Sending or indexing change is authorised.

## Active configuration

- `website/wrangler.json` declares `send_email: [{ name: 'PILOT_EMAIL' }]`.
- This is Cloudflare's default verified-destination mode, not an arbitrary-recipient sending setup. It is not a provider-level single-address restriction: the application must use only the `PILOT_RECIPIENT` secret, never a recipient supplied by a form visitor.
- No private address is included in source, public variables, report or Git. The configuration guard permits only this binding and keeps the remaining resource/launch protections unchanged.
- The binding is deployed. Read-only secret listing confirmed `PILOT_RECIPIENT` exists; its value was not retrieved. A fictional production inquiry was accepted by the provider, and the owner subsequently confirmed successful production submission and receipt.

Official references: [binding modes](https://developers.cloudflare.com/email-service/configuration/send-bindings/), [verified-destination pricing](https://developers.cloudflare.com/email-service/platform/pricing/). Sends to an existing verified destination are free on Workers Free, including accounts using only Email Routing. Do not enable arbitrary-recipient sending or upgrade the account.

## Secret maintenance — no action currently required

Setup is complete. Only if the owner intentionally changes the already-verified destination in the future, use the hidden prompt rather than a command-line value:

```powershell
Set-Location -LiteralPath 'C:\Users\Xu\Desktop\Project-Dollar\website'
$env:WRANGLER_SEND_METRICS = 'false'
$env:WRANGLER_WRITE_LOGS = 'false'
pnpm exec wrangler secret put PILOT_RECIPIENT --name naveliqo-cleaning-mvp --config wrangler.json
```

At the hidden secret-value prompt, enter the **existing verified private Email Routing destination** for `hello@naveliqo.com`. Do not enter the public forwarding alias, a new recipient or the form visitor's email. Do not place the private address in the command line, chat, screenshots, `.env.example`, Wrangler vars or any tracked file. Stop if the intended account is not selected or Cloudflare asks for a new login, payment or upgrade.

The command updates the live Worker's secret and can create/deploy a Worker version using its current code. A secret change is not an application release; do not run it again for this completed setup. Verify delivery again only after an intentional destination change.

## Request path and operational boundary

1. `/cleaning/pilot` submits JSON to `/api/pilot-inquiry`. The form stays disabled until hydration, with a POST-only native fallback so contact data cannot become a query string.
2. The server validates required fields, email, lengths, optional values and content type; rejects unknown fields, nonempty honeypot, cross-origin submissions and oversized bodies; applies basic isolate-local attempt limits.
3. Only the secret selects the recipient. The notification is plain text, sent from `hello@naveliqo.com`; the validated visitor email is Reply-To, not a delivery recipient. There is no auto-reply, visitor mailing list, database, queue or customer-account integration.
4. Success follows an awaited provider send. Errors return a generic failure, never a private address or provider exception. A reference means provider acceptance, not a guaranteed inbox placement, human response or agreed service. Do not automatically retry an ambiguous failure; use the public email fallback.

Limits: counters are best-effort per Worker isolate (5 attempts per IP / 10 minutes and 30 total / 10 minutes), not durable/global anti-abuse protection. There is no durable duplicate suppression or exactly-once delivery guarantee. No form bodies are logged by application code; provider infrastructure records and inbox retention still apply as described in Privacy.

For future code changes, use `pnpm test:inquiry` (mock transport, no emails), existing project checks, and the production build. For local runtime failure checks use `wrangler dev --local` without a recipient secret; never copy the private destination into a local tracked file. Do not rerun live positive submissions simply to repeat an already-confirmed result.

Release and rollback details: `07_Codex/PILOT_INQUIRY_DEPLOYMENT_REPORT.md`. All indexing gates remain closed.
