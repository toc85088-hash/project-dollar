# Production Readiness Audit

稽核日期：2026-08-24  
目標：整理到接近 production-ready；**不正式部署。**  
狀態定義：`PASS` = 本機證據通過；`NEEDS HUMAN REVIEW` = 技術基礎存在但需真實裝置/內容/法務/帳號判斷；`BLOCKED` = 缺少 final external input 或必要成果，禁止上線。

## Executive result

技術 prototype 已具安全的 launch/indexing gate、可維護 article registry、responsive navigation、metadata infrastructure、draft isolation 與自動 route/link checks。本機 lint/build 成功。整體仍是 **BLOCKED for deployment**：temporary brand、無 domain/contact、0 published articles、trust/legal drafts、未做 staging/real-device/assistive-technology QA、沒有 backups/rollback/hosting decision。

## Readiness matrix

| Area | Status | Evidence / remaining work |
|---|---|---|
| Responsive layout | NEEDS HUMAN REVIEW | CSS grid 使用 `minmax`/`clamp`，820px/520px breakpoints；mobile 原生 `<details>` menu 取代先前隱藏 links。In-app browser 因本機 AppData sandbox permission 無法連線，尚需實際 viewport/real-device 視覺確認。 |
| Accessibility | NEEDS HUMAN REVIEW | Semantic header/nav/main/article/footer、skip link、visible focus、reduced motion、table scope/scroll region、native menu 已有；仍需 screen reader、zoom 200/400%、contrast、touch target、voice control 與 manual WCAG 2.2 AA audit。 |
| Navigation | PASS | Required hubs 與 trust pages可由 desktop/mobile/footer 到達；draft 沒有 public link；404 提供回首頁。 |
| Internal links | PASS | Automated running-site crawler 檢查所有 discovered internal URLs；未完成 draft link 有明確 fail condition。 |
| Metadata | PASS | Global/route-specific title、description、Open Graph/Twitter；draft 清除 inherited OG image並 `noindex`。Final brand/social copy需 human review。 |
| Canonical URLs | BLOCKED | 程式由集中 `NEXT_PUBLIC_SITE_URL` 產生；沒有 final HTTPS domain 時 launch gate 不開。Draft 不輸出 canonical。 |
| Open Graph | NEEDS HUMAN REVIEW | Site-wide 1200×630 image 存在；final brand 後必須重做。Article 沒有 truthful item-specific image時明確不繼承 generic image。 |
| XML sitemap | PASS | Launch前回傳 empty sitemap；launch後只由 approved static pages + `isPublishable` articles 產生。Final domain/launch test仍 blocked。 |
| robots.txt | PASS | Launch前 `Disallow: /` 且不宣告 sitemap；只有完整 launch gate後才 allow並使用 canonical sitemap URL。 |
| Article structured data | PASS | 只有 `isPublishable` article 才輸出；draft 沒有 Article/datePublished/author schema。0 published articles為內容 blocker，不是虛構 schema。 |
| Organization structured data | NEEDS HUMAN REVIEW | 只有 full launch gate 才輸出，避免 temporary brand/entity schema；需 final name/domain/entity review。 |
| Breadcrumb structured data | PASS | Standard pages輸出 BreadcrumbList；articles只有 publishable時輸出。Final rich-result validation需 staging。 |
| 404 | PASS | Custom semantic 404；unknown route與draft route（preview off）均由 HTTP test 確認 404。 |
| Broken links | PASS | Public-route crawler檢查所有 root-relative links為 2xx/3xx；沒有 empty/javascript/unfinished links。External links主要在 Markdown docs，文章尚無 external citations。 |
| Build | PASS | `pnpm build` production build成功；Vinext顯示 route classification提示但無 build error。Hosting/runtime compatibility仍需 staging。 |
| Lint | PASS | `pnpm lint` 成功，無 ESLint output/error。 |
| Route integrity | PASS | 13 public routes 200；unknown 404；draft default 404；metadata/H1/noindex/robots/sitemap由 script檢查。 |
| Article publishing system | PASS | 集中 typed registry + shared renderer；`draft/needs_review/published/needs_update`，並要求 human/evidence/author/date gates。自動發布仍禁止。 |
| Obvious performance issues | PASS | Server-rendered、沒有 client component/app script、沒有 webfont、沒有 analytics/ad/third-party runtime、頁面沒有 content images或大型 bundle需求。Real Core Web Vitals與low-end device lab/field data仍需 human/staging。 |
| Security/privacy runtime | NEEDS HUMAN REVIEW | 無 form/account/tracking/payment/API secret；blank env template與Git ignore安全。Final host需 CSP/security headers/log retention/dependency review/consent。 |
| Content readiness | BLOCKED | 0 published articles；foundation是 evidence incomplete draft；First 10只有 briefs + research checklists。 |
| Legal/trust readiness | BLOCKED | Contact inbox、entity、Privacy/Terms與實際 data stack尚未核准；見 `TRUST_AND_LEGAL_REVIEW.md`。 |
| Analytics/Search Console | BLOCKED | 只保留空白 env/config位置；無 property/login/real IDs/tag/consent。 |
| AdSense | BLOCKED | 未申請、未裝 code；內容、domain、legal、consent與人工 readiness尚未完成。 |
| Affiliate | NEEDS HUMAN REVIEW | Policy/implementation plan完成；沒有 program、relationship或links，需真實測試與owner申請/核准。 |
| Deployment/hosting | BLOCKED | 未選 domain/host、未設定 DNS/HTTPS/environment/backups/rollback；本輪刻意不部署。 |

## Launch-gate behavior

Public indexing只有以下條件全部為真：

- final non-placeholder `NEXT_PUBLIC_SITE_NAME`
- real HTTPS `NEXT_PUBLIC_SITE_URL`
- valid non-example `NEXT_PUBLIC_CONTACT_EMAIL`
- `CONTENT_LAUNCH_APPROVED=true`
- `TRUST_PAGES_APPROVED=true`
- `SITE_LAUNCH_READY=true`

未全部通過時：global `noindex,nofollow,nocache`、robots disallow、empty sitemap、無 Organization schema。環境變數只是技術保險，不能取代人工內容／法律／部署審查。

## Test evidence

- Lint：PASS。
- Production build：PASS。
- Running route/internal link/metadata/404/robots/sitemap checks：結果應在 final verification 後更新於 `ROUND2_REPORT.md`。
- Browser viewport/keyboard/visual check：**NEEDS HUMAN REVIEW**。本機 browser control 初始化被 AppData sandbox permission 阻擋；沒有改用未核准的替代瀏覽器介面假裝完成。
- External official documentation review：Google/Search Console/GA4/AdSense 與 FTC/Google affiliate guidance 已連結於 implementation guides；執行時需重新確認。

## Known limitations

- Vinext 目前是 beta dependency，build output 對部分 routes 標為 static-analysis unknown；不是 failure，但需要目標 hosting staging test。
- 目前文章存於 typed TypeScript registry，足以管理 First 10 初期內容；內容規模上升前應遷移到 validated Markdown/MDX 或 CMS，而非建立大量 hard-coded pages。
- `public/favicon.svg` 是既有 generic asset，final brand前需替換；為保留 legacy work，本輪不刪除。
- Automated checks不能證明法律合規、內容正確、真實工具體驗、accessibility conformance或 field Core Web Vitals。

## Decision

- Ready for Deployment: **NO**
- Ready for AdSense Application: **NO**
