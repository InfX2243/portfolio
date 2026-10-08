import { lazy, Suspense, useEffect, useState } from "react";
import { projects } from "../data/portfolio";

const HomePage = lazy(() => import("../pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage").then(m => ({ default: m.ProjectDetailPage })));
const ResearchPage = lazy(() => import("../pages/ResearchPage").then(m => ({ default: m.ResearchPage })));
const AchievementsPage = lazy(() => import("../pages/AchievementsPage").then(m => ({ default: m.AchievementsPage })));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage").then(m => ({ default: m.ExperiencePage })));
const AboutPage = lazy(() => import("../pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("../pages/ContactPage").then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

function normalizePath(pathname) {
  if (!BASE_PATH) return pathname.replace(/\/+$/, "") || "/";
  const basePrefix = BASE_PATH + "/";
  const withoutBase = pathname === BASE_PATH
    ? "/"
    : pathname.startsWith(basePrefix)
      ? pathname.slice(BASE_PATH.length)
      : pathname;
  return withoutBase.replace(/\/+$/, "") || "/";
}

export function AppRouter() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const sync = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    const metadata = {
      "/": ["Abid Ahmed Shaikh — Systems · AI · Cloud · Research", "Technical portfolio of Abid Ahmed Shaikh: cloud-native software engineering, AI-enabled systems, backend engineering and applied research."],
      "/projects": ["Projects — Abid Ahmed Shaikh", "Selected engineering and research projects, with emphasis on contribution, technical decisions and verifiable evidence."],
      "/research": ["Research — Abid Ahmed Shaikh", "Research work spanning applied AI, systems thinking and evidence-backed technical investigation."],
      "/achievements": ["Achievements — Abid Ahmed Shaikh", "Awards, certifications and public credentials presented as inspectable evidence."],
      "/experience": ["Experience — Abid Ahmed Shaikh", "Verified professional engineering experience and technical focus."],
      "/about": ["About — Abid Ahmed Shaikh", "Background, technical direction, research trajectory and community involvement."],
      "/contact": ["Contact — Abid Ahmed Shaikh", "Professional contact links for engineering, research and collaboration conversations."]
    };
    const project = path.startsWith("/projects/")
      ? projects.find(item => item.id === decodeURIComponent(path.slice("/projects/".length)))
      : null;
    const [title, description] = metadata[path] || (
      path.startsWith("/projects/")
        ? [project ? `${project.title} — Abid Ahmed Shaikh` : "Project — Abid Ahmed Shaikh", "Project case study with verified technical context, contribution and evidence."]
        : ["Not Found — Abid Ahmed Shaikh", "The requested portfolio route does not exist."]
    );

    document.title = title;

    let descriptionTag = document.querySelector("meta[name=description]");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;

    const canonicalPath = path === "/" ? "/" : path;
    const canonicalUrl = window.location.origin + BASE_PATH + canonicalPath;
    const socialTitle = path === "/" ? "Abid Ahmed Shaikh — Systems · AI · Cloud · Research" : title;
    const setMeta = (selector, attribute, value) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const match = selector.match(/=(?:"([^"]+)"|'([^']+)')/);
        tag.setAttribute(attribute, match?.slice(1).find(Boolean) || "");
        document.head.appendChild(tag);
      }
      tag.content = value;
    };

    setMeta('meta[property="og:title"]', "property", socialTitle);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", socialTitle);
    setMeta('meta[name="twitter:description"]', "name", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    window.scrollTo(0, 0);
  }, [path]);

  const page =
    path === "/" ? <HomePage /> :
    path === "/projects" ? <ProjectsPage /> :
    path.startsWith("/projects/") ? <ProjectDetailPage slug={decodeURIComponent(path.slice("/projects/".length))} /> :
    path === "/research" ? <ResearchPage /> :
    path === "/achievements" ? <AchievementsPage /> :
    path === "/experience" ? <ExperiencePage /> :
    path === "/about" ? <AboutPage /> :
    path === "/contact" ? <ContactPage /> :
    <NotFoundPage />;

  return (
    <Suspense fallback={<div className="route-loading section-shell" role="status" aria-live="polite">Loading portfolio section…</div>}>
      {page}
    </Suspense>
  );
}
