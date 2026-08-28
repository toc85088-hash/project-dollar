# Google 整合準備指南

更新日期：2026-08-29

狀態：**只完成本機設定位置；未登入、未建立 property、未裝 tracking／ad code、未申請 AdSense。**

## Current implementation boundary

`website/.env.example` 已填入核准的 Naveliqo brand/domain 公開值，並為下列 Google 整合保留空白設定位置；`website/app/site-config.ts` 集中讀取：

- `GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`

目前只有 Search Console verification token 可在提供真實值後透過 metadata 輸出。GA4 與 AdSense 值尚未連接任何 script；即使設定環境變數，也不會載入分析或廣告。這是刻意的 consent 與 human approval gate。

## Google Search Console — owner action

1. Final domain、DNS、HTTPS 與 canonical domain 完成後，由網站 owner 登入 Search Console。
2. 選擇 property 類型：Domain property 涵蓋所有 protocol/subdomain 並需 DNS verification；URL-prefix property 只涵蓋指定前綴，可使用多種 verification 方法。
3. 由 owner 完成 ownership verification；不要把 token、DNS access 或帳號權限交給未授權人員。
4. 把真實 verification token 放入 production secret/environment setting，不寫入 Git。
5. launch gate 打開且 sitemap 含正式 canonical 後，再提交 `https://naveliqo.com/sitemap.xml`；本輪不得提交。
6. 檢查 Pages、Sitemaps、HTTPS、manual actions 與 security issues；不要用 indexing request 取代網站品質。

官方參考：[Add a Search Console property](https://support.google.com/webmasters/answer/34592?hl=en)、[Verify site ownership](https://support.google.com/webmasters/answer/9008080?hl=en)、[Manage sitemaps](https://support.google.com/webmasters/answer/7451001?hl=en)。

## Google Analytics 4 — future implementation

1. Owner 決定是否需要 GA4，並先確認 privacy notice、data retention、internal traffic、cross-domain、consent 與適用地區要求。
2. Owner 建立真實 GA4 property 與 Web data stream，從該 stream 取得 Measurement ID；不得自行發明或複製他站 ID。
3. 只有在 consent implementation 與 human approval 完成後，才建立獨立 analytics component／tag manager integration。
4. Tag 應使用 environment variable，僅在合法且核准的 production environment 載入；preview、development 與未同意狀態不應送資料。
5. 測試 page views、consent update、SPA navigation、duplicate tags、internal traffic 與 DebugView／Realtime；確認沒有傳送 email、URL 中的敏感資料或表單內容。
6. 在 privacy policy 記錄實際 provider、用途、events、retention、cookies、sharing、transfer 與 opt-out／consent controls。

Google 說明 Measurement ID 來自 Web data stream，tag 必須使用同一 ID：[Find your Google tag ID](https://support.google.com/analytics/answer/9539598?hl=en)、[Troubleshoot tag setup](https://support.google.com/analytics/answer/9311124?hl=en)。Consent 需依實際地區與實作審查：[Consent settings](https://support.google.com/analytics/answer/12334711?hl=en)。

## Google AdSense — do not implement yet

1. 先完成 `06_收入/ADSENSE_READINESS.md`、原創內容、legal/trust、正式網域、公開 contact、mobile/accessibility、broken links 與人工 policy review。
2. Owner 本人閱讀當時最新條款與 policy，決定是否申請；Codex 不登入、申請或接受條款。
3. 只有帳號與網站獲核准後，才取得真實 Publisher ID／site code，並設計 consent-aware installation。
4. 在 staging 驗證 script placement、CSP、layout shift、performance、ad/content separation 與 mobile experience。
5. Production 啟用需另一次人工核准；不得點擊自己的廣告或鼓勵點擊。

Google 目前要求先把新網站加入 AdSense sites list，再完成連接步驟；流程可能改變，執行時必須重新查官方文件：[Add a new site](https://support.google.com/adsense/answer/9131547?hl=en)、[Confirm site ownership](https://support.google.com/adsense/answer/91205?hl=en)。Google 對 EEA、UK、Switzerland 的廣告 consent 有額外 CMP 要求，必須用實際服務與法律適用範圍複核：[CMP requirements](https://support.google.com/adsense/answer/13554020?hl=en-GB)。

## Environment and secret rules

- `.env.example` 只保存核准的 public brand/domain 與空白 integration slots；contact、Google IDs/tokens 仍保持空白，真實 `.env` 不進 Git。
- Measurement ID 與 Publisher ID 雖會出現在前端，仍只能使用 owner property 的真實值；verification tokens 與 account credentials 不應公開。
- 不在 source code、Markdown、screenshot、issue 或 commit message 貼 API key、password、DNS credential、payment 或 tax data。
- Production environment 變更、Google login、property creation、consent choice 與 code activation都需要 owner 操作／核准。

## Verification before activation

- [x] Approved brand/domain/canonical base 在 source 中一致；live HTTPS 尚未驗證。
- [ ] Privacy／cookie／consent 已按實際實作人工與必要的專業審查。
- [ ] Search Console ownership 由 owner 完成。
- [ ] GA4 property/stream/ID 是真實值，且 tag 不重複。
- [ ] 未同意時不送 analytics/ad requests（依實際適用規則驗證）。
- [ ] AdSense 仍為未安裝，直到 readiness 與 owner approval 完成。
- [ ] Network request、cookies、events、CSP、Core Web Vitals 與 mobile layout 已在 staging 測試。

本文件是技術準備，不是法律意見。US、UK、Canada、Australia 及實際訪客所在地的規則需由合格人士依最終資料流程確認。
