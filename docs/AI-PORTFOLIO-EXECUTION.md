# AI Portfolio Development Execution Specification

> **Authoritative instruction file for AI-driven development of this portfolio.**
>
> Repository: `InfX2243/portfolio`  
> Working branch: `portfolio-v1`  
> Application: React 18 + Vite 5  
> Deployment target: GitHub Pages  
> Purpose: Official personal portfolio and ACM Winter School application portfolio.

---

## 0. How the AI Must Use This File

This document is the **single source of truth for portfolio development tasks**.

When an AI is asked to continue development of this portfolio:

1. Read this file completely before changing code.
2. Treat this file as the authoritative product, UX, architecture, content, and validation specification.
3. Do not use old planning documents as competing requirements.
4. Existing repository code is implementation evidence, not automatically the desired final architecture.
5. Inspect the current repository state before modifying anything.
6. Preserve verified information and existing functionality unless this document explicitly requires changing it.
7. Never invent portfolio facts, achievements, metrics, dates, responsibilities, project results, publication details, URLs, credential IDs, or technologies.
8. If required information is missing, implement a clearly marked data placeholder or record the missing information rather than fabricating it.
9. Prefer evidence over adjectives.
10. Prefer maintainable engineering over visual novelty.
11. Every major architectural change must be intentional, reviewable, and reflected in this document when the architecture changes.
12. Do not mark a task complete merely because code was written. Validation is required.

### Core rule

**The portfolio must communicate what was actually built, what the portfolio owner personally contributed, what was learned, and what evidence exists.**

The goal is not to make the owner appear more senior than they are. The goal is to make the owner's real technical trajectory easy to understand and credible.

---

# 1. Product Goal

Build a technically credible, visually distinctive, accessible, performant, multi-page personal portfolio for:

**Abid Ahmed Shaikh**

Primary use cases:

- official personal portfolio;
- ACM Winter School application;
- technical recruiter review;
- engineering hiring-manager review;
- research/community evaluation;
- professional networking.

The site must communicate:

1. Software engineering capability.
2. Cloud and infrastructure experience.
3. AI/GenAI engineering exposure.
4. Backend/system thinking.
5. Research ability and curiosity.
6. Evidence of achievement.
7. Learning trajectory.
8. Community/leadership involvement.

The portfolio must feel like an engineer/researcher built it, not like a generic "AI portfolio" template.

---

# 2. Primary Positioning

Preferred positioning:

> **Early-career software engineer building cloud-native, AI-enabled and backend systems.**

Preferred supporting description:

> Information Technology undergraduate focused on backend engineering, cloud infrastructure and applied AI, with research experience spanning award-recognized work.

The exact final copy must remain truthful to verified profile information.

Avoid positioning that implies:

- senior engineer status without evidence;
- production ownership that did not occur;
- research expertise beyond demonstrated work;
- invented quantitative impact;
- exaggerated claims such as "expert", "world-class", "industry-leading", or "revolutionary".

---

# 3. Portfolio Strategy

The portfolio must NOT be a single long page only.

## 3.1 Required model

Use a **multi-page portfolio with a strong landing page**.

The landing page is the executive summary.

Dedicated pages provide depth.

Recommended structure:

- `/` — Landing / Home
- `/projects` — All projects
- `/projects/:slug` — Individual project case study
- `/research` — Research and publications
- `/achievements` — Awards, certifications and credentials
- `/experience` — Professional experience
- `/about` — About, technical direction and community
- `/contact` — Contact / collaboration

If the routing strategy needs to differ because of GitHub Pages constraints, use the most reliable equivalent architecture. Do not sacrifice deployment reliability for routing complexity.

## 3.2 Why multi-page

The homepage should answer:

- Who is Abid?
- What does he work on?
- What are his strongest projects?
- What evidence exists?
- Where can I explore further?

Dedicated pages should answer deeper questions without making the landing page excessively long.

This creates two levels of information:

### Level 1 — Fast scan

A recruiter or reviewer should understand the profile in approximately 10–30 seconds.

### Level 2 — Deep inspection

A technical reviewer should be able to spend several minutes exploring:

- architecture;
- decisions;
- implementation;
- research;
- credentials;
- experience;
- project evidence.

---

# 4. Information Architecture

## 4.1 Home

Purpose: high-signal executive summary.

