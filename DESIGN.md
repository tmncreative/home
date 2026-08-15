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
    fontSize: "clamp(2.75rem, 5.2vw, 4.85rem)"
    fontWeight: 450
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3.35rem)"
    fontWeight: 550
    lineHeight: 1.08
    letterSpacing: "-0.035em"
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
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0"
rounded:
  edge: "2px"
  control: "3px"
  compact-surface: "4px"
  surface: "5px"
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
- A limited editorial serif pairs with plain sans headlines, body copy, and evidence labels.
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

- **Identity Display Font:** Source Serif 4 with Georgia fallback
- **Body Font:** IBM Plex Sans with system sans fallbacks
- **Functional Headline and Label Font:** IBM Plex Sans with system sans fallbacks
- **Data Font:** Geist Mono with system monospace fallbacks

**Character:** The serif is a limited brand voice for the homepage and founder profile. IBM Plex Sans carries service-page headlines, guide headlines, explanations, controls, and ordinary evidence labels. Geist Mono is reserved for actual data, code, or compact numerical facts rather than used as a general design accent.

### Hierarchy

- **Display:** Restrained roman serif for the homepage and founder profile only. Avoid italic highlight words and colored phrase fragments.
- **Headline:** IBM Plex Sans for service pages, guides, sections, and conversion pages.
- **Title:** Firm sans titles for cards, records, and component headings.
- **Body:** Plain sans copy with generous line height and bounded reading widths.
- **Label:** Plain sans text for categories, bylines, captions, and evidence links. Use mono only when the content is truly data-like.

### Named Rules

**The Limited Serif Rule.** Source Serif 4 carries only the homepage and founder-profile hero statements. IBM Plex Sans handles service and guide headlines, explanations, controls, and labels. Geist Mono is reserved for real numerical or technical data.

**The Tracking Guardrail.** New or touched serif display headings stay at `-0.04em` or looser. Tighter values in legacy shared CSS are migration debt, not a pattern to repeat.

## Layout

The shared growth-guide rail caps content at 1220px and uses a fluid outer gutter. Portfolio and healthcare work grids extend to 1240px or 1280px where real client imagery needs more room. Section spacing is generous and consistent, with hairline borders or tonal paper shifts separating major ideas.

Desktop layouts use asymmetric text-and-artifact arrangements and two-column proof ledgers where the content calls for them. Repeated three-column boxed-card grids are a migration pattern, not a default. The 900px breakpoint collapses major grids and navigation density. The 560px breakpoint tightens controls, surfaces, and type on the shared guide stack. Other established portfolio components collapse at their own narrower 760px, 640px, or 520px thresholds.

Real client imagery receives a defined frame, a stable crop or aspect ratio, and enough width to be inspected. The Smitha Reddy split hero, project-fact band, and sequential case-study layouts are page-specific expressions rather than mandatory compositions.

## Elevation & Depth

The system is flat by default. Near-white and white paper tones, dark contrast bands, and hairline borders establish depth. Answer panels and proof ledgers use rules and spacing rather than floating cards. Hover states should change color or border treatment without lifting the page into an app-like layer stack.

### Shadow Vocabulary

- **Media Separation:** A neutral hairline separates a real image or screenshot from the paper ground.
- **Functional Focus:** Focus rings and selected borders provide interaction feedback without decorative glow.

### Named Rules

**The Flat at Rest Rule.** Paper tone, spacing, and hairline borders define surfaces. Avoid floating answer cards, hover lift, and colored glow.

## Shapes

Controls and media stay nearly square. Controls use a 3px radius, media and plain proof surfaces use 2px to 5px, and editorial ledgers can use no radius at all. Pill shapes, status chips, pulsing dots, floating badges, and decorative counters are not part of the system.

Borders are thin and structural. Media crops, proof frames, and cards use restrained clipping while dark proof fields remain simple rectangles with modest corner treatment.

## Components

### Buttons

- **Shape:** Nearly square, with a 3px radius and a minimum 44px target on the shared guide stack.
- **Primary:** Dark ink on light paper. On dark proof and CTA fields, restrained gold becomes the primary fill with dark ink text.
- **Secondary:** White paper with a structural-line border and dark ink text. Dark fields use a transparent secondary action with a low-contrast white border.
- **Hover / Focus:** Hover changes stay small, usually a darker ink fill or border shift without movement. Visible focus uses the established gold outline treatment.

### Cards / Containers

- **Corner Style:** 0px to 5px for ledgers, media, proof surfaces, and conversion forms.
- **Background:** White paper on the near-white or tonal-paper page grounds. Selected proof cards may invert to dark ink.
- **Shadow Strategy:** Flat at rest and flat on hover.
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
- **Don't** use pill chips, pulsing status lights, fake avatar groups, floating badges, decorative counters, or large friendly radii.
- **Don't** use italic gold fragments, animated word reveals, cursor glows, or oversized magazine-cover headlines as a default signature.
