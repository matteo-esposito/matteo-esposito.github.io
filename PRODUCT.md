# Product

## Register

brand

## Users

Recruiters, hiring managers, engineering leads, and fellow ML/data practitioners who arrive from a LinkedIn link, a GitHub profile, or a referral. They land with a specific question — "is this person worth a conversation?" — and usually spend under a minute before deciding. They scan on a laptop during a hiring window or on a phone between meetings. The job to be done: quickly understand who Matteo is, the caliber of his work, and how to reach him, and leave with the impression of a serious, credible engineer who is also a real person.

## Product Purpose

A single-page personal CV site for Matteo Esposito, an ML developer working across machine learning, data science, and pragmatic software. It exists to be the canonical, self-owned home for his professional identity — the link he controls, shares, and is judged by. Success is a visitor who, in one scroll, grasps his focus (applied ML / data science), sees proof (experience at TD, Intact, and earlier co-ops; selected projects), and reaches the CV, GitHub, LinkedIn, or email without friction. The site is static, hand-authored HTML/CSS on GitHub Pages — no build step, no framework — and that constraint is a feature: fast, durable, dependency-free.

## Brand Personality

Technical and human. Precise without being cold; personable without being cute. Voice: plain-spoken, specific, lightly opinionated ("technically serious without becoming precious"). Three words: **rigorous, grounded, unpretentious.** The interface should feel like well-written code — clear, deliberate, no wasted motion — while leaving room for a person to show through in the copy and the details. Confidence comes from restraint and craft, not volume.

## Anti-references

- **Generic AI landing pages.** No cream/sand body backgrounds, no tiny uppercase tracked eyebrow above every section, no identical icon-heading-text card grids, no gradient text, no numbered `01 / 02 / 03` section scaffolding. If it looks like the default output, it has failed.
- **Corporate / enterprise SaaS templates.** Stocky, safe, soulless polish. No hero-metric template, no marketing-speak.
- **Resume-in-HTML.** A dry, purely functional list of jobs with no point of view or craft. The content is CV-shaped, but the execution must have a distinct signature.

Reference feel: as of this pivot, the owner asked explicitly for GitHub's own Primer design language (dark header, bordered boxes, system fonts, soft light/dark toggle) — see DESIGN.md. Before that, the gesture-toward references were Linear / Vercel technical precision and Stripe / Rauno-Freiberg meticulous detail; still true in spirit (restraint, precision, no wasted motion), just expressed through GitHub's specific chrome now.

## Design Principles

1. **The work speaks; the design gets out of the way.** Clarity and hierarchy over decoration. Every element earns its place or is cut.
2. **Practice what you preach.** An ML engineer's site should itself be fast, precise, accessible, and clean under the hood — the craft is the credential.
3. **Technical, with a pulse.** Engineering rigor carries the structure; a human voice and considered detail keep it from reading as a spec sheet.
4. **Scannable in under a minute.** Optimize for the fast read: who, proof, contact. Depth is available but never required.
5. **Distinctive through restraint, not noise.** Stand out via typographic precision, a committed palette, and meticulous detail — never via gimmicks or flash.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body text ≥4.5:1 contrast, large/bold text ≥3:1 — verify against the actual (dark or tinted) backgrounds rather than assuming. Full keyboard navigability with visible focus states, semantic landmarks and heading order, and meaningful alt text (decorative logos marked empty). Honor `prefers-reduced-motion` with a non-motion fallback for any animation. Legible base type sizing and generous tap targets for mobile.
