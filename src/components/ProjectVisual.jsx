export function ProjectVisual({ project }) {
  const approach = project?.approach ?? [];
  const tags = project?.tags ?? [];
  const nodes = [
    { label: "INPUT", value: project?.type || "Project" },
    { label: "BUILD", value: project?.contribution || "Contribution recorded in project data" },
    { label: "SIGNAL", value: project?.evidence || "Evidence recorded in project data" },
    { label: "OUTCOME", value: project?.outcome || "Outcome recorded in project data" },
  ];
  return (
    <div className="project-visual" aria-label={`Visual evidence map for ${project?.title || "project"}`}>
      <div className="project-visual-head"><span>Evidence map</span><span>{String(approach.length).padStart(2, "0")} approach signals</span></div>
      <div className="project-flow">
        {nodes.map((node, index) => (
          <div className="project-node-wrap" key={node.label}>
            <div className="project-node"><span>{node.label}</span><strong>{node.value}</strong></div>
            {index < nodes.length - 1 && <span className="project-flow-line" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="project-signal-strip">
        {approach.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        {tags.slice(0, 3).map((item) => <span key={`tag-${item}`}>{item}</span>)}
      </div>
    </div>
  );
}
