export function ProjectVisual({ project }) {
  if (!project) return null;
  return (
    <div className="project-visual" aria-label={project.title + " project summary"}>
      <div className="project-visual-head">
        <span>{project.type}</span>
        <span>{project.number}</span>
      </div>
      <div className="project-visual-body">
        <span className="project-visual-mark" aria-hidden="true">↗</span>
        <p>{project.evidence}</p>
      </div>
      <div className="project-signal-strip">
        {(project.approach || []).slice(0, 4).map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}
