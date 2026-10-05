import { useEffect } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

export function CredlyBadge({ badge }) {
  useEffect(() => {
    if (!badge?.credlyBadgeId || document.getElementById(CREDLY_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.src = CREDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [badge?.credlyBadgeId]);

  if (!badge?.credlyBadgeId) return null;
  return (
    <article className="credential-visual-card credly-card">
      <div className="credential-visual-top"><span>Credly badge</span><span>Official embed</span></div>
      <div className="credly-embed" aria-label={badge.title || "Credly credential"}>
        <div data-iframe-width={badge.embedWidth || 150} data-iframe-height={badge.embedHeight || 270}
          data-share-badge-id={badge.credlyBadgeId} data-share-badge-host={badge.embedHost || "https://www.credly.com"} />
      </div>
      <div className="credential-fallback"><span>{badge.title || "Credential metadata pending"}</span><small>Badge title and issuer will be shown after verification.</small></div>
    </article>
  );
}