Order:

1. Navigation
2. Hero
3. Short positioning statement
4. Selected work
5. Research highlight
6. Experience highlight
7. Technical domains
8. Selected achievements
9. Community/leadership highlight
10. Contact CTA
11. Footer

The homepage should NOT contain every project, every credential, every certificate, or every paragraph.

Use "View all" links to dedicated pages.

---

## 4.2 Projects

Purpose: complete project portfolio.

Required features:

- project filtering only if useful;
- clear project hierarchy;
- featured projects first;
- project type;
- technologies;
- role/contribution;
- outcome/recognition;
- evidence;
- GitHub/demo/paper links when verified.

Initial priority:

### Featured

1. Cognitrace
2. Ascend APEX
3. Green Passport

### Secondary

4. Microservices & CI/CD Pipeline Builder
5. Cloud Web Application Builder

Do not give weak projects equal visual weight to the strongest projects.

---

## 4.3 Project Case Study

Every strong project should support a dedicated detail route.

Recommended structure:

1. Project title
2. One-line value proposition
3. Recognition/context
4. Hero visual
5. Problem
6. Context
7. My role
8. Architecture
9. Technical decisions
10. Implementation
11. Challenge
12. Trade-offs
13. Result
14. Evidence
15. What I learned
16. Technology stack
17. GitHub/demo/paper links
18. Related projects
19. Back to projects

Do not create fake case-study sections if the required information is unavailable.

Instead, display only verified information and mark future evidence requirements in the data source.

---

## 4.4 Research

Purpose: make research a first-class differentiator.

Include:

- Cognitrace;
- Green Passport;
- verified publications;
- conference information;
- awards;
- research themes;
- methodology;
- contribution;
- paper links;
- abstracts or summaries when verified;
- diagrams/visual evidence when available.

Research page should make it easy to distinguish:

- project;
- research work;
- publication;
- award;
- venue;
- personal contribution.

Never imply publication status without evidence.

---

## 4.5 Achievements

Purpose: evidence page.

Include:

### Awards

- ICSSSD 2026 Best Paper Award for Cognitrace, only with verified supporting details.
- Ascend APEX Oracle hackathon recognition, only with verified details.

### Certifications

Use the existing data-driven credential model.

Credential metadata must be verified before presenting:

- exact title;
- issuer;
- date;
- credential ID;
- public verification URL.

### Credly

Use official Credly embeds when available.

Important:

- load the Credly script once;
- do not inject one script per badge;
- provide graceful fallback;
- reserve layout space;
- lazy-load where appropriate;
- never let third-party content block core portfolio content.

---

## 4.6 Experience

Purpose: show professional engineering context.

Initial known experience:

- Bitkraft Technologies — Software Engineer Intern.

Only include responsibilities, projects, technologies and outcomes that are verified.

Experience entries should communicate:

- organization;
- role;
- period;
- context;
- responsibilities;
- technical areas;
- selected accomplishments;
- technologies;
- evidence where appropriate.

Do not inflate internship scope.

---

## 4.7 About

Purpose: explain the person behind the projects.

Include:

- education;
- technical interests;
- engineering philosophy;
- research direction;
- learning trajectory;
- community involvement;
- selected technical domains.

Avoid turning About into a generic personal essay.

---

## 4.8 Contact

Purpose: make professional contact easy.

Preferred CTAs:

- Email, once verified.
- LinkedIn.
- GitHub.
- Resume download, once supplied.

The user should not have to search the site for contact information.

---

# 5. Navigation

Desktop navigation should include:

- Home
- Projects
- Research
- Achievements
- Experience
- About
- Contact

The navigation may use a compact visual treatment.

Mobile navigation must:

- be keyboard accessible;
- have correct ARIA state;
- close on route selection;
- close on Escape;
- maintain visible focus;
- respect reduced motion.

Use active-route indication.

Do not make navigation visually clever at the expense of usability.

---

# 6. Landing Page Design

The landing page should be visually impressive but evidence-first.

## Hero

Recommended content:

- name;
- concise role;
- short positioning statement;
- primary CTA: Explore work;
- secondary CTA: Resume or LinkedIn;
- optional technical visual layer.

Existing VGPU and Canvas effects may be retained where they provide genuine identity.

Spline should remain optional and must not be required for understanding the page.

## Hero principle

