export function ResearchVisual({ research }) {
  const signals = [
    research.signal,
    research.context,
    research.recognition,
  ].filter(Boolean);

  return (
    <div className="research-signal-panel">
      <div className="research-signal-head">
        <span>Research signal</span>
        <span>{research.signal || "Evidence status"}</span>
      </div>
      <div className="research-signal-body">
        <div>
          <span className="eyebrow">Context</span>
          <strong>{research.context || "Context pending verification"}</strong>
        </div>
        <div>
          <span className="eyebrow">Recognition</span>
          <strong>{research.recognition || "Recognition pending verification"}</strong>
        </div>
      </div>
      <div className="research-signal-strip">
        {signals.slice(0, 3).map((signal) => <span key={signal}>{signal}</span>)}
      </div>
    </div>
  );
}
