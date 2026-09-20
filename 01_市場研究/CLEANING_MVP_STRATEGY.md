# Naveliqo — Cleaning MVP Strategy

更新：2026-09-21。Owner 本輪確認的方向，優先於舊 generic-content launch 計畫。

## Brand / market boundary

Naveliqo 維持母品牌與既有 positioning/tagline；Residential Cleaning 是第一個 vertical，不是品牌改名。第一市場為美國。未來 vertical slots：Cleaning、HVAC、Plumbing、Landscaping、Pest Control、Other Home Services；只有 Cleaning 實作頁面，其他只是內部規劃，不建立空白目的頁。

## First customer hypothesis

US residential cleaning owner / office lead，有網站表單或 inbox 接詢價，願意親自 review，服務範圍與提供的 cleans 可寫清楚。第一問題假設：inquiry → initial reply → quote details → booking handoff 之間的交接不夠清楚。這不是已驗證的市場痛點或收入保證。

不先做 emergency dispatch、commercial bid estimation、hazard cleanup、payment collection、cold SMS、自動報價、無人確認預約、或全能 AI receptionist。

## MVP value proposition

“A new cleaning lead. A clear next step.”

先辨識可回覆與服務區、準備可審核回覆、列出報價缺漏資料、指定下一步與記錄狀態。價格、服務承諾、crew capacity 與 booking 由 owner 決定。AI 只可能用於核准知識範圍內的文字草擬；deterministic rules 不需要 AI。本輪 demo 是固定模板，不冒充 AI API / Make integration。

## Commercial path

Homepage → Cleaning service → local interactive demo → pilot scope → local planning brief。

目前沒有 verified public inbox，因此沒有 active pilot intake。沒有假 submit、假成功訊息、虛構 calendar 或 email。下一階段先開通真實收件管道並人工核准 offer，再做許可範圍內 discovery；這不是部署或寄信授權。

## Validation before scaling

1. 以 `06_收入/CLEANING_LEAD_GENERATION.md` 六家公司公開流程作 discovery shortlist，不宣稱已有 lead / 客戶 / 合作。
2. 真人確認實際 inquiry source、現有 native automation、交接 owner、缺漏/重複問題是否存在。已有完整系統者不硬推替換。
3. 使用虛構資料跑 account-specific integration：success、missing email、out of area、duplicate、connector failure、manual recovery。
4. 對照實際人工 baseline，記錄 review work、正確性與修正理由；沒有 baseline 不宣稱省時、省錢或轉換率改善。
5. 第一個 pilot 通過 acceptance 後才評估下一個 vertical；不先大量生成 cleaning SEO 文章。

## Existing work retained

原 generic Keyword Map、11 briefs、研究與 8 篇 article records 全部保留。7 篇 needs_review + Article 1 draft；0 published。Generic hubs 全部 contentReady=false/noindex。Article 1 Make evidence 不作 Cleaning demo 證據，也不阻塞本機 Cleaning MVP。

## What this sprint does not prove

No validated willingness to pay, no integration compatibility, no actual Google draft/task/sheet records, no live lead capture, no customer outcome, no approved pricing. 24–48 小時是使用者的聚焦視窗，不是交付或營收保證。
