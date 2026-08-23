# Affiliate 實作規格

更新日期：2026-08-24  
狀態：**沒有申請任何 program、沒有 affiliate 關係、沒有 affiliate links。**

## Editorial boundary

- 工具只有在對讀者 workflow 有幫助且完成真實測試後才可能被推薦。
- Program availability／commission 不決定收錄、排名或 verdict。
- 不用「best」「we tested」「our pick」等語言，除非方法、日期、方案、test cases 與限制可重現。
- 價格、trial、refund、feature、region 與 program terms 在發布／更新當日查官方來源。
- 若 native／manual 方法更適合，文章應明說，即使沒有 commission opportunity。

## Disclosure placement

1. Site-wide `Affiliate Disclosure` 保留在 footer，可從每頁到達。
2. 含 affiliate link 的文章，在第一個 affiliate link／commercial CTA 之前放置短、清楚、與內容同視覺層級的 disclosure。
3. Comparison table、tool card 或 CTA 不得只靠 footer disclosure；鄰近區塊需能理解 link relationship。
4. Email、download、social 或未來其他渠道使用各自可見 disclosure，不能只指望網站頁面。
5. Sponsored placement 與 editorial affiliate recommendation 分開標示；不得把付款內容偽裝成獨立評測。

FTC 的核心方向是 relationship disclosure 要清楚、顯眼，endorsement 必須反映誠實經驗；正式發布時應再查最新版：[FTC Endorsement Guides](https://www.ftc.gov/system/files/ftc_gov/pdf/P204500%20Guides%20Concerning%20Endors%20and%20Testimonials.pdf)。這不是法律意見，其他市場規則需另行確認。

## Link attributes

- 經濟關係 link 使用 `rel="sponsored"`；可依 policy／風險再加 `nofollow`。
- 只有開新分頁時才加 `noopener noreferrer`；預設同頁開啟可減少認知與 accessibility 負擔。
- Link text 描述目的地與動作，例如 `Check current plan details on the official site`，不用 `click here`。
- 不 cloaking、不做隱藏 redirect、不把 affiliate link 放在假 download/button/navigation。
- Google 建議用 `sponsored` 標示廣告與 affiliate links：[Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)。

## Central link registry — future

關係成立後才建立集中 registry；每筆資料至少包含：

- `linkId`（內部穩定識別碼）
- vendor／program／destination official domain
- owner-approved destination URL
- relationship status：`none` / `applied` / `active` / `paused` / `ended`
- market、article、CTA label、placement
- required disclosure text、required attributes
- terms checked date、link checked date、owner

只有 `active` 且人工核准的 entry 可渲染 affiliate URL。Program 暫停／終止時應切回乾淨 official URL 或移除 CTA，不產生假 tracking parameters。

## CTA placement

- Foundation／ideas 文章：以 workflow 或 template CTA 為主，不為 commission 強塞工具。
- Tool tutorial：在 requirements 與 limitations 之後，提供 official details CTA；第一個 commercial CTA 前 disclosure。
- Roundup／comparison：先公開方法、scenario 與 evidence，再顯示逐工具 CTA；表格不得讓 affiliate 工具獲得額外視覺優勢。
- Templates：只有實際需要特定工具時才放 link，並同時說明 vendor-neutral 或 manual alternative。

## Tracking strategy

- 第一階段使用 program 提供的合法 tracking URL，加上本站內部 `linkId` 對照；不自行發明 affiliate parameters。
- 先決定是否真的需要 click analytics。若使用 GA4／其他工具，必須先完成 privacy、consent、retention 與 data minimisation review。
- 不把 email、姓名、客戶 ID、表單內容或敏感資訊寫入 URL／event。
- 月度檢查 broken destination、redirect chain、relationship status 與 disclosure；收益資料不能用來改寫測試結論。
- Reporting 分開：editorial performance、reader task completion 與 commercial clicks/revenue，避免用高佣金取代讀者價值。

## First 10 article-level mapping

| Order | Article | Opportunity | Gate before any affiliate link |
|---:|---|---|---|
| 1 | AI automation for small business | Low；可連到經實測的 workflow category | Foundation 必須保持 vendor-neutral；無實測不推薦產品 |
| 2 | Automate repetitive tasks | Medium；實作中使用的 no-code platform | 完成一個可重現 workflow、價格／方案查核 |
| 3 | Small business automation ideas | Low；只在個別 idea 真正需要工具時 | 至少兩個 ideas 實測；不得變成 affiliate roundup |
| 4 | AI email automation | Medium–High；email／automation tool | Synthetic inbox test、privacy/security/plan 查核 |
| 5 | AI customer service automation | Medium–High；helpdesk／knowledge tool | Synthetic support queue、handoff、security/compliance 查核 |
| 6 | AI lead follow-up | Medium–High；CRM／form／scheduling／automation | Test form/mailbox/non-production CRM、consent/deliverability 查核 |
| 7 | AI meeting notes | Medium–High；meeting assistant | Fictional meeting、consent、retention/training、accuracy 查核 |
| 8 | Best AI tools for small business | High but **blocked** | 所有候選同 scenario 真實測試；每個 ranking claim 有證據 |
| 9 | Zapier vs Make | High but **blocked** | 兩者同 plan/context、同兩個 workflows、current pricing/terms 查核 |
| 10 | Automation templates | None initially | 先完成真實可用 download 與 usability/accessibility test |

## Human approval required

- 選擇與申請 program、接受 terms、提供 tax/payment/account data。
- 確認 program 是否允許 link format、geo targeting、email/social use 與 sub-ID tracking。
- 核准 disclosure wording、privacy/consent、link registry entry 與 public CTA。
- 查核實際 tool tests 與 recommendation，不由 Codex 自行宣布 affiliate relationship。
