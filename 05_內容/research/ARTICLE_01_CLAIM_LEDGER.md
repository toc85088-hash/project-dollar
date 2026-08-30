# Article 01 Claim Ledger

Article：**What Should a Small Business Automate First?**

Updated：2026-08-30

Article status：`draft`

Evidence complete：**NO**

First-hand test complete：**NO**

Allowed status values：`VERIFIED`、`NEEDS TESTING`、`NEEDS SOURCE`、`EDITORIAL / GENERAL GUIDANCE`、`REMOVE`。

`VERIFIED`只表示列出的來源在指定日期直接支持該項有限 claim；不代表產品已由 Naveliqo 測試、適合每個企業、符合每個地區法規，或能產生任何 savings/result。

| Claim | Claim type | Needs source? | Official source | Independent source | First-hand test required? | Screenshot required? | Last verified date | Status | Notes |
|---|---|---:|---|---|---:|---:|---|---|---|
| A good first automation candidate is frequent, has writable instructions, is reversible, is safe to review, and has a trackable result. | Naveliqo decision framework | NO, when attributed to Naveliqo | Not applicable | SERP review shows overlapping criteria but is not the basis of authority | NO | Optional framework graphic | 2026-08-30 | EDITORIAL / GENERAL GUIDANCE | FIRST is Naveliqo’s editorial framework, not an industry standard or validated scoring instrument. |
| A zero for Reversible or Safe to review should veto a first project even when the total score is high. | Naveliqo risk rule | NO, when attributed to Naveliqo | NIST AI RMF supports risk management generally, not this exact rule | Not required | NO | NO | 2026-08-30 | EDITORIAL / GENERAL GUIDANCE | Present as a conservative house rule, not a legal requirement. |
| A small business should automate one bounded handoff before attempting a broad autonomous process. | Editorial recommendation | Helpful, not mandatory if clearly framed as advice | Make beginner guidance says to start simple; NIST supports contextual risk management | SERP sources consistently favour bounded, repeatable work | YES for the demonstration | Workflow diagram | 2026-08-30 | EDITORIAL / GENERAL GUIDANCE | Avoid “always” or universal performance claims. |
| The first useful automation may not need AI; deterministic trigger-and-action rules can handle structured handoffs. | Definition / guidance | YES | Make describes scenarios using triggers, actions, modules and filters; Zapier describes task/workflow automation | Not required | YES for selected build | YES | 2026-08-30 | VERIFIED | Verified only as a supported workflow pattern. Naveliqo has not tested the selected implementation. |
| Google Forms responses can be stored in a linked Google Sheet. | Product functionality | YES | https://support.google.com/docs/answer/2917686?hl=en | Not required | YES | YES | 2026-08-30 | VERIFIED | Google warns that form and Sheet collaborator permissions must be managed separately. |
| Google Forms can notify a form owner of new responses and can send responders a copy of their response when configured. | Product functionality | YES | https://support.google.com/docs/answer/139706?hl=en | Not required | YES | YES | 2026-08-30 | VERIFIED | A response receipt is not the custom acknowledgement used in the proposed demo. Delivery can be affected by spam/counter-abuse controls. |
| Make supports a visual scenario connected to Google Sheets and requires access/permissions for the connected apps. | Product functionality / setup | YES | https://help.make.com/step-1-plan-your-scenario | Not required | YES | YES | 2026-08-30 | VERIFIED | Capability evidence only; the account connections were not created. |
| Make currently lists a Gmail `Create a Draft` action. | Product functionality | YES | https://www.make.com/en/integrations/make/google-email | Not required | YES | YES | 2026-08-30 | VERIFIED | Integration page evidence; the module, OAuth permissions and actual draft output still require testing. |
| Make currently lists Google Tasks task-creation capability in its integration catalogue. | Product functionality | YES | https://www.make.com/en/integrations/google-tasks/todoist | Not required | YES | YES | 2026-08-30 | VERIFIED | Only catalogue availability is verified. Selected field mapping, permissions and reliability are untested. |
| Make’s Free plan currently shows no time limit, up to 1,000 credits/month, a visual builder, routers/filters, and a 15-minute minimum scheduled interval. | Changing plan/limit | YES | https://www.make.com/en/pricing | Not required | YES | Screenshot of plan page before publication | 2026-08-30 | VERIFIED | Must retain `[VERIFY CURRENT PLAN]` until publication-day check. Do not imply all selected modules consume a fixed amount without verification. |
| Make can run the exact proposed flow: new Form row → validation → Gmail draft → Google Task → status record, with no unintended external action. | End-to-end workflow | YES | Individual capabilities documented above | Not applicable until tested | YES | YES | Not tested | NEEDS TESTING | Do not use “works,” “reliable,” “easy,” or a step count before the controlled test. |
| The workflow can prevent all external sends while still creating a reviewable acknowledgement draft. | Control / safety | YES | Gmail Create a Draft module exists | Not required | YES, including retry/failure paths | YES | Not tested | NEEDS TESTING | Verify no Send module, auto-forward, retry path, or account rule can send externally. |
| The workflow can create one and only one follow-up task per accepted fictional lead. | Reliability / idempotency | YES | Module capability source is insufficient for this claim | Not required | YES | YES | Not tested | NEEDS TESTING | Test duplicates, edits, retries, timeouts and re-runs. |
| The selected workflow saves time, reduces errors, improves response speed, increases conversions, or earns revenue. | Outcome / performance | YES | None | A valid study would still not prove this implementation | YES | Measurement evidence | Not verified | REMOVE | Exclude until a real baseline and repeated test support a carefully bounded statement. No projected result belongs in the draft. |
| The selected workflow is free. | Price / availability | YES | Make Free plan exists; Google account access may be available | Not required | YES | Plan/account screenshots | Not verified end to end | NEEDS TESTING | Phrase only as “may be possible to test without a paid Make plan” and retain `[VERIFY CURRENT PLAN]`; no account or billing review occurred. |
| The proposed setup is easy for every non-technical owner. | Usability claim | YES | None | A representative usability method would be needed | YES | Session evidence | Not verified | REMOVE | Use neutral setup instructions; do not promise ease before a human beginner test. |
| Use fictional, non-sensitive data until permissions, retention, access and failure handling have been reviewed. | Safety guidance | YES | OAIC commercial AI guidance; Canada OPC principles; NIST AI RMF/AIRC | Not required | NO | NO | 2026-08-30 | VERIFIED | Authorities support due diligence/testing and privacy risk management; applicability varies. This is not legal advice. |
| Human oversight should be embedded when a workflow uses commercially available AI with personal information. | Government guidance summary | YES | https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products | Not required | NO | NO | 2026-08-30 | VERIFIED | This supports a general guardrail, not a finding that the demo complies with Australian law. |
| Canadian privacy obligations for generative AI vary with the organization and activity; legal authority and appropriate purpose must be assessed. | Government guidance summary | YES | https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai | Not required | NO | NO | 2026-08-30 | VERIFIED | Do not generalize this into US/UK/Australia legal conclusions. |
| NIST AI RMF is voluntary, non-sector-specific and intended for organizations of different sizes; NIST AIRC includes testing/evaluation/verification/validation resources. | Framework description | YES | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10 and https://airc.nist.gov/ | Not required | NO | NO | 2026-08-30 | VERIFIED | AI RMF 1.0 is being revised; verify current status before publication. |
| The workflow is secure, private, compliant, or safe for real lead data. | Security / legal conclusion | YES | Product and jurisdiction-specific sources required | Qualified review required | YES | Security/permission evidence | Not verified | REMOVE | Never make a blanket claim. Human review of market, sector, notices, permissions, retention and vendor terms is required. |
| Form collaborators may also access the linked response Sheet, and later permission changes may need to be made in both places. | Product permission warning | YES | https://support.google.com/docs/answer/2917686?hl=en and https://support.google.com/docs/answer/139706?hl=en | Not required | YES | YES | 2026-08-30 | VERIFIED | Include in test plan because fictional data does not remove the need to validate access controls. |
| Enabling Google Forms response summaries can expose full-text responses or charts to people who can respond. | Product privacy warning | YES | https://support.google.com/docs/answer/2839588 | Not required | YES | YES | 2026-08-30 | VERIFIED | The test plan should confirm response-summary sharing is off unless intentionally required. |
| Review time, corrections, failures, maintenance and tool usage should be measured alongside any automated processing time. | Measurement method | NO, when framed as Naveliqo method | NIST TEVV resources support documented evaluation generally | Not required | YES | Test log summary | 2026-08-30 | EDITORIAL / GENERAL GUIDANCE | Do not invent a baseline or threshold; human owner defines acceptable result. |
| Invoice reminders, appointment reminders, CRM entry and email triage are universally the best first automations. | Universal recommendation | YES | None | None | Would vary by business | NO | Not verified | REMOVE | Keep as examples to score, never a universal ranking. |

