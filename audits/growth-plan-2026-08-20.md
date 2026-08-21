# TMN Creative growth plan: reach, AI visibility, and higher-value clients

Prepared August 20, 2026 from live Google Search Console data, the August 10 to 20 inbound inquiries, live ChatGPT and Google AI Mode checks, and the current site. Builds on `ai-visibility-baseline-2026-07-21.md` and `authority-roadmap-2026-07-23.md` rather than repeating them.

## 1. What the data says

### Google organic is not a channel yet

Search Console, May 19 to August 18, 2026 (3 months):

- 54 clicks, 25.3K impressions, 0.2% CTR, average position 52
- Homepage: 32 clicks at position 4.7, almost all branded (`tmn creative`, `tmn`, `trevor niemann`)
- Non-branded clicks in 90 days: roughly 15 across the whole site
- Top non-branded pages by impressions: `/best-website-design-for-financial-advisors` 3,577 impressions at position 54, `/new-york` 1,430 at 40.7, `/web-design-for-car-wash-companies` 854 at 22.9, `/phoenix` 762 at 77.5, `/weatherford` 708 at 25.0, `/med-spa` 612 at 54.0
- Target queries are indexed but buried: `financial advisor website design` 664 impressions at position 59, `ria website design` 330 at 29, `medical practice website design` 343 at 73, `dental website design agency` 283 at 71, `arlington web design` 304 at 49

Impressions are inflated by rank tracking. `weatherford website design` shows 706 impressions at position 2.2 with zero clicks, which is the signature of a rank tracker querying Google daily, not humans. Treat impression counts as unreliable and read only clicks.

Conclusion: the site is technically clean (confirmed August 7 audit) and the 8/13 to 8/15 entity and content work is solid, but the domain has 18 referring domains and Google ranks it on page 3 to 8 for everything commercial. On-site changes will not move that. Off-site authority will, slowly.

### AI assistants are the channel that is working

Inbound August 10 to 20 (6 real inquiries, 2 spam):

| Lead | Date | Form | Budget | First landing | Source captured |
| --- | --- | --- | --- | --- | --- |
| Christian Charvet, LumiClinics | 8/10 | free-review | $1.5K to 5K | `/free-review` direct | none (pre-attribution form) |
| Lyndsie Kennett, Pathway Financial Advisors | 8/11 | start-a-project | not approved, researching | `/` | none (pre-attribution form) |
| Jon Parks, breakaway advisor | 8/12 | free-review | $1.5K to 5K | `/trevor` | none, but `/trevor` as first page matches the llms.txt advisor guidance |
| Melissa Brown, Unbothered (high-end self-pay mobile IV) | 8/17 | start-a-project | $5K to 10K | `/` via google.com | self-reported: another AI assistant |
| Josh Henkin, DVRT Fitness | 8/18 | start-a-project | $5K to 10K | `/` via google.com | self-reported: ChatGPT |
| Pablo Vargas | 8/20 | Calendly only | unknown | n/a | none (Calendly has no source question) |

Both inquiries where a source was captured came from AI assistants, and both are in the $5K to 10K tier. Both reached the site by Googling the brand after the AI named it, so referrer-based AI detection saw them as Google traffic. The self-report field is the only thing that caught them. Neither is in a vertical TMN targets explicitly, which means the AI is recommending TMN for general "premium redesign for an established business" prompts.

### What ChatGPT actually told a buyer (Jon Parks, August 12)

Jon Parks forwarded the ChatGPT answer that put TMN on his shortlist. He was comparing a $500/hour brand strategist against WealthReach's $500/mo advisor site product, and asked ChatGPT who to talk to. ChatGPT's reasons, in its order:

1. Trevor's background: "about a decade in fintech, private wealth, family-office capital raising and enterprise sales." Near-verbatim from `/trevor` and `llms.txt`. This is why Jon's first page was `/trevor`.
2. "Financial advisors/RIAs are an explicit specialty. They discuss ADV/CRS hosting, compliance-aware copy, disclosures and the SEC Marketing Rule." Vertical vocabulary from `/financial-services` and the compliance guide.
3. "Positioning + copy + design + build" in one shop, framed as the alternative to hiring a strategist and then a developer.
4. "Pricing is refreshingly sane: roughly $3,750 for a full rebuild and $5,000+ for the more strategic/custom engagement." It did not quote $2,250 to an advisor. The AI matches the tier to the buyer, so the Starter wedge and the premium tier coexist.
5. Ownership ("no proprietary-platform hostage situation") and founder-led ("Trevor and Taylor, not a 20-person agency").

