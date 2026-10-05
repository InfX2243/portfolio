# Portfolio v2 — AIDLC Execution Plan

## 0. Mission

Build a distinctive, technically credible personal portfolio for **Abid Ahmed Shaikh**, optimized for an **ACM Winter School application**.

The site should communicate three things quickly:

1. **Technical depth** — cloud, AI engineering, backend/platform engineering, full-stack development, and research.
2. **Evidence of impact** — projects, awards, publications, certifications, leadership, and engineering work.
3. **Research/learning potential** — curiosity, systems thinking, experimentation, and a trajectory appropriate for an ACM Winter School applicant.

The existing `portfolio-v1` branch is the starting point. We will evolve it rather than rebuild blindly.

---

## 1. Repository Baseline

### Repository
- GitHub: `InfX2243/portfolio`
- Working branch: `portfolio-v1` (the repository does not currently expose a literal `v1` branch)
- Stack: React 18 + Vite 5
- Deployment: GitHub Pages via `.github/workflows/deploy-gh-pages.yml`

### Current baseline
- Minimal single-page React portfolio.
- Existing dark/grid visual language.
- Existing content areas: hero, operating domains, featured work.
- Existing content source: `docs/portfolio-content.md`.
- No Tailwind/shadcn layer yet.
- No dedicated animation/component system yet.

### Initial assessment
The baseline is a good skeleton, but it needs:
- stronger information architecture;
- richer, evidence-backed content;
- a more memorable visual identity;
- project storytelling instead of project-name cards;
- responsive/mobile polish;
- accessibility and reduced-motion handling;
- performance-conscious GPU effects;
- application-oriented positioning for ACM Winter School.

---

## 2. Required Design Resources

These three resources are first-class inputs to the design system.

### A. VGPU — `https://vgpu.sh/`
Use for:
- custom WebGPU/WGSL effects where they add meaningful identity;
- shader experimentation and GPU-native visual treatments;
- lightweight, composable effects rather than a heavy 3D framework;
- performance-conscious rendering.

Guardrail:
- VGPU effects must support graceful fallback and must never make the portfolio's core content inaccessible.

### B. Canvas UI — `https://canvasui.dev/`
Use for:
- interactive canvas effects over live HTML;
- hero/section reveal effects;
- particle/liquid/glass/shatter-style interactions where appropriate;
- WebGL/WebGPU effects with progressive enhancement.

Preferred approach:
- start with WebGL-compatible effects for broad support;
- selectively evaluate WebGPU builds where they materially improve the experience;
- respect reduced-motion preferences.

### C. Aceternity UI — `https://ui.aceternity.com/`
Use for:
- high-quality React/Tailwind visual primitives;
- hero composition;
- bento/project layouts;
- animated cards and spotlight effects;
- navigation, CTA, timeline and section treatments.

Guardrail:
- use components as a coherent design system, not as a collection of unrelated demos.

---

## 3. Content Sources & Truth Policy

### Primary public profile source
LinkedIn:
`https://www.linkedin.com/in/abid-ahmed-shaikh/`

Publicly surfaced profile information includes:
- Information Technology undergraduate at M.H. Saboo Siddik College of Engineering;
- Software Engineer Intern / Bitkraft Technologies;
- AWS Student Builder Group involvement;
- Oracle APEX Cloud Developer Certified Professional;
- AWS Certified Cloud Practitioner;
- Oracle Cloud Infrastructure AI / Generative AI / Foundations certifications;
- Oracle AI Vector Search certification.

### Existing repository content
Use `docs/portfolio-content.md` as the initial structured content source.

Known portfolio evidence includes:
- Bitkraft Technologies — Software Engineer Intern;
- Ascend APEX — Oracle Hackathon winner;
- Cognitrace — ICSSSD 2026 Best Paper Award;
- Green Passport — ICSSSD 2026;
- cloud-native/backend/platform engineering work;
- AWS Academy / Student Builder leadership;
- ACM editorial leadership.

### Truth policy
- Never invent achievements, metrics, dates, responsibilities, publication claims, or technologies.
- If a claim cannot be verified from the repository or public profile/source material, mark it for confirmation before publication.
- Prefer concrete evidence over generic self-descriptions.
- Project descriptions should explain **problem → approach → technology → outcome → learning**.

---

## 4. Target Information Architecture

### 4.1 Hero
Goal: immediately establish identity and technical direction.

