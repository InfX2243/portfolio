# Portfolio implementation notes

## Milestone
Information architecture + design system foundation.

## Visual resource mapping

- **Aceternity UI patterns:** spotlight cards, restrained spotlight hero treatment, bento-style project hierarchy, moving/interactive border language.
- **Canvas UI:** the hero uses a local particle-reveal canvas layer based on the Particle Reveal interaction described by Canvas UI. It is isolated from page content so the HTML remains the source of truth and the effect can be removed for reduced-motion or unsupported devices.
- **VGPU:** the hero includes an optional WebGPU shader field using the `vgpu` runtime and an inline WGSL fullscreen effect. It is dynamically imported, capped to a modest DPR, and fails silently when WebGPU is unavailable.

## Architecture

Content is data-driven in `src/data/portfolio.js`. Visual effects live under `src/components`, while the page composition remains in `src/App.jsx`.

## Content verification

The portfolio uses repository-backed claims plus publicly surfaced LinkedIn facts. Detailed project responsibilities, publication URLs, GitHub project URLs, email and resume are intentionally not fabricated and remain follow-up items if not supplied.

## Deployment

The existing GitHub Pages workflow and Vite `/portfolio/` base path are preserved.


## Milestone 2B — visual storytelling + credentials + 3D

The current portfolio is intentionally being shifted from a text-led presentation toward an evidence-led visual presentation.

### Visual technology roles

- **Aceternity UI:** layout/interaction primitives, spotlight/bento treatment, reveal/hover behavior.
- **Canvas UI:** lightweight canvas-based atmosphere/reveal effects that remain subordinate to content.
- **VGPU:** optional GPU-native visual signature for technically meaningful shader treatment.
- **Spline:** interactive 3D storytelling layer for the hero and, selectively, systems/project visualization.

Spline will start with its Viewer embed because the official Viewer is a native web component and supports lazy loading; React/Code API integration will only be introduced if cross-page interaction is genuinely useful.

### Credentials

Credentials will move out of src/data/portfolio.js into src/data/credentials.json.

The JSON model will separate:
- Credly badges;
- certificates;
- future awards/credential evidence.

The first supplied Credly badge ID is 1c5d5a36-a209-4858-a57d-baf3d322a1a0. The badge title and issuer are intentionally not guessed from the ID.

### Visual content rule

Every major section should answer at least one of:
- What did I build?
- What was recognized?
- What system did I work with?
- What can the reviewer see?

The redesign should remove unnecessary prose before adding more prose.


## Milestone 2B implementation checkpoint

The first visual implementation increment is now in the branch:

- Credentials are sourced from `src/data/credentials.json`.
- Credly badges use a reusable component with one-time script injection.
- Certificates use reusable visual cards that can accept verified assets and links later.
- The credentials section now has a visual wall rather than only a text list.
- A Spline wrapper and dedicated 3D systems slot exist with a static fallback.

Truth boundary: the first supplied Credly badge UUID is recorded, but its human-readable metadata is not guessed. Likewise, no certificate IDs/dates/URLs/assets or Spline scene URL have been invented.

The next coding increment should focus on project architecture visuals and then browser validation.


## Milestone 2B project visual evidence checkpoint

Added `ProjectVisual.jsx` and integrated it into the work cards. The component turns existing project fields into a compact visual flow rather than introducing invented architecture. It deliberately uses the labels INPUT, BUILD, SIGNAL and OUTCOME as a presentation model, not as a claim about a project's literal runtime topology.

Next: give research the same visual treatment, then move into actual browser/build validation.


## Milestone 2B research visual evidence checkpoint

Added `ResearchVisual.jsx` and integrated it into the research cards. The component converts already-verified research fields into a compact visual evidence flow and matching signal chips. It deliberately avoids claiming a literal methodology, publication artifact, paper architecture, or metric that is not present in the source data.

The next implementation focus is density rebalance and real validation. Verified research artifacts, credential metadata/assets, and a Spline scene remain source-dependent.


## Milestone 2B text-density checkpoint

Secondary project and research detail is now progressively disclosed with native `details/summary` controls. The visual evidence maps remain visible by default, shifting the first-read experience toward visual signals while preserving deeper contribution, approach, outcome and source evidence for reviewers who want it.

