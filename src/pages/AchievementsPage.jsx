import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { CredlyBadge } from "../components/CredlyBadge";
import { CertificateCard } from "../components/CertificateCard";
import { certifications } from "../data/portfolio";
import credentials from "../data/credentials.json";

function AwardRow({ label, title, description }) {
  return (
    <article className="achievement-row">
      <span className="achievement-row-label">{label}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function AchievementsPage() {
  const badges = credentials.badges || [];
  const certificates = credentials.certificates || [];

  return (
    <PortfolioLayout>
      <section className="section-shell page-section achievements-page-editorial">
        <PageHeader
          index="01"
          eyebrow="Achievements"
          title="Evidence you can inspect."
          intro="Awards, certifications and credentials are separated by evidence type so recognition is clear without turning the page into a badge wall."
        />

        <section className="achievement-archive">
          <div className="archive-section-heading">
            <p className="eyebrow">Recognition</p>
            <h2>Selected achievements</h2>
          </div>
          <div className="achievement-list">
            <AwardRow
              label="Research recognition"
              title="Cognitrace"
              description="Publication and award metadata remains withheld until an authoritative public source is available."
            />
            <AwardRow
              label="Hackathon"
              title="1st Place Nationwide · Xcelerate 2025 Oracle APEX Hackathon"
              description="Publicly corroborated recognition associated with Ascend APEX and the ORACLEONAUTS team."
            />
          </div>
        </section>

        <section className="achievement-archive">
          <div className="archive-section-heading">
            <p className="eyebrow">Credentials</p>
            <h2>Selected certifications</h2>
          </div>
          <div className="certificate-grid">
            {certificates.filter((certificate) => certificate.featured).map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </section>

        <section className="achievement-archive">
          <div className="archive-section-heading">
            <p className="eyebrow">Credly</p>
            <h2>Verified badge embeds</h2>
          </div>
          <div className="credly-badge-grid">
            {badges.map((badge) => <CredlyBadge key={badge.id} badge={badge} />)}
          </div>
        </section>

        <section className="achievement-archive">
          <div className="archive-section-heading">
            <p className="eyebrow">Inventory</p>
            <h2>Credential record</h2>
          </div>
          <div className="credential-list">
            {certifications.map((certificate, index) => (
              <div key={certificate}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{certificate}</strong>
              </div>
            ))}
          </div>
        </section>

        <div className="achievement-boundary">
          <span className="eyebrow">Evidence boundary</span>
          <p>Credential titles, issuers, dates and IDs are shown only from repository-verified metadata. Public verification URLs and award/publication details remain hidden until directly verified.</p>
        </div>
      </section>
    </PortfolioLayout>
  );
}
