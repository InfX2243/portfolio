# Portfolio V1 — Product Requirements

> **Status:** Design direction agreed; page-by-page visual requirements documented; ready for implementation planning.  
> **Repository:** `InfX2243/portfolio`  
> **Working branch:** `portfolio-v1`  
> **Last updated:** 2026-10-10  
> **Companion sources:** `docs/AI-PORTFOLIO-EXECUTION.md` (authoritative implementation and engineering constraints), `docs/ABOUT-ME.md` (personal context and content integrity), `docs/portfolio-content.md` (content inventory), `docs/PROJECT-STATUS.md` (implementation status).

## 1. Purpose

Build and release an official, polished, credible, multi-page portfolio for Abid Ahmed Shaikh. It should help recruiters, engineering hiring managers, research/community reviewers, and professional contacts quickly understand his current profile and then explore deeper evidence of his work.

The site should communicate real work and technical growth—not merely list technologies or rely on visual effects. The current implementation already contains substantial structure; requirements work must audit and refine it rather than assume a ground-up rewrite is needed.

## 2. Audience and primary user goals

Visitors should be able to:

1. Understand who Abid is, his current career/education stage, and his main engineering interests within a short homepage scan.
2. Find the strongest projects and understand the problem, Abid's contribution, technical approach, and verified outcomes.
3. Explore research, awards, certifications, and professional experience without confusing a project with a publication or an award with a credential.
4. Reach the relevant GitHub, LinkedIn, email, or resume resource when verified and available.
5. Navigate comfortably on mobile, desktop, keyboard, and reduced-motion settings.

Primary audiences:
- Recruiters and hiring managers.
- Technical reviewers and engineering peers.
- Research, academic, and community reviewers, including the ACM Winter School application context.
- Potential collaborators and professional contacts.

## 3. Positioning and content principles

Working positioning: **an early-career engineer who learns by building, experiments across software/cloud/applied AI, and works to make each iteration better.**

This is a content direction, not final homepage copy. Use `docs/ABOUT-ME.md` as the canonical personal context and preserve these rules:

- Use evidence before adjectives.
- Do not invent responsibilities, metrics, project outcomes, dates, credentials, publication status, URLs, or technical proficiency.
- Distinguish confirmed information, user-reported details, self-assessments, draft copy, and future aspirations.
- The supplied resume is outdated (user says it was last updated 2026-05-17); it is secondary context, not automatically the current source of truth.
- The latest user-reported current role is **Software Developer Intern at Bitkraft**; an older repository entry says **Software Engineer Intern**. Resolve the official title before final public sign-off.
- User-reported education: B.E. in Information Technology, Semester 7, expected graduation in 2027. Confirm institution spelling and exact dates before final public sign-off.
- Tony Stark/JARVIS are personal inspiration and optional story context, not the site's entire identity or a claim of fictional capabilities.
- Treat Oracle APEX, full-stack/AWS Builder Jacket, RAG bootcamp, and AWS Academy examples as leads that need detail/evidence before publishing as achievement claims.

## 4. Required information architecture

The product is a multi-page site, not a single long landing page.

Required public routes:
- `/` — Home / executive summary.
- `/projects` — project archive.
- `/projects/:slug` — project detail/case study.
- `/research` — research and publication archive.
- `/achievements` — awards and credentials.
- `/experience` — professional experience.
- `/about` — background, engineering philosophy, technical direction, and community.
- `/contact` — clear contact and profile links.
- Not-found route/page.

The exact route implementation may follow the existing lightweight router if it remains maintainable and reliable. The home page must summarize and guide; detail pages should provide depth without forcing every detail onto the homepage.

### 4.1 Home

Prioritize:
1. Identity and concise role/positioning.
2. Selected work.
3. Research signal.
4. Professional experience.
5. Technical domains.
6. Selected achievements.
7. Community/leadership where supported.
8. Clear contact/exploration actions.

A visitor should quickly understand who Abid is and what kind of work he builds. Do not fill the homepage with every project, credential, or long biography.