No content claims were added in this increment. Validation remains separate and has not been marked complete.


## Milestone 2B Spline integration hardening checkpoint

The Spline surface now uses the official `@splinetool/viewer` package and is configured through `VITE_SPLINE_SCENE_URL`. The viewer is conditionally initialized only when a scene URL exists, preserving the lightweight fallback path. No scene URL has been fabricated.

Next: configure a verified Spline export, then run real dependency/build/browser validation.

## Credential embed resilience checkpoint

The Credly component now reuses a single script element, tracks loading/loaded/error state, and exposes a user-visible fallback when the external embed fails. No credential metadata was inferred or added. Runtime validation remains pending.


## Accessibility validation-prep checkpoint

Added keyboard-visible focus treatment, disclosure-control focus treatment and reduced-motion overrides. No audit result is being claimed; these changes prepare the implementation for the actual Stage 5 validation pass.


## CI delivery hardening checkpoint

The deployment workflow now has an explicit build step, optional Spline environment injection from the repository variable `SPLINE_SCENE_URL`, and a post-build `dist/index.html` guard. No successful workflow run is claimed yet.


## Accessible mobile navigation checkpoint

Implemented a dedicated `MobileNav` component with native state management, ARIA disclosure semantics, Escape-key dismissal, link-selection closure, and responsive styling. The desktop navigation remains unchanged. Reduced-motion users receive a non-animated panel transition.

No runtime/device validation is claimed yet; the next validation pass must exercise keyboard, touch, narrow-width and production-build behavior.


## Credly badge gallery checkpoint

Added the eight user-supplied Credly badge IDs to the JSON credential source and updated the credentials section to render the complete set. The gallery is responsive across desktop, tablet and mobile widths. The existing one-time Credly script loader and fallback behavior are reused; no badge title or issuer was inferred from UUIDs.


## Credly 16-badge gallery checkpoint

Appended the eight newly supplied Credly badge IDs to src/data/credentials.json, bringing the total to 16. The credentials UI already maps over the full badge collection, so no component duplication was required. Each new record retains the supplied 150×270 embed dimensions and Credly host; title/issuer/public URL remain unset pending verification.


## Sprint H — Systems-orbit hero foundation (2026-10-11)

- Added a dependency-free SVG systems illustration in `src/components/HeroSystemVisual.jsx`.
- The illustration uses a central modular core, orbit paths, connected nodes, and small technical labels to convey connected systems and iteration without presenting itself as a literal project architecture.
- Integrated the illustration into the homepage hero and replaced the old right-side focus text block with a responsive engineering-focus strip.
- Added responsive layout rules and reduced-motion handling for the subtle orbit-line animation.
- No new runtime dependency or external asset was introduced.
- Validation state: deployment workflow `38081940013` was queued at documentation time; build and browser/device validation are not yet claimed.


## Sprint H validation follow-up — route build validator (2026-10-11)

- The first workflow compiled the React/Vite app but failed in `scripts/validate-route-build.mjs`: route URLs were constructed as `dist/.projects/index.html` instead of `dist/projects/index.html`, and required-asset checks used the same relative-path mistake.
- The homepage metadata validator also found a genuine generator gap: `scripts/generate-route-pages.mjs` generated metadata for nested routes but did not render the canonical route metadata into the root `dist/index.html`.
- Fixed the generator to render and write homepage metadata first, then reuse that template for nested route entry points.
- Fixed the validator's route and asset URLs to use explicit `./` paths.
- Corrected validation is pending in GitHub Actions workflow `38082014781`; no green CI result is claimed yet.


## Sprint H validation result — route build checks (2026-10-11)

- The route generator now writes the canonical metadata version of the root `dist/index.html` before generating nested route pages.
- The route validator resolves nested route and asset paths correctly, compares HTML-escaped title/description values, and checks only assets expected to exist at build-validation time. The workflow itself continues to create and verify `404.html` before deployment.
- Earlier attempts exposed and fixed the route path, homepage metadata, generator syntax, escaped title, and 404 timing issues.
- GitHub Actions workflow `38082118258` (run 305, commit `a5508fb39fc75a531371e19a9e4b44e49a9eacdd`) passed the production build, route/metadata validator, fallback generation, output guard, and deployment.
- Browser/device review remains outstanding; CI passing is not a claim that visual balance, contrast, reduced-motion runtime behavior, or low-power behavior has been manually verified.


