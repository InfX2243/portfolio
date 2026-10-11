export function CredlyBadge({ badge }) {
  if (!badge?.credlyBadgeId) return null;

  const badgeUrl =
    badge.publicUrl ||
    `https://www.credly.com/badges/${badge.credlyBadgeId}/public_url`;
  const embedUrl = `https://www.credly.com/embedded_badge/${badge.credlyBadgeId}`;
  const width = badge.embedWidth || 150;
  const height = badge.embedHeight || 270;

  return (
    <article className="credential-visual-card credly-card">
      <div className="credential-visual-top">
        <span>Credly badge</span>
        <span>Credly-hosted</span>
      </div>

      <div className="credly-embed">
        <iframe
          src={embedUrl}
          title={badge.title ? `${badge.title} badge` : `Credly badge ${badge.credlyBadgeId}`}
          width={width}
          height={height}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="credential-fallback">
        <span>{badge.title || "Credential details on Credly"}</span>
        <small>Badge artwork and verification details are hosted by Credly.</small>
        <a
          className="text-link"
          href={badgeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open badge on Credly ↗
        </a>
      </div>
    </article>
  );
}
