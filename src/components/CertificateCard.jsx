import { withBasePath } from "../app/basePath";

function issuerMark(issuer) {
  if (issuer === "AWS") return "/assets/issuers/Amazon_Web_Services_Logo.svg";
  if (issuer === "Oracle") return "/assets/issuers/Oracle-Logo-1.png";
  return null;
}

export function CertificateCard({ certificate }) {
  const hasAsset = Boolean(certificate?.asset);
  const hasUrl = typeof certificate?.certificateUrl === "string" && /^https?:\/\//.test(certificate.certificateUrl);
  const mark = issuerMark(certificate?.issuer);

  return (
    <article className="credential-visual-card certificate-card">
      <div className="certificate-preview">
        {hasAsset ? (
          <img src={withBasePath(certificate.asset)} alt={`${certificate.title || "Certificate"} certificate preview`} loading="lazy" />
        ) : (
          <div className="certificate-placeholder">
            {mark && <img className="certificate-issuer-mark" src={withBasePath(mark)} alt="" loading="lazy" />}
            <strong>{certificate.issuer || "Professional certification"}</strong>
            <small>Credential record</small>
          </div>
        )}
      </div>
      <div className="certificate-meta">
        <span className="credential-issuer">{certificate.issuer || "Issuer pending"}</span>
        <h3>{certificate.title}</h3>
        {certificate.issuedOn && <p>{certificate.issuedOn}</p>}
        {hasUrl ? <a className="text-link" href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">Verify certificate ↗</a> : <small>{certificate.credentialId ? `Credential ID: ${certificate.credentialId}` : "Credential ID not supplied."}{certificate.issuedOn ? ` · Issued ${certificate.issuedOn}` : ""}</small>}
      </div>
    </article>
  );
}
