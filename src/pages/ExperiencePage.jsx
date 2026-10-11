import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { experience } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

export function ExperiencePage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page experience-polished">
        <PageHeader index="03" eyebrow="Experience" title="Where the work meets the real world." intro="A focused view of professional experience, the engineering areas involved and the context in which the work happens." />
        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article className="experience-timeline-card" key={item.org}>
              <div className="experience-timeline-rail"><span>{String(index + 1).padStart(2, "0")}</span><span className="experience-timeline-line" /></div>
              <div className="experience-timeline-main">
                <div className="experience-timeline-heading">
                  <div>
                    <p className="eyebrow">{item.period}</p>
                    <h2>{item.role}</h2>
                    <p className="experience-company">{item.org}</p>
                  </div>
                  {item.logo && <img className="experience-company-logo" src={withBasePath(item.logo)} alt={item.org + " logo"} loading="lazy" />}
                </div>
                <p className="experience-timeline-note">{item.note}</p>
                <h3>Areas of focus</h3>
                <ul className="polished-focus-list">{item.focus.map((focus) => <li key={focus}>{focus}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className="polished-page-footnote">Responsibilities and outcomes are intentionally limited to the information currently verified for this portfolio.</p>
      </section>
    </PortfolioLayout>
  );
}
