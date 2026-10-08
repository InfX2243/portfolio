import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/portfolio";
import { BASE_PATH, normalizePath, withBasePath } from "../../app/basePath";

const links = [
  ["/", "Home"],
  ["/projects", "Projects"],
  ["/research", "Research"],
  ["/achievements", "Achievements"],
  ["/experience", "Experience"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

function active(path, href) {
  return href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
}

export function PortfolioLayout({ children }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);
  const current = normalizePath(window.location.pathname);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      return undefined;
    }
    wasOpen.current = true;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navigate = (event, href) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setOpen(false);
    history.pushState({}, "", BASE_PATH + href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div id="top" className="app">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="nav">
        <a className="wordmark" href={withBasePath("/")} onClick={(event) => navigate(event, "/")} aria-label="Abid Ahmed Shaikh home">
          ABID<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <a key={href} aria-current={active(current, href) ? "page" : undefined} className={active(current, href) ? "active-route" : ""} href={withBasePath(href)} onClick={(event) => navigate(event, href)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-status" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          <span className="status-dot" /> Open to conversations
        </a>
        <button
          ref={toggleRef}
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav id="mobile-nav" className={open ? "mobile-nav-panel is-open" : "mobile-nav-panel"} aria-label="Mobile primary navigation" aria-hidden={!open} inert={!open}>
          {links.map(([href, label]) => (
            <a key={href} aria-current={active(current, href) ? "page" : undefined} className={active(current, href) ? "active-route" : ""} href={withBasePath(href)} onClick={(event) => navigate(event, href)}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="footer section-shell">
        <a href={withBasePath("/")} onClick={(event) => navigate(event, "/")}>ABID AHMED SHAIKH</a>
        <span>Built as a technical artifact, not a template.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
