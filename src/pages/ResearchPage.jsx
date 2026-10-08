import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { ResearchVisual } from "../components/ResearchVisual";
import { research } from "../data/portfolio";

function ResearchDetail({ label, title, value }) {
  if (!value) return null;
  return (
    <section className="research-archive-detail">
      <p className="eyebrow">{label}</p>
      <h3>{title}</h3>
      <p>{value}</p>
    </section>
  );
}

function ResearchLinks({ links }) {
  const verified = Object.entries(links || {}).filter(
    ([, url]) => typeof url === "string" && /^https?:\/\//.test(url)
  );
  if (!verified.length) return null;

  return (
    <div className="research-archive-links">
      {verified.map(([label, url]) => (
        <a className="text-link" key={label} href={url} target="_blank" rel="noopener noreferrer">
          {label} ↗
        </a>
      ))}
    </div>
  );
}

export function ResearchPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section research-page-editorial">
        <PageHeader
          index="01"
          eyebrow="Research"
          title="Questions, systems, evidence."
          intro="Research is presented as an evidence archive: what was investigated, what is verified, and what still needs a public source."
        />

        <div className="research-archive-list">
          {research.map((item, index) => (
            <article className="research-archive-entry" key={item.id}>
              <div className="research-archive-index">
                <span>{item.index || String(index + 1).padStart(2, "0")}</span>
                <span>{item.signal}</span>
              </div>

              <div className="research-archive-content">
                <div className="research-archive-heading">
                  <div>
                    <p className="eyebrow">{item.context}</p>
                    <h2>{item.title}</h2>
                  </div>
                  {item.recognition && <p className="research-archive-recognition">{item.recognition}</p>}
                </div>

                <p className="research-archive-description">{item.description}</p>

                <ResearchVisual research={item} />

                <div className="research-archive-details">
                  <ResearchDetail label="Research question / problem" title="What was investigated" value={item.problem} />
                  <ResearchDetail label="Methodology" title="How it was approached" value={item.methodology} />
                  <ResearchDetail label="Contribution" title="What I contributed" value={item.contribution} />
                  <ResearchDetail label="Result" title="What was learned" value={item.result} />
                </div>

                <div className="research-archive-evidence">
                  <span className="eyebrow">Evidence boundary</span>
                  <p>{item.evidence}</p>
                </div>

                <ResearchLinks links={item.links} />
              </div>
            </article>
          ))}
        </div>

        <div className="research-method">
          <span className="eyebrow">Research method</span>
          <p>Formulate a problem → build something testable → interrogate the result → communicate what was learned.</p>
        </div>
      </section>
    </PortfolioLayout>
  );
}
