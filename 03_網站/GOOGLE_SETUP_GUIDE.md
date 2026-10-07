# Google 整合準備指南

更新日期：2026-10-08（Cleaning Sprint 2）

狀態：**準備完成，整合未啟用。網站已在 Cloudflare Workers 公開提供；indexing 仍關閉。本輪未登入 Google、建立 property、驗證 ownership、提交 sitemap、安裝 tracking／ad code 或申請 AdSense。**

正式網址為 `https://naveliqo.com`，公開聯絡信箱為 `hello@naveliqo.com`。Pilot 表單實際提交與收信已由 owner 確認；這不是 Search Console 或 analytics 整合的證據，也不授權新的 Google 帳號操作。

## Current implementation boundary

`website/.env.example` 已填入核准的 Naveliqo brand/domain 公開值，並為下列 Google 整合保留空白設定位置；`website/app/site-config.ts` 集中讀取：

- `GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`

目前只有 Search Console verification token 可在提供真實值後透過 metadata 輸出。GA4 與 AdSense 值尚未連接任何 script；即使設定環境變數，也不會載入分析或廣告。這是刻意的 consent 與 human approval gate。

## Google Search Console — owner action

1. 網站 owner 在另行核准後自行登入 Search Console；正式 domain/HTTPS 已存在，不需要重新購買或部署。
2. 選擇 property 類型：Domain property 涵蓋所有 protocol/subdomain 並需 DNS verification；URL-prefix property 只涵蓋指定前綴，可使用多種 verification 方法。
3. 由 owner 完成 ownership verification；不要把 token、DNS access 或帳號權限交給未授權人員。
4. Domain property：owner 複製 Google 指定的 DNS TXT，於實際 DNS zone 新增後完成驗證（本輪不改 DNS）。URL-prefix HTML-tag 方法：將 Google 提供的真實 token 交由核准的 production environment 設定 `GOOGLE_SITE_VERIFICATION`，不是貼入 DNS；實際 metadata 會公開此驗證 token，它不是登入密碼。帳號 credentials 仍不得分享或寫入 Git。
5. launch gate 打開且 sitemap 含正式 canonical 後，再提交 `https://naveliqo.com/sitemap.xml`；本輪不得提交。
6. 檢查 Pages、Sitemaps、HTTPS、manual actions 與 security issues；不要用 indexing request 取代網站品質。Ownership verification 本身不等於准許移除 noindex 或提交任何網址。

### Current crawl/indexing boundary — do not change this sprint

`SITE_LAUNCH_READY`、`CONTENT_LAUNCH_APPROVED`、`TRUST_PAGES_APPROVED` 仍為 false；Cleaning 新指南各自的 `contentReady` 也為 false。robots 保持 `Disallow: /`、sitemap 空白、新指南與 `/cleaning` 無 canonical/schema 並保留 noindex。Homepage 既有 preparation canonical 不變。

