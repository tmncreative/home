---
name: TMN Creative
description: Evidence-led editorial system for a founder-led Fort Worth web studio.
colors:
  near-white-paper: "oklch(98.5% 0.004 240)"
  white-paper: "oklch(100% 0 0)"
  tonal-paper: "oklch(96.5% 0.006 240)"
  dark-ink: "oklch(18% 0.037 262)"
  secondary-ink: "oklch(31% 0.032 258)"
  muted-ink: "oklch(49% 0.024 252)"
  soft-ink: "oklch(68% 0.018 248)"
  structural-line: "oklch(89% 0.012 248)"
  soft-line: "oklch(92.5% 0.009 248)"
  restrained-gold: "oklch(70% 0.107 85)"
  deep-gold: "oklch(50% 0.105 80)"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(3rem, 6.2vw, 6.35rem)"
    fontWeight: 520
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(2.2rem, 3vw, 4.2rem)"
    fontWeight: 520
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 650
    letterSpacing: "0.12em"
rounded:
  control: "4px"
  compact-surface: "6px"
  surface: "8px"
spacing:
  rail: "clamp(1rem, 3vw, 2.5rem)"
  section-y: "clamp(3.2rem, 6vw, 6rem)"
  card: "1.15rem"
components:
  button-primary:
    backgroundColor: "{colors.dark-ink}"
    textColor: "{colors.white-paper}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1rem"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.white-paper}"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1rem"
    height: "44px"
  evidence-card:
    backgroundColor: "{colors.white-paper}"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.surface}"
    padding: "{spacing.card}"
  proof-panel:
    backgroundColor: "{colors.dark-ink}"
    textColor: "{colors.white-paper}"
    rounded: "{rounded.surface}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
  navigation:
    backgroundColor: "oklch(98.5% 0.004 240 / 0.88)"
    textColor: "{colors.dark-ink}"
---

# Design System: TMN Creative

## Overview

**Creative North Star: "The Proof Ledger"**

The Proof Ledger treats the site as a calm, public record of the studio's work. Near-white paper, dark ink, restrained gold, editorial serif type, and real client imagery create an institutional surface that feels handcrafted and easy to verify.

Work, client context, and direct evidence should remain visually ahead of broad agency claims. Pages may choose different compositions, but they share bounded rails, crisp controls, factual labels, and a restrained hierarchy that keeps attention on the artifact and the next useful route.

**Key Characteristics:**

- Evidence and real client work lead the visual hierarchy.
- Near-white paper and dark ink carry most of the interface.
- Gold acts as a restrained annotation and action color.
- Editorial serif headlines pair with plain sans body copy and compact evidence labels.
- Layouts stay bounded, responsive, and quiet enough for trust-first subjects.

## Colors

The palette uses paper-like neutrals and cool ink for almost the entire page, with warm gold reserved for meaning and action.

### Primary

- **Restrained Gold:** Marks compact labels, selected emphasis, active proof details, and primary actions on dark surfaces.
- **Deep Gold:** Carries readable gold emphasis on light paper, including eyebrows, links, and italic headline accents.

### Neutral

- **Near-White Paper:** Default page ground.
- **White Paper:** Raised cards, answer panels, and secondary controls.
- **Tonal Paper:** Alternating section ground and quiet hover fill.
- **Dark Ink:** Primary text, dark proof fields, primary controls, and high-contrast footer regions.
- **Secondary Ink:** Supporting text that still needs clear authority.
- **Muted Ink:** Explanatory copy, captions, and lower-priority links.
- **Soft Ink:** Low-emphasis text on dark fields and secondary metadata.
- **Structural Line:** Primary hairline borders around cards, tables, media, and navigation.
- **Soft Line:** Interior dividers and lower-contrast row rules.

### Named Rules

**The Annotation Rule.** Gold marks labels, selected emphasis, and high-value actions. Keep it rare enough to retain meaning.

## Typography

- **Display Font:** Source Serif 4 with Georgia fallback
- **Body Font:** IBM Plex Sans with system sans fallbacks
- **Label Font:** Geist Mono with system monospace fallbacks

**Character:** The serif gives headlines editorial authority without ornamental excess. The sans keeps explanations and controls direct, while the mono face makes facts, categories, and small proof labels feel recorded rather than promotional.

### Hierarchy

- **Display:** Large, tightly tracked serif for first-view headlines. Italic words may carry the deep-gold accent.
- **Headline:** Serif section headings with compact line height and regular-to-medium weight.
- **Title:** Firm sans titles for cards, records, and component headings.
- **Body:** Plain sans copy with generous line height and bounded reading widths.
- **Label:** Compact mono text for numbers, facts, categories, table headers, and evidence links. Use uppercase only where the incumbent component does.

