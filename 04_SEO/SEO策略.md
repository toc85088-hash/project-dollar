# SEO 策略與技術規格

更新日期：2026-08-24

## Strategy

以 `04_SEO/Keyword.md` 為唯一 Keyword Map 準據。SEO 的核心是建立可信、可驗證且能完成工作的內容庫，不以大量頁面、關鍵字密度或快速排名為目標。

### Quality Gates

- 每頁有明確 search intent、讀者問題與原創價值。
- AI 可協助整理，但作者／編輯必須查核、改寫、補實測與核准發布。
- 不做 keyword stuffing、doorway pages、expired-domain manipulation、hidden text、link schemes 或大量低價值 programmatic pages。
- 任何產品、價格、統計、政策或效果 claim 都要有來源、日期與可重現證據。
- 評論與比較只描述真正測過的範圍；未測項目直接說明。

## On-page Specification

### Semantic HTML

- 每頁一個描述主要目的的 `h1`；`h2/h3` 依內容層級，不為樣式跳級。
- 使用 `header`、`nav`、`main`、`article`、`section`、`aside`、`footer`、`ol/ul`、`table` 等正確元素。
- Link 用於導覽、button 用於動作；互動元件需有 accessible name。

### Title Tags

- 每頁唯一、先放頁面主題、自然描述意圖；品牌置後。
- 避免重複修飾詞、全大寫、年份自動輪替或無證據的 best/free。
- 以 SERP 實際呈現與可讀性人工檢查，不用僵化字元數作唯一標準。

### Meta Descriptions

- 每頁唯一，概括讀者能完成什麼與內容的可信差異。
- 不堆疊關鍵字、不捏造結果；即使搜尋引擎可能改寫，仍提供高品質預設值。

### Canonical URLs

- 每個 indexable page 使用 absolute self-referencing canonical。
- Production 必須來自人工核准的 HTTPS origin；本機 prototype 使用環境變數。
- Query、tracking 與列印版本 canonical 回主要頁；跨網域 canonical 需人工審核。

### Open Graph / Social

- 每頁設定 `og:title`、`og:description`、`og:type`、`og:url` 與 site name。
- 文章使用 `article` type，並與頁面 title/description 一致。
- Social image 需正確顯示品牌與主題、不可含捏造 quote；品牌未核准時清楚標為 temporary。

### Clean URL Structure

- Lowercase ASCII、hyphen-separated、簡短且穩定。
- 內容類型放第一層；避免日期、參數、session ID、無意義 ID 與多層巢狀。
- URL 變更需 301，並更新 internal link、canonical、sitemap 與 structured data。

## Structured Data

### Organization

全站提供可見且真實的名稱、URL、描述；正式 Logo 與 social profiles 未核准前不加入。不得虛構地址、評價或社群帳號。

### Article

文章頁提供 `headline`、`description`、`datePublished`、`dateModified`、`author`、`publisher`、`mainEntityOfPage`。只有真實存在且頁面可見的作者與日期才能輸出。

### BreadcrumbList

每個 detail page 的 breadcrumbs 與畫面、canonical 完全一致。位置從 Home 開始，最後一項為目前頁面。

所有 schema 上線前使用官方驗證工具檢查；structured data 不保證 rich result，不應加入頁面上看不到的 claims。

## Crawl and Indexing

### XML Sitemap

- 自動產生 canonical、200、indexable URLs；只使用正式 HTTPS origin。
- `lastmod` 只在內容實際變更時更新，不每天偽造刷新。
- 發布／下架流程同步更新 sitemap；大型站再依類型拆分。

### robots.txt

- 允許公開內容爬取，指向 XML sitemap。
- `Disallow` 不是保密機制；敏感資料不得公開部署。
- Staging／preview 必須有存取控制或 `noindex`，不能只依靠 robots。

### Status Codes

- 正常頁 200、永久搬移 301、刪除且無替代 404/410。
- 不把所有未知 URL 重新導到首頁；避免 soft 404 與 redirect chain。

## Internal Linking

- 遵循 `03_網站/網站架構.md` 的 hub-and-spoke 模型。
- Anchor text 自然說明目的，避免 footer/sitewide 重複堆疊 exact-match keywords。
- 每次發布執行 orphan-page 與 broken-link check。
- 高商業意圖頁必須能回到中立方法與相關教學，不建立只為 affiliate click 的孤立頁。

## Images

- 資訊圖片 alt 說明圖像在上下文中的目的；裝飾圖使用 `alt=""`。
- 檔名可讀、設定 width/height、壓縮並使用合適格式。
- 產品截圖標明測試日期／版本並移除個資；圖片內容不能取代必要文字。
- 不為 keyword 加入冗長或重複 alt text。

## Mobile Responsiveness

- 以 360px 起設計，viewport 正確，文字無需縮放即可閱讀。
- 導覽、表格、程式片段、圖片與 CTA 不造成水平 overflow。
- Touch targets、focus 狀態與表單錯誤在真實裝置人工測試。

## Core Web Vitals Considerations

- LCP：控制首屏資源、避免阻塞字型／第三方 script、優化 hero media。
- INP：減少 client JavaScript 與長任務，延後非必要 analytics／ads。
- CLS：圖片、embed 與廣告預留尺寸；字型使用可靠 fallback。
- 上線後以 field data 為準；prototype 的本機測量不能冒充真實使用者數據。

## International Market Handling

目前採一個英文版本服務 US/UK/Canada/Australia，不建立內容重複的國家子目錄。文章遇到 spelling、tax、privacy、currency 或產品 availability 差異時明確標示，且由人工查核。只有在各市場有實質獨特內容時才規劃 locale URLs 與 `hreflang`。

## Measurement (Human Setup Required)

- Search Console：正式 domain、ownership、sitemap 由使用者本人設定。
- Analytics：選定工具、consent 與 privacy review 後再安裝。
- 每月追蹤有意義的指標：indexed quality pages、non-brand queries、qualified visits、template use、affiliate clicks 與內容更新 backlog。
- 不以 impressions 或文章數量單獨判斷成功。
