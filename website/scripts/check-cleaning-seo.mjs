import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../app/cleaning/resources.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const resources = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const { cleaningResources, cleaningLanding, resourceSources, cleaningIndexingPolicy, getIndexableCleaningPages, getCleaningResource } = resources;
assert.equal(cleaningResources.length, 3, 'Keep the initial scope to the three selected guides');
const pages = [cleaningLanding, ...cleaningResources];
for (const key of ['path', 'title', 'description']) assert.equal(new Set(pages.map(page => page[key])).size, pages.length, `Distinct ${key} required`);
for (const page of pages) {
  assert.equal(page.contentReady, false, 'Owner indexing approval is still outstanding');
  assert.equal(page.updatedAt, '2026-10-08');
  for (const globalReady of [false, true]) assert.deepEqual(cleaningIndexingPolicy(page, globalReady), { indexable: false, canonical: null });
  assert.deepEqual(cleaningIndexingPolicy({ ...page, contentReady: true }, false), { indexable: false, canonical: null });
  assert.deepEqual(cleaningIndexingPolicy({ ...page, contentReady: true }, true), { indexable: true, canonical: page.path });
}
assert.deepEqual(getIndexableCleaningPages(false), []);
assert.deepEqual(getIndexableCleaningPages(true), [], 'Global approval alone must not index these resources');
assert.equal(getCleaningResource('unknown-workflow'), undefined);
for (const resource of cleaningResources) {
  assert.equal(resource.path, `/cleaning/${resource.slug}`);
  assert.equal(new Set(resource.sections.map(section => section.id)).size, resource.sections.length);
  assert.equal(resource.checks.length, 6);
  assert.equal(resource.related.length, 2);
  for (const slug of resource.related) assert.ok(slug !== resource.slug && getCleaningResource(slug), 'Related guide must exist and differ');
  const citations = resource.sections.flatMap(section => section.sourceIds ?? []);
  assert.ok(citations.length > 0);
  for (const id of citations) {
    const citation = resourceSources[id];
    assert.ok(citation, `Missing source ${id}`);
    assert.ok(['support.google.com', 'help.getjobber.com'].includes(new URL(citation.href).hostname));
    assert.equal(citation.checked, resource.updatedAt);
  }
  const text = JSON.stringify(resource);
  assert.doesNotMatch(text, /\[(?:TEST|SCREENSHOT|SOURCE) REQUIRED\]|\[VERIFY CURRENT PLAN\]/, 'No unresolved editorial marker in a public guide');
}

// Exercise real metadata/schema code with isolated configuration; never change launch environment.
const metadataSource = readFileSync(new URL('../app/cleaning/resource-metadata.ts', import.meta.url), 'utf8');
const metadataJs = ts.transpileModule(metadataSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
function metadataFunctions(isLaunchReady) {
  const exports = {};
  runInNewContext(metadataJs, { exports, require(id) {
    if (id === './resources') return resources;
    if (id === '../site-config') return { siteConfig: { isLaunchReady, url: 'https://naveliqo.com', name: 'Approved brand', positioning: 'Approved positioning' } };
    throw new Error(`Unexpected dependency ${id}`);
  } });
  return exports;
}
for (const ready of [false, true]) {
  const functions = metadataFunctions(ready);
  for (const page of pages) {
    const metadata = functions.cleaningSeoMetadata(page);
    assert.equal(metadata.alternates.canonical, null);
    assert.equal(metadata.robots.index, false);
    assert.equal(metadata.openGraph.url, `https://naveliqo.com${page.path}`);
    assert.equal(functions.cleaningBreadcrumbSchema(page), null);
  }
}
const approved = { ...cleaningResources[0], contentReady: true };
assert.equal(metadataFunctions(false).cleaningBreadcrumbSchema(approved), null);
const future = metadataFunctions(true);
assert.equal(future.cleaningSeoMetadata(approved).alternates.canonical, approved.path);
const breadcrumbs = future.cleaningBreadcrumbSchema(approved);
assert.equal(breadcrumbs['@type'], 'BreadcrumbList');
assert.equal(breadcrumbs.itemListElement.length, 3);
assert.equal(breadcrumbs.itemListElement[2].item, `https://naveliqo.com${approved.path}`);
console.log('Cleaning SEO checks passed: 3 distinct guides, official source mappings, 18 proposed acceptance cases, related links, independent route/global gates, canonical/OG and gated breadcrumb schema. No live integration tested.');