The hero must answer:

> Who is this person and what kind of engineering/research work do they do?

within a few seconds.

Avoid vague hero copy that sounds impressive but says nothing concrete.

---

# 7. Design System

## Visual direction

**Research lab × cloud systems × GPU computing × modern editorial portfolio**

Characteristics:

- dark technical base;
- high contrast;
- restrained electric accents;
- fine grid;
- technical labels;
- editorial typography;
- generous whitespace;
- subtle depth;
- controlled motion.

Existing typography direction:

- Manrope for primary UI/body;
- DM Mono for technical labels/metadata.

Suggested palette:

- Background: `#070A0F`
- Surface: `#0D121A`
- Secondary surface: `#111923`
- Text: `#F3F7FA`
- Muted: `#98A6B5`
- Border: `#24303C`
- Primary accent: `#7DD3FC`
- Secondary accent: `#A78BFA`

These are guidance, not a reason to rewrite the entire visual system if the existing implementation is already coherent.

---

# 8. Required Design Resources

These resources are first-class inputs.

## 8.1 VGPU

Source:

`https://vgpu.sh/`

Use for:

- custom WebGPU/WGSL effects;
- technical visual identity;
- GPU-native experimentation;
- subtle system-like visualizations.

Rules:

- progressive enhancement;
- graceful fallback;
- no accessibility dependency;
- no effect should hide content;
- no unnecessary GPU workload.

---

## 8.2 Canvas UI

Source:

`https://canvasui.dev/`

Use for:

- canvas effects;
- hero/section reveals;
- particles;
- interactive technical textures;
- visual transitions.

Rules:

- effects must remain secondary to content;
- support reduced motion;
- avoid constant CPU/GPU activity;
- pause or reduce off-screen effects when practical.

---

## 8.3 Aceternity UI

Source:

`https://ui.aceternity.com/`

Use for:

- selected hero primitives;
- cards;
- bento layouts;
- spotlight interactions;
- navigation/CTA patterns;
- timelines.

Rules:

- use selectively;
- maintain one coherent design system;
- do not create a collection of unrelated demo components;
- avoid visual overkill.

---

# 9. Performance Architecture

Performance is a first-class requirement.

The current repository has heavy visual dependencies, including Spline and WASM/WebGPU-related assets.

Therefore:

1. Do not assume lazy initialization solves bundle-size problems.
2. Measure production bundle size.
3. Inspect generated chunks.
4. Avoid shipping heavyweight dependencies to every route when possible.
5. Route-level code splitting should be used where practical.
6. Lazy-load heavy visual components.
7. Do not load Spline on routes that do not need it.
8. Consider removing Spline if it cannot justify its performance cost.
9. Pause off-screen canvas/GPU effects where practical.
10. Cap device pixel ratio where appropriate.
11. Respect reduced motion.
12. Prefer CSS/HTML for ordinary UI instead of canvas.
13. Third-party embeds must never block core content.

Performance target:

**The portfolio must feel fast before it feels impressive.**

---

# 10. Accessibility

Required:

- semantic HTML;
- logical heading hierarchy;
- keyboard navigation;
- visible focus states;
- skip navigation;
- accessible mobile navigation;
- accessible disclosures;
- descriptive link labels;
- decorative graphics marked appropriately;
- sufficient contrast;
- reduced-motion support;
- no information conveyed by animation alone.

Test:

- keyboard only;
- reduced motion;
- narrow viewport;
- screen-reader-friendly structure where practical;
- focus order.

---

# 11. Responsive Strategy

Required viewports:

- 320px;
- 375px;
- 430px;
- tablet;
- desktop;
- large desktop.

Mobile is not a compressed desktop layout.

On mobile:

- simplify navigation;
- reduce decorative effects;
- prioritize content;
- avoid horizontal overflow;
- keep project evidence readable;
- avoid massive hero height;
- ensure buttons have usable touch targets.

---

# 12. Content Architecture

The portfolio must be data-driven.

Preferred data domains:

- `profile`
- `experience`
- `projects`
- `research`
- `achievements`
- `credentials`
- `leadership`
- `skills`

Recommended future structure:

`src/data/profile.js`  
`src/data/projects.js`  
`src/data/research.js`  
`src/data/experience.js`  
`src/data/achievements.js`  
`src/data/credentials.json`

