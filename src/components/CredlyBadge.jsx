import { useEffect, useState } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

export function CredlyBadge({ badge }) {
  const [embedState, setEmbedState] = useState("loading");

  useEffect(() => {
    if (!badge?.credlyBadgeId) return undefined;

    const existing = document.getElementById(CREDLY_SCRIPT_ID);
    if (existing) {
      setEmbedState(existing.dataset.credlyState || "loading");
      return undefined;
    }

    const script = document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.src = CREDLY_SCRIPT_SRC;
    script.async = true;
    script.dataset.credlyState = "loading";

    const handleLoad = () => {
      script.dataset.credlyState = "loaded";
      setEmbedState("loaded");
    };
    const handleError = () => {
      script.dataset.credlyState = "error";
      setEmbedState("error");
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
  }, [badge?.credlyBadgeId]);

  if (!badge?.credlyBadgeId) return null;

  return (
    <article className="credential-visual-card credly-card">
      <div className="credential-visual-top">
        <span>Credly badge</span>
        <span>{embedState === "error" ? "Fallback" : "Official embed"}</span>
      </div>
      <div className="credly-embed" aria-label={badge.title || "Credly credential"}>
        <div
          data-iframe-width={badge.embedWidth || 150}
          data-iframe-height={badge.embedHeight || 270}
          data-share-badge-id={badge.credlyBadgeId}
          data-share-badge-host={badge.embedHost || "https://www.credly.com"}
        />
      </div>
      <div className="credential-fallback" role={embedState === "error" ? "status" : undefined}>
        <span>{badge.title || "Credential metadata pending"}</span>
        <small>
          {embedState === "error"
            ? "The Credly embed could not load. The portfolio remains usable without the third-party badge."
            : "Badge title and issuer will be shown after verification."}
        </small>
      </div>
    </article>
  );
}
