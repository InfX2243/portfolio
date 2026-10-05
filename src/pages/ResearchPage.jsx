import {PortfolioLayout} from "../components/layout/PortfolioLayout";
import {PageHeader} from "../components/layout/PageHeader";
import {ResearchVisual} from "../components/ResearchVisual";
import {research} from "../data/portfolio";

function ResearchDetail({label, title, value}) {
  if (!value) return null;
  return (
    <section className="research-detail">
      <p className="eyebrow">{label}</p>
      <h3>{title}</h3>
      <p>{value}</p>
    </section>
  );
}

export function ResearchPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section">
        <PageHeader
          index="01"
          eyebrow="Research"
          title="Questions, systems, evidence."
          intro="Research work is separated from project marketing so recognition, context and verified evidence remain legible."
        />

        <div className="research-grid">
          {research.map(item => (
            <article className="research-card" key={item.id}>
              <div className="research-card-top">
                <span>{item.index}</span>
                <span>{item.signal}</span>
              </div>
              <h2>{item.title}</h2>
              <p className="research-context">{item.context} · {item.recognition}</p>
              <p>{item.description}</p>

              <ResearchVisual research={item} />

              <div className="research-details">
                <ResearchDetail label="Research question / problem" title="What was investigated" value={item.problem} />
                <ResearchDetail label="Methodology" title="How it was approached" value={item.methodology} />
                <ResearchDetail label="Contribution" title="What I contributed" value={item.contribution} />
                <ResearchDetail label="Result" title="What was learned" value={item.result} />
              </div>

              <div className="research-evidence">
                <span>Evidence</span>
                <small>{item.evidence}</small>
              </div>

              {item.links && Object.keys(item.links).length > 0 && (
                <div className="tag-row">
                  {Object.entries(item.links)
                    .filter(([, url]) => typeof url === "string" && /^https?:\/\//.test(url))
                    .map(([label, url]) => (
                      <a className="button" key={label} href={url} target="_blank" rel="noreferrer">
                        {label} ↗
                      </a>
                    ))}
                </div>
              )}
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
