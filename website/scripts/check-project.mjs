import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectRoot = resolve(websiteRoot, '..');
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

const requiredDocs = [
  'README.md',
  '02_品牌/品牌定位.md',
  '02_品牌/BRAND_STATUS.md',
  '03_網站/網站架構.md',
  '03_網站/功能需求.md',
  '04_SEO/Keyword.md',
  '04_SEO/SEO策略.md',
  '05_內容/文章規劃.md',
  '06_收入/AdSense.md',
  '06_收入/Affiliate.md',
  '06_收入/數位商品.md',
  '06_收入/ADSENSE_READINESS.md',
  '03_網站/GOOGLE_SETUP_GUIDE.md',
  '03_網站/DEPLOYMENT_CHECKLIST.md',
  '03_網站/STAGING_QA_CHECKLIST.md',
  '05_內容/PUBLISHING_WORKFLOW.md',
  '05_內容/research/ARTICLE_01_CLAIM_LEDGER.md',
  '05_內容/research/ARTICLE_01_EVIDENCE_CHECKLIST.md',
  '05_內容/research/ARTICLE_01_WORKFLOW_BUILD_SPEC.md',
  '05_內容/research/ARTICLE_01_TEST_DATA.csv',
  '05_內容/research/ARTICLE_01_SERP_RESEARCH.md',
  '05_內容/research/ARTICLE_01_TEST_PLAN.md',
  '05_內容/research/ARTICLE_01_QUALITY_AUDIT.md',
  '05_內容/drafts/ARTICLE_01_DRAFT.md',
  '06_收入/AFFILIATE_IMPLEMENTATION.md',
  '06_收入/DIGITAL_PRODUCT_ROADMAP.md',
  '07_Codex/PROJECT_AUDIT.md',
  '07_Codex/OVERNIGHT_REPORT.md',
  '07_Codex/PLACEHOLDER_AUDIT.md',
  '07_Codex/PRODUCTION_READINESS.md',
  '07_Codex/TRUST_AND_LEGAL_REVIEW.md',
  '07_Codex/HUB_INDEXING_AUDIT.md',
  '07_Codex/PRELAUNCH_FIX_REPORT.md',
  '07_Codex/BRAND_INTEGRATION_REPORT.md',
  '07_Codex/ARTICLE_01_RESEARCH_REPORT.md',
  '07_Codex/ARTICLE_01_EVIDENCE_REPORT.md',
  '07_Codex/ARTICLE_01_OAUTH_BOUNDARY_REPORT.md',
  '07_Codex/ROUND2_REPORT.md',
  '11_待辦事項/Roadmap.md',
];

for (const relative of requiredDocs) {
  const path = join(projectRoot, ...relative.split('/'));
  expect(existsSync(path), `Missing required document: ${relative}`);
  if (existsSync(path)) expect(statSync(path).size > 100, `Required document is unexpectedly small: ${relative}`);
}

const briefDirectory = join(projectRoot, '05_內容', 'briefs');
const briefs = existsSync(briefDirectory)
  ? readdirSync(briefDirectory).filter((name) => /^\d{2}-.*\.md$/.test(name)).sort()
  : [];
expect(briefs.length === 10, `Expected 10 content briefs, found ${briefs.length}`);

const briefHeadings = [
  '## Primary keyword',
  '## Search intent',
  '## Article purpose',
  '## Target reader',
  '## Suggested title',
  '## Suggested URL',
  '## H1',
  '## Suggested outline',
  '## Internal links',
  '## Potential affiliate opportunities',
  '## Evidence/testing required',
  '## Screenshots required',
  '## Claims requiring verification',
  '## CTA',
  '## Digital product opportunity',
];

for (const brief of briefs) {
  const body = readFileSync(join(briefDirectory, brief), 'utf8');
  for (const heading of briefHeadings) {
    expect(body.includes(heading), `${brief} is missing ${heading}`);
  }
  expect(/human publication approval/i.test(body), `${brief} lacks an explicit human publication gate`);
}

const researchDirectory = join(projectRoot, '05_內容', 'research-checklists');
const researchChecklists = existsSync(researchDirectory)
  ? readdirSync(researchDirectory).filter((name) => /^\d{2}-.*\.md$/.test(name)).sort()
  : [];
expect(researchChecklists.length === 10, `Expected 10 research checklists, found ${researchChecklists.length}`);

