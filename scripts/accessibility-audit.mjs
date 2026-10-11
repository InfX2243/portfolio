import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const baseURL = process.env.A11Y_BASE_URL || "http://127.0.0.1:4173";
const routes = ["/", "/projects/", "/projects/ascend-apex/", "/projects/cognitrace/", "/projects/green-passport/", "/research/", "/experience/", "/achievements/", "/about/", "/contact/", "/not-a-real-route/"];
const server = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], { stdio: "ignore", shell: process.platform === "win32" });
let browser;
let failed = false;
try {
  let ready = false;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseURL);
      if (response.ok) { ready = true; break; }
    } catch {}
    await delay(500);
  }
  if (!ready) throw new Error("Vite preview server did not become ready.");
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  for (const route of routes) {
    const response = await page.goto(new URL(route, baseURL).href, { waitUntil: "domcontentloaded" });
    await page.locator("main").waitFor({ state: "visible" });
    const pageTitle = await page.title();
    const h1Count = await page.locator("main h1").count();
    const structuralIssues = [];
    if (!response?.ok()) structuralIssues.push(`HTTP ${response?.status() ?? "no response"}`);
    if (!pageTitle.trim()) structuralIssues.push("document title is empty");
    if (h1Count !== 1) structuralIssues.push(`expected one main h1, found ${h1Count}`);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    console.log(`\n[${route}] title="${pageTitle}" axe violations=${results.violations.length}`);
    for (const violation of results.violations) {
      console.log(`- ${violation.impact}: ${violation.id} — ${violation.help} (${violation.nodes.length} nodes)`);
      for (const node of violation.nodes.slice(0, 4)) console.log(`  ${node.target.join(", ")}: ${node.failureSummary?.replace(/\s+/g, " ").slice(0, 220) ?? ""}`);
      if (["critical", "serious"].includes(violation.impact)) failed = true;
    }
    if (structuralIssues.length) {
      console.log(structuralIssues.map((issue) => `- STRUCTURE: ${issue}`).join("\n"));
      failed = true;
    }
  }
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
if (failed) {
  console.error("\nAccessibility smoke audit failed. Fix serious/critical axe findings and structural checks before treating this as a release candidate.");
  process.exitCode = 1;
} else {
  console.log("\nNo serious/critical axe violations or structural failures found. Moderate/minor findings, manual keyboard checks, zoom/reflow and assistive-technology review still require review.");
}
