import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const source = readJson('../wrangler.json');
const built = readJson('../dist/server/wrangler.json');
const envTemplate = Object.fromEntries(readFileSync(new URL('../.env.example', import.meta.url), 'utf8')
  .split(/\r?\n/).filter((line) => line && !line.startsWith('#')).map((line) => {
    const split = line.indexOf('=');
    return [line.slice(0, split), line.slice(split + 1)];
  }));

for (const [label, config] of [['source', source], ['built', built]]) {
  assert.equal(config.name, 'naveliqo-cleaning-mvp', `${label}: wrong release identity`);
  assert.equal(config.compatibility_date, '2026-05-15', `${label}: runtime compatibility changed`);
  assert.ok(config.compatibility_flags.includes('nodejs_compat'));
  assert.equal(new Set(config.compatibility_flags).size, config.compatibility_flags.length, `${label}: duplicate compatibility flags`);
  assert.equal(config.workers_dev, false, `${label}: no public workers.dev route`);
  assert.equal(config.preview_urls, false, `${label}: no public version URLs`);
  assert.deepEqual(config.routes, [], `${label}: DNS/custom domain activation must remain separate`);
  assert.equal(config.observability.enabled, false, `${label}: do not persist request logs by default`);
  assert.equal(config.send_metrics, false, `${label}: do not send CLI usage telemetry`);
  assert.deepEqual(config.vars, envTemplate, `${label}: approved environment template drift`);
  assert.equal(config.account_id, undefined, `${label}: do not invent or expose an account ID`);
  for (const binding of ['d1_databases', 'r2_buckets', 'kv_namespaces', 'services', 'send_email', 'workflows', 'analytics_engine_datasets']) {
    assert.equal((config[binding] ?? []).length, 0, `${label}: ${binding} must remain disconnected`);
  }
  assert.equal((config.triggers?.crons ?? []).length, 0, `${label}: no schedules`);
  assert.equal((config.durable_objects?.bindings ?? []).length, 0);
  assert.equal((config.queues?.producers ?? []).length, 0);
  assert.equal((config.queues?.consumers ?? []).length, 0);
}
assert.equal(source.main, 'vinext/server/app-router-entry');
assert.equal(built.main, 'index.js');
assert.equal(built.assets.directory, '../client');
for (const asset of ['../dist/server/index.js', '../dist/client/og.png', '../dist/client/favicon.svg']) {
  assert.ok(existsSync(new URL(asset, import.meta.url)), `Missing release asset: ${fileURLToPath(new URL(asset, import.meta.url))}`);
}
console.log('Worker configuration passed: approved vars, matching source/build, pinned runtime, no public routes/preview URLs, no telemetry/persisted Worker logs, no remote resources, and release assets present. This does not deploy or verify a Cloudflare account.');