### 4.2 Projects and project details

- Feature the strongest verified projects first. Current intended priority: Cognitrace, Ascend APEX, Green Passport; Microservices & CI/CD Pipeline Builder and Cloud Web Application Builder are secondary until content/evidence warrants otherwise.
- Project cards should show concise purpose, type/context, technical focus, contribution/role when known, verified recognition, and real links when available.
- A case study should cover, where information exists: problem/context, personal contribution, approach/architecture, meaningful technical decisions and trade-offs, challenge, outcome/evidence, learning, stack, and verified resources.
- Hide unknown sections instead of inventing filler. A technology list alone is not a sufficient case study.
- Do not invent screenshots, architecture diagrams, benchmarks, user counts, impact metrics, or repository/demo URLs.

### 4.3 Research

- Treat research as a first-class section.
- Clearly distinguish project, research work, publication, venue, award, and personal contribution.
- Show methodology, contribution, results, venue/publication status, and links only when supported by reliable evidence.
- Do not claim that a paper is published, accepted, presented, or peer-reviewed without verification.

### 4.4 Achievements and credentials

- Prioritize awards and major credentials, followed by selected credentials and the full verified inventory.
- Verify exact credential title, issuer, dates, IDs, and public verification URLs before presenting them as verified.
- Use official Credly embeds where appropriate. Load third-party scripts once, lazily where practical, provide a fallback, and ensure embeds never block core content.
- Avoid an overwhelming badge wall on the homepage.

### 4.5 Experience

- Include the current Bitkraft internship using the official role title and verified dates.
- Show responsibilities, technical context, projects, and outcomes only when confirmed.
- Avoid inflating internship scope or implying production ownership without evidence.

### 4.6 About and Contact

- About should humanize the profile through education, engineering philosophy, technical interests, learning trajectory, research direction, and community involvement; avoid generic filler.
- Contact should make professional contact straightforward. GitHub and LinkedIn are known starting links; publish email and resume actions only when the destinations/assets are verified and available.

## 5. Design requirements (direction agreed)

### 5.1 Creative direction

**Design concept: “A high-performance engineering lab, presented with editorial restraint.”**

The portfolio should feel technical and futuristic at first glance, with a refined dark interface and an immersive, custom-built hero visual. It must still read as a credible engineer's portfolio—not a sci-fi game UI, product dashboard, or Tony Stark fan page. Brittany Chiang's portfolio remains a reference for polish, typography, hierarchy, and restraint only; do not clone its layout, copy, or assets.

Confirmed user preferences:
- **Hero:** technical and futuristic.
- **Theme:** dark, refined, technical.
- **Visual ambition:** immersive hero with 3D/technical effects, implemented with performance in mind.
- **Tony Stark/JARVIS influence:** subtle visual and story details, not a dominant theme.

### 5.2 Visual system

- **Palette:** near-black/charcoal foundations, layered graphite surfaces, cool off-white text, muted slate secondary text, and one controlled electric-cyan/blue accent. Use a restrained secondary signal color only when it communicates state or data. Avoid neon gradients across every section.
- **Typography:** strong editorial display face for headings paired with a highly legible UI/body face; use a mono face sparingly for labels, technical metadata, indices, and small system annotations. Prefer locally bundled/system-friendly fonts where possible and avoid adding font-loading fragility.
- **Composition:** generous whitespace, clear grid, deliberate asymmetry, fine borders, restrained separators, strong alignment, and a readable content measure. Technical detail should support the story rather than compete with it.
- **Surface language:** subtle grid/coordinate lines, instrument-like markers, tiny status labels, schematic traces, and layered depth. These details should be sparse and decorative, never necessary for understanding content.
- **Navigation:** simple, obvious, keyboard-friendly site navigation. Do not turn navigation into a simulated terminal or command console.
- **Imagery:** prefer authentic screenshots, real diagrams, research figures, and project-specific visuals. Do not use fabricated UI screenshots or claim conceptual art represents the actual product.

### 5.3 Home hero — signature experience

