import { lazy, Suspense } from "react";
import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { withBasePath } from "../app/basePath";
import { ProjectVisual } from "../components/ProjectVisual";
import { profile, projects, research, experience, domains, leadership } from "../data/portfolio";

const VgpuField = lazy(() =>
  import("../components/VgpuField").then((m) => ({ default: m.VgpuField })),
);

export function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <PortfolioLayout>
      <section className="home-hero section-shell" aria-labelledby="hero-title">
        <Suspense fallback={null}>
          <VgpuField />
        </Suspense>
        <div className="home-hero-copy">
          <p className="hero-kicker"><span />{profile.eyebrow}</p>
          <h1 id="hero-title">Hi, I&apos;m Abid.<br /><em>I build systems.</em></h1>
          <p className="hero-lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={withBasePath("/projects")}>Explore projects <span aria-hidden="true">↘</span></a>
            <a className="text-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="home-hero-aside" aria-label="Current direction">
          <span className="mono-label">CURRENT DIRECTION</span>
          <p>Cloud-native infrastructure<br />AI-enabled applications<br />Backend systems<br />Applied research</p>
        </div>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="about-heading">
        <PageHeader level="h2" index="01" eyebrow="A little context" title="Engineering with a research mindset." intro={profile.role} />
        <div className="intro-grid">
          <p className="intro-statement">{profile.summary}</p>
          <dl className="fact-list">
            <div><dt>Education</dt><dd>{profile.education}</dd></div>
            <div><dt>Focus</dt><dd>Cloud · AI · Backend · Systems</dd></div>
          </dl>
        </div>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="experience-heading">
        <PageHeader level="h2" index="02" eyebrow="Experience" title="Where I&apos;m building." intro="Professional experience is the clearest proof of how the technical interests above translate into real engineering work." />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.org}>
              <p className="experience-period">{item.period}</p>
              <div className="experience-main">
                <div>
                  <p className="mono-label">{item.org}</p>
                  <h3>{item.role}</h3>
                  <p>{item.note}</p>
                </div>
                <ul className="plain-tags" aria-label="Focus areas">
                  {item.focus.map((focus) => <li key={focus}>{focus}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link" href={withBasePath("/experience")}>View full experience ↗</a>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="projects-heading">
        <PageHeader level="h2" index="03" eyebrow="Selected work" title="A few things I&apos;ve worked on." intro="Featured projects first; deeper case studies remain available where verified evidence supports them." />
        <div className="project-archive">
          {featured.map((project) => (
            <article className="project-row" key={project.id}>
              <div className="project-row-index">{project.number}</div>
              <div className="project-row-main">
                <div className="project-row-heading">
                  <div>
                    <p className="mono-label">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  {project.award && <p className="project-award">{project.award}</p>}
                </div>
                <p>{project.description}</p>
                <div className="project-row-footer">
                  <div className="plain-tags" aria-label="Technologies and focus">
                    {project.approach.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="text-link" href={withBasePath("/projects/" + project.id)}>Case study ↗</a>
                </div>
              </div>
              <ProjectVisual project={project} />
            </article>
          ))}
        </div>
        <a className="text-link section-link" href={withBasePath("/projects")}>View all projects ↗</a>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="research-heading">
        <PageHeader level="h2" index="04" eyebrow="Research" title="Questions worth investigating." intro="Research sits alongside engineering here, with claims kept separate from evidence until they can be verified." />
        <div className="research-archive">
          {research.map((item) => (
            <article className="research-row" key={item.id}>
              <span className="research-row-index">{item.index}</span>
              <div>
                <p className="mono-label">{item.context}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="research-row-signal">
                <span>{item.signal}</span>
                <a className="text-link" href={withBasePath("/research")}>Explore research ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="direction-heading">
        <PageHeader level="h2" index="05" eyebrow="Technical direction" title="The areas shaping the next chapter." />
        <div className="direction-list">
          {domains.slice(0, 4).map((domain) => (
            <article key={domain.title}>
              <span>{domain.label}</span>
              <h3>{domain.title}</h3>
              <p>{domain.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="community-heading">
        <PageHeader level="h2" index="06" eyebrow="Beyond the code" title="Recognition and community." intro="A compact view of the signals that sit alongside project and research work." />
        <div className="community-list">
          {featured.filter((project) => project.award).map((project) => (
            <div key={project.id}>
              <span className="mono-label">{project.type}</span>
              <strong>{project.award}</strong>
              <a className="text-link" href={withBasePath("/projects/" + project.id)}>See the work ↗</a>
            </div>
          ))}
          {leadership.map(([name, context]) => (
            <div key={name}>
              <span className="mono-label">Community</span>
              <strong>{name}</strong>
              <small>{context}</small>
            </div>
          ))}
        </div>
        <div className="home-closing">
          <p className="mono-label">07 / CONTACT</p>
          <h2>Let&apos;s build something meaningful.</h2>
          <p>Open to technical conversations, research communities, and engineering opportunities.</p>
          <a className="button button-primary" href={withBasePath("/contact")}>Get in touch ↗</a>
        </div>
      </section>
    </PortfolioLayout>
  );
}
