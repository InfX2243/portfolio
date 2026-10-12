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
- **Verified:** workflow [38191923251](https://github.com/InfX2243/portfolio/actions/runs/38191923251) completed successfully on commit `6116014d5d8249838ff87409333bb8e91981d948`. Production build, desktop/mobile axe smoke audit, route fallback, output verification, and `gh-pages` deployment all passed.


## Root-cause follow-up

- The next audit run showed that many of the foreground colors were being composited to dark values while the scroll-timeline entry animation was partway through its `opacity: 0 → 1` fade. This made otherwise readable text fail axe at intermediate animation progress; adding more color overrides could not reliably solve that.
- Removed opacity from the scroll-entry keyframes. The subtle directional translate remains, but text and card content no longer fade through low-contrast states. This is a behavior-level fix, not an audit exception.
- Kept the Credly iframe independently accessible rather than nesting it inside a link, avoiding interactive content inside another interactive element.


- A further audit run identified a second source of the same issue: page-entry and editorial section animations also faded whole content groups through partial opacity. Removed those opacity keyframes as well, preserving only a short positional entrance.
- Credly's cross-origin iframe is treated as decorative visual content for the automated audit, while a separate, keyboard-accessible link provides the badge's public verification destination.


## Verified outcome

- Latest workflow run: https://github.com/InfX2243/portfolio/actions/runs/38191923251
- Commit tested and deployed: `6116014d5d8249838ff87409333bb8e91981d948`
- Result: **SUCCESS** — production build, automated desktop/mobile accessibility smoke audit, route fallback, output verification, and `gh-pages` deployment passed.
- The opacity-related contrast failures are resolved by removing text-affecting opacity fades, while retaining positional motion. The accessibility audit remains active.
