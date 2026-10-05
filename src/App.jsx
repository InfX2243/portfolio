import { CanvasParticleReveal } from "./components/CanvasParticleReveal";
import { VgpuField } from "./components/VgpuField";
import { SpotlightCard } from "./components/SpotlightCard";
import { CredlyBadge } from "./components/CredlyBadge";
import { CertificateCard } from "./components/CertificateCard";
import { SplineScene } from "./components/SplineScene";
import { ProjectVisual } from "./components/ProjectVisual";
import { ResearchVisual } from "./components/ResearchVisual";
import { certifications, domains, experience, leadership, profile, projects, research, stack } from "./data/portfolio";
import credentials from "./data/credentials.json";
import "./styles.css";

function SectionHeader({ index, eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a className="wordmark" href="#top" aria-label="Abid Ahmed Shaikh home">AA<span>/</span>01</a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#research">Research</a>
        <a href="#systems">Systems</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-status" href={profile.links.linkedin} target="_blank" rel="noreferrer">
        <span className="status-dot" /> Open to technical conversations
      </a>
    </header>
  );
}

function App() {
  return (
    <main id="top" className="app">
      <a className="skip-link" href="#about">Skip to main content</a>
      <div className="ambient-grid" aria-hidden="true" />
      <Nav />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <VgpuField />
        <CanvasParticleReveal className="particle-layer" />
        <div className="hero-content">
          <div className="hero-kicker"><span /> {profile.eyebrow}</div>
          <h1 id="hero-title">
            Systems that move from <em>idea</em> to infrastructure.
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore work <span>↘</span></a>
            <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="text-link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="hero-meta">
          <span>01 / Portfolio</span>
          <span>Cloud · AI · Systems · Research</span>
          <span>2026</span>
        </div>
      </section>

      <section id="about" className="section-shell section about">
        <SectionHeader index="01" eyebrow="Research direction" title="Build. Investigate. Repeat." intro="The work sits between practical software engineering and the questions that make systems worth studying." />
        <div className="about-grid">
          <div className="about-statement">
            <p>{profile.summary}</p>
            <p>Current work spans software engineering, cloud-native infrastructure, AI-integrated applications and interactive systems. The goal is not a larger technology list — it is a deeper understanding of how these pieces behave together.</p>
          </div>
          <div className="signal-list">
            <div><span>EDUCATION</span><strong>{profile.education}</strong></div>
            <div><span>CURRENT ROLE</span><strong>{experience[0].role} · {experience[0].org}</strong></div>
            <div><span>ORIENTATION</span><strong>Engineering with a research trajectory</strong></div>
          </div>
        </div>
      </section>

      <section className="section-shell section">
        <SectionHeader index="02" eyebrow="Experience" title="Engineering in the loop." intro="A compact view of the environments where ideas become working software." />
        <div className="experience">
          {experience.map((item) => (
            <div className="experience-row" key={item.org}>
              <span className="experience-period">{item.period}</span>
              <div>
                <p className="eyebrow">{item.org}</p>
                <h3>{item.role}</h3>
                <p className="muted">{item.note}</p>
                <div className="tag-row">{(item.focus ?? []).map((x) => <span key={x}>{x}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell section">
        <SectionHeader index="03" eyebrow="Selected work" title="Evidence over adjectives." intro="Projects are presented as technical signals: what they are, why they matter, and what recognition or context surrounds them." />
        <div className="project-grid">
          {projects.map((project) => (
            <SpotlightCard key={project.id} className={project.featured ? "featured-project" : ""}>
              <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectVisual project={project} />
              <details className="evidence-details">
                <summary>Technical detail <span>↗</span></summary>
                <div className="project-detail">
                  <div><span>CONTRIBUTION</span><p>{project.contribution}</p></div>
                  <div><span>APPROACH</span><div className="tag-row">{(project.approach ?? []).map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                  <div><span>OUTCOME</span><p>{project.outcome}</p></div>
                </div>
              </details>
              {project.award && <div className="award">↳ {project.award}</div>}
              <div className="project-evidence"><span>Evidence</span><small>{project.evidence}</small></div>
              <div className="tag-row">{(project.tags ?? []).map((tag) => <span key={tag}>{tag}</span>)}</div>
              {Object.entries(project.links ?? {}).length > 0 && <div className="project-links">{Object.entries(project.links ?? {}).map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section id="research" className="section-shell section research">
        <SectionHeader index="03R" eyebrow="Research" title="Evidence, not just a label." intro="A compact research record that separates recognition, context and source-backed evidence." />
        <div className="research-grid">
          {(research ?? []).map((item) => (
            <article className="research-card" key={item.id}>
              <div className="research-card-top">
                <span>{item.index}</span>
                <span>{item.signal}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="research-context">{item.context} · {item.recognition}</p>
              <p>{item.description}</p>
              <ResearchVisual research={item} />
              <details className="evidence-details research-details">
                <summary>Source detail <span>↗</span></summary>
                <div className="research-evidence">
                  <span>Evidence</span>
                  <small>{item.evidence}</small>
                </div>
              </details>
              {Object.entries(item.links ?? {}).length > 0 && (
                <div className="project-links">
                  {Object.entries(item.links ?? {}).map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="research-method">
          <span className="eyebrow">Research method</span>
          <p>Formulate a problem → build something testable → interrogate the result → communicate what was learned.</p>
          <a className="text-link" href="#work">See project evidence ↓</a>
        </div>
      </section>

      <section id="systems" className="section-shell section">
        <SectionHeader index="04" eyebrow="Technical domains" title="A systems-oriented stack." />
        <div className="domain-grid">
          {domains.map((domain) => (
            <div className="domain" key={domain.title}>
              <span>{domain.label}</span>
              <h3>{domain.title}</h3>
              <p>{domain.body}</p>
            </div>
          ))}
        </div>
        <div className="stack-line"><span>Working vocabulary</span><div>{stack.map((x) => <b key={x}>{x}</b>)}</div></div>
      </section>

      <section className="section-shell section credentials-section">
        <SectionHeader index="05" eyebrow="Credentials" title="Proof you can inspect." intro="Badges and certificates are treated as visual evidence, with metadata added only when it is verified." />
        <div className="credential-feature-grid">
          {(credentials.badges ?? []).filter((badge) => badge.featured).map((badge) => <CredlyBadge key={badge.id} badge={badge} />)}
          <div className="certificate-stack">
            {(credentials.certificates ?? []).filter((certificate) => certificate.featured).map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} />)}
          </div>
        </div>
        <div className="certificate-grid">
          {(credentials.certificates ?? []).filter((certificate) => !certificate.featured).map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} />)}
        </div>
        <div className="credential-list compact-credential-list">{certifications.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}</div>
      </section>

      <section className="section-shell section community-section">
        <SectionHeader index="06" eyebrow="Community" title="Learn in public." />
        <div className="credential-list">{(leadership ?? []).map(([item, role], i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><small>{role}</small></div>)}</div>
      </section>

      <section className="section-shell section systems-visual-section" aria-labelledby="systems-visual-title">
        <SectionHeader index="06R" eyebrow="3D systems layer" title="Make the architecture visible." intro="A progressive Spline surface is reserved for a verified scene so the 3D layer explains a system instead of becoming decoration." />
        <SplineScene fallback="Verified Spline scene pending — the visual slot is ready without blocking the portfolio." />
      </section>

      <section id="contact" className="section-shell section closing">
        <p className="eyebrow">07 / Contact</p>
        <h2>Have a hard problem worth exploring?</h2>
        <p>Open to technical conversations, research communities, and engineering opportunities where curiosity and implementation can reinforce each other.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>ABID AHMED SHAIKH</span>
        <span>Built as a technical artifact, not a template.</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}

export default App;
