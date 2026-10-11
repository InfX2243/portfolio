import { lazy, Suspense } from "react";
import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { PageHeader } from "../components/layout/PageHeader";
import { withBasePath } from "../app/basePath";
import { ProjectVisual } from "../components/ProjectVisual";
import { HeroSystemVisual } from "../components/HeroSystemVisual";
import { profile, projects, research, experience, domains, leadership } from "../data/portfolio";

const VgpuField = lazy(() =>
  import("../components/VgpuField").then((m) => ({ default: m.VgpuField })),
);

export function HomePage() {
  const featured = projects.filter((project) => project.featured).sort((a, b) => Number(Boolean(b.award)) - Number(Boolean(a.award)));

  return (
    <PortfolioLayout>
      <section className="home-hero section-shell" aria-labelledby="hero-title">
        <Suspense fallback={null}>
          <VgpuField />
        </Suspense>
        <div className="home-hero-copy">
          <p className="hero-kicker"><span />{profile.eyebrow}</p>
          <h1 id="hero-title">Hi, I&apos;m Abid.<br /><em>I build systems.</em></h1>
          <p className="hero-lede">{profile.role}</p>
          <p className="hero-supporting">An Information Technology undergraduate and Software Developer Intern, interested in the engineering behind cloud platforms, backend systems and AI-enabled applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={withBasePath("/projects")}>Explore my work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            {profile.resume && <a className="text-link" href={withBasePath(profile.resume)} target="_blank" rel="noopener noreferrer">Résumé ↗</a>}
          </div>
        </div>
        <HeroSystemVisual />
        <div className="hero-focus-strip" aria-label="Current engineering focus">
          <span className="mono-label">CURRENT DIRECTION</span>
          <span>Cloud infrastructure</span>
          <span>Applied AI</span>
          <span>Backend systems</span>
          <span>Research &amp; experimentation</span>
        </div>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="about-heading">
        <PageHeader level="h2" index="01" eyebrow="The person behind the work" title="Curiosity, made practical." intro="A concise introduction to the person, not another list of technologies." />
        <div className="intro-grid">
          <p className="intro-statement">I&apos;m studying Information Technology at M.H. Saboo Siddik College of Engineering while working as a Software Developer Intern at Bitkraft Technologies LLP. I like learning by building, then understanding why a system works the way it does.</p>
          <dl className="fact-list">
            <div><dt>Education</dt><dd>{profile.education}</dd></div>
            <div><dt>Interests</dt><dd>Cloud platforms · backend engineering · applied AI · research</dd></div>
            <div><dt>Principle</dt><dd>Never stop learning, because life never stops teaching.</dd></div>
          </dl>
        </div>
        <a className="text-link section-link" href={withBasePath("/about")}>More about me ↗</a>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="projects-heading">
        <PageHeader level="h2" index="02" eyebrow="Selected work" title="Start with what I&apos;ve built." intro="The most distinctive work comes first. Each case study uses supplied project material and separates known facts from details that still need verification." />
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
        <a className="text-link section-link" href={withBasePath("/projects")}>Browse all projects ↗</a>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="research-heading">
        <PageHeader level="h2" index="03" eyebrow="Research" title="Questions worth investigating." intro="Research belongs alongside engineering. The page distinguishes project context from publication or recognition claims that still need authoritative evidence." />
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

      <section className="section-shell editorial-section" aria-labelledby="experience-heading">
        <PageHeader level="h2" index="04" eyebrow="Experience" title="Where I&apos;m growing as an engineer." intro="Professional context matters, so this section stays concise and does not imply responsibilities beyond the information currently confirmed." />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.org}>
              <p className="experience-period">{item.period}</p>
              <div className="experience-main">
                <div>
                  {item.logo && <img className="experience-company-logo" src={withBasePath(item.logo)} alt="" loading="lazy" />}
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
        <a className="text-link" href={withBasePath("/experience")}>Full experience details ↗</a>
      </section>

      <section className="section-shell editorial-section" aria-labelledby="direction-heading">
        <PageHeader level="h2" index="05" eyebrow="Technical direction" title="The areas shaping my next chapter." intro="A few connected areas of interest, rather than a claim to have mastered every tool in the stack." />
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
        <PageHeader level="h2" index="06" eyebrow="Recognition & community" title="Signals beyond the code." intro="Selected team recognition and community involvement complement the work itself." />
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
        <a className="text-link section-link" href={withBasePath("/achievements")}>Explore achievements &amp; credentials ↗</a>
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