Build a memorable, interactive technical hero that visually suggests systems thinking, connected components, and iterative engineering. Recommended treatment:
- A clear text block with the user's name, concise current-role/engineering positioning, and two obvious actions (explore selected work; contact/profile or resume only when verified).
- A custom 3D-inspired system object/scene on the opposite side or behind the text: a restrained orbital network, layered geometric assembly, signal paths, or modular nodes. It should feel engineered rather than like a generic floating sphere.
- Motion can respond subtly to pointer movement and/or scroll on capable devices, with a static composition as the default/fallback on small screens, reduced-motion preferences, low-power devices, or failed initialization.
- The hero must not depend on WebGL to expose the name, introduction, navigation, or calls to action.
- Prefer CSS/SVG/canvas or an already available lightweight implementation after inspecting the current code and bundle. Add a 3D library only if a prototype demonstrates clear value and an acceptable production cost. Do not reintroduce Spline or add a heavy dependency by default.
- No continuously spinning scene, excessive bloom/particles, high-frequency pointer tracking, or effects that compete with text. Pause or simplify work when hidden/off-screen where practical.

### 5.4 Page-by-page design direction

#### Home (/)
- Lead with the immersive technical hero and a concise, human headline—not a wall of badges, metrics, or a fictional “AI system online” screen.
- Follow with a short “what I build”/engineering focus strip, then selected projects, current experience, research signal, selected recognition, and a concise about/community preview.
- Give each section a clear editorial heading and a path to its dedicated page.
- Feature only verified, high-signal work; avoid repeating every technology or credential above the fold.

#### Projects (/projects)
- Present a curated project archive with a clear Featured Work tier and a quieter secondary-work tier.
- Use generous editorial rows or asymmetric panels, strong project titles, concise problem/purpose, contribution when known, a few technical tags, and verified links.
- Use real thumbnails or restrained schematic visuals tied to each project. Keep visuals consistent but distinct; do not make every project a generic glassmorphism card.
- Provide filters only if they materially improve finding projects and can remain accessible; do not add filter UI as decoration.

#### Project detail (/projects/:slug)
- Treat each as an engineering case study, not a marketing landing page.
- Use a strong title/summary, project context, role/contribution, key technical decisions, architecture/flow visual where evidence supports it, challenges/trade-offs, outcomes, learnings, stack, resources, and related work.
- Use a large project-specific visual only when an authentic screenshot, diagram, or clearly labeled conceptual diagram is available.
- Hide unknown sections instead of using invented narrative, impact numbers, or placeholder charts.

#### Research (/research)
- Give research its own quieter, scholarly editorial language within the same design system: publication/project status, research question, approach, contribution, findings, venue and links when verified.
- Use paper figures or original explanatory diagrams only when grounded in the actual work.
- Distinguish research projects from formally published/accepted papers and awards. No simulated evidence maps or unsupported claims.

#### Achievements (/achievements)
- Lead with meaningful verified recognition, then selected credentials, then the full credential inventory.
- Make awards and certifications visually distinct through labels and clear metadata, not a giant wall of identical badges.
- Keep Credly embeds optional, lazy-loaded, resilient to failure, and secondary to readable credential information.

#### Experience (/experience)
- Use a clean, chronological professional timeline or editorial role sections with role, employer, dates, and verified focus areas.
- Use subtle timeline/connection motifs if they improve scanability; avoid fabricated impact metrics or implying ownership not established by evidence.
- Resolve the official Bitkraft role title and dates before public sign-off.

#### About (/about)
- Shift from the technical hero's visual intensity to a more personal, readable editorial page.
- Explain the learning-by-building mindset, continuous improvement, engineering interests, education, and community contributions using concrete examples only where confirmed.
- Include the Tony Stark/JARVIS inspiration as a brief personal story about iteration, curiosity, and systems thinking—not cosplay language, character graphics, or a fictional AI persona.
- Keep long-term ambitions clearly framed as ambitions, not present achievements.

