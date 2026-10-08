# Portfolio Implementation Status

Last updated: 2026-10-08 (Sprint A visual reset)  
> Branch: `portfolio-v1`  
> Source of truth: `docs/AI-PORTFOLIO-EXECUTION.md`

## Status legend

- **DONE** — implemented and validated at the repository/code level.
- **PARTIAL** — implementation exists, but evidence/validation remains.
- **NEXT** — highest-priority remaining work.
- **BLOCKED** — requires verified information or an external validation step.

## Current progress

| Phase | Status | Completed | Next work |
|---|---|---|---|
| P0 / Phase 0 — Repository Audit | DONE | Repository, dependencies, routes, data, deployment workflow and visual components inspected. | Re-run audit after major architectural changes. |
| P0 / Phase 1 — Information Architecture | PARTIAL | Lightweight multi-page router, shared layout/navigation/footer, 404 handling, GitHub Pages fallback strategy, centralized Vite-base-aware navigation, and static route entry-point generation for every public route. GitHub Pages `gh-pages` contains route-specific `index.html` files for direct nested loads. | External browser verification remains open because the live-site checker in this environment cannot access GitHub Pages; repository/deployment output verifies the required static route files. |
| P0 / Phase 2 — Landing Page | IN PROGRESS | Sprint A reset started: homepage moved from dashboard/card composition to editorial identity → context → experience → selected work → research → direction → contact hierarchy. | Validate production build, mobile behavior, accessibility and visual consistency; then continue with Sprint B experience/project refinement. |
| P0 / Phase 3 — Projects | PARTIAL | Projects index, project cards, dynamic project routes, normalized evidence-aware case-study schema, featured three projects, centralized base-path links, and case-study navigation with verified-resource/related-work slots. | Populate only verified problem/context/architecture/decision/trade-off/learning fields; add verified visuals and links.
| P0 / Phase 4 — Research | PARTIAL | Research page, Cognitrace, Green Passport, research visuals and recognition separation; unsupported award/publication claims are now explicitly withheld. | Verify links, publication/venue metadata, methodology/contribution evidence; the UI now has optional research-question, methodology, contribution and result slots that stay hidden until verified data is added. |
| P0 / Phase 5 — Achievements | PARTIAL | Achievements page, award section, Credly component, certificate component and credential data model; Credly embeds now defer loading until near viewport; seven certification IDs and issue months verified against the owner’s public LinkedIn profile. | Add public verification URLs where available and complete gallery audit. |
| P0 / Phase 6 — Experience | PARTIAL | Experience page and Bitkraft entry are implemented from repository data. | Verify responsibilities, technical context and evidence. |
| P0 / Phase 7 — About | DONE* | About page, education, technical direction, research trajectory and leadership data are implemented. | Final content truth/conciseness review. |
| P0 / Phase 8 — Contact | PARTIAL | Contact page, LinkedIn and GitHub links, CTA structure. | Verified email and resume when supplied; final external-link verification. |
| P0 / Phase 9 — Performance | PARTIAL | Route chunks and homepage visual effects are lazy-loaded; unused Spline dependency removed; GitHub Actions production build now passes. | Production build log recorded the main chunks at 210.26 kB / 65.93 kB gzip and 155.37 kB / 50.01 kB gzip; route chunks remain small and homepage visual effects are separate. Next: mobile/low-power runtime testing and third-party loading review. |
| P0 / Phase 10 — Accessibility | PARTIAL | Skip link, focus-visible styles, reduced-motion rules, semantic nav labels, Escape handling, active-page semantics, focus restoration, inert closed mobile nav, main landmark, 44px mobile nav controls, single-h1 homepage hierarchy. | Full keyboard/focus/contrast/link audit and browser verification. |
| P1 / Phase 11 — SEO / Sharing | PARTIAL | Route-specific titles/descriptions, static route-specific Open Graph/Twitter metadata generated at build time, canonical URLs, favicon, `robots.txt`, `sitemap.xml`, and a dedicated `og-image.svg` social preview are implemented. | Validate the generated image metadata after deployment and perform final search/social crawler verification. |
| P0 / Phase 12 — Final Validation | NOT STARTED | Production build/deployment CI is green, static nested route entry points are deployed, and production chunk sizes have been recorded. Browser/device validation and remaining P0 content/accessibility/performance checks are outstanding. | Execute full acceptance checklist after remaining P0 work. |

\* About is structurally complete; it still needs the final truth/quality review before final portfolio sign-off.

## Current blocker / validation state

- Latest implementation commits include `ce03e68453e0f2decb33eed50208a7429ab8aa6f` (semantic mobile navigation), `cda61beed6982e58c9b84b8621ff550b59b9de30` (serialized Pages deployments), and the social-preview increment (`4bcf09a4…`, `83684e93…`, `a0524b9a…`). The social-preview build completed successfully through the route-generation/output-verification stages; one deployment run failed only because concurrent publishers raced on the `gh-pages` ref. The workflow now cancels superseded deployment runs. The first concurrency-enabled run (`37345010099`) exposed a JSX regression in the navigation change before deployment; that source error has been corrected in `c2e4679775734552e93f4037d6c18a59f3e41aaf` and a fresh CI validation is pending.
- The research content gap is intentional: the new evidence fields are schema/UI slots, not invented content. The case-study content gap is intentional: the repository currently does not contain verified architecture, metrics, detailed personal contribution, trade-offs, learning narratives, or public project URLs for most projects. These must be supplied or independently verified before those sections can be marked complete.

