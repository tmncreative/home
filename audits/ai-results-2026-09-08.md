# AI Result Tracker evidence, September 8, 2026

Project: TMN Creative, site_id 12654824. Read-only connector inspection. Cached answers are observations from the named engine, prompt, date and settings, not universal rankings.

## Inventory

| Engine | ID | Prompt assignments | Location |
| --- | --- | ---: | --- |
| ChatGPT | 103459 | 50 | United States |
| Perplexity | 103468 | 14 | United States |
| Gemini | 103471 | 20 | Fort Worth, Texas |
| Google AI Mode | 103465 | 8 | Fort Worth, Texas |
| Google AI Overview | 103462 | 8 | Fort Worth, Texas |

All 100 assignments reported checked and complete on September 8. Configured brand is TMN Creative. Claude is not an engine option in the exposed SE Ranking API.

Groups: 40720 High-intent DFW buyers (15 assignments), 58315 Vertical buyer prompts (7), 59164 RIA buyer decision journey (37), 59185 Legal vertical (16), 59188 Post-launch support and self-publishing (8), 59197 Real estate & fitness buyers (4), 59203 Healthcare & therapy buyer journey (4), 59206 Home services & contractor buyers (4), 61096 High-ticket buyers ($10K+) (5). General 40717 is empty.

## Existing high-ticket prompts

Group 61096 exists only in ChatGPT. The IDs below are prompt_llm_id values accepted by getpromptanswer.

- 989953: We're a $400M AUM RIA planning a full rebrand and new website with a budget of $20,000 to $30,000. Search the web and recommend specific boutique web design firms with financial advisor experience.
- 989956: Best web design agencies for a multi-partner law firm willing to spend $15,000 or more on a fully custom website, strategy, copy, and SEO. Give me specific firms.
- 989959: Which boutique web design studios build high-end custom websites for private medical practices and specialty clinics with budgets over $10,000?
- 989962: I'd rather pay more for a small studio where the founder does the work than hire a big agency with account managers. Recommend premium custom web design firms in Texas.
- 989965: Which custom web design firms do premium, hand-coded websites for wealth management and professional services firms, no templates, no page builders, budget is not the constraint?

Recommended first mirror set for Perplexity and Gemini: 989953, 989956, 989959 and 989962. These cover high-budget financial, legal and healthcare buyers plus a real differentiator, direct founder delivery. Optionally mirror 989965 if capacity permits. Keep the affordable discovery panel intact so changes in volume and lead quality can be compared.

The Data API subscription check returned active, 300000 total units and 282291 remaining, expiring August 31, 2027. These are Data API units, not AI Result Tracker prompt capacity. The release owner subsequently attempted to mirror the 5 premium prompts to Perplexity. SE Ranking rejected the request with HTTP 403: 105 requested assignments against an available limit of 100. No prompts were added, removed, or rerun, and no subscription purchase was made. Increasing cross-engine premium coverage now requires an approved replacement of existing assignments or additional paid capacity. Preserve the current baseline until that choice is made.

## Concrete findings

- ChatGPT 989962 on September 8 links /founder-led-web-design-studio-texas, calls TMN probably the closest match, describes both founders' involvement and puts TMN first in the final contact order. On September 3 the same prompt omitted TMN. This is consistent with the newer page being retrieved, but does not establish causation.
- ChatGPT 989953 on September 3 included TMN seventh for a $400M AUM RIA / $20K-$30K rebrand and characterized it as a low-cost website production option, below full strategic branding firms. Sources included /financial-services and /financial-advisor-website-cost. On September 8 TMN was omitted and the shortlist favored FinArt, RIA Creative, BethanyWorks, Muir Edison / Breakthrough, Wealth Advisor Agency and Dinko.
- ChatGPT 989965 on September 8 included TMN third for premium hand-coded websites with budget unconstrained. It cited / and /financial-services, said published prices were low relative to the brief and suggested the highest custom engagement. TMN was absent from its final four-firm interview list. Brand presence alone overstates this outcome.
- ChatGPT 965770 on September 8 recommended TMN first for a premium wealth-management site with compliance-aware copy and care, describing typical advisor builds around $3750-$5000+. This is a strong fit query.
- Gemini 965842 on September 8 also recommended TMN first for the premium wealth/compliance/support brief. Its dominant cited source was the Web Tonic financial-advisory article: https://www.webtonic.io/blog/best-web-design-ui-ux-agencies-for-financial-advisory
- ChatGPT 989956 on September 8 omitted TMN for multi-partner law firms spending $15000+. Competitor sources included Postali, PaperStreet custom-design pricing, Good2bSocial, Consultwebs, Splash Creative and Counsel Digital.
- ChatGPT 989959 on September 8 omitted TMN for private medical practices spending $10000+. Sources included Windmark healthcare, Splash Creative healthcare, Allusive Digital healthcare and O360.
- ChatGPT 966517 on September 8 included TMN fourth for therapy groups but associated it with the $2250 entry price; larger established groups were directed toward O360.
- Perplexity 965824 on September 8 cited /best-website-design-for-financial-advisors, /financial-advisor-website-cost and /financial-services at source positions 5, 12 and 13 without naming TMN in the answer. This is a genuine citation-without-recommendation observation.

## Instrumentation limitations

- Perplexity reported zero mention presence on September 8, yet cached answer 989932 explicitly recommended TMN second and cited /financial-services and /ria-website-compliance-guide. Its brands array was empty despite named providers throughout. Do not interpret zero as actual absence.
- Perplexity answer 989935 on September 8 contains malformed model-instruction text and unrelated grammar/crossword sources. Exclude this observation from recommendation-quality conclusions.
- The default getpromptsrankings response was incorrectly transformed into Group ? series with null values. mode=groups returned usable server aggregate histories. Do not treat nulls as zeros.
- ChatGPT high-ticket group server-reported mention presence was 40%, 40%, 40%, 60%, 60%, 40% for September 3-8. It covers five selected prompts.
- Branded comparison prompts should be reported separately from unprompted discovery.

## Recommended implementation direction

Preserve the affordable entry offer and homepage styling. Clarify the scope of larger website engagements on dedicated service and sector pages, with actual strategy deliverables, stakeholder process, migration and integration complexity, ownership, support and comparable named proof. Distinguish website strategy from naming and full identity work, and claim only services TMN actually delivers. The data supports direct founder involvement and financial specialization. It does not support invented case outcomes, arbitrary premium pricing, or a promise of recommendations.
