# Deployment Checklist

更新日期：2026-08-29

狀態：**準備中；本輪禁止正式部署、購買網域、登入 hosting 或修改 DNS。**

## 1. Final brand — PARTIALLY APPROVED / NEEDS HUMAN REVIEW

- [x] Owner 核准 brand name `Naveliqo`、spelling、positioning 與 tagline。
- [x] `NEXT_PUBLIC_SITE_NAME`、header text wordmark、title、schema、footer 與 legal-page branding 使用集中設定。
- [x] 建立 Naveliqo temporary staging OG asset；舊 Project Dollar asset 已移出 public assets 並保留為內部歷史檔。
- [ ] Owner 核准 final logo、favicon 與 final OG visual；目前 fallback 不得宣稱為 final identity。
- [ ] 如適用，完成 trademark／company-name risk 確認（需適當專業或人工研究）。

## 2. Domain and DNS — DOMAIN APPROVED / DNS BLOCKED

- [x] Owner 核准 primary domain 與 canonical origin：`https://naveliqo.com`（apex）。
- [ ] Owner 確認 domain registration／ownership／renewal；Codex 不購買或輸入付款資料。
- [ ] 核准 `www` → apex redirect policy 與實際 provider 設定。
- [ ] 記錄 registrar、DNS owner、renewal、MFA、recovery 與最小權限。
- [ ] 在 hosting destination 確認後由 owner 建立 DNS records；不得先猜值。

## 3. HTTPS — BLOCKED

- [ ] Production certificate 成功簽發並自動續期。
- [ ] HTTP → HTTPS 與 non-canonical host → canonical host 使用單次 permanent redirect。
- [ ] 檢查 mixed content、certificate chain、HSTS 適用性與 rollback 風險。

## 4. Production environment — NEEDS HUMAN REVIEW

- [ ] 選擇 hosting/provider、region、access、budget、terms 與 data handling。
- [ ] 從 `website/.env.example` 建立 production variables；不把 secrets 提交 Git。
- [x] 範本已設定核准的 `NEXT_PUBLIC_SITE_NAME=Naveliqo` 與 `NEXT_PUBLIC_SITE_URL=https://naveliqo.com`。
- [ ] 設定並驗證真實 public inbox。
- [ ] Google values 保持空白，直到 owner 建立真實 property 且 consent/installation 獲核准。
- [ ] `NEXT_PUBLIC_SHOW_DRAFTS=false`；任何 draft preview 應是私有且受控。
- [ ] Editor 與 owner 完成內容核准後才設 `CONTENT_LAUNCH_APPROVED=true`。
- [ ] Trust/legal owner 完成頁面核准後才設 `TRUST_PAGES_APPROVED=true`。
- [ ] 只有所有 launch gate 通過才設 `SITE_LAUNCH_READY=true`。
- [ ] 設定 CSP/security headers、log retention、access audit 與 dependency update owner。

## 5. Build and release — PASS LOCALLY / NEEDS STAGING

- [x] `pnpm lint` 本機成功（2026-08-24）。
- [x] `pnpm build` 本機成功（2026-08-24）。
- [ ] 在乾淨 CI/staging 以 lockfile 安裝並重跑 lint/build/test。
- [ ] Review build log、bundle、server/runtime compatibility 與 dependency scripts policy。
- [ ] 產生 immutable release identifier，保存前一個可回復 artifact。

## 6. Sitemap, robots and canonical — BASE APPROVED / LAUNCH GATE CLOSED

- [x] Canonical 與 Organization/Article/Breadcrumb schema 使用集中 site config／article registry。
- [x] 未 launch 時 global `noindex`、robots disallow、empty sitemap。
- [x] Draft 不輸出 canonical、Article schema 或 sitemap entry。
- [x] Canonical、sitemap 與 robots 的集中 base 已更新為 `https://naveliqo.com`。
- [ ] 在真實 staging／production origin 驗證所有 indexable URL 為 self-canonical；目前不得開啟 indexing。
- [ ] 確認 launch sitemap 只含 200、indexable、approved URLs，且 robots 宣告同一 sitemap。
- [ ] 用 validator 與 Search Console 檢查 schema／sitemap；不得在 domain 未確認時開 gate。

## 7. Content and trust — BLOCKED

- [ ] 至少一批原創、完整、已研究與人工核准的 articles；目前 0 published。
- [ ] About author/editor responsibility、corrections、ownership 與 real contact channel 完成。
- [ ] Privacy、Terms、Affiliate Disclosure 依 final stack／markets 人工及必要的專業審查。
- [ ] 沒有 placeholder page、fake review、fake test、fake price、copied content 或 broken link。
- [ ] 404、navigation、mobile、keyboard、screen reader、contrast 與 major browser 人工 QA。

## 8. Search Console and analytics — BLOCKED

- [ ] Owner 建立／驗證 Search Console property。
- [ ] Submit launch sitemap only after canonical domain is live.
- [ ] Owner 決定是否建立 GA4，完成 privacy/consent，提供真實 Measurement ID。
- [ ] Staging 驗證 consent、events、duplicate tags、PII leakage 與 performance。
- [ ] AdSense code remains **NOT INSTALLED**；申請不屬於 deployment 工作。

## 9. Backups — BLOCKED BY HOST CHOICE

- [ ] 確認 Git remote/private visibility、branch protection 與 owner access。
- [ ] 定義 source、environment config、content、uploads、DNS 與 provider settings 的備份範圍。
- [ ] 設 retention、encryption、restore owner；真實執行一次 restore test。
- [ ] 備份不能只存在同一 provider/account。

## 10. Rollback — BLOCKED BY HOST CHOICE

- [ ] 寫下上一版 artifact／commit 的 rollback command 與權限 owner。
- [ ] 定義 rollback triggers：5xx、broken navigation、wrong canonical/noindex、security/privacy issue、major layout regression。
- [ ] 測試 application rollback 與 DNS rollback 的時間／TTL 影響。
- [ ] 保留 emergency contact、status communication 與 post-incident review 流程。

## Final go/no-go

只有 owner、editorial、technical、privacy/legal（按需要）共同確認下列項目，才可部署：final visual assets、real content、trust pages、production config、staging tests、domain ownership/DNS、backups、rollback、indexing gate。Brand/domain 已核准但 launch gate 仍關閉，現況是 **NO-GO**。
