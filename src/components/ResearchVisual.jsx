import { withBasePath } from "../app/basePath";

export function ResearchVisual({ research }) {
  if (!research) return null;

  return (
    <div className="research-signal-panel" aria-label={research.title + " research profile"}>
      {research.visual && <div className="research-visual-media"><img src={withBasePath(research.visual)} alt={research.visualAlt || `${research.title} research visual`} loading="lazy" /></div>}
      <div className="research-signal-head">
        <span>Research profile</span>
        <span>{research.signal || "Research"}</span>
      </div>
      <div className={research.recognition ? "research-signal-body" : "research-signal-body research-signal-body-single"}>
        {research.context && (
          <div>
            <span className="eyebrow">Context</span>
            <strong>{research.context}</strong>
          </div>
        )}
        {research.recognition && (
          <div>
            <span className="eyebrow">Recognition</span>
            <strong>{research.recognition}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
