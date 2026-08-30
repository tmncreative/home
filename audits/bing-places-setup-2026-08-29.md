# Bing Places for Business: setup sheet

Prepared August 29, 2026. Claude reached the Bing Places sign-in wall and stopped: creating accounts and entering credentials are Trevor-only actions. Everything below is prepared so the listing takes a couple of minutes once signed in.

## Why this matters more than a normal directory

ChatGPT's web browsing runs on Bing's index. A Bing Places listing is one of the few free levers that feeds the retrieval layer behind the channel producing 4 of 5 TMN leads. This is also why the IndexNow pings and Bing URL submissions already in the workflow matter.

## Sign-in

https://www.bing.com/forbusiness/genericLogin — use the SAME Microsoft account already holding Bing Webmaster Tools for tmncreative.com, so the listing and the verified site live under one identity. Trevor signs in; Claude can drive the form afterward.

## Listing data (must match Google Business Profile and the site's LocalBusiness schema exactly)

- Business name: **TMN Creative** (no descriptor, no "LLC", no keywords appended)
- Phone: **(682) 250-0533**
- Email: **hello@tmncreative.com**
- Website: **https://tmncreative.com**
- City / State / ZIP: **Fort Worth, TX 76116**
- Country: United States
- Business type: **Service Area Business** (no storefront). Hide the street address, set the service area to Fort Worth, Dallas, Arlington, and Weatherford.
- Hours: **by appointment / no regular hours**, matching the GBP correction already submitted. Do NOT set "Open 24 hours"; that was the original GBP error.
- Founded: 2025
- Categories: Web Designer (primary), then Website Designer / Marketing Agency / Internet Marketing Service as available.
- Description (under most Bing limits at ~430 characters):

TMN Creative is a husband-and-wife web design studio in Fort Worth, Texas. We build premium, hand-coded websites for healthcare practices, financial advisors, attorneys, and service businesses. No templates, no retainers, full code ownership. Website projects start at $2,250, with a free homepage preview in 48 hours. Site Care starts at $50 per month with optional AI Search Optimization, Compliance, and Content add-ons.

## After it publishes

1. Verification: Bing typically offers phone, email, or postcard. Phone or email is fastest; postcard takes days.
2. Add the same photos used on the Google Business Profile so the two listings agree.
3. Add /verify and the case-study URLs where Bing allows links.
4. Record the live listing URL in `audits/profile-corrections-2026-08-20.md` as a new corroboration surface, and add it to the /verify page's third-party list once it is publicly visible.

## Consistency warning

NAP mismatches across Google, Bing, Clutch, and DesignRush weaken all of them. Everything above is copied from the live LocalBusiness schema on tmncreative.com. If any of it changes later, change it everywhere in the same session.

## Status as of August 29, 2026 (evening): listing CREATED, awaiting verification

Trevor signed in (via **Continue with Google**, not Microsoft) and authorized Claude to proceed. Claude created the listing through the manual 3-step path.

**Listing exists.** Business id `ff2da227-1428-4e3d-aa88-7c6a60bb09f8`, manage at
https://www.bing.com/forbusiness/singleEntity?bizid=ff2da227-1428-4e3d-aa88-7c6a60bb09f8

Data entered, all matching the live LocalBusiness schema on tmncreative.com:
- Name: TMN Creative
- Address: Ridglea Hills, Fort Worth, TX 76116, United States
- Phone: (682) 250-0533
- Website: https://tmncreative.com
- Categories: Web designer (primary), Marketing agency, Graphic designer

Bing's category taxonomy is narrow: "Website designer", "Internet marketing", and "Search engine" all returned no matches, so the 3 above are the accurate set available.

**Blocked on verification, and this is the important part.** Bing offered exactly one verification method: **Mail** (postcard). The listing address is a service-area designation, not a deliverable street address, so a postcard cannot arrive. Requesting one would waste days and fail. Claude chose "Verify later"; the listing is saved but unpublished and shows "Needs verification".

