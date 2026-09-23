# Cleaning MVP Sprint 1.5 — Public CTA Audit

Updated: 2026-09-24. Public inbox approval supplied by owner; no email sent during QA.

| Surface / action | Destination / outcome | Boundary |
| --- | --- | --- |
| Home, Cleaning, pilot, Contact primary | **Get a Free 90-Second Demo** → `/cleaning/demo` | Free self-guided fictional walkthrough, no registration |
| Header desktop/mobile, Home, Cleaning, demo, pilot, Contact secondary | **Ask About the Pilot Setup** → `mailto:hello@naveliqo.com?subject=Residential%20cleaning%20pilot%20setup%20enquiry` | Opens visitor's composer; never auto-sends |
| Pilot scope/pricing links | `/cleaning/pilot` | Approved setup range plus exclusions/responsibilities/written-agreement boundary |
| Footer and trust page contact links | `mailto:hello@naveliqo.com` or the same scoped enquiry link | No private address, CC or BCC; visible copyable address |
| Header/menu navigation | Home / Cleaning / Demo / About / Contact; mobile also pilot scope | Existing rendered destinations, no future-vertical empty links |
| Demo case selector / run / duplicate / reset | Local model outputs and page state | No email, task, booking, network integration or durable status update |
| Pilot brief generate / download | On-page summary and local `.txt` | No submission or contact claim; visitor may choose to email it themselves |
| Service section and policy/editorial links | Existing section anchors and rendered trust pages | No bare `#`, empty, or JavaScript links |
| 404 recovery | Existing Home / Contact routes | No dead recovery action |

The two conversion CTAs and advertised fee are centralized in `website/app/cleaning/offer.ts`; the inbox is centralized in `site-config.ts`. Navigation labels and local tool buttons describe their own actions rather than pretending to be lead submissions.

If no email app opens, Contact and pilot copy instruct the visitor to copy the public address into their usual mail service. The website does not claim a message was received. No form with a fake confirmation exists.

Automated verification: all rendered public routes' mail recipients, no CC/BCC, approved primary/secondary destinations, contact consistency, route/fragment validity and draft isolation are asserted by `scripts/check-site.mjs`. Interactive browser observations and final results are recorded in `CLEANING_MVP_SPRINT_1_5_REPORT.md`; href validation is not a mailbox delivery or external-mail-client test.
