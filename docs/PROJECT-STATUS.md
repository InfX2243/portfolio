# Portfolio Implementation Status

Last updated: 2026-10-08 (Sprint F route/metadata/link audit)  
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
| P0 / Phase 0 — Repository Audit | DONE | Repository, dependencies, routes, data, deployment workflow and visual components inspected; Sprint D re-audited routing/navigation and Sprint E re-audited shared path handling and obsolete visual CSS. | Re-run audit after major architectural changes; Sprint F completed a route/metadata/link consistency pass. |
| P0 / Phase 1 — Information Architecture | PARTIAL | Lightweight multi-page router, shared layout/navigation/footer, 404 handling, GitHub Pages fallback strategy, centralized Vite-base-aware navigation, and static route entry-point generation for every public route. GitHub Pages `gh-pages` contains route-specific `index.html` files for direct nested loads. | External browser verification remains open because the live-site checker in this environment cannot access GitHub Pages; repository/deployment output verifies the required static route files. |
| P0 / Phase 2 — Landing Page | PARTIAL | Sprint A editorial hierarchy is implemented and the homepage deployment has repeatedly passed production build/deploy validation. | Final browser/device, accessibility and content-truth review; route metadata is now shared between runtime and static generation. |
| P0 / Phase 3 — Projects | PARTIAL | Projects index, project cards, dynamic project routes, normalized evidence-aware case-study schema, featured three projects, centralized base-path links, and case-study navigation with verified-resource/related-work slots. | Populate only verified problem/context/architecture/decision/trade-off/learning fields; add verified visuals and links.
| P0 / Phase 4 — Research | PARTIAL | Research page is now an editorial evidence archive; Cognitrace and Green Passport remain data-driven; unsupported award/publication claims are explicitly withheld; research visual no longer presents a fabricated evidence map. | Verify links, publication/venue metadata, methodology/contribution evidence; optional evidence fields remain hidden until verified. |
| P0 / Phase 5 — Achievements | PARTIAL | Achievements is now an editorial evidence archive with separated recognition, selected certifications, Credly embeds and credential inventory. Credly remains near-viewport lazy-loaded; seven certification IDs and issue months remain repository-verified. | Add public verification URLs where available and complete browser/third-party embed audit. |
| P0 / Phase 6 — Experience | PARTIAL | Experience page and Bitkraft entry are implemented from repository data. | Verify responsibilities, technical context and evidence. |
| P0 / Phase 7 — About | DONE* | About page, education, technical direction, research trajectory and leadership data are implemented. | Final content truth/conciseness review. |
| P0 / Phase 8 — Contact | PARTIAL | Contact page, LinkedIn and GitHub links, CTA structure. | Verified email and resume when supplied; final external-link verification. |
| P0 / Phase 9 — Performance | PARTIAL | Route chunks and homepage visual effects are lazy-loaded; unused Spline dependency removed; GitHub Actions production build now passes. | Production build log recorded the main chunks at 210.26 kB / 65.93 kB gzip and 155.37 kB / 50.01 kB gzip; route chunks remain small and homepage visual effects are separate. Next: mobile/low-power runtime testing and third-party loading review. |
| P0 / Phase 10 — Accessibility | PARTIAL | Skip link, focus-visible styles, reduced-motion rules, semantic nav labels, Escape handling, active-page semantics, focus restoration, inert closed mobile nav, main landmark, 44px mobile nav controls, single-h1 homepage hierarchy. | Full keyboard/focus/contrast/link audit and browser verification. |
| P1 / Phase 11 — SEO / Sharing | PARTIAL | Route-specific titles/descriptions, static route-specific Open Graph/Twitter metadata generated at build time, canonical URLs, favicon, `robots.txt`, `sitemap.xml`, and a dedicated `og-image.svg` social preview are implemented. | Validate the generated image metadata after deployment and perform final search/social crawler verification. |
| P0 / Phase 12 — Final Validation | PARTIAL | Production build/deployment CI is green; Sprint D corrected a base-path normalization edge case and Sprint E centralized the fix across router/layout while removing confirmed obsolete visual CSS. Browser/device validation and remaining P0 content/accessibility/performance checks are outstanding. | Confirm latest Sprint F link-hardening CI, then complete browser/device acceptance and final V1 sign-off when available. |

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
1. **DONE — Visual reset:** editorial hierarchy, spacing, navigation and homepage composition established.
2. **DONE — Experience:** editorial experience page and verified Bitkraft entry established.
3. **DONE — Projects:** editorial project archive and evidence-led case-study routes established.
4. **DONE — Research/Achievements:** editorial evidence archives, restrained research signal panel, primary navigation and Credly failure recovery established.
5. **DONE — Secondary pages:** About and Contact remain structurally complete with evidence boundaries; further content additions require verified source material.
6. **IN PROGRESS — Release hardening:** route/base-path, accessibility, metadata, external-link, performance and deployment acceptance audit; Sprint E cleanup is implemented and awaiting CI confirmation.

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
- Refine project detail presentation without fabricating missing case-study evidence.
- Then validate the combined Sprint A + Sprint B changes in CI/build and perform route/accessibility checks.

