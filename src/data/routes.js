import { projects } from "./portfolio.js";

const pageMetadata = {
  "/": {
    title: "Abid Ahmed Shaikh — Systems · AI · Cloud · Research",
    description:
      "Technical portfolio of Abid Ahmed Shaikh: cloud-native software engineering, AI-enabled systems, backend engineering and applied research.",
  },
  "/projects": {
    title: "Projects — Abid Ahmed Shaikh",
    description:
      "Selected engineering and research projects, with emphasis on contribution, technical decisions and verifiable evidence.",
  },
  "/research": {
    title: "Research — Abid Ahmed Shaikh",
    description:
      "Research work spanning applied AI, systems thinking and evidence-backed technical investigation.",
  },
  "/achievements": {
    title: "Achievements — Abid Ahmed Shaikh",
    description:
      "Awards, certifications and public credentials presented as inspectable evidence.",
  },
  "/experience": {
    title: "Experience — Abid Ahmed Shaikh",
    description:
      "Verified professional engineering experience and technical focus.",
  },
  "/about": {
    title: "About — Abid Ahmed Shaikh",
    description:
      "Background, technical direction, research trajectory and community involvement.",
  },
  "/contact": {
    title: "Contact — Abid Ahmed Shaikh",
    description:
      "Professional contact links for engineering, research and collaboration conversations.",
  },
};

export const publicRoutes = [
  "/",
  "/projects",
  ...projects.map((project) => `/projects/${project.id}`),
  "/research",
  "/achievements",
  "/experience",
  "/about",
  "/contact",
];

export function getRouteMetadata(path) {
  if (pageMetadata[path]) return pageMetadata[path];

  if (path.startsWith("/projects/")) {
    const project = projects.find(
      (item) => item.id === decodeURIComponent(path.slice("/projects/".length)),
    );

    return {
      title: project ? `${project.title} — Abid Ahmed Shaikh` : "Project — Abid Ahmed Shaikh",
      description:
        project?.description ||
        "Project case study with verified technical context, contribution and evidence.",
    };
  }

  return {
    title: "Not Found — Abid Ahmed Shaikh",
    description: "The requested portfolio route does not exist.",
  };
}
