import { lazy, Suspense, useEffect, useState } from "react";
import { getRouteMetadata } from "../data/routes";
import { BASE_PATH, normalizePath } from "./basePath";

const HomePage = lazy(() => import("../pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage").then(m => ({ default: m.ProjectDetailPage })));
const ResearchPage = lazy(() => import("../pages/ResearchPage").then(m => ({ default: m.ResearchPage })));
const AchievementsPage = lazy(() => import("../pages/AchievementsPage").then(m => ({ default: m.AchievementsPage })));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage").then(m => ({ default: m.ExperiencePage })));
const AboutPage = lazy(() => import("../pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("../pages/ContactPage").then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));


export function AppRouter() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const sync = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    const { title, description } = getRouteMetadata(path);

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
