# Sprint AF — Box-safe scroll choreography

Date: 2026-10-12  
Branch: portfolio-v1

## Problem

The previous view-timeline choreography animated both parent sections and nested cards, and continued moving content during the exit phase. A card could remain visible while its children appeared to drift outside its visual box.

## Fix

- Removed the broad section/heading animation selectors and all exit movement.
- Animate each relevant card shell as a single unit, only during the view timeline's entry range.
- Use a small alternating left/right offset and opacity reveal; no rotation or scale that could make box edges appear to shift.
- End the animation on entry. The card remains static while visible and as it leaves the viewport, so its contents remain aligned with the card.
- Preserve hover/press styling by using the independent translate property instead of overriding transform.
- Keep motion disabled for reduced-motion preferences and leave unsupported browsers on the static layout.

## Validation

- Implementation commit: c63fbda7693c8a3be5081789a15fbff520e8ea7b.
- CI/deployment validation is pending for the latest documentation commit.
- Manual browser review is still required for card alignment, hover states, reverse scrolling, mobile layout, and reduced-motion mode. Automated accessibility smoke tests do not certify visual choreography or full WCAG conformance.
