import { PortfolioLayout } from "../components/layout/PortfolioLayout";
import { withBasePath } from "../app/basePath";
import { HeroSystemVisual } from "../components/HeroSystemVisual";
import { profile, projects, research, experience, domains, leadership, certifications } from "../data/portfolio";

export function HomePage() {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => Number(Boolean(b.award)) - Number(Boolean(a.award)));
  const primaryResearch = research.slice(0, 2);

  return (
    <PortfolioLayout>
      <section className="home-hero home-hero-rebuilt section-shell" aria-labelledby="hero-title">
        <div className="home-hero-copy">
          <p className="hero-kicker"><span aria-hidden="true" />{profile.eyebrow}</p>
          <h1 id="hero-title">I&apos;m Abid.<br /><em>I build, learn, repeat.</em></h1>
          <p className="hero-lede">{profile.role}</p>
          <p className="hero-supporting">
            I&apos;m an engineer who likes turning ideas into real things. I learn by building,
            testing, understanding why a system behaves the way it does, and making the next
            iteration better. Right now, that means balancing my Information Technology degree,
            an internship, engineering projects and research.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={withBasePath("/projects")}>Explore selected work <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            {profile.resume && <a className="text-link" href={withBasePath(profile.resume)} target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
        <div className="home-hero-aside">
          {profile.portrait && (
            <figure className="home-portrait">
              <img src={withBasePath(profile.portrait)} alt="Portrait of Abid Ahmed Shaikh" fetchPriority="high" />
              <figcaption><span>Currently</span><strong>Learning by building</strong></figcaption>
            </figure>
          )}
          <HeroSystemVisual />
        </div>
        <div className="home-hero-bottom">
          <p className="home-principle">“Never stop learning, because life never stops teaching.”</p>
          <p className="home-principle-note">A personal principle — and a reminder that there is always more to offer.</p>
        </div>
      </section>

      <section className="section-shell overview-section" aria-labelledby="overview-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">The short version</p><h2 id="overview-title">A profile, at a glance.</h2></div>
          <p>The context behind the work, without making you hunt for it.</p>
        </div>
        <div className="overview-grid">
          <article className="overview-card overview-about">
            <p className="mono-label">01 / ABOUT</p>
            <h3>Curious by default. Hands-on by choice.</h3>
            <p>I enjoy difficult problems that reward experimentation, careful implementation and continuous improvement. I care about how things work—not just getting a demo over the line—and I want each project to teach me something I can use in the next one.</p>
            <a className="text-link" href={withBasePath("/about")}>More of my story <span aria-hidden="true">↗</span></a>
          </article>
          <article className="overview-card">
            <p className="mono-label">02 / EDUCATION</p>
            <h3>B.E. Information Technology</h3>
            <p>M.H. Saboo Siddik College of Engineering</p>
            <span className="overview-detail">2023–2027 · Expected graduation 2027</span>
          </article>
          <article className="overview-card">
            <p className="mono-label">03 / EXPERIENCE</p>
            {experience.slice(0, 1).map((item) => (
              <div key={item.org}>
                {item.logo && <img className="overview-company-logo" src={withBasePath(item.logo)} alt="" loading="lazy" />}
                <h3>{item.role}</h3>
                <p>{item.org}</p>
                <span className="overview-detail">{item.period}</span>
                <p className="overview-copy">{item.note}</p>
              </div>
            ))}
            <a className="text-link" href={withBasePath("/experience")}>Experience details <span aria-hidden="true">↗</span></a>
          </article>
          <article className="overview-card overview-award">
            <p className="mono-label">04 / TEAM RECOGNITION</p>
            <span className="award-mark" aria-hidden="true">01</span>
            <h3>1st Place Nationwide</h3>
            <p>Xcelerate 2025 Oracle APEX Hackathon</p>
            <span className="overview-detail">Team ORACLEONAUTS · Ascend APEX</span>
            <a className="text-link" href={withBasePath("/projects/ascend-apex")}>See the project <span aria-hidden="true">↗</span></a>
          </article>
          <article className="overview-card overview-focus">
            <p className="mono-label">05 / TECHNICAL DIRECTION</p>
            <h3>Areas I&apos;m exploring</h3>
            <ul className="overview-pills">
              {domains.slice(0, 4).map((domain) => <li key={domain.title}>{domain.title}</li>)}
            </ul>
          </article>
          <article className="overview-card">
            <p className="mono-label">06 / COMMUNITY</p>
            <h3>Learning with others</h3>
            <ul className="overview-community">
              {leadership.map(([name, context]) => <li key={name}><strong>{name}</strong><span>{context}</span></li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell overview-section" aria-labelledby="work-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">Selected work</p><h2 id="work-title">Built to be explored.</h2></div>
          <a className="text-link" href={withBasePath("/projects")}>All projects <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-project-grid">
          {featured.map((project) => (
            <article className="home-project-card" key={project.id}>
              <a className="home-project-image" href={withBasePath("/projects/" + project.id)} aria-label={"Open " + project.title + " case study"}>
                {project.visual && <img src={withBasePath(project.visual.src)} alt={project.visual.alt} loading="lazy" />}
                <span className="home-project-open" aria-hidden="true">↗</span>
              </a>
              <div className="home-project-copy">
                <p className="mono-label">{project.type}</p>
                <h3><a href={withBasePath("/projects/" + project.id)}>{project.title}</a></h3>
                {project.award && <p className="home-project-award">{project.award}</p>}
                <p>{project.description}</p>
                <ul className="home-project-tags" aria-label={project.title + " focus areas"}>
                  {project.approach.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="text-link" href={withBasePath("/projects/" + project.id)}>Project overview <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell overview-section" aria-labelledby="research-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">Research & investigation</p><h2 id="research-title">Questions worth following.</h2></div>
          <a className="text-link" href={withBasePath("/research")}>Research details <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-research-grid">
          {primaryResearch.map((item) => (
            <article className="home-research-card" key={item.id}>
              {item.visual && <img src={withBasePath(item.visual)} alt={item.visualAlt || ""} loading="lazy" />}
              <div><p className="mono-label">{item.context}</p><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <p className="home-evidence-note">Publication, methodology and individual-contribution details are included only when supported by evidence.</p>
      </section>

      <section className="section-shell overview-section" aria-labelledby="credentials-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">Credentials & learning</p><h2 id="credentials-title">Learning, put to work.</h2></div>
          <a className="text-link" href={withBasePath("/achievements")}>All credentials <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-credentials-panel">
          <div className="home-credentials-intro">
            <span className="credential-count">{String(certifications.length).padStart(2, "0")}</span>
            <div><h3>Professional certifications</h3><p>A selected overview; visit the credentials page for the complete inventory and available badge records.</p></div>
          </div>
          <ul className="home-certification-list">
            {certifications.slice(0, 4).map((certificate) => <li key={certificate}>{certificate}</li>)}
          </ul>
        </div>
      </section>

      <section className="section-shell home-final-cta" aria-labelledby="contact-title">
        <div><p className="eyebrow">The next iteration</p><h2 id="contact-title">I have more to offer.<br /><em>Let&apos;s find out what&apos;s next.</em></h2><p>Open to engineering conversations, research communities and opportunities to build useful things with thoughtful people.</p></div>
        <a className="button button-primary" href={withBasePath("/contact")}>Get in touch <span aria-hidden="true">↗</span></a>
      </section>
    </PortfolioLayout>
  );
}
