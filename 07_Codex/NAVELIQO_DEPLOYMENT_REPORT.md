# Naveliqo — Production Deployment

Date: 2026-09-24. User explicitly authorised Cloudflare Workers deployment and only the DNS changes required for `naveliqo.com`; indexing must stay disabled. No Sprint 2, outreach, AdSense or customer automation.

## Before deployment

- Source commit: `4ac5648`; clean worktree at start. Existing tested build reused; no application changes.
- Wrangler login confirmed after the owner completed OAuth. No new login or permissions granted by the agent. No credentials or private forwarding address stored here.
- Before upload, exact target Worker `naveliqo-cleaning-mvp` did not exist (Cloudflare code 10007). This is a first release, not an overwrite of an existing application.
- `check-worker.mjs` passed against the current source and built config. All application launch/content/trust/draft flags false; Google settings blank; no external resources or schedules.
- Archive: `website/.wrangler/releases/naveliqo-4ac5648-predeploy.zip` (ignored locally), 1,456,518 bytes; SHA256 `FCBD702EBFDD548EAFD88231033E271EF456EFFE199BEE8188607816175DE922`.
- Built `wrangler.json` SHA256: `10D1E39451DC313A2147B2D43AB6031DBDBD00B564021FAEA012E5B5FB6C00C5`.
- Built `index.js` SHA256: `7CFCDB276B20C207A4CD1BE2B2126537B947273F4FA50691CB0663E0C8ECF2DC`.

## Scoped DNS baseline

Authoritative lookup against `decker.ns.cloudflare.com` before deployment. This is an apex/public-record snapshot, not a full private zone export.

| Name / type | Original value | TTL |
| --- | --- | --- |
| naveliqo.com A / AAAA / CNAME | No answer records | — |
| MX | route3.mx.cloudflare.net, priority 25 | 300 |
| MX | route1.mx.cloudflare.net, priority 35 | 300 |
| MX | route2.mx.cloudflare.net, priority 67 | 300 |
| TXT | v=spf1 include:_spf.mx.cloudflare.net ~all | 300 |
| NS | decker.ns.cloudflare.com; dolly.ns.cloudflare.com | 86400 |

Only the apex website association may change. Preserve MX/TXT, nameservers and all unrelated records. Wrangler is run with a real TTY because its non-interactive mode can automatically override DNS/origin conflicts; stop if an unexpected conflict or approval appears.

## Execution and verification