Planned content:
- Name and concise role statement.
- Strong positioning around systems, AI, cloud, and research.
- ACM Winter School-relevant signal without making the site feel like a one-off application page.
- Primary CTA: Explore work.
- Secondary CTA: Resume / LinkedIn.

Visual direction:
- Aceternity-style hero composition;
- Canvas UI particle/texture/reveal treatment;
- optional VGPU shader layer for a subtle technical signature.

### 4.2 About / Research Direction
Goal: explain who Abid is beyond a stack list.

Focus:
- IT undergraduate;
- software engineering;
- cloud/AI systems;
- research and experimentation;
- motivation for systems/AI/cloud engineering;
- trajectory toward research-oriented technical communities.

### 4.3 Experience
Highlight:
- Bitkraft Technologies;
- engineering responsibilities;
- backend/platform/AI/game/AR work only where verified.

Use a timeline or structured experience cards.

### 4.4 Featured Projects
Initial candidates:
- Ascend APEX;
- Cognitrace;
- Green Passport;
- Microservices / CI/CD Pipeline Builder;
- Cloud Web Application Builder;
- other verified high-value projects discovered during content audit.

Each featured project should have:
- concise problem statement;
- contribution/role;
- architecture or technical approach;
- technologies;
- outcome/recognition;
- GitHub/demo/publication links where available.

### 4.5 Research
This is a major differentiator for ACM Winter School.

Show:
- publications/projects;
- awards;
- research questions/themes;
- methodology/engineering contribution;
- publication links when verified.

### 4.6 Technical Domains
Instead of a flat skills dump, organize skills into:
- Cloud & Infrastructure
- AI / GenAI / RAG / MLOps
- Backend & Distributed Systems
- Full Stack
- DevOps / Platform Engineering
- AR / Unity / Interactive Systems
- Research & Technical Communication

### 4.7 Achievements & Certifications
Use compact evidence cards for:
- Oracle APEX hackathon win;
- research award;
- AWS certification;
- Oracle certifications;
- leadership roles.

### 4.8 Leadership / Community
Potential sections:
- AWS Student Builder Group;
- ACM editorial role;
- other verified technical/community leadership.

### 4.9 Contact / Closing CTA
End with:
- short invitation to collaborate/research/connect;
- LinkedIn;
- GitHub;
- email if supplied/verified;
- resume.

---

## 5. Visual Design Direction

### Core aesthetic
**Research lab × cloud systems × GPU computing × modern editorial portfolio**

Principles:
- dark, high-contrast base;
- restrained electric accent colors;
- fine grid / technical texture;
- glass only where useful;
- typography does most of the communication;
- motion should communicate system behavior, not decoration;
- generous spacing and strong hierarchy.

### Motion rules
- Hero motion: high impact, short interaction loop.
- Scroll motion: subtle.
- Project cards: responsive micro-interactions.
- GPU effects: lazy-mounted and paused off-screen.
- Respect `prefers-reduced-motion`.
- Never hide essential text behind an animation.

### Avoid
- generic "AI portfolio" visuals;
- excessive neon;
- constant particle noise;
- overuse of gradients;
- animation on every element;
- template-like Aceternity component stacking.

---

## 6. Technical Architecture Plan

### Phase A — Foundation
- Keep React + Vite initially.
- Introduce Tailwind only if required by selected Aceternity components.
- Establish reusable layout, typography, button, card, section and navigation primitives.
- Introduce a consistent content/data model for experience, projects, research, skills and achievements.

### Phase B — UI System
- Add selected Aceternity components.
- Add selected Canvas UI components.
- Add VGPU only where a custom GPU effect is justified.
- Keep third-party source understandable and locally owned where the resource's distribution model supports it.

### Phase C — Content
- Convert raw profile facts into concise portfolio narratives.
- Add links and evidence.
- Ensure project stories communicate personal contribution.
- Prioritize research + systems work for ACM relevance.

### Phase D — UX
- Sticky/compact navigation.
- Smooth anchor navigation.
- Responsive layouts.
- Keyboard navigation.
- Focus states.
- Reduced motion.
- Mobile-first interaction design.

### Phase E — Performance
Targets:
- fast first contentful experience;
- avoid blocking the main thread with effects;
- lazy-load heavy visual components;
- pause off-screen effects;
- cap DPR where appropriate;
- use WebGL fallback where WebGPU is unavailable;
- avoid unnecessary dependencies.

