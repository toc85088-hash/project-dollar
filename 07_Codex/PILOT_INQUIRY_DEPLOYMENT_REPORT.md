# Naveliqo — Pilot Inquiry Deployment Closeout

Closed: 2026-10-08 (Asia/Taipei). Scope: existing pilot CTA and inquiry flow only. No Sprint 2.

## Completed / production identity

- Existing `naveliqo-cleaning-mvp` Worker serves `https://naveliqo.com`; public contact remains `hello@naveliqo.com`.
- Pilot CTAs now navigate to `/cleaning/pilot`; demo CTAs stay `/cleaning/demo`. The pilot hero jumps to the inquiry form. The separate local planning tool and fictional demo are preserved.
- Real server-handled form includes the requested seven fields, validation, honeypot, request limits, truthful success/failure and email fallback. Contact, Privacy and Terms describe the actual processing.
- `PILOT_EMAIL` uses verified-destination mode; only server-side `PILOT_RECIPIENT` selects the recipient. The bare binding permits account-verified destinations at provider level; application code narrows it to the secret, not visitor input. No private destination in frontend, public HTML, vars, report or new Git changes. No Workers Paid upgrade or arbitrary-recipient sending was enabled.
- Implementation commit `dd2e988`; hydration-safety correction `80e52bf`. No history rewritten or remote push.
- Active version: `e742b1ad-2213-4840-8394-94de017b6489`, deployment `fb6a8f99-d7d6-4918-b675-03404c71e51b`, **100% traffic**. Read-only deployment verification at closeout matches the tested release.
- Deployment used `pnpm exec wrangler deploy --config dist/server/wrangler.json --domain naveliqo.com` in an interactive terminal. No DNS cutover, account permission, billing or plan change was required for this fix.

## Delivery evidence

- Prior authorized fictional browser submission: TEST ID `NAV-PILOT-QA-20261007-A`; reference `PILOT-6c93fc8d-cd59-4ae1-b8f7-3a3e1a42c062`.
- Production UI displayed success only after the Worker awaited the real email service. Form values cleared and the reference appeared. This alone proved provider acceptance, not inbox receipt.
- **Owner confirmation, 2026-10-08:** production form submission and actual email delivery were manually confirmed successful. The receipt conclusion is attributed to that confirmation, not an invented inbox inspection or screenshot. No private address was requested in the confirmation.
- No repeat positive submission or additional email during closeout. No visitor confirmation email or outreach.

## Verification

Completed release checks are retained as evidence; unchanged implementation/build tests were not rerun during closeout.

| Check | Result / evidence |
| --- | --- |
| TypeScript strict, ESLint, production build | PASS on deployed source; generated Worker configuration guard PASS |
| Project / Cleaning model | PASS: legacy preservation, article gates and fictional-only demo boundaries |
| Inquiry tests | PASS: 83 validation/handler assertions with mock transport, plus server-only recipient and hydration-safety source assertions; these tests sent no email |
| Placeholder / editorial guards | PASS; no unapproved public content. Three marker types remain only in one isolated, non-publishable draft, not removed or published |
| Local and live route suite | PASS: 17 public routes, 16 unique internal links, CTA destinations/anchors, metadata, hub guards, 9 isolated article 404s, future-vertical and unknown-route 404s |
| Requested public/trust pages | PASS: home, Cleaning, demo, pilot, Contact, About, Privacy, Terms, Affiliate Disclosure and Editorial Policy |
| Browser validation / failure | PASS: required fields and invalid email; missing local secret gives genuine failure with entries retained, never success |
| Pre-hydration safety | Initial rapid-click QA found a native GET fallback. Fixed and redeployed: disabled until hydration, native POST action, no form values in URL; regression assertions PASS |
| Actual submission / delivery | PASS: real provider acceptance plus subsequent owner-confirmed receipt, as distinguished above |
| Final live rejection checks, 2026-10-08 | PASS: honeypot and invalid-email POSTs return 400, `ok:false`, no reference/private address; `no-store` and `noindex, nofollow`. Invalid fictional records rejected before sending |
| Mobile / keyboard | PASS: 360×800 form is 317px wide, document 345px wide, no horizontal overflow; labels/inputs visible; Name → Business name Tab focus. Menu opens by Enter, Contact navigates and menu closes; viewport reset. No captured browser warning/error in closeout |
| Demo | PASS in prior local/live browser QA: complete case → READY FOR OWNER REVIEW, missing email → MANUAL REVIEW; still a local simulation with no send/booking |
| HTTPS / public assets | PASS: normal HTTPS validation, HTTP 301 to HTTPS; seven inspected live JS/CSS assets return 200 without private Gmail or server-binding names |
| Indexing / API | PASS: tested pages remain noindex; API GET 405 with no-store/noindex; all launch/content/trust/draft-preview flags false. Final robots check still `Disallow: /`, no Sitemap line; sitemap has zero URLs |
| Git | `git diff --check` and `git fsck --no-dangling` PASS for release; documentation-only closeout checked before local commit |

Resolved execution issues: Windows held the build directory while local Wrangler was running; stopping that owned process allowed a clean build. An unsupported deploy log-level option failed before upload and was removed. An HTML attribute-order-sensitive assertion was corrected without weakening its POST/disabled requirement. No tests or features were deleted to pass checks.

## Rollback / limitations

The pre-fix, secret-configured version `68146874-5d1c-4b7c-96a0-b53666dbb077` exists; rollback command syntax verified, **not executed**. After a separately authorized incident decision, from `website`:

```powershell
pnpm exec wrangler rollback 68146874-5d1c-4b7c-96a0-b53666dbb077 --name naveliqo-cleaning-mvp --config wrangler.json --message "Restore pre-inquiry release"
```

This restores the older mailto/planning experience, not a working web form. Preserve Email Routing, secret, DNS and HTTPS settings; version rollback is not a zone-settings rollback. For source recovery inspect `831a2e1` in a separate recovery checkout, never reset existing work. A future authorized redeploy must retain `--domain naveliqo.com` because tracked routes intentionally remain empty. Recheck noindex/robots/sitemap after any recovery.

Basic spam limits are isolate-local and are not a durable global quota, DDoS control or exactly-once delivery system. Provider acceptance and one confirmed delivery do not guarantee future inbox placement. No automatic retries, reply-time guarantees or customer automation. These limitations are documented, not new blockers for this bounded MVP fix.

## Final status / handoff

- Required issues fixed, pilot CTA, web inquiry, actual delivery, production build, deployment, HTTPS: **YES / PASS**.
- Private recipient hidden: **YES**. Indexing still disabled: **YES**. Rollback path prepared: **YES**, not exercised live.
- Remaining human blockers for this fix: **none**. Indexing/publication require a separate explicit future approval; this report does not grant it.
- Closeout changes only this report, the current-status summary in `NAVELIQO_PRODUCTION_FIX_REPORT.md`, and `03_網站/PILOT_INQUIRY_SETUP.md`. Application/source release remains `80e52bf`; no rebuild/redeployment required for documentation.
- Local documentation commit: retrieve with `git log -1 -- 07_Codex/PILOT_INQUIRY_DEPLOYMENT_REPORT.md`. Final worktree checked clean after commit. No push, upgrade, new test email, outreach, AdSense, Search Console or Sprint 2.
