const baseUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const publicRoutes = [
  '/',
  '/cleaning',
  '/cleaning/demo',
  '/cleaning/pilot',
  '/cleaning/lead-follow-up',
  '/cleaning/quote-follow-up',
  '/cleaning/booking-automation',
  '/ai-automation',
  '/workflows',
  '/ai-tools',
  '/tutorials',
  '/comparisons',
  '/templates',
  '/blog',
  '/about',
  '/editorial-policy',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/affiliate-disclosure',
];
const unavailableArticleRoutes = [
  '/blog/what-should-small-business-automate-first',
  '/blog/ai-automation-for-small-business',
  '/tutorials/automate-repetitive-tasks-small-business',
  '/workflows/small-business-automation-ideas',
  '/workflows/ai-email-automation-small-business',
  '/workflows/ai-customer-service-small-business',
  '/workflows/ai-lead-follow-up-automation',
  '/workflows/ai-meeting-notes-small-business',
  '/workflows/ai-automation-mistakes-small-businesses-make',
];
const approvedBrand = 'Naveliqo';
const approvedOrigin = 'https://naveliqo.com';
const approvedContact = 'hello@naveliqo.com';
const approvedPrice = `US${String.fromCharCode(36)}${[149, 199].join('–')}`;
const homeTitle = 'Lead Follow-Up Automation for US Cleaning Businesses';
const approvedTagline = 'No coding. No AI hype. Just practical workflows that save time and money.';
const hubRoutes = new Set([
  '/ai-automation',
  '/workflows',
  '/ai-tools',
  '/tutorials',
  '/comparisons',
  '/templates',
  '/blog',
]);
const failures = [];
const discoveredLinks = new Set();
const fragmentLinks = new Set();
const cleaningSeoTitles = new Set();
const cleaningSeoRoutes = ['/cleaning', '/cleaning/lead-follow-up', '/cleaning/quote-follow-up', '/cleaning/booking-automation'];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