#### Contact (/contact)
- Keep this page calm and direct, with obvious email/profile links once verified.
- Use a simple contact panel and a small technical visual motif; no fake terminal interaction or unnecessary contact form/backend.
- Resume CTA should appear only once the resume asset is updated and verified; until then, do not imply an outdated PDF is current.

#### Not found
- Use the same dark visual language and one subtle schematic accent.
- Clearly explain that the page was not found and offer working routes back home/projects. Do not make the error page a heavy animation.

### 5.5 Motion, 3D, accessibility, and performance guardrails

- Motion should have a clear purpose: convey depth, relationships, or interaction. It must never be required to understand the site.
- Honor prefers-reduced-motion; provide a stable static fallback and avoid scroll-jacking.
- Support touch and keyboard users; pointer parallax is enhancement-only.
- Respect mobile/low-power conditions with fewer effects, lower rendering cost, and no unnecessary continuous animation.
- Lazy-load noncritical visual modules; avoid blocking the main thread and avoid delaying Largest Contentful Paint with a decorative scene.
- Ensure text contrast and focus visibility remain strong over all backgrounds. Decorative canvas/SVG content should be hidden from assistive technology unless it conveys information, in which case provide an equivalent text description.
- Test the production build and bundle impact before selecting or adding dependencies. A visually impressive effect that materially harms load time, battery, or accessibility should be simplified.

### 5.6 Decisions intentionally still open
- Exact hero object/scene and implementation technique after inspecting current components and bundle.
- Whether a professional portrait is available; the default is no portrait dependency.
- Exact font families and final accent values after checking the existing design tokens and contrast.
- Which authentic project/research images are available.
- Final placement of resume CTA, pending an updated and verified resume.

## 6. Functional and engineering requirements

- Responsive layouts at 320px, 375px, 430px, tablet, desktop, and large desktop widths.
- Working internal navigation, active-route indication, 404/not-found behavior, and route-aware links.
- GitHub Pages-compatible nested routes and direct-load/refresh behavior for all public routes and project detail pages.
- Data-driven profile, projects, research, experience, achievements, credentials, skills, and leadership content; avoid duplicated facts in components.
- Route-specific page title/description and existing SEO/social metadata must remain consistent.
- External links must be valid, safely opened, and checked when possible.
- Do not introduce new dependencies or rewrite core architecture without a demonstrated need.
- Preserve verified existing functionality; inspect the current repository before editing.
- Update this requirements file when a durable product decision changes, and update `docs/PROJECT-STATUS.md` after each implementation increment.

## 7. Non-functional requirements

### Accessibility
- Semantic HTML and logical headings.
- Keyboard navigation and visible focus.
- Skip link and accessible navigation/disclosures.
- Appropriate labels and descriptive links.
- Sufficient contrast and reduced-motion support.
- No information conveyed by animation alone.
- No horizontal overflow or unusable touch targets on mobile.

### Performance
- The portfolio should feel fast before it feels impressive.
- Measure production builds and inspect chunks after significant changes.
- Split routes and lazy-load heavy visual effects/third-party content where useful.
- Avoid unnecessary GPU/CPU activity; reduce or pause off-screen effects where practical.
- Keep the core content usable if an effect, embed, or external resource fails.

### Reliability and maintainability
- GitHub Actions production build/deployment must pass.
- Test direct navigation and refresh on nested routes.
- Keep route metadata and deployment/base-path logic consistent.
- Keep missing data absent or clearly pending instead of filling it with guesses.
- Do not mark a task done solely because code was written; record validation evidence.

## 8. Scope and release strategy

### In scope for V1
- Refine and release the existing multi-page portfolio.
- Finalize visual design through a focused user discussion.
- Improve content hierarchy and visual evidence where reliable assets exist.
- Audit and fix route behavior, responsive layout, accessibility, performance, metadata, and external links.
- Resolve critical content discrepancies and verify public claims.
- Keep implementation and release status documented.

