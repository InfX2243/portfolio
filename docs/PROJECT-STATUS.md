# Portfolio Implementation Status

Last updated: 2026-10-11 (Sprint V — archive page redesign, content deduplication and automated accessibility smoke audit)
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
| P0 / Phase 3 — Projects | PARTIAL | Projects index and case-study routes now consume supplied screenshots for Ascend APEX, Cognitrace, Green Passport and the AWS Web Application Builder; Ascend APEX has a selected role-based product walkthrough and national recognition leads featured work. | Add verified source links and individual contribution details; keep infrastructure/architecture claims limited to reviewed source material.
| P0 / Phase 4 — Research | PARTIAL | Research page is an editorial evidence archive; unsupported award/publication claims are withheld, and Cognitrace no longer repeats unverified recognition status across its metadata fields; the research visual hides absent recognition instead of rendering a pending-verification placeholder. | Verify links, publication/venue metadata, methodology/contribution evidence; optional evidence fields remain hidden until verified. |
| P0 / Phase 5 — Achievements | PARTIAL | Achievements is now an editorial evidence archive with separated recognition, selected certifications, Credly embeds and credential inventory. Credly remains near-viewport lazy-loaded; seven certification IDs and issue months remain repository-verified. | Add public verification URLs where available and complete browser/third-party embed audit. |
| P0 / Phase 6 — Experience | PARTIAL | Experience page now includes the supplied Bitkraft logo; the role label reflects the latest user-stated title, Software Developer Intern. | Confirm the official HR/offer-letter title before final publication; verify responsibilities, technical context and evidence. |
| P0 / Phase 7 — About | DONE* | About page, education, technical direction, research trajectory, supplied portrait, and AWS Student Builder Group / ACM marks are integrated. | Final content truth/conciseness review. |
| P0 / Phase 8 — Contact | PARTIAL | Contact page, LinkedIn and GitHub links, and supplied résumé PDF link are integrated. | Verify the résumé is current before release; verify public links and decide whether to add an email address. |
| P0 / Phase 9 — Performance | PARTIAL | Route chunks and homepage visual effects are lazy-loaded; unused Spline dependency removed; GitHub Actions production build now passes. | Production build log recorded the main chunks at 210.26 kB / 65.93 kB gzip and 155.37 kB / 50.01 kB gzip; route chunks remain small and homepage visual effects are separate. Next: mobile/low-power runtime testing and third-party loading review. |
| P0 / Phase 10 — Accessibility | PARTIAL | Skip link, focus-visible styles, reduced-motion rules, semantic nav labels, Escape handling, active-page semantics, focus restoration, inert closed mobile nav, main landmark, 44px mobile nav controls, single-h1 homepage hierarchy. | Full keyboard/focus/contrast/link audit and browser verification. |
| P1 / Phase 11 — SEO / Sharing | PARTIAL | Route-specific titles/descriptions, static route-specific Open Graph/Twitter metadata generated at build time, canonical URLs, favicon, `robots.txt`, `sitemap.xml`, and a dedicated `og-image.svg` social preview are implemented. | Validate the generated image metadata after deployment and perform final search/social crawler verification. |
| P0 / Phase 12 — Final Validation | PARTIAL | Production build and GitHub Pages deployment passed on workflow 38141920169 after Sprint S integration. The deployed tree contains all nested routes and sampled supplied assets. | Complete real-browser/device, keyboard, contrast, reduced-motion, Credly and final content checks before formal V1 sign-off. |

\* About is structurally complete; it still needs the final truth/quality review before final portfolio sign-off.

## Current blocker / validation state

- Sprint E final CSS cleanup is production-build/deployment validated by workflow `37770445915`.
- Sprint F shared route metadata/runtime integration is validated by workflows `37771255163`, `37771269493` and `37771280638`.
- Sprint F external-link hardening is validated by workflows `37771291284`, `37771299338` and `37771306145`.
- The deployed `gh-pages` tree was inspected and contains route-specific HTML for `/`, `/projects`, all five project detail routes, `/research`, `/achievements`, `/experience`, `/about` and `/contact`, plus `404.html`, `robots.txt`, `sitemap.xml` and the favicon.
- Route metadata was also checked directly on the deployed branch: every public route has the expected title and canonical URL, and the five project detail routes resolve to their project-specific metadata.
- The live-site browser checker could not access GitHub Pages from this environment. Direct inspection of the deployed `gh-pages` tree confirms the Home, Projects, Ascend APEX, Research, Achievements, Experience, About and Contact route entrypoints, plus sampled supplied image/logo/résumé assets. Real-browser visual and interaction verification remains explicitly unconfirmed.
- The remaining content/evidence gap is intentional: the repository still lacks verified architecture, metrics, detailed personal contribution, trade-offs, learning narratives, and public project URLs for most projects. These must be supplied or independently verified before those sections are marked complete.

