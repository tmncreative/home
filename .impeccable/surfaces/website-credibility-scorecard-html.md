---
version: 1
slug: "website-credibility-scorecard-html"
primary_target: "website-credibility-scorecard.html"
related_targets: []
---

## Scope and mode

- Surface: `website-credibility-scorecard.html`
- Mode: Read with one lightweight scoring task
- Audience: Established business owners and professional firms deciding whether their current website supports or weakens credibility
- Job: Let a buyer score 12 visible, verifiable signals using TMN's 6-part credibility method
- Primary action: Complete the scorecard
- Next action: Review the gaps or request a free preview

## Evidence and constraints

- Score only public website evidence a buyer can see or verify
- Use 2 binary checks each for Position, Proof, People, Process, Ownership, and Next step
- Explain what earns each point and never infer business quality from the score
- Use real TMN case-study screenshots only in the supporting proof section
- State that the tool does not guarantee rankings, leads, conversions, or AI recommendations
- Preserve current TMN pricing, ownership, timeline, and regulatory boundaries
- Avoid query-variant content, fabricated benchmarks, testimonials, and unsupported claims

## Approved direction

- Approved comp: `.impeccable/mocks/credibility-scorecard-audit-sheet.png`
- Seed key: `3fdbf30c`
- Composition: Compact left-aligned introduction above a full-width audit sheet with a wide question column and a narrow sticky score column
- Memorable moment: The score and diagnosis update beside the 12 visible-evidence checks without a dashboard or progress bar
- Component grammar: Flat cool-paper fields, deep navy ink, restrained gold, sparse 1px dividers, square checkboxes, 2px to 5px corners, and no card grid
- Type ramp: IBM Plex Sans for reading and controls, Geist Mono only for the score and point notation
- Responsive behavior: The score becomes a compact sticky summary above the grouped questions; all controls stay at least 44px high and the page remains one column

## Implementation inventory

| Ingredient | Medium | Commitment |
| --- | --- | --- |
| Navigation | Existing semantic HTML and shared CSS | Keep one line on desktop and existing mobile behavior |
| Opening | Semantic HTML | One H1, one short explanation, no hero microcopy below the action |
| Scorecard | Semantic `form`, `fieldset`, `legend`, and checkboxes | 6 grouped categories and 12 visible checks, one point each |
| Score result | Semantic output with polite live region | Large `x/12`, honest diagnosis, gap-specific next action, no filled progress track |
| Persistence | Small vanilla JavaScript module | Store only checkbox state in localStorage, allow explicit reset, work without persistence |
| Evidence examples | Existing tracked raster screenshots | Use named real TMN work and direct case-study or live-site routes |
| Method and limitations | Semantic article copy | Explain scoring, interpretation, and what the score cannot establish |
| FAQ | Visible details plus matching JSON-LD | Answer scoring, privacy, fit, proof, and AI recommendation questions |
| Primary conversion | Existing button vocabulary | Use `Request a Free Preview` only after the visitor sees the result |

## Final state

- Finish disposition: Approved with no open findings
- Asset disposition: Complete with no new media required

## Unresolved decisions

- The score is a first-party diagnostic, not a validated research instrument or industry benchmark
- Independent reviews, interviews, client citations, and editorial coverage still require external coordination