The caveat it attached: "I would not hire him sight unseen. TMN is relatively young; Clutch lists it as founded in 2024, and its Clutch profile currently doesn't show client reviews. A lot of the strongest claims about its advisor expertise come from TMN's own website." ChatGPT went to Clutch specifically to corroborate the site and found a wrong year and no reviews. Jon called anyway and signed August 14. A less motivated buyer stops at that paragraph.

What this proves:

- The founder credential plus vertical-specific regulatory vocabulary is the pattern that wins. Replicate it per vertical: name the tools, rules, and artifacts that vertical lives with (HIPAA intake and credentialing for practices, ServiceTitan and Jobber for home services, bar advertising rules for attorneys, CSCS and certification bodies for fitness education).
- Clutch was the corroboration source ChatGPT checked in this observed answer. Founding year and reviews there are the highest-leverage external fix suggested by this evidence.
- Named, third-party-visible proof is the missing piece. Jon is the first advisor client who can supply it: a Clutch review, a Google review, and a named case study once the site launches, subject to whatever Osaic's compliance team allows him to say publicly.

### What AI engines say right now (checked 8/20)

| Prompt | Engine | TMN present | Who won and why |
| --- | --- | --- | --- |
| Best web design firm for a breakaway advisor launching an independent RIA | Google AI Mode | Yes, #3 of 5, cited from tmncreative.com | Framed as "Starts at $2,250, 72-hour turnarounds, Solos / Fast launches." AltaStreet got "$5,000 to $15,000+, boutique firms." Fahrenheit Studio got "High-AUM breakaway teams." |
| Best web design agency for a boutique private wealth firm serving HNW families | Google AI Mode | No | Select Advisors Institute, BethanyWorks, Haxtiv, SPARK. Sources: Web Tonic's "Wealth Management Web Design Agencies 2026" list, Bethany Works' own "Best Web Designers for RIAs" post, SPARK's named CIG Capital Advisors case study. |
| Premium website for a high-end self-pay mobile IV business | Google AI Mode | No | Marceline Studios, Aesthetic Brand Marketing, Vaylo Studios, Web Tonic. Every winner has a dedicated IV-therapy web design service page. |
| Established fitness education company rebrand and navigation overhaul | ChatGPT (web search) | No | Huemor (ABC Fitness case study), Ramotion, Huge (Planet Fitness). Every winner has a named fitness case study. |

Three patterns recur across these observed answers (a sample of 4 prompts on one day, not a proven general mechanism):

1. A dedicated page that matches the buyer's exact vertical and situation.
2. A named case study in that vertical with a real client and a result.
3. Presence on a third-party "best agencies for X 2026" list. Web Tonic alone supplied 3 of the competitor citations above.

TMN has pattern 1 in many verticals. It has pattern 2 only for healthcare (Smitha Reddy MD) and an archived showcase (Walnut Ventures). It has pattern 3 nowhere.

### The positioning trade-off

The AI has learned "$2,250 and 72 hours" as TMN's identity. That is accurate for Starter, and it is what the site repeats most: the homepage mentions 72 hours 44 times, pricing 22, financial-services 18. The homepage testimonial ("Every one quoted 8 to 12 weeks and $10K+. Trevor had something in my inbox in 48 hours") positions TMN as the faster, more accessible alternative to $10K agencies.

That framing is why TMN gets named at all, and Trevor reports the $2,250 to $2,500 builds close at a very high rate. It also slots TMN into the "solos / fast launches" bucket in every AI comparison table, so a wealth-firm principal or managing partner reads that row and picks AltaStreet or Fahrenheit. The answer is not to flip the site. It is to keep the price-led front door exactly as it is and give assistants a second, clearly labeled Custom Studio Build story to cite on the pages HNW buyers reach.


### Crawler facts (primary source, checked August 20, 2026)

