export function PageHeader({ index, eyebrow, title, intro, level = "h1" }) {
  const Heading = level === "h2" ? "h2" : "h1";

  return (
    <div className="section-head page-head">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <Heading>{title}</Heading>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}
