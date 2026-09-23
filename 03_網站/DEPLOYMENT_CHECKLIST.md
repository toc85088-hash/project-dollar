# Cleaning MVP — Deployment and Rollback Checklist

Updated: 2026-09-24. Preparation only; no deployment, hosting registration, DNS changes or indexing activation performed.

## Release boundary

The next release is the informational Cleaning service, fictional demo, scoped pilot and trust pages. It does not require publishing generic articles or completing the separate Make experiment. A public, noindex release is distinct from permission to enable search indexing.

Current local copy uses the approved domain, public email and setup range. Owner has explicitly selected **Cloudflare Workers**. The existing adapter, generated Worker config, non-uploading dry-run and local workerd runtime have been verified. Cloudflare Email Routing is separate and must remain untouched.

**Current human action: approve the controlled release/DNS cutover when ready.** No additional local implementation blocker was found. Account access, account/plan availability, final DNS snapshot and live HTTPS checks belong to that human-controlled execution, not a claim that deployment already happened. Stop if the account requests payment, a new trial or expanded permission.

## Before an authorised release

- [x] Hosting platform: Cloudflare Workers. Runtime locally verified using the built bundle, not just the Node preview.
- [ ] At release time, owner verifies the intended account, access/recovery and acceptable existing plan limits. No purchase or trial implied.
- [ ] Use Node 22.13+ and the committed pnpm lockfile. Install with `pnpm install --frozen-lockfile` in the authorised build environment, then run `pnpm build`.
- [x] Exact public values are in `.env.example` and `wrangler.json`; build guard checks generated configuration. Never configure a private forwarding inbox.
- [x] Every launch/content/trust/draft-preview flag is false; Google values empty. Leave them unchanged for this informational release.
- [x] Optional persisted Worker logs and CLI telemetry disabled in local config; Privacy identifies Cloudflare infrastructure processing, not zero-logging.
- [ ] At release, confirm account settings do not inject analytics/ads or override the reviewed privacy controls.
- [ ] Preserve the current DNS zone and existing Email Routing MX/TXT records. Record the actual prior website records/TTL before any separately authorised change; never guess cutover values.
- [ ] Record immutable release artifact/commit and host rollback procedure before activating it. Save environment/DNS configuration securely outside public Git.

## DNS, HTTPS and release smoke tests — NOT EXECUTED

Only after explicit release/DNS approval:

- [ ] Owner authenticates to the intended Cloudflare account and reviews the built artifact/config. Do not reuse or overwrite an unrelated Worker with the same name.
- [ ] After explicit deployment **and DNS** approval, the release command from `website` is `pnpm exec wrangler deploy --config dist/server/wrangler.json --domain naveliqo.com`. This uploads the Worker and configures its custom domain/DNS; it was **not run**. Do not confuse it with the executed `--dry-run` check.
- [ ] Keep `workers_dev`/preview URLs off and all application gates false. The domain override is a deliberate release action; repeat it for authorised future releases, because checked-in `routes=[]` is a safe non-public default.
- [ ] Preserve Email Routing MX/TXT records and check inbound delivery without publishing its destination.
- [ ] Confirm apex HTTPS certificate, renewal, HTTP-to-HTTPS and approved www-to-apex redirect, no mixed content.
- [ ] Verify Home, Cleaning, demo, pilot, About, Contact, Privacy, Terms, Affiliate Disclosure and 404 on the actual host.
- [ ] Check desktop/mobile navigation, focus, local demo success/missing-email cases and brief download.
- [ ] Check primary CTA to the real local demo and secondary mailto recipient `hello@naveliqo.com`; no automatic send or hidden recipients.
- [ ] Confirm titles/OG use Naveliqo and naveliqo.com; drafts return 404; hubs and Cleaning routes remain noindex.
- [ ] Confirm `robots.txt` still has `Disallow: /`, sitemap has zero URL entries, no Search Console submission or tags.
- [ ] Review response errors and asset/runtime failures. A missing provider-specific or HTTPS check means the release is not verified.

## Rollback and previous commit recovery

Rollback triggers: broken routes/CTA, unexpected indexability/draft exposure, email/data leak, 5xx, major mobile regression or an external action from the demo.

1. For an existing release, select the recorded previous version in Cloudflare Workers → Deployments → Rollback. This changes live traffic and needs explicit authority; retain its safe variable/config snapshot. No history rewrite or force-push. [Official rollback procedure](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/).
2. For a first release with no prior deployed version, detach the newly added custom domain and restore only the **recorded** prior website DNS state when necessary. Keep workers.dev/preview URLs off and preserve Email Routing MX/TXT. A source commit is not a deployed rollback version.
3. Source checkpoints: pre-sprint `8bf067f`; approved contact/offer `6b51640`. Use a separate recovery directory, not a destructive reset:

```powershell
git worktree add --detach ../Naveliqo-recovery-6b51640 6b51640
```

Only run after checking that destination is unused. Build there from its lockfile; never deploy an earlier artifact blindly because `6b51640` predates the explicit Workers release config. Recover/review the intended configuration or use a forward-fix.
4. Recheck robots, sitemap, drafts, contact and error logs after rollback; record incident and restoration result.

No deployment or rollback was executed. The Cloudflare-specific procedure is prepared; no live rollback version exists yet. Actual HTTPS/domain smoke tests necessarily follow the human-controlled first deployment. Source history is retained locally; no remote push. Final logo, SEO content, Google accounts, advertising and a connected pilot are **not** prerequisites for this narrowly scoped informational release.
