export function CredlyBadge({ badge }) {
  if (!badge?.credlyBadgeId) return null;

  const badgeUrl =
    badge.publicUrl ||
    `https://www.credly.com/badges/${badge.credlyBadgeId}/public_url`;
  const embedHost = badge.embedHost || "https://www.credly.com";
  const embedUrl = `${embedHost}/embedded_badge/${badge.credlyBadgeId}`;

  return (
    <article className="credly-badge-item">
      <a
        className="credly-badge-embed"
        href={badgeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={badge.title ? `View ${badge.title} on Credly` : "View this verified digital badge on Credly"}
      >
        <iframe
          src={embedUrl}
          title={badge.title ? `${badge.title} badge` : `Credly badge ${badge.credlyBadgeId}`}
          width={badge.embedWidth || 150}
          height={badge.embedHeight || 270}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
        />
      </a>
      <a className="credly-badge-link" href={badgeUrl} target="_blank" rel="noopener noreferrer">
        View credential <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
