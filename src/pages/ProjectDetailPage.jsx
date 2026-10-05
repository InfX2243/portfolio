import {PortfolioLayout} from "../components/layout/PortfolioLayout";
import {PageHeader} from "../components/layout/PageHeader";
import {ProjectVisual} from "../components/ProjectVisual";
import {projects} from "../data/portfolio";
import {withBasePath} from "../app/basePath";

function CaseSection({label,title,value,children}) {
  if (!value && !children) return null;
  return <section><p className="eyebrow">{label}</p><h2>{title}</h2>{children || <p>{value}</p>}</section>;
}

function ProjectLinks({links = {}}) {
  const entries = Object.entries(links).filter(([, url]) => typeof url === "string" && /^https?:\/\//.test(url));
  if (!entries.length) return null;
  return (
    <section className="case-resources" aria-labelledby="case-resources-title">
      <p className="eyebrow">Verified resources</p>
      <h2 id="case-resources-title">Inspect the source material</h2>
      <div className="tag-row">
        {entries.map(([label, url]) => (
          <a className="button" key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>
        ))}
      </div>
    </section>
  );
}

export function ProjectDetailPage({slug}) {
  const p = projects.find(x => x.id === slug);

  if (!p) {
    return <PortfolioLayout><section className="section-shell page-section"><PageHeader index="404" eyebrow="Project not found" title="That project is not in the portfolio." intro="No verified project matches this route."/><a className="button" href={withBasePath("/projects")}>Browse projects</a></section></PortfolioLayout>;
  }

  const d = p.caseStudy || {};
  const role = d.role || p.contribution;
  const decisions = d.technicalDecisions || p.approach;
  const result = d.result || p.outcome;
  const evidence = d.evidence || p.evidence;
  const related = projects.filter(x => x.id !== p.id && (x.type === p.type || x.featured)).slice(0, 3);

  return (
    <PortfolioLayout>
      <article className="section-shell page-section case-study">
        <PageHeader index={p.number} eyebrow={p.type} title={p.title} intro={p.description}/>
        {p.award && <div className="case-award">{p.award}</div>}
        <ProjectVisual project={p}/>

        <div className="case-grid">
          <CaseSection label="Context" title="Why it exists" value={d.context}/>
          <CaseSection label="Problem" title="What was being solved" value={d.problem}/>
          <CaseSection label="Contribution" title="What I contributed" value={role}/>
          <CaseSection label="Architecture" title="How the system is structured" value={d.architecture}/>
          <CaseSection label="Technical decisions" title="How it was approached">
            {Array.isArray(decisions) ? <div className="tag-row">{decisions.map(t => <span key={t}>{t}</span>)}</div> : null}
          </CaseSection>
          <CaseSection label="Implementation" title="What was built" value={d.implementation}/>
          <CaseSection label="Challenge" title="What was difficult" value={d.challenge}/>
          <CaseSection label="Trade-offs" title="What was balanced" value={d.tradeoffs}/>
          <CaseSection label="Outcome" title="What happened" value={result}/>
          <CaseSection label="Evidence" title="What can be verified" value={evidence}/>
          <CaseSection label="Learning" title="What I learned" value={d.learning}/>
        </div>

        <ProjectLinks links={p.links}/>

        <div className="case-note">
          <strong>Evidence boundary</strong>
          <p>Architecture, implementation detail, metrics, publication status and external links are shown only when verified source material is available. Missing case-study fields remain intentionally empty rather than inferred.</p>
        </div>

        <section aria-labelledby="related-projects-title">
          <p className="eyebrow">Continue exploring</p>
          <h2 id="related-projects-title">Related work</h2>
          <div className="tag-row">
            {related.map(project => <a className="button" key={project.id} href={withBasePath("/projects/" + project.id)}>{project.title} ↗</a>)}
          </div>
        </section>

        <a className="button" href={withBasePath("/projects")}>← Back to projects</a>
      </article>
    </PortfolioLayout>
  );
}
