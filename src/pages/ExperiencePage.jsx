import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { experience } from "../data/portfolio";

export function ExperiencePage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section experience-page-editorial">
        <PageHeader
          index="01"
          eyebrow="Experience"
          title="Professional engineering context."
          intro="A concise record of verified professional experience, with responsibilities and outcomes kept within the evidence available."
        />

        <div className="experience-archive">
          {experience.map((item) => (
            <article className="experience-entry" key={item.org}>
              <div className="experience-entry-meta">
                <span>{item.period}</span>
                <span>01</span>
              </div>

              <div className="experience-entry-content">
                <p className="eyebrow">{item.org}</p>
                <h2>{item.role}</h2>
                <p className="experience-entry-note">{item.note}</p>

                <div className="experience-entry-focus">
                  <p className="eyebrow">Focus areas</p>
                  <ul>
                    {item.focus.map((focus) => (
                      <li key={focus}>{focus}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="experience-boundary">
          <p className="eyebrow">Evidence boundary</p>
          <p>
            Detailed responsibilities, internal project names, measurable outcomes and
            technology ownership will be added only when verified source information is available.
          </p>
        </aside>
      </section>
    </PortfolioLayout>
  );
}
