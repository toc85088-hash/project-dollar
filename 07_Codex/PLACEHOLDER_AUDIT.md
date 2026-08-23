# Placeholder Audit

稽核日期：2026-08-24  
範圍：`website/` source、public assets、scripts、README 與設定檔；排除 generated output、`node_modules` 與 `pnpm-lock.yaml` 的第三方套件文字。  
方法：使用 case-insensitive search 檢查 `PROJECT DOLLAR`、`placeholder`、`TODO`、`FIXME`、`example.com`、fake pricing/testimonials/statistics/reviews、unverifiable、unfinished、dummy、Lorem、TBD，另檢查 empty/hash/javascript links 與量化 marketing claims。

## Summary

- 沒有發現 fake pricing、fake testimonials、fake statistics、fake reviews、Lorem ipsum、TODO、FIXME、TBD、empty link 或 `javascript:` link。
- 唯一 `href="#..."` 是有效 accessibility skip link `#main-content`。
- 沒有公開 affiliate URL、Google Measurement ID、AdSense Publisher ID、contact example address 或假 download。
- 一篇 foundation article 保留為真實 editorial draft，但已從 public navigation、indexing、canonical、Article schema 與 sitemap 隔離；預設 route 回傳 404。
- Temporary brand、social image、favicon 與 trust/legal drafts 仍需人工作業，因此 launch gate 維持關閉。

## Public-facing placeholders and unfinished items

| Item | Location | Finding | Status / action |
|---|---|---|---|
| Temporary brand name | `website/app/site-config.ts` | `PROJECT DOLLAR` 是集中 fallback；若沒有 final `NEXT_PUBLIC_SITE_NAME`，`isTemporaryBrand=true`。 | **NEEDS HUMAN REVIEW** — owner 決定 final brand；程式會阻擋 launch。 |
| Social preview | `website/public/og.png` | 現有 1200×630 asset 使用 temporary brand。不是假內容，但不適合 final brand 上線。 | **NEEDS HUMAN REVIEW** — 品牌確定後重做並檢查 crop/contrast/alt。 |
| Favicon | `website/public/favicon.svg` | Generic starter-style icon，未在 metadata 明確引用；可能由特定 host/static convention 讀取。 | **NEEDS HUMAN REVIEW** — 不刪除既有 asset；final brand 後替換並明確設定。 |
| Foundation article | `website/app/content/articles.ts` | 有完整概念 draft，但 `evidenceComplete=false`、`humanApproved=false`、author 未指派、sources 空白。 | **BLOCKED** for publication — 執行 Research Checklist 01；目前只有 local explicit preview 可見。 |
| Blog | `website/app/page-content.ts` | 誠實顯示目前 0 published articles 與 foundation draft status；不是假文章列表。 | **PASS** for preparation；正式站需先有 approved content。 |
| About | `website/app/page-content.ts` | 清楚說明 temporary publication 與未完成 owner/author/legal。 | **NEEDS HUMAN REVIEW** — final entity/editorial ownership。 |
| Contact | `website/app/page-content.ts` | 沒有 fake email；未設定時明確顯示沒有 public address。 | **BLOCKED** for launch — owner 設定並驗證真實 inbox。 |
| Privacy Policy / Terms | `website/app/page-content.ts` | 明確標示 `DRAFT POLICY` 與 not legal advice，沒有假稱律師審查。 | **BLOCKED** for launch — 依實際 stack、entity、markets 人工/必要專業審查。 |
| Affiliate Disclosure | `website/app/page-content.ts` | 明確說明沒有 active links/program/revenue。 | **PASS** for current truthfulness；關係成立前需 program-specific review。 |
| Topic hubs / Templates | `website/app/page-content.ts` | 內容描述方法與 roadmap；沒有假 download、假 tool verdict 或空 CTA。 | **PASS** as preparation pages；0 articles/templates 使 production launch 仍不建議。 |

## Technical and non-public occurrences

| Match | Location | Assessment |
|---|---|---|
| `SITE_CREATOR_PLACEHOLDER_DATABASE_ID` | `website/vite.config.ts` | Vinext/Sites scaffold 的 internal D1 fallback 名稱；`.openai/hosting.json` 的 `d1`/`r2` 均為 `null`，沒有 database binding 或 user-facing content。保留以避免破壞既有架構。 |
| `PROJECT DOLLAR` | `website/scripts/check-project.mjs` | Test 用來阻止 brand 被散落 hard-code；是安全 guard。 |
| `legacy placeholder` | `website/scripts/check-project.mjs` | 驗證上一輪保留的 65 個 legacy `.md.txt`，不是網站 dummy content。 |
| `example.com` | `website/app/site-config.ts` | 只存在於拒絕 reserved/sample host/email 的 validation logic；不會輸出成 canonical/contact。 |
| `dummy data` | `website/app/page-content.ts` | 指明測試必須用 fictional/non-sensitive data；不是 dummy page content。建議未來逐步統一用 `fictional test data` 以避免誤讀。 |
| `Project Dollar` | `website/README.md` | Repository 文件名稱，與 temporary project identity 一致；不影響集中 runtime replacement。 |
| Blank Google/env values | `website/.env.example` | 刻意留白，防止 fake Measurement/Publisher/property values。正確作法。 |

## Links audit

- Public source 中沒有 `href=""`、`javascript:` 或無目標 CTA。
- `href="#main-content"` 是 Header 前的 skip link，target 每頁存在，屬 accessibility feature。
- Foundation draft URL 只存在於 route/test/content registry，沒有從 Home、Blog 或 hubs 建立 public link。
- Internal link HTTP 結果需以 running site test 確認；結果記錄於 `PRODUCTION_READINESS.md` 與 `ROUND2_REPORT.md`。

## Claims audit

- Public hubs 使用 qualitative editorial guidance，沒有量化 savings、收入、accuracy、adoption 或 customer-count claims。
- Foundation draft 的 workflow/safety敘述仍需要 evidence scope；已在 Research Checklist 01 標記，且文章不是 published content。
- Website 沒有產品 ranking、review verdict、current price、testimonial 或 first-hand testing claim。
- 「No fake reviews」「dummy data」等命中是明示禁止事項／測試方法，不是假資料本身。

## Required before launch

1. Final brand、mark、OG image、favicon 與 domain。
2. Verified contact inbox、owner/entity、author attribution。
3. 完成並人工核准 legal/trust pages；不得宣稱 lawyer reviewed，除非真有且允許如此聲明。
4. 至少發布足量的真實 researched/tested useful content；目前 0 published。
5. 對 final production build 重跑 placeholder/links/metadata/schema/robots/sitemap scan。
6. 只有上述核准完成後才設定 `CONTENT_LAUNCH_APPROVED`、`TRUST_PAGES_APPROVED` 與 `SITE_LAUNCH_READY`。