## Accepted source register

| Source | Type | What it supports | Accessed |
|---|---|---|---|
| https://www.make.com/en/pricing | Official product/plan | Current Free-plan availability and displayed limits | 2026-08-30 |
| https://help.make.com/step-1-plan-your-scenario | Official help | Scenario planning, app access and permission requirements | 2026-08-30 |
| https://www.make.com/en/integrations/make/google-email | Official integration catalogue | Gmail `Create a Draft` module availability | 2026-08-30 |
| https://www.make.com/en/integrations/google-tasks/todoist | Official integration catalogue | Google Tasks create-task capability listing | 2026-08-30 |
| https://support.google.com/docs/answer/2917686?hl=en | Official help | Forms-to-Sheets response storage and collaborator warning | 2026-08-30 |
| https://support.google.com/docs/answer/139706?hl=en | Official help | Response notifications, receipts and permissions | 2026-08-30 |
| https://support.google.com/docs/answer/2839588 | Official help | Forms publishing/access and response-summary exposure warning | 2026-08-30 |
| https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10 | US government | Scope and voluntary nature of AI RMF | 2026-08-30 |
| https://airc.nist.gov/ | US government | TEVV resources and current RMF revision notice | 2026-08-30 |
| https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products | Australian regulator | Due diligence, testing, human oversight and privacy considerations | 2026-08-30 |
| https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai | Canadian regulators | Context-dependent privacy obligations and responsible-use principles | 2026-08-30 |
| https://help.zapier.com/hc/en-us/articles/32337438839565-What-s-included-in-Zapier-s-Free-plan | Official help, comparison only | Current Zapier Free-plan constraints; not used as selected-stack evidence | 2026-08-30 |

## Source acceptance rules

- Changing product claim需有official source與verification date；publication day仍需重新檢查。
- Vendor page可以證明「vendor documents a capability」，不能證明real-world reliability、fit、security、outcome或Naveliqo testing。
- Competitor content不是independent evidence，不用於支撐statistics、ROI或product verdict。
- Statistics必須追到original study與methodology；Article 1目前不需要任何外部 statistic。
- First-hand result只代表實際記錄的workflow、tool、plan、date、region、settings與fictional test cases，不能外推。
- Privacy/legal guidance只支撐general guardrails；正式使用real data前仍需market/sector-specific human review。

## Approval record

- Research owner：Codex research pass；human owner not assigned
- Test owner：Not assigned
- Fact checker：Not assigned
- Human approver：Not assigned
- Real test：**NOT RUN**
- Screenshots：**0**
- Publication approval：**NO**