Do not duplicate the same facts in many components.

A page should consume structured data rather than hard-coded repeated content.

---

# 13. Project Data Model

Each project should support fields such as:

- `id`
- `slug`
- `title`
- `type`
- `shortDescription`
- `problem`
- `context`
- `role`
- `contribution`
- `approach`
- `architecture`
- `technicalDecisions`
- `challenge`
- `tradeoffs`
- `outcome`
- `evidence`
- `learning`
- `tags`
- `featured`
- `year`
- `award`
- `links`
- `visuals`

Only populate fields with verified information.

---

# 14. Project Evidence Standard

Every featured project must answer:

### What problem?

What problem was being solved?

### Why does it matter?

What was the context?

### What did Abid personally do?

This is mandatory.

### How was it built?

Explain architecture and important technical decisions.

### What was difficult?

Show engineering reasoning.

### What happened?

Show result, award, publication, deployment, adoption, benchmark or other evidence when available.

### What was learned?

Show reflection and technical growth.

A technology list alone is insufficient.

---

# 15. Research Evidence Standard

Every research entry should distinguish:

- research question/problem;
- context;
- methodology;
- engineering contribution;
- result;
- publication/venue status;
- recognition;
- source links.

Do not use words like "published", "presented", "peer-reviewed", "accepted", "award-winning" unless the relevant claim is verified.

---

# 16. Achievements and Credential Rules

Credential pages should communicate evidence without becoming a badge wall that overwhelms the portfolio.

Priority order:

1. Awards;
2. major certifications;
3. selected credentials;
4. complete credential inventory.

The homepage should show only selected evidence.

The achievements page can contain the full verified inventory.

Do not fabricate credential metadata from badge IDs.

---

# 17. Technical Skills

Do not use a giant undifferentiated technology cloud.

Group skills.

Suggested groups:

### Software Engineering

- Backend
- APIs
- TypeScript
- Node.js
- Python

### Cloud & Infrastructure

- AWS
- OCI
- Docker
- Terraform
- CI/CD

### AI

- GenAI
- RAG
- Vector Search
- Bedrock
- SageMaker

### Interactive Engineering

- React
- Next.js
- Unity
- AR

### Research

- Applied AI
- Systems
- Technical communication

Only list technologies that are supported by verified project/profile evidence.

---

# 18. Route Architecture

Preferred React structure:

```
src/
  app/
    AppRouter.jsx
  pages/
    HomePage.jsx
    ProjectsPage.jsx
    ProjectDetailPage.jsx
    ResearchPage.jsx
    AchievementsPage.jsx
    ExperiencePage.jsx
    AboutPage.jsx
    ContactPage.jsx
    NotFoundPage.jsx
  components/
    layout/
    navigation/
    sections/
    projects/
    research/
    credentials/
    visual/
    ui/
  data/
  styles/
```

The exact folder structure may differ if the existing project architecture provides a better maintainable solution.

Do not introduce a routing framework unnecessarily.

If React Router is selected, configure GitHub Pages correctly.

---

# 19. GitHub Pages Routing Requirement

GitHub Pages hosting requires special attention for client-side routing.

Before choosing browser-history routing:

1. Confirm how the deployment currently publishes assets.
2. Confirm whether direct navigation to nested routes works.
3. If necessary, implement a GitHub Pages-compatible fallback strategy.
4. Test direct navigation to:
   - `/projects`
   - `/research`
   - `/achievements`
   - `/experience`
   - `/about`
   - `/contact`
   - `/projects/<slug>`
5. Test refresh on every route.

A beautiful routing architecture that breaks on GitHub Pages is unacceptable.

---

# 20. SEO and Metadata

Required:

- unique document title per route;
- meta description;
- canonical strategy where appropriate;
- Open Graph metadata;
- social preview image;
- favicon;
- meaningful page headings;
- semantic content.

Recommended:

- sitemap;
- robots.txt;
- structured metadata if justified.

Do not add SEO spam.

---

# 21. Homepage Content Hierarchy

The homepage should prioritize:

### Tier 1

- identity;
- positioning;
- strongest work;
- research signal;
- primary CTA.

### Tier 2

- experience;
- technical domains;
- selected achievements.

### Tier 3

- additional credentials;
- community;
- supporting details.

Everything else belongs on deeper pages.

---

