const baseUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const routes = [
  '/',
  '/ai-automation',
  '/workflows',
  '/ai-tools',
  '/tutorials',
  '/comparisons',
  '/templates',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/affiliate-disclosure',
  '/blog/ai-automation-for-small-business',
];
const failures = [];
const discoveredLinks = new Set();

function expect(condition, message) {
  if (!condition) failures.push(message);
}

for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl), { headers: { accept: 'text/html' } });
  const body = await response.text();
  expect(response.status === 200, `${route} returned ${response.status}`);
  expect(/<html[^>]+lang="en"/i.test(body), `${route} is missing html lang="en"`);
  expect(/<title>[^<]+<\/title>/i.test(body), `${route} is missing a title`);
  expect(/<meta[^>]+name="description"[^>]+content="[^"]+/i.test(body), `${route} is missing a meta description`);
  expect(/<link[^>]+rel="canonical"[^>]+href="[^"]+/i.test(body), `${route} is missing a canonical URL`);
  expect(/<meta[^>]+property="og:title"[^>]+content="[^"]+/i.test(body), `${route} is missing og:title`);
  expect((body.match(/<h1(?:\s|>)/gi) ?? []).length === 1, `${route} should have exactly one h1`);
  expect(!/Your site is taking shape|Building your site|Untitled site/i.test(body), `${route} still contains starter content`);

  for (const match of body.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (href && !href.startsWith('/_next') && !href.startsWith('/__')) discoveredLinks.add(href);
  }

  if (route === '/') expect(body.includes('/og.png'), 'Home page is missing the site-wide social preview image');
  if (route === '/blog/ai-automation-for-small-business') {
    expect(body.includes('"@type":"Article"'), 'Article page is missing Article structured data');
    expect(body.includes('"@type":"BreadcrumbList"'), 'Article page is missing Breadcrumb structured data');
    expect(!/<meta[^>]+property="og:image"/i.test(body), 'Article must not inherit the generic site image as an item-specific preview');
  }
}

for (const href of [...discoveredLinks].sort()) {
  const response = await fetch(new URL(href, baseUrl), { redirect: 'manual' });
  expect(response.status >= 200 && response.status < 400, `Internal link ${href} returned ${response.status}`);
}

const missing = await fetch(new URL('/this-page-should-not-exist', baseUrl));
expect(missing.status === 404, `Unknown route should return 404, received ${missing.status}`);

const robots = await (await fetch(new URL('/robots.txt', baseUrl))).text();
expect(robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`), 'robots.txt is missing the sitemap declaration');

const sitemap = await (await fetch(new URL('/sitemap.xml', baseUrl))).text();
for (const route of routes) {
  expect(sitemap.includes(`<loc>${baseUrl}${route}</loc>`), `sitemap.xml is missing ${route}`);
}

if (failures.length) {
  console.error(`Site checks failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site checks passed: ${routes.length} routes, ${discoveredLinks.size} unique internal links, metadata, structured data, robots, sitemap, and 404.`);
