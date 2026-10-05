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