## Sprint H performance follow-up — GPU field lifecycle (2026-10-11)

- The WebGPU field is now explicitly an enhancement: it skips initialization when WebGPU is unavailable, reduced motion is requested, viewport is small, pointer is coarse, reported hardware concurrency is low, or data-saver is enabled.
- Added IntersectionObserver visibility tracking so the frame loop pauses while the hero canvas is off-screen and resumes only when visible.
- Added document visibility handling so animation pauses when the browser tab is hidden.
- The static SVG systems visual remains available as the primary visual and fallback; no user-facing content depends on WebGPU.
- Validation passed in GitHub Actions workflow `38082205722` (run 308): production build, route/metadata validation, fallback generation, output guard, and deployment all succeeded.


## Sprint I — Navigation duplication fix (2026-10-11)

- Fixed a CSS specificity collision that allowed the hidden mobile navigation panel to render alongside desktop navigation.
- Shared desktop navigation rules now target only `.desktop-nav`; mobile panel display and open-state rules target only `.mobile-nav-panel`.
- The change does not alter route data or navigation behavior; it separates the styling scopes so the existing accessible mobile-menu implementation can work as intended.
- GitHub Actions workflow 38082452851 passed after this change. Browser visual verification is still outstanding.


## Sprint J — Case-study content cleanup (2026-10-11)

- Project detail rendering now distinguishes useful project-specific copy from generic placeholder statements in the current data model.
- Generic contribution placeholders are no longer presented as personal contributions; project focus tags remain available in a single dedicated location.
- The technical-decisions section appears only when case-study-specific decision details exist, instead of repeating the general focus/approach tags.
- A verified recognition statement is not repeated in the outcome section when both values are identical.
- When no specific contribution text is available, the technical-focus section expands into a single-column layout.
- Validation: GitHub Actions workflow 38082557265 passed production build, route/metadata validation, fallback generation, output guard, and deployment. Browser rendering remains unverified.

## Sprint K — Responsive navigation and case-study density (2026-10-11)

- Tightened the mobile breakpoint selector to .nav > .desktop-nav so it overrides the scoped desktop display rule and prevents desktop links from appearing beside the mobile toggle.
- Removed the repeated evidence-boundary paragraph from every case study; missing evidence is already handled by conditionally hiding empty sections, and repeated policy copy was visually noisy.
- No factual project content was introduced. Production workflow and browser validation are pending at the time of this note.

## Sprint L — Project archive link accessibility (2026-10-11)

- Added unique aria-label values to repeated project archive action links, including the project title, so link lists expose a meaningful destination rather than repeating generic “Inspect” labels.
- Visible labels and styling are unchanged. Screen-reader runtime testing remains outstanding.


## Sprint M — Achievement semantics and experience archive consistency (2026-10-11)