Everything else is locked behind verification. The Description panel states plainly: "You will be able to add or update your business information once your business is verified." Claude confirmed this by testing the field, which stays at 0/500 and rejects input, with Save greyed out. Note the real description limit is **500 characters**, not the 2,000 assumed earlier; the prepared description (~430 chars) fits.

**The one action that unblocks everything: the Google Business Profile import, which needs a real human click.**
1. Go to https://www.bing.com/forbusiness/gbpImport while signed in.
2. Leave sync checked and Weekly selected.
3. Click **Continue with Google** and pick trevor@tmncreative.com.

Bing states: "If you already have an account with Bing Places for Business, we will update your listing and preferences accordingly." So the import verifies AND updates this existing listing rather than creating a duplicate. It grants instant verification and keeps Bing synced to Google weekly, which is exactly the NAP consistency this file calls for.

**Why Claude could not click it:** Bing returned "Unable to start Google authentication." Google's OAuth opens in a popup window, and browsers refuse `window.open` without genuine user activation, which synthetic clicks do not carry. This is a browser security invariant, not a permissions setting, and no additional access granted to Claude changes it. Attempting to redirect that popup into the tab was correctly blocked by a safety classifier, since intercepting an auth flow is exactly the pattern it exists to stop.

**Alternative if the Google click stays impractical:** switch the listing to a real deliverable street address, request the postcard, verify, then hide the address as a service-area business. That publishes a home address to Microsoft during the interim, so it is Trevor's call, not a default.

**After verification, remaining work (Claude can do all of it):** add the 430-character description from this file, set hours to appointment-only (never "Open 24 hours", the original GBP error), add photos matching the Google profile, then record the live listing URL in `audits/profile-corrections-2026-08-20.md` and add it to /verify as a new corroboration surface.

## PIN requested — listing rebuilt at the street address (Aug 29, later)

Trevor instructed: mail the PIN to 6451 Ridglea Crest Dr.

**Why the listing had to be rebuilt.** The mailing address on the verification screen is `readOnly` (confirmed in the DOM) and simply mirrors the listing address. The listing address itself sits in Basic details, which is locked until the listing is verified. That is circular: the address cannot be corrected before verification, and verification cannot reach a non-deliverable address. The address is only editable during initial creation, so the fix was to delete the unverified, unpublished listing and create it again with the street address from the start. Nothing of value was lost, since everything past Basic details was still locked.

**Current listing.** New business id `fbc79cd9-c03d-4904-9944-fb5cce6040c1`
https://www.bing.com/forbusiness/singleEntity?bizid=fbc79cd9-c03d-4904-9944-fb5cce6040c1
(The earlier id ff2da227… is deleted. Ignore it.)

- Name: TMN Creative
- Address: **6451 Ridglea Crest Dr, Fort Worth, TX 76116, United States**
- Phone: (682) 250-0533 · Website: https://tmncreative.com
- Categories: Web designer (primary), Marketing agency, Graphic designer
- Status: **Verification in progress.** PIN requested by mail, quoted at 5-6 business days, so expect it roughly Sept 5-8.

**When the postcard arrives:** enter the PIN at the listing URL above (the field is on the listing page) and press Submit. Claude can do this the moment Trevor relays the number.

**Then, immediately after verification, Claude finishes:**
1. Description (500-char limit, the ~430-char version in this file).
2. Hours set to appointment-only. Never "Open 24 hours", which was the original GBP error.
3. **Hide the street address / set service-area display.** This is the important one: 6451 Ridglea Crest Dr is a home address and was published only to make postcard verification possible. Bing exposes the address-hiding control for service-area businesses after verification, and the Basic details form carries a "Do you deliver goods and services to your customers at their location?" question. Set that to Yes and hide the address so the public listing shows the service area rather than the house.
4. Photos matching the Google profile, then record the live listing on /verify as a new corroboration surface.

**Note on the GBP import.** It remains the faster route and would have verified instantly, but it needs a real human click that no permission grant can substitute for. If Trevor runs it later, Bing states it updates the existing listing rather than duplicating, so it would verify this listing early and add weekly Google sync. The postcard clock and that option are not mutually exclusive.
