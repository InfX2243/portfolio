import { useEffect, useRef, useState } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

let credlyLoadPromise = null;

function loadCredlyScript() {
  if (credlyLoadPromise) return credlyLoadPromise;

  const existing = document.getElementById(CREDLY_SCRIPT_ID);
  if (existing?.dataset.credlyState === "loaded") return Promise.resolve();
  if (existing?.dataset.credlyState === "loading") {
    credlyLoadPromise = new Promise((resolve, reject) => {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
    }).catch((error) => {
      credlyLoadPromise = null;
      throw error;
    });
    return credlyLoadPromise;
  }

  credlyLoadPromise = new Promise((resolve, reject) => {
    const script = existing || document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.src = CREDLY_SCRIPT_SRC;
    script.async = true;
    script.dataset.credlyState = "loading";

    const cleanup = () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
    const handleLoad = () => {
      cleanup();
      script.dataset.credlyState = "loaded";
      resolve();
    };
    const handleError = () => {
      cleanup();
      script.dataset.credlyState = "error";
      credlyLoadPromise = null;
      reject(new Error("Credly embed failed to load"));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existing) document.body.appendChild(script);
  });

  return credlyLoadPromise;
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
