---
name: ReceiptLocker site
description: One thermal receipt printing down a night ground; every printed line is something the app really does.
colors:
  night: "#0c0c0d"
  night-line: "#232326"
  text: "#f2f2ee"
  text-2: "#b4b5af"
  text-3: "#8f908a"
  paper: "#f3f3f0"
  paper-2: "#e7e7e2"
  ink: "#1f2023"
  ink-2: "#54565b"
  ink-rule: "#9c9d98"
  lime: "#c9f542"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 3.5vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans Variable, DM Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "DM Sans Variable, DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "DM Sans Variable, DM Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  receipt:
    fontFamily: "Martian Mono Variable, Martian Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.01em"
    fontFeature: "tnum"
    fontVariation: "'wdth' 78"
  receipt-total:
    fontFamily: "Martian Mono Variable, Martian Mono, ui-monospace, monospace"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.04em"
    fontFeature: "tnum"
    fontVariation: "'wdth' 78"
rounded:
  paper: "0px"
  frame: "3px"
  focus: "6px"
  control: "8px"
  badge: "9px"
  shot: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  roll-gap: "clamp(32px, 4.5vw, 80px)"
  strip: "460px"
  head: "72px"
  paper-pad: "36px"
  paper-pad-sm: "24px"
  step-top: "56px"
components:
  button-play:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.night}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "12px 20px 12px 14px"
  receipt-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.receipt}"
    rounded: "{rounded.paper}"
    padding: "36px 36px 40px"
    width: "{spacing.strip}"
  receipt-highlight:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.receipt}"
    padding: "0 8px"
  slip-shot:
    backgroundColor: "{colors.night}"
    rounded: "{rounded.shot}"
    width: "300px"
  nav-link:
    textColor: "{colors.text-2}"
    padding: "8px 2px"
  nav-link-active:
    textColor: "{colors.text}"
  faq-item:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    padding: "20px 0"
  doc-slipnote:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.receipt}"
    padding: "24px 26px 30px"
---

# Design System: ReceiptLocker site

## Overview

**Creative North Star: "The Receipt Roll"**

The site is a single strip of cool thermal paper feeding down a near-black night. Persuasion happens in two registers that never mix: big, tight Bricolage Grotesque headlines and DM Sans prose stand on the night, while the facts are printed on the paper in an uppercase, condensed receipt mono, one dotted-leader line per thing the app really does. Screenshots and the film are not cards; they are slips clipped to the roll with a paperclip, tilted a degree or two, hanging over the paper's right edge.

Density is that of a real receipt: tight line spacing, tabular figures, dashed rules between sections, a sawtooth tear where the paper breaks. Colour is almost absent. The night, the paper and the ink carry everything; lime is a signal, never a fill for its own sake. Motion is the printer's: lines print in left to right in stepped passes as each stretch of paper scrolls into view, and the highlighter swipes across the line that matters once it has printed.

On desktop the roll is a three-column grid (copy, strip, slips) with each section's copy sticky against its own stretch of paper. Below 1080px the roll tears into pieces: each section becomes copy, then slip, then a torn segment of paper, centred at strip width.

**Key Characteristics:**
- One continuous paper strip (460px) on a night ground, centred in a three-column roll.
- Two type worlds: display and prose on the night, condensed uppercase mono on the paper.
- Lime as highlighter stroke and interactive signal only.
- Evidence (screens, film) arrives as tilted slips clipped to the roll, with real drop shadows.
- Motion is a stepped print-head pass; reduced motion gets the receipt already printed.

## Colors

A near-monochrome night-and-paper palette with a single acid-lime signal.

### Primary
- **Highlighter Lime** (`lime`): the brand accent. On paper it is a highlighter stroke behind ink (the one line that matters per section, and the TOTAL). On the night it marks the headline's key phrase (as a stroke behind night-coloured text), the film's play button fill, the focus ring, link hover underlines, link colour on document pages, the open state of an FAQ toggle, the printer's status LED and text selection.

### Neutral
- **Night** (`night`): the page ground, the sticky head, and the text colour on any lime fill.
- **Night Rule** (`night-line`): hairline dividers on the night (FAQ rows, footer top).
- **Bright Text** (`text`): headlines and emphasised text on the night.
- **Soft Text** (`text-2`): prose, ledes and nav links at rest.
- **Quiet Text** (`text-3`): captions, small print under the badge, dates, footer, list markers.
- **Thermal Paper** (`paper`): the receipt strip, the tear, the document-page slipnote, and the mat around the film still. Cool, never cream.
- **Paper Shade** (`paper-2`): the hairline edge of the film's paper mat.
- **Printed Ink** (`ink`): all text and the barcode on paper.
- **Faded Ink** (`ink-2`): column heads, dim lines and footnotes on paper.
- **Ink Rule** (`ink-rule`): the dotted leaders and dashed section rules on paper.