# 22. Page-Specific Visual Strategy

## Home

Most visually expressive.

Use:

- VGPU;
- Canvas UI;
- selected Aceternity interactions;
- optional Spline.

## Projects

More editorial and evidence-driven.

Use:

- project cards;
- screenshots;
- architecture diagrams;
- technical metadata;
- subtle transitions.

## Project detail

Most information-rich.

Use:

- large hero visual;
- architecture;
- code/system diagrams;
- decision cards;
- results.

Avoid decorative animation that competes with technical content.

## Research

Academic/editorial visual language.

Use:

- research cards;
- timelines;
- evidence panels;
- publication/award metadata.

## Achievements

Evidence-focused.

Use:

- awards;
- credential cards;
- verified badges;
- certificate previews.

## Experience

Timeline/editorial structure.

## About

Human + technical.

## Contact

Simple and direct.

---

# 23. Visual Evidence Requirements

The site should progressively replace generic visual placeholders with real evidence.

Preferred project visuals:

- screenshots;
- architecture diagrams;
- system diagrams;
- terminal/build output where meaningful;
- product UI;
- research figures;
- deployment diagrams;
- benchmark charts;
- verified award/paper visuals.

Do not create fake screenshots.

Do not use generated diagrams that imply an architecture the project did not actually have.

If an architecture diagram is unavailable, use a neutral visual placeholder labeled appropriately.

---

# 24. Current Known Portfolio Projects

Known projects include:

1. Cognitrace
2. Ascend APEX
3. Green Passport
4. Microservices & CI/CD Pipeline Builder
5. Cloud Web Application Builder

The AI must inspect existing repository data before changing descriptions.

Do not invent:

- users;
- traffic;
- performance;
- team size;
- architecture;
- cloud services;
- deployment;
- business outcomes;
- metrics.

---

# 25. Required Missing Information

When content is missing, the AI should maintain a clear TODO list rather than fabricate.

## Profile

Need verification for:

- preferred professional title;
- resume;
- email;
- location, if desired;
- preferred contact channels.

## Bitkraft

Need:

- exact responsibilities;
- projects worked on;
- technologies;
- personal contribution;
- measurable outcomes if any;
- confidentiality limitations.

## Cognitrace

Need:

- problem statement;
- research question;
- methodology;
- personal contribution;
- technical stack;
- architecture;
- results;
- paper/publication link;
- conference information;
- award evidence;
- screenshots/figures;
- GitHub/demo if public.

## Ascend APEX

Need:

- problem;
- target users;
- solution;
- personal role;
- implementation;
- Oracle services used;
- technical architecture;
- reason for winning;
- screenshots;
- demo/repository;
- award evidence.

## Green Passport

Need:

- problem;
- research question;
- methodology;
- contribution;
- result;
- conference/paper link;
- visuals.

## Microservices / CI/CD

Need:

- repository;
- architecture;
- number/type of services;
- technologies;
- deployment;
- CI/CD implementation;
- infrastructure;
- testing;
- metrics if available.

## Cloud Web Application Builder

Need:

- repository;
- live URL;
- purpose;
- users;
- architecture;
- database;
- authentication;
- cloud services;
- deployment;
- metrics.

## Credentials

Need:

- exact credential titles;
- issuers;
- IDs;
- dates;
- verification URLs;
- public assets.

---

# 26. AI Implementation Workflow

For every implementation session:

## Step 1 — Inspect

Inspect:

- current branch;
- package.json;
- source tree;
- routing;
- data model;
- styles;
- build configuration;
- deployment workflow.

Do not assume the repository matches this document perfectly.

## Step 2 — Compare

Identify:

- completed requirements;
- partially completed requirements;
- missing requirements;
- regressions.

## Step 3 — Plan

Choose the smallest coherent implementation increment.

Do not refactor unrelated code.

## Step 4 — Implement

Make the required changes.

Keep components reusable.

Keep content data-driven.

## Step 5 — Validate

At minimum:

- production build;
- route behavior;
- accessibility basics;
- responsive behavior;
- link correctness;
- console/runtime errors where testable;
- performance impact of heavy dependencies.

## Step 6 — Review

Ask:

- Did this improve evidence?
- Did this improve clarity?
- Did this add unnecessary complexity?
- Did this introduce unverifiable claims?
- Did this hurt performance?
- Did this hurt accessibility?

