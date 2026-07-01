---
name: Matteo Esposito — Personal CV
description: A refined-light personal CV site for an ML developer; one committed emerald hue on true off-white.
colors:
  instrument-white: "oklch(99% 0 0)"
  surface-white: "#ffffff"
  pine-ink: "oklch(24% 0.012 160)"
  pine-ink-soft: "oklch(38% 0.013 160)"
  sage-muted: "oklch(46% 0.013 160)"
  hairline: "oklch(90% 0.008 160)"
  signal-emerald: "oklch(50% 0.13 160)"
  signal-emerald-strong: "oklch(45% 0.115 160)"
  signal-emerald-hover: "oklch(40% 0.10 160)"
  emerald-tint: "oklch(95% 0.03 160)"
  forest-black: "oklch(22% 0.014 160)"
  on-dark: "oklch(95% 0.006 160)"
  on-dark-accent: "oklch(80% 0.09 160)"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.9vw, 1.65rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  mono:
    fontFamily: "Spline Sans Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  none: "0"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "clamp(16px, 3vw, 32px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-emerald-strong}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  button-primary-hover:
    backgroundColor: "{colors.signal-emerald-hover}"
    textColor: "{colors.surface-white}"
  button-ghost:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
---

# Design System: Matteo Esposito — Personal CV

## 1. Overview

**Creative North Star: "The Precision Instrument"**

This is the personal site of an ML developer, and it should read the way well-written code reads: exact, unhurried, nothing decorative that isn't load-bearing. The system is a *refined-light* build — a true off-white surface (chroma 0, deliberately NOT a warm cream) carrying a single committed emerald hue. The emerald is the one voice in the room: it marks the primary action, the links, the technology tags, and the section that closes the page. Everything else is near-black ink, sage-tinted grays, and hairline rules. The influence is Stripe / Rauno-Freiberg meticulousness rather than dark-mode developer-tool drama: quiet, high-contrast, obsessively aligned.

The layout spine is a two-column rhythm — a section label and heading on the left, content on the right — that stays scannable in the under-a-minute window a recruiter actually gives it. Depth is conveyed by hairline borders and a single restrained hover lift, never by drop-shadow stacks or glass. The one saturated moment is the closing contact block: a deep pine-black panel that lets the page land on a confident dark note.

This system explicitly rejects the generic-AI-landing look the owner named as an anti-reference: no warm cream/sand body, no gradient text, no identical icon-card grids, no `01/02/03` scaffolding. It also rejects corporate-SaaS-template polish and the dry resume-in-HTML. Warmth here comes from voice and precision, not from a beige background.

**Key Characteristics:**
- True off-white surface at chroma 0 — never a warm/AI cream.
- One committed emerald hue carries brand, action, and wayfinding.
- Hairline borders and tonal restraint instead of shadow stacks.
- Sharp corners (0 radius) — a technical, drafting-table feel.
- Contrast is verified, not eyeballed: every text pair clears WCAG AA.

## 2. Colors

A monochromatic emerald-and-ink palette: one hue (OKLCH 160), one voice. Neutrals are tinted a whisper toward the same emerald so surfaces and brand feel cut from one material.

