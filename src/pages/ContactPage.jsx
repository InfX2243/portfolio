import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { profile } from "../data/portfolio";
import { withBasePath } from "../app/basePath";

export function ContactPage() {
  return (
    <PortfolioLayout>
      <section className="section-shell page-section contact-page">
        <PageHeader
          index="01"
          eyebrow="Contact"
          title="Start a technical conversation."
          intro="For engineering opportunities, research communities and collaborations, connect through one of the public profiles below."
        />

        <div className="contact-grid">
          <a
            className="contact-card"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Abid Ahmed Shaikh on LinkedIn"
          >
            <span>01 / LinkedIn</span>
            <strong>Connect professionally ↗</strong>
          </a>
          {profile.resume && <a className="contact-card contact-resume-card" href={withBasePath(profile.resume)} target="_blank" rel="noopener noreferrer" aria-label="Open Abid Ahmed Shaikh résumé PDF"><span>03 / Résumé</span><strong>View current résumé ↗</strong></a>}
          <a
            className="contact-card"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Abid Ahmed Shaikh on GitHub"
          >
            <span>02 / GitHub</span>
            <strong>Inspect the code ↗</strong>
          </a>
        </div>
      </section>
    </PortfolioLayout>
  );
}
