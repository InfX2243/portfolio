import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

function ProjectArchiveRow({ project }) {
  return (
    <article className="project-archive-entry">
      <div className="project-archive-index">
        <span>{project.number}</span>
        <span>{project.type}</span>
      </div>

      <div className="project-archive-copy">
        <div className="project-archive-title">
          <h2>{project.title}</h2>
          {project.award && <p>{project.award}</p>}
        </div>

        <p className="project-archive-description">{project.description}</p>

        <div className="project-archive-meta">
          <div className="plain-tags" aria-label={project.title + " technologies and focus"}>
            {project.approach.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a className="text-link" href={withBasePath("/projects/" + project.id)} aria-label={"Inspect " + project.title + " case study"}>
            Inspect case study ↗
          </a>
        </div>
      </div>

      <ProjectVisual project={project} />
    </article>
  );
}

export function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <PortfolioLayout>
      <section className="section-shell page-section projects-page-editorial">
        <PageHeader
          index="01"
          eyebrow="Projects"
          title="Work worth inspecting."
          intro="A selected archive of engineering and research work, ordered by evidence, context and technical signal rather than visual novelty."
        />

        <section aria-labelledby="featured-projects-title">
          <div className="archive-section-heading">
            <p className="eyebrow">Featured work</p>
            <h2 id="featured-projects-title">The projects that define the current direction.</h2>
          </div>
          <div className="project-archive-list">
            {featured.map((project) => <ProjectArchiveRow key={project.id} project={project} />)}
          </div>
        </section>

        {secondary.length > 0 && (
          <section className="secondary-projects" aria-labelledby="secondary-projects-title">
            <div className="archive-section-heading">
              <p className="eyebrow">Other work</p>
              <h2 id="secondary-projects-title">Supporting engineering explorations.</h2>
            </div>
            <div className="secondary-project-list">
              {secondary.map((project) => (
                <article key={project.id} className="secondary-project-entry">
                  <span className="secondary-project-number">{project.number}</span>
                  <div>
                    <p className="eyebrow">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="plain-tags">
                      {project.approach.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <a className="text-link" href={withBasePath("/projects/" + project.id)} aria-label={"Inspect " + project.title + " project"}>
                    Inspect ↗
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </PortfolioLayout>
  );
}