- GitHub Actions run `37340152916` completed successfully for the project case-study navigation fix, including build, route generation, output verification and deployment. Accessibility/credential runs `37344674404` and `37344679055` completed successfully. Social-preview run `37344841012` built and verified the full production output successfully but lost the final `gh-pages` push to a concurrent publisher; the follow-up metadata run `37344847171` completed successfully. The deployment workflow now serializes/cancels superseded runs to prevent this race.
- `gh-pages` was inspected after deployment and contains route-specific HTML for `/projects`, every project detail route, `/research`, `/achievements`, `/experience`, `/about`, and `/contact`, plus `404.html`, `robots.txt`, `sitemap.xml`, and the favicon.
- The live-site browser checker could not access GitHub Pages from this environment, so external browser verification remains explicitly unconfirmed.

## Completed implementation increments

1. Introduced multi-page portfolio architecture without adding a routing dependency.
2. Added shared portfolio layout and navigation.
3. Added project index and dynamic project detail routes.
4. Added research, achievements, experience, about and contact routes.
5. Added GitHub Pages `dist/404.html` deployment fallback.
6. Added route-level lazy loading.
7. Lazy-loaded VGPU and Canvas homepage effects.
8. Evaluated and removed unused Spline dependency/configuration.
9. Added route-specific title and description metadata.
10. Added selected achievement evidence to the homepage.
11. Updated the authoritative execution specification with architecture/performance decisions.
12. Made routing/navigation derive the Vite base path instead of hard-coding `/portfolio`, preserving GitHub Pages deployment while keeping local development paths coherent.
13. Deferred Credly script loading until badges approach the viewport; the third-party embed remains non-blocking and singleton-loaded.
14. Hardened the mobile navigation toggle/link touch targets to 44px.
15. Added heading-level control to shared page headers so the homepage uses one h1 followed by section h2 headings; fixed the not-found home link to use the Vite base path.
16. Verified the seven listed certification IDs and issue months against the owner’s public LinkedIn profile, while leaving certificate verification URLs unset until direct public URLs are available.
17. Refined Ascend APEX recognition to the publicly corroborated nationwide first-place Xcelerate 2025 Oracle APEX Hackathon result.
18. Hardened certificate image/link accessibility and added Twitter card metadata to the static HTML shell.
19. Centralized Vite base-path generation for page links and removed remaining `/portfolio` assumptions from Home/Projects navigation.
22. Traced repeated GitHub Pages build failures to malformed homepage base-path expressions, corrected the remaining instances, and confirmed a successful GitHub Actions production build/deployment run (`37336270174`).
22. Refactored shared portfolio navigation/footer to consume the same centralized base-path helper, eliminating duplicate deployment-path logic from the layout.
20. Tightened research content truth: Cognitrace/Green Passport award and publication metadata is now marked pending verification until authoritative public evidence is available.
21. Removed the remaining hard-coded `/portfolio` assumption from Project Detail navigation and made project detail document titles use verified project titles when available.
23. Confirmed GitHub Actions production build/deployment success after the homepage route-link fixes.
24. Added static route entry-point generation so GitHub Pages serves real HTML at every public nested route, with route-specific title, description, Open Graph, Twitter and canonical metadata.
25. Added favicon, `robots.txt`, and `sitemap.xml` and verified them on the deployed `gh-pages` branch.
26. Recorded production bundle sizes from CI and modernized the Pages workflow to Node 24, current checkout/setup-node actions, compatible `npm install` (the repository does not currently contain a lockfile), and `peaceiris/actions-gh-pages@v4`.
27. Strengthened project case-study routes with optional verified-resource links and related-work navigation; empty link data remains hidden, so no unverified URLs are introduced.
28. Diagnosed and corrected the first deployment regression in the case-study navigation increment: an over-escaped external-URL regex caused the Vite build to fail; corrected the regex and queued a fresh CI validation.
29. Hardened accessibility and evidence presentation: increased the mobile navigation toggle to a 44px touch target, restricted certificate verification links to valid HTTP(S) URLs, and made certificate cards display verified credential IDs/issue dates instead of incorrectly labeling them as pending.
30. Added a dedicated technical social-preview artwork asset and wired `og:image` / large Twitter-card metadata into the static shell and generated nested route entry points, so route-specific pages share a consistent preview image without inventing project-specific imagery.
31. Hardened navigation semantics by exposing the mobile menu as a labelled `<nav>` landmark while preserving `aria-expanded`, `aria-controls`, Escape handling, focus restoration and inert closed-state behavior.
32. Serialized GitHub Pages deployments with workflow concurrency cancellation after diagnosing a non-code deployment race: the social-preview build passed, but two concurrent `gh-pages` publishers raced on the branch ref.
33. Corrected the mobile-navigation semantic landmark increment after CI caught an invalid JSX closing tag; the mobile menu now closes with `</nav>` and the follow-up production deployment completed successfully (`37345294174`, followed by docs validation `37345338343`).
34. Structured the Research page around optional evidence fields for research question/problem, methodology, personal contribution and result; fields remain empty until verified source material is available, while verified evidence and external links remain visible.


