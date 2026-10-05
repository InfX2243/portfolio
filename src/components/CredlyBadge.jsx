import { useEffect, useRef, useState } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

function loadCredlyScript() {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(CREDLY_SCRIPT_ID);
    if (existing) {
      if (existing.dataset.credlyState === "loaded") {
        resolve();
        return;
      }
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.src = CREDLY_SCRIPT_SRC;
    script.async = true;
    script.dataset.credlyState = "loading";
    script.addEventListener("load", () => {
      script.dataset.credlyState = "loaded";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => {
      script.dataset.credlyState = "error";
      reject(new Error("Credly embed failed to load"));
    }, { once: true });
    document.body.appendChild(script);
  });
}

export function CredlyBadge({ badge }) {
  const [embedState, setEmbedState] = useState("idle");
  const cardRef = useRef(null);

  useEffect(() => {
    if (!badge?.credlyBadgeId || !cardRef.current) return undefined;

    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      setEmbedState("loading");
      loadCredlyScript()
        .then(() => !cancelled && setEmbedState("loaded"))
        .catch(() => !cancelled && setEmbedState("error"));
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => entries.some(entry => entry.isIntersecting) && start(),
      { rootMargin: "240px 0px" }
    );
    observer.observe(cardRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [badge?.credlyBadgeId]);

  if (!badge?.credlyBadgeId) return null;

  return (
    <article ref={cardRef} className="credential-visual-card credly-card">
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
