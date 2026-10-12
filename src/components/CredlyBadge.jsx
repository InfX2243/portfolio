export function CredlyBadge({ badge }) {
  if (!badge?.credlyBadgeId) return null;

  const badgeUrl =
    badge.publicUrl ||
    `https://www.credly.com/badges/${badge.credlyBadgeId}/public_url`;
  const embedHost = badge.embedHost || "https://www.credly.com";
  const embedUrl = `${embedHost}/embedded_badge/${badge.credlyBadgeId}`;

  return (
    <article className="credly-badge-item">
      <div className="credly-badge-embed">
        <iframe
          src={embedUrl}
          title={badge.title ? `${badge.title} badge` : `Credly badge ${badge.credlyBadgeId}`}
          width={badge.embedWidth || 150}
          height={badge.embedHeight || 270}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <a className="credly-badge-link" href={badgeUrl} target="_blank" rel="noopener noreferrer">
        View credential <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
