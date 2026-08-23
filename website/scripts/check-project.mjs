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
  '05_內容/research/ARTICLE_01_TEST_PLAN.md',
  '06_收入/AFFILIATE_IMPLEMENTATION.md',
  '06_收入/DIGITAL_PRODUCT_ROADMAP.md',
  '07_Codex/PROJECT_AUDIT.md',
  '07_Codex/OVERNIGHT_REPORT.md',
  '07_Codex/PLACEHOLDER_AUDIT.md',
  '07_Codex/PRODUCTION_READINESS.md',
  '07_Codex/TRUST_AND_LEGAL_REVIEW.md',
  '07_Codex/HUB_INDEXING_AUDIT.md',
  '07_Codex/PRELAUNCH_FIX_REPORT.md',
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
  if (path.endsWith('site-config.ts')) continue;
  expect(!readFileSync(path, 'utf8').includes('PROJECT DOLLAR'), `Brand name is hard-coded outside site-config.ts: ${path}`);
}

expect(existsSync(join(websiteRoot, 'public', 'og.png')), 'Missing social preview image');

const envExamplePath = join(websiteRoot, '.env.example');
expect(existsSync(envExamplePath), 'Missing website/.env.example');
if (existsSync(envExamplePath)) {
  const envExample = readFileSync(envExamplePath, 'utf8');
  for (const variable of [
    'NEXT_PUBLIC_SITE_NAME',
    'NEXT_PUBLIC_SITE_URL',
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
  for (const gate of ['humanApproved', 'evidenceComplete', 'publishedAt', 'isPublishable']) {
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
  expect(!body.includes('/blog/ai-automation-for-small-business'), `Draft article is linked from public source: ${relative}`);
}

const sitemapSource = readFileSync(join(appRoot, 'sitemap.ts'), 'utf8');
expect(sitemapSource.includes('getPublishedArticles'), 'Sitemap does not use the publishable article registry');
expect(sitemapSource.includes('isStandardRouteIndexable'), 'Sitemap does not filter standard routes through centralized indexability');
expect(!sitemapSource.includes('blog/ai-automation-for-small-business'), 'Draft article is hard-coded into sitemap');

const standardRouteSource = readFileSync(join(appRoot, '[slug]', 'page.tsx'), 'utf8');
expect(standardRouteSource.includes('isStandardRouteIndexable'), 'Standard route metadata does not use centralized indexability');
expect(standardRouteSource.includes('canonical: null'), 'Unready standard routes do not clear inherited canonical metadata');

const placeholderCheckPath = join(websiteRoot, 'scripts', 'check-placeholders.mjs');
expect(existsSync(placeholderCheckPath), 'Missing automated placeholder checker');
const packageJson = JSON.parse(readFileSync(join(websiteRoot, 'package.json'), 'utf8'));
expect(packageJson.scripts?.['check:placeholders']?.includes('check-placeholders.mjs'), 'package.json is missing check:placeholders integration');
expect(packageJson.scripts?.build?.includes('check-placeholders.mjs'), 'Production build does not run the placeholder checker');
expect(packageJson.scripts?.['test:project']?.includes('check-placeholders.mjs'), 'Project validation does not run the placeholder checker');

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