## V1 Redesign Direction (2026-10-08)

The portfolio visual strategy has been reset around a polished, editorial engineering-portfolio direction benchmarked against Brittany Chiang's current site. This is inspiration for hierarchy and restraint, not a clone. The existing multi-page router and GitHub Pages architecture remain in place.

### Direction now locked
- **Primary aesthetic:** restrained dark editorial engineering portfolio.
- **Primary hierarchy:** identity → experience → selected projects → research/writing → achievements → about/community → contact.
- **Typography/spacing:** large controlled display type, readable body copy, monospace metadata, generous whitespace, thin rules.
- **Navigation:** quieter desktop navigation and accessible mobile navigation.
- **Projects:** editorial archive and case studies, with real visuals only when verified.
- **Research:** concise research archive; detailed methodology/contribution/result only when verified.
- **Motion:** subtle micro-interactions and optional ambient effects; no animation dependency for comprehension.
- **VGPU/Canvas:** retained only as restrained enhancement if performance/accessibility remain strong.
- **Non-goals:** no dashboard aesthetic, no fake evidence maps, no fabricated screenshots/metrics/research results, no unnecessary WebGL showcase, no clone of the reference site.

### V1 implementation queue
1. **IN PROGRESS — Visual reset:** simplify navigation, redesign global spacing/type/rules, and replace dashboard/card-heavy homepage composition.
2. **NEXT — Experience:** make verified professional experience a major homepage proof section and refine the full Experience page.
3. **NEXT — Projects:** replace the generic evidence-map presentation with restrained project identity/media panels; redesign Projects and case-study pages.
4. **NEXT — Research/Achievements:** refine both into editorial/evidence-led archives while preserving truth constraints and lazy-loaded Credly.
5. **NEXT — Secondary pages:** refine About and Contact; add résumé/writing only when verified assets/content are supplied.
6. **NEXT — Release hardening:** desktop/mobile/keyboard/reduced-motion/contrast/performance/link checks, production build, deployment, and route-by-route acceptance.

### Documentation source of truth
`docs/AI-PORTFOLIO-EXECUTION.md` now contains the authoritative **V1 RELEASE DIRECTION — BRITTANY CHIANG-INSPIRED ENGINEERING PORTFOLIO** section. Future AI implementation loops must follow that section and must not revert to the earlier gallery/constellation/WebGL-heavy direction.


## Sprint A — Visual Reset (2026-10-08)

### Completed:
- Reworked the homepage composition around identity, context, experience, selected projects, research, technical direction, community and contact.
- Simplified primary navigation to Home, Projects, Research, Experience, About and Contact; Achievements remains a dedicated route without competing for primary navigation weight.
- Replaced the fixed pill-style navigation treatment with a restrained full-width editorial header while preserving the existing router, base-path handling and mobile accessibility behavior.
- Replaced ProjectVisual's generic "Evidence map" presentation with a restrained project identity/evidence panel that does not imply a structured visualization where none exists.
- Added a v1 editorial visual layer for typography, spacing, thin rules, metadata, project rows, experience rows, research rows and responsive behavior.

### Validated:
- Repository-level source inspection completed for the authoritative execution specification, project status, homepage, layout/navigation, project visual, portfolio data and GitHub Pages workflow.
- Existing routing/deployment architecture was preserved.
- Automated production validation is pending after the visual reset changes.

### Outstanding:
- Production build/CI validation of the Sprint A changes.
- Browser-level desktop/mobile visual review remains unavailable from the current environment.
- Full keyboard, contrast, reduced-motion and link audit remains pending.

### Next:
- Complete Sprint B Projects refinement and editorial project archive.
- Then validate the combined Sprint A + Sprint B changes in CI/build and perform route/accessibility checks.

## Sprint B — Experience (2026-10-08)

### Completed:
- Reworked the dedicated Experience page into the same editorial system established on the homepage.
- Made the verified Bitkraft Technologies LLP Software Engineer Intern entry the clear focal point.
- Preserved the three verified focus areas: AR & Game Engineering, Backend Platform Engineering, and AI Pipeline Engineering.
- Added an explicit evidence boundary so missing responsibilities, project names, ownership and measurable outcomes are not inferred.

### Validated:
- Experience page consumes the existing structured experience data.
- No new professional claims or unverified metrics were introduced.
- Responsive styling was added for narrow viewports.

### Outstanding:
- Production build/CI validation for the combined Sprint A + Sprint B changes.
- Browser-level visual and keyboard review remains pending.
- Project archive and case-study presentation still need the Sprint B treatment.

### Next:
- Redesign /projects as an editorial archive with featured work clearly separated from secondary work.
- Then refine project detail presentation without fabricating missing case-study evidence.