### Named Rules
**The Highlighter Rule.** On paper, lime appears only as a stroke behind ink, on at most one line per section plus the TOTAL. Lime is never text on paper and never a panel colour.

**The Two Grounds Rule.** There are exactly two surfaces: night and paper. No grey cards, no gradients-as-surfaces, no third ground.

## Typography

**Display Font:** Bricolage Grotesque (variable, with system-ui fallback)
**Body Font:** DM Sans (variable, with system-ui fallback)
**Label/Mono Font:** Martian Mono (variable, condensed to ~78% width, with ui-monospace fallback)

**Character:** A loud, tightly tracked ExtraBold grotesque makes the promise; a calm humanist sans explains it; a condensed uppercase mono prints the proof the way a till would.

### Hierarchy
- **Display** (800, clamp 3.25rem to 6rem, 0.92): the one hero headline. Balanced wrap.
- **Headline** (800, clamp 2.1rem to 3.4rem, 0.98): each section's statement beside the roll; the fine-print heading sits at a near-identical clamp (2rem to 3rem, 1.0).
- **Title** (800, 1.5rem, 1.15): section heads on document pages (privacy, support); document page titles use clamp 2.5rem to 4rem at 0.95.
- **Body** (400, 1.0625rem, 1.6): prose; document paragraphs cap at 68ch, FAQ answers at 60ch.
- **Lede** (400, 1.125rem, 1.55): the paragraph under each headline, capped at 32ch so it stays a short column.
- **Label** (400, 0.8125 to 0.9375rem): captions, the note under the badge, footer, nav (0.95rem).
- **Receipt** (400, 0.875rem, 1.85, uppercase, tabular figures): every line on paper. Section heads on paper are the same face at 700 with 0.24em tracking, framed by asterisks like a till prints them. Store name at 1.5rem/800; "Keep this receipt" at 1.375rem/800 with 0.14em tracking; the TOTAL at 1.75rem/800.
- **Receipt note** (0.8rem, 1.6, sentence case, 85% width, faded ink): sample-data disclaimers and footnotes on paper.

### Named Rules
**The Till Voice Rule.** Anything printed on paper is Martian Mono with tabular figures, uppercase except the small sentence-case notes, and every label-value pair is joined by a dotted leader. Nothing on the night uses the mono, and nothing on the paper uses Bricolage or DM Sans.

**The Tight Display Rule.** Display and headline type is always 800 weight with negative tracking (-0.04em; -0.02em for document-page section heads) and line-height under 1.

## Layout

The desktop roll is a centred grid capped at 1560px: `minmax(0,1fr) | strip | minmax(0,1fr)` with a fluid column gap (`roll-gap`) and page `gutter`. Each section is a subgrid row, so its copy, paper and slip share one band. The copy column right-aligns against the paper (max 34rem) and is sticky 40px below the 72px head, bounded by its own stretch of paper. Slips take zero height in the row and overlap the paper's right edge by the column gap plus 16px, so they never stretch the roll.

Paper segments stack seamlessly on desktop (later segments drop to 8px top padding); a single sawtooth tear closes the roll at the bottom.

**At 1080px and below** the grid dissolves into a single column with 16px side padding: copy (64px top), then the slip centred, then the paper at up to 460px width with 24px padding, its tears shown at both ends so each section reads as a torn piece. In the hero the film comes before the paper. Empty slip columns are removed. The FAQ goes to one column; the "How it works" nav link hides.

**At 560px and below** the head drops the badge, paper text steps to 0.8125rem with 18px side padding, and the TOTAL steps to 1.4rem.

Content below the roll (fine print, footer) and document pages sit in centred columns: 1080px for fine print and footer, 720px for documents.

## Elevation & Depth

Surfaces are flat; depth belongs to physical objects. The night and paper never cast shadows on each other. Shadows appear only on things that would really sit above the paper: the printer mouth at the top of the roll, the screenshot slips, the film's mounted still, the paperclips and the play button. They are soft, dark and downward, like objects under a lamp.

