import { lazy, Suspense, useEffect, useState } from "react";
const HomePage = lazy(() => import("../pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage").then(m => ({ default: m.ProjectDetailPage })));
const ResearchPage = lazy(() => import("../pages/ResearchPage").then(m => ({ default: m.ResearchPage })));
const AchievementsPage = lazy(() => import("../pages/AchievementsPage").then(m => ({ default: m.AchievementsPage })));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage").then(m => ({ default: m.ExperiencePage })));
const AboutPage = lazy(() => import("../pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("../pages/ContactPage").then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

const BASE_PATH = "/portfolio";
function normalizePath(pathname) {
  const withoutBase = pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname;
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
    const titles = {"/":"Abid Ahmed Shaikh — Systems · AI · Cloud · Research","/projects":"Projects — Abid Ahmed Shaikh","/research":"Research — Abid Ahmed Shaikh","/achievements":"Achievements — Abid Ahmed Shaikh","/experience":"Experience — Abid Ahmed Shaikh","/about":"About — Abid Ahmed Shaikh","/contact":"Contact — Abid Ahmed Shaikh"};
    document.title = titles[path] || (path.startsWith("/projects/") ? "Project — Abid Ahmed Shaikh" : "Not Found — Abid Ahmed Shaikh");
    window.scrollTo(0,0);
  }, [path]);
  const page = path === "/" ? <HomePage /> : path === "/projects" ? <ProjectsPage /> : path.startsWith("/projects/") ? <ProjectDetailPage slug={decodeURIComponent(path.slice("/projects/".length))} /> : path === "/research" ? <ResearchPage /> : path === "/achievements" ? <AchievementsPage /> : path === "/experience" ? <ExperiencePage /> : path === "/about" ? <AboutPage /> : path === "/contact" ? <ContactPage /> : <NotFoundPage />;
  return <Suspense fallback={<div className="route-loading section-shell" role="status" aria-live="polite">Loading portfolio section…</div>}>{page}</Suspense>;
}