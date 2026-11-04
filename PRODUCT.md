# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (owner's choice, 2026-11-03), static output deployed to GitHub Pages
(repo `getsumactright/receiptlocker`). The current site is two hand-written HTML pages; the
privacy page's URL (`/privacy/`) is entered in App Store Connect and must keep working.

## Users

One-person US local businesses — contractors, shops, salons, food trucks, freelancers — who keep
paper receipts in a box, a glovebox or a shoebox and face them at tax time. They arrive on an
iPhone more often than a desktop, usually from the App Store listing, a link from someone they
know, or a search, and they want to know in seconds what the app does and whether their receipts
are safe.

## Product Purpose

The site explains ReceiptLocker, the receipt app for iPhone and iPad, and sends people to the App
Store. It also hosts the privacy policy and support page that App Store Connect links to.
Success: a visitor understands "scan it, it's filed, it's ready for my accountant" and taps
the App Store badge.

## Positioning

Everything stays on the person's device. ReceiptLocker reads the vendor, total and date on the
iPhone or iPad (Apple's Vision) — the photo is never uploaded — with no account, no server, no
sign-in and no tracking. Categories follow the Schedule C lines, and the accountant pack (a PDF per
quarter with every receipt's photo, plus spreadsheets) is built for handing to a CPA.

## Operating Context

Receipts pile up through the year; the app is used in the moment (scan, check, file) and again at
quarter and year end (totals, accountant pack). The person's accountant is a real second party in
the story.

## Capabilities and Constraints

- Scan with the document camera (several pages at once) or pick existing photos; on-device reading
  of vendor, total and date; review queue; categories mapped to Schedule C; optional client/job.
- Totals by year, quarter and category; Find; edit history and 30-day soft delete.
- Accountant pack; Export everything (photos + spreadsheets); Delete everything.
- Face ID lock; Night and Day themes; iPhone and iPad.
- **Mileage is hidden in the app (2026-10-20). The site must not mention mileage or trips** until
  it ships — App Review rejects listings describing features the app doesn't show.
- Price: paid, one-time App Store purchase (owner, 2026-11-03). The exact price is not set; the
  site must not state a figure until it is.
- Launch: the site goes live with the app; the main action is the official "Download on the App
  Store" badge linking to the listing (URL not yet known). Follow Apple's badge guidelines.
- App Store name: "ReceiptLocker: Receipt Scanner"; subtitle "Business receipts for tax time".
- English only for now.

## Brand Commitments

- Name: ReceiptLocker (one word, capital R and L). Bundle id keeps `.stub`; never shown.
- Mark: "Receipt Lock" — lime padlock with a torn-receipt foot on near-black (`app/brand/`,
  philosophy in `app/brand/PHILOSOPHY.md`). Logo kit in `site/assets/logo/` (option B lockup:
  app-icon tile + wordmark).
- Palette committed by the brand: night `#0C0C0D` and lime `#C9F542`; display type Bricolage
  Grotesque ExtraBold, UI text DM Sans (both in `app/ios/ReceiptLocker/Resources/Fonts/`).
- Tagline in use: "Receipts, ready for tax time."
- Voice: plain, short, concrete; no jargon; claims must be literally true of the shipping app.

## Evidence on Hand

- Explainer video, 60 s, 1080×1920 vertical, 3D-animated, with voiceover/dialogue:
  `~/Downloads/Woman sorting through receipts (final cut).mp4` (owner-made). Story: a business owner
  buried in receipts, scans them with her phone, ends with a neat stack while a colleague looks on.
  Needs captions on the site.
- App Store screenshots, iPhone and iPad, seven each: `app/store/` (some framing issues noted
  2026-11-03).
- Store banner `app/brand/out/header-3840x1646.png`; icon proof sheets in `app/brand/out/`.
- No customers, testimonials, ratings, press or download numbers exist. Do not invent any.

## Product Principles

1. Truth over hype: say only what the app does today.
2. Privacy is the product, not a footnote — no trackers, no third-party scripts, nothing collected.
3. Show, don't explain: the video and the real app screens carry the story.
4. Made for a regular person: plain words, one obvious next step.

## Accessibility & Inclusion

Captions for the video; never autoplay with sound; respect reduced motion; WCAG AA contrast
(lime text on light grounds fails — use the darker accent there).
