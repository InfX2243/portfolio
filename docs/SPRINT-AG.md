# Sprint AG — Menu-led transitions and contrast fixes

Date: 2026-10-12

## Goal
Make guided-tour route changes feel intentional and restore CI's automated accessibility gate without suppressing findings.

## Changes
- When the walkthrough reaches the end of a page, it now scrolls back to the top before navigating.
- The decorative cursor animates to the visible top-level navigation link for the next route and the tour calls that link's actual `click()` handler. It no longer pushes the route directly in history.
- If a matching visible navigation link cannot be found, the tour stops rather than performing a hidden route change.
- Added scoped contrast overrides for muted metadata/copy reported by axe on dark surfaces. The serious/critical accessibility audit remains enabled.

## Validation status
- Prior run: production build passed; the accessibility smoke audit failed with serious colour-contrast findings.
- Current implementation: awaiting the latest branch-head CI run.
- Manual review still needed for cursor/menu alignment on mobile and desktop, actual navigation click behavior, keyboard-only use, and reduced-motion behavior.

Automated axe checks are a useful release gate but do not constitute complete WCAG conformance certification.