**限制：robots 阻擋 crawl 時，Google 無法讀取頁面上的 noindex；外部連結指向的 URL 仍可能出現於搜尋。** 這組保護不等於保證從未被收錄，也不是存取控制。未來 indexing 啟用需獨立審核哪些頁可 crawl/index、哪些薄 hub/草稿繼續隔離，不應一次把所有 flag 打開。參考 [Google noindex 與 robots 的交互作用](https://developers.google.com/search/docs/crawling-indexing/block-indexing)（2026-10-08 複查）。

官方參考：[Add a Search Console property](https://support.google.com/webmasters/answer/34592?hl=en)、[Verify site ownership](https://support.google.com/webmasters/answer/9008080?hl=en)、[Manage sitemaps](https://support.google.com/webmasters/answer/7451001?hl=en)。

## Google Analytics 4 — future implementation

1. Owner 決定是否需要 GA4，並先確認 privacy notice、data retention、internal traffic、cross-domain、consent 與適用地區要求。
2. Owner 建立真實 GA4 property 與 Web data stream，從該 stream 取得 Measurement ID；不得自行發明或複製他站 ID。
3. 只有在 consent implementation 與 human approval 完成後，才建立獨立 analytics component／tag manager integration。
4. Tag 應使用 environment variable，僅在合法且核准的 production environment 載入；preview、development 與未同意狀態不應送資料。
5. 測試 page views、consent update、SPA navigation、duplicate tags、internal traffic 與 DebugView／Realtime；確認沒有傳送 email、URL 中的敏感資料或表單內容。
6. 在 privacy policy 記錄實際 provider、用途、events、retention、cookies、sharing、transfer 與 opt-out／consent controls。

Google 說明 Measurement ID 來自 Web data stream，tag 必須使用同一 ID：[Find your Google tag ID](https://support.google.com/analytics/answer/9539598?hl=en)、[Troubleshoot tag setup](https://support.google.com/analytics/answer/9311124?hl=en)。Consent 需依實際地區與實作審查：[Consent settings](https://support.google.com/analytics/answer/12334711?hl=en)。

### Minimum measurement plan — not implemented

Owner 先決定是否使用 GA4；不需要為完成 Sprint 2 建立 property。若核准，按照 [官方 setup](https://support.google.com/analytics/answer/9304153?hl=en) 建立 property/web stream，再授權獨立 consent-aware 實作與驗證。

| Future event | Allowed purpose / payload boundary |
| --- | --- |
| Page view | 只記錄核准頁面的乾淨 path；避免 query string、fragment、表單內容、信箱或姓名。 |
| Demo / pilot CTA click | 固定 CTA 名稱與來源 path；衡量閱讀後的下一步，不表示成交。 |
| Inquiry accepted | 只有伺服器成功回覆後才可考慮發生一次；不得當作收到信、qualified lead 或 sale。需另行實作，本輪不碰表單。 |

不得把 name、email、business name、notes、website、private destination 或 inquiry reference 當 event payload/user ID。Automatic form collection、URL/query capture、retention、consent、internal traffic 與重複事件都要先審查，不採用無條件貼 tag 的方式。[Google PII 防範說明](https://support.google.com/analytics/answer/6366371?hl=en)（2026-10-08 複查）。Network/consent 測試與 privacy notice 更新完成前，analytics readiness 只代表「準備規格完成」，不是已經追蹤。

## Google AdSense — do not implement yet

1. 先完成 `06_收入/ADSENSE_READINESS.md`、原創內容、legal/trust、正式網域、公開 contact、mobile/accessibility、broken links 與人工 policy review。
2. Owner 本人閱讀當時最新條款與 policy，決定是否申請；Codex 不登入、申請或接受條款。
3. 只有帳號與網站獲核准後，才取得真實 Publisher ID／site code，並設計 consent-aware installation。
4. 在 staging 驗證 script placement、CSP、layout shift、performance、ad/content separation 與 mobile experience。
5. Production 啟用需另一次人工核准；不得點擊自己的廣告或鼓勵點擊。

Google 目前要求先把新網站加入 AdSense sites list，再完成連接步驟；流程可能改變，執行時必須重新查官方文件：[Add a new site](https://support.google.com/adsense/answer/9131547?hl=en)、[Confirm site ownership](https://support.google.com/adsense/answer/91205?hl=en)。Google 對 EEA、UK、Switzerland 的廣告 consent 有額外 CMP 要求，必須用實際服務與法律適用範圍複核：[CMP requirements](https://support.google.com/adsense/answer/13554020?hl=en-GB)。

## Environment and secret rules

- `.env.example` 保存核准的 public brand/domain/contact；Google IDs/tokens 仍保持空白，真實 `.env` 不進 Git。私人 forwarding recipient 只留在 Worker secret，不交給 Google tags 或前端。
- Measurement ID、Publisher ID 與 HTML/DNS verification tokens 會依整合方式公開，仍只能使用 owner property 的真實值；account credentials、OAuth tokens 與 private recipient 不可公開。
- 不在 source code、Markdown、screenshot、issue 或 commit message 貼 API key、password、DNS credential、payment 或 tax data。
- Production environment 變更、Google login、property creation、consent choice 與 code activation都需要 owner 操作／核准。

## Verification before activation

- [x] Approved brand/domain/contact base 在 source 中一致；先前 production closeout 已驗證 live HTTPS，本輪 production smoke 結果另記 sprint report。
- [ ] Privacy／cookie／consent 已按實際實作人工與必要的專業審查。
- [ ] Search Console ownership 由 owner 完成。
- [ ] GA4 property/stream/ID 是真實值，且 tag 不重複。
- [ ] 未同意時不送 analytics/ad requests（依實際適用規則驗證）。
- [x] AdSense 仍為未安裝，直到 readiness 與 owner approval 完成。
- [ ] Network request、cookies、events、CSP、Core Web Vitals 與 mobile layout 已在 staging 測試。

本文件是技術準備，不是法律意見。US、UK、Canada、Australia 及實際訪客所在地的規則需由合格人士依最終資料流程確認。
