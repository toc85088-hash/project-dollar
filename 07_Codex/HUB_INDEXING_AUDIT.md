# Hub Indexing Audit

稽核日期：2026-08-24  
範圍：Naveliqo 所有內容 Hub／category routes。

決策原則：只有具備獨立讀者價值、實際可用內容、完成事實查核且經人工核准的 Hub，才能把集中式 `contentReady` 改為 `true`。

## Central control

集中設定：`website/app/route-indexing.ts`

目前所有 Hub 均為 `contentReady=false`。Route metadata 與 sitemap 共同使用 `isStandardRouteIndexable()`，避免每頁分散判斷。對未 ready Hub：

- Route 可在本機／pre-launch site 回應 200，方便編輯與 QA。
- `robots` metadata 維持 `noindex, nofollow, nocache`。
- 不輸出 canonical。
- 不輸出 Breadcrumb 或其他 page structured data。
- 不進 sitemap；即使日後全站 launch gate 開啟仍會被排除。

把 `contentReady=true` 只代表人工核准結果，不能用來跳過研究、內容、legal、accessibility 或 deployment review。

## Route audit

| Route | Current status | Indexable | Reason | Human action required |
|---|---|---:|---|---|
| `/ai-automation` | `foundation_draft` | **NO** | 有基本 editorial framework，但 foundation article、evidence、author 與 human approval 尚未完成。 | 核准 Hub copy，並至少完成一篇 evidence-complete supporting article，再人工修改 `contentReady`。 |
| `/workflows` | `roadmap_only` | **NO** | 內容主要說明預計發布的 workflow cluster；沒有任何已發布、真實測試的 workflow guide。 | 完成並發布有用的 workflow content，確認 Hub 本身不只是 future-content list。 |
| `/ai-tools` | `method_only` | **NO** | 只有 evaluation principles，沒有完成 first-hand tool evaluation 或可查核結論。 | 真實測試具名工具、完成 evidence/limitations/disclosure，補足 substantive Hub content。 |
| `/tutorials` | `method_only` | **NO** | 只說明 tutorial standard，沒有 verified tutorial。 | 完成至少一篇 end-to-end tested tutorial，補 internal links 與人工內容核准。 |
| `/comparisons` | `method_only` | **NO** | 只有 comparison methodology；Zapier vs Make 尚未同情境實測，沒有 verdict。 | 完成 same-scenario tests、current plan/price facts、screenshots、disclosure、fact check 與 human approval。 |
| `/templates` | `roadmap_only` | **NO** | 列出規劃中的 templates，但沒有真正可下載且通過 usability/accessibility test 的資源。 | 建立並測試至少一份 real resource，確認 instructions、format、accessibility 與 download 都有效。 |
| `/blog` | `empty_publication` | **NO** | 有 10 briefs 與一篇受控 draft，但目前 0 publishable articles。 | 人工發布足量的 original approved articles，重新審查 Blog landing page，再修改 `contentReady`。 |

## Human readiness checklist before changing a flag

- [ ] Hub 可以獨立回答 search intent，而不是只說「未來會有什麼」。
- [ ] 至少有實際、已發布且相關的 supporting content／resource。
- [ ] 所有 links 指向 200、approved、indexable pages。
- [ ] 沒有 fake tests、price、statistics、review、testimonial 或 affiliate relationship。
- [ ] Title、description、H1、copy 與 Open Graph 經人工核准。
- [ ] Mobile、keyboard、screen reader、contrast 與 visual QA 完成。
- [ ] Canonical domain、robots、sitemap 與 structured data 在 staging 驗證。
- [ ] Editor／owner 記錄 approver、日期與 commit。

## Current result

- Indexable Hub routes：**0 / 7**
- Technical gate：**PASS**
- Content readiness：**BLOCKED / NEEDS HUMAN REVIEW**