### Phase F — Delivery
- Preserve GitHub Pages deployment.
- Validate Vite production build.
- Verify asset paths for GitHub Pages.
- Add/update deployment configuration if required.
- Produce a clean, reviewable commit history.

---

## 7. AIDLC Workflow

We will execute the work in these stages and keep this document as the source of truth.

### Stage 1 — Discover
**Status: COMPLETE**

Tasks:
- audit current branch;
- audit public LinkedIn/profile data;
- audit existing portfolio content;
- inventory projects, achievements, research and links;
- identify missing evidence.

Exit criteria:
- content inventory complete;
- uncertain claims explicitly flagged.

### Stage 2 — Define
**Status: COMPLETE**

Tasks:
- finalize target audience and ACM Winter School positioning;
- define information architecture;
- define visual language;
- select UI effects/components;
- define performance/accessibility constraints.

Exit criteria:
- approved design/content blueprint.

### Stage 3 — Design
**Status: COMPLETE**

Tasks:
- create component map;
- define page sections;
- define interaction/motion system;
- map VGPU / Canvas UI / Aceternity usage;
- establish responsive behavior.

Exit criteria:
- implementation-ready design specification.

### Stage 4 — Implement
Status: **IN PROGRESS — core portfolio implemented; evidence-rich project and research storytelling underway**.

Tasks:
- refactor app structure;
- build reusable components;
- integrate selected UI resources;
- implement content model;
- add responsive behavior;
- implement GPU/canvas enhancements;
- strengthen project and research evidence hierarchy.

Exit criteria:
- complete portfolio running locally and in production mode.

### Stage 5 — Validate
**Status: NOT STARTED**

Tasks:
- production build;
- functional link checks;
- responsive testing;
- accessibility review;
- reduced-motion review;
- performance review;
- visual consistency review;
- content truth review.

Exit criteria:
- no critical UX, build, accessibility or content issues.

### Stage 6 — Deliver
**Status: NOT STARTED**

Tasks:
- update documentation;
- commit changes;
- deploy via GitHub Pages;
- verify published site;
- prepare final ACM Winter School submission-ready version.

Exit criteria:
- public portfolio is stable, polished and submission-ready.

---

## 8. Task Backlog

### P0 — Must Have
- [ ] Create new portfolio information architecture.
- [ ] Rewrite hero and positioning.
- [ ] Build project showcase with real project narratives.
- [ ] Build experience section.
- [ ] Build research section.
- [ ] Build skills/domain section.
- [ ] Build achievements/certifications section.
- [ ] Build leadership/community section.
- [ ] Build contact/footer.
- [ ] Integrate selected Aceternity components.
- [ ] Integrate at least one meaningful Canvas UI effect.
- [ ] Evaluate/use VGPU for a custom GPU visual layer.
- [ ] Add responsive/mobile UX.
- [ ] Add accessibility and reduced-motion behavior.
- [ ] Verify production build and GitHub Pages deployment.

### P1 — High Value
- [ ] Project detail interactions/modal or dedicated detail route.
- [ ] Research/publication links.
- [ ] Resume download.
- [ ] GitHub project links.
- [ ] LinkedIn CTA.
- [ ] Visual architecture diagrams where useful.
- [ ] Performance instrumentation/checklist.
- [ ] SEO metadata and social preview.

### P2 — Optional
- [ ] WebGPU-specific enhanced mode.
- [ ] Interactive system visualization.
- [ ] Command-palette style navigation.
- [ ] Small "lab notes" / experiments section.
- [ ] Visitor-friendly project filtering.

---

## 9. ACM Winter School Positioning

The portfolio should make the reviewer infer:

> **Abid builds systems, studies how they work, and turns that understanding into practical engineering and research.**

Priority signals:
1. Research quality.
2. Technical depth.
3. Systems thinking.
4. Evidence of initiative.
5. Learning trajectory.
6. Community/leadership.
7. Breadth without looking unfocused.

The portfolio should **not** read like a resume pasted into a webpage.

---

## 10. Acceptance Criteria

### Content
- Every major claim is traceable to a verified source.
- Personal contribution is clear.
- Research and achievements are prominent.
- No exaggerated marketing language.

### Design
- Distinctive but professional.
- Coherent use of the three requested resources.
- Strong typography and spacing.
- No visual effect compromises readability.

