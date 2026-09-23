import { readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productionMode = process.argv.includes('--production') || process.env.NODE_ENV === 'production';
const excludedDirectories = new Set(['.git', '.next', '.vinext', '.wrangler', 'dist', 'node_modules', 'out', 'outputs', 'work']);
const excludedFiles = new Set(['pnpm-lock.yaml', 'check-placeholders.mjs']);
const textExtensions = new Set(['.css', '.env', '.html', '.js', '.json', '.jsx', '.md', '.mdx', '.mjs', '.svg', '.ts', '.tsx', '.txt']);

const rules = [
  { id: 'internal-codename', label: 'internal project codename in website tree', pattern: /PROJECT DOLLAR/i, severity: 'review' },
  { id: 'todo-fixme', label: 'unfinished code marker', pattern: /\b(?:TODO|FIXME)\b/i, severity: 'critical' },
  { id: 'test-email', label: 'test email address', pattern: /test@example\.com/i, severity: 'critical' },
  { id: 'example-domain', label: 'example.com value', pattern: /example\.com/i, severity: 'critical' },
  { id: 'lorem', label: 'lorem ipsum copy', pattern: /lorem\s+ipsum/i, severity: 'critical' },
  { id: 'fake-testimonial', label: 'fake testimonial/review', pattern: /\bfake\s+(?:testimonials?|reviews?)\b/i, severity: 'critical' },
  { id: 'fake', label: 'fake-content marker', pattern: /\bfake\b/i, severity: 'review' },
  { id: 'placeholder', label: 'placeholder marker', pattern: /placeholder/i, severity: 'review' },
  { id: 'dummy', label: 'dummy-content marker', pattern: /\bdummy\b/i, severity: 'review' },
  { id: 'price', label: 'currency/price value requiring approval', pattern: /(?:[$£€]\s?\d|\b(?:USD|GBP|CAD|AUD)\s?\d)/i, severity: 'critical' },
  { id: 'unverifiable-statistics', label: 'unverifiable/invented statistics wording', pattern: /\b(?:unverifiable|invented|fabricated)\s+statistics?\b/i, severity: 'critical' },
  { id: 'statistical-claim', label: 'numeric marketing/statistical claim', pattern: /(?:\b\d+(?:\.\d+)?%\b|\b\d[\d,]*\s+(?:users|customers|businesses|reviews)\b)/i, severity: 'critical', proseOnly: true },
];

function collectTextFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) return [];
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) return collectTextFiles(fullPath);
    if (excludedFiles.has(entry.name)) return [];
    if (entry.name === '.env.example' || textExtensions.has(extname(entry.name))) return [fullPath];
    return [];
  });
}

function normalizePath(path) {
  return relative(websiteRoot, path).replaceAll('\\', '/');
}

function allowance(finding) {
  const { id, path, lineText } = finding;

  if (id === 'price' && path === 'app/cleaning/offer.ts' && lineText.trim() === "price: 'US$149–199',") {
    return { allowed: true, developmentOnly: false, reason: 'Exact owner-approved setup range, 2026-09-23; no other price is allowed.' };
  }

  if (id === 'internal-codename' && path === 'README.md' && /internal (?:project )?codename/i.test(lineText)) {
    return { allowed: true, developmentOnly: false, reason: 'Local developer documentation identifies the internal codename explicitly.' };
  }
  if (id === 'internal-codename' && (path === 'scripts/check-project.mjs' || path === 'scripts/check-site.mjs')) {
    return { allowed: true, developmentOnly: false, reason: 'Negative production-source assertion in project validation.' };
  }
  if (id === 'placeholder' && path === 'scripts/check-project.mjs') {
    return { allowed: true, developmentOnly: false, reason: 'Project validation text or audit filename.' };
  }
  if (id === 'placeholder' && path === 'package.json' && lineText.includes('check-placeholders.mjs')) {
    return { allowed: true, developmentOnly: false, reason: 'Command name for this validation guard.' };
  }
  if (id === 'placeholder' && path === 'README.md' && /check:placeholders|placeholder guard/i.test(lineText)) {
    return { allowed: true, developmentOnly: false, reason: 'Documentation for the placeholder validation command.' };
  }
  if (id === 'todo-fixme' && path === 'README.md' && lineText.includes('production validation')) {
    return { allowed: true, developmentOnly: false, reason: 'Documentation of patterns that production validation rejects.' };
  }
  if (id === 'example-domain' && path === 'app/site-config.ts') {
    return { allowed: true, developmentOnly: false, reason: 'Validation rejects example domains and addresses from launch configuration.' };
  }
  if ((id === 'fake' || id === 'fake-testimonial') && path === 'app/page-content.ts' && /\bNo fake\b/i.test(lineText)) {
    return { allowed: true, developmentOnly: false, reason: 'Visible editorial prohibition, not fabricated content.' };
  }

  return { allowed: false, developmentOnly: false, reason: '' };
}

const findings = [];
for (const fullPath of collectTextFiles(websiteRoot)) {
  const path = normalizePath(fullPath);
  const extension = extname(fullPath);
  const lines = readFileSync(fullPath, 'utf8').split(/\r?\n/);

  lines.forEach((lineText, index) => {
    for (const rule of rules) {
      if (rule.proseOnly && ['.css', '.json', '.mjs', '.svg'].includes(extension)) continue;
      if (!rule.pattern.test(lineText)) continue;
      const finding = { ...rule, path, line: index + 1, lineText: lineText.trim() };
      findings.push({ ...finding, ...allowance(finding) });
    }
  });
}

const unapproved = findings.filter((finding) => !finding.allowed);
const developmentOnly = findings.filter((finding) => finding.allowed && finding.developmentOnly);
const safeMatches = findings.filter((finding) => finding.allowed && !finding.developmentOnly);
const failures = unapproved.filter((finding) => finding.severity === 'critical' || productionMode);

for (const finding of unapproved) {
  const level = finding.severity === 'critical' ? 'BLOCKER' : productionMode ? 'PRODUCTION BLOCKER' : 'WARNING';
  console.error(`[${level}] ${finding.path}:${finding.line} — ${finding.label}: ${finding.lineText}`);
}

if (productionMode && developmentOnly.length) {
  console.warn(`PRODUCTION WARNING: ${developmentOnly.length} explicitly development-only placeholder match(es) remain.`);
  for (const finding of developmentOnly) {
    console.warn(`- ${finding.path}:${finding.line} — ${finding.label}. ${finding.reason}`);
  }
  console.warn('The site must remain behind the noindex/robots/sitemap launch gate until these items are replaced or re-approved.');
}

if (failures.length) {
  console.error(`Placeholder check failed: ${failures.length} unapproved high-risk finding(s), ${developmentOnly.length} approved development-only match(es), ${safeMatches.length} safe policy/validation match(es).`);
  process.exit(1);
}

console.log(`Placeholder check passed: 0 unapproved high-risk findings, ${developmentOnly.length} explicit development-only warning(s), ${safeMatches.length} safe policy/validation match(es), ${findings.length} total reviewed match(es).`);
