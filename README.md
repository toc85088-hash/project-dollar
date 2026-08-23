# Project Dollar

Project Dollar 是一個面向美國、英國、加拿大與澳洲英語市場的內容網站專案，定位為 **Simple AI Automation for Small Business**。

> **No coding. No AI hype. Just practical workflows that save time and money.**

目前品牌名稱 `PROJECT DOLLAR` 是暫用名稱。任何正式發布、網域購買、商標決策或付費服務均需人工核准。

## 服務對象

- 不具技術背景的小型企業主
- 希望減少重複行政工作，但不想學程式的人
- 需要可操作步驟、風險提醒與誠實工具比較的決策者

## 編輯原則

- 每篇內容必須解決明確問題，不能為了文章數量而發布。
- 不捏造第一手經驗、產品測試、價格、統計或評論。
- 產品與價格等會變動的資訊，發布前必須查閱官方來源並記錄查核日期。
- 比較或推薦內容必須揭露評估方法、限制與聯盟關係。
- 自動化草稿不能自動發布；每篇文章都需人工編輯與事實查核。
- 涉及客戶資料、付款、法務、醫療或財務判斷時，保留人工審核點。

## 專案結構

- `01_市場研究`：市場、利基、競爭與研究紀錄
- `02_品牌`：品牌定位、命名與視覺方向
- `03_網站`：資訊架構、功能與技術規格
- `04_SEO`：Keyword Map、Topic Clusters 與 SEO 規格
- `05_內容`：文章規劃、發布流程與 Content Briefs
- `06_收入`：AdSense、Affiliate 與數位商品策略
- `07_Codex`：專案稽核、開發紀錄與執行報告
- `08_GitHub`：版本控制與協作規則
- `09_財務`：成本、收入與 ROI 紀錄
- `10_學習`：研究筆記與案例
- `11_待辦事項`：Roadmap 與工作清單
- `website`：本機可執行的英文網站 prototype

原始資料夾內的 `.md.txt` 檔案為既有檔案，本次工作不刪除或覆寫；正式可維護文件使用 `.md` 副檔名。

## 網站本機執行

需求：Node.js 22.13 以上與 pnpm。

```powershell
cd website
pnpm install
pnpm dev
```

預設本機網址為 `http://localhost:3000`。正式上線前需設定：

- `NEXT_PUBLIC_SITE_URL`：核准的 HTTPS 正式網址
- `NEXT_PUBLIC_CONTACT_EMAIL`：可公開的聯絡信箱

品牌名稱集中於 `website/app/site-config.ts`，正式命名確定後可單點替換。

## 目前狀態

- V1 Keyword Map 與前 10 篇發布順序已建立，但搜尋量、競爭度與 SERP 必須人工使用可靠資料來源驗證。
- 文件、內容 briefs 與網站 prototype 正在依 Roadmap 驗收。
- 尚未申請 AdSense、登入 Google 帳號、購買網域或部署付費服務。
