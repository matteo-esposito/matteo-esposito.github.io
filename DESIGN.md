---
name: Matteo Esposito — Personal CV
description: A GitHub Primer-inspired personal CV site for an ML developer, with a soft light/dark toggle.
colors:
  canvas: "#ffffff"
  canvas-dark: "#22272e"
  surface: "#ffffff"
  surface-dark: "#2d333b"
  canvas-subtle: "#f6f8fa"
  canvas-subtle-dark: "#2d333b"
  border: "#d0d7de"
  border-dark: "#444c56"
  border-muted: "#d8dee4"
  border-muted-dark: "#373e47"
  fg: "#1f2328"
  fg-dark: "#adbac7"
  fg-muted: "#59636e"
  fg-muted-dark: "#909dab"
  accent: "#0969da"
  accent-dark: "#539bf5"
  accent-emphasis: "#0550ae"
  accent-emphasis-dark: "#6cb6ff"
  btn-primary: "#1f883d"
  btn-primary-dark: "#347d39"
  btn-primary-hover: "#1a7f37"
  btn-primary-hover-dark: "#46954a"
  header-bg: "#1f2328"
  header-bg-dark: "#1c2128"
  header-fg: "#f0f6fc"
  header-fg-dark: "#cdd9e5"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.011em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  mono:
    fontFamily: "ui-monospace, SF Mono, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "0.72rem-0.8125rem"
    fontWeight: 500
rounded:
  medium: "6px"
  pill: "999px"
  small: "4px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "clamp(16px, 3vw, 32px)"
components:
  button-primary:
    backgroundColor: "{colors.btn-primary}"
    textColor: "#ffffff"
    rounded: "{rounded.medium}"
    padding: "0 12px"
  button-default:
    backgroundColor: "#f6f8fa"
    textColor: "{colors.fg}"
    border: "rgba(31,35,40,0.15)"
    rounded: "{rounded.medium}"
  box:
    backgroundColor: "{colors.surface}"
    border: "{colors.border}"
    rounded: "{rounded.medium}"
    shadow: "0 1px 0 rgba(31,35,40,0.04)"
  topic-pill:
    backgroundColor: "accent at 14% opacity"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
---

# Design System: Matteo Esposito — Personal CV

## 1. Overview

**Creative North Star: "GitHub, worn as a personal profile."**

This is a deliberate pivot, made at the owner's explicit request, from the site's original refined-light emerald system to a GitHub Primer-inspired look: the chrome (nav, buttons, boxes, meta text) reads like GitHub's actual application interface, while the content (name, bio, experience, projects) is composed the way a GitHub user or repo profile page is composed. The header is a permanently dark bar regardless of theme — GitHub's own header never lightens in light mode, and neither does this one. Boxes are white-or-dark surfaces separated by a 1px border and a near-invisible resting shadow, not by background tint or drop-shadow stacks. Corners are a consistent 6px across buttons and boxes; filter chips and topic tags go full pill (999px). Type is GitHub's real system-font stack — no webfont loading, which is also a quiet performance win.

