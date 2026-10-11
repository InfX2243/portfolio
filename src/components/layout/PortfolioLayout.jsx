import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/portfolio";
import { BASE_PATH, normalizePath, withBasePath } from "../../app/basePath";
import { consumeRouteFocusRequest, requestRouteFocus } from "../../app/routeFocus";

const desktopLinks = [
  ["/projects", "Work"],
  ["/research", "Research"],
  ["/experience", "Experience"],
  ["/about", "About"],
];
const mobileLinks = [
  ["/projects", "Work"],
  ["/research", "Research"],
  ["/experience", "Experience"],
  ["/achievements", "Achievements"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

function active(path, href) {
  return href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
}

function NavigationLinks({ links, current, navigate, closeMenu }) {
  return links.map(([href, label]) => (
    <a
      key={href}
      aria-current={active(current, href) ? "page" : undefined}
      className={active(current, href) ? "active-route" : ""}
      href={withBasePath(href)}
      onClick={(event) => {
        navigate(event, href);
        closeMenu?.();
      }}
    >
      {label}
    </a>
  ));
}

export function PortfolioLayout({ children }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);
  const current = normalizePath(window.location.pathname);

  useEffect(() => {
    if (consumeRouteFocusRequest()) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
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
    if (normalizePath(window.location.pathname) === href) {
      window.scrollTo(0, 0);
      return;
    }
    requestRouteFocus();
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
          <NavigationLinks links={desktopLinks} current={current} navigate={navigate} />
        </nav>
        <a className="nav-contact" href={withBasePath("/contact")} onClick={(event) => navigate(event, "/contact")}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
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
          <NavigationLinks links={mobileLinks} current={current} navigate={navigate} closeMenu={() => setOpen(false)} />
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="footer section-shell">
        <a href={withBasePath("/")} onClick={(event) => navigate(event, "/")}>ABID AHMED SHAIKH</a>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href={withBasePath("/achievements")} onClick={(event) => navigate(event, "/achievements")}>Achievements</a>
          <a href={withBasePath("/contact")} onClick={(event) => navigate(event, "/contact")}>Contact</a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </nav>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
