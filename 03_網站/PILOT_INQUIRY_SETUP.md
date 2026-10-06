# Pilot notification setup — Workers Free

Updated: 2026-10-07 (Asia/Taipei). No purchase, upgrade, arbitrary-recipient Email Sending or indexing change is authorised.

## Prepared locally

- `website/wrangler.json` declares `send_email: [{ name: 'PILOT_EMAIL' }]`.
- This is Cloudflare's default verified-destination mode, not an arbitrary-recipient sending setup. It is not a provider-level single-address restriction: the application must use only the `PILOT_RECIPIENT` secret, never a recipient supplied by a form visitor.
- No private address is included in source, public variables, report or Git. The configuration guard permits only this binding and keeps the remaining resource/launch protections unchanged.
- The binding has not yet been deployed. No application email or inquiry submission was attempted.

Official references: [binding modes](https://developers.cloudflare.com/email-service/configuration/send-bindings/), [verified-destination pricing](https://developers.cloudflare.com/email-service/platform/pricing/). Sends to an existing verified destination are free on Workers Free, including accounts using only Email Routing. Do not enable arbitrary-recipient sending or upgrade the account.

## Required owner action

Wrangler's read-only secret listing returned no configured secrets. Run this in PowerShell:

```powershell
Set-Location -LiteralPath 'C:\Users\Xu\Desktop\Project-Dollar\website'
$env:WRANGLER_SEND_METRICS = 'false'
$env:WRANGLER_WRITE_LOGS = 'false'
pnpm exec wrangler secret put PILOT_RECIPIENT --name naveliqo-cleaning-mvp --config wrangler.json
```

At the hidden secret-value prompt, enter the **existing verified private Email Routing destination** for `hello@naveliqo.com`. Do not enter the public forwarding alias, a new recipient or the form visitor's email. Do not place the private address in the command line, chat, screenshots, `.env.example`, Wrangler vars or any tracked file. Stop if the intended account is not selected or Cloudflare asks for a new login, payment or upgrade.

The command updates the live Worker's secret and can create/deploy a Worker version using its current code; it does not upload the locally prepared website/binding changes. Do not run `wrangler deploy` yourself as part of this secret step. Tell the assistant only that `PILOT_RECIPIENT` was set successfully.

## Resume after secret setup

1. Verify the secret name and new active version without retrieving or printing the secret value.
2. Implement the requested pilot inquiry UI/server endpoint, using `PILOT_EMAIL` and only the server-side `PILOT_RECIPIENT`. Validate required fields/email/size limits, add honeypot/basic spam controls, and return failure if configuration or provider acceptance fails. No visitor confirmation email or arbitrary recipient support.
3. Update centralized CTAs and relevant privacy/contact copy; preserve the local demo and all closed indexing gates.
4. Run focused code, build, route and browser tests, deploy the completed fix to the existing Worker, then submit traceable fictional data. Provider acceptance is not proof of inbox receipt: the owner must confirm receipt unless an approved inbox verification path is available.

Current status: recipient setup pending; form implementation/deployment paused at the owner's requested secret-entry boundary. Existing live site is unchanged by this local preparation.
