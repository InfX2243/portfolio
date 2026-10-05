import { useEffect } from "react";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ResearchPage } from "../pages/ResearchPage";
import { AchievementsPage } from "../pages/AchievementsPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const BASE_PATH = "/portfolio";

function normalizePath(pathname) {
  const withoutBase = pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname;
  const path = withoutBase.replace(/\/+$/, "");
  return path || "/";
}

export function AppRouter() {
  const path = normalizePath(window.location.pathname);

  useEffect(() => {
    const titles = {
      "/": "Abid Ahmed Shaikh — Systems · AI · Cloud · Research",
      "/projects": "Projects — Abid Ahmed Shaikh",
      "/research": "Research — Abid Ahmed Shaikh",
      "/achievements": "Achievements — Abid Ahmed Shaikh",
      "/experience": "Experience — Abid Ahmed Shaikh",
      "/about": "About — Abid Ahmed Shaikh",
      "/contact": "Contact — Abid Ahmed Shaikh",
    };
    const isProject = path.startsWith("/projects/");
    document.title = titles[path] || (isProject ? "Project — Abid Ahmed Shaikh" : "Not Found — Abid Ahmed Shaikh");
    window.scrollTo(0, 0);
  }, [path]);

  if (path === "/") return <HomePage />;
  if (path === "/projects") return <ProjectsPage />;
  if (path.startsWith("/projects/")) return <ProjectDetailPage slug={decodeURIComponent(path.slice("/projects/".length))} />;
  if (path === "/research") return <ResearchPage />;
  if (path === "/achievements") return <AchievementsPage />;
  if (path === "/experience") return <ExperiencePage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/contact") return <ContactPage />;
  return <NotFoundPage />;
}
