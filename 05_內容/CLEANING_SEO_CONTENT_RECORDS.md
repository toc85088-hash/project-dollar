# Cleaning service-support content records

Prepared 2026-10-08 for Sprint 2. Canonical code/data registry: `website/app/cleaning/resources.ts`; shared renderer: `website/app/cleaning/[slug]/page.tsx`. Research: `04_SEO/CLEANING_KEYWORD_MAP.md`.

## Status and publication boundary

- **Three completed, public-readable noindex workflow guides**, not product reviews, case studies or reports of connected tests. Owner approval for search indexing is **not granted** (`contentReady: false` for each guide and the commercial landing page).
- Attribution: existing centralized **Naveliqo Editorial**, with a link explaining organizational attribution. No person, reviewer credential or customer identity invented.
- Evidence checked: 2026-10-08. Source dates appear inline and in a source section. Example wording is original and explicitly fictional/proposed.
- Existing article registry untouched: **0 published; 2 draft + 7 needs_review**. Article 1 remains isolated with its unresolved real Make evidence. No editorial marker was removed from it.
- New resources answer narrowly scoped operational questions; they do not use the legacy article publication schema or claim a hands-on tutorial was completed.

| Page | SEO title / primary intent | Content delivered | Supporting evidence / limits |
| --- | --- | --- | --- |
| `/cleaning/lead-follow-up` | Cleaning Lead Follow-Up: A Practical Workflow / handle a new inbound request before pricing | Intake fields, missing address exception, status queue, reply example, ownership, native-first choice, manual recovery and six proposed checks. | Google Forms response Sheets; Jobber request-form behavior. No tested connector, free-plan suitability or response-time statistic. |
| `/cleaning/quote-follow-up` | Cleaning Quote Follow-Up: Messages and Stop Rules / follow up on an already-sent quote | Authoritative quote version, review timing, original messages, changes, stop rules, duplicate suppression and six proposed checks. | Jobber automation and quote-approval documentation. No guaranteed cadence, price, conversion rate or first-hand review. |
| `/cleaning/booking-automation` | Cleaning Booking Automation: Request to Confirmation / prevent a request being mistaken for a booking | Request/assessment/job distinctions, handoff packet, state model, capacity ownership, recurrence/reschedule/cancel and six proposed checks. | Jobber booking and quote-to-job documentation. No live calendar, reservation or customer-result claim. |

## Internal links and commercial handoff

`/cleaning` → all three guides → the other relevant handoffs + `/cleaning` service scope.

Every guide uses the unchanged central offer:

- **Get a Free 90-Second Demo** → `/cleaning/demo` (fictional, browser-local).
- **Ask About the Pilot Setup** → `/cleaning/pilot` (existing real inquiry form).
- Editorial attribution → `/editorial-policy`; footer/public contact remains `hello@naveliqo.com`.

No duplicate form, outreach system, lead collection database, new email recipient or affiliate link added. No new pilot test email required: implementation stays unchanged and existing real delivery confirmation is retained.

## Technical / editorial release criteria

- Distinct titles, descriptions, H1 and intent; explicit source date and evidence boundary.
- All related paths and on-page anchors resolve; unknown Cleaning slug returns 404.
- Global **and** per-resource approval required for indexable metadata, canonical, future sitemap inclusion and accurate breadcrumb schema. Default is noindex and no schema; no Article/Person/LocalBusiness/Review/Offer markup invented.
- No unsupported statistics, prices, firsthand claims or unresolved editorial markers in the three new guides.
- Existing UI/CSS reused. Responsive navigation and reading layout checked on the built site before deployment; actual test results belong in the sprint report, not this plan.
- Product changes: recheck the four official source URLs in the keyword map before materially updating feature descriptions. Account-specific capability, permissions and plan availability require real testing before a tool tutorial is written.
- Future verticals remain reserved data only, with no empty public routes. Future guides require an intent decision, evidence boundary, useful original content, validation and separate owner indexing approval—not automatic page generation.