### Out of scope unless explicitly approved
- Rebuilding the app from scratch without evidence that it is needed.
- Cloning Brittany Chiang's website.
- A dashboard-like interface or a showcase dominated by WebGL/3D effects.
- Fabricated case-study content, fake metrics, invented visuals, or unverified credentials.
- Adding a blog/writing section without real writing to publish.
- Adding unnecessary routing frameworks or heavy visual dependencies.
- Treating long-term aspirations (industry influence, independent revenue, building a large technology venture) as current achievements.

## 9. Current implementation baseline

According to `docs/PROJECT-STATUS.md`, the repository already has:
- A multi-page route structure and project detail routes.
- Editorial page structure for Home, Projects, Research, Achievements, Experience, About, and Contact.
- Shared navigation/layout and GitHub Pages route fallback/static route generation.
- Route metadata, canonical URLs, social metadata, favicon, robots.txt, and sitemap.
- Lazy-loaded route chunks and homepage visual effects; the unused Spline dependency was removed.
- A production build/deployment workflow that has passed in prior runs.

Still open according to the status document:
- Browser/device acceptance and live nested-route verification.
- Full keyboard/focus/contrast/reduced-motion audit.
- Low-power/mobile runtime performance review.
- Credly third-party runtime/fallback verification.
- Final content/evidence verification for research, projects, credentials, role details, and public links.
- Final V1 release sign-off.

This is a documentation snapshot, not a claim that all current branch checks are green. Re-check the latest commit and workflow before release decisions.

## 10. Acceptance criteria for V1

V1 can be considered release-ready only when all applicable criteria are met:

- [ ] Visual direction and key page layouts are explicitly agreed with the user.
- [ ] All required routes render and have coherent navigation.
- [ ] Nested routes work on GitHub Pages when opened directly and after refresh.
- [ ] Homepage communicates identity, direction, selected work, and next actions quickly.
- [ ] Projects/research/achievements distinguish confirmed facts from missing evidence.
- [ ] Public personal and professional claims are accurate and approved; title/institution/date discrepancies are resolved or safely omitted.
- [ ] Contact and social links are verified; no broken or fabricated destinations.
- [ ] Responsive review covers narrow mobile, tablet, desktop, and large desktop without overflow or major hierarchy failures.
- [ ] Keyboard navigation, focus, semantics, contrast, and reduced-motion behavior are checked.
- [ ] Production build and deployment validation pass on the latest release candidate.
- [ ] Bundle/runtime behavior and third-party loading are reviewed.
- [ ] Page metadata, canonical URLs, social preview, favicon, robots.txt, and sitemap are checked.
- [ ] `docs/PROJECT-STATUS.md` records the final state, remaining known limitations, and validation evidence.

## 11. Design decisions and remaining inputs

The user's design preferences are now explicit and should be treated as settled:
- Technical/futuristic hero.
- Dark, refined technical theme.
- Immersive 3D/technical hero effects, with performance-conscious implementation.
- Subtle Tony Stark/JARVIS-inspired details and story—not a themed imitation.

Use Section 5 as the concrete page-by-page design baseline. Do not re-ask the user to choose between editorial, technical, portrait-led, light/dark, static/immersive, or visible/subtle inspiration; those choices have been made.

Only seek further input when it blocks a concrete implementation decision. The main content inputs still needed before final release are:
1. Real project screenshots, demos, architecture diagrams, and research figures that can be published.
2. Confirmation of the official Bitkraft role title and dates.
3. Confirmation of institution spelling and education dates.
4. Verified credential, award, research/publication, contact, and repository URLs.
5. An updated resume before presenting a resume-download action as current.

Move quickly: inspect the existing hero and design tokens, prototype the smallest convincing hero improvement, and validate the visual and bundle impact before deciding whether any new rendering dependency is justified.

## 12. Change control

- This file records product-level requirements; `docs/AI-PORTFOLIO-EXECUTION.md` remains the authoritative engineering/implementation specification.
- If a requirement conflicts with the execution specification, stop and reconcile the documents instead of silently choosing one.
- Keep changes incremental and auditable. Prefer the smallest change that improves release readiness.
- After each completed increment, update implementation status, run relevant validation, and state what remains unverified.
