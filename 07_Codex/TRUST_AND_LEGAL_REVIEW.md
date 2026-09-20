# Trust and Legal Review

稽核日期：2026-08-24  
範圍：About、Contact、Privacy Policy、Terms of Use、Affiliate Disclosure。  
聲明：**這些頁面沒有經過律師審查；本文件不是法律意見。**

## 2026-09-18 blocker-fix update

About、Editorial Policy、Privacy Policy、Terms of Use 與 Affiliate Disclosure 已改為可供 final fit review 的 launch-safe baseline，不再把 public copy 標示為「pre-launch draft」。內容只描述目前 information-only、無表單、無帳號、無 analytics、無 ads、無 affiliate tracking、無 checkout 的實際狀態；沒有新增公司、地址、人員、認證或 lawyer-review 聲稱。

唯一不可由 Codex 代填的 public trust fact 是真實 inbox，以及與該 inbox／production host 一起確認的 operator label 與 provider data handling。這些資訊與七篇文章核准已集中至 `07_Codex/LAUNCH_APPROVAL_RECORD.md` 的單一人工 approval statement。完成前 `TRUST_PAGES_APPROVED` 與 global launch gate 都必須保持 false。

以下 2026-08-24 詳細項目保留為原始 baseline；其中標示 draft copy 未完成的描述，已由上述 2026-09-18 更新取代，但 provider／owner／真人審查要求仍有效。

## Overall status — BLOCKED for public launch

現有頁面誠實描述 local prototype、沒有 active tracking/ads/affiliate/payment，也沒有假稱已完成法律審查。這是良好起點，但 final entity、contact channel、technology stack、data flows、jurisdictions 與 commercial relationships 都未確定，因此不能當成 production legal text。

網站程式新增 `TRUST_PAGES_APPROVED` human gate；沒有明確核准時，全站保持 `noindex`、robots disallow、empty sitemap。

## About — NEEDS HUMAN REVIEW

目前已有：audience、markets、editorial standard、禁止 fake experience/price/statistics、affiliate independence、temporary status。

上線前需補：

- 真實 owner／publishing entity、所在地（依公開與法律需要）、editorial responsibility。
- 真實作者／reviewer identities、bios、expertise 與 correction/update process。
- Editorial methodology 的 public version，包括 tool test scope、source policy、AI assistance policy。
- 如何提交 correction、預期處理方式與 material update disclosure。
- 不要寫成立年份、團隊規模、使用者數、客戶案例或經驗年數，除非可驗證。

## Contact — BLOCKED

目前沒有顯示 fake email 或表單，並明說 inbox 未核准。

上線前需：

- Owner 建立並驗證真實 public inbox；決定 access、MFA、retention、backup、spam handling 與回覆責任。
- 以 `NEXT_PUBLIC_CONTACT_EMAIL` 設定；production smoke test 收／回信與 mailto/copy experience。
- Privacy Policy 說明 contact message 的資料類別、用途、retention、provider、access、transfer 與 rights route。
- 決定是否需要 postal/company details；由適用法律與 counsel 確認。
- 若加入 form，另做 validation、anti-spam、consent/notice、error handling、security 與 accessibility review。

## Privacy Policy — BLOCKED

目前草稿正確說明沒有 analytics、ads、form、newsletter、checkout 或 customer database，但 production provider 本身可能產生 logs/cookies；不能沿用 current wording 假設零資料處理。

上線前依實際 data inventory 補：

- Controller/business/entity identity 與聯絡方式、effective/updated date。
- Hosting/CDN/server logs、cookies/local storage、contact、analytics、affiliate clicks、ads、newsletter、downloads、payments 的實際資料類別與 purpose。
- Provider/subprocessor、retention、security、international transfer、legal basis（適用時）。
- User choices/rights、complaint route、children/minors、Do Not Track／sale/share/targeted advertising（按適用範圍）。
- Consent/CMP/cookie controls 與撤回方式；GA4/AdSense 未裝前不預寫成已運作。
- US、UK、Canada、Australia 以及實際訪客所在地的適用規則，由合格人士確認。

## Terms of Use — BLOCKED

目前草稿有 educational-information boundary、reader responsibility、software changes 與 professional-advice limitation，但缺少可執行的 final context。

上線前需由 owner/counsel 依實際業務決定：

- Legal entity、effective date、governing law/jurisdiction、eligibility。
- Acceptable use、intellectual property、quotation/download/template license。
- External links、affiliate relationships、user submissions（若有）、corrections。
- Warranty/liability limitation、indemnity、termination/change notice；不得直接複製他站條款。
- Digital products 上線後另加 payment、tax、delivery、refund、license、support；目前不應假裝存在。

## Affiliate Disclosure — PASS for current state / NEEDS REVIEW before monetisation

目前清楚說明沒有 active program、links、tracking、sponsorship 或 revenue；也定義 commission 不影響 editorial verdict。

關係成立前需：

- 確認每個 program terms、market/channel restrictions 與 required wording。
- 在第一個 affiliate link 前／附近放短 disclosure，不只依賴 footer page。
- Affiliate link 使用適當 `rel="sponsored"`，link/CTA 不冒充 navigation/download。
- Sponsored content 與 independent editorial 分開；保存 relationship/change log。
- 由合格人士確認 FTC 及其他 markets 的 disclosure/endorsement requirements；不可宣稱使用過沒測的產品。

## Additional trust items — NEEDS HUMAN REVIEW

- Public author bylines 與 last reviewed/updated policy。
- Corrections policy、editorial/AI-use policy、accessibility feedback path。
- Security contact／vulnerability reporting scope（若有需要）。
- Final logo/brand ownership、copyright notice 與 asset licenses。
- Consent banner/cookie preferences only if final stack needs them；不要先裝空殼 banner 假裝 compliant。

## Human approval record

正式上線前記錄：

- Owner/entity approver + date
- Editorial approver + date
- Privacy/data inventory owner + date
- Legal reviewer/counsel（如有）+ scope + date
- Affiliate/commercial approver + date
- Final files/commit reviewed
- Next review date

只有完成實際審查後才能設定 `TRUST_PAGES_APPROVED=true`；這個環境變數不是審查本身。