## Step 7 — Record

Update this specification only when:

- architecture changes;
- requirements change;
- a major decision is made;
- a new blocker is discovered;
- a milestone is completed.

---

# 27. Implementation Phases

## Phase 0 — Repository Audit

- [ ] Inspect current repository.
- [ ] Inspect `portfolio-v1`.
- [ ] Inspect package/dependencies.
- [ ] Inspect current routes.
- [ ] Inspect data model.
- [ ] Inspect deployment workflow.
- [ ] Inspect existing visual components.
- [ ] Record current performance risks.

---

## Phase 1 — Information Architecture

- [ ] Introduce route architecture.
- [ ] Build shared layout.
- [ ] Build global navigation.
- [ ] Build footer.
- [ ] Build 404 page.
- [ ] Ensure GitHub Pages compatibility.
- [ ] Preserve existing landing-page functionality.

---

## Phase 2 — Landing Page

- [ ] Rewrite positioning.
- [ ] Build strong hero.
- [ ] Keep VGPU only if useful.
- [ ] Keep Canvas UI effects only if useful.
- [ ] Evaluate Spline cost.
- [ ] Add selected projects.
- [ ] Add research highlight.
- [ ] Add experience highlight.
- [ ] Add technical domains.
- [ ] Add selected achievements.
- [ ] Add final CTA.

---

## Phase 3 — Projects

- [ ] Build Projects page.
- [ ] Build project card system.
- [ ] Build project detail routes.
- [ ] Build project data model.
- [ ] Add evidence hierarchy.
- [ ] Add screenshots/architecture visuals when verified.
- [ ] Add GitHub/demo links when verified.
- [ ] Feature strongest three projects.

---

## Phase 4 — Research

- [ ] Build Research page.
- [ ] Add Cognitrace.
- [ ] Add Green Passport.
- [ ] Separate research/project/publication/award concepts.
- [ ] Add verified links.
- [ ] Add research visual evidence.
- [ ] Add methodology/technical contribution where available.

---

## Phase 5 — Achievements

- [ ] Build Achievements page.
- [ ] Add awards.
- [ ] Add certifications.
- [ ] Add Credly gallery.
- [ ] Add certificate gallery.
- [ ] Verify metadata.
- [ ] Add source/verification links.
- [ ] Reduce badge dominance on homepage.

---

## Phase 6 — Experience

- [ ] Build Experience page.
- [ ] Add Bitkraft.
- [ ] Add verified responsibilities.
- [ ] Add technical context.
- [ ] Add evidence where appropriate.

---

## Phase 7 — About

- [ ] Build About page.
- [ ] Add education.
- [ ] Add technical direction.
- [ ] Add research trajectory.
- [ ] Add community/leadership.
- [ ] Keep concise.

---

## Phase 8 — Contact

- [ ] Build Contact page.
- [ ] Add verified email.
- [ ] Add LinkedIn.
- [ ] Add GitHub.
- [ ] Add resume.
- [ ] Add simple CTA.

---

## Phase 9 — Performance

- [ ] Run production build.
- [ ] Inspect chunk sizes.
- [ ] Identify heavy dependencies.
- [ ] Route-split heavy pages/components.
- [ ] Lazy-load Spline.
- [ ] Lazy-load third-party embeds.
- [ ] Pause off-screen effects where practical.
- [ ] Test reduced motion.
- [ ] Test low-powered/mobile conditions.
- [ ] Remove unnecessary dependencies.

---

## Phase 10 — Accessibility

- [ ] Keyboard audit.
- [ ] Focus audit.
- [ ] Heading hierarchy.
- [ ] Navigation semantics.
- [ ] Mobile navigation semantics.
- [ ] Contrast.
- [ ] Reduced motion.
- [ ] Form/link labeling.
- [ ] Decorative media handling.

---

## Phase 11 — SEO / Sharing

- [ ] Page titles.
- [ ] Meta descriptions.
- [ ] Open Graph.
- [ ] Twitter/social metadata where useful.
- [ ] Favicon.
- [ ] Sitemap.
- [ ] Robots.
- [ ] Social preview image.

---

## Phase 12 — Final Validation