- Removed a research-award placeholder from the achievements page. An item explicitly stating that award/publication metadata is unverified is not itself an achievement; the project remains represented on the Research page, where verification status is contextual.
- Experience archive numbering now derives from the map index instead of repeating a literal “01” for every entry.
- No new factual claims were added. GitHub Actions passed for the source changes and their documentation updates (runs [330](https://github.com/InfX2243/portfolio/actions/runs/38117005114), [331](https://github.com/InfX2243/portfolio/actions/runs/38117006869), [332](https://github.com/InfX2243/portfolio/actions/runs/38117020428), and [333](https://github.com/InfX2243/portfolio/actions/runs/38117022304)). Browser and assistive-technology testing are still outstanding.


## Sprint N — Research content density and evidence clarity (2026-10-11)

- Removed repetitive verification-status labels from Cognitrace research metadata; the title/context/signal now describe the project rather than echoing the evidence caveat.
- Removed pending-verification placeholders from Cognitrace and Green Passport project outcome fields so unverified recognition is not presented as a result.
- Kept a concise evidence note explaining that award/publication details still need an authoritative public source. No award, publication, or conference claim was added.
- Updated `ResearchVisual` to avoid repeating the signal label and to omit recognition metadata entirely when no verified recognition value exists; it no longer invents a “Recognition pending verification” field.
- Validation: source and documentation commits trigger the GitHub Pages production workflow; browser/device and assistive-technology validation remain outstanding.


## Sprint O — Profile accuracy and personal voice (2026-10-11)

- Updated the Bitkraft role label to **Software Developer Intern**, reflecting the latest direct statement captured in `docs/ABOUT-ME.md`. The official HR/offer-letter title should still be confirmed before final publication if it differs.
- Reformatted the About page into maintainable JSX and added the user's learning philosophy as one restrained quote, grounded in the canonical profile notes.
- Added quote styling using the existing palette and typography tokens; no new dependencies or unverified professional claims were introduced.
- GitHub Actions passed for the role label, About-page copy/layout, quote styling, and quote selector correction (runs [38117320441](https://github.com/InfX2243/portfolio/actions/runs/38117320441), [38117323555](https://github.com/InfX2243/portfolio/actions/runs/38117323555), [38117327561](https://github.com/InfX2243/portfolio/actions/runs/38117327561), and [38117342932](https://github.com/InfX2243/portfolio/actions/runs/38117342932)). Browser/device and assistive-technology validation remain outstanding.


## Sprint P — V1 content consistency audit (2026-10-11)

- Updated the shared `profile.summary` to use the current user-reported title **Software Developer Intern**, avoiding conflicting role labels between the shared profile and experience archive.
- Updated the authoritative execution specification's old Bitkraft role label and revised its supporting positioning line to avoid implying that the research itself received an award.
- Reworked the Contact page into maintainable JSX and removed an internal-sounding verification note from public copy. It now presents only the verified LinkedIn and GitHub routes.
- Kept official title confirmation as an explicit pre-release follow-up; no new role details, research claims, metrics, or awards were added.
- Validation: GitHub Actions passed for the profile-summary update ([38118237792](https://github.com/InfX2243/portfolio/actions/runs/38118237792)), execution-spec correction ([38118240493](https://github.com/InfX2243/portfolio/actions/runs/38118240493)), Contact page cleanup ([38118304284](https://github.com/InfX2243/portfolio/actions/runs/38118304284)), and the preceding documentation updates ([38118316831](https://github.com/InfX2243/portfolio/actions/runs/38118316831), [38118319340](https://github.com/InfX2243/portfolio/actions/runs/38118319340)). Browser/device and assistive-technology validation remain outstanding.


## Sprint Q — SPA navigation focus and accessibility audit (2026-10-11)

- Added `src/app/routeFocus.js` as a small shared handoff between navigation and layout.
- Internal route transitions and browser history navigation request focus handoff; the shared layout focuses the `main` landmark after the destination layout mounts. The landmark uses `tabIndex={-1}` so it can receive programmatic focus without adding an extra tab stop.
- Same-route clicks do not leave a stale focus request waiting for a future page mount.
- Added the SPA focus handoff requirement to `docs/AI-PORTFOLIO-EXECUTION.md`.
- GitHub Actions passed for the route-focus utility ([38118559498](https://github.com/InfX2243/portfolio/actions/runs/38118559498)), shared-layout focus behavior ([38118571946](https://github.com/InfX2243/portfolio/actions/runs/38118571946)), router integration ([38118579942](https://github.com/InfX2243/portfolio/actions/runs/38118579942)), and the Sprint Q documentation updates. This confirms build/route checks only; no screen-reader or manual browser acceptance is claimed.


## Sprint R — Credly badge rendering and visual asset plan (2026-10-11)

- Changed `src/components/CredlyBadge.jsx` to render each supplied ID through a direct, lazy-loaded Credly iframe instead of relying on a one-time script scan of all badge placeholders.
- Each badge now has an independent public-badge link, so the user can still inspect it if third-party iframe rendering is blocked.
- Added iframe sizing and link styles in `src/styles.css`; renamed the Achievements section to “Credly badges” to avoid implying every ID has already been publicly verified.
- The 16 IDs remain sourced from `src/data/credentials.json`; titles, issuers, and issue dates are not inferred.
- Validation boundary: source commits are present; confirm GitHub Actions status and then verify the deployed embeds in a real browser. CI does not prove that Credly marks each badge public or that external iframe content loaded successfully.
- Sprint S has since integrated the supplied screenshots, portrait, résumé, employer/community marks and issuer logos. Remaining evidence assets are authentic architecture diagrams or public research papers/posters if supplied; do not fabricate evidence assets.


## Sprint S — supplied assets integrated into the v1 experience

- Confirmed the newly uploaded asset library under `public/assets/` and connected the portrait, résumé, employer/community marks, issuer logos, and project screenshots to the React pages.
- Added data-driven `visual` and `gallery` fields to the project source; `ProjectVisual` now uses a real screenshot when one is supplied and keeps its existing restrained fallback otherwise.
- Added a lazy-loaded, responsive product walkthrough to the case-study template. Ascend APEX uses selected screenshots across the Student, Faculty, Recruiter and Admin surfaces and includes the supplied skill-validation workflow visual.
- Updated the Ascend APEX summary to describe the role-based application, highlighted the nationwide first-place result, and placed the project first in the homepage and project archive. No individual ownership or backend architecture was invented.
- Added project screenshots to Cognitrace, Green Passport and the AWS Web Application Builder; added profile, résumé, community, employer and issuer assets to their relevant pages.
- Corrected certificate URL regex escaping after CI identified a production-build syntax failure. The fix passed the follow-up workflow.

Release note: CI validates build and deployment mechanics, not real-browser image rendering or accessibility. Final mobile/desktop, keyboard, external-link, résumé-freshness, Credly-embed and official job-title checks remain explicit release gates.


## Sprint T — profile-first layout and subtle 3D motion (2026-10-11)

- Reordered the homepage to reduce repeated positioning copy and put selected work before research, experience, technical direction and community/recognition. The intro now states current education, the user-reported internship title and interests without inventing task ownership.
- Simplified the shared desktop navigation to the highest-priority routes. The ABID wordmark is the Home link; Contact is a clear action; Achievements remains reachable through the mobile menu, homepage, and footer.
- Added a shared fixed atmospheric gradient plus low-contrast grid so page transitions retain one visual environment rather than feeling like separate backgrounds.
- Added CSS-only 3D perspective to the hero system illustration and supplied project media, plus small hover, link, orbit and progressive scroll-reveal transitions. This avoids adding a new WebGL/3D dependency or turning animation into a required source of information.
- Preserved focus visibility, main-content focus handoff, mobile menu Escape behavior and prefers-reduced-motion support; the new non-essential animations/transforms are disabled for reduced-motion users.
- Validation boundary: wait for the source workflow before claiming build success. CSS and CI do not replace real-device checks for the 3D effect, layout, image crops, keyboard navigation or assistive technology.


## Sprint U — executive-summary hierarchy and accessibility remediation (2026-10-11)

### Product correction
- Rebuilt the homepage as the portfolio's executive summary: personal story and motto, portrait, education, current internship, the verified Ascend APEX team award, technical direction, community, three featured projects, research overview and selected certifications are all visible without visiting another route.
- Replaced the long serial narrative with compact overview cards and project/research grids. Deep-dive routes remain available for case studies, the full research archive, experience, credentials and biography.
- Updated navigation labels and included Credentials in the primary navigation; mobile navigation now activates at tablet widths to avoid cramped links.
- Kept project and research claims bounded by current source evidence; no personal contribution, publication, metric or award has been inferred.

### WCAG 2.2 AA remediation
- Improved keyboard focus visibility, skip-link presentation, main landmark focus, scroll offsets and navigation target sizes.
- Raised low-contrast metadata colors and clarified award/focus treatments against the dark background.
- Added consistent reduced-motion handling for all decorative animations and transitions, plus forced-colors support for focus and card boundaries.
- Added meaningful page section headings, accessible link names, decorative icon hiding and explicit list semantics to the new homepage.

### Validation status — do not overclaim
- Source changes require the GitHub Actions production build and deployed-route checks.
- WCAG conformance is **not yet certified**. A real audit still needs automated accessibility testing (for example axe/WAVE), keyboard-only review, 200%/400% zoom and reflow checks, contrast sampling of rendered states, and screen-reader spot checks on the deployed site.
- Any remaining issue discovered in those checks must be fixed before claiming full WCAG 2.2 AA conformance.