### Named Rules

**The Serif Lead Rule.** Source Serif 4 carries display and section headlines. IBM Plex Sans handles explanation and controls. Geist Mono is reserved for compact facts and evidence markers.

**The Tracking Guardrail.** New or touched serif display headings stay at `-0.04em` or looser. Tighter values in legacy shared CSS are migration debt, not a pattern to repeat.

## Layout

The shared growth-guide rail caps content at 1220px and uses a fluid outer gutter. Portfolio and healthcare work grids extend to 1240px or 1280px where real client imagery needs more room. Section spacing is generous and consistent, with hairline borders or tonal paper shifts separating major ideas.

Desktop layouts use clear grids, including three-column information cards, two-column proof pairings, and asymmetric text-and-artifact arrangements where the content calls for them. The 900px breakpoint collapses major grids and navigation density. The 560px breakpoint tightens controls, surfaces, and type on the shared guide stack. Other established portfolio components collapse at their own narrower 760px, 640px, or 520px thresholds.

Real client imagery receives a defined frame, a stable crop or aspect ratio, and enough width to be inspected. The Smitha Reddy split hero, project-fact band, and sequential case-study layouts are page-specific expressions rather than mandatory compositions.

## Elevation & Depth

The system is flat by default. Near-white and white paper tones, dark contrast bands, and hairline borders establish most depth. The shared answer panel uses a soft ambient shadow, and linked cards gain a faint shadow only as they lift on hover.

### Shadow Vocabulary

- **Ambient Answer Panel:** A broad, low-opacity shadow separates a key explanatory panel from the page without making it feel like an app card.
- **Interactive Card Lift:** A smaller, faint shadow appears with a 2px lift on linked evidence cards.

### Named Rules

**The Flat at Rest Rule.** Paper tone and hairline borders define most surfaces. Use the established ambient shadows for an answer panel or an interactive lift, never as a default around every container.

## Shapes

Controls stay nearly square. The shared guide system uses crisp 4px controls and 8px content surfaces, with selected surfaces tightening to 6px on narrow screens. Portfolio media and larger cards may use the existing 10px or 14px frames. Pill shapes are limited to an established status tag, not used as a default action language.

Borders are thin and structural. Media crops, proof frames, and cards use restrained clipping while dark proof fields remain simple rectangles with modest corner treatment.

## Components

### Buttons

- **Shape:** Nearly square, with a 4px radius and a minimum 44px target on the shared guide stack.
- **Primary:** Dark ink on light paper. On dark proof and CTA fields, restrained gold becomes the primary fill with dark ink text.
- **Secondary:** White paper with a structural-line border and dark ink text. Dark fields use a transparent secondary action with a low-contrast white border.
- **Hover / Focus:** Hover changes stay small, usually a 1px lift, a darker ink fill, or a border shift. Visible focus uses the established gold outline treatment.

### Cards / Containers

- **Corner Style:** 8px on the shared guide cards, with the established 10px and 14px variants used for larger portfolio media and card surfaces.
- **Background:** White paper on the near-white or tonal-paper page grounds. Selected proof cards may invert to dark ink.
- **Shadow Strategy:** Flat at rest, with a faint lift for linked or hoverable records.
- **Border:** A single structural hairline defines the surface.
- **Internal Padding:** Compact on evidence cards, with larger padding reserved for explanatory or proof panels.

### Navigation

Use the established restrained top rail with the dark logo, low-contrast links, and one direct dark action. The guide stack uses a sticky translucent near-white bar with an immediate bottom line. Portfolio and healthcare pages use a fixed version that reveals its line after scroll. Mobile removes the dense link row before content becomes compressed.

### Proof Records

Proof components pair real client imagery with the project name, sector or category, and a direct route to the case study or live site. Dark proof panels may carry a compact gold label, an editorial headline, factual supporting copy, and 1 or 2 direct actions. Composition can change by page, but the artifact and verification route remain legible.

## Do's and Don'ts

### Do:

- **Do** put real client imagery, project names, and verifiable routes ahead of decorative agency claims.
- **Do** preserve the near-white, dark-ink, and restrained-gold balance.
- **Do** keep actions at least 44px high and maintain visible focus treatment.
- **Do** collapse multi-column grids before the content becomes compressed, and honor reduced-motion preferences.

### Don't:

- **Don't** turn the Smitha Reddy split hero, fact band, or case-study sequence into a universal page template.
- **Don't** use gold as a full-page field or repeated decorative effect.
- **Don't** replace real work with stock scenes, generic device mockups, or invented outcomes.
- **Don't** spread pill controls or large friendly radii across the editorial system.
