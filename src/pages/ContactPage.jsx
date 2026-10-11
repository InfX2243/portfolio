import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { profile } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

export function ContactPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page contact-polished">
        <PageHeader index="06" eyebrow="Contact" title="Let's make something useful." intro="Have an engineering opportunity, a research question or an idea worth exploring together? The best next step is a direct message." />
        <div className="polished-contact-panel">
          <div><p className="eyebrow">Open a conversation</p><h2>Good work starts with a good question.</h2><p>Reach out through a public profile. You can also review the résumé for a concise record of education, experience and credentials.</p></div>
          <div className="polished-contact-links">
            <a className="polished-contact-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><span>01</span><span><strong>LinkedIn</strong><small>Connect professionally</small></span><span aria-hidden="true">↗</span></a>
            <a className="polished-contact-link" href={profile.links.github} target="_blank" rel="noopener noreferrer"><span>02</span><span><strong>GitHub</strong><small>Explore public work</small></span><span aria-hidden="true">↗</span></a>
            {profile.resume && <a className="polished-contact-link" href={withBasePath(profile.resume)} target="_blank" rel="noopener noreferrer"><span>03</span><span><strong>Résumé</strong><small>Open the PDF document</small></span><span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
