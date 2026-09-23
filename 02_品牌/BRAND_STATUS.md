# Naveliqo Brand Status

更新日期：2026-09-24

網站狀態：**PRE-LAUNCH；brand/domain approval 不等於 launch approval。**

## Approved

- Brand name：**Naveliqo**
- Primary domain：**https://naveliqo.com**
- Positioning：**Simple AI Automation for Small Business**
- Tagline：**No coding. No AI hype. Just practical workflows that save time and money.**
- Public contact：**hello@naveliqo.com**；owner 已確認 active/monitored，透過 Cloudflare Email Routing。私人 forwarding destination 不公開。
- Cleaning / Residential Cleaning 是第一個 vertical；Naveliqo 仍是可擴展的母品牌。

以上文字已集中於 `website/app/site-config.ts`。環境設定範本也包含核准的 brand name 與 canonical origin；這些值不會解除 global launch gate。

## Current staging fallbacks

- Header 使用純文字 `Naveliqo` wordmark，沒有虛構圖形標誌。
- `website/public/og.png` 是 temporary staging social-preview asset，不是 final logo 或 final campaign artwork。
- 既有 generic scaffold favicon 未被視為核准的 Naveliqo favicon。
- 舊 Project Dollar OG image 已移至內部 Codex assets 留存，不在 public website assets 中使用。

## Pending

- [ ] Final logo
- [ ] Favicon approval
- [ ] Final OG visual approval
- [x] Public contact email — approved in Sprint 1.5
- [ ] Author identity
- [ ] Social profiles（若 owner 決定建立；目前不假設存在）

## Launch boundary

目前不得部署、修改 DNS、啟用 indexing、提交 Search Console、安裝 analytics／AdSense、加入 affiliate links，或將 draft 改為 published。保留上述視覺 fallback，不把它們聲稱為已核准的 final identity；最小 Cleaning informational release 不需先完成完整 logo/social/author package。當前發布決策與 hosting blocker 以 `07_Codex/CLEANING_MVP_SPRINT_1_5_REPORT.md` 為準，後續視覺替換仍需獨立確認。
