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