- [ ] Production build passes.
- [ ] All routes work.
- [ ] Direct route navigation works on GitHub Pages.
- [ ] Refresh works on nested routes.
- [ ] No broken internal links.
- [ ] No broken verified external links.
- [ ] No console-critical errors.
- [ ] Mobile works.
- [ ] Desktop works.
- [ ] Reduced motion works.
- [ ] Keyboard navigation works.
- [ ] Performance reviewed.
- [ ] Content truth reviewed.
- [ ] Final visual consistency review.
- [ ] Published site verified.

---

# 28. Priority System

## P0 — Critical

Must be solved before official portfolio submission:

- truthful positioning;
- strong landing page;
- multi-page architecture;
- strongest project evidence;
- research page;
- achievements page;
- experience page;
- contact/resume;
- responsive UX;
- accessibility;
- production build;
- GitHub Pages routing/deployment;
- no fabricated content.

## P1 — High value

- project case studies;
- architecture diagrams;
- screenshots;
- verified research links;
- SEO/social metadata;
- README;
- performance optimization;
- refined visual hierarchy.

## P2 — Nice to have

- advanced WebGPU visualization;
- command palette;
- experimental lab notes;
- project filters;
- richer interactive systems visualization.

## P3 — Avoid until fundamentals are complete

- unnecessary 3D;
- heavy particle systems;
- decorative animation;
- complicated shader experiments;
- analytics dashboards;
- gimmicky interactions.

---

# 29. Design Quality Bar

The final site should NOT feel:

- like a template;
- like a resume dumped into React;
- like an AI-generated landing page;
- like an Aceternity component gallery;
- like a gaming website;
- like a corporate SaaS homepage.

It SHOULD feel:

- technical;
- intentional;
- research-aware;
- concise;
- credible;
- modern;
- evidence-driven;
- memorable without being distracting.

---

# 30. Recruiter / Hiring Manager Test

A reviewer should be able to answer quickly:

1. Who is Abid?
2. What does he build?
3. What are his strongest technical areas?
4. What has he actually built?
5. What did he personally contribute?
6. What evidence exists?
7. Does he have research potential?
8. Has he demonstrated initiative?
9. How can I inspect his work?
10. How can I contact him?

If these answers require excessive scrolling or interpretation, simplify the site.

---

# 31. ACM Winter School Test

The portfolio should make the reviewer infer:

> **Abid builds systems, studies how they work, and turns that understanding into practical engineering and research.**

Priority signals:

1. Research quality.
2. Technical depth.
3. Systems thinking.
4. Initiative.
5. Learning trajectory.
6. Community/leadership.
7. Breadth without looking unfocused.

The portfolio should support the application without looking like a temporary application microsite.

---

# 32. Performance Acceptance Criteria

Before final delivery:

- production build succeeds;
- generated chunks are inspected;
- no avoidable huge dependency is shipped globally;
- heavy visual components are lazy-loaded;
- Spline is justified by actual value;
- third-party embeds do not block content;
- visual effects do not cause obvious interaction jank;
- mobile remains usable;
- reduced motion remains usable.

If a visual feature substantially hurts performance, remove or simplify it.

---

# 33. Accessibility Acceptance Criteria

Before final delivery:

- keyboard navigation works;
- visible focus exists;
- navigation is semantic;
- mobile navigation is accessible;
- headings are logically ordered;
- content remains understandable without animation;
- reduced motion works;
- interactive controls have accessible names;
- contrast is sufficient;
- decorative visuals do not interfere with screen readers.

---

# 34. Content Truth Acceptance Criteria

Before final delivery:

- no invented metrics;
- no invented project architecture;
- no invented user counts;
- no invented responsibilities;
- no invented publication status;
- no invented dates;
- no invented credential information;
- no invented URLs;
- no exaggerated technical claims.

If uncertain:

**ask, flag, or omit — never fabricate.**

---

# 35. Deployment Acceptance Criteria

The official portfolio must be deployable through the existing GitHub Pages workflow.

Required:

- correct Vite base path;
- production build passes;
- deployment workflow passes;
- route strategy works with GitHub Pages;
- assets load correctly;
- refresh on nested routes is handled;
- published site is verified after deployment.

A deployment that only works from the homepage is not acceptable for a multi-page portfolio.

---

# 36. Documentation Requirements

The repository should eventually contain:

- useful README;
- this AI execution specification;
- architecture documentation if needed;
- content source/data files;
- deployment instructions where useful.

