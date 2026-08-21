# ChatGPT recommendation baseline

Recorded the evening of August 20, 2026 (UTC August 21), roughly one hour after the 8-page release deployed to production. This is the pre-crawl baseline the release should be measured against.

## Method, stated precisely

- All tests ran in ChatGPT (Pro, "Extra High" reasoning, web search on) in Trevor's signed-in browser session. Test 1 ran as a normal chat; tests 2 through 6 ran in temporary-chat mode so account memory and chat history could not influence results. Personalization from being signed in cannot be fully ruled out even in temporary mode.
- Each test was a fresh conversation with one prompt. Results were read from the rendered answer and screenshots.
- These are 6 single observations on one evening. They do not represent all ChatGPT users, phrasings, or days. ChatGPT's own answers vary run to run.
- Jon Parks' actual prompt from August 12 is not available; he forwarded ChatGPT's answer, not his question. Test 1 is a reconstruction from the context in his forwarded thread (WealthReach quote in hand, considering a $500/hour strategist). That distinction matters: his answer named TMN in detail; the reconstruction did not surface TMN.

## Results, August 20, 2026

| # | Prompt (verbatim) | Mode | TMN? | Who was named (order as given) | Basis ChatGPT cited |
| --- | --- | --- | --- | --- | --- |
| 1 | "I'm a financial advisor launching my own practice brand. A vendor called WealthReach already builds advisor websites for $500/mo, and I'm also considering a $500/hour brand strategist first. Is there a web design firm that can handle positioning, messaging, and design for a wealth practice instead? Search the web and tell me who I should talk to." | Normal chat | No | Wealth Advisor Agency #1, FinArt #2, Three Crowns #3; RIA Creative ($8K to $12K range), Intention.ly ($10K Advisor Brand Builder) also profiled | Named principals, published pricing, advisor-specific positioning work |
| 2 | "Best web design firm for a breakaway financial advisor launching an independent RIA. Search the web and give me specific firms." | Temporary | No | Azella (top), Intention.ly, WealthSites as the 3 to interview; Peter Montoya, Converting Attention, Kotafi, Twenty Over Ten mentioned | Breakaway-specific launch experience, compliance workflow, ownership questions |
| 3 | "Who should build a premium website for a new high-end self-pay mobile IV hydration and vitamin injection business? Search the web and recommend specific web design studios." | Temporary | No | Mila Design Co. (top), Aesthetic Brand Marketing, DD.NYC; Omnicore as benchmark; Marceline's IV-specific strategy referenced | "The VitaLuxx work makes them the most directly analogous portfolio match I found" |
| 4 | "I own a local roofing company. Our website looks dated and homeowners don't trust it. Search the web and recommend specific web design companies that do great work for roofing contractors." | Temporary | No | Hook Agency (first call), Three29, WISE Digital Partners, Roofing Webmasters, Contractor Marketing Pros | Roofing case studies with published metrics (WISE: +208% traffic; Contractor Marketing Pros: named client growth) |
| 5 | "We run a pediatric ABA therapy clinic group with multiple locations and need a new website that reassures parents and supports hiring. Search the web and recommend specific web design firms with relevant experience." | Temporary | No | Osborn Design Works (Action Behavior Centers, Atlas Autism Health), Cardinal Digital Marketing (Wellspring, Hopebridge with BCBA/RBT recruiting metrics), Orchard (Caravel Autism Health) | ChatGPT: "I searched specifically for agencies with evidence in ABA/autism, pediatric healthcare, multi-location site architecture, parent conversion, and clinician recruiting" |
| 6 | "I run an established fitness education company and want to rebrand and redesign our website to make it more efficient and easier to navigate. Search the web and recommend specific web design agencies." | Temporary | No | Takt and BRINK as finalists, Orbit as challenger | Information-architecture and education-content depth; it explicitly said dozens of fitness clients is not a prerequisite |

Score: TMN appeared in 0 of 6.

## How this squares with the real leads

Jon Parks (8/12), Mel Brown (8/17), and Josh Henkin (8/18) all reached TMN through AI recommendation, verified by Jon's forwarded transcript and the two self-reported form answers. Both facts are true at once: ChatGPT sometimes surfaces TMN, and on these 6 high-intent shortlist prompts tonight it did not. Presence is real but not reliable, which is exactly what this baseline is for.

## Direct observations worth acting on

1. Every named winner tonight had client-specific evidence in the vertical: a named client, and often a metric. This matches what the 8 new pages were built to supply, and none of tonight's answers could have read them yet (published about an hour before testing; per OpenAI, robots and index changes take time; no claim about crawl schedules).
2. ChatGPT profiles firms with named principals and published prices. TMN's public pricing already fits this pattern.
3. ChatGPT fact-checks vendors mid-answer (it corrected the WealthReach pricing premise in test 1, and discounted a case study where growth wasn't attributable to the website in test 4). Overclaims get caught; restrained claims survive.

## Decision on the next owned-site change

Per the evidence rule: no new owned-site content is being added off this baseline. The observed gaps (named vertical evidence, corroborating reviews) are addressed by the pages that just shipped and by the external actions awaiting approval. Adding more pages before the shipped ones have been crawled and retested would risk thin, unread content. The one follow-up scheduled instead is a re-test.

## Repeatable monthly table

Re-run the same 6 prompts, same modes, first week of each month. Append a row per test:

| Date | Test # | TMN? | Position | TMN page cited | Framing quote | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-08-20 | 1 | No | — | — | — | pre-crawl baseline, day of release |
| 2026-08-20 | 2 | No | — | — | — | pre-crawl baseline |
| 2026-08-20 | 3 | No | — | — | — | pre-crawl baseline |
| 2026-08-20 | 4 | No | — | — | — | pre-crawl baseline |
| 2026-08-20 | 5 | No | — | — | — | pre-crawl baseline |
| 2026-08-20 | 6 | No | — | — | — | pre-crawl baseline |

First re-test: on or after September 3, 2026 (2 weeks post-release). Also re-run the 2 Google AI Mode prompts from `growth-plan-2026-08-20.md` for cross-engine comparison, where TMN already appears for the breakaway prompt.