## Sprint O — Profile accuracy and personal voice (2026-10-11)

- Updated the Bitkraft role label to **Software Developer Intern**, matching the latest direct statement in `docs/ABOUT-ME.md`; the official HR/offer-letter title still needs confirmation before final publication.
- Reworked the About page JSX into readable, maintainable component structure without changing its information architecture.
- Added the user's stated learning philosophy as a single restrained quote on About, giving the page a personal signal without turning it into repeated homepage slogan copy.
- Added responsive-friendly quote styling using existing design tokens; no new dependencies or unsupported achievement claims were introduced.
- Validation: GitHub Actions passed for the role label, About-page copy/layout, quote styling, and quote selector correction (runs [38117320441](https://github.com/InfX2243/portfolio/actions/runs/38117320441), [38117323555](https://github.com/InfX2243/portfolio/actions/runs/38117323555), [38117327561](https://github.com/InfX2243/portfolio/actions/runs/38117327561), and [38117342932](https://github.com/InfX2243/portfolio/actions/runs/38117342932)). Browser and assistive-technology review remain outstanding.

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


### Sprint G — Deployment / Configuration / Build Validation (2026-10-08)

### Completed:
- Audited the deployment configuration and found the GitHub Pages base path and site origin were still duplicated between Vite configuration and the static route generator.
- Added `src/config/site.js` as the shared deployment configuration source.
- Updated Vite, runtime base-path handling, and static route generation to consume the same base path.
- Removed the remaining hardcoded social-image host from the route generator.
- Added `scripts/validate-route-build.mjs` to validate generated public routes, unique titles, descriptions, canonical URLs and required deployment assets.
- Wired the validation script into the production `build` command so route/metadata drift becomes a build failure instead of a release-time discovery.
- Reconfirmed the previous Sprint F documentation and link-hardening workflows are green.

### Validated:
- Shared deployment configuration commits passed workflows `37771672325` and `37771678458`.
- Final Sprint F documentation synchronization passed workflow `37771471561`.
- The combined Sprint G build-validation workflow is currently pending/processing and must be confirmed before this sprint is marked CI-complete.

### Outstanding:
- Confirm the final Sprint G production build with the new route validator.
- Browser/device validation remains unavailable in this environment.
- Runtime accessibility, Credly third-party rendering/fallback and final evidence verification remain outstanding.

### Next:
1. Confirm Sprint G CI and fix any validator/build failures.
2. Continue final release audit across accessibility, performance and third-party runtime behavior.
3. Perform final browser/device acceptance and evidence verification before V1 sign-off.

## Sprint F — Route / Metadata / Link Audit (2026-10-08)

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
- The three external-link hardening commits completed successfully: workflows 37771291284, 37771299338 and 37771306145.
- Browser/device visual validation remains unavailable in this environment.
- Keyboard-only focus, contrast, reduced-motion runtime behavior, Credly third-party fallback, and live external-link verification still need browser-level validation.
- Verified public research/award/certificate URLs remain outstanding where authoritative sources are not yet present.

### Next:
1. Final Sprint F CI confirmation is complete; external-link hardening is validated by workflows 37771291284, 37771299338 and 37771306145.
2. Perform final browser/device acceptance when a reliable live-site browser is available.
3. Complete content/evidence verification and issue the final V1 release sign-off only after browser/device checks and evidence verification pass.

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


## 2026-10-10 — Canonical personal profile

- **DONE:** Added `docs/ABOUT-ME.md` as the durable, evidence-conscious profile/context source for AI-generated portfolio content.
- **DONE:** Documented the user's stated engineering mindset, learning philosophy, portfolio goals, visual reference, multi-page preference, and repository context.
- **DONE:** Explicitly marked the supplied résumé as outdated (last updated 2026-05-17 per user) and listed personal/professional facts that must not be guessed.
- **DONE:** Added instructions for future AI sessions to read the profile before writing personal content and to keep this file aligned with new direct user confirmations.
- **DONE:** Added the user's Round 1 answers and follow-up examples to `docs/ABOUT-ME.md`, keeping current self-reported details, self-assessments, unverified achievement leads, and aspirations separate.
- **DONE:** Updated `docs/portfolio-content.md` with the latest user-reported education timeline and current role title, plus internal notes on positioning and candidate achievement leads. Did not promote unverified examples into confirmed portfolio achievements.
- **NEXT:** Ask targeted follow-ups about the Oracle APEX enterprise application/certification, the full-stack app and AWS Builder Jacket, the RAG bootcamp system, and the specific AWS Academy optimization example. Confirm official education institution/job title and exact dates before final publication.
- **Scope note:** This change is documentation/context only. It does not claim that portfolio UI content has already been rewritten from the profile or that the profile's facts have all been résumé-verified.


## 2026-10-10 — Round 1 personal discovery captured

- **DONE:** Updated `docs/ABOUT-ME.md` with the user's Round 1 answers and follow-up answers: current situation, interests, Tony Stark/JARVIS inspiration, stated strengths and values, autonomy preference, and 3–5 year ambitions.
- **DONE:** Recorded the user-reported current education as B.E. Information Technology, Semester 7, expected graduation 2027, and current role as Software Developer Intern at Bitkraft.
- **DONE:** Updated `docs/portfolio-content.md` with the latest role-title statement and internal personal-brand/achievement-lead notes. Kept the older “Software Engineer Intern” title discrepancy visible for confirmation.
- **DONE:** Captured Oracle APEX, full-stack/AWS Builder Jacket, RAG bootcamp, touch-typing, and AWS Academy examples as **user-reported leads requiring detail/evidence**, not as independently verified achievements.
- **DONE:** Explicitly categorized industry leadership, independent revenue, and building a technology venture as aspirations, not current accomplishments.
- **NEXT:** Follow up on concrete project details and evidence; confirm official employer title, institution name, and relevant dates. Review the outdated résumé as a secondary reference only; the user's recent direct statements take precedence when there is a discrepancy.
- **Scope:** Documentation/content-source update only. This does not claim that public UI copy has been rewritten, that all facts are independently verified, or that a build/deployment was run.


## 2026-10-10 — Portfolio product requirements baseline

- **DONE:** Created `docs/PORTFOLIO-REQUIREMENTS.md` as the product-level requirements baseline for the official V1 portfolio.
- **Captured:** target audiences, visitor goals, multi-page information architecture, page-level content expectations, evidence/content integrity rules, visual direction already agreed, engineering/accessibility/performance requirements, release scope, current implementation baseline, and V1 acceptance criteria.
- **OPEN:** Detailed design decisions are intentionally reserved for a short user-led design discussion: hero concept, visual identity/palette, personal imagery, real project visuals, motion intensity, homepage emphasis, how visible the Tony Stark/JARVIS inspiration should be, and resume CTA placement.
- **NEXT:** Discuss and lock the visual direction before major visual implementation changes. Then audit the current branch against the requirements, address release blockers, and keep this status file synchronized.
- **Scope note:** Requirements documentation only. No portfolio UI, application code, or deployment was changed or validated in this increment.


## 2026-10-10 — Portfolio visual direction agreed

- **DONE:** Captured the user's confirmed design choices in docs/PORTFOLIO-REQUIREMENTS.md: technical/futuristic hero, refined dark technical theme, immersive 3D/technical effects with performance guardrails, and subtle Tony Stark/JARVIS-inspired details.
- **DONE:** Added concrete page-by-page design direction for Home, Projects, project details, Research, Achievements, Experience, About, Contact, and Not Found.
- **DONE:** Defined the visual system (near-black/graphite, controlled cyan/blue accent, editorial typography, restrained mono labels, schematic details), hero behavior/fallbacks, motion/accessibility requirements, and criteria for adding any visual dependency.
- **NEXT:** Inspect the current hero implementation, design tokens, and bundle before selecting the lowest-cost implementation path. Prototype the hero incrementally, then validate build, bundle impact, responsive behavior, reduced motion, and runtime fallback.
- **BLOCKED FOR FINAL SIGN-OFF:** Verify authentic project/research visuals and public links; confirm official Bitkraft title/dates and institution spelling; use an updated resume before presenting a current resume-download CTA.
- **Scope note:** This increment updates product/design documentation only. No application UI, source code, build, or deployment was changed or validated.


## Sprint H — Systems-orbit hero foundation (2026-10-11)

### Completed
- Audited the current homepage hero and confirmed it had strong editorial typography and a lazy-loaded WebGPU line field, but no distinct system object to carry the agreed technical/futuristic direction.
- Added `src/components/HeroSystemVisual.jsx`: a custom decorative SVG system illustration with orbit paths, connected nodes, a central modular core, and restrained technical annotations.
- Integrated the illustration into the Home hero and replaced the former right-side text block with a responsive engineering-focus strip.
- Added responsive desktop/tablet/mobile styling and low-amplitude orbit-line motion; the SVG remains the primary visual when motion is reduced.
- Kept the illustration dependency-free and used the existing palette. No external image, fabricated project screenshot, or new 3D library was added.

### Validation
- Source files and GitHub Actions workflow were inspected after the changes.
- Workflow `38081940013` exposed pre-existing route-build validation defects: incorrect nested/asset paths and missing homepage metadata generation. Follow-up CI runs also caught a generator syntax issue and escaped-title comparison/404 timing assumptions; each was corrected in source and the latest workflow was rerun.
- Fixed `scripts/generate-route-pages.mjs` to apply canonical route metadata to the homepage before generating nested route entry points.
- Fixed `scripts/validate-route-build.mjs` to resolve nested route/asset paths correctly, compare HTML-escaped metadata, and validate assets that exist before the deployment-only 404 fallback step.
- **Validated:** GitHub Actions workflow `38082118258` (run 305, commit `a5508fb39fc75a531371e19a9e4b44e49a9eacdd`) passed Vite production build, route generation/metadata validation, the 404 fallback step, output checks, and deployment to `gh-pages`.
- Added a performance follow-up in `src/components/VgpuField.jsx`: skip GPU initialization for reduced-motion, small-viewport, coarse-pointer, low-core-count, and data-saver contexts; stop the frame loop when the hero is off-screen or the document is hidden; resume only when visible again.
- **Validated:** workflow `38082205722` passed the production build, route/metadata validation, fallback generation, output guard, and deployment for the GPU lifecycle change.
- **Still outstanding:** actual browser rendering, responsive visual balance, contrast, keyboard flow, reduced-motion runtime behavior, and runtime performance. CI passing does not replace browser/device acceptance.

### Next
1. Review the deployed hero at desktop, tablet, and narrow mobile widths; check that the SVG never competes with headline/calls to action.
2. Refine the shared visual system only after the hero composition is accepted.


## Sprint I — Navigation duplication fix (2026-10-11)

### Completed
- Traced duplicated top-navigation links to a CSS specificity collision: the broad `.nav nav` selector applied `display: flex` to both the desktop navigation and the mobile menu, overriding the mobile panel's hidden state.
- Scoped shared navigation layout and hover selectors to the direct `.desktop-nav` child and scoped mobile-panel visibility/layout selectors to the direct `.mobile-nav-panel` child.
- Preserved the existing route list, active-route semantics, mobile toggle ARIA state, Escape dismissal, link-selection closure, focus restoration, and inert closed state.

### Validation
- Source-level selector checks confirm the broad `.nav nav` selectors were removed and the desktop and mobile navigation now have separate display rules.
- **Validated:** GitHub Actions workflow [38082452851](https://github.com/InfX2243/portfolio/actions/runs/38082452851) passed after the navigation CSS change.
- Browser/device verification is still outstanding and must not be inferred from CI alone.

### Next
1. Continue the visual audit with the project archive and case-study pages, preserving the evidence-first content rules.
2. Complete browser checks for desktop/tablet/mobile navigation, keyboard focus, and menu dismissal when a browser runtime is available.


## Sprint J — Case-study content cleanup (2026-10-11)

### Completed
- Audited the project detail template against the current data model and found that generic fallback copy was being rendered as personal contribution, outcome, and evidence.
- Case-study pages now suppress generic placeholder statements that say details are pending verification or merely describe the project as an exploration.
- Technical-focus tags are no longer repeated as if they were project-specific technical decisions; that section appears only when actual decision details exist in the case-study data.
- Recognition is not repeated as an outcome when both fields contain the same award statement.
- When personal contribution details are not yet supplied, the technical-focus panel uses the available width rather than leaving an empty second column.
- No project facts, metrics, URLs, or responsibilities were invented.

### Validation
- **Validated:** GitHub Actions workflow [38082557265](https://github.com/InfX2243/portfolio/actions/runs/38082557265) passed the production build, route/metadata validation, fallback generation, output guard, and deployment after the case-study cleanup.
- Browser-level rendering and responsive visual review remain outstanding.

### Next
1. Review the projects archive and case-study pages in a browser at desktop, tablet, and mobile widths when browser access is available.
2. Continue the visual hierarchy audit without inventing project evidence; collect real contribution, architecture, and result details before adding them to case studies.

## Sprint K — Responsive navigation and case-study density (2026-10-11)

### Completed
- Continued the visual audit and found a second navigation-specificity issue: the mobile breakpoint hid .desktop-nav with a lower-specificity selector, so the desktop links could remain visible beside the mobile menu toggle. Updated the rule to target .nav > .desktop-nav, matching the scoped desktop navigation selector.
- Removed the repeated “Evidence boundary” boilerplate from every project case study. The page already suppresses missing/unverified sections, so repeating a generic explanation added noise without adding project-specific evidence.
- No project claims or technical details were added.

### Validation
- **Pending:** GitHub Actions production build and deployment for commits 829810987c9242f395838a79c006be020461eb65 (responsive navigation) and 9cc5f30e8047d390e06c071b4cfcd4dd41d930f1 (case-study density).
- Browser-level desktop/mobile visual validation remains outstanding.

### Next
1. Confirm the source workflow is green for both changes.
2. Continue the editorial hierarchy and responsive layout audit; keep missing project evidence hidden until supplied or independently verified.
3. Complete real browser checks at desktop, tablet, and mobile widths when a browser runtime is available.

## Sprint L — Project archive link accessibility (2026-10-11)

### Completed
- Added project-specific accessible names to the repeated “Inspect case study” and “Inspect” links in the project archive. Screen-reader link lists can now distinguish which project each action opens without relying on surrounding visual context.
- Visible link copy and layout remain unchanged.

### Validation
- **Pending:** GitHub Actions production build/deployment for commit 4fd274b44b63565d69e49c4be1f84eb1fbfeb5ed.
- Browser and screen-reader validation remain outstanding; the change is source-level accessibility hardening, not a claim of assistive-technology testing.

### Next
1. Confirm CI for the responsive navigation, case-study cleanup, and archive-link accessibility changes.
2. Continue the route-by-route accessibility and responsive audit; do not mark browser acceptance complete until tested in a real browser.


## Sprint M — Achievement semantics and experience archive consistency (2026-10-11)

### Completed
- Removed the Cognitrace placeholder row from the “Selected achievements” archive because its copy explicitly said publication/award metadata was not verified. The research project remains represented on the Research page, while the achievements list now contains only an award entry with an evidence basis.
- Replaced the hardcoded experience entry number with a position-derived number so future entries remain correctly ordered without duplicate “01” labels.
- No award claims, job responsibilities, dates, or metrics were added.

### Validation
- **Validated:** GitHub Actions passed for achievement archive content commit [`c88455f`](https://github.com/InfX2243/portfolio/actions/runs/38117005114) and experience numbering commit [`fd47bc6`](https://github.com/InfX2243/portfolio/actions/runs/38117006869). Both documentation updates also passed workflows [332](https://github.com/InfX2243/portfolio/actions/runs/38117020428) and [333](https://github.com/InfX2243/portfolio/actions/runs/38117022304).
- Browser and screen-reader validation remain outstanding.

### Next
1. Confirm both source-change workflows pass.
2. Continue auditing page-level content hierarchy and repeated evidence-boundary copy.
3. Validate desktop, tablet, and mobile rendering in a real browser before release sign-off.


35. Simplified Cognitrace research metadata so its topic and research signal are distinct from the evidence note; removed unverified award/conference status placeholders from project outcome fields so missing recognition does not read like a project result.


## Sprint P — V1 content consistency audit (2026-10-11)

### Completed
- Corrected the shared profile summary to use **Software Developer Intern**, matching the current role label and the latest direct statement captured in `docs/ABOUT-ME.md`.
- Corrected the authoritative execution specification's stale Bitkraft role label and clarified that the supporting positioning refers to research experience plus evidence-backed engineering recognition, not an implied research award.
- Reworked the Contact page into readable JSX and removed a public-facing note about missing email/resume details; the page now focuses on the verified LinkedIn and GitHub contact paths.
- Kept the official HR/offer-letter job title as a pre-release verification item; the direct user statement is the current working source, not independent HR verification.

### Validation
- **Validated:** GitHub Actions passed for the profile-summary update ([38118237792](https://github.com/InfX2243/portfolio/actions/runs/38118237792)), execution-spec correction ([38118240493](https://github.com/InfX2243/portfolio/actions/runs/38118240493)), Contact page cleanup ([38118304284](https://github.com/InfX2243/portfolio/actions/runs/38118304284)), and the preceding Sprint P status/notes updates ([38118316831](https://github.com/InfX2243/portfolio/actions/runs/38118316831), [38118319340](https://github.com/InfX2243/portfolio/actions/runs/38118319340)). Browser/device and assistive-technology checks remain open.
- Browser/device rendering, keyboard navigation, screen-reader review, reduced-motion runtime behavior, and third-party credential embed behavior remain unverified.

### Next
1. Inspect the remaining public-facing content for stale role labels and unsupported implications.
2. Continue keyboard/focus and mobile-navigation audit at source level; verify in a real browser before release sign-off.
3. Gather authoritative role dates, current résumé, research publication details, and credential verification URLs before final release.


## Sprint Q — SPA navigation focus and accessibility audit (2026-10-11)

### Completed
- Added a small route-focus handoff utility so client-side navigation can request a focus update without coupling page components to router internals.
- The shared layout now makes the main landmark programmatically focusable and moves focus there after an internal route change has mounted, including browser back/forward navigation.
- Same-route navigation avoids creating a focus request for a page that will not remount.
- Updated the authoritative execution specification to require a main-content focus handoff after SPA navigation.

### Validation
- **Validated:** GitHub Actions passed for the route-focus utility ([38118559498](https://github.com/InfX2243/portfolio/actions/runs/38118559498)), shared-layout focus behavior ([38118571946](https://github.com/InfX2243/portfolio/actions/runs/38118571946)), router integration ([38118579942](https://github.com/InfX2243/portfolio/actions/runs/38118579942)), and Sprint Q documentation commits. Source-level CI is not treated as browser or assistive-technology acceptance.
- Real browser keyboard testing, screen-reader review, and narrow viewport navigation checks remain outstanding.

### Next
1. Confirm all source-change workflows pass.
2. Review heading hierarchy, skip-link behavior, and reduced-motion CSS at source level; fix only clear defects.
3. Continue auditing stale or unsupported public claims and keep official role-title confirmation as a pre-release item.
4. Perform browser/device and assistive-technology acceptance testing before release sign-off.


## Sprint R — Credly badge rendering and visual asset audit (2026-10-11)

### Completed
- Replaced the shared-script/DOM-scan Credly implementation with one direct, lazy-loaded Credly embed iframe per supplied badge ID. This removes the loader's dependency on a one-time document scan when SPA pages mount or remount.
- Added a separate public-badge link for each card so the credential remains directly inspectable even if embedded content is blocked or unavailable.
- Kept all 16 user-supplied badge IDs in `src/data/credentials.json`; did not guess badge titles, issuers, or issue dates.
- Renamed the section heading from “Verified badge embeds” to “Credly badges” because the presence of a supplied ID alone does not establish that every badge is publicly accessible.
- Added sizing rules for the direct iframe and the external fallback link.

### Validation boundary
- Source changes are committed. GitHub Actions must pass before this increment is considered build-validated.
- CI cannot confirm that each third-party badge is public or that the iframe content renders in a real browser. After deployment, inspect the Achievements page and open a few badges directly; any private/unaccepted/invalid badge will need to be made public or have its ID corrected in `src/data/credentials.json`.

### Visual asset follow-up
- Sprint S integrated the supplied project screenshots, portrait, résumé, employer/community marks and issuer logos; see `docs/VISUAL-ASSET-CHECKLIST.md` for the exact paths and remaining evidence gaps.
- Remaining visual/evidence work is limited to authentic architecture diagrams or public research artifacts if the user supplies them. Do not create synthetic screenshots or diagrams that could be mistaken for actual project evidence.


## Sprint S — supplied visual assets and flagship case study (2026-10-11)

### Completed
- Confirmed that the uploaded files are committed under `public/assets/` on `portfolio-v1`, including the résumé PDF, portrait, Bitkraft logo, AWS/Oracle issuer marks, AWS Student Builder Group and ACM marks, and project screenshots.
- Wired the résumé to the Home and Contact pages; wired the portrait and community marks to About; wired the Bitkraft logo to Experience; wired issuer marks into certification cards.
- Replaced the generic project-summary panel with a real screenshot when an image is available, while preserving a restrained fallback for projects without a visual.
- Added supplied visuals for Cognitrace, Green Passport and the AWS Web Application Builder.
- Expanded Ascend APEX into a screenshot-led case study with selected Student, Faculty, Recruiter and Admin screens plus the skill-validation workflow visual. National first-place recognition now leads the featured project order.
- Kept architecture, individual contribution, metrics, and external source links absent where the supplied assets do not independently establish them.
- Added responsive gallery styling and corrected certificate URL validation after the first build caught a regex escaping error.

### Validation boundary / next actions
- The latest source-code commit for Sprint S (`fb6b388f677d210b488cd6b21b6eee3a64891908`) passed GitHub Actions workflow [38141920169](https://github.com/InfX2243/portfolio/actions/runs/38141920169), including production build, generated-route validation and GitHub Pages deployment. Earlier intermediate runs failed while a certificate URL regex and featured-project sort expression were malformed; both issues were corrected before the successful run.
- Check the deployed site on mobile and desktop for image loading, crop, gallery density, résumé download, and third-party Credly embeds.
- Confirm the résumé PDF is the final, current version before treating its public link as release-ready.
- Confirm official job-title wording, and supply an individual contribution summary and public event/repository source for Ascend APEX if available.
- The site is not marked fully released until the remaining manual browser/accessibility checks and final content verification are complete.


## Sprint T — profile-first hierarchy, navigation and restrained depth (2026-10-11)

### Completed in source
- Reordered the homepage to follow the intended portfolio story: identity and personal context, selected projects, research, professional experience, technical direction, recognition/community, and contact.
- Replaced duplicated summary copy with a distinct factual introduction grounded in the current education and role details; retained the learning principle as a personal signal rather than a marketing claim.
- Simplified desktop navigation around the primary visitor journeys (Work, Research, Experience, About) with a clear Contact action. The wordmark is the Home route; Achievements remains available from mobile navigation, the footer, and the homepage recognition section.
- Established a shared, continuous dark background with subtle ambient color and a low-contrast grid across routes.
- Added lightweight CSS perspective, layered orbital depth, gentle drift, project-image hover depth, link/label micro-interactions and progressive scroll-reveal where supported. Reduced-motion preferences disable non-essential movement. No new dependency or always-on 3D engine was introduced.

### Validation boundary
- This sprint is not marked build-validated until GitHub Actions completes successfully for the source commit.
- CI and generated-route checks do not establish real-browser visual quality. Review the deployed homepage and every route at desktop, tablet and narrow mobile widths; test navigation and focus by keyboard; verify reduced motion; and inspect project screenshot crops, Credly embeds and résumé freshness before release sign-off.
- The CSS 3D effect is intentionally decorative and non-interactive. The WebGPU field remains an optional enhancement with existing device and reduced-motion guards.

### Next
1. Review the new deployed hierarchy and responsive layout in a real browser.
2. Fix any concrete overflow, contrast, focus, animation or image-crop defects found during manual acceptance.
3. Confirm résumé freshness and official role-title wording; retain current evidence boundaries for research and team contribution.


## Sprint U — executive-summary and accessibility correction
- **DONE (source):** Homepage rewritten to surface personal narrative, education, current role, team recognition, projects, research, technical interests, community and selected certifications on one page.
- **DONE (source):** Navigation now links directly to the deep-dive archives and exposes Credentials in both desktop and mobile navigation.
- **DONE (source):** Contrast tokens, keyboard focus, skip-link, target sizes, reduced-motion and forced-colors handling strengthened.
- **DONE:** Production build, generated route checks and GitHub Pages deployment passed in workflow [38143490385](https://github.com/InfX2243/portfolio/actions/runs/38143490385).
- **BLOCKED pending external validation:** Do not declare WCAG 2.2 AA conformance until automated axe/WAVE plus keyboard, zoom/reflow, screen-reader and rendered contrast checks pass on the deployed site.


## Sprint V — secondary-page polish and accessibility smoke testing

**Implemented in source; release validation runs in GitHub Actions.**

- Reworked Work into one consistent, award-aware project grid; each project appears once and links to its own case study.
- Reworked Research into concise project cards. Empty methodology/result sections and unverified award/publication filler are no longer presented as content.
- Reworked Experience into a responsive timeline with organization, role, period, verified focus areas and supplied company mark.
- Reworked Credentials to show the verified recognition and certification records once. Removed the duplicate credential inventory and generic, repeated embedded badge wall where badge metadata was unavailable.
- Reworked About around engineering principles, technical directions and community participation rather than repeating the landing-page biography, education, portrait and motto.
- Reworked Contact into a direct, keyboard-accessible link panel.
- Added shared responsive styling for the secondary pages, reduced-motion/forced-colors considerations and a browser-based axe accessibility smoke audit across all major routes.
- Added an automated release gate for structural checks and serious/critical axe findings. This is a smoke test, not by itself a WCAG conformance certification.

**Still required for a full WCAG 2.2 AA claim:** review the live GitHub Actions audit results, resolve all reported findings (including moderate/minor findings), then complete manual keyboard-only, 200%/400% zoom/reflow, contrast, mobile menu and screen-reader checks on the deployed site.


### Automated axe audit follow-up

The browser audit exposed and helped fix a contrast issue caused by scroll-linked reveal animations. The successful CI run (2026-10-11) audited 11 routes at desktop (1280px) and mobile (390px) widths: zero axe violations on every route and no structural or mobile horizontal-overflow failures. Manual keyboard-only, 200%/400% zoom/reflow, contrast spot-checks and screen-reader review remain outstanding, so this is not yet a full WCAG 2.2 AA conformance claim.


## Sprint V release validation

- Build and GitHub Pages deployment: **PASS** — [workflow run](https://github.com/InfX2243/portfolio/actions/runs/38145584620).
- Automated axe smoke audit: **PASS** — 11 routes at desktop (1280×900) and mobile (390×844), zero axe violations reported across all 22 route/viewport combinations.
- Structural checks: **PASS** — each route has a document title and exactly one visible main H1.
- Mobile reflow smoke check: **PASS** — no horizontal document overflow at 390px.
- Remaining manual accessibility work: keyboard-only navigation and focus order, menu Escape/focus return, 200%/400% zoom and reflow, screen-reader behavior, and manual review of any contrast or visual states not captured by axe.

## Sprint W — Project archive expansion and credential visibility (2026-10-11)

- **DONE — project data:** Added Moodly, Memory Game, GitDev360, Vaulix, AWS Academy Management Portal, and EchoClass to the centralized project archive, including source links, case-study context, technical focus, and explicit evidence boundaries.
- **DONE — skills:** Added Security & Privacy Engineering and API Integration & Developer Tools domains; expanded stack terms to include browser cryptography and GitHub API integration.
- **DONE — AI certification:** Added AWS Certified AI Practitioner to the credential archive. Public verification URL and issue date remain unprovided and are not fabricated.
- **DONE — Credly rendering:** Connected the existing Credly badge records to the Achievements page through the reusable Credly embed component.
- **DONE — asset instructions:** Added `docs/PROJECT-ASSET-UPLOAD-GUIDE.md` with exact screenshot paths and privacy guidance.
- **PARTIAL — image assets:** Project records currently point to `public/assets/projects/<project-slug>/cover.png`; upload screenshots to the six paths in the asset guide to replace the existing image fallback/empty image state.
- **PARTIAL — validation:** Repository writes succeeded, but a local production build and real-browser/keyboard/embed audit have not been run from this connector session. Run `npm ci && npm run build` and check the Projects and Achievements pages before release.
## Sprint X — Use the complete project screenshot collections (2026-10-11)

- **DONE — asset audit:** Inspected the `portfolio-v1` Git tree for `public/assets/projects/`; confirmed existing screenshot collections for Moodly (8), Memory Game (4), GitDev360 (9), Vaulix (15), AWS Academy (15), and EchoClass (17), plus existing collections for Ascend APEX, Cognitrace, Green Passport, and the AWS Web Application Builder.
- **DONE — gallery wiring:** Replaced nonexistent `cover.png` references with actual tracked asset filenames and connected every numbered screenshot for the six projects to the case-study gallery.
- **DONE — AWS Academy path correction:** Portfolio now points to `public/assets/projects/aws-academy/awsacademy1.png` and uses the actual `aws-academy/` directory rather than the nonexistent `aws-academy-mhsscoe-website/` asset directory.
- **PARTIAL — screenshot semantics:** Several source screenshots use only numbered filenames, so gallery captions identify screen order rather than guessing at undocumented feature names. Update captions after visually reviewing each screen.
- **NEXT — validation:** Run `npm ci && npm run build`, inspect all project detail routes, and verify image loading in a browser.



## Sprint Y — CI recovery and motion polish (2026-10-12)

- **DONE — root cause identified:** production build and route generation passed; the deployment job failed at the axe smoke audit on the Achievements route because contrast checks entered the third-party Credly badge iframe. The audit reported 1.77:1 inside provider-controlled content and 4.29:1 for our own credential fallback metadata.
- **DONE — audit boundary clarified:** exclude only the externally hosted `.credly-embed iframe` from axe scans; the portfolio-owned page and fallback links/text remain in the audit. Credly's embedded UI still needs separate manual review.
- **DONE — contrast:** raised portfolio-owned credential metadata from the failing muted color to a more readable token.
- **DONE — interaction polish:** added restrained hover elevation, border/shadow transitions, subtle image zoom and contact-link motion. Effects are limited to hover-capable devices and disabled for reduced-motion preferences.
- **NEXT — CI confirmation:** verify the latest push passes build, structural checks, desktop/mobile axe smoke audit and GitHub Pages deployment before calling release recovery complete.


## Sprint Z — Contact details and opt-in guided tour (2026-10-12)

- **DONE — direct contact:** added the supplied email and mobile number to the centralized profile data and the Contact page, using accessible `mailto:` and `tel:` links.
- **DONE — guided tour:** added a persistent, opt-in guided-tour control that scrolls through the current page and advances through the top-level portfolio routes (Home, Work, Research, Experience, Credentials, About, Contact).
- **DONE — viewer control:** cursor movement, scrolling, touch, and common navigation keys stop automation so the viewer can take over immediately; the control also supports explicit start/stop and announces its state.
- **DONE — motion/accessibility:** tour uses smooth scrolling only when reduced motion is not requested, has visible keyboard focus, and remains usable on narrow screens.
- **NEXT — validation:** confirm production build, route generation, desktop/mobile accessibility smoke tests, and GitHub Pages deployment before considering the guided tour release-ready.