const checklistHeadings = [
  '## Claims requiring verification',
  '## Tools requiring testing',
  '## Pricing requiring verification',
  '## Screenshots needed',
  '## Workflow test needed',
  '## Affiliate opportunity',
  '## Internal links',
  '## External evidence required',
  '## What cannot be claimed without first-hand testing',
  '## Publication stop gate',
];

for (const checklist of researchChecklists) {
  const body = readFileSync(join(researchDirectory, checklist), 'utf8');
  for (const heading of checklistHeadings) {
    expect(body.includes(heading), `${checklist} is missing ${heading}`);
  }
  expect(/human approval|human publication approval/i.test(body), `${checklist} lacks an explicit human approval gate`);
}

const keywordPath = join(projectRoot, '04_SEO', 'Keyword.md');
if (existsSync(keywordPath)) {
  const keyword = readFileSync(keywordPath, 'utf8');
  for (const heading of ['## Niche', '## Topic Clusters 與 Keyword Map', '## First 10 Publishing Order', '## Content Strategy']) {
    expect(keyword.includes(heading), `Keyword.md is missing ${heading}`);
  }
  for (let order = 1; order <= 10; order += 1) {
    expect(new RegExp(`\\| ${order} \\|`).test(keyword), `Keyword.md is missing publishing order ${order}`);
  }
}

const legacy = [];
for (const directory of readdirSync(projectRoot, { withFileTypes: true })) {
  if (!directory.isDirectory() || !/^\d{2}_/.test(directory.name)) continue;
  const full = join(projectRoot, directory.name);
  for (const name of readdirSync(full)) {
    if (name.endsWith('.md.txt')) legacy.push(join(full, name));
  }
}
expect(legacy.length === 65, `Expected all 65 legacy .md.txt files to remain, found ${legacy.length}`);
expect(legacy.filter((path) => statSync(path).size > 0).length === 1, 'Legacy placeholder contents changed unexpectedly');

const appRoot = join(websiteRoot, 'app');
function collectSourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectSourceFiles(path) : /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}
for (const path of collectSourceFiles(appRoot)) {
  const body = readFileSync(path, 'utf8');
  expect(!/PROJECT DOLLAR/i.test(body), `Internal codename appears in production-facing source: ${path}`);
  if (!path.endsWith('site-config.ts')) {
    expect(!/\bNaveliqo\b/.test(body), `Approved brand name is hard-coded outside site-config.ts: ${path}`);
  }
}

const siteLinkPath = join(appRoot, 'components', 'site-link.tsx');
expect(existsSync(siteLinkPath), 'Missing centralized internal-link component');
if (existsSync(siteLinkPath)) {
  const siteLinkSource = readFileSync(siteLinkPath, 'utf8');
  expect(!siteLinkSource.includes('next/link'), 'Internal links still use the failing Vinext client-link runtime');
  expect(siteLinkSource.includes('<a href={href}'), 'Internal-link component does not render a standard navigable anchor');
}

expect(existsSync(join(websiteRoot, 'public', 'og.png')), 'Missing social preview image');
expect(existsSync(join(projectRoot, '07_Codex', 'assets', 'og-project-dollar-legacy.png')), 'Legacy Project Dollar OG asset was not preserved');

const siteConfigPath = join(appRoot, 'site-config.ts');
const siteConfigSource = readFileSync(siteConfigPath, 'utf8');
for (const approvedValue of [
  "name: 'Naveliqo'",
  "siteUrl: 'https://naveliqo.com'",
  "positioning: 'Simple AI Automation for Small Business'",
  "tagline: 'No coding. No AI hype. Just practical workflows that save time and money.'",
]) {
  expect(siteConfigSource.includes(approvedValue), `Central site config is missing approved value: ${approvedValue}`);
}
expect(siteConfigSource.includes("status: isLaunchReady ? 'INDEPENDENT PUBLICATION' : 'PRE-LAUNCH'"), 'Pre-launch status is not controlled by the global launch gate');
expect(siteConfigSource.includes("process.env.SITE_LAUNCH_READY === 'true'"), 'Global launch gate is missing from site config');

