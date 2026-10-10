import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

const PLACEHOLDER_COPY = /pending verification|requires an authoritative public source|engineering project \/ technical exploration|detailed metrics are intentionally omitted until verified|project exists in the portfolio source/i;

function hasSpecificContent(value) {
  return typeof value === "string" && value.trim().length > 0 && !PLACEHOLDER_COPY.test(value);
}

function CaseSection({ label, title, value, children }) {
  if (!hasSpecificContent(value) && !children) return null;

  return (
    <section className="case-study-section">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children || <p>{value}</p>}
    </section>
  );
}

function ProjectLinks({ links = {} }) {
  const entries = Object.entries(links).filter(
    ([, url]) => typeof url === "string" && /^https?:\/\//.test(url),
  );

  if (!entries.length) return null;

  return (
    <section className="case-study-resources" aria-labelledby="case-resources-title">
      <p className="eyebrow">Verified resources</p>
      <h2 id="case-resources-title">Inspect the source material.</h2>
      <div className="case-study-links">
        {entries.map(([label, url]) => (
          <a className="text-link" key={label} href={url} target="_blank" rel="noopener noreferrer">
            {label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export function ProjectDetailPage({ slug }) {
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return (
      <PortfolioLayout>
        <section className="section-shell page-section">
          <PageHeader
            index="404"
            eyebrow="Project not found"
            title="That project is not in the portfolio."
            intro="No verified project matches this route."
          />
          <a className="text-link" href={withBasePath("/projects")}>Browse projects ↗</a>
        </section>
      </PortfolioLayout>
    );
  }

  const study = project.caseStudy || {};
  const contribution = hasSpecificContent(study.role) ? study.role : null;
  const decisions = Array.isArray(study.technicalDecisions) && study.technicalDecisions.length
    ? study.technicalDecisions
    : null;
  const rawOutcome = hasSpecificContent(study.result)
    ? study.result
    : hasSpecificContent(project.outcome)
      ? project.outcome
      : null;
  const outcome = rawOutcome && rawOutcome !== project.award ? rawOutcome : null;
  const evidence = hasSpecificContent(study.evidence)
    ? study.evidence
    : hasSpecificContent(project.evidence)
      ? project.evidence
      : null;

  const related = projects
    .filter((item) => item.id !== project.id && (item.type === project.type || item.featured))
    .slice(0, 3);

  return (
    <PortfolioLayout>
      <article className="section-shell page-section project-case-editorial">
        <PageHeader
          index={project.number}
          eyebrow={project.type}
          title={project.title}
          intro={project.description}
        />

        {project.award && (
          <div className="case-study-recognition">
            <span className="eyebrow">Recognition</span>
            <strong>{project.award}</strong>
          </div>
        )}

        <ProjectVisual project={project} />

        <div className={contribution ? "case-study-intro" : "case-study-intro case-study-intro-single"}>
          {contribution && <div>
            <p className="eyebrow">Contribution</p>
            <p>{contribution}</p>
          </div>}
          <div>
            <p className="eyebrow">Technical focus</p>
            <div className="plain-tags">
              {project.approach.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>

        <div className="case-study-archive">
          <CaseSection label="Context" title="Why it exists." value={study.context} />
          <CaseSection label="Problem" title="What was being solved." value={study.problem} />
          <CaseSection label="Architecture" title="How the system is structured." value={study.architecture} />
          <CaseSection label="Technical decisions" title="How it was approached.">
            {Array.isArray(decisions) ? (
              <div className="plain-tags">
                {decisions.map((item) => <span key={item}>{item}</span>)}
              </div>
            ) : null}
          </CaseSection>
          <CaseSection label="Implementation" title="What was built." value={study.implementation} />
          <CaseSection label="Challenge" title="What was difficult." value={study.challenge} />
          <CaseSection label="Trade-offs" title="What was balanced." value={study.tradeoffs} />
          <CaseSection label="Outcome" title="What happened." value={outcome} />
          <CaseSection label="Evidence" title="What can be verified." value={evidence} />
          <CaseSection label="Learning" title="What I learned." value={study.learning} />
        </div>

        <ProjectLinks links={project.links} />

        <section className="related-work" aria-labelledby="related-work-title">
          <p className="eyebrow">Continue exploring</p>
          <h2 id="related-work-title">Related work.</h2>
          <div className="related-work-list">
            {related.map((item) => (
              <a className="text-link" key={item.id} href={withBasePath("/projects/" + item.id)}>
                {item.title} ↗
              </a>
            ))}
          </div>
        </section>

        <a className="text-link" href={withBasePath("/projects")}>← Back to all projects</a>
      </article>
    </PortfolioLayout>
  );
}