**Deployed successfully** at [naveliqo.com](https://naveliqo.com) using the unchanged, already-tested production bundle.

- Command: `pnpm exec wrangler deploy --config dist/server/wrangler.json --domain naveliqo.com`, interactive TTY; exit 0. No DNS/origin conflict, billing, trial or additional OAuth prompt.
- Worker: `naveliqo-cleaning-mvp`; custom domain: `naveliqo.com`.
- Version: `e4f86ec8-96c7-45d8-8f19-87f0486eae5b`.
- Deployment: `098ade29-f612-4ca4-b926-b93839e981ab`; 100% traffic; created `2026-09-23T19:24:46.847962Z` (24 September in Taiwan). Confirmed through Wrangler's read-only deployments list.
- Apex now resolves to Cloudflare A/AAAA addresses. Authoritative MX, SPF TXT and NS values match the baseline above. Dashboard DNS table contains the new Worker association, three MX records and two mail TXT records; no unrelated website record was replaced. No Email Routing setting was changed.
- Initial HTTP smoke check returned 200 without a redirect. In the existing authenticated Cloudflare dashboard, changed only **Always Use HTTPS: OFF → ON** for this zone. No application code, TLS minimum, HSTS, paid certificate feature or indexing control changed. The setting is available on the Free plan; [official behavior](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/).
- `www` was not added: the authorised hostname is the apex, and no www website record existed in the inspected zone.
- Dashboard read-back confirms the public environment values, all four false gate/preview flags, empty Google identifiers, Workers Logs/Traces off, no connected data bindings, no cron/queue/email triggers and the production custom domain. No Git provider was connected.

| Production check | Result |
| --- | --- |
| HTTPS / certificate | PASS — TLS 1.3; normal validation authorised; certificate covers naveliqo.com, issued by Google Trust Services WE1, valid through 22 December 2026 UTC. No bypass. |
| HTTP → HTTPS | PASS after configuration — 301 on home, demo (query preserved), robots and sitemap. HTTPS home remains 200; no loop. |
| Existing `SITE_URL=https://naveliqo.com pnpm test:site` | PASS — 17 public routes, 16 unique internal links, internal anchors, metadata, 9 isolated article 404s, 5 future-vertical 404s and unknown-route 404. |
| Requested pages | PASS — home, Cleaning, demo, pilot, Contact, About, Privacy and Terms; also Affiliate Disclosure and Editorial Policy. |
| Contact / CTAs | PASS — primary opens the real demo; secondary and public email links use only hello@naveliqo.com, correct subject, no CC/BCC. No private forwarding address. No email was sent; inbox delivery was not retested. |
| Production browser demo | PASS — complete fictional inquiry → READY FOR OWNER REVIEW; missing reply email → MANUAL REVIEW with no draft. Both show no send / no booking. These are browser simulations, not evidence of connected services. |
| Pilot planning tool | PASS for generation and download-request UI. Brief shows approved range/scope; clicking download displays “Download requested. Nothing was submitted to us.” File-save completion NOT independently verified: browser download-event wait timed out; downloads-page inspection was blocked by browser policy and not bypassed. |
| Mobile navigation | PASS — Chrome 360×800: menu opens; Enter works; Cleaning and Contact links navigate and close menu; no horizontal overflow observed. Temporary viewport reset. |
| Browser errors / assets | PASS — no captured warning/error logs during the demo/pilot flow; five home JS/CSS assets and OG PNG return 200 with expected types. Home HTML has no HTTP asset URLs or injected GA/AdSense/Cloudflare Insights script. |
| Indexing / drafts | PASS — all tested public routes noindex; hub canonical/schema guards unchanged; unpublished articles 404. All four launch/content/trust/draft-preview flags remain false. |
| robots / sitemap | PASS — robots is `User-Agent: *` + `Disallow: /`, no advertised sitemap; sitemap has zero URL entries. No Search Console submission. |

No rebuild or repeated unchanged lint/type checks were needed: source/build were not modified. Reused Sprint 1.5 validation and ran the production-specific checks above. No Git push, Sprint 2, outreach, AdSense, analytics setup, paid purchase or customer automation.

## Remaining items

- No blocker to this approved public **noindex** deployment remains.
- Optional manual QA: confirm the planning `.txt` file appears in the browser's downloads. Only its request/UI was observed in production, not completed file delivery.
- Public mail recipient and DNS are verified; receiving a test message is still owner-side verification, not a claim made by these smoke tests. The owner previously confirmed the inbox is active and monitored.
- Indexing remains intentionally disabled; public availability does not approve publication of drafts or opening the launch gates.

## Rollback baseline

There was no previous deployed version. **Rollback path ready; live rollback deliberately not executed.**

1. To withdraw this first release after an authorised incident decision: in Cloudflare Workers → `naveliqo-cleaning-mvp` → Domains (網域) → the `naveliqo.com` row's more-options menu, detach only that custom domain and restore the recorded absence of apex website records. The exact domain row was inspected, not removed. Keep workers.dev/preview URLs disabled. Preserve all MX/TXT/NS, Email Routing and unrelated Workers. Do not delete the zone or Worker as a shortcut.
2. This verified version is a recovery target for a later faulty release. After separate rollback authorisation, from `website`: `pnpm exec wrangler rollback e4f86ec8-96c7-45d8-8f19-87f0486eae5b --name naveliqo-cleaning-mvp`. CLI help and deployment/version existence verified; command not executed. [Cloudflare rollback limits](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/): a version rollback does not undo separate DNS/zone/resource changes.
3. Retain HTTPS-only delivery on any restored website. The recorded zone setting before this deployment was Always Use HTTPS OFF; returning to plaintext is not needed for application rollback and must not happen automatically.
4. Source checkpoint `4ac5648` and the hashed local archive above provide non-destructive recovery inputs. Use a separate unused recovery worktree/directory if needed, not reset/rewrite existing history. A future authorised redeploy must still include `--domain naveliqo.com`, because committed `routes=[]` is the safe default.
5. After any recovery, rerun the production route suite plus HTTPS, robots, empty sitemap, isolated drafts, contact and mail-DNS checks.

## Repository handoff

Only this deployment report was added to tracked project files. Application/configuration files and their guards were preserved; final bundle/config hashes still match the pre-deployment values. `git diff --check` and `git fsck --no-dangling` passed. The report is committed locally; see `git log -1 -- 07_Codex/NAVELIQO_DEPLOYMENT_REPORT.md` for its commit. No remote push.