### Shadow Vocabulary
- **Slip lift** (`box-shadow: 0 0 0 1px #2c2d31, 0 22px 50px rgb(0 0 0 / 0.55), 0 4px 10px rgb(0 0 0 / 0.4)`): screenshot slips.
- **Mounted still** (`box-shadow: 0 0 0 10px paper, 0 0 0 11px paper-2, 0 30px 70px rgb(0 0 0 / 0.6), 0 6px 14px rgb(0 0 0 / 0.4)`): the film frame on its paper mat.
- **Printer mouth** (`box-shadow: 0 1px 0 #34353a inset, 0 10px 24px rgb(0 0 0 / 0.5)`): the feed slot the paper emerges from.
- **Clip** (`filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.5))`): paperclips on slips.
- **Play** (`box-shadow: 0 10px 24px rgb(0 0 0 / 0.45)`, hover `0 14px 28px rgb(0 0 0 / 0.5)`).
- **Head fade**: an 18px gradient from night at 60% to transparent under the sticky head, instead of a border or shadow.

### Named Rules
**The Objects-Only Rule.** Only physical objects (slips, clips, the printer mouth, the play button) get shadows. Text blocks, the paper strip and the night never do.

## Shapes

The paper is square-cornered and its ends are a sawtooth tear (an 18px-pitch zig-zag mask, 14px tall) that mirrors the logo's torn-receipt foot; mid-page breaks on narrow screens use the same tear, flipped at the top. Rules on paper are dashed (1.5px), leaders are dotted (1.5px). Screenshots carry the device's own generous rounding (22px); the film still is nearly square (3px) because it is a print, not a screen. Controls on the night are rounded: the play button is a full pill, the badge 9px, skip link 8px, focus ring 6px. Slips tilt between -1.6 and +2 degrees, their captions counter-rotate to stay level, and the film straightens to 0 degrees when it plays.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Play (the one custom button):** lime fill, night text, DM Sans 600 at 1rem, padding 12px 20px 12px 14px, a 26px night disc with a lime triangle as its icon, and the runtime in a lighter 400 weight. It sits inside the film still, centred 22px from the bottom.
- **Hover / Active:** lifts 1px with a deeper shadow (160ms, ease-out); presses to 0.97 scale.
- **Primary call to action** is the official Apple "Download on the App Store" badge, shown unaltered (52px tall under headlines, 40px in the head), never restyled.

### Receipt Paper (signature)
- Thermal-paper ground, ink text, Martian Mono uppercase at 78% width, 36px padding (24px under 1080px).
- **Line item:** label, a flexible dotted leader, right-aligned value.
- **Section head:** bold, centred, widely tracked, between asterisks.
- **Highlight line:** lime stroke behind the line, bleeding 8px past each side, weight 700.
- **Printer mouth:** the first segment opens out of a dark feed slot slightly wider than the paper, with a lime status LED.
- **Close:** a dashed rule, a decorative barcode drawn from the product name, then the sign-off.

### Slips
- A screenshot in a 22px-rounded frame, or the film as a 9:16 still on a 10px paper mat, up to 300 to 318px wide, tilted, with an SVG paperclip over the top-left edge and a Quiet Text caption below.

### Navigation
- Sticky 72px night head: lockup left, links right in Soft Text at 0.95rem with 8px vertical padding, Bright Text on hover and for the current page, then the App Store badge. No underline in the nav.
- Footer: lockup, Privacy, Support, contact email, copyright in Quiet Text above a Night Rule hairline.

### Fine Print (FAQ)
- Two-column disclosure list on the night (one column below 1080px); each row has a Night Rule top border, 20px padding, a 600-weight question and an SVG plus that rotates 45 degrees and turns lime when open (220ms ease-out).

### Document Slipnote
- On privacy and support pages, the key statement is printed on a short paper slip (Martian Mono uppercase, 80% width) ending in a sawtooth tear, under a Bricolage title.

### Links and Focus
- Inline links inherit colour with a 1px underline offset 0.22em; the underline turns lime on hover. On document pages links are lime. Focus is a 2px lime outline, 3px offset, 6px radius, everywhere.

## Do's and Don'ts

### Do:
- **Do** print every product fact on the paper as a mono line item with a dotted leader, and keep it literally true of the shipping app.
- **Do** keep lime to one highlighted line per paper section, plus the TOTAL; on the night, to the headline's key phrase and interactive signals.
- **Do** put text on lime in Night or Ink; lime is a fill behind dark text, never a text colour on paper.
- **Do** bring screenshots and video in as tilted, clipped slips with the slip-lift shadow.
- **Do** close the roll and every narrow-screen paper segment with the sawtooth tear.
- **Do** show the receipt fully printed, with no clip-path or highlighter animation, under reduced motion or without JavaScript.

### Don't:
- **Don't** add a third surface: no grey or tinted cards, no feature-card grids, no panels on the night.
- **Don't** warm the paper toward cream; it stays cool (paper token).
- **Don't** set prose, headlines or nav in the receipt mono, or line items in Bricolage or DM Sans.
- **Don't** shadow the paper strip, text blocks or the night.
- **Don't** restyle, recolour or dim the official App Store badge.
