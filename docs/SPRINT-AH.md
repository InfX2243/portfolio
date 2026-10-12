# Sprint AH — CI contrast fixes, Credly presentation and work slideshows

Date: 2026-10-12  
Branch: `portfolio-v1`

## Scope

- Fix the persistent axe WCAG color-contrast failures without weakening or bypassing the accessibility gate.
- Present Credly credentials as clean, standalone badge embeds rather than a card wrapped in another card.
- Rotate project screenshots directly on the Work / Projects index so visitors can discover supplied project images without opening each case study.

## Implemented

- Reworked each project card's visual into an automatically advancing slideshow using the project's supplied gallery images, with a 4.2-second cadence.
- Added visible Pause/Play and Next controls with accessible labels; hovering or keyboard focus pauses automatic advancement, and `prefers-reduced-motion: reduce` disables autoplay.
- Preserved the full case-study galleries and project links.
- Removed the extra outer Credly card/header/fallback panel. The official Credly embed is now presented on a transparent, unboxed surface with a simple verification link.
- Added targeted, high-contrast foreground rules for the exact text surfaces reported by the latest desktop/mobile axe run, plus polished styles for the new slideshow and badge layout.
- Used Credly's official guidance for embedding badges and its option to use badge-only artwork as the design reference: https://support.credly.com/hc/en-us/articles/360043782632-How-can-I-embed-my-badge-in-a-website

## Validation

- Previous workflow `38170843872` failed in `npm run test:a11y` after the production build succeeded. The failures were real color-contrast findings across project details, Research, Experience, Achievements, About and the mobile landing page.
- The contrast audit remains enabled and unchanged.
- **Pending:** verify the new latest-commit workflow passes desktop/mobile axe, route fallback/output checks, and publishes successfully to `gh-pages`. Do not mark the release green until the run confirms deployment.