### Engineering
- Production build succeeds.
- GitHub Pages deployment works.
- Responsive on mobile/tablet/desktop.
- Keyboard-accessible.
- Reduced-motion compatible.
- GPU/canvas features fail gracefully.
- No unnecessary runtime complexity.

### Application Readiness
- A reviewer can understand who Abid is within 10 seconds.
- Strongest work is discoverable within 30 seconds.
- Research and technical depth are visible without deep scrolling.
- Resume, LinkedIn and GitHub are easy to find.

---

## 11. Change Management

This file is the AIDLC execution contract for the portfolio.

For each future phase:
1. Inspect current state.
2. Update this plan if scope changes.
3. Implement the smallest coherent increment.
4. Validate.
5. Commit with a meaningful message.
6. Record important decisions in this document or adjacent docs.

No major architectural change should be made silently.

---

## 12. First Implementation Milestone

**Milestone:** Portfolio Information Architecture + Design System Foundation

**Status:** Implemented on `portfolio-v1` in commit `831d55a1d88bdadb3ca6767801842079b496faba`.

Deliverables:
- [x] approved section structure;
- [x] component architecture;
- [x] typography/color/motion system;
- [x] initial Aceternity-inspired interaction patterns;
- [x] initial Canvas UI-inspired canvas effect;
- [x] VGPU feasibility decision — optional WebGPU shader field with fallback;
- [x] content schema;
- [x] first polished hero + navigation;
- [x] updated content source.

Validation note: GitHub Actions was not yet reporting a workflow run for the implementation commit when this milestone was recorded; local execution is unavailable through the GitHub connector. Production build verification remains a validation-stage task.

After this milestone, proceed to full section implementation.


## 13. Live Progress Tracking

The detailed task tracker is maintained in `docs/PROJECT-STATUS.md`. It records completed work, current implementation scope, validation gaps, blockers, and the next implementation milestone. Update it after each meaningful implementation increment.


## Latest implementation tracking — accessibility hardening

**Status: IN PROGRESS**

The implementation now includes an explicit skip-navigation path, visible keyboard focus treatment, and additional narrow-screen navigation spacing. These changes satisfy more of the planned UX hardening requirements, but they do not constitute a completed Stage 5 accessibility audit.

**Still required before Stage 5 can close:**
- executable production build;
- keyboard/focus-order validation;
- responsive device/breakpoint validation;
- automated/manual accessibility review;
- performance measurement;
- link and content-truth review;
- GitHub Pages published-site verification.


## 14. Visual + Credential Expansion Plan — Milestone 2B

**Status: PLANNED**

The next iteration responds directly to visual review feedback: the current portfolio is credible but too text-heavy. Milestone 2B will shift the page toward an **evidence-rich visual portfolio** without turning it into a decorative demo.

### 14.1 Core objective

Reduce reading load while increasing technical signal through:
- project visuals and architecture diagrams;
- interactive 3D/scene composition;
- credential/badge evidence;
- visual research artifacts;
- stronger project-card hierarchy;
- more intentional whitespace and section rhythm.

The page should communicate **what was built, what was recognized, and what technologies/systems are involved** before requiring the reviewer to read long paragraphs.

### 14.2 Credentials data architecture

Create a dedicated JSON source of truth for credentials, separate from src/data/portfolio.js:

- src/data/credentials.json
- top-level groups: badges, certificates, and optionally awards
- badge records should contain:
  - id
  - title (only after verification)
  - issuer
  - credlyBadgeId
  - embedHost
  - embedWidth
  - embedHeight
  - publicUrl when verified
  - featured
- certificate records should contain:
  - id
  - title
  - issuer
  - credentialId when available
  - issuedOn when verified
  - certificateUrl or local asset path when supplied/verified
  - skills only when source-backed
  - featured
- never infer badge titles, certificate IDs, dates, URLs, or issuer details from a badge UUID alone.

The supplied Credly embed is the first known badge record, but its human-readable title remains TBD until verified.

### 14.3 Credly presentation

Implement a reusable CredlyBadge component that:
- accepts the JSON record;
- injects the Credly embed script once rather than once per badge;
- renders a responsive badge card around the embed;
- provides a normal link fallback when available;
- avoids rendering duplicate scripts;
- remains usable when the third-party embed is blocked or unavailable.

Credly's official guidance requires the badge to be accepted and public before embedding. The implementation will preserve that assumption and use the official embed mechanism rather than scraping badge imagery.

### 14.4 Certificate presentation

