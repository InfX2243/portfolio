import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { CertificateCard } from "../components/CertificateCard";
import { withBasePath } from "../app/basePath";
import credentials from "../data/credentials.json";

export function AchievementsPage() {
  const certificates = credentials.certificates || [];
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page credentials-polished">
        <PageHeader index="04" eyebrow="Credentials & recognition" title="Proof, not just claims." intro="A clear record of the team recognition and professional certifications currently documented. Open a credential record for its issuer and available verification details." />
        <section className="polished-recognition" aria-labelledby="recognition-title">
          <div className="polished-recognition-mark" aria-hidden="true">01</div>
          <div>
            <p className="eyebrow">Team recognition · 2025</p>
            <h2 id="recognition-title">Xcelerate Oracle APEX Hackathon</h2>
            <p>First place nationwide, awarded to team ORACLEONAUTS for Ascend APEX.</p>
            <a className="text-link" href={withBasePath("/projects/ascend-apex")}>Explore Ascend APEX <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <div className="polished-credentials-heading">
          <div><p className="eyebrow">Certification record</p><h2>Professional learning, documented.</h2></div>
          <span>{String(certificates.length).padStart(2, "0")} credentials</span>
        </div>
        <div className="polished-certificate-grid">
          {certificates.map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} />)}
        </div>
        <p className="polished-page-footnote">Where an issuer verification URL is not available, the card shows the supplied credential ID and issue date instead. Each certification appears once in this archive.</p>
      </section>
    </PortfolioLayout>
  );
}
