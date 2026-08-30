import { readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = join(websiteRoot, 'app', 'content');
const markerConfigPath = join(contentRoot, 'editorial-markers.json');
const registryPath = join(contentRoot, 'articles.ts');
const productionMode = process.argv.includes('--production') || process.env.NODE_ENV === 'production';
const expectedMarkers = [
  '[TEST REQUIRED]',
  '[SCREENSHOT REQUIRED]',
  '[VERIFY CURRENT PLAN]',
  '[SOURCE REQUIRED]',
];
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

const markerConfig = JSON.parse(readFileSync(markerConfigPath, 'utf8'));
const markers = markerConfig.markers;
expect(Array.isArray(markers), 'Editorial marker config must contain a markers array.');
expect(
  Array.isArray(markers) && expectedMarkers.every((marker) => markers.includes(marker)),
  'Editorial marker config is missing one or more required publication blockers.',
);

const registrySource = readFileSync(registryPath, 'utf8');
expect(registrySource.includes('getUnresolvedEditorialMarkers'), 'Runtime marker detection is missing from the article registry.');
expect(
  /getUnresolvedEditorialMarkers\(article\)\.length\s*===\s*0/.test(registrySource),
  'isPublishable must reject articles containing unresolved editorial markers.',
);

const articleFiles = readdirSync(contentRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && ['.ts', '.tsx', '.json'].includes(extname(entry.name)))
  .map((entry) => join(contentRoot, entry.name))
  .filter((path) => path !== markerConfigPath);

const findings = [];
for (const path of articleFiles) {
  const source = readFileSync(path, 'utf8');
  const unresolved = markers.filter((marker) => source.includes(marker));
  if (!unresolved.length) continue;

  const relativePath = relative(websiteRoot, path).replaceAll('\\', '/');
  const published = /status:\s*['"]published['"]/.test(source);
  const approvalsSet = [
    /humanApproved:\s*true/.test(source),
    /evidenceComplete:\s*true/.test(source),
    /screenshotsComplete:\s*true/.test(source),
  ].some(Boolean);

  findings.push({ relativePath, unresolved, published, approvalsSet });
  expect(!published, `${relativePath} is published while unresolved editorial markers remain.`);
  expect(!approvalsSet, `${relativePath} has completion/approval flags set while unresolved editorial markers remain.`);
}

if (failures.length) {
  console.error(`Editorial marker check failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

const unresolvedCount = findings.reduce((total, finding) => total + finding.unresolved.length, 0);
if (findings.length) {
  const prefix = productionMode ? 'PRODUCTION HOLD' : 'DRAFT HOLD';
  console.warn(`${prefix}: ${unresolvedCount} editorial marker type(s) remain in ${findings.length} non-publishable article source file(s).`);
  for (const finding of findings) {
    console.warn(`- ${finding.relativePath}: ${finding.unresolved.join(', ')}`);
  }
}

console.log('Editorial marker guard passed: runtime publication gate is present and no marked article is publishable.');
