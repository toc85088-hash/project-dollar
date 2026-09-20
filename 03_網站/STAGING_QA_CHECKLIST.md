# Staging QA Checklist

更新日期：2026-09-18

目前環境：local/pre-launch only；`naveliqo.com` 已核准但尚未執行 DNS、staging 或 hosting。

狀態定義：`PASS` = 有自動／結構證據；`FAIL` = 已發現未修復問題；`NEEDS HUMAN REVIEW` = 必須由真人瀏覽器、裝置、assistive technology、內容或法律審查確認。

本表不宣稱已完成真人瀏覽器 QA。所有視覺、responsive、screen-reader 與主觀內容項目保持 `NEEDS HUMAN REVIEW`，直到 reviewer 記錄裝置、browser、日期與結果。

2026-09-17 Codex browser spot check：本機 production build 檢查 desktop homepage、360px homepage/mobile menu、768px draft-article layout、Editorial Policy 與 404。Keyboard Tab 顯示清楚 focus ring；AX tree 有 semantic landmarks/headings/table labels。第一次 360px article 檢查發現 page-level horizontal overflow（574px），已修復並重新量測為 `scrollWidth=clientWidth=345px`；表格保留在其專用 scroll region。這是自動化／代理檢查，不取代真人 multi-browser、assistive-technology 或品牌視覺核准。

| QA item | Status | Current evidence / exact review required |
|---|---|---|
| Desktop QA | NEEDS HUMAN REVIEW | 在 final Chrome/Edge/Firefox/Safari（適用時）檢查 1280px 以上 layout、spacing、sticky elements、tables 與 readability。 |
| Mobile 360px QA | NEEDS HUMAN REVIEW | Codex 已確認 homepage與article無page-level overflow、buttons wrap正常、menu可開啟；仍需真實裝置檢查touch、zoom、table scroll與orientation。 |
| Tablet QA | NEEDS HUMAN REVIEW | Codex 在768px確認single-column article、mobile nav breakpoint與無horizontal overflow；仍需真實裝置與orientation change。 |
| Navigation | PASS | Automated route crawler 可到達 required routes；仍需人工確認 labels、順序與 current-page orientation。 |
| Mobile menu | NEEDS HUMAN REVIEW | Codex 已以native Expand與Tab驗證menu展開、完整links與visible focus；仍需touch、Escape expectation、zoom與major-browser review。 |
| Homepage | NEEDS HUMAN REVIEW | Route、metadata、H1 與 Naveliqo 集中品牌設定有自動檢查；copy、visual hierarchy 與 final CTA仍需真人瀏覽器核准。 |
| Article page | NEEDS HUMAN REVIEW | Production route隔離通過；development preview檢查了heading、draft banner、table、sources與mobile/tablet layout。七篇已完成local editorial preflight，但仍待一次human release approval。 |
| Hub pages | PASS | `/ai-automation`為唯一`contentReady=true` Hub，但global gate使其仍noindex；其餘6頁保持false。 |
| About | NEEDS HUMAN REVIEW | 頁面與`Naveliqo Editorial` organisational-byline disclosure已完成；最後publication/operator label由owner在單一approval record確認。 |
| Contact | NEEDS HUMAN REVIEW | 沒有 fake email；需真實 inbox、delivery、privacy、copy/interaction測試。 |
| Privacy | NEEDS HUMAN REVIEW | Launch-safe baseline已完成且準確說明zero analytics/ads/forms/accounts/commerce；需用final host、email與owner facts完成fit review。 |
| Terms | NEEDS HUMAN REVIEW | Launch-safe information-only terms已完成，沒有聲稱lawyer review；owner仍需在單一approval record確認。 |
| Affiliate Disclosure | NEEDS HUMAN REVIEW | 正確說明目前沒有 active relationship；program/link出現前需重新審查 placement與wording。 |
| 404 | PASS | Automated test確認unknown route與9個unpublished／retired article routes回HTTP 404；Codex視覺抽查正常。 |
| Footer | NEEDS HUMAN REVIEW | Trust links有 route檢查；需檢查mobile wrapping、contrast、focus、final copyright/entity資訊。 |
| Internal links | PASS | Running-site test crawler檢查14個public routes與14個unique root-relative links；launch article official sources亦在2026-09-17重開確認。 |
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