Implement a reusable CertificateCard / CertificateViewer pattern:
- certificate preview first;
- issuer/title/credential metadata second;
- external verification link when available;
- optional PDF/image viewer only for assets supplied by the user;
- modal/lightbox interaction only if it improves review speed;
- no fake certificate thumbnails or verification URLs.

### 14.5 3D / Spline direction

Add Spline as a **fourth visual technology**, complementary to VGPU, Canvas UI and Aceternity.

Planned use:
1. **Hero:** one restrained interactive 3D object/scene representing systems, nodes, infrastructure, or a research instrument.
2. **Systems section:** optional smaller 3D scene or interactive system visualization.
3. **Project storytelling:** only use scene embeds where they explain architecture or interaction, not as decoration.

Preferred integration:
- start with Spline Viewer embed for a contained, maintainable integration;
- evaluate React/Code API only if page-level interaction needs to drive the scene;
- lazy-load or defer the scene;
- provide a static/fallback visual for reduced-motion, unsupported devices, or performance pressure;
- keep core portfolio content independent of the 3D runtime.

Spline's current documentation supports Viewer embeds, React integration and Code API, and its Viewer supports lazy loading. The plan therefore favors Viewer first and deeper runtime control only when justified.

### 14.6 Visual storytelling system

Replace the current text-heavy project treatment with:
- project visual / architecture panel;
- short one-line thesis;
- 2–4 evidence chips;
- contribution/outcome as compact metadata;
- expandable detail for deeper reading;
- award/recognition as a strong visual signal;
- project links only when verified.

Research should gain:
- visual research cards;
- award/venue markers;
- methodology flow;
- optional paper/diagram preview when source material is supplied.

### 14.7 Section rhythm

Planned sequence:

1. Hero + Spline scene
2. Research direction / short profile
3. Experience timeline
4. Featured work — visual project grid
5. Research — visual evidence
6. Systems — interactive/3D technical visualization
7. Credentials — Credly badge wall + certificate gallery
8. Community / leadership
9. Contact

The goal is to make every major viewport visually distinct while retaining a coherent design language.

### 14.8 Performance and accessibility guardrails

- No autoplay-heavy 3D scene on mobile by default.
- Respect prefers-reduced-motion.
- Lazy-load Spline and credential embeds.
- Avoid loading the Credly script once per badge.
- Reserve layout space for third-party embeds to reduce layout shift.
- Keep keyboard-accessible controls and visible focus.
- Use static poster/fallback visuals for 3D scenes.
- Measure actual bundle/load/render cost before Stage 5 closure.
- Do not let third-party embeds block the page's core content.

### 14.9 Implementation order

1. Add src/data/credentials.json schema and verified badge/certificate records.
2. Build reusable credential components.
3. Redesign credentials section into a visual evidence wall.
4. Add project visual/architecture slots and supporting assets.
5. Add Spline hero scene with fallback.
6. Refine project/research visual hierarchy.
7. Rebalance typography, spacing and section density.
8. Validate desktop/mobile/reduced-motion/performance.
9. Verify all credential and external links.
10. Run production build and GitHub Pages validation.

### 14.10 Acceptance criteria for Milestone 2B

- The portfolio is visibly less text-heavy without removing important evidence.
- Credentials are data-driven and maintainable from JSON.
- Credly badges use official embeds and have fallbacks.
- Certificates have a visual presentation and verified metadata.
- Spline contributes a meaningful 3D technical visual rather than a generic hero decoration.
- Existing VGPU, Canvas UI and Aceternity roles remain coherent.
- 3D/third-party embeds do not block or hide core content.
- Mobile and reduced-motion experiences remain usable.
- No credential, project, award, date, URL, or metric is invented.


## 14.1 Milestone 2B implementation checkpoint

**Status: IN PROGRESS**

Implemented:
- Dedicated `src/data/credentials.json` with badge/certificate records.
- Reusable Credly embed component with one-time script injection.
- Reusable certificate visual card with asset and verification-link slots.
- Visual credential wall replacing the previous credentials-only text list.
- Progressive Spline wrapper and reserved 3D systems surface with a static fallback.

Still required:
- verified Credly metadata;
- supplied/verified certificate assets, IDs, dates and URLs;
- actual Spline scene URL/embed;
- project architecture visuals;
- visual density rebalance;
- browser/build/accessibility/performance/GitHub Pages validation.

This checkpoint intentionally does **not** mark the Spline integration complete because no scene URL was supplied or verified.
