export function SplineScene({ sceneUrl, fallback }) {
  if (!sceneUrl) return (
    <div className="spline-shell spline-fallback" role="img" aria-label="Interactive 3D scene placeholder">
      <div className="spline-fallback-grid" aria-hidden="true" />
      <div className="spline-fallback-copy"><span className="eyebrow">3D systems layer</span><strong>{fallback || "Spline scene will appear here once a verified scene URL is supplied."}</strong><small>The portfolio remains fully usable without the 3D layer.</small></div>
    </div>
  );
  return <div className="spline-shell"><spline-viewer loading="lazy" url={sceneUrl} /></div>;
}
