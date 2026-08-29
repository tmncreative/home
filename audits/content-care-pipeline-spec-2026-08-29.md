# Content Care publishing pipeline: Soro to static pages

Prepared August 29, 2026. Grounds the /content-care add-on in a delivery mechanism that keeps articles crawlable, based on the live LumiClinics finding below.

## The finding that motivates this

Verified live on August 29 against lumiclinics.org/our-journal/:

- The page loads articles through Soro's embed script (`app.trysoro.com/api/embed/...`). The raw HTML contains no article content, only "Loading articles... JavaScript is required to view the article library."
- Individual articles have no URLs on lumiclinics.org. The sitemap contains exactly 1 blog URL, the empty shell page, out of 28 total URLs.
- A crawler that does not render the embed script sees no article text. Google can render JavaScript, but the articles still have no individual URLs on the practice domain to index or cite.

Consequence: this embed materially limits article-level discovery in search and AI-assisted answers. Content Care must publish real pages.

## Target architecture

Soro stays the writing and approval workspace. Publishing goes static.

1. **Author and approve in Soro.** Keyword research, draft, TMN edit pass, client approval. Soro's public materials list webhooks, export, and direct CMS connections (WordPress, Shopify, Webflow, Wix, Notion, HubSpot, Ghost, Next.js, "50+ tools via webhooks").
2. **On approval, a Soro webhook hits a Netlify build hook** for the client's site (TMN-hosted static sites only; see the two-path rule below).
3. **The build script pulls approved articles** (Soro API or export endpoint; exact interface to confirm inside a Soro account, see Open items) and renders each as a real page in the client site's design system:
   - Its own URL on the client domain (e.g. `/our-journal/<slug>`)
   - Full article text in the raw HTML
   - Article JSON-LD (headline, datePublished, dateModified, author as the practice, publisher)
   - Internal links to relevant service pages
   - The journal index page rebuilt as a static list, replacing the embed
4. **Post-deploy**: sitemap.xml regenerates with the new URL and lastmod, and the deploy pings IndexNow. Search Console and Bing pick up the sitemap on their normal cycle; high-value posts can be submitted manually.
5. **Fallback with no API access**: manual export or copy from Soro into the repo as content files. Slower, same output. The pipeline degrades to a workflow, never to an embed.

## Two publish paths by platform

- **TMN-hosted static sites** (LumiClinics, Smitha, SunCraft, Tony's, Promised Land, Care to Speak pattern): the webhook-to-build path above.
- **Client-platform sites** (DVRT on WooCommerce/WordPress, any Wix or Webflow client): Soro's native connector publishes directly as real CMS posts with real URLs. No embed mode, ever.

The rule in one line: an article is not published until its full text is retrievable at its own URL on the client's domain with `curl`.

## LumiClinics migration steps (the pilot)

1. Confirm their Soro plan tier includes webhook/export or API access (check inside their account; Trevor has collaboration access via the current engagement).
2. Export existing articles from Soro.
3. Render them as static pages in the lumiclinics repo (local at ~/Documents/GitHub/lumiclinics), rebuild /our-journal/ as a static index, keep the Soro embed off the page.
4. Add Article schema, sitemap entries, IndexNow ping. Verify each article URL returns full text raw.
5. Wire the webhook-to-build-hook path for future posts so Christian's Soro workflow continues unchanged from his side.
6. Measure: GSC/Bing indexing of the new article URLs becomes the before/after evidence for the Content Care product page.

## Open items to confirm inside a Soro account

- Which plan tiers include webhooks / API / export, and the exact payload shape.
- Whether Soro can be told NOT to auto-publish (Content Care requires human approval before anything ships; Soro's default autopilot posture must be off).
- Per-site subscription cost, to price against the $400/mo service (margin note: if Soro runs ~$50-150/site/mo, margin holds; if higher, evaluate writing in-house with Claude/Codex and skipping Soro for TMN-hosted clients entirely — the workspace is a convenience, not a dependency).
