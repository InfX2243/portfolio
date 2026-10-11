import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { profile, domains, leadership, stack } from "../data/portfolio";

export function AboutPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section">
        <PageHeader
          index="01"
          eyebrow="About"
          title="An engineer with a research trajectory."
          intro={profile.summary}
        />

        <div className="about-grid">
          <div className="about-statement">
            <p>{profile.education}</p>
            <p>
              The current direction sits between practical software engineering
              and the questions that make systems worth studying: cloud
              infrastructure, backend systems, AI-enabled applications and
              applied research.
            </p>
            <p>The goal is not to collect technologies. It is to build, investigate, explain and repeat.</p>
            <blockquote className="about-philosophy">
              <p>“Never stop learning, because life never stops teaching.”</p>
              <cite>— A personal principle</cite>
            </blockquote>
          </div>

          <div className="signal-list">
            <div>
              <span>POSITIONING</span>
              <strong>Early-career software engineer building cloud-native, AI-enabled and backend systems.</strong>
            </div>
            <div>
              <span>TECHNICAL DIRECTION</span>
              <strong>Cloud · AI · Backend · Interactive systems · Research</strong>
            </div>
          </div>
        </div>

        <h2 className="subsection-title">Technical domains</h2>
        <div className="domain-grid">
          {domains.map((domain) => (
            <div className="domain" key={domain.title}>
              <span>{domain.label}</span>
              <h2>{domain.title}</h2>
              <p>{domain.body}</p>
            </div>
          ))}
        </div>

        <h2 className="subsection-title">Community</h2>
        <div className="credential-list">
          {leadership.map(([name, role], index) => (
            <div key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              <small>{role}</small>
            </div>
          ))}
        </div>

        <h2 className="subsection-title">Working vocabulary</h2>
        <div className="stack-line">
          <span>Stack</span>
          <div>
            {stack.map((technology) => <b key={technology}>{technology}</b>)}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