const envExamplePath = join(websiteRoot, '.env.example');
expect(existsSync(envExamplePath), 'Missing website/.env.example');
if (existsSync(envExamplePath)) {
  const envExample = readFileSync(envExamplePath, 'utf8');
  expect(/^NEXT_PUBLIC_SITE_NAME=Naveliqo$/m.test(envExample), 'Approved brand is missing from .env.example');
  expect(/^NEXT_PUBLIC_SITE_URL=https:\/\/naveliqo\.com$/m.test(envExample), 'Approved canonical origin is missing from .env.example');
  for (const variable of [
    'NEXT_PUBLIC_CONTACT_EMAIL',
    'GOOGLE_SITE_VERIFICATION',
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_ADSENSE_PUBLISHER_ID',
  ]) {
    expect(new RegExp(`^${variable}=$`, 'm').test(envExample), `${variable} must remain blank in .env.example`);
  }
  for (const gate of ['NEXT_PUBLIC_SHOW_DRAFTS=false', 'SITE_LAUNCH_READY=false', 'CONTENT_LAUNCH_APPROVED=false', 'TRUST_PAGES_APPROVED=false']) {
    expect(envExample.includes(gate), `.env.example is missing safe default ${gate}`);
  }
}

const articleRegistryPath = join(appRoot, 'content', 'articles.ts');
expect(existsSync(articleRegistryPath), 'Missing centralized article registry');
if (existsSync(articleRegistryPath)) {
  const articleRegistry = readFileSync(articleRegistryPath, 'utf8');
  for (const status of ["'draft'", "'needs_review'", "'published'", "'needs_update'"]) {
    expect(articleRegistry.includes(status), `Article registry is missing status ${status}`);
  }
  for (const gate of ['humanApproved', 'evidenceComplete', 'screenshotsComplete', 'publishedAt', 'isPublishable', 'getUnresolvedEditorialMarkers']) {
    expect(articleRegistry.includes(gate), `Article registry is missing publication gate ${gate}`);
  }
  expect(/status:\s*'draft'/.test(articleRegistry), 'Foundation article must remain a draft until human approval');
}

const hubPolicyPath = join(appRoot, 'route-indexing.ts');
expect(existsSync(hubPolicyPath), 'Missing centralized hub indexing policy');
if (existsSync(hubPolicyPath)) {
  const hubPolicy = readFileSync(hubPolicyPath, 'utf8');
  for (const slug of ['ai-automation', 'workflows', 'ai-tools', 'tutorials', 'comparisons', 'templates', 'blog']) {
    const escaped = slug.replace('-', '\\-');
    expect(new RegExp(`['"]?${escaped}['"]?\\s*:\\s*\\{[\\s\\S]{0,120}?contentReady:\\s*false`).test(hubPolicy), `${slug} must remain contentReady=false until human approval`);
  }
  expect(hubPolicy.includes('isStandardRouteIndexable'), 'Hub policy is missing a centralized indexability function');
}

const publicNavigationSources = ['page.tsx', 'page-content.ts', join('components', 'site-shell.tsx')];
for (const relative of publicNavigationSources) {
  const body = readFileSync(join(appRoot, relative), 'utf8');
  expect(!body.includes('/blog/what-should-small-business-automate-first'), `Draft article is linked from public source: ${relative}`);
}

const workflowSpec = readFileSync(join(projectRoot, '05_內容', 'research', 'ARTICLE_01_WORKFLOW_BUILD_SPEC.md'), 'utf8');
expect(workflowSpec.includes('NOT BUILT / NOT TESTED / OAUTH NOT GRANTED'), 'Article 1 workflow spec must retain its untested/OAuth hold state');
expect(workflowSpec.includes('Never add Gmail `Send an Email`, `Send a Draft Email`'), 'Article 1 workflow spec is missing the no-send invariant');
expect(workflowSpec.includes('NOT OBSERVED — must be copied from the real consent screen'), 'Article 1 workflow spec must not invent OAuth scopes');

const oauthBoundaryReport = readFileSync(join(projectRoot, '07_Codex', 'ARTICLE_01_OAUTH_BOUNDARY_REPORT.md'), 'utf8');
expect(oauthBoundaryReport.includes('NOT OBSERVED — NO PERMISSION SCREEN WAS OPENED'), 'OAuth boundary report must record that exact scopes were not observed');
expect(oauthBoundaryReport.includes('Safe to grant OAuth now：**NO'), 'OAuth boundary report must not approve an unreviewed permission grant');

const claimLedger = readFileSync(join(projectRoot, '05_內容', 'research', 'ARTICLE_01_CLAIM_LEDGER.md'), 'utf8');
expect(!/^\|.*\|\s*TESTED\s*\|/m.test(claimLedger), 'Claim Ledger must not contain TESTED rows before a real workflow run');
expect(claimLedger.includes('First-hand test complete：**NO**'), 'Claim Ledger must retain first-hand test hold');