Per OpenAI's official crawler documentation (developers.openai.com/api/docs/bots): OAI-SearchBot is what surfaces sites in ChatGPT search results, and OpenAI says robots.txt changes can take about 24 hours to be reflected; GPTBot is a separate crawler for model training; ChatGPT-User fetches pages for user-initiated actions and does not determine search inclusion. OpenAI publishes IP ranges for each bot (openai.com/searchbot.json and related files). TMN's robots.txt allows all three. Anything beyond these statements about how ChatGPT selects or ranks agencies is inference from observed answers, not documented mechanism. IndexNow submissions notify participating search engines (Bing, Seznam, Naver, Yandex); they are search-engine discovery work and carry no documented guarantee about ChatGPT.

## 2. The plan, in priority order

### Priority 1: keep the $2,250 front door, add the premium track beside it (this week)

Trevor's close rate on the $2,250 to $2,500 builds is very high (his data, August 20). That funnel is working and the AI framing that feeds it stays. The HNW push is additive, not a rewrite.

Done today:

- `llms.txt` keeps Starter Refresh at $2,250 as the first thing an assistant reads and adds one paragraph on the Custom Studio Build fit for RIAs, attorneys, CPAs, and practices, with Trevor's private-wealth background as the evidence. No prices changed, no speed claims removed.

Recommended next:

- Leave the homepage, pricing page, and ad messaging price-led.
- On `/financial-services`, `/best-website-design-for-financial-advisors`, and `/breakaway-advisor-website-guide` only, add a short Custom Studio Build paragraph near the top so an assistant answering an HNW-wealth prompt has something to cite. Keep the Starter line as is.
- Add one paragraph to `/trevor` and `/studio` that says plainly who Trevor sold to and raised from (family offices, private wealth platforms, fintech) at the category level. That is the credential an RIA principal checks, and it is the page Jon Parks landed on.
- Track close rate and revenue per lead by budget tier for 60 days. Let that decide how hard to push upmarket.

### Priority 2: close the attribution holes (this week)

- Add "How did you hear about TMN?" as a required Calendly question on the Website Review event type with the same options as the site form. Pablo Vargas booked with no source and no website.
- Keep the site self-report optional but move it above the phone field and relabel it "Where did you first hear about TMN? This genuinely helps us." Both AI leads answered it when it was last.
- Ask on every call and log the answer in Attio. Pathway, LumiClinics, and Jon Parks have no notes recording how they found TMN. Those 3 answers are worth more than any dashboard right now.
- Stop reading GSC impressions as demand. Check SE Ranking's tracked-keyword list against the zero-click, high-impression queries and either accept the pollution or reduce tracking frequency.

### Priority 3: build proof in the verticals where HNW money is (30 days)

AI engines and HNW buyers both want named work. Current proof is strongest in home services and B2B, weakest in wealth and legal.

Executed August 20: three named case study pages are live in the repo: `/suncraft-roofing-website-design`, `/training-wheels-aba-website-design`, and `/ramon-design-group-website-design`, each built strictly from publicly verifiable facts, wired into the portfolio, the matching vertical pages, sitemap, llms.txt, and redirects. A "Best for / Not a fit / Investment & timing" block now sits near the top of all 12 industry pages. Remaining proof work below.

- Write one anonymized private-wealth case study from the NDA work, structured as "firm profile, what the site had to do, what changed," with the client described at category level only. Get written sign-off on the anonymized version.
- Ask LumiClinics (live project) and, when they close, Pathway Advisors and Parks Wealth Partners for a factual case study with a contextual link. One wealth case study with a real firm name is the single highest-value asset on this list.
- Get Clutch fixed first: founding year to 2025 and reviews. ChatGPT cited both gaps to Jon Parks verbatim. Clutch still shows zero reviews. Diamond H, Promised Land, QC Atlantic, and now LumiClinics are candidates. Three reviews averaging 4.0 meet the Clutch Certified threshold, and Clutch is one of the sources AI engines trust for "best agency" prompts.
- Push Google Business Profile from 4 reviews toward 10. Same clients.

### Priority 4: get on the lists AI reads (30 to 60 days)

Third-party lists are doing the work competitors' own sites cannot. Targets, in order:

