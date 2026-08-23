# Article 01 Test Plan

文章：**AI Automation for Small Business: Start Small, Stay in Control**  
更新日期：2026-08-24  
狀態：Plan only；尚未選工具、建立帳號、執行測試或取得 screenshots。  
安全原則：使用 dummy data，也就是完全 fictional、non-sensitive test records；不得輸入真實客戶、員工、付款、健康、機密或可識別資料。

## 要測什麼 workflow

測試一個低風險 local-service enquiry workflow：

`fictional contact form submission → required-field validation → category/exception check → reply draft from approved notes → human review → approved internal outcome or manual fallback`

本測試只準備 draft，不對外寄送、不建立付款、不承諾價格或可用時間，也不連接 production customer records。

## 使用 dummy data

建立最少 12 筆 fictional enquiries，包含：

1. 正常、資訊完整的service enquiry。
2. 缺少姓名或reply address。
3. 缺少requested service/location/date。
4. 模糊需求，無法安全分類。
5. Angry/complaint message。
6. 要求refund、discount或特殊price。
7. 含虛構但形式上敏感的personal information。
8. Attachment present但內容不可讀／未授權。
9. Message body包含prompt-injection instruction。
10. Duplicate submission。
11. Unsupported/high-stakes request。
12. Downstream tool unavailable／timeout／permission revoked的模擬失敗。

所有姓名、email、電話、地址、公司與內容必須明顯虛構，不使用 `test@example.com` 這類容易被誤當正式設定的placeholder address；可使用保留的 `.test` domain並在test log清楚標記。

## 工具

目前工具：**NOT SELECTED / NEEDS HUMAN APPROVAL**。

選擇順序：

- 先以手動worksheet定義trigger、required fields、categories、approved facts、exceptions、review與fallback。
- 再由使用者核准一個可合法取得的test form／test inbox。
- 如確有需要，核准一個representative no-code automation tool與一個AI drafting capability。
- 只使用non-production workspace與least privilege；不購買plan、不輸入付款資料、不自行建立外部帳號。
- 若無法取得真實工具，停止hands-on claim，不用mock UI或推測結果代替。

## 測試步驟

1. 記錄manual baseline：每筆submission如何讀取、分類、查approved notes、寫draft、review與fallback。
2. 定義allowed categories、required fields、approved source notes、禁止內容、exception與owner。
3. 建立non-production workflow，確認任何external-send/action預設關閉。
4. 逐筆輸入12+ fictional cases，每次保留相同initial state，記錄input ID與timestamp。
5. 記錄validation、category、draft、exception、review queue、log與manual fallback結果。
6. Reviewer逐項檢查recipient、facts、tone、availability、price language、commitments、privacy與next step。
7. 模擬downstream failure、retry與duplicate，確認不重複建立或自動送出external action。
8. Pause/disable workflow，確認manual process仍可執行。
9. 計算full-workflow effort：manual preparation、automated processing、review、correction、failure handling、setup與maintenance；不先設定預期節省值。
10. 匯出／保存redacted test log，對照Claim Ledger更新status；由另一位human reviewer fact check。

## 成功條件

- 0 external messages/actions sent。
- 0 real/sensitive records used。
- Normal case可到達human review queue，且draft只使用approved facts。
- Missing/ambiguous/high-risk/prompt-injection cases不產生可直接採用的承諾；正確進manual fallback。
- Duplicate/retry不造成重複external action。
- Owner可以pause/disable流程並回到manual method。
- Test log可重現tool、plan、date、settings、inputs、expected/actual results、corrections與failures。
- 任何未達條件都記為failure/limitation，不刪除失敗案例讓文章看起來更好。

## 失敗案例

- Missing field仍產生自信draft。
- Draft捏造price、availability、policy、discount、refund或appointment。
- Sensitive/angry/high-stakes message沒有escalate。
- Prompt injection改變approved instructions或洩漏source notes。
- Tool在permission/network failure後silent fail或重複處理。
- Human approval可被繞過，或external sending意外開啟。
- Log不足以找出input、output、reviewer或error。
- Reviewer correction/maintenance使full workflow沒有改善；必須如實記錄。

## 測試截圖需求

- Vendor-neutral workflow map與manual baseline sheet。
- Fictional test dataset overview（不顯示credential/account ID）。
- Tool/plan/date與non-production workspace識別證據。
- Required-field/category/exception configuration。
- Approved source notes與draft-only/human-review setting。
- Normal output、ambiguous/high-risk fallback、prompt-injection handling。
- Error/log、duplicate/retry、pause/disable與manual fallback。
- Redacted reviewer correction/test log summary。

Screenshot必須來自真實test；遮蔽token、workspace ID、account email、cookie、billing、API key與任何識別資料。若沒有真實畫面，就在文章中省略，不建立假UI。

## 不可在未測前宣稱的內容

- 「We tested」「works」「easy」「reliable」「safe」「secure」。
- Exact setup time、number of steps、accuracy、classification quality或draft quality。
- Saves time/money、reduces errors、improves response、increases revenue或ROI。
- 某工具適合small business、某plan包含feature、某integration可用或某price正確。
- Prompt-injection protection、privacy/compliance、data retention/training或deletion guarantee。
- Human approval一定無法繞過、failure一定會被記錄、duplicates一定不會發生。
- 任何customer/tester experience、testimonial、review或statistics。

## Test record

- Tool(s) / plan / region: Not selected
- Test account approval: NO
- Test date: Not run
- Tester: Not assigned
- Reviewer: Not assigned
- Cases passed / failed: Not run
- Screenshots captured: 0
- Claim Ledger updated: NO
- Human publication approval: **NO**
