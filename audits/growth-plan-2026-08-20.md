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
