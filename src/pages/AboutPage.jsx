import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { domains, leadership } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

export function AboutPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page about-polished">
        <PageHeader index="05" eyebrow="Beyond the headline" title="How I approach engineering." intro="I enjoy the part of engineering where learning becomes useful: asking a better question, making a system work, understanding its trade-offs and improving the result. I care about craft, clarity and staying curious when the first answer is not the right one." />
        <section className="about-principles" aria-label="Engineering principles">
          <article><span>01</span><h2>Build to understand.</h2><p>Hands-on work is how I test ideas, expose assumptions and learn where a design holds up.</p></article>
          <article><span>02</span><h2>Keep the evidence honest.</h2><p>Separate what is implemented, what is understood and what still needs verification.</p></article>
          <article><span>03</span><h2>Keep learning in public.</h2><p>Share work clearly, learn with other builders and turn useful feedback into the next iteration.</p></article>
        </section>
        <section className="about-domain-section" aria-labelledby="about-domains-title">
          <div className="polished-section-heading"><div><p className="eyebrow">Technical direction</p><h2 id="about-domains-title">Areas I keep exploring.</h2></div><p>These are connected interests, not a claim of equal expertise in every tool.</p></div>
          <div className="polished-domain-grid">
            {domains.map((domain) => <article className="polished-domain-card" key={domain.title}><span>{domain.label}</span><h3>{domain.title}</h3><p>{domain.body}</p></article>)}
          </div>
        </section>
        <section className="about-community-section" aria-labelledby="about-community-title">
          <div className="polished-section-heading"><div><p className="eyebrow">Community</p><h2 id="about-community-title">Learning with other people.</h2></div></div>
          <div className="polished-community-list">
            {leadership.map(([name, role]) => <article key={name}><img src={withBasePath(name.startsWith("AWS") ? "/assets/community/awssbgmhssce.png" : "/assets/community/acm.png")} alt="" loading="lazy" /><div><h3>{name}</h3><p>{role}</p></div></article>)}
          </div>
        </section>
      </section>
    </PortfolioLayout>
  );
}
