# Cleaning MVP — Deployment and Rollback Checklist

Updated: 2026-09-24. Preparation only; no deployment, hosting registration, DNS changes or indexing activation performed.

## Release boundary

The next release is the informational Cleaning service, fictional demo, scoped pilot and trust pages. It does not require publishing generic articles or completing the separate Make experiment. A public, noindex release is distinct from permission to enable search indexing.

Current local copy uses the approved domain, public email and setup range. The website hosting target is not selected in the available project record. Cloudflare Email Routing is mail routing, not confirmation of website hosting.

**Current human action: choose the website hosting platform.** Then validate its existing account/budget, compatible runtime, infrastructure data handling and reversible release process without provisioning or deploying until separately authorised.

## Before an authorised release

- [ ] Record selected hosting platform, release owner, access/recovery method and budget. No purchase or trial implied.
- [ ] Confirm this existing Vinext/Vite/React build runs in that target runtime. Local Node production preview is not proof of an untested edge deployment; do not switch frameworks.
- [ ] Use Node 22.13+ and the committed pnpm lockfile. Install with `pnpm install --frozen-lockfile` in the authorised build environment, then run `pnpm build`.
- [ ] Apply the exact values in `CLEANING_PRODUCTION_ENVIRONMENT.md` at build and runtime as required by the host. Never configure a private forwarding inbox.
- [ ] Keep every launch, content, trust and draft-preview flag false. Keep Google values empty. Do not change them merely to release an informational site.
- [ ] Check provider access/security/log settings against Privacy; no injected analytics, ads or nonessential tracking. Document provider-specific retention and responsible owner.
- [ ] Preserve the current DNS zone and existing Email Routing MX/TXT records. Record the actual prior website records/TTL before any separately authorised change; never guess cutover values.
- [ ] Record immutable release artifact/commit and host rollback procedure before activating it. Save environment/DNS configuration securely outside public Git.

## DNS, HTTPS and release smoke tests — NOT EXECUTED

Only after explicit release/DNS approval:

- [ ] Provision the selected runtime without adding customer-account integrations; verify privately using the provider's approved preview.
- [ ] Set only the website records required by that provider. Preserve email routing records; check incoming routing separately without publishing its destination.
- [ ] Confirm apex HTTPS certificate, renewal, HTTP-to-HTTPS and approved www-to-apex redirect, no mixed content.
- [ ] Verify Home, Cleaning, demo, pilot, About, Contact, Privacy, Terms, Affiliate Disclosure and 404 on the actual host.
- [ ] Check desktop/mobile navigation, focus, local demo success/missing-email cases and brief download.
- [ ] Check primary CTA to the real local demo and secondary mailto recipient `hello@naveliqo.com`; no automatic send or hidden recipients.
- [ ] Confirm titles/OG use Naveliqo and naveliqo.com; drafts return 404; hubs and Cleaning routes remain noindex.
- [ ] Confirm `robots.txt` still has `Disallow: /`, sitemap has zero URL entries, no Search Console submission or tags.
- [ ] Review response errors and asset/runtime failures. A missing provider-specific or HTTPS check means the release is not verified.

## Rollback and previous commit recovery

Rollback triggers: broken routes/CTA, unexpected indexability/draft exposure, email/data leak, 5xx, major mobile regression or an external action from the demo.

1. Re-activate the previous immutable host release, with its safe environment snapshot. Do not undo history or force-push.
2. For a first release with no previous deployment, withdraw the release/custom-domain mapping through the selected provider's documented procedure and restore the **recorded** prior website DNS state if necessary; never remove unrelated MX/TXT.
3. Source recovery baseline before this sprint: `8bf067f` (`feat: add cleaning-first Naveliqo MVP and pilot demo`). Use a separate recovery directory, not a destructive reset:

```powershell
git worktree add --detach ../Naveliqo-recovery-8bf067f 8bf067f
```

Only run after checking that destination is unused. Build there from its lockfile; never deploy the previous version blindly because it lacks this sprint's approved contact/offer fixes. A forward-fix may be safer.
4. Recheck robots, sitemap, drafts, contact and error logs after rollback; record incident and restoration result.

No rollback command was executed. Provider-specific release/rollback rehearsal is pending host selection. Source history is retained locally; no remote push. Final logo, SEO content, Google accounts, advertising and a connected pilot are **not** prerequisites for this narrowly scoped informational release.
