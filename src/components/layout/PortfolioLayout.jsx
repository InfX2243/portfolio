import { useEffect, useState } from "react";
import { profile } from "../../data/portfolio";

const BASE="/portfolio";
const links=[["/","Home"],["/projects","Projects"],["/research","Research"],["/achievements","Achievements"],["/experience","Experience"],["/about","About"],["/contact","Contact"]];

function active(path,href){return href==="/" ? path==="/" : path===href || path.startsWith(href+"/");}

export function PortfolioLayout({children}){
 const [open,setOpen]=useState(false);
 const current=window.location.pathname.startsWith(BASE)?window.location.pathname.slice(BASE.length).replace(/\/+$/,"")||"/":window.location.pathname;
 useEffect(()=>{if(!open)return;const fn=e=>e.key==="Escape"&&setOpen(false);document.addEventListener("keydown",fn);return()=>document.removeEventListener("keydown",fn)},[open]);
 const navigate=(e,href)=>{if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();setOpen(false);history.pushState({}, "",BASE+href);window.dispatchEvent(new PopStateEvent("popstate"));};
 return <main id="top" className="app"><a className="skip-link" href="#main-content">Skip to main content</a><div className="ambient-grid" aria-hidden="true"/>
 <header className="nav"><a className="wordmark" href={BASE+"/"} onClick={e=>navigate(e,"/")} aria-label="Abid Ahmed Shaikh home">AA<span>/</span>01</a>
 <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([href,label])=><a key={href} className={active(current,href)?"active-route":""} href={BASE+href} onClick={e=>navigate(e,href)}>{label}</a>)}</nav>
 <a className="nav-status" href={profile.links.linkedin} target="_blank" rel="noreferrer"><span className="status-dot"/> Open to technical conversations</a>
 <button className="mobile-nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(v=>!v)}><span aria-hidden="true">{open?"×":"☰"}</span></button>
 <div id="mobile-nav" className={open?"mobile-nav-panel is-open":"mobile-nav-panel"} aria-hidden={!open}>{links.map(([href,label])=><a key={href} className={active(current,href)?"active-route":""} href={BASE+href} onClick={e=>navigate(e,href)}>{label}</a>)}</div></header>
 <div id="main-content">{children}</div><footer className="footer section-shell"><a href={BASE+"/"} onClick={e=>navigate(e,"/")}>ABID AHMED SHAIKH</a><span>Built as a technical artifact, not a template.</span><span>© 2026</span></footer></main>;
}