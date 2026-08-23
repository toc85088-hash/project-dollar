# 文章發布流程

更新日期：2026-08-24  
適用範圍：Project Dollar 英語內容網站  
原則：**沒有研究證據、真實測試與人工核准，就不發布。**

## Workflow

`Content Brief → Research → Real Tool Testing → Draft → Fact Check → SEO Review → Human Review → Publish → Update`

任何階段遇到無法驗證的資訊，必須標記 `NEEDS HUMAN VERIFICATION`，不得用合理猜測補齊。排名、推薦、價格、節省時間、準確率、使用者數量與第一手經驗尤其如此。

## Status model

網站 article registry 位於 `website/app/content/articles.ts`，目前支援：

- `draft`：研究或初稿中；不建立公開入口。
- `needs_review`：證據與草稿已整理，但尚未通過人工審核。
- `published`：所有發布 gate 通過；才可建立 canonical、Article schema、internal links 與 sitemap entry。
- `needs_update`：已發布資訊可能過期；應顯示更新狀態，優先複查或暫時撤下受影響的推薦。

除了 status，程式還要求 `humanApproved`、`evidenceComplete`、真實 author owner 與 `publishedAt`。目前 foundation article 是 `draft`，預設路由回傳 404；只有本機 `NEXT_PUBLIC_SHOW_DRAFTS=true` 且 launch gate 關閉時可預覽。

## 1. Content Brief

- 確認 primary keyword、search intent、讀者、文章目的與 topic cluster。
- 定義本文能回答與不能回答的範圍，避免為了篇幅加入無關段落。
- 列出 claims、工具、價格、外部證據、screenshots、workflow test 與 disclosure 需求。
- 檢查是否需要比較、推薦或第一手語言；若需要，先確保測試資源可取得。

完成條件：brief 欄位完整，且 editor 同意研究問題值得回答。

## 2. Research

- 優先使用 vendor 官方文件、產品內實際畫面、政府／監管機關、標準組織與原始研究。
- 每項可變資訊記錄來源 URL、頁面標題、查閱日期、適用地區、方案與限制。
- 統計資料需追到原始研究，記錄樣本、方法、年份與限制；只有二手轉述時不得寫成確定事實。
- 競爭頁只用來理解 SERP 與讀者缺口，不複製文字、結構、測試結果或結論。

完成條件：claim ledger 中每個重要 claim 都有來源、測試證據或明確刪除決定。

## 3. Real Tool Testing

- 使用真實產品、目前可取得的實際方案與可重複的 test scenario。
- 只用 fictional／non-sensitive test data；不得輸入真實客戶、付款、健康、人事或機密資料。
- 記錄日期、地區、方案、裝置／瀏覽器、設定、輸入、預期結果、實際結果、錯誤與修正。
- 同時測 normal、missing、duplicate、ambiguous、unsafe 與 failure cases。
- Comparison 對各工具使用相同 scenario、輸入與評分規則。
- Screenshot 只能來自實際測試，需遮蔽帳號、token、email、識別碼與敏感內容。

完成條件：另一位 reviewer 可以依 test log 理解測了什麼、沒測什麼，且文章語氣不超過證據範圍。

## 4. Draft

- 先回答 intent，再補背景；使用 plain English，面向 non-technical owner。
- 清楚區分 verified fact、observed test result、editorial judgment、example 與 limitation。
- 不使用 fake first-hand language；沒有實測時不能寫「we tested」「our test showed」「best」「easiest」。
- CTA 必須是合理下一步，不能以恐懼、假稀缺或未證明 savings 推動點擊。
- Affiliate opportunity 可以記錄在 editorial notes，但在關係成立前不建立 affiliate URL。

完成條件：文章可獨立閱讀，所有未完成處仍以 editorial note 顯示，不偽裝成讀者可見的確定資訊。

## 5. Fact Check

- 逐句核對名稱、feature、integration、plan、price、limit、availability、policy、日期與地區。
- 價格與方案在發布當日重新查官方來源；不要自行換算未註明的稅或匯率。
- 所有數字重新計算，確認單位與期間。
- 確認 screenshot 與文章描述是同一版本、方案與測試情境。
- 法律、隱私、稅務、醫療、財務或安全資訊必須縮限範圍並由合格人士確認；本站聲明不能取代審查。

完成條件：claim ledger 無未處理的高風險項目；所有限制可見。

## 6. SEO Review

- 唯一 title、description、H1 與 clean slug；primary keyword 自然出現，不 keyword stuffing。
- 搜尋意圖與文章內容一致；title 不使用未證明的 superlative。
- Internal links 指向已發布且相關的 hub／文章；draft 不得被公開頁面連結。
- External citations 指向直接支持 claim 的頁面。
- Canonical、Open Graph、Breadcrumb 與 Article structured data 只在正式發布後輸出。
- 圖片具目的性 alt；裝飾圖使用空 alt；所有 links 有清楚文字。

完成條件：search snippet 真實描述頁面，且沒有為搜尋引擎建立讀者看不到的內容。

## 7. Human Review

指定 owner 逐項簽核：

- Editorial accuracy、test scope、screenshots 與 author attribution。
- Affiliate／sponsorship disclosure 與商業關係狀態。
- Legal／privacy／consent／brand risk。
- Mobile、keyboard、links、metadata 與 final CTA。
- `humanApproved=true` 的明確決定；Codex 不自行做此核准。

完成條件：reviewer、日期、版本與未來複查日已記錄。

## 8. Publish

1. 將 approved article record 設為 `published`，補上真實 author 與 `publishedAt`。
2. 確認 `evidenceComplete=true`；有必要的 product screenshots 時再標記 `screenshotsComplete=true`。
3. 執行 lint、production build、route、internal-link、metadata、schema、robots 與 sitemap checks。
4. 人工預覽 desktop/mobile，確認 disclosure 與 CTA。
5. 由人員合併／部署；禁止自動發布未確認內容。

## 9. Update

- Tool、pricing、comparison 與 policy 文章設定較短複查週期；一般 evergreen guide 也要有 review date。
- 監看 vendor change、broken links、reader corrections 與 Search Console signals，但搜尋表現不能取代事實查核。
- 發現重大過期資訊時先設 `needs_update`，移除受影響推薦或暫停公開，再重新測試。
- 保留 change log：變更內容、原因、來源、測試日期與 reviewer。

## Publication record template

- Brief:
- Research owner / dates:
- Test log / environment:
- Claim ledger:
- Screenshot inventory:
- Fact checker / date:
- SEO reviewer / date:
- Human approver / date:
- Affiliate relationship status:
- Publish date:
- Next review date:
- Update history:

## Non-negotiable stop conditions

- 無法重現的 hands-on claim。
- 未確認的 price、plan、feature、statistics 或法律結論。
- 未揭露的 affiliate／sponsored relationship。
- 使用真實敏感資料但沒有合法授權與安全設計。
- 作者、編輯責任或 human approval 尚未指派。
- 測試失敗被刪除或隱藏以讓結論看起來更好。
