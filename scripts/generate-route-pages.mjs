import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { projects } from "../src/data/portfolio.js";

const dist = new URL("../dist/", import.meta.url);
const base = "/portfolio";

const routes = [
  {
    path: "/",
    title: "Abid Ahmed Shaikh — Systems · AI · Cloud · Research",
    description: "Technical portfolio of Abid Ahmed Shaikh: cloud-native software engineering, AI-enabled systems, backend engineering and applied research.",
  },
  {
    path: "/projects",
    title: "Projects — Abid Ahmed Shaikh",
    description: "Selected engineering and research projects, with emphasis on contribution, technical decisions and verifiable evidence.",
  },
  ...projects.map((project) => ({
    path: `/projects/${project.id}`,
    title: `${project.title} — Abid Ahmed Shaikh`,
    description: project.description,
  })),
  {
    path: "/research",
    title: "Research — Abid Ahmed Shaikh",
    description: "Research work spanning applied AI, systems thinking and evidence-backed technical investigation.",
  },
  {
    path: "/achievements",
    title: "Achievements — Abid Ahmed Shaikh",
    description: "Awards, certifications and public credentials presented as inspectable evidence.",
  },
  {
    path: "/experience",
    title: "Experience — Abid Ahmed Shaikh",
    description: "Verified professional engineering experience and technical focus.",
  },
  {
    path: "/about",
    title: "About — Abid Ahmed Shaikh",
    description: "Background, technical direction, research trajectory and community involvement.",
  },
  {
    path: "/contact",
    title: "Contact — Abid Ahmed Shaikh",
    description: "Professional contact links for engineering, research and collaboration conversations.",
  },
];

const template = await readFile(new URL("index.html", dist), "utf8");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function render(template, route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = `https://infx2243.github.io${base}${route.path === "/" ? "/" : route.path}`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
}

for (const route of routes) {
  if (route.path === "/") continue;
  const target = join(dist.pathname, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, render(template, route), "utf8");
}

console.log(`Generated ${routes.length - 1} static route entry points.`);