## Sprint B — Projects (2026-10-08)

### Completed:
- Reworked /projects into an editorial archive with a clear Featured Work section and a quieter Other Work section.
- Preserved project ordering and existing verified data while giving Cognitrace, Ascend APEX and Green Passport stronger visual priority.
- Replaced generic dashboard/card presentation with project rows, technical metadata and restrained project visual panels.
- Kept project links route-aware through the existing base-path helper.
- Preserved the evidence-first rule: missing case-study details remain absent rather than being inferred.

### Validated:
- Projects page consumes the existing structured projects data.
- Featured and secondary lists are derived from the existing featured flag; no project facts were duplicated into the component.
- Responsive layouts were added for tablet and mobile.

### Outstanding:
- Project detail page still needs visual refinement to match the new archive.
- Production build/CI validation for the combined Sprint A + Sprint B changes.
- Browser-level visual, keyboard, contrast and reduced-motion review remains pending.

### Next:
- Validate all Sprint B routes and the production build.
- Then begin Sprint C: Research/Achievements editorial refinement.

## Sprint B — Project Detail (2026-10-08)

### Completed:
- Reworked project detail routes into an evidence-led editorial case-study structure.
- Added clear hierarchy for recognition, contribution, technical focus, verified case-study fields, resources, evidence boundaries and related work.
- Preserved conditional rendering so null/unavailable case-study fields do not create empty sections.
- Preserved existing project links and base-path routing.
- Kept the existing project data model as the source of truth; no project metrics, architecture details or research claims were invented.

### Validated:
- Project detail content is derived from the existing project data.
- Missing case-study fields remain hidden.
- Related projects are derived from the existing project collection.
- Responsive styling was added for tablet and mobile layouts.

### Outstanding:
- The latest pre-Sprint-C branch commit (`de5e85b14f671ba0aec60f8899d892c753774286`) passed the GitHub Pages production build/deployment workflow (`37767449590`). The current Sprint-C audit changes are running through the same workflow; status must be rechecked before marking them validated.
- Direct route/refresh validation on GitHub Pages.
- Browser-level visual, keyboard, contrast and reduced-motion review.
- Research and Achievements remain to be refined.

## Sprint C — Research / Achievements + Audit (2026-10-08)

### Completed:
- Reworked Research into an editorial archive with explicit evidence boundaries and conditional research-question, methodology, contribution and result fields.
- Reworked Achievements into separated recognition, selected certifications, Credly badges and complete credential inventory sections.
- Restored Achievements to primary desktop/mobile navigation to match the authoritative information architecture.
- Replaced the Research "Evidence map" visual with a restrained research-signal panel so the page does not imply unsupported methodology or relationships.
- Fixed Credly singleton-loader recovery after a failed third-party script load; subsequent badge mounts can retry instead of waiting indefinitely.
- Audited the current implementation against the authoritative execution specification and corrected the stale CI-status statement in this document.

### Validated:
- Individual Research, Achievements, ResearchVisual and Credly changes have each produced successful GitHub Actions deployment runs.
- The branch's previous complete implementation state had a successful production build/deployment.
- Current combined Sprint C styling/build validation is in progress on the latest branch commit.

### Outstanding:
- Final combined Sprint C CI result and deployment confirmation.
- Browser/device visual review, keyboard/focus audit, contrast audit, reduced-motion review and third-party Credly runtime verification.
- Verified public research/award/certificate URLs remain outstanding where the repository does not contain them.

### Next:
- Confirm the latest combined CI run.
- Then perform release-hardening audit across Home, Projects, Research, Achievements, Experience, About and Contact before final V1 acceptance.


## Sprint D — Release Hardening Audit (2026-10-08)

### Completed:
- Removed the unused legacy `MobileNav.jsx`, `SpotlightCard.jsx`, and `CanvasParticleReveal.jsx` components after confirming the active page/layout implementation does not import them.
- Re-audited the current `portfolio-v1` implementation against the authoritative V1 release direction before making release-hardening changes.
- Audited the client router and GitHub Pages base-path behavior and found an edge case where any pathname beginning with the base string could be treated as being inside the portfolio base path.
- Hardened `src/app/AppRouter.jsx` so the base path is stripped only for an exact base-path match or a real child route (`/portfolio/...`), while local-root development remains supported.
- Preserved existing route metadata, canonical URL generation, lazy page loading, static nested route generation and GitHub Pages fallback behavior.
- Confirmed the current mobile navigation uses the shared `PortfolioLayout` implementation; the standalone legacy `MobileNav.jsx` component is not part of the active layout path and remains a cleanup candidate rather than being reintroduced.

