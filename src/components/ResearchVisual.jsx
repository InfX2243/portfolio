export function ResearchVisual({ research }) {
  if (!research) return null;

  return (
    <div className="research-signal-panel" aria-label={research.title + " research profile"}>
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