The README should explain:

- what the project is;
- technology stack;
- architecture;
- local development;
- production build;
- deployment;
- major design decisions.

Do not create documentation purely for volume.

---

# 37. Git and Change Discipline

Use meaningful commits.

Preferred examples:

- `feat: introduce multi-page portfolio routing`
- `feat: add project case-study pages`
- `feat: add research page`
- `feat: add achievements page`
- `perf: lazy-load visual effects`
- `a11y: improve mobile navigation and focus states`
- `fix: support GitHub Pages nested routes`
- `docs: update portfolio architecture`

Avoid meaningless commits such as:

- `update`
- `changes`
- `fix stuff`
- `final final`

---

# 38. Important Existing Implementation Notes

The current repository already contains meaningful implementation work, including:

- React/Vite application;
- data-driven portfolio content;
- VGPU field;
- Canvas particle effect;
- spotlight card interaction;
- Credly badge component;
- certificate cards;
- Spline wrapper;
- project visual evidence;
- research visual evidence;
- mobile navigation;
- skip link;
- focus-visible states;
- reduced-motion handling;
- accessible disclosures.

Do not delete or replace these blindly.

First determine:

1. whether the feature is useful;
2. whether it fits the new multi-page architecture;
3. whether it creates performance problems;
4. whether it should be shared or route-specific.

---

# 39. Important Current Performance Risk

The current implementation includes heavy visual dependencies.

The AI must explicitly investigate the production bundle before final delivery.

Particular attention:

- Spline viewer;
- WASM assets;
- WebGPU-related assets;
- third-party credential embeds.

Do not assume conditional initialization means conditional download.

The preferred outcome is:

- lightweight core;
- route-level loading;
- optional visual enhancement;
- fast content rendering.

---

# 40. Final Site Blueprint

The intended final experience is:

## Home

**Identity → strongest work → research → experience → technical focus → selected evidence → CTA**

## Projects

**All meaningful work**

## Project detail

**Problem → contribution → architecture → decisions → implementation → result → evidence → learning**

## Research

**Question → methodology → contribution → result → publication/award evidence**

## Achievements

**Awards → certifications → credentials**

## Experience

**Professional engineering context**

## About

**Education → direction → community → technical philosophy**

## Contact

**Simple professional connection**

---

# 41. Definition of Done

The portfolio is DONE only when all of the following are true:

### Product

- [ ] Multi-page information architecture is implemented.
- [ ] Homepage works as an executive summary.
- [ ] Deep pages provide meaningful additional evidence.
- [ ] Navigation is clear.

### Content

- [ ] Strongest projects have evidence-rich narratives.
- [ ] Research is first-class.
- [ ] Achievements are verifiable.
- [ ] Experience is truthful.
- [ ] Contact information is obvious.

### Design

- [ ] Visual identity is coherent.
- [ ] VGPU/Canvas UI/Aceternity are used intentionally.
- [ ] Effects support content.
- [ ] Mobile design is deliberate.

### Engineering

- [ ] Production build passes.
- [ ] Routing works.
- [ ] GitHub Pages deployment works.
- [ ] Heavy dependencies are controlled.
- [ ] Data is structured and reusable.

### Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus states work.
- [ ] Reduced motion works.
- [ ] Mobile navigation is accessible.
- [ ] Semantic structure is sound.

### Performance

- [ ] Bundle reviewed.
- [ ] Heavy components lazy-loaded where appropriate.
- [ ] Visual effects do not dominate runtime cost.
- [ ] Mobile performance is acceptable.

### Credibility

- [ ] No fabricated facts.
- [ ] Personal contribution is clear.
- [ ] Evidence is easy to inspect.
- [ ] Claims are proportional to experience.

---

# 42. Final Principle

When forced to choose between:

- more animation vs. more evidence;
- more pages vs. better page hierarchy;
- more technologies vs. clearer technical decisions;
- more credentials vs. stronger project proof;
- visual novelty vs. performance;
- cleverness vs. accessibility;

**choose evidence, clarity, performance, accessibility, and credibility.**

The portfolio should not try to convince the visitor that Abid is already a senior engineer.

It should make the visitor think:

> **This person is technically serious, has already built interesting things, can explain their decisions, has research potential, and is likely to grow quickly.**

That is the target outcome.
