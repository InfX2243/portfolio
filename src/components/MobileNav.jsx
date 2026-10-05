import { useEffect, useId, useState } from "react";

export function MobileNav({ profile }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <div id={menuId} className={open ? "mobile-nav-panel is-open" : "mobile-nav-panel"} aria-hidden={!open}>
        <a href="#work" onClick={close}>Work</a>
        <a href="#research" onClick={close}>Research</a>
        <a href="#systems" onClick={close}>Systems</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" onClick={close}>LinkedIn ↗</a>
      </div>
    </>
  );
}
