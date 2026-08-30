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

TMN has pattern 1 in many verticals. At the time of the 8/20 tests it had pattern 2 only for healthcare; 7 case studies now exist. Correction, verified live 8/21: pattern 3 is no longer empty. Web Tonic (webtonic.io; the earlier "unreachable" note used the wrong domain, webtonic.com) published 3 comparisons listing TMN: #1 in "Mobile First or Nothing: 20 HVAC Website Design Agencies (2026)" (Aug 11), #3 in "Ask Who Owns the Compliance Review: 21 Advisor Web Design Agencies (2026)" (Aug 11, updated Aug 19), and #21 in "One Page Per Treatment: 21 Med Spa Page Agencies in 2026" (Aug 10). These are the publisher's own editorial rankings.

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

### Verification page shipped (August 21)

`/verify` is live (Netlify deploy 6a88042f, commits 067026b and 8f0282a): a calm buyer verification resource listing clients' live sites whose published HTML carried a TMN credit when checked on 8/21 (SunCraft, Tony's, Ramon Design Group, Training Wheels, Smitha Reddy), third-party profiles with dated status (including Clutch's "Not yet reviewed" and "Founded 2024" as it stood on 8/21), the 3 Web Tonic editorial rankings with dates and positions, current discrepancies with status, and TMN's standing no-claim policies. Grounding: ChatGPT's verbatim caveat to Jon Parks that TMN's strongest claims were self-sourced, plus the observed fact-checking behavior in the 8/20 baseline. This is a durability play, not a ranking claim. Linked from the homepage and studio footers, the Trevor page ("Buyer verification"), llms.txt, the sitemap, and (as of Aug 21) each of the 7 client case studies' verify sections; /verify plus the 2 changed pages were submitted through IndexNow (HTTP 200).

### SE Ranking read, August 27 (source-level AI intelligence)

Weekly report (Aug 21-27): Google flat-to-up (17 up / 14 down, top-10 count up to 5, Weatherford holding #9 with a touch of #6; the Arlington "drops" were an Aug 25-26 flux that recovered by Aug 27). The falling number is the AI Results Tracker: mention presence 0 percent and link presence 22 to 27 percent (down ~13) across 15 tracked ChatGPT prompts, all of them Fort Worth local prompts, none of them the vertical prompts that produce TMN's actual leads.

The tracker's source table for those FW prompts, checked in-app on Aug 27:

- clutch.co: cited in 29 AI answers, 48.3 percent coverage, 0 TMN mentions. The cited page is clutch.co/web-designers/fort-worth, where TMN does not appear; ordering is driven by verified review volume and rating, and a firm with only 2 reviews holds a top-4 slot. TMN has 1 review. This is the third independent confirmation (Jon transcript, 8/20 baseline, source-frequency data) that Clutch reviews are the highest-leverage external fix.
- designrush.com: 25 answers, 41.7 percent, 4 TMN mentions at a 100 percent mention rate. DesignRush's Fort Worth list already carries TMN into answers and explains the good-day 40 percent link presence.
- expertise.com: 19 answers, 31.7 percent, 0 TMN mentions ("17 Best Fort Worth, TX Web Designers"). goodfirms.co: 8 answers, blocked by its 2-year rule until 2027.
- Competitors' own homepages and self-published "best in Fort Worth" pages are cited too (p2ldigitalstudio 30 percent, smithwebco 25 percent, wrightagency 25 percent). TMN's own /fort-worth page is cited in 21.7 percent of answers with a 100 percent mention rate.

Decisions this creates: (1) keep routing every willing client to Clutch reviews until TMN appears on the Fort Worth directory page; (2) ask Expertise.com for listing consideration on its Fort Worth page (approval item); (3) decide whether TMN publishes its own honest Fort Worth agency comparison page, the format competitors are being cited for (approval item, names competitors); (4) add the 6 vertical baseline prompts to SE Ranking's tracker so Sept 3 measurement is automated (account change, and the Core Plan access Phil Gagnon extended appears to run only through late August, so renewal is a prerequisite).
### AIO package shipped August 27 (deploy 868efda)

LumiClinics launched on its own domain with a public TMN credit, unlocking the deferred mental-health vertical: /lumiclinics-website-design (8th case study, provider/insurance/regulated-content evidence) and /websites-for-mental-health-clinics (vertical page with LumiClinics as named proof) are live. Fit blocks extended to the 4 AI-cited city pages (/fort-worth is TMN's most-cited own page in the FW prompt source data). The attributed Web Tonic rankings now appear in context on /hvac (#1) and /financial-services (#3), and llms.txt carries a dated third-party corroboration section. All URLs live-verified; IndexNow accepted 8 URLs (HTTP 200). DVRT has not closed (call 8/28), so the fitness case study remains locked.

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

## August 27 late evening: Expertise submitted, Web Tonic criteria executed

- Expertise.com listing request SENT from trevor@tmncreative.com to info@expertise.com (their published channel; the update portal serves only already-listed businesses). Gmail message ID 1a0454d6c96c3626. Cited published pricing, the Google 5.0 from 8 reviews, and /verify. Awaiting reply; do not resend.
- Web Tonic research (webtonic.io, verified live 8/27): no other comparison lists exist in TMN's verticals; their blog otherwise covers email/analytics/ads city listicles. Methodology published in-article: "84-point editorial review," case studies with measurable KPIs, cross-checks of Clutch/Google/G2/Trustpilot, quarterly re-audits (case-study recency, entity age, LinkedIn footprint, portfolio authenticity, client references, review authenticity). No editorial contact channel exists; only a sales-call form. Their re-audit reading the improved pages is the mechanism.
- Their stated TMN weaknesses, both already closed by later work: HVAC #1 caveat "portfolio skews toward professional-services... rather than named HVAC accounts"; med spa #21 "zero named clients or documented case studies." The "forty-plus site portfolio" phrase in their advisor entry is their text, not ours; financial-services.html carries no such claim.
- Release ac9f1a6 (verified live in production): replaced stale work grids on 28 pages. True Margin North (TMN's own LLC, the self-corroboration objection ChatGPT raised with Jon Parks) removed as portfolio proof everywhere except the honest homepage/studio device frames and the footer legal line. Trades verticals (hvac, plumbing, contractors, home-services, car-wash, service-businesses, landscaping, roofing) now show SunCraft Roofing, Promised Land Renovations, and Tony's Lawn & Tree; med-spa and dental pages show LumiClinics, Smitha Reddy MD, and Care to Speak; 17 remaining pages swap TMN for SunCraft and point RDG tiles at its case study. All tiles link internal case studies. Gates: build 98 entries, link+asset pass on 28 pages, whitespace clean, desktop + 390px iframe-harness visual pass. IndexNow 200 for all 28 URLs.
- Follow-up: PageSpeed Insights keyless API quota was exhausted 8/27 (HTTP 429 on all attempts, serial and parallel). When it resets, measure the 8 client sites mobile; where scores are strong, add dated measured-performance rows to case-study verify sections (Web Tonic's "measurable KPIs" pillar). Do not publish unmeasured numbers.
- G2 and Trustpilot presence (their reputation cross-check) requires account creation, which is Trevor's action if wanted. LinkedIn company-page cleanup (their LinkedIn-footprint pillar) also remains Trevor-side.

## August 27 full-site close scan (releases c85f138 + 174efd2)

Swept all 80 built pages: structure, duplicate IDs, heading order, titles, descriptions, canonicals, sitemap parity, JSON-LD validity, FAQ schema parity, internal links, anchors, image assets and dimension attributes, srcset, og/twitter tags, forms, _redirects targets, llms.txt links, robots.txt; all 78 sitemap URLs return 200 live; live-vs-repo parity verified (homepage delta is Netlify's own form processor, hidden form-name input confirmed registered); zero console errors on 9 template representatives.

Fixed: .hero-work-caption had no CSS anywhere so the homepage SunCraft caption rendered as unstyled run-together text (styled to match the design system); start-a-project still showed True Margin North as work proof with wrong image dimensions (now SunCraft, correct dims); 8 meta descriptions ran 177 to 196 chars (trimmed to 152 to 159); portfolio JSON-LD dateModified refreshed.

Verified not bugs: Facebook-pixel and repeated-hero empty alts are correct decorative treatment; "when..." ellipses intentional; query-string image URLs resolve; 404/success lack og:title but are noindex; device-theater screenSteps animation confirmed mechanically sound end to end (frozen frames in the audit pane were occluded-window frame throttling, not a site defect; keyframes scrub correctly at 0/50/100%).

Observation, Trevor's call: the iPhone scroller shows Ramon Design Group's near-black mobile hero during the first dwell and each return to top, which can read as a powered-off phone inside the black bezel; a lighter-topped client mobile capture would avoid that.

## August 28: two inbound leads in 24 hours, one ChatGPT-attributed

- Don Douglas Hilario, CFP, founder of Hilpan Moxie Wealth Management LLC (hilpanmoxiewm.com), SEC-registered RIA serving Googlers, Orange County phone. Qualified-project-inquiry form 8/27 7:01pm CT: premium-redesign, $2,250-5,000 band, 30-day timing, blog migration with SEO preserved, ongoing support. How-did-you-hear field: "chatgpt" (self-reported; Ai Source auto-fields blank). Path /pricing -> /start-a-project. Call booked Mon Aug 31 10am CT (Calendly + Teams accepted). Reference site he likes: allstreetwealth.com. First ChatGPT-attributed inbound since the case-study/verify push shipped.
- Andrew F Stout, Stout Realty Group (stoutrealtygroup.com, Boston-area phone). Google organic -> /real-estate vertical page -> /free-review, tmn-meta-intake form 8/28 7:55am CT, $2,250-5,000 band. Trevor replied 8:06am offering the free homepage concept and a 15-minute call today/Mon/Tue. Vertical-page + free-review funnel converting from traditional search.
- Clutch replied 8/28: Trevor IS the profile owner; founding year, min project size, portfolio labels, and delivery language are self-serve edits in the Vendor Dashboard. The correction is now Trevor-side, not publisher-pending.
- Mel Brown declined the Fri 8/28 11am meeting; no rebook yet.

## August 29: /ai-visibility search-engine readiness pass, and a flagged claim

Codex shipped /ai-visibility (commits 5b69c7c, 439c329): a $200/mo AI Visibility Care add-on page, live, in sitemap/robots/llms.txt, linked from pricing.html and care.html. Verified 3 of its technical claims against primary sources: Google Search Central confirms no AI-specific schema type or special file exists for its AI features (matches the page's claim); Bing Webmaster Tools' AI Performance report is real, launched Feb 9 2026, covers Copilot/Bing AI summaries/select partners, not ChatGPT/Perplexity/Google (matches the page's hedged description); ChatGPT Search does append utm_source=chatgpt.com to referral links (matches the page's claim). Fixed 4 lines of trailing whitespace plus a trailing blank line at EOF (commit pushed).

Search-engine distribution completed live in each console (Trevor's own logged-in sessions): IndexNow accepted the URL (HTTP 200). Bing Webmaster Tools: tmncreative.com already verified there alongside several client sites; submitted the URL directly via URL Inspection > Request indexing (success); resubmitted sitemap.xml, which had gone stale (last crawled Aug 27, pre-dating this page) and is now reprocessing. Google Search Console: tmncreative.com verified; URL Inspection showed the page fully unknown to Google, submitted via Request Indexing and it was added to the priority crawl queue; the sitemap was already fresh (Google re-read it same-day, 77 discovered pages). Noted in passing: /hvac impressions up 1,136% recently per GSC's own recommendation panel, plausibly reflecting the Aug 28 work-grid release.

FLAGGED, not fixed: the page's line "On a recent engagement a compliance consultant returned eleven items and every one went in verbatim, with the required disclosures placed where he asked for them" traces almost exactly to the live Don Hilario (Hilpan Moxie) thread - Spencer Lee's actual list totals 11 items (5 copy notes + 2 disclosures + 4 cleanup items) when counted. Two problems: (1) Trevor's own reply to Don says only the 3 disclosure blocks went in "exactly as written, with no edits" - the other 8 were directional notes Trevor rewrote himself, not verbatim insertions, so "every one went in verbatim" overstates it; (2) Don is still an unclosed prospect (first call Monday 9/1, Trevor sent a 3rd site revision hours ago that Don has not yet responded to) - describing this as "a recent engagement" characterizes a live, still-shifting negotiation as a finished one. Left unedited pending Trevor's call, since this touches both copy accuracy and discretion about a sensitive live deal, not just a mechanical fix. The "prospect found this studio through ChatGPT" paragraph earlier on the same page is also Don (verified accurate, appropriately anonymized, no risk).

## August 29 afternoon: 2 new add-on products shipped through a Codex-Claude review cycle

Trevor picked Compliance Site Care and Content Care from the add-on menu. Delivered live (commits 889dd78 Codex / 53b8811 Claude / 72b46a4 joint review fixes, all verified in production):

- /compliance-care, $250/mo: dated monthly page archives, plain-English change log, ADV Part 2 / Form CRS / privacy notice link checks, up to 2 studio hours, $750 baseline for non-TMN sites. Anchored to a verified verbatim SEC quote from the Marketing Rule small entity compliance guide (checked against the live sec.gov page). Explicitly not legal or compliance advice, no examination outcome promised.
- /content-care, $400/mo: up to 2 researched, client-approved articles as real pages with Article schema, sitemap entries, and same-day IndexNow submission. Every claim promises submission, never indexing or rankings (Trevor's mid-build correction, applied everywhere). Explicitly rejects autopilot volume, citing Google's scaled-content policy accurately.
- Both pages match Codex's new ai-visibility editorial composition (headshot hero, plan block, honest panes, skip links). Wired into pricing (Care+AI 2x2 grid + OfferCatalog with all 9 offers), tailored intake (?service= map with per-service copy and success-page confirmation), care page, footers, sitemap, llms.txt.
- Process: Codex built the ai-visibility redesign and handed off; Claude built the 2 pages and integration; Codex ran a 9-finding cross-review; both sides fixed their halves; Claude verified Codex's SEC citation verbatim against the live source and Codex verified layouts at 1440/390/320. audits/content-care-pipeline-spec-2026-08-29.md holds the Soro-to-static delivery pipeline, grounded in the LumiClinics invisible-blog finding (their Soro embed renders no article HTML and no article URLs; draft to Kimberly and Christian staged in Gmail, unsent).
- Distribution: IndexNow 200 for the 2 new plus 4 changed URLs; Bing URL Submission success for both new pages; GSC Request Indexing queued for both.
- Add-on ladder now live: Site Care $50 -> AI Visibility $200 -> Compliance $250 -> Content $400, all month-to-month on top of Site Care, all with $750 baselines for non-TMN sites, all with what-is-never-promised panes.

## August 29 evening: AI Visibility Care renamed to AI Search Optimization (joint Claude-Codex strategy)

Trigger: a buyer told Trevor the name "AI Visibility Care" was not obvious until he read the page. Decision inputs: ChatGPT's naming recommendation (primary "AI Search Optimization", keep /ai-visibility URL, keep old name as alternate) plus Codex's independent read (directional keyword volumes favor "AI Search Optimization" and its variants over "AI SEO" whose 6,600 volume is polluted by AI-powered-SEO-tool intent; GEO opaque; "Get Found in ChatGPT" good campaign language but too narrow for a product name). Claude's owner-question thesis adopted: highest-intent queries are literal owner phrasings, not terms of art.

Shipped live (commit 4ded146, IndexNow 200 for 8 URLs): primary name AI Search Optimization everywhere human-facing (hero eyebrow with name and price on all 3 add-on pages, plan blocks, pricing kicker/panel/OfferCatalog, intake and success copy, nav/footer label "AI Search", CTAs "Ask about AI search"); supporting label "Industry labels vary... AI SEO, GEO, AEO, or AIO"; visible continuity line "TMN previously called it AI Visibility Care" (keep roughly 60-90 days); old name preserved in Service alternateName, keywords, llms.txt. URL, canonical, and #service id unchanged for signal continuity.

New 6-question owner FAQ on /ai-visibility in literal buyer phrasings (what is it / how do I get ChatGPT to recommend my business / why don't I show up / does ChatGPT read my site / how do you optimize / can you guarantee, answered No-first), claim-disciplined per primary sources, with matching FAQPage schema carried for semantics only - Google removed FAQ rich results in 2026 and no engine documents preferential FAQPage treatment, so no benefit is forecast from the markup itself. OAI-SearchBot claim tightened to OpenAI's own wording (eligible to appear in ChatGPT search answers, not "cited"). Proof block now cites only documented evidence: one forwarded ChatGPT conversation and one form self-attribution ("chatgpt" typed into how-did-you-hear). Contextual links added: care page body, financial-services AI FAQ answer, credibility page AI FAQ answer, plus reciprocal links from the FAQ to /verify and 3 vertical pages. Service schema now points provider at the canonical #org entity with WebPage mainEntity wired, on all 3 add-on pages.

Deferred by design: a standalone owner-question guide page waits for GSC informational-query impressions to justify it. Trevor-side when next in the dashboards: add the service to the Clutch and DesignRush service descriptions, since audit evidence shows assistants corroborate TMN through those profiles.

## August 29: attribution audit of every captured TMN inquiry — ChatGPT is 4 of 5, and the tracking undercounts it

Pulled the raw Netlify form submissions and compared each lead's machine-captured attribution against its self-reported source:

| Lead | Date | Machine "Lead Source" | Ai Source field | First landing | Self-reported |
| --- | --- | --- | --- | --- | --- |
| Josh Henkin, DVRT Fitness ($5-10K) | Aug 18 | www.google.com | **blank** | `/` (homepage) | **chatgpt** |
| Don Hilario, Hilpan Moxie | Aug 27 | Direct / unknown | **blank** | `/pricing` | **chatgpt** |
| Andrew Stout, Stout Realty | Aug 28 | www.google.com | blank | `/real-estate` | google-search |
| Jon Parks, Parks Wealth | Aug | n/a (email intro) | n/a | n/a | **forwarded the actual ChatGPT transcript** |
| Mel Brown | Aug | Google brand search | blank | n/a | chatgpt / other AI |

**The automated AI detection captured zero of them.** Every single ChatGPT-sourced lead has a blank `Ai Source` and `First Ai Source`. The only reason any of this is known is the optional "How did you hear about TMN?" dropdown. Two distinct blind spots cause it:

1. **Brand search laundering.** Josh Henkin heard about TMN through ChatGPT, then Googled "TMN Creative" and landed on the homepage. Analytics recorded him as Google organic. Without his self-report he would be filed as a Google lead. Mel Brown followed the same path.
2. **Referrer stripping.** Don Hilario came in as "Direct / unknown" because the ChatGPT app and mobile clients strip the referrer. No `utm_source=chatgpt.com` ever arrived.

So the honest read is not "some leads are from ChatGPT." It is: **4 of 5 captured inquiries trace to ChatGPT, and the analytics stack attributes exactly 0 of them to it.** Trevor's instinct is correct and the dashboards are wrong.

The one genuine exception is Andrew Stout, and he is instructive rather than contradictory: he landed on `/real-estate`, a vertical page, from a non-brand Google query, and selected google-search. That is the vertical-page SEO strategy working on its own merits, which is worth protecting as a second channel rather than treating everything as AI.

**Consequences:**
- Never judge the AI channel by referrer data or by Fathom/GA source reports. They will always show Google and Direct. The self-report dropdown is the only working instrument, which makes keeping it on every form non-negotiable.
- This independently supports the Aug 29 decision not to buy Clutch directory placement: zero captured leads came from a Fort Worth local directory query, while the vertical and national AI path produced nearly all of them.
- The Sept 3 ChatGPT re-test is the right measurement for the channel that is actually producing revenue.

## August 29: the spend plan — recurring revenue from big spenders

Trevor authorized spending money on whatever is optimal. Written against tonight's verified facts: ChatGPT produces 4 of 5 captured leads, the Clutch FW directory is pay-gated and off-thesis, the 6-prompt vertical baseline sits at 0/6, and ChatGPT's stated reason for every winner in that baseline was a named vertical client with a measurable outcome.

### Who the big spender actually is (from the lead data, not theory)

Established firms in regulated or credentialed verticals: RIAs and advisor practices (Jon Parks, Don Hilario), psychiatry/behavioral health (LumiClinics), multi-location clinic groups (Training Wheels, 3 locations), construction firms facing vendor qualification (Synergized). Josh Henkin self-reported a $5-10K planned investment. The defining trait: **these buyers already pay monthly retainers as a habit** — advisors pay compliance consultants, LumiClinics pays Soro, Training Wheels paid SE Ranking until it lapsed. The add-on stack ($200 AI Search + $250 Compliance + $400 Content Care on $50 care, max $900/mo) sells into an existing spending habit rather than creating a new one.

### The plan, in order of expected dollars

**1. Sell the stack to the current roster first ($0 spend, largest near-term recurring).**
- LumiClinics → Content Care $400/mo. The invisible-blog finding is documented, the pitch draft is staged in Gmail. Their journal is invisible to crawlers today; they already pay for content.
- Don Hilario (call Mon 8/31 10am) → include the stack in the proposal: $50 care + $200 AI Search + $250 Compliance = $500/mo. He is an RIA who found TMN through ChatGPT; both products are literally his profile.
- Jon Parks → Compliance Site Care $250/mo at site launch. The product page was built from his engagement's 11-item compliance pass.
- Training Wheels → AI Search Optimization $200/mo. Their own SE Ranking subscription expired: proven appetite for this spend category, current vendor gap, and the roadmap already calls for location pages + AI visibility.
- DVRT (if closed) → Content Care later via Soro's native WordPress connector.

Realistic 60-day target if 4 of 5 land: ~$1,350/mo (~$16K/yr run rate) with no ad spend.

**2. The one spend to make now: SE Ranking renewal, repointed (~$103-175/mo class).**
Retail 2026 pricing: Core plan ~$103.20/mo annual; the AI Search add-on ~$71.20/mo (200 prompts); SE Visible standalone $189/mo. Confirm the real number with Phil Gagnon since the current access was his extension and lapses ~now. Justification is triple:
- It is the **targeting map**: repoint the AI tracker from the 15 Fort Worth local prompts (a market producing zero leads) to the 6 vertical baseline prompts + the 2 Google AI Mode prompts. The resulting source table tells us which surfaces ChatGPT actually cites for the queries that pay, i.e., where placement money should go.
- It is the **delivery engine for the $200/mo product**: every AI Search Optimization subscriber needs a monthly evidence report. 3 subscribers = $600/mo revenue against ~$175/mo tool cost; margin holds and improves with each subscriber. This reframes the tool from analytics expense to COGS on a recurring product.
- It is the **sales asset**: once the repointed tracker has 2+ weeks of data, TMN's own movement graph goes on /ai-visibility as dogfooded proof.
Note: an `se-ranking` MCP connector is already configured in Claude but unauthorized. Authorizing it lets the monthly subscriber reports be automated.

**3. The free work that outranks any spend: metrics into case studies.**
ChatGPT's cited basis for every baseline winner was numbers (WISE +208% traffic; Cardinal's BCBA recruiting metrics; "the VitaLuxx work makes them the most directly analogous portfolio match"). TMN has named clients in the right verticals and zero published metrics. Christi Horton's Clutch review already states "a significant increase in website traffic and leads" — third-party-verified and quotable today with attribution. Fathom runs on client sites with per-client IDs: pull before/afters for SunCraft, LumiClinics, Training Wheels, get written client permission, publish the numbers into the 3 case studies. Training Wheels doubles as the multi-location clinic-group story, the profile behind baseline test #5's winners.

**4. The reserved spend: $500-1,500/yr for placement, deployed only where the map says (~Sept 10-15).**
After the repointed tracker produces a vertical source table and the Sept 3 re-test lands, buy presence on whichever surface is actually cited for vertical prompts. Candidates that may earn it: Clutch national or vertical service pages, DesignRush (already a 100% mention rate when cited; check its paid model), Expertise.com (listing request already queued). The Fort Worth Clutch $499 stays dead unless FW local ever becomes a target market.

**5. Conditional COGS, never speculative:** the Soro per-site subscription is incurred only when a Content Care client signs, inside the client's $400/mo (margin gate ~$50-150/site/mo per the pipeline spec).

### Explicitly not spending on
- Clutch Fort Worth Verified ($499): wrong market, documented Aug 29.
- Meta or Google ads: zero captured leads from paid; the working channel is free and compounding.
- Review incentives of any kind: violates platform rules and /verify's own language.

### Checkpoints
- Mon 8/31: Don call carries the first live stack proposal.
- Sept 3: 6-prompt ChatGPT re-test vs the 0/6 baseline.
- ~Sept 10: vertical source table read; placement reserve deployed or held on evidence.
- Oct 1: recurring run-rate review against the ~$1,350/mo roster target.

### August 29 correction from Trevor: Jon and Training Wheels come off the upsell list

Two facts that re-aim the plan:

1. **Training Wheels already pays $1,500/mo** (corrected from $1,600 same day) — TMN's largest recurring account, a full-service retainer (monthly management reports, audits, roadmap execution). No upsell headroom, and none needed. This is the template, not a target: 1 Training Wheels ($18K/yr) is worth more than the entire roster add-on model I sketched (~$16K/yr). "More recurring revenue from big spenders" means cloning this account shape — multi-location healthcare groups on full-service retainers — not stacking $200 add-ons on $50 clients.
2. **Jon Parks is at $50/mo and is not an upsell candidate.** The lesson generalizes: **the attach moment is the proposal, not the retainer.** Once a client has bought $50/mo, going back for $250 more is friction against goodwill. From now on the add-on stack is priced into every new proposal as a default line the client can strike, never retro-pitched. Jon's high-value ask at launch is a Clutch review, worth more than $250/mo given the corroboration finding.

What survives unchanged:
- **Don, Monday**: the stack in the initial proposal (a proposal line, not an upsell) — $450-500/mo.
- **LumiClinics**: the $400/mo Content Care approach stands because it is not a re-sell — it is a new, documented defect discovered after purchase (their journal is invisible to crawlers). Coming back with a finding is service; coming back with a price sheet is an upsell.
- The SE Ranking renewal gains a 4th justification: Training Wheels' own September management report needs rank/keyword data, and their trial expired 8/6 with ~80K of 100K units unused. The tool now serves the $1,500/mo account's deliverable, the $200/mo product's delivery, the targeting map, and dogfood proof.

The clone path for the next $1,500/mo account, using what already exists:
- Training Wheels case study **with numbers, pending their permission**: 62 real leads Jul 1-Aug 7, 860 uniques, 60 five-star reviews at 92%, WordPress replaced Jul 1 — all server-verified in the Aug management report. This is exactly the evidence class ChatGPT cited for every winner on baseline prompt #5 (multi-location ABA group), where Cardinal won partly on recruiting metrics — and TW's 28 careers applications ARE recruiting metrics.
- The multi-location clinic-group story (location pages roadmap) becomes a vertical page once the case study carries numbers.
- Revised 60-day recurring target: Don ~$500 + LumiClinics $400 + DVRT care attach at launch + stack-by-default on every new proposal, with the real prize being 1 new multi-location group at the TW retainer shape ($1,500/mo).

### August 29: SE Ranking purchase spec and usage plan (Trevor approved the spend)

**The package: Core Plan, annual billing, no add-ons.** Verified against seranking.com/pricing.html on Aug 29 (not review-site summaries, which wrongly claim an AI add-on is required):

- Core annual: $103.20/mo ($1,238.40/yr); monthly $129.
- Includes: 10 projects, 2,000 keywords tracked daily, **AI visibility tracking with 100 prompts daily**, 25K API credits/mo, **MCP access**.
- The AI Search add-on ($71.20/mo, SE Visible dashboard, 200-1,000 prompts) is scale TMN does not need: current requirement is ~23 prompts (15 FW continuity + 6 vertical + 2 AI Mode) against a 100/day allowance.
- Agency Pack ($69/mo, white-label + extra projects): skip until subscriber count approaches the 10-project ceiling. TW's report pipeline is already custom-built and better than white-label.

**Why Core clears the ROI bar 4 ways:**
1. Training Wheels ($1,500/mo) September management report requires the rank/keyword data. The tool costs 7% of that one account's monthly retainer.
2. It is the delivery engine for AI Search Optimization at $200/mo: 10 projects = TMN + TW + 8 subscriber slots. 8 subscribers = $1,600/mo against $103 COGS. Break-even is 1 subscriber for ~6 months.
3. The repointed AI tracker produces the vertical source table that gates the $500-1,500 placement reserve (~Sept 10 read).
4. Dogfood: TMN's own tracker movement goes on /ai-visibility as sales proof once 2+ weeks of data exist.

**Purchase path:** Phil Gagnon's Aug 17 email grants Core access through Aug 31 and explicitly offers annual-subscription discounts. Reply draft staged UNSENT (draft r-7198254205111006414, thread "Trevor, your time just ran out"): asks for his best annual rate on the existing account, preserving projects and history. Fallback if Phil is silent by Monday morning: self-serve annual checkout inside the current account at $103.20/mo, which preserves history either way. Claude never enters payment; Trevor checks out.

**Day-1 setup (mechanical once access is live):**
1. AI Results Tracker: ADD the 6 vertical baseline prompts (verbatim from audits/chatgpt-baseline-2026-08-20.md) + the 2 Google AI Mode prompts. Keep the 15 FW prompts for continuity; 23 of 100 daily used.
2. Training Wheels project: revive keyword tracking (South Austin, Pflugerville, Dripping Springs, in-home ABA, brand terms), backlinks watch. Feeds the September report against the August baseline table.
3. TMN project: confirm the keyword set covers the 12 industry pages and 8 vertical pages.
4. Define the subscriber template (this IS the $200/mo deliverable spec): ~10 prompts + ~50 keywords + monthly evidence report per client. Don becomes project #3 if Monday's proposal lands.
5. Trevor authorizes the se-ranking MCP connector in claude.ai connector settings so weekly pulls and monthly reports are automated.
6. Cadence: Monday tracker pull appended to this audit; source-table read ~Sept 10 gates placement spend; client reports first week of each month.

### August 29: SE Ranking MCP connected — day-1 setup executed

Trevor authorized the connector; setup ran the same hour via API. Account verified: trevor@tmncreative.com, subscription active through Aug 31 21:08 (Phil's comp), 16,560 of 25,000 API units left. 4 projects exist: tmncreative.com (70 kw), Training Wheels ABA (40 kw), Truck Stop Trader (10 kw), Eagle Nest PG (84 kw) — so TW never needed creating, and 6 subscriber slots remain on Core's 10.

Done:
- **Prompt group "Vertical buyer prompts" (id 58315) created** on the tmncreative.com project and loaded with the 7 vertical prompts on BOTH the ChatGPT engine (103459) and the Google AI Mode engine (103465) — 14 prompt-engine pairs. The 15 Fort Worth prompts stay for continuity; ~29 of the 100-prompt daily allowance now in use. The project already had all 5 engines configured (ChatGPT, AI Overviews, AI Mode, Perplexity, Gemini).
- **One documented deviation from verbatim:** baseline prompt #1 (the WealthReach reconstruction) exceeds the tracker's 255-char prompt limit; the tracked version is trimmed ("I'm a financial advisor launching a practice. One vendor builds advisor websites for $500/mo...") and drops the WealthReach name. The Sept 3 MANUAL re-test still uses the full verbatim baseline; the tracker version is directional. Prompts 2-6 and the boutique-HNW AI Mode prompt are verbatim.
- **Training Wheels: 4 recruiting keywords added** (rbt jobs austin, bcba jobs austin, aba therapist jobs austin, rbt jobs pflugerville), each targeted at /careers. The roadmap's location/Medicaid set (aba therapy south austin / pflugerville / dripping springs, in-home, etc.) was already loaded on 2 engines but shows first_check_date null — checks stalled when the trial lapsed and resume once billing is live.

Still gated on the purchase (draft to Phil staged; self-serve fallback Monday): position checks resuming account-wide, and the first vertical-prompt tracker run. Once the first AI check completes, pull PROJECT_getPromptsRankings + listAirtSourceDomains for group 58315 — that's the vertical source table that gates the placement reserve.

### August 29: keyword-demand scan through the SE Ranking connector (comped units, expiring Aug 31)

Question inventory: vertical question seeds ("financial advisor website," "roofing website," "medical practice website") return ZERO question keywords — the buyer questions live in AI chats, not Google's question data, consistent with the attribution audit. But the generic "website cost" cluster carries 125 question keywords at 320-590 searches/mo each ("how much does it cost to have a website" 590/mo, "how much does a website cost per month" 480/mo), most showing the SGE/AI Overview SERP feature — i.e., this cluster feeds AI answers.

Vertical commercial terms (US monthly volume / difficulty):
- law firm website design: 1,300 / 65, $35 CPC — biggest vertical by far; TMN's only legal proof is 2 noindexed spec sites (JD Milks, Ramsay). The $35 CPC also prices what a law-firm CLIENT is worth.
- therapy website design 590/22 + website design for therapists 590/27 — LOW difficulty, real volume, and TMN holds named proof (Care to Speak, LumiClinics). Strongest content gap.
- medical website design 590/23 and healthcare website design 390/29, both spiking in recent months.
- roofing website design 320/**8** and med spa website design 260/**6** — near-zero difficulty where TMN already has proof (SunCraft; Web Tonic med spa #21). Existing pages should be tuned to these exact phrases.
- financial advisor website design 90/18, ria website design 20 — tiny Google volume for TMN's best AI vertical, confirming again that AI demand is invisible in keyword tools.
- Vertical cost questions ("how much does a financial advisor website cost") = no measured volume → build ONE definitive general pricing guide with real numbers plus per-vertical cost sections on existing pages, not thin standalone pages.

Priority actions this creates: (1) "website design for therapists" page + content (1,180/mo combined, winnable difficulty, named clients in hand); (2) a real-numbers "how much does a website cost" guide targeting the 125-question cluster (TMN publishes actual prices, the exact trait ChatGPT rewarded in the baseline); (3) on-page tuning of roofing + med spa pages to the diff-6-8 exact phrases; (4) revenue note: converting either legal spec (JD Milks or Ramsay) into a paying named client unlocks the 1,300/mo legal vertical.

### August 29: shipped, plus the next tier the data supports

**Shipped and live (deploy f613ec0, IndexNow 200 on 5 URLs):**
- `/websites-for-therapists` — targets therapy website design (590/22) + website design for therapists (590/27), 1,180/mo combined at winnable difficulty. LumiClinics is the anchor proof with the case-study link and the public credit on lumiclinics.org; Care to Speak is the adjacent-discipline second reference. Explicitly scoped to solo and small group private practice so it does NOT cannibalize /websites-for-mental-health-clinics, which keeps multi-provider clinics; the two now cross-link.
- `/how-much-does-a-website-cost` — targets the 125-question cost cluster (top questions 480-590/mo, most carrying the AI Overview SERP feature). Publishes real ranges for all 4 routes plus the recurring monthly costs, and states TMN's own $2,250/$3,750/$5,000+ openly. Published prices were the trait ChatGPT rewarded in every baseline test.
- Both added to sitemap (83 URLs), llms.txt, and cross-linked site-wide: therapist link on 32 pages, cost-guide link on 80.

**Client footer credits, all live:** Promised Land Renovations (6 pages, was missing entirely) and Carol Cawley (6 pages). Carol's footer already read "Site by TMN Creative" as **plain text with no link**, so it passed zero link value; it is now a real anchor. Carol has no git remote and deploys by CLI to site fd7ee2b6; her repo also held uncommitted content corrections from another session that were already live, verified before deploying so nothing half-finished shipped.

**QC Atlantic is a different problem and was NOT fixed.** qcatlantic.com is a client-rendered React SPA: raw HTML is a 3KB shell with 1 character of body text. The TMN credit exists in `src/App.jsx` but never reaches a crawler, and neither does any of QCA's own content. This is the LumiClinics invisible-blog defect at whole-site scale. It needs prerendering, not a footer edit. Two consequences: TMN gets no backlink value from that build, and QCA itself is invisible to AI search, which is a real finding to bring them (service call, not an upsell, same pattern as LumiClinics).

**Next tier the keyword data supports, in priority order:**
1. **therapist website examples — 260/mo, difficulty 12.** A showcase page built around LumiClinics and Care to Speak. Buyers at this query are pre-purchase and comparing; TMN has the named builds to fill it. Cheapest remaining win.
2. **best website builder for therapists — 140/mo, difficulty 11, $8.54 CPC.** High commercial value. An honest comparison (Squarespace/Wix/Psychology Today vs custom) that recommends the builder when it is genuinely right earns the citation; the same format Bethany Works and Web Tonic already get cited for.
3. **website redesign cost — 260/mo, difficulty 16** and **how much does a wordpress website cost — 140/mo, difficulty 15.** Both are natural sub-sections or siblings of the new cost guide rather than standalone thin pages.
4. **Law firm websites remain the largest single vertical: 1,300/mo at $35 CPC.** TMN's only legal proof is 2 noindexed spec sites. Converting JD Milks or Ramsay into a paying named client is what unlocks it.
5. **Bing Places** — setup sheet with canonical NAP at `audits/bing-places-setup-2026-08-29.md`. Blocked at the sign-in wall; Trevor-only. Matters because ChatGPT browses on Bing's index.

### August 29 (later): Ramsay converted, and his launched site was blocked from search

Trevor reported Kris Ramsay converted, paid, and launched. Verification found a live problem worth recording as a process lesson.

**ramsayinjurylaw.com was live, credited TMN, and was invisible to every search engine.** The build's `PREVIEW = True` launch toggle in `build_pages.py` had never been flipped, so the production site served `<meta name="robots" content="noindex, nofollow">` on all 18 pages plus a `robots.txt` reading `Disallow: /`. A paying client's brand-new firm site could not be indexed or found, and TMN's backlink from it counted for nothing.

Fixed the same session: flipped `PREVIEW = False`, rebuilt (102 files), deployed to Netlify site 97687072 per DELIVERY.md, and verified live: robots.txt now `Allow: /` with the sitemap declared, 0 noindex tags on the homepage, 16 URLs in the sitemap.

**Backlink verified at Trevor's request:** `<a href="https://tmncreative.com/">TMN Creative</a>` on the firm's own domain, **no nofollow**, present on **18 of 18** pages. Now that indexing is open, it is a real followable backlink rather than a dead one.

**Process lesson worth keeping:** any build that ships behind a preview flag needs the flag flip verified against the LIVE production URL at launch, not assumed from the deploy succeeding. The same pattern applies to JD Milks and any future spec-to-client conversion. Check `curl <domain>/robots.txt` and grep the live HTML for noindex as the last launch step.

**TMN payoff, shipped:** `/websites-for-law-firms` now leads its proof section with The Ramsay Law Firm, P.A. (Fort Lauderdale personal injury), replacing the SCL Metal Works tile, which was iron doors on a legal page. Added a full-page screenshot tile linking to the live firm site, rewrote the proof headline to "Built by us. Including a live law firm.", and added a "Have you actually built a law firm website?" FAQ with a matching FAQPage schema entry. This is the unlock for the largest vertical in the keyword scan: **law firm website design, 1,300/mo at a $35 CPC**, where TMN previously had only 2 noindexed spec sites and now has named, checkable, live proof.

Open follow-ups: Kris's domain has no Google Search Console or Bing Webmaster property yet, so discovery relies on the sitemap alone (worth setting up, Trevor/Kris side). The law firms page also carries 3 pre-existing em dashes in body copy that violate the marketing voice rules; a site-wide sweep is a separate decision, none were introduced by this change.

### August 29 (later still): Ramsay case study shipped, and a missing client backlink found

**`/ramsay-law-firm-website-design` is live.** TMN's first named legal case study, which is what the 1,300/mo, $35 CPC law firm vertical was gated on. Built from the project's own `FACTS.md`, so every claim traces to a sourced line: Florida Bar No. 1002563 in good standing, the 15-rule "Rulebook" with statutory citations (14-day PIP window under Fla. Stat. 627.736(1), the 2-year negligence deadline under 95.11 cut from 4 in 2023), 20+ sourced statements of Florida law, and Bar advertising compliance designed in under Rules 4-7.12(a) and 4-7.14.

**Deliberately omitted: the client's "$50 million settled" figure.** Kris confirmed it by email on Aug 26 and instructed his own site to publish it with an outcome disclaimer. That is his claim to make on his own domain under his own Bar obligations. TMN republishing a client's career settlement total on a marketing case study would inherit the disclaimer requirement and add nothing to the argument that TMN builds good sites. The case study also states plainly that the site launched in August 2026 and has no performance history to report, rather than implying results.

The law firms page tile now links the case study instead of the bare client domain, and the page is in the sitemap (84 URLs), llms.txt, and IndexNow.

**Open finding: Care to Speak has no TMN credit.** caretospeak.com is live and returns 200 but contains zero references to tmncreative.com. TMN publishes a Care to Speak case study and now cites it as proof on the new therapist page, yet gets no backlink or public corroboration from the client's own domain, unlike SunCraft, LumiClinics, Training Wheels, Ramsay, Promised Land, and Carol Cawley. Worth fixing: locate the current repo (memory says the build was pending Siobhain's review before DNS cutover, so the live site may be a later or client-managed deployment), add the standard footer credit, and redeploy. If the client now controls the site, it becomes a short ask rather than a code change.

### August 29: CPC-first keyword scan — where the expensive clients actually are

Ran CPC as a proxy for client value across 50 vertical terms before the comped SE Ranking units expire Aug 31. CPC is what competitors pay per click, so it prices the client, not the traffic. The result reorders TMN's priorities.

**Legal is worth 4 to 8 times every other vertical TMN serves:**

| Keyword | Volume/mo | CPC | Difficulty |
| --- | --- | --- | --- |
| **law firm web design company** | 140 | **$49.37** | **8** |
| law firm website design | 1,300 | $35.00 | 65 |
| web design for law firms | 50 | $35.00 | 29 |
| law firm seo company | 480 | $34.76 | 23 |
| dental web design company | 320 | $30.00 | 37 |
| attorney website design | 140 | $28.71 | 41 |
| veterinary website design | 170 | $28.61 | 9 |
| chiropractor website design | 390 | $15.64 | 8 |
| med spa website design | 260 | $12.00 | 6 |
| cpa website design | 140 | $11.73 | 18 |

**The standout: "law firm web design company" at $49.37 CPC and difficulty 8.** Highest CPC in the entire set and near-zero competition, which almost never happens together. The page used that exact phrase **zero times** while using the difficulty-65 phrase "law firm website design" 11 times. Fixed the same session: the phrase now appears in the title, the proof-section h2, a new FAQ, and FAQPage schema. This is the cheapest high-value ranking available to TMN right now, and Ramsay supplies the proof that makes it credible.

**Also worth building, in order:**
1. **"best law firm websites" — 590/mo, difficulty 29.** A showcase/inspiration query, which is the exact format AI assistants cite (it is why Web Tonic's lists get cited). Firm owners search this while deciding whom to hire. Ramsay is the worked example.
2. **"law firm seo company" — 480/mo, $34.76.** Adjacent to the AI Search Optimization add-on but do NOT chase it until TMN can honestly describe ongoing legal SEO work; claiming it now would outrun the evidence.
3. **Dental at $30 CPC and 320/mo** is the best-paying vertical where TMN has a page but no named client. Converting one dental client unlocks it the way Ramsay unlocked legal.
4. **Veterinary ($28.61, difficulty 9) and chiropractic ($15.64, difficulty 8)** are high-CPC, near-zero-competition verticals with no TMN page and no proof. Worth building only behind a real client, on the Ramsay pattern: proof first, page second.

12 of these money terms were added to the SE Ranking project (site 12654824) with target URLs so movement is measurable from here.

### August 29: second CPC pass — the buying-intent vein, and a 40x demand trend

**Best find of the session: "law firm website design cost" at $27.73 CPC and difficulty 5.** Near-zero competition on a query with explicit buying intent, and TMN's actual differentiator is the answer to it, since almost no legal web vendor publishes prices. Paired with "how much does a law firm website cost" at difficulty 6.

Shipped `/law-firm-website-design-cost` the same session: real ranges for all 4 routes (template legal platform, freelancer, independent studio, legal marketing agency), the legal-specific price drivers that separate a $3,000 quote from a $30,000 one (bar advertising compliance, practice-area depth, who writes the legal copy, results disclaimers, intake integrations, new-firm versus established), TMN's published tiers, and 6 FAQs with matching FAQPage schema. Cross-linked from the law firms page and the general cost guide, and it uses Ramsay as the worked example for the new-firm case.

Other terms from this pass:

| Keyword | Volume/mo | CPC | Difficulty | Note |
| --- | --- | --- | --- | --- |
| small law firm website design | 170 | **$39.85** | 29 | second-highest CPC found |
| law firm marketing agency | 260 | $29.88 | 41 | agency-tier query |
| dental marketing agency | 150 | $20.14 | 33 | |
| financial advisor marketing agency | 70 | $16.95 | 19 | winnable, TMN has advisor pages |
| medical spa marketing agency | 320 | $15.00 | 18 | winnable |
| **healthcare marketing agency** | **4,400** | $11.28 | 52 | see trend note |
| best websites for law firms | 590 | $7.00 | 31 | showcase format |
| law firm website examples | 70 | $6.94 | 20 | |

**The trend worth watching: "healthcare marketing agency" went from 110 to 4,400 searches per month over 12 months.** The monthly sparkline reads 110, 90, 205, 320, 540, 590, 360, 1800, 1500, 2400, 2400, 4400. That is a 40x rise and still climbing, the steepest demand curve in anything scanned. Difficulty 52 puts it out of reach today, and TMN is a web studio rather than a full marketing agency, so the honest play is not to chase the head term but to keep building the healthcare cluster underneath it while demand rises. Re-check this term monthly.

7 more terms added to SE Ranking tracking, bringing the money-term set to 19 with target URLs attached.

### August 29: the compliance vein — a difficulty-0 keyword with real commercial value

Long-tail mining on "law firm website" returned 147 terms at $10+ CPC and difficulty under 30, and surfaced a theme worth chasing on its own: compliance. Testing it produced the least-contested valuable keyword found all session.

| Keyword | Volume/mo | CPC | Difficulty |
| --- | --- | --- | --- |
| **hipaa compliant website** | 260 | $7.34 | **0** |
| hipaa compliant website design | 70 | $11.15 | **6** |
| website accessibility audit | 390 | $8.43 | 52 |
| website accessibility remediation | 50 | $7.98 | **6** |
| ada compliant website design | 480 | $4.39 | 31 |
| is my website ada compliant | 210 | $4.25 | 43 |
| ada website lawsuit | 210 | $3.70 | 23 |
| ada compliant website | 1,300 | $2.27 | 73 |

**"hipaa compliant website" is difficulty 0 with 260 searches a month, and demand jumped roughly 26x in-year** (sparkline 20, 20, 15, 10, 20, 10, 10, 480, 390, 320, 320, 260). Difficulty 0 on a commercially valuable term is close to unheard of, and TMN has 4 healthcare builds plus genuine practice in this area, so the page is honest rather than opportunistic.

Shipped `/hipaa-compliant-website-design`, and the angle matters: **the page leads by correcting the premise.** No website is "HIPAA compliant" by itself, because compliance belongs to the covered entity. Anyone selling a compliance badge is selling a badge. That correction is the most useful thing a practice owner can read, and it is the kind of restraint ChatGPT rewarded in every baseline test where overclaims got discounted.

The page covers what the rule actually governs (entities not files, PHI as the line, business associate agreements, tracking-technology scrutiny), how TMN builds around it (no PHI collected, intake routed to the practice's own platform, privacy-friendly analytics by default, clinical content published only after client approval), names LumiClinics, Training Wheels, and Smitha Reddy as credited proof, and carries 6 FAQs with schema. It states plainly that it is not legal advice and that the privacy officer and counsel govern.

**Also note "ada compliant website": 1,300/mo and the steepest curve after healthcare marketing agency** (160 to 4,400 in 12 months). Difficulty 73 puts the head term out of reach, but "website accessibility remediation" at difficulty 6 and "ada website lawsuit" at 23 are reachable entries into the same demand if TMN wants the accessibility angle later.

Money-term tracking set now 24 keywords with target URLs.

### August 29: conversion pass, full indexing sweep, and the Bing AI citation baseline

**A negative finding worth recording so nobody re-runs it:** the pain-point keyword vein is thin. "my website is slow", "outdated website", "website not converting", "do i need a new website", "signs you need a new website" all sit at 10 to 110 searches per month with little commercial value. The one exception is "website conversion rate optimization" at 390/mo and $28.96 CPC, but difficulty 48 and it is a service TMN does not sell standalone. Compliance, legal, and cost were the productive veins; problem-awareness queries are not.

**Conversion pass across the 6 new and updated pages.** The free 48-hour homepage preview is TMN's lowest-friction offer and it was missing from three hero paths, so it is now a hero CTA on the therapist, HIPAA, and law-firm-cost pages. `/verify` was absent from three pages and is now on all six, which matters specifically for AI-referred buyers, since the Jon Parks transcript showed ChatGPT prompting a buyer to corroborate TMN before recommending it. Pricing now appears on the Ramsay case study, which previously ended without a number.

Verified state across all six: FAQPage schema present (6 to 9 questions each; the Ramsay case study correctly uses CreativeWork instead), in sitemap, in llms.txt, `/verify` linked, `/free-review` linked, and the $2,250 floor visible.

**Indexing sweep completed:**
- **IndexNow: all 86 sitemap URLs** submitted in one call, HTTP 200. This reaches Bing, Yandex, and other participants.
- **Google Search Console:** sitemap resubmitted (it had last been read at 77 pages, predating the 9 new URLs). Note for next time: a domain property rejects a relative path such as `sitemap.xml` with "Invalid sitemap address" and requires the full `https://tmncreative.com/sitemap.xml`. Then requested priority indexing on all 5 new pages via URL Inspection; each returned "URL was added to a priority crawl queue." All 5 showed "Discovered, currently not indexed", meaning Google had found them through the sitemap but had not crawled them yet, which is exactly what the manual request accelerates.
- **Bing Webmaster URL Submission:** 6 URLs accepted, 94 of the 100 daily quota remaining.

**New instrument found: Bing Webmaster Tools has an AI Performance report (beta)** at `/webmasters/aiperformance`, showing citations in Microsoft Copilot and partner AI surfaces. It is free, direct, and measures actual AI citations rather than prompt sampling, which makes it a useful complement to SE Ranking's prompt tracker.

**The baseline it gives is stark and worth stating plainly: 2 total citations across 3 months.** A single spike of 2 citations on 1 page on July 15, 2026, and zero on all 88 other days. No grounding queries recorded at all. That is the honest starting point for TMN's AI citation visibility, measured rather than estimated, and it is the number the entire content program should be judged against. Check monthly alongside the SE Ranking prompt tracker and the Sept 3 manual ChatGPT re-test.
