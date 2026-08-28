# Staging QA Checklist

更新日期：2026-08-29

目前環境：local/pre-launch only；`naveliqo.com` 已核准但尚未執行 DNS、staging 或 hosting。

狀態定義：`PASS` = 有自動／結構證據；`FAIL` = 已發現未修復問題；`NEEDS HUMAN REVIEW` = 必須由真人瀏覽器、裝置、assistive technology、內容或法律審查確認。

本表不宣稱已完成真人瀏覽器 QA。所有視覺、responsive、screen-reader 與主觀內容項目保持 `NEEDS HUMAN REVIEW`，直到 reviewer 記錄裝置、browser、日期與結果。

2026-08-29 Codex browser spot check：本機 production build 在 1440px 與 360px 顯示 Naveliqo text wordmark，360px 沒有 horizontal overflow，mobile menu 可開啟且可導向 Workflows，browser console 沒有 error/warning。這是自動化／代理檢查，不取代真人 multi-browser、assistive-technology 或品牌視覺核准。

| QA item | Status | Current evidence / exact review required |
|---|---|---|
| Desktop QA | NEEDS HUMAN REVIEW | 在 final Chrome/Edge/Firefox/Safari（適用時）檢查 1280px 以上 layout、spacing、sticky elements、tables 與 readability。 |
| Mobile 360px QA | NEEDS HUMAN REVIEW | 以真實 360px viewport檢查 horizontal overflow、text wrapping、touch targets、sticky header、table scrolling 與 CTA。 |
| Tablet QA | NEEDS HUMAN REVIEW | 檢查約 768–1024px breakpoint、navigation transition、two-column collapse、orientation change。 |
| Navigation | PASS | Automated route crawler 可到達 required routes；仍需人工確認 labels、順序與 current-page orientation。 |
| Mobile menu | NEEDS HUMAN REVIEW | Native `<details>` menu 與完整 links 已建立；需 touch/keyboard/open-close/zoom 視覺驗證。 |
| Homepage | NEEDS HUMAN REVIEW | Route、metadata、H1 與 Naveliqo 集中品牌設定有自動檢查；copy、visual hierarchy 與 final CTA仍需真人瀏覽器核准。 |
| Article page | NEEDS HUMAN REVIEW | Foundation route預設 404；development preview有 draft/noindex護欄。需在完成 evidence後人工檢查 article layout；不可發布。 |
| Hub pages | PASS | 7 Hubs均集中 `contentReady=false`，無 canonical/schema/sitemap；內容品質仍需人工核准後才可改 flag。 |
| About | NEEDS HUMAN REVIEW | 頁面存在且 route正常；owner/entity/author/editorial responsibility仍未完成。 |
| Contact | NEEDS HUMAN REVIEW | 沒有 fake email；需真實 inbox、delivery、privacy、copy/interaction測試。 |
| Privacy | NEEDS HUMAN REVIEW | 明確為 draft；需依 final providers/data flows/markets做人工及必要的專業審查。 |
| Terms | NEEDS HUMAN REVIEW | 明確為 draft；需 final entity、services、jurisdiction與專業審查。 |
| Affiliate Disclosure | NEEDS HUMAN REVIEW | 正確說明目前沒有 active relationship；program/link出現前需重新審查 placement與wording。 |
| 404 | PASS | Automated test確認 unknown route與unpublished draft route回 HTTP 404；仍可做視覺 review。 |
| Footer | NEEDS HUMAN REVIEW | Trust links有 route檢查；需檢查mobile wrapping、contrast、focus、final copyright/entity資訊。 |
| Internal links | PASS | Running-site test crawler檢查root-relative links；production外部links仍需另次check。 |
| Canonical | PASS | Approved base為`https://naveliqo.com`；Home保留pre-launch canonical，所有尚未ready standard routes與draft清除canonical。Live host仍未驗證。 |
| Open Graph | NEEDS HUMAN REVIEW | Naveliqo metadata與temporary staging image已整合；該圖不是final visual approval。 |
| Structured data | PASS | Unready Hubs與draft不輸出page/article structured data；只有approved/indexable狀態才可輸出。Final validator仍需staging。 |
| robots | PASS | Pre-launch為`Disallow: /`且不宣告sitemap；launch分支需final staging驗證。 |
| sitemap | PASS | Pre-launch為empty sitemap；central policy排除`contentReady=false` Hubs與unpublished articles。Launch分支需在未來staging驗證。 |
| Image alt | NEEDS HUMAN REVIEW | 目前無主要content images；OG metadata有alt。未來screenshots/images需逐張目的性review。 |
| Keyboard navigation | NEEDS HUMAN REVIEW | Skip link、native menu、semantic links與focus CSS存在；需完整Tab/Shift+Tab/Enter/Space/escape expectation測試。 |
| Focus states | NEEDS HUMAN REVIEW | CSS提供`:focus-visible`與table region focus；需在各browser與high-contrast mode視覺確認。 |
| Contrast | NEEDS HUMAN REVIEW | 沒有完成正式contrast measurement；需對所有text/state/component量測WCAG 2.2 AA。 |
| Screen reader spot check | NEEDS HUMAN REVIEW | 使用NVDA/JAWS/VoiceOver至少檢查landmarks、headings、nav labels、breadcrumbs、table、404、draft banner。 |
| Performance | NEEDS HUMAN REVIEW | 無analytics/ad/client-heavy runtime且production build成功；仍需staging Lighthouse/lab與real Core Web Vitals。 |
| Broken links | PASS | Local running-site link check通過標準route；新增external citations/downloads後必須重跑。 |

## Human QA record

- Reviewer:
- Date/timezone:
- Build/commit:
- Environment URL:
- OS/device:
- Browser/version:
- Assistive technology/version:
- Viewports:
- FAIL items and evidence:
- Follow-up commit:
- Final sign-off: **NOT PROVIDED**
