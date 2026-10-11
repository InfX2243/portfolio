# Visual asset and credibility checklist

This checklist is the source of truth for real image assets to collect for the portfolio. The repository currently has `public/favicon.svg`, `public/og-image.svg`, `public/robots.txt`, and `public/sitemap.xml`; it does not yet have a project-asset library under `public/assets/`.

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
