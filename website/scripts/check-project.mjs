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
  '07_Codex/PROJECT_AUDIT.md',
  '07_Codex/OVERNIGHT_REPORT.md',
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

if (failures.length) {
  console.error(`Project checks failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Project checks passed: ${requiredDocs.length} core documents, ${briefs.length} briefs, ${legacy.length} preserved legacy files.`);
