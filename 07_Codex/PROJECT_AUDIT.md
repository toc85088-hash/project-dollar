# Project Audit

稽核日期：2026-08-24
範圍：Project-Dollar 根目錄及 `01_市場研究` 至 `11_待辦事項`
原則：只讀取既有資料，不刪除、不重新命名、不覆寫原檔。

## Executive Summary

- 11 個規劃資料夾全部存在。
- 初始狀態共有 65 個 `.md.txt` 檔案；其中 64 個為 0 bytes，只有 `01_市場研究/市場分析.md.txt` 有內容。
- 需求指定的 `04_SEO/Keyword.md` 不存在；同名的 `Keyword.md.txt` 為空，因此沒有既有 Keyword Map、Topic Clusters、First 10 Publishing Order 或 Content Strategy 可供沿用。
- 根目錄初始時沒有 `.git` repository，`git status`、`git log` 與 `git remote` 均回報「not a git repository」。
- 初始時沒有網站程式碼、package manifest、測試或可執行 prototype。
- `.md.txt` 與預期 `.md` 的雙重副檔名是主要整理問題。本次保留所有舊檔並另建正確 `.md` 成果。

## 已存在的檔案（初始快照）

### 01_市場研究（7）

- `README.md.txt`（空）
- `市場分析.md.txt`（唯一非空文件）
- `利基市場.md.txt`（空）
- `商業模式.md.txt`（空）
- `每日研究紀錄.md.txt`（空）
- `競爭對手.md.txt`（空）
- `關鍵字研究.md.txt`（空）

`市場分析.md.txt` 已確認目標市場為美國、加拿大、英國與澳洲，候選主題包括 AI for Small Business 與 AI Automation，收入方向為 AdSense、Affiliate Marketing 與 Digital Products；文件狀態仍標示 Day 1 進行中。

### 02_品牌（6，全部為空）

- `README.md.txt`
- `品牌名稱.md.txt`
- `品牌定位.md.txt`
- `品牌故事.md.txt`
- `Logo概念.md.txt`
- `網域規劃.md.txt`

### 03_網站（6，全部為空）

- `README.md.txt`
- `功能需求.md.txt`
- `外掛清單.md.txt`
- `網站架構.md.txt`
- `Sitemap.md.txt`
- `WordPress設定.md.txt`

### 04_SEO（6，全部為空）

- `README.md.txt`
- `Keyword.md.txt`
- `SEO策略.md.txt`
- `Topic Cluster.md.txt`
- `Pillar Pages.md.txt`
- `Internal Link.md.txt`

### 05_內容（6，全部為空）

- `README.md.txt`
- `文章規劃.md.txt`
- `已完成文章.md.txt`
- `更新紀錄.md.txt`
- `發布排程.md.txt`
- `FAQ.md.txt`

### 06_收入（6，全部為空）

- `README.md.txt`
- `收益紀錄.md.txt`
- `AdSense.md.txt`
- `Affiliate.md.txt`
- `數位商品.md.txt`
- `Email Marketing.md.txt`

### 07_Codex（6，全部為空）

- `README.md.txt`
- `自動化.md.txt`
- `開發紀錄.md.txt`
- `API.md.txt`
- `Bug.md.txt`
- `Prompt.md.txt`

### 08_GitHub（5，全部為空）

- `README.md.txt`
- `Branch.md.txt`
- `Commit規範.md.txt`
- `Release.md.txt`
- `Repository.md.txt`

### 09_財務（5，全部為空）

- `README.md.txt`
- `成本.md.txt`
- `收入.md.txt`
- `月報表.md.txt`
- `ROI.md.txt`

### 10_學習（6，全部為空）

- `README.md.txt`
- `AI工具.md.txt`
- `SEO筆記.md.txt`
- `國外案例.md.txt`
- `學習紀錄.md.txt`
- `靈感.md.txt`

### 11_待辦事項（6，全部為空）

- `README.md.txt`
- `Roadmap.md.txt`
- `Today.md.txt`
- `This Week.md.txt`
- `This Month.md.txt`
- `Done.md.txt`

## 缺少的檔案與資料

初始時缺少所有需求指定的正確 `.md` 檔案，包括根目錄 `README.md`、品牌／網站／SEO／內容／收入文件、Roadmap、專案稽核、AdSense readiness、10 份 briefs 與 overnight report。也缺少：

- 已驗證的關鍵字量化資料與 SERP 分析
- 競爭者研究、來源與查核日期
- 已核准品牌名稱、網域、Logo 與公開聯絡方式
- 內容作者、編輯、測試與事實查核責任人
- 完成文章、原始截圖、測試紀錄與引用資料庫
- Analytics、Search Console、AdSense 帳號／設定（這些皆應由人工日後處理）
- Git repository、remote、branch／commit 規範實作
- 網站程式、建置腳本、測試與部署設定

## 重複與命名問題

- 所有舊文件的副檔名為 `.md.txt`；若直接建立 `.md`，檔案總管可能顯示為看似同名。它們不是內容重複，而是命名／副檔名錯誤。
- `01_市場研究/關鍵字研究.md.txt` 與 `04_SEO/Keyword.md.txt` 未來可能重複。建議前者保存研究原始資料與日期，後者只保存核准後的 Keyword Map。
- `03_網站/Sitemap.md.txt` 應描述使用者／內容資訊架構；XML sitemap 技術規格集中於 `04_SEO/SEO策略.md`，避免混用。
- `03_網站/WordPress設定.md.txt` 與目前建立的程式型 prototype 是兩條不同技術路線。在 CMS 決策前不要同時維護兩套實作規格。
- `04_SEO/Topic Cluster.md.txt`、`Pillar Pages.md.txt`、`Internal Link.md.txt` 與 `SEO策略.md.txt` 有重疊風險。建議 Keyword Map 作為主資料，其餘文件記錄執行細節或視圖。

## 建議整理方式

1. 暫時將 65 個 `.md.txt` 視為 legacy placeholders，保留不動；新工作一律使用 UTF-8 `.md`。
2. 先由人工確認新 `.md` 完整性，再另開任務決定是否封存舊空檔；本次不刪除。
3. 把 `04_SEO/Keyword.md` 設為關鍵字與發布順序的唯一準據，修改時保留更新日期與研究來源。
4. 把每篇文章的測試證據、截圖清單與 claims log 放在對應 brief／文章資料夾，不把未驗證資訊寫成事實。
5. 網站原始碼集中在 `website/`；品牌值集中設定，內容頁使用可重複的 metadata 與版型。
6. 完成 Git 初始化後，以「文件／內容系統」與「網站 prototype」分開提交，便於審閱與回復。

## 技術上尚未完成的工作（初始稽核結論）

- 建立正確專案文件、V1 Keyword Map 與 10 份 briefs。
- 建立語意化、響應式、可維護且支援文章的網站 prototype。
- 實作 title、description、canonical、Open Graph、structured data、robots 與 sitemap。
- 實作並驗證 required routes、internal links、404 行為與 mobile layout。
- 加入 lint/build 與可重現的 route／metadata 檢查。
- 設定正式網域與 email（需人工核准）；正式網址確定前不得宣稱 production-ready canonical。
- 完成真實產品測試、SEO 數據研究、法律文件人工審閱與每篇文章最終編輯。
- 初始化 Git 並建立清楚 commits；remote 與 authentication 如未設定，只記錄、不阻塞本機工作。