for (const route of publicRoutes) {
  const response = await fetch(new URL(route, baseUrl), { headers: { accept: 'text/html' } });
  const body = await response.text();
  expect(response.status === 200, `${route} returned ${response.status}`);
  expect(/<html[^>]+lang="en"/i.test(body), `${route} is missing html lang="en"`);
  expect(/<title>[^<]+<\/title>/i.test(body), `${route} is missing a title`);
  expect(/<meta[^>]+name="description"[^>]+content="[^"]+/i.test(body), `${route} is missing a meta description`);
  if (route === '/') {
    expect(/<link[^>]+rel="canonical"[^>]+href="[^"]+/i.test(body), 'Home is missing its preparation canonical URL');
  } else {
    expect(!/<link[^>]+rel="canonical"/i.test(body), `${route} must not output a canonical URL before route readiness`);
  }
  expect(/<meta[^>]+property="og:title"[^>]+content="[^"]+/i.test(body), `${route} is missing og:title`);
  expect(/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(body), `${route} must remain noindex before launch approval`);
  expect((body.match(/<h1(?:\s|>)/gi) ?? []).length === 1, `${route} should have exactly one h1`);
  expect(!/Your site is taking shape|Building your site|Untitled site/i.test(body), `${route} still contains starter content`);
  expect(body.includes(approvedBrand), `${route} is missing the approved brand name`);
  expect(!/PROJECT DOLLAR/i.test(body), `${route} exposes the internal project codename`);
  expect(!body.includes('"@type":"Article"'), `${route} must not output Article schema without a publishable article`);
  expect(!body.includes('"@type":"Organization"'), `${route} must not output Organization schema before launch approval`);
  expect(body.includes(`href="mailto:${approvedContact}"`), `${route} must provide the canonical public contact`);
  expect(!/[A-Z0-9._%+-]+@(?:gmail|googlemail)\.com/i.test(body), `${route} must not expose a forwarding inbox`);
  expect(!/contact channel opens|inquiries are not open|address has not been configured/i.test(body), `${route} contains obsolete contact status`);
  expect(!/href="(?:#|javascript:[^"]*|)"/i.test(body), `${route} contains a dead CTA`);
  for (const match of body.matchAll(/href="(mailto:[^"]+)"/g)) {
    const href = new URL(match[1].replaceAll('&amp;', '&'));
    expect(href.pathname === approvedContact, `${route} has an unapproved mail recipient`);
    expect(!href.searchParams.has('cc') && !href.searchParams.has('bcc'), `${route} must not add hidden mail recipients`);
  }
  if (route === '/' || route.startsWith('/cleaning') || route === '/contact') {
    expect(body.includes('Ask About the Pilot Setup'), `${route} is missing the approved secondary CTA`);
    const pilotLinks = [...body.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>Ask About the Pilot Setup<\/a>/g)];
    expect(pilotLinks.length > 0 && pilotLinks.every(link => link[1] === '/cleaning/pilot'), `${route} must send every pilot CTA to the web inquiry page`);
  }
  if (route === '/cleaning/pilot') {
    for (const field of ['name', 'businessName', 'email', 'website', 'leadSource', 'monthlyInquiries', 'notes', 'fax']) expect(body.includes(`name="${field}"`), `Pilot form is missing ${field}`);
    expect(body.includes('Loading form…') && body.includes('id="inquiry"'), 'Pilot form must wait for hydration and have an anchor');
    expect(/<form(?=[^>]*method="post")(?=[^>]*action="\/api\/pilot-inquiry")[^>]*>/.test(body) && /<fieldset disabled/.test(body), 'Unhydrated inquiry must never submit contact data in a URL');
    expect(body.includes('/privacy-policy'), 'Pilot form needs a privacy link');
  }
  if (route === '/privacy-policy') {
    expect(body.includes('Information you submit') && body.includes('Cloudflare Worker'), 'Privacy notice must explain web inquiries');
    expect(!body.includes('no submitted contact form'), 'Privacy notice still denies the web form');
  }
  if (['/', '/cleaning', '/cleaning/pilot', '/terms'].includes(route)) expect(body.includes(approvedPrice), `${route} is missing the approved setup range`);
  if (['/', '/cleaning', '/cleaning/pilot', '/contact'].includes(route)) {
    expect(/href="\/cleaning\/demo"[^>]*>Get a Free 90-Second Demo</.test(body), `${route} must link the approved primary CTA to the real demo`);
  }
  if (hubRoutes.has(route)) {
    expect(!body.includes('"@type":"BreadcrumbList"'), `${route} must not output structured data while contentReady=false`);
  }

  for (const match of body.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (href && !href.startsWith('/_next') && !href.startsWith('/__')) discoveredLinks.add(href);
  }

  if (route === '/') {
    expect(body.includes(`<title>${homeTitle} | ${approvedBrand}</title>`), 'Home title must use the Cleaning MVP focus and parent brand');
    expect(body.includes(approvedTagline), 'Home is missing the approved tagline');
    expect(body.includes(`href="${approvedOrigin}"`), 'Home canonical does not use the approved origin');
    expect(body.includes(`content="${approvedBrand}"`), 'Home metadata is missing the approved brand');
    expect(body.includes(`${approvedOrigin}/og.png`), 'Home Open Graph image does not use the approved origin');
  }
  if (route.startsWith('/cleaning')) {
    expect(!body.includes('application/ld+json'), `${route} must not output schema before MVP content approval`);
  }
  if (cleaningSeoRoutes.includes(route)) {
    const title = body.match(/<title>([^<]+)<\/title>/i)?.[1];
    expect(!cleaningSeoTitles.has(title), `${route} must have a distinct search-intent title`);
    cleaningSeoTitles.add(title);
    expect(body.includes(`property="og:url" content="${approvedOrigin}${route}"`), `${route} needs its own approved Open Graph URL`);
    expect(body.includes(`${approvedOrigin}/og.png`), `${route} must retain the approved social asset`);
    expect(/name="twitter:card" content="summary_large_image"/.test(body), `${route} needs its social card metadata`);
    if (route !== '/cleaning') {
      expect(body.includes('id="acceptance-checks"') && body.includes('id="sources"'), `${route} needs a test plan and evidence boundary`);
      expect(body.includes('Sources checked') && body.includes('2026-10-08'), `${route} needs its source check date`);
      expect(body.includes('no account test') && body.includes('not results of a connected test'), `${route} must not imply unperformed tool tests`);
      expect(body.includes('https://help.getjobber.com/'), `${route} must link the documentation supporting vendor claims`);
      expect(body.includes('href="/editorial-policy"'), `${route} needs real organizational editorial attribution`);
      expect(!/<form\b/.test(body), `${route} should link to, not duplicate, the protected inquiry form`);
    }
  }
  for (const match of body.matchAll(/href="(\/[^"#]*)#([^"?]+)"/g)) fragmentLinks.add(`${match[1]}#${match[2]}`);
}

for (const href of fragmentLinks) {
  const [route, fragment] = href.split('#');
  const html = await (await fetch(new URL(route, baseUrl))).text();
  expect(html.includes(`id="${fragment}"`), `Internal anchor ${href} has no target`);
}

for (const route of ['/hvac', '/plumbing', '/landscaping', '/pest-control', '/other-home-services']) {
  const response = await fetch(new URL(route, baseUrl));
  expect(response.status === 404, `Future vertical ${route} must not expose an empty destination`);
}
const unknownCleaning = await fetch(new URL('/cleaning/unknown-workflow', baseUrl));
expect(unknownCleaning.status === 404, 'Unregistered Cleaning resources must return 404');

for (const route of unavailableArticleRoutes) {
  expect(!discoveredLinks.has(route), `Unpublished article ${route} is linked from a public page`);
}

for (const href of [...discoveredLinks].sort()) {
  const response = await fetch(new URL(href, baseUrl), { redirect: 'manual' });
  expect(response.status >= 200 && response.status < 400, `Internal link ${href} returned ${response.status}`);
}

for (const route of unavailableArticleRoutes) {
  const response = await fetch(new URL(route, baseUrl));
  expect(response.status === 404, `Unpublished article ${route} must return 404 with SHOW_DRAFTS disabled, received ${response.status}`);
}

const missing = await fetch(new URL('/this-page-should-not-exist', baseUrl));
expect(missing.status === 404, `Unknown route should return 404, received ${missing.status}`);

const robots = await (await fetch(new URL('/robots.txt', baseUrl))).text();
expect(/Disallow:\s*\//i.test(robots), 'robots.txt must block crawling before launch approval');
expect(!/Sitemap:/i.test(robots), 'robots.txt must not advertise a sitemap before launch approval');

const sitemap = await (await fetch(new URL('/sitemap.xml', baseUrl))).text();
expect(!/<loc>/i.test(sitemap), 'sitemap.xml must be empty before launch approval');

if (failures.length) {
  console.error(`Site checks failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site checks passed: ${publicRoutes.length} public routes, ${discoveredLinks.size} unique internal links, hub noindex/canonical/schema gates, ${unavailableArticleRoutes.length} isolated article routes, robots, empty sitemap, and 404.`);