### Primary
- **Signal Emerald** (`oklch(50% 0.13 160)` / #007948): Links, hairline emphasis on hover, and the accent voice. 5.5:1 on white.
- **Signal Emerald Strong** (`oklch(45% 0.115 160)` / #00683e): The primary CTA background (CV button) and small uppercase tech tags. 6.9:1 on white; white text on it also clears 4.5:1.
- **Signal Emerald Hover** (`oklch(40% 0.10 160)` / #005634): Pressed/hover state on the primary button.
- **Emerald Tint** (`oklch(95% 0.03 160)` / #def5e8): Reserved faint wash for accented surfaces.

### Neutral
- **Instrument White** (`oklch(99% 0 0)` / #fcfcfc): The page background. Chroma 0 — a true off-white, deliberately un-tinted so it can never drift into cream.
- **Surface White** (`#ffffff`): Cards and panels, separated from the background by a hairline, not a shadow.
- **Pine Ink** (`oklch(24% 0.012 160)` / #1a211d): Primary text. 16:1 on the background.
- **Pine Ink Soft** (`oklch(38% 0.013 160)` / #3d4540): Lede and intro prose. 9.6:1.
- **Sage Muted** (`oklch(46% 0.013 160)` / #525a55): Section eyebrows, dates, and secondary metadata. 6.9:1 — comfortably above the 4.5:1 floor that the previous gray failed.
- **Hairline** (`oklch(90% 0.008 160)` / #dae0dc): All 1px borders and dividers.

### Dark (closing block)
- **Forest Black** (`oklch(22% 0.014 160)` / #151d18): The contact panel background.
- **On-Dark** (`oklch(95% 0.006 160)`): Text on Forest Black. 14.9:1.
- **On-Dark Accent** (`oklch(80% 0.09 160)`): The emerald eyebrow inside the contact panel. 9.6:1.

### Named Rules
**The One Voice Rule.** Emerald is the only chromatic voice on the page. It appears on the primary CTA, links, tech tags, hover accents, and the contact block — nowhere else. No second brand hue (the old blue and rose are gone). Its restraint is what makes it read as intentional.

**The No-Cream Rule.** The body surface is chroma 0. Warmth is forbidden in the background; it is carried by copy and the emerald, never by a beige tint. If a neutral ever needs tinting, it tints toward emerald (hue 160), never toward warm orange.

## 3. Typography

**Sans (voice):** Hanken Grotesk (with `ui-sans-serif, system-ui` fallback) — a humanist grotesque with open apertures. Technical bones, human warmth. Carries hero, headings, prose, and labels.
**Mono (data):** Spline Sans Mono (with `ui-monospace, Menlo` fallback) — reserved strictly for the "engineer's data": timeline dates, project tech-tags, and the footer status line.

**Character:** One humanist grotesque across weights (400 body, 700 headings/labels, 800 hero) provides the voice; a monospace provides genuine *proportional-vs-monospace* contrast on the small data tokens only. The mono is never used for prose or headings — it labels code/numeric content, which is the one meaningful use of mono on a developer's site (not decoration).

Loaded via Google Fonts with `display: swap`; only the four sans weights (400/500/700/800) and two mono weights (400/500) actually used are requested.

### Hierarchy
- **Display** (Hanken 800, `clamp(2.2rem, 5.2vw, 3.6rem)`, LH 0.98, `-0.025em`): The hero name. One per page. `text-wrap: balance`.
- **Headline** (Hanken 700, `clamp(1.1rem, 1.9vw, 1.65rem)`, LH 1.12, `-0.015em`): Section headings.
- **Title** (Hanken 700, 0.95rem, LH 1.25): Job titles and project names inside cards.
- **Body** (Hanken 400, 1rem/16px, LH 1.5): Prose. Capped at ~60–62ch for readability.
- **Label** (Hanken 700, 0.7rem, `letter-spacing: 0.1em`, UPPERCASE): Section eyebrows and `dt` metadata labels.
- **Mono data** (Spline Sans Mono 500, 0.68–0.72rem, `letter-spacing: 0.02em`, UPPERCASE): Dates (`tabular-nums`), tech tags, footer.

### Named Rules
**The Two-Voice Rule.** Hanken Grotesk carries everything human — name, headings, prose, labels. Spline Sans Mono carries only machine data — dates, tech stack, the footer status line. A word is set in mono only if it is literally a datum (a date, a language, a system fact). Never mono for prose or headings; never sans for the data tokens. That boundary is the typographic system.

**The Tracked-Caps Rule.** All-caps labels and mono tokens get positive tracking (`0.1em` for sans labels, `0.02em` for mono) so capitals don't crowd. Display type gets the opposite: negative tracking down to `-0.025em`.

## 4. Elevation

Flat by default. There is no ambient shadow system; separation comes from hairline borders (`Hairline` / #dae0dc) on a near-white field. Depth appears only as a *response to interaction*.

### Shadow Vocabulary
- **Hover Lift** (`box-shadow: 0 20px 60px rgba(17, 40, 30, 0.10)` + `translateY(-2px)`): The single shadow in the system, applied only to timeline entries and project cards on hover, paired with an emerald hairline. Green-tinted so the shadow reads as part of the brand, not a generic gray drop.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat and border-separated at rest. The one shadow is a hover response, never a resting decoration. If a card has a shadow while idle, it's wrong.

## 5. Components

### Buttons
- **Shape:** Sharp corners (0 radius) throughout.
- **Primary (CV):** Signal Emerald Strong background, white text, `6px 10px` padding. Hover → Signal Emerald Hover.
- **Ghost (GitHub / LinkedIn):** White background, Pine Ink text, Hairline border. Hover → emerald border, emerald text.

### Chips / Tech Tags
- **Style:** No background or border — text only. Signal Emerald Strong, 0.66rem, 800 weight, tracked uppercase, often preceding a small inline tech logo.
- **Purpose:** Categorize projects by stack (PYTHON, SELENIUM, R, SCRAPING).

### Cards / Containers
- **Corner Style:** Sharp (0 radius).
- **Background:** Surface White on the Instrument White field.
- **Border:** 1px Hairline on the full perimeter — never a side-stripe.
- **Shadow Strategy:** None at rest; Hover Lift on interaction (see Elevation).
- **Internal Padding:** `10–14px`.

### Navigation
- **Style:** Sticky top bar with a blurred backdrop; a bordered pill group holding Work / Projects / Contact.
- **States:** Pine Ink default → Signal Emerald Strong on hover. The "ME" mark is an ink-filled square with off-white letters.
- **Mobile:** Pills wrap and right-align under the mark.

### Contact Block (signature)
- The page's one saturated surface: a Forest Black full-width panel with an On-Dark Accent emerald eyebrow, light heading, and two translucent-bordered ghost links (Email, GitHub) that brighten to emerald on hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body surface at chroma 0 (Instrument White). A true off-white, never cream.
- **Do** reserve emerald for action, links, tech tags, hover, and the contact block — the One Voice Rule.
- **Do** separate surfaces with 1px Hairline borders; keep the system flat until hover.
- **Do** verify any new text/background pair against WCAG AA (4.5:1 body, 3:1 large/UI) before shipping. Sage Muted is the floor; don't go lighter for body or labels.
- **Do** cap prose at ~60–75ch and use `text-wrap: balance` on headings.
- **Do** keep corners sharp (0 radius) for the drafting-table feel.

### Don't:
- **Don't** reintroduce a warm cream/sand/paper background, a tinted near-white, or a grid overlay. This is the "generic AI landing" anti-reference, named in PRODUCT.md.
- **Don't** use gradient text, `background-clip: text`, or any decorative gradient.
- **Don't** add a second brand hue (no blue, no rose). One voice.
- **Don't** put muted gray text on a colored background, or use a light gray below Sage Muted for body copy — the old #66706b failed contrast.
- **Don't** use `border-left`/`border-right` > 1px as a colored accent stripe on cards or list items.
- **Don't** stack resting drop-shadows; the only shadow is the emerald-tinted Hover Lift.
- **Don't** let the section eyebrows grow back into loud accent-colored kickers on every section — keep them quiet Sage Muted metadata, and prefer a single deliberate cadence over per-section scaffolding.
- **Don't** use Inter, Geist, or Space Grotesk — the reflex dev-portfolio defaults this system deliberately moved off. Hanken Grotesk (voice) + Spline Sans Mono (data) is the committed pairing.
- **Don't** set prose or headings in the mono, or the data tokens (dates, tech tags) in the sans. The Two-Voice boundary is the system.
