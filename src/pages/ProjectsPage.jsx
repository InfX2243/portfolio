import { useEffect, useMemo, useRef, useState } from "react";
import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { withBasePath } from "../app/basePath";
import { projects } from "../data/portfolio";

function ProjectSlideshow({ project }) {
  const images = useMemo(() => {
    const gallery = Array.isArray(project.gallery) ? project.gallery : [];
    if (gallery.length) return gallery;
    return project.visual ? [project.visual] : [];
  }, [project.gallery, project.visual]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const transitionTimer = useRef(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(preference.matches);
    syncPreference();
    preference.addEventListener?.("change", syncPreference);
    return () => preference.removeEventListener?.("change", syncPreference);
  }, []);

  const changeImage = (nextIndex) => {
    if (nextIndex === activeIndex) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => setPreviousIndex(null), 900);
  };

  useEffect(() => {
    if (images.length < 2 || paused || hovered || reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      changeImage((activeIndex + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [images.length, paused, hovered, reducedMotion, activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
    setPreviousIndex(null);
    window.clearTimeout(transitionTimer.current);
    return () => window.clearTimeout(transitionTimer.current);
  }, [project.id]);

  if (!images.length) {
    return <div className="polished-project-art-placeholder" aria-hidden="true"><span>{project.number}</span><strong>{project.type}</strong><i>Engineering archive</i></div>;
  }

  const currentImage = images[activeIndex % images.length];
  const showControls = images.length > 1;

  return (
    <div
      className="project-slideshow"
      aria-label={`${project.title} project image slideshow`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false);
      }}
    >
      <div className="project-slideshow-stage">
        {previousIndex !== null && previousIndex !== activeIndex && images[previousIndex] && (
          <img
            key={`${project.id}-exit-${previousIndex}`}
            className="polished-project-image project-slide-exit"
            src={withBasePath(images[previousIndex].src)}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        )}
        <img
          key={`${project.id}-enter-${activeIndex}`}
          className="polished-project-image project-slide-enter"
          src={withBasePath(currentImage.src)}
          alt={currentImage.alt || `${project.title} project screenshot`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {showControls && (
        <div className="project-slideshow-controls">
          <span className="project-slideshow-count" aria-label={`Image ${activeIndex + 1} of ${images.length}`}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <div className="project-slideshow-actions">
            <button
              type="button"
              className="project-slideshow-button"
              aria-label={paused ? `Play ${project.title} slideshow` : `Pause ${project.title} slideshow`}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              className="project-slideshow-button"
              aria-label={`Show next ${project.title} image`}
              onClick={() => changeImage((activeIndex + 1) % images.length)}
            >
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="polished-project-card">
      <div className="polished-project-art">
        <ProjectSlideshow project={project} />
      </div>
      <div className="polished-project-body">
        <div className="polished-project-kicker"><span>{project.number} / {project.type}</span>{project.award && <span className="polished-award">Award-winning team project</span>}</div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.award && <p className="polished-project-award">{project.award}</p>}
        <a className="text-link" href={withBasePath("/projects/" + project.id)}>Explore case study <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.award)) - Number(Boolean(a.award)));
  return (
    <PortfolioLayout>
      <section className="section-shell page-section polished-page projects-polished">
        <PageHeader index="01" eyebrow="Selected work" title="Built to solve something." intro="A project archive spanning applied engineering, cloud platforms and research-oriented builds. Each project preview rotates through its supplied screenshots; open a case study for the full gallery and technical context." />
        <div className="polished-page-meta"><span>{String(orderedProjects.length).padStart(2, "0")} projects</span><span>Sorted by verified recognition, then project order</span></div>
        <div className="polished-project-grid">
          {orderedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
    </PortfolioLayout>
  );
}
