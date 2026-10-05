export function CertificateCard({ certificate }) {
  const hasAsset = Boolean(certificate?.asset);
  const hasUrl = Boolean(certificate?.certificateUrl);
  return (
    <article className="credential-visual-card certificate-card">
      <div className="certificate-preview">
        {hasAsset ? <img src={certificate.asset} alt={`${certificate.title || "Certificate"} certificate preview`} loading="lazy" /> :
          <div className="certificate-placeholder"><span>01</span><strong>{certificate.issuer || "Certificate"}</strong><small>Certificate preview pending</small></div>}
      </div>
      <div className="certificate-meta">
        <span className="credential-issuer">{certificate.issuer || "Issuer pending"}</span>
        <h3>{certificate.title}</h3>
        {certificate.issuedOn && <p>{certificate.issuedOn}</p>}
        {hasUrl ? <a className="text-link" href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">Verify certificate ↗</a> : <small>Credential ID, date and verification URL pending.</small>}
      </div>
    </article>
  );
}
