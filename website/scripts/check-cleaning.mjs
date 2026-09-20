import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

async function loadPureModule(relative) {
  const source = readFileSync(new URL(relative, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const { processCleaningLead, demoCases } = await loadPureModule('../app/cleaning/demo-model.ts');
const { industries, cleaningMvp } = await loadPureModule('../app/industries.ts');
const { hubIndexingPolicies, isStandardRouteIndexable } = await loadPureModule('../app/route-indexing.ts');
const good = demoCases[0].lead;
const untouched = structuredClone(good);
const success = processCleaningLead(good);
assert.equal(success.status, 'READY FOR OWNER REVIEW');
assert.ok(success.draft?.body.includes('Morgan'));
assert.ok(success.task?.includes(good.testId));
assert.equal(success.quoteChecklist.length, 4);
assert.equal(success.log.testId, good.testId);
assert.deepEqual(good, untouched, 'Processing must not mutate source data');
const missing = processCleaningLead(demoCases[1].lead);
assert.equal(missing.status, 'MANUAL REVIEW');
assert.equal(missing.draft, null);
assert.ok(missing.task?.includes('original inquiry'));
assert.match(missing.reason, /reply email/);
const outside = processCleaningLead(demoCases[2].lead);
assert.equal(outside.status, 'MANUAL REVIEW');
assert.match(outside.reason, /outside/);
assert.equal(outside.draft, null);
for (const override of [{ replyEmail: ' ' }, { replyEmail: 'invalid' }, { service: 'Hazardous cleanup' }, { firstName: '' }, { bedrooms: -1 }, { bathrooms: 0 }, { bedrooms: 1.5 }]) {
  const result = processCleaningLead({ ...good, ...override });
  assert.equal(result.status, 'MANUAL REVIEW');
  assert.equal(result.draft, null);
}
const duplicate = processCleaningLead(good, [good.testId]);
assert.equal(duplicate.status, 'DUPLICATE SKIPPED');
assert.equal(duplicate.draft, null);
assert.equal(duplicate.task, null);
for (const result of [success, missing, outside, duplicate]) {
  assert.equal(result.bookingStatus, 'NOT CONFIRMED');
  assert.equal(result.log.emailSent, false);
  assert.equal(result.log.status, result.status);
}
assert.equal(new Set(demoCases.map(({ lead }) => lead.testId)).size, 3);
assert.ok(demoCases.every(({ lead }) => !lead.replyEmail || lead.replyEmail.endsWith('.test')));
assert.equal(industries.filter((industry) => industry.stage === 'mvp').length, 1);
assert.equal(industries.find((industry) => industry.stage === 'mvp').slug, 'cleaning');
assert.equal(industries.length, 6);
assert.equal(cleaningMvp.contentReady, false);
for (const slug of Object.keys(hubIndexingPolicies)) {
  assert.equal(isStandardRouteIndexable(slug, false), false);
  assert.equal(isStandardRouteIndexable(slug, true), false, 'Generic hubs need separate approval even after launch');
}
for (const relative of ['../app/cleaning/demo-model.ts', '../app/cleaning/demo/demo-client.tsx', '../app/cleaning/pilot/pilot-client.tsx']) {
  const source = readFileSync(new URL(relative, import.meta.url), 'utf8');
  assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket|localStorage|sessionStorage|document\.cookie/, 'Local tools must not transmit or persist visitor choices');
}
console.log('Cleaning checks passed: success, missing/invalid email, outside area, invalid scope/home details, duplicates, no send/booking, fictional-only data, local-only components, six vertical slots, and retained hub gates. No external integration was tested.');
