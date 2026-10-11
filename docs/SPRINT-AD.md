# Sprint AD — Reader-led motion and guided-tour continuity

Date: 2026-10-12  
Branch: `portfolio-v1`  
Scope: `src/components/GuidedTour.jsx`, `src/motion.css`, `src/App.jsx`

## Decisions and implementation

- **Cursor placement:** the decorative cursor now touches the target's rightmost edge where space allows, rather than hovering several pixels away. Narrow layouts fall back to the nearest available edge.
- **Reading-like interaction:** each current target receives a subtle reading/hover state. The cursor remains decorative; it does not synthesize clicks or actual DOM pointer events.
- **No false interruption:** moving the visitor's physical pointer no longer pauses the tour. Deliberate scroll, touch, pointer-down, or page-navigation keyboard input pauses it so real interaction takes priority.
- **Resume means resume:** the persistent action is now **Continue walkthrough**. It retains the current route and target checkpoint; progress is committed only after a target has been read, so interrupting during a scroll returns to that target.
- **Whole-page choreography:** a dedicated motion stylesheet applies scroll-linked entrance and exit movement to page-level sections and their meaningful content units. Elements rise gently into view and drift upward as they leave; transform-only choreography avoids fading text and undermining contrast. Browsers without scroll-driven animation support retain the normal static layout.
- **Accessibility:** reduced-motion users do not receive scroll-linked movement; forced-colors mode gets a clear system-color outline. The decorative pointer stays non-interactive.

## Validation and release gate

- The latest known CI run before this sprint built successfully but failed the axe smoke audit on pre-existing muted-text contrast across multiple desktop/mobile routes. The current CSS includes targeted contrast corrections for those reported selectors.
- **Pending:** latest source commit must pass production build, generated-route validation, desktop/mobile axe audit, and GitHub Pages deployment before this sprint is called validated.
- **Still required:** real-browser review of scroll entry/exit timing, tour interruption/resumption, narrow-screen cursor placement, keyboard-only use, screen-reader behavior, and reduced-motion mode. Automated axe smoke testing is not a full WCAG conformance certification.

## Next

1. Confirm latest GitHub Actions result and inspect any remaining audit failures.
2. Refine selectors or animation range only against observed issues; avoid opacity fades that reduce text contrast.
3. Keep the main implementation status document aligned with the latest validation result.
