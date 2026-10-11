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
          <div><p className="eyebrow">Open a conversation</p><h2>Good work starts with a good question.</h2><p>Reach out directly by email or phone, or connect through a professional profile. You can also review the résumé for a concise record of education, experience and credentials.</p></div>
          <div className="polished-contact-links">
            <a className="polished-contact-link" href={`mailto:${profile.contact.email}`}><span>01</span><span><strong>Email</strong><small>{profile.contact.email}</small></span><span aria-hidden="true">↗</span></a>
            <a className="polished-contact-link" href={`tel:${profile.contact.phoneDial}`}><span>02</span><span><strong>Mobile</strong><small>{profile.contact.phoneDisplay}</small></span><span aria-hidden="true">↗</span></a>
            <a className="polished-contact-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><span>03</span><span><strong>LinkedIn</strong><small>Connect professionally</small></span><span aria-hidden="true">↗</span></a>
            <a className="polished-contact-link" href={profile.links.github} target="_blank" rel="noopener noreferrer"><span>04</span><span><strong>GitHub</strong><small>Explore public work</small></span><span aria-hidden="true">↗</span></a>
            {profile.resume && <a className="polished-contact-link" href={withBasePath(profile.resume)} target="_blank" rel="noopener noreferrer"><span>05</span><span><strong>Résumé</strong><small>Open the PDF document</small></span><span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
