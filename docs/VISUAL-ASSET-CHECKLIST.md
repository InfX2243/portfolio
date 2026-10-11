# Visual asset and credibility checklist

This checklist is the source of truth for real image assets used by the portfolio. The uploaded asset library is now committed under `public/assets/` on `portfolio-v1`; the current implementation status and remaining gaps are recorded in the Sprint S section below.

## Rules

- Use real screenshots, diagrams, photographs, and official marks only. Do not create mock screenshots that could be mistaken for shipped work.
- Redact API keys, access tokens, customer data, internal dashboards, private repository details, and employer-confidential information before adding screenshots.
- Prefer WebP for screenshots/photos and SVG for diagrams/logos. Keep source diagrams editable outside the repository if useful, then export clean SVG/PNG.
- Use descriptive, lowercase, hyphenated filenames. Avoid spaces and names like `final-final-2.png`.
- An asset is not evidence on its own: pair project visuals with a short caption describing what the viewer is looking at.
- Existing portfolio components do not automatically consume every proposed path. Once an asset is added, wire it into the listed source file(s); do not leave orphaned assets and assume they appear.

## Priority 1 — Project proof (highest impact)

| Asset path to add | What belongs there | Where to wire it |
| --- | --- | --- |
| `public/assets/projects/ascend-apex/overview.webp` | Genuine screenshot of the application’s strongest screen, with private data removed | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/ascend-apex/architecture.svg` | Accurate, owner-reviewed system/component diagram; only show technologies and flows actually used | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/cognitrace/overview.webp` | Genuine UI, demo frame, or research-system visual from Cognitrace | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/cognitrace/pipeline.svg` | Accurate research/data-flow diagram, only after the real method and pipeline are confirmed | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/green-passport/overview.webp` | Genuine app/prototype screenshot or a visual from the actual project | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/green-passport/research-poster.webp` | Publicly shareable research poster or presentation slide; export from the original source | `src/data/portfolio.js` and `src/pages/ResearchPage.jsx` |
| `public/assets/projects/platform-builder/architecture.svg` | Accurate diagram of implemented services, CI/CD, container and infrastructure boundaries | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/platform-builder/pipeline.webp` | Genuine pipeline/build/deployment screenshot with secrets and repository tokens redacted | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/cloud-builder/overview.webp` | Genuine deployed application screenshot | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |
| `public/assets/projects/cloud-builder/architecture.svg` | Accurate cloud architecture diagram showing only services actually used | `src/data/portfolio.js` and `src/pages/ProjectDetailPage.jsx` |

Start with **one strong image per project**, not every file above. Add a second visual only when it explains architecture, a meaningful engineering decision, or a research artifact.

## Priority 2 — Credentials and research evidence

| Asset path to add | What belongs there | Where to wire it |
| --- | --- | --- |
| `public/assets/issuers/aws.svg` | Official AWS issuer mark, if allowed by the relevant brand guidelines | `src/components/CertificateCard.jsx` |
| `public/assets/issuers/oracle.svg` | Official Oracle issuer mark, if allowed by the relevant brand guidelines | `src/components/CertificateCard.jsx` |
| `public/assets/research/cognitrace-paper.pdf` | Public final paper only if accepted/published and permitted to share | `src/data/portfolio.js` and `src/pages/ResearchPage.jsx` |
| `public/assets/research/green-passport-paper.pdf` | Public final paper only if accepted/published and permitted to share | `src/data/portfolio.js` and `src/pages/ResearchPage.jsx` |
| `public/assets/research/green-passport-presentation.pdf` | Public presentation or poster PDF, if permitted | `src/data/portfolio.js` and `src/pages/ResearchPage.jsx` |

Credly embeds are already the primary credential artwork. Issuer marks are optional; do not add duplicated badge PNGs just to make the page look fuller. Research files must not be presented as published papers unless publication status and citation details are confirmed.

## Priority 3 — Personal and professional identity

| Asset path to add | What belongs there | Where to wire it |
| --- | --- | --- |
| `public/assets/profile/abid-ahmed-shaikh.webp` | Optional current, professional portrait with a simple background; not required if you prefer a no-portrait portfolio | `src/pages/AboutPage.jsx` |
| `public/assets/experience/bitkraft-logo.svg` | Official employer logo only if permitted and available from an authorized source | `src/pages/ExperiencePage.jsx` |
| `public/assets/community/acm.svg` | Official ACM mark only if use is permitted and it accurately represents the group/role | `src/pages/AboutPage.jsx` |
| `public/assets/community/aws-student-builder-group.svg` | Official program/community mark only if the group has an approved asset | `src/pages/AboutPage.jsx` |
| `public/assets/documents/abid-ahmed-shaikh-resume.pdf` | Current, reviewed resume—not the older May 2026 version unless updated and approved | `src/pages/ContactPage.jsx` and `src/data/portfolio.js` |

Do not invent or redraw official logos. If no approved mark exists, use a clean text label instead.

## Existing social/share assets

- `public/og-image.svg` — current social preview. Review it before release for legible name/title at small sizes; only replace it if a stronger branded preview can be made.
- `public/favicon.svg` — current browser icon. Keep it simple and consistent with the portfolio wordmark.

## Capture and export guidance

- Project overview screenshots: export at roughly 1400–1800 px wide, WebP, ideally under 300 KB where visual quality permits.
- Architecture/research diagrams: SVG with readable labels; ensure labels still work at the rendered content width and do not rely on color alone.
- Research poster preview: export a readable WebP preview; link to the PDF separately if it is public.
- Portrait: 4:5 or square crop, WebP, optimized for a small responsive display.
- Logos: use official SVG where available, preserve clear space, and do not recolor outside brand guidance.
- Add descriptive alt text when wiring images into React; decorative diagrams can use empty alt text only when the same information is explained in adjacent text.

## Definition of done for each asset

1. The source is authentic and approved for public sharing.
2. Sensitive/private content has been redacted.
3. The asset is added at the exact path above (or the path is updated here if the design changes).
4. The relevant data/page component references it.
5. Alt text/caption is accurate.
6. The layout works at desktop and mobile widths.
7. The production build and deployed page are checked.


## Sprint S — uploaded assets received and wired (2026-10-11)

### Integrated from the repository

- **Ascend APEX:** `projects/ascend-apex/overview.png`, selected `Student*.png`, `Faculty*.png`, `Recruiter*.png`, `Admin*.png` screens, and `Skill Validation Workflow.png`. The case study now includes a selected, lazy-loaded gallery; unused screenshots remain available in the repository for later curation.
- **Cognitrace:** `projects/cognitrace/Cognitrace1.png`, `Cognitrace2.png`, and `Cognitrace3.png`.
- **Green Passport:** `projects/green-passport/Green Passport.png`.
- **Cloud web application builder:** `projects/aws-web-application-builder/aws-wab.png`.
- **Profile / résumé:** `profile/Photograph.png` and `documents/Abid Ahmed Shaikh Resume.pdf`.
- **Experience / community:** `experience/White-Bitkraft-Logo.webp`, `community/acm.png`, and `community/awssbgmhssce.png`.
- **Credential issuer marks:** `issuers/Amazon_Web_Services_Logo.svg` and `issuers/Oracle-Logo-1.png`.

### Remaining assets / evidence gaps

- No verified architecture diagrams or research PDFs/posters were present in the uploaded set. Do not synthesize these as if they were original project artifacts.
- Ascend APEX individual contribution, reviewed technical architecture, public event citation and project repository/demo URL still require direct source details if they are to be published.
- The résumé link is wired, but its contents must be confirmed current before final release.
- The full Ascend APEX screenshot set is retained; only a curated subset is displayed to keep the case study useful rather than excessively long.
