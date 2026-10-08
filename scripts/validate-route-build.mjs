import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import { publicRoutes, getRouteMetadata } from "../src/data/routes.js";
import { SITE_BASE_PATH, SITE_URL } from "../src/config/site.js";

const dist = new URL("../dist/", import.meta.url);
const base = SITE_BASE_PATH.replace(/\/$/, "");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

const index = await readFile(new URL("index.html", dist), "utf8");

if (!index.includes(`<meta name="description"`)) fail("Missing homepage description metadata.");
if (!index.includes(`<link rel="canonical" href="${SITE_URL}${base}/"`)) fail("Homepage canonical URL is incorrect.");

const seenTitles = new Set();

for (const route of publicRoutes) {
  const html = route === "/"
    ? index
    : await readFile(new URL(`.${route.replace(/^\//, "")}/index.html`, dist), "utf8");

  const metadata = getRouteMetadata(route);
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const descriptionMatch = html.match(/<meta name="description" content="([^"]*)"/);

  if (!titleMatch || titleMatch[1] !== metadata.title) fail(`Title mismatch: ${route}`);
  if (!descriptionMatch || descriptionMatch[1] !== metadata.description) fail(`Description mismatch: ${route}`);

  const expectedCanonical = `${SITE_URL}${base}${route === "/" ? "/" : route}`;
  if (!canonicalMatch || canonicalMatch[1] !== expectedCanonical) fail(`Canonical mismatch: ${route}`);

  if (seenTitles.has(metadata.title)) fail(`Duplicate page title: ${metadata.title}`);
  seenTitles.add(metadata.title);
}

const requiredAssets = ["404.html", "robots.txt", "sitemap.xml"];
for (const asset of requiredAssets) {
  await access(new URL(`.${asset}`, dist)).catch(() => fail(`Missing deployment asset: ${asset}`));
}

if (process.exitCode) process.exit();
console.log(`Validated ${publicRoutes.length} public routes and deployment metadata.`);
