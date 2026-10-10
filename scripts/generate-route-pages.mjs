import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { publicRoutes, getRouteMetadata } from "../src/data/routes.js";
import { SITE_BASE_PATH, SITE_URL } from "../src/config/site.js";

const dist = new URL("../dist/", import.meta.url);
const base = SITE_BASE_PATH.replace(/\/$/, "");

const routes = publicRoutes.map((path) => ({
  path,
  ...getRouteMetadata(path),
}));

const template = render(
  await readFile(new URL("index.html", dist), "utf8"),
  routes.find((route) => route.path === "/"),
);
await writeFile(new URL("index.html", dist), template, "utf8");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function render(template, route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = `${SITE_URL}${base}${route.path === "/" ? "/" : route.path}`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${SITE_URL}${base}/og-image.svg" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${SITE_URL}${base}/og-image.svg" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
}

for (const route of routes) {
  if (route.path === "/") continue;
  const target = join(dist.pathname, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, render(template, route), "utf8");
}

console.log(`Generated ${routes.length - 1} static route entry points.`);