1. Web Tonic: "Wealth Management Web Design Agencies 2026," "Advisor Website Design Agencies 2026," and "21 Advisory Branding Studios for 2026." Three of the competitor citations above came from these. The site was unreachable during this check, so confirm their inclusion process before pitching.
2. Bethany Works "Best Web Designers for RIAs" and similar advisor-marketing blogs that publish vendor roundups.
3. Clutch, DesignRush, GoodFirms, Agency List, Expertise.com, UpCity per the authority roadmap. Profiles exist on 3 of these. The roadmap's founding-year and Walnut Ventures corrections are still open and should be done first so the profiles corroborate the site.
4. Advisor-industry press and podcasts (Kitces, Advisor Perspectives, XY Planning Network vendor directory, Michael Kitces' AdvisorTech map) where a founder with a capital-raising background has a credible story.

### Priority 5: dedicated pages for HNW-adjacent niches where AI rewards specificity (60 to 90 days)

Every AI winner above had a page matching the exact prompt. TMN already runs this play for car washes, electricians, and roofers. Run it where the buyers have money:

- `/websites-for-private-wealth-firms` or `/family-office-advisor-website-design`: multi-generational families, private wealth boutiques, family-office-facing advisors. TMN is absent from the HNW wealth prompt today.
- `/websites-for-estate-planning-attorneys`: the attorney page is 575 words and general. Estate and trust practices are the HNW legal niche.
- `/websites-for-concierge-medicine-practices` and `/websites-for-iv-therapy-and-wellness-clinics`: Mel Brown's inquiry is the template. Self-pay, high-end, medical-director credentialing, symptom-first navigation.
- `/websites-for-architects-and-custom-home-builders`: Ramon Design Group is live proof and the Phoenix page already ranks for it.

Executed August 20: `/websites-for-fitness-brands` and `/websites-for-iv-therapy-clinics` are live in the repo on the car-wash page template (the niche page that already earned a citation and a lead), each with a fit block, symptom- or program-first structure, hedged integration language, FAQ schema matching visible text, and site-wide footer links from 29 pages. The mental-health-clinic page is deliberately deferred until LumiClinics launches so it can carry named proof. Remaining pages below.

Each page needs the same structure that earns citations now: direct answer in the first 200 words, explicit pricing tier (Custom first), named proof, compliance or credentialing boundaries, FAQ with schema, and a link from the vertical hub and `llms.txt`.

### Priority 6: search authority, accepted as slow

Nothing here changes in 30 days. Execute the authority roadmap's Tier 1 and Tier 2 items and stop expecting organic clicks to move before the referring-domain count does. The pages are ready. The links are not there.

### Release and baseline record (August 20 late evening)

The 8 new pages deployed to production in Netlify deploy 6a87cf3b (commit c74e2ab, published 2026-08-21T04:08 UTC). All 8 live URLs verified: 200, correct canonicals, indexable, in the live sitemap and llms.txt, valid JSON-LD, assets loading. IndexNow accepted 8 URLs (HTTP 200). Search Console sitemap resubmitted with visible confirmation. The ChatGPT recommendation baseline is recorded in `chatgpt-baseline-2026-08-20.md`: 0 of 6 high-intent prompts surfaced TMN that evening, against 3 verified AI-sourced leads earlier in the month. First re-test on or after September 3.

## 3. How to measure it

Monthly, 15 minutes:

- Re-run the 4 prompts above plus 2 more (estate planning attorney, concierge medicine) in ChatGPT, Google AI Mode, and Perplexity. Record presence and how TMN is framed. The goal is to move from the "solos / fast" bucket to the "boutique firms" bucket.
- Inquiries by self-reported source and by budget tier. The target is more $5K+ inquiries, not more inquiries.
- Clutch and Google review counts.
- Referring domains in SE Ranking, ignoring spam.
- GSC non-branded clicks only. Ignore impressions.

## 4. Decisions that need Trevor

- Approve the Custom-tier paragraphs on the financial pages and the Trevor/studio background paragraph (Priority 1).
- Add the Calendly source question (account setting).
- Approve anonymized private-wealth case study and client outreach for Clutch reviews and case studies.
- Approve Web Tonic and directory pitches once their process is confirmed.
- Pick which 2 of the Priority 5 pages to build first. Recommendation: private wealth firms and concierge or IV wellness, because one matches the highest-value buyer and the other matches a lead that already arrived.