The **Projects** section is composed as a repo list: bold blue repo-name links, a muted description line, and small rounded topic pills with the existing tech-logo icons. The **hero** is composed as a profile header: a circular avatar (reusing the site's existing `assets/avatar.jpg`, previously only used for the social-share image), name, a muted one-line bio, and the CV/GitHub/LinkedIn actions styled as GitHub's default and primary buttons (primary = GitHub green, not blue — blue is reserved for links/accent).

**Key Characteristics:**
- Dark header, light-or-dark body — the header never changes with the theme toggle.
- 6px radius everywhere (buttons, boxes); pill radius only for chips/tags.
- Borders + a near-invisible resting shadow separate surfaces; hover is a background tint, not a lift.
- System font stack (`-apple-system, Segoe UI, ...`) for UI text; system monospace for data tokens.
- A soft, toggleable light/dark theme — dark is GitHub's "dimmed" palette, not pure black.

## 2. Color

Token-driven via CSS custom properties on `:root`, overridden under `:root[data-theme="dark"]`. Every component references a token, never a literal, so the whole site re-themes from one attribute flip.

### Light (default)
- **Canvas** `#ffffff` — page background.
- **Canvas Subtle** `#f6f8fa` — hover tint, inset panels.
- **Surface** `#ffffff` — box backgrounds. Intentionally the same as canvas; light-mode GitHub boxes are separated by their border, not a background shift.
- **Border** `#d0d7de` / **Border Muted** `#d8dee4`.
- **Fg** `#1f2328` (15.6:1 on canvas) / **Fg Muted** `#59636e` (5.1:1+ verified in-browser on every surface it appears on).
- **Accent** `#0969da` (GitHub blue) — links, repo names, focus rings.
- **Btn Primary** `#1f883d` (GitHub green) — the one primary-action color (CV button, Unlock).
- **Header** `#1f2328` bg / `#f0f6fc` fg — dark, constant across themes.

### Dark ("dimmed" — softer than pure black)
- **Canvas** `#22272e`, **Surface** `#2d333b` — here the surface genuinely lightens off the canvas (unlike light mode), matching real Primer dark-dimmed behavior, since dark surfaces need the lift for legibility.
- **Border** `#444c56` / **Border Muted** `#373e47`.
- **Fg** `#adbac7` (11.7:1) / **Fg Muted** `#909dab` (6.6:1).
- **Accent** `#539bf5`, **Btn Primary** `#347d39`.
- **Header** `#1c2128` bg / `#cdd9e5` fg — very close to the light header color, so the header barely shifts when the theme toggles. Deliberate: the header is the one constant.
- Resting shadow is disabled (`none`) in dark mode; borders alone carry separation.

### Named Rules
**The Header-Stays-Dark Rule.** The header background/foreground pair does not follow the light/dark toggle the way every other surface does — both theme blocks point it at a near-black. This is the single most recognizable "looks like GitHub" signal on the page; don't theme it away.

**The Border-Not-Tint Rule (light mode only).** In light mode, box surfaces equal the canvas color; separation is the border and the barely-there resting shadow, never a gray fill. In dark mode surfaces DO lighten off the canvas — the asymmetry is intentional and matches GitHub's own token behavior.

## 3. Typography

**Sans:** the OS system-font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`) — GitHub loads no webfont, and neither does this site anymore. Removing the Google Fonts request is also a real performance improvement.
**Mono:** the OS system monospace stack (`ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`) — dates, `<code>` tokens, the footer status line.

### Hierarchy
- **Display** (700, `clamp(1.75rem, 3.4vw, 2.25rem)`, LH 1.15): page/profile name. Deliberately smaller than the old 3.6rem hero — GitHub profile names don't shout.
- **Headline** (600, `clamp(1.25rem, 1.9vw, 1.5rem)`, LH 1.25): section headings.
- **Title** (600, 1rem): job titles, repo names (repo names are additionally colored `--accent`).
- **Body** (400, 1rem/1.5): prose, capped ~60ch.
- **Label** (600, 0.8125rem, sentence case): section kickers, `dt` metadata. Explicitly **not** uppercase or letter-spaced — seeing an uppercase tracked eyebrow repeated on every section is generic-AI-landing scaffolding; GitHub itself doesn't do this, and a plain, quiet sentence-case label reads as more deliberate.
- **Mono data** (500, 0.72–0.8125rem): timeline dates, inline `<code>`, topic-pill logos' adjacent text where relevant, footer.

### Named Rules
**No Webfont Rule.** Nothing in `<head>` loads a remote font. If a future change wants a webfont, that's a deliberate departure from "looks like GitHub," not a drive-by addition.
**Sentence-Case Labels Rule.** Small section/meta labels are sentence case, never uppercase-tracked. This replaced the old system's uppercase eyebrow treatment as part of this pivot.

## 4. Elevation

Borders do the separating work; the one shadow (`0 1px 0 rgba(31,35,40,0.04)`) is a near-invisible resting hairline under boxes and buttons in light mode only — it's disabled entirely in dark mode (`--shadow-resting: none`), where the lighter surface color against the darker canvas already reads as separation.

### Named Rules
**No Hover-Lift Rule.** The previous system's `translateY(-2px)` hover lift is gone. GitHub's own list/card hover is a background tint (`--canvas-subtle`) and a border-color shift, nothing that moves. Motion here is fast (120ms) and flat, not springy.

## 5. Components

### Buttons
- **Shape:** 6px radius throughout (`--radius`).
- **Primary** (CV button, gate Unlock): `--btn-primary-bg` (GitHub green), white text. Hover darkens.
- **Default** (GitHub, LinkedIn, Email, GitHub-in-contact): `--btn-bg` (near-canvas gray), 1px translucent border, `--fg` text. Hover lightens/darkens the bg slightly.
- Blue (`--accent`) is never used for a button background — it's reserved for links/repo-names/focus rings, matching GitHub's own hierarchy where blue means "navigate" and green means "primary action."

### Boxes (timeline entries, project cards, intro panel, goal cards, gate card, progress note)
- 1px `--border`, `--radius` (6px) corners, `--surface` background, `--shadow-resting`.
- Interactive boxes (project, goal-card) get a `--canvas-subtle` background + border-color shift on hover/focus-visible — no lift, no drop-shadow.

### Topic pills / filter chips
- Full pill radius (999px). Topics: `color-mix(in oklab, var(--accent) 14%, transparent)` background, `--accent` text — the tint recomputes automatically per theme since it's derived from the accent token, not a separate literal. Filter chips: bordered outline by default, same tinted-pill treatment when active.

### Header / Navigation
- Full-width dark bar (`--header-bg`/`--header-fg`), sticky, solid (no blur/glass). A constrained-width inner row holds the mark, nav links, and the theme toggle.
- Nav links: `--header-fg-muted` default → `--header-fg` + subtle white-wash background on hover. No pill/bordered container around the nav group anymore.
- **Theme toggle:** icon-only button (sun/moon), lives at the right end of the header. Persists choice to `localStorage`; the initial value falls back to `prefers-color-scheme` via a blocking inline script in `<head>` (before the stylesheet), so there is no flash of the wrong theme on load.
- The `.mark` (site logo) is a 32px, 6px-radius square: `--header-fg`-colored fill, `--header-bg`-colored glyph — a light tile on the dark header, deliberately evoking GitHub's own light-mark-on-dark-header org/app icon.

### Hero (profile header)
- Circular avatar (`assets/avatar.jpg`, 104px, 1px border) + name + a one-line muted bio + the button row — modeled on a GitHub user profile sidebar, not a marketing hero.

### Contact block
- Reuses the header tokens (`--header-bg`/`--header-fg`) rather than a separate third dark color — the header and the closing panel are the same dark material, bookending the page. This intentionally replaces the old system's unique "forest black" with the same dark used everywhere else, for one fewer named color.

## 6. Do's and Don'ts

### Do:
- **Do** drive every color through the `--token` custom properties; never hardcode a literal that has a token.
- **Do** keep the header dark in both themes — it's the signature "looks like GitHub" cue.
- **Do** use `color-mix(in oklab, var(--accent) N%, transparent)` for tinted pill backgrounds so they re-theme automatically.
- **Do** verify new text/background pairs against WCAG AA in both themes before shipping (verified in-browser for all current pairs: 4.2:1–15.6:1).
- **Do** keep motion fast (120–160ms) and flat — background/border-color transitions, no translateY lifts.
- **Do** honor `prefers-reduced-motion` (already handled globally) and avoid a flash-of-wrong-theme on load (the blocking inline script in `<head>` handles this — don't remove it).

### Don't:
- **Don't** reintroduce uppercase-tracked eyebrows above every section — sentence-case labels only.
- **Don't** put a background tint on light-mode boxes; the border does that job. Dark mode is the exception (surface genuinely lightens off canvas there).
- **Don't** load a webfont. The system-font stack IS the GitHub look; a custom typeface would undo it.
- **Don't** use blue for a button's background — blue is for links/accent only, green is the one primary-action color.
- **Don't** add hover-lift/translateY motion back to cards; GitHub's own hover language is a flat background tint.
- **Don't** let the theme toggle flash the wrong theme on load — the anti-FOUC inline script must stay first in `<head>`, before the stylesheet.