const testData = readFileSync(join(projectRoot, '05_內容', 'research', 'ARTICLE_01_TEST_DATA.csv'), 'utf8');
const testDataLines = testData.trim().split(/\r?\n/);
expect(testDataLines.length === 3, `Article 1 minimum test data must contain one header and exactly two records, found ${testDataLines.length} line(s)`);
expect(testData.includes('NAV-A1-20260831-SUCCESS-001'), 'Article 1 success TEST ID is missing');
expect(testData.includes('NAV-A1-20260831-FAIL-MISSING-REPLY-001'), 'Article 1 missing-reply TEST ID is missing');
expect(testData.includes('morgan@harborlight-plumbing.test'), 'Article 1 success record must use a reserved .test reply address');
expect(testData.includes('Riley North,,Maple Lantern'), 'Article 1 failure record must retain a blank reply address');
expect(!/@(?:gmail|outlook|hotmail|yahoo|icloud)\./i.test(testData), 'Article 1 test data must not contain a common real email provider');

const sitemapSource = readFileSync(join(appRoot, 'sitemap.ts'), 'utf8');
expect(sitemapSource.includes('getPublishedArticles'), 'Sitemap does not use the publishable article registry');
expect(sitemapSource.includes('isStandardRouteIndexable'), 'Sitemap does not filter standard routes through centralized indexability');
expect(sitemapSource.includes('siteConfig.url'), 'Sitemap URLs do not use the centralized approved origin');
expect(!sitemapSource.includes('blog/what-should-small-business-automate-first'), 'Draft article is hard-coded into sitemap');

const robotsSource = readFileSync(join(appRoot, 'robots.ts'), 'utf8');
expect(robotsSource.includes('siteConfig.isLaunchReady'), 'robots.txt is not controlled by the global launch gate');
expect(robotsSource.includes('siteConfig.url'), 'robots sitemap URL does not use the centralized approved origin');

const standardRouteSource = readFileSync(join(appRoot, '[slug]', 'page.tsx'), 'utf8');
expect(standardRouteSource.includes('isStandardRouteIndexable'), 'Standard route metadata does not use centralized indexability');
expect(standardRouteSource.includes('canonical: null'), 'Unready standard routes do not clear inherited canonical metadata');

const placeholderCheckPath = join(websiteRoot, 'scripts', 'check-placeholders.mjs');
expect(existsSync(placeholderCheckPath), 'Missing automated placeholder checker');
const editorialMarkerCheckPath = join(websiteRoot, 'scripts', 'check-editorial-markers.mjs');
expect(existsSync(editorialMarkerCheckPath), 'Missing automated editorial marker checker');
const packageJson = JSON.parse(readFileSync(join(websiteRoot, 'package.json'), 'utf8'));
expect(packageJson.scripts?.['check:placeholders']?.includes('check-placeholders.mjs'), 'package.json is missing check:placeholders integration');
expect(packageJson.scripts?.build?.includes('check-placeholders.mjs'), 'Production build does not run the placeholder checker');
expect(packageJson.scripts?.['test:project']?.includes('check-placeholders.mjs'), 'Project validation does not run the placeholder checker');
expect(packageJson.scripts?.['check:editorial-markers']?.includes('check-editorial-markers.mjs'), 'package.json is missing check:editorial-markers integration');
expect(packageJson.scripts?.build?.includes('check-editorial-markers.mjs'), 'Production build does not run the editorial marker checker');
expect(packageJson.scripts?.['test:project']?.includes('check-editorial-markers.mjs'), 'Project validation does not run the editorial marker checker');

const tsconfig = JSON.parse(readFileSync(join(websiteRoot, 'tsconfig.json'), 'utf8'));
expect(tsconfig.compilerOptions?.strict === true, 'TypeScript strict mode must remain enabled');

const websiteTextFiles = [
  ...collectSourceFiles(appRoot),
  join(websiteRoot, '.env.example'),
];
for (const path of websiteTextFiles) {
  const body = readFileSync(path, 'utf8');
  expect(!/\bG-[A-Z0-9]{6,}\b/.test(body), `Possible hard-coded GA Measurement ID in ${path}`);
  expect(!/\bca-pub-\d+\b/i.test(body), `Possible hard-coded AdSense Publisher ID in ${path}`);
}

if (failures.length) {
  console.error(`Project checks failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Project checks passed: ${requiredDocs.length} core documents, ${briefs.length} briefs, ${researchChecklists.length} research checklists, ${legacy.length} preserved legacy files, article and launch safeguards.`);
