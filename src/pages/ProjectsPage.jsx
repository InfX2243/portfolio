import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

function ProjectCard({ project }) {
  return (
    <article className="polished-project-card">
      <div className="polished-project-art"><ProjectVisual project={project} /></div>
      <div className="polished-project-body">
        <div className="polished-project-kicker"><span>{project.number} / {project.type}</span>{project.award && <span className="polished-award">Award-winning team project</span>}</div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.award && <p className="polished-project-award">{project.award}</p>}
        <ul className="polished-tags" aria-label={project.title + " technical focus"}>
          {project.approach.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <a className="text-link" href={withBasePath("/projects/" + project.id)}>Explore case study <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.award)) - Number(Boolean(a.award)));
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page projects-polished">
        <PageHeader index="01" eyebrow="Selected work" title="Built to solve something." intro="A project archive spanning applied engineering, cloud platforms and research-oriented builds. Each card gives the essentials; open a case study for the available screenshots and technical context." />
        <div className="polished-page-meta"><span>{String(orderedProjects.length).padStart(2, "0")} projects</span><span>Sorted by verified recognition, then project order</span></div>
        <div className="polished-project-grid">
          {orderedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
    </PortfolioLayout>
  );
}
