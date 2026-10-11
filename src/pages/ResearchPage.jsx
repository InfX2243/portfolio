import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { withBasePath } from "../app/basePath";
import { research } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

export function ResearchPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page research-polished">
        <PageHeader index="02" eyebrow="Research" title="Curiosity, made concrete." intro="Research-oriented projects that reflect an interest in applied AI, systems thinking and turning practical questions into something that can be investigated." />
        <div className="polished-page-meta"><span>{String(research.length).padStart(2, "0")} projects</span><span>Only confirmed details are presented as facts</span></div>
        <div className="polished-research-grid">
          {research.map((item, index) => (
            <article className="polished-research-card" key={item.id}>
              <div className="polished-research-visual"><img src={withBasePath(item.visual)} alt={item.visualAlt || item.title + " research visual"} loading="lazy" /></div>
              <div className="polished-research-copy">
                <p className="eyebrow">{item.context}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="polished-research-footer">
                  <span>{item.signal}</span>
                  <a className="text-link" href={withBasePath("/projects/" + item.id)}>View project details <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="polished-research-note" aria-labelledby="research-principle-title">
          <span className="eyebrow">Working principle</span>
          <h2 id="research-principle-title">Be precise about what the evidence says.</h2>
          <p>Publication, award and outcome claims belong here only when they can be supported by a reliable source. Project details can grow as that evidence becomes available.</p>
        </aside>
      </section>
    </PortfolioLayout>
  );
}
