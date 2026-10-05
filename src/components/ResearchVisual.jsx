export function ResearchVisual({ research }) {
  const signals = [
    research.signal,
    research.context,
    research.recognition,
  ].filter(Boolean);

  const nodes = [
    { label: "QUESTION", value: research.context ?? "Research context" },
    { label: "INVESTIGATE", value: research.description ?? "Research direction" },
    { label: "RECOGNITION", value: research.recognition ?? "Recognition pending" },
    { label: "EVIDENCE", value: research.evidence ?? "Source-backed evidence" },
  ];

  return (
    <div className="research-visual" aria-label={`Visual evidence map for ${research.title}`}>
      <div className="research-visual-head">
        <span>Evidence map</span>
        <span>{research.signal ?? "Research signal"}</span>
      </div>
      <div className="research-flow">
        {nodes.map((node, index) => (
          <div className="research-node-wrap" key={node.label}>
            <div className="research-node">
              <span>{node.label}</span>
              <strong>{node.value}</strong>
            </div>
            {index < nodes.length - 1 && <span className="research-flow-line" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="research-signal-strip">
        {signals.slice(0, 4).map((signal) => <span key={signal}>{signal}</span>)}
      </div>
    </div>
  );
}
