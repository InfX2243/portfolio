# Sprint AE — Directional motion and viewer-led tour resume

Date: 2026-10-12  
Branch: `portfolio-v1`

## Changes
- Replaced the uniform vertical scroll reveal with a layered, directional choreography: sections enter from the left, cards travel from the right, and headings alternate sides. As a visitor scrolls backward, the view timeline reverses, so content enters from the opposite side and exits in the reverse direction.
- Used individual CSS transform properties (`translate`, `rotate`, `scale`) so the scroll animation does not overwrite existing hover/press transforms.
- Removed tour-state borders on sections and cards. The decorative pointer has no hit area and does not simulate a click or replace the visitor's actual pointer.
- When the tour is paused, resuming now finds the first meaningful target around the current viewport. It therefore follows the viewer after manual scrolling or navigation instead of replaying a stale target index.
- Distinguishes tour-driven route transitions from viewer-driven navigation: automatic tour transitions start at the new route's beginning, while manual navigation re-anchors from the current page.
- Increased specificity for mobile homepage contrast corrections after the previous workflow exposed CSS cascade conflicts.

## Validation
- **PASS — implementation commit `60dbbdf4c11c52af64299a9de13771a2c4bfe250`:** production build, route generation, desktop/mobile axe audit, route fallback verification, and deployment to `gh-pages` passed in [workflow 38169380583](https://github.com/InfX2243/portfolio/actions/runs/38169380583).
- The documentation follow-up commit triggers the same release workflow again; confirm that run before declaring the current branch head validated.
- Manual acceptance still required for perceived animation quality, hover feedback during tour, route switching and resume, reduced-motion behavior, keyboard navigation, and assistive technology. The automated axe scan is a smoke test, not a complete WCAG conformance certification.