### Validated:
- The cleanup is source-level only and does not change the active route/layout implementation.
- The latest pre-Sprint-D implementation commit `3f0031c0b7a63ffd1a1c74109209c3f2d6200dec` passed the full GitHub Pages workflow (`37767830050`), including npm install, production build, static route generation/output verification and deployment.
- The status-only follow-up commit `16d85e0170ffd869c726631f65cd18978609b57f` also passed its workflow (`37767872703`).
- Sprint D router hardening is committed as `e6d7c4c2ddc06f9df73c129fbfc080f5a8105ce0`; the status-only documentation commit is `16a4409268e939b3daa5e31d46934c31af1d9b58`, followed by the cleanup commits `c4c9d052cd391748217945acc2debea39289cc39`, `b21dce79f21e2210aadb0cfcaa86a7ae57659267`, and `f41a4fbf71f6fc03c2b05d19a48d01ea91ecbd7d`. Their push-triggered workflow results should be rechecked before marking this increment fully CI-validated.
- Browser/device validation remains explicitly unconfirmed because the available environment cannot perform a reliable live GitHub Pages browser review.

### Outstanding:
- Confirm the Sprint D/release-hardening GitHub Actions run after the cleanup commits settle.
- Complete manual browser/device review for desktop/mobile layout, keyboard focus, contrast, reduced motion, direct nested-route refresh, external links and Credly runtime fallback.
- Audit and prune only remaining demonstrably dead legacy CSS after confirming no active component depends on it.
- Verify remaining public research/award/certificate URLs only when authoritative sources are available.

### Next:
- Confirm Sprint D CI after the cleanup commits.
- Continue with route-by-route acceptance documentation and the final V1 sign-off checklist when browser validation is available.


### Sprint F — Route / Metadata / Link Audit (2026-10-08)

### Completed:
- Confirmed the final Sprint E CSS cleanup workflow is green (37770445915), so the previously pending Sprint E source cleanup is now production-build/deployment validated.
- Audited the route architecture and found duplicated page metadata between the client router and static route generator.
- Added src/data/routes.js as the shared public-route and metadata source for both runtime document metadata and GitHub Pages static entry-point generation.
- Updated the client router to consume the shared route metadata instead of maintaining a second page-title/description map.
- Updated static route generation to consume the same public-route manifest, including all five project detail routes.
- Audited external links and hardened every current target="_blank" portfolio link to use rel="noopener noreferrer".
- Verified the deployed gh-pages tree contains static entry points for Home, Projects, all five project details, Research, Achievements, Experience, About, Contact, plus 404.html.

### Validated:
- Route-manifest creation and router integration passed GitHub Actions workflows 37771255163 and 37771269493.
- Static route-generator integration passed workflow 37771280638.
- Sprint E final CSS cleanup passed workflow 37770445915.
- Source inspection confirms internal navigation uses the centralized Vite base-path helper and external links use explicit safe opener relationships.
- Deployed gh-pages inspection confirms the expected nested route HTML files exist.

### Outstanding:
- The three final external-link hardening commits are currently running through GitHub Actions; the latest link commit must be rechecked before this Sprint F increment is marked fully CI-validated.
- Browser/device visual validation remains unavailable in this environment.
- Keyboard-only focus, contrast, reduced-motion runtime behavior, Credly third-party fallback, and live external-link verification still need browser-level validation.
- Verified public research/award/certificate URLs remain outstanding where authoritative sources are not yet present.

### Next:
1. Confirm the latest external-link hardening workflow is green and update this status record with the final run ID.
2. Perform final browser/device acceptance when a reliable live-site browser is available.
3. Complete content/evidence verification and issue the final V1 release sign-off only after those checks pass.

## Sprint E — Routing / Style Audit (2026-10-08)

### Completed:
- Re-audited the release-hardening implementation after Sprint D and confirmed the recent deployment cleanup runs are green through the latest status commit.
- Centralized `normalizePath()` in `src/app/basePath.js` so the router and shared portfolio layout use the same safe base-path semantics.
- Fixed the remaining navigation-level variant of the base-path prefix edge case: paths are only stripped when they equal the configured base path or begin with the base path followed by `/`.
- Removed confirmed obsolete pre-editorial CSS from `src/styles.css`, including legacy spotlight-card, project/research flow, particle-layer and Spline-shell selectors that no longer have active component consumers.
- Preserved the active WebGPU enhancement styles used by `VgpuField`; no active editorial project/research signal styles were removed.
- Kept the cleanup targeted rather than rewriting the stylesheet wholesale.

### Validated:
- Sprint D cleanup workflows previously completed successfully, including the latest status synchronization run.
- Source-level inspection confirmed the deleted legacy visual components are no longer present and the active homepage uses `VgpuField` plus the editorial `ProjectVisual` / `ResearchVisual` components.
- Source-level inspection confirmed no remaining references to the removed legacy selectors after the final CSS cleanup.

### Outstanding:
- Latest Sprint E source commits still require their GitHub Actions production build/deployment confirmation.
- Browser/device visual validation remains unavailable in this environment.
- Route-by-route acceptance still needs explicit verification of nested static entry points, active navigation, metadata, keyboard/focus behavior, contrast, reduced motion and external links.

### Next:
1. Confirm the latest Sprint E GitHub Actions runs and fix any build/deployment regressions.
2. Perform a route-by-route source acceptance audit for Home, Projects, all three project details, Research, Achievements, Experience, About, Contact and Not Found.
3. Audit external links and target/rel behavior, then record final V1 release-hardening status.
