import { useEffect, useRef } from "react";

let splineViewerPromise;

function loadSplineViewer() {
  if (typeof window === "undefined") return Promise.resolve();
  if (customElements.get("spline-viewer")) return Promise.resolve();
  if (!splineViewerPromise) {
    splineViewerPromise = import("@splinetool/viewer").catch(() => null);
  }
  return splineViewerPromise;
}

export function SplineScene({ sceneUrl, fallback }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!sceneUrl) return undefined;
    let active = true;
    loadSplineViewer().then(() => {
      if (active && viewerRef.current) {
        viewerRef.current.setAttribute("url", sceneUrl);
      }
    });
    return () => {
      active = false;
    };
  }, [sceneUrl]);

  if (!sceneUrl) return (
    <div className="spline-shell spline-fallback" role="img" aria-label="Interactive 3D scene placeholder">
      <div className="spline-fallback-grid" aria-hidden="true" />
      <div className="spline-fallback-copy"><span className="eyebrow">3D systems layer</span><strong>{fallback || "Spline scene will appear here once a verified scene URL is supplied."}</strong><small>The portfolio remains fully usable without the 3D layer.</small></div>
    </div>
  );

  return (
    <div className="spline-shell" aria-label="Interactive 3D systems visualization">
      <spline-viewer ref={viewerRef} loading="lazy" url={sceneUrl} />
    </div>
  );
}
