# Portfolio V1 — Product Requirements

> **Status:** Draft baseline — product direction and functional scope captured; detailed visual design decisions are intentionally pending user discussion.  
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

## 5. Design requirements (direction agreed; detailed design pending)

Agreed direction:
- Use Brittany Chiang's portfolio as inspiration for a polished, restrained, editorial developer-portfolio feel; do not clone its layout, copy, or assets.
- Make the site more visual and refined while keeping content, evidence, and navigation clear.
- Keep the existing multi-page information architecture.
- Use a coherent design system across routes.
- Favor strong hierarchy, typography, spacing, and real project/research visuals over decoration.
- Motion and technical effects are optional enhancements, never required to understand the content.
- The existing execution specification's V1 release direction is the baseline unless the user explicitly changes it.

**Not yet finalized:** exact hero composition, layout proportions, accent color, typography choices beyond current baseline, visual motif, background treatment, image/3D usage, project-card treatment, animation intensity, and mobile-specific composition. Discuss these with the user before making a major visual redesign.

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

## 11. Open decisions and questions

These are intentionally left for the upcoming design discussion, rather than guessed by the implementation agent:

1. **Hero concept:** Which direction should the first screen use—minimal editorial typography, a technical/system visual, a portrait-led layout, or a restrained combination?
2. **Visual identity:** Should the existing dark editorial direction remain, or does the user want a different palette/light-dark strategy?
3. **Personal imagery:** Is there a preferred professional photo/avatar, or should the design avoid personal photography?
4. **Technical visuals:** Which real project screenshots, architecture diagrams, demos, or research visuals are available now? If none are ready, which projects should receive custom diagrams first?
5. **Motion/3D:** How much motion is desirable: nearly static, subtle interactions, or a more expressive hero (still performance/accessibility-safe)?
6. **Homepage emphasis:** Should the first scroll prioritize experience, selected projects, research, or a balanced sequence? The existing execution spec currently prioritizes identity → experience → selected projects → research/writing → achievements → about/community → contact.
7. **Distinctive personal motif:** Should Tony Stark/JARVIS inspiration be visible in the interface at all, or remain only in the biography/story? The baseline recommendation is to keep it subtle and avoid a themed imitation.
8. **Resume CTA:** Should a resume download appear in the hero once the resume is updated, or remain in Contact/About until then?

The user wants to move quickly. Resolve these in a short, prioritized design conversation; do not reopen already-settled information architecture or re-ask discovery questions that do not affect V1.

## 12. Change control

- This file records product-level requirements; `docs/AI-PORTFOLIO-EXECUTION.md` remains the authoritative engineering/implementation specification.
- If a requirement conflicts with the execution specification, stop and reconcile the documents instead of silently choosing one.
- Keep changes incremental and auditable. Prefer the smallest change that improves release readiness.
- After each completed increment, update implementation status, run relevant validation, and state what remains unverified.
