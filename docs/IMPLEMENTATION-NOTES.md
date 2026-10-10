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
