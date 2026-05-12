---
name: The Washboard
description: Bright, welcoming, dependable — Murray's friendly neighborhood laundromat.
colors:
  brand-navy: "#17244F"
  brand-navy-light: "#ECF1F9"
  warm-cream: "#FAF8F5"
  sky-pale: "#ECF2F9"
  ink: "#1A1A1A"
  muted-ink: "#4D5867"
  surface-cool: "#F3F4F7"
  hairline: "#E5E7EB"
  google-gold: "#FFD700"
  alert-red: "#EE5550"
typography:
  display:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.025em"
  nav:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  meta:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brand-navy}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.brand-navy}"
    textColor: "#FFFFFF"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.brand-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline-hover:
    backgroundColor: "{colors.brand-navy}"
    textColor: "#FFFFFF"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "32px"
  chip-accent:
    backgroundColor: "{colors.brand-navy-light}"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  rating-badge:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: The Washboard

## 1. Overview

**Creative North Star: "Main Street Modern"**

The Washboard's interface should feel the way a well-kept small-town storefront feels: bright, welcoming, organized, and quietly proud of itself. Oswald headlines lean Americana, evoking hand-painted signage, local diners, and the kind of business that has been on the same corner for years. Source Sans 3 body type keeps the reading experience clean and contemporary. The palette pairs deep navy with a warm-cream background, not a sterile white, because the place itself is warm and lit from within.

This is **brand** register: a marketing site for a physical laundromat at 605 S. 12th St in Murray, Kentucky. Visitors are deciding whether to drive over. The site has to do three things at once: prove the place is clean, prove the staff are friendly, and answer the practical questions (hours, price, how the card works) without making the reader hunt. Restraint over decoration. Specificity over polish.

The system rejects four reflexes by name: cold-corporate-chain sterility (Tide Cleaners), trendy-SaaS aesthetics (gradients, dark mode, hero-metric templates), generic small-business templates (cookie-cutter Wix/GoDaddy hero plus three icon boxes plus testimonial slider), and run-down-laundromat dinginess (fluorescent vibe, handwritten signs).

The system is **mobile-first**. Most visitors arrive on a phone, sometimes literally in the parking lot. Hours, address, and the click-to-call CTA are always within thumb reach. Section spacing is generous; nothing fights for attention.

**Key Characteristics:**
- Warm cream background, not pure white; deep navy primary, not flat black.
- Display type does the heavy lifting; body type stays comfortable and unfussy.
- Pill-shaped CTAs in uppercase Oswald, confident and easy thumb targets.
- Generous rounded-2xl (16px) cards with whitespace, never nested.
- Specificity in copy ($3.50, "605 S. 12th St", "above the green LCD screen") is the antidote to template feel.
- Performance targets: FCP < 1.5s, LCP < 2.5s, CLS < 0.1. Zero JS except the mobile menu toggle.

## 2. Colors

A two-pole palette anchored by deep navy and warm cream, with cool pale tints for surfaces and the lightest possible accent on call-to-action backgrounds. One reserved exception for Google star ratings.

### Primary
- **Brand Navy** (#17244F / HSL 226 54% 20%): the workhorse. Used for headlines, primary buttons, links, icon glyphs, and the brand mark. Carries 15–25% of any given screen — visible authority, never a wash.

### Neutral
- **Warm Cream** (#FAF8F5 / HSL 40 30% 97%): the default section background on welcome surfaces. A touch of warmth that says "this is a real place," not a SaaS dashboard.
- **Surface Cool** (#F3F4F7 / HSL 220 20% 96%): cool counterpart used on alternating sections to create gentle rhythm. Pairs with navy without competing.
- **Sky Pale** (#ECF2F9 / HSL 210 50% 95%): used inside small accent fills (icon discs, chip backgrounds, footer trim). Always behind navy content, never in front.
- **Brand Navy Light** (#ECF1F9 / HSL 220 40% 95%): subtle tonal companion to the primary; interchangeable with Sky Pale in practice.
- **Hairline** (#E5E7EB): all borders, dividers, table rules.
- **Ink** (#1A1A1A): body text. Not pure black.
- **Muted Ink** (#4D5867 / approximately Tailwind gray-600): secondary text, captions, timestamps, helper copy.

### Reserved Semantic Colors
- **Google Gold** (#FFD700): used **only** for Google star-rating glyphs and the rating badge's star icons. This is Google's owned visual convention, not a brand accent. Never used on backgrounds, buttons, or typography elsewhere.
- **Alert Red** (#EE5550): reserved for genuine error states only. Not currently used in the marketing site.

### Named Rules

**The Cream-Not-White Rule.** Section backgrounds default to Warm Cream (#FAF8F5) or Surface Cool (#F3F4F7), never `#FFFFFF`. Pure white reads as "stock template." The faint warmth signals a real, lived-in space. Cards may use white — that's where the contrast belongs. The single allowed exception is the logo background, which is always pure white per brand-mark rules.

**The Navy Pulls Weight Rule.** Brand Navy is the only saturated brand color. There is no secondary brand accent. If you feel the urge to introduce a second brand color, the answer is a heavier weight, larger size, or more whitespace, never a new hue. Google Gold is a semantic exception, bounded to Google review star glyphs only.

## 3. Typography

**Display Font:** Oswald (with Impact / sans-serif fallback).
**Body Font:** Source Sans 3 (with system-ui / sans-serif fallback).

**Character:** Oswald is a condensed, classic-American display sans, the typeface of vintage signage and small-town storefronts. It does the personality work. Source Sans 3 is a clean, neutral humanist sans built for screen reading; it stays out of the way so Oswald can be the voice. The contrast between condensed display and open body is the system's primary typographic gesture.

### Hierarchy
- **Display** (Oswald 700, clamp 1.875rem–3rem / ~30–48px, line-height 1.1): page H1 on every route. One per page.
- **Headline** (Oswald 700, clamp 1.5rem–2.25rem / ~24–36px, line-height 1.15): section H2 across all pages.
- **Title** (Oswald 700, 1.125rem / 18px, line-height 1.3): card titles, FAQ questions, sub-headings inside long copy.
- **Body** (Source Sans 3 400, 1.0625rem / 17px, line-height 1.7): all paragraph copy. Cap line length at 65–75ch.
- **Meta** (Source Sans 3 400, 0.875rem / 14px, line-height 1.5): timestamps, captions, footer text, review attribution.
- **Label** (Oswald 600, 0.9375rem / 15px, letter-spacing 0.025em, uppercase): every button, every chip. Buttons are always uppercase Oswald — that's the signature.
- **Nav** (Oswald 600, 0.9375rem / 15px, letter-spacing 0.04em, uppercase): primary header and mobile-menu links. Slightly wider tracking than buttons.

### Named Rules

**The Oswald-On-Buttons Rule.** Every pill-shaped CTA uses Oswald 600 uppercase with 0.025em tracking. Sentence-case body type on a button breaks the system instantly. If you're adding a button, the label is uppercase Oswald, no exceptions.

**The One-Display-Per-Page Rule.** A single H1 per route, sized via the display clamp. Never use display size for anything else; the second time the eye sees it, it stops carrying weight.

**The Uppercase-Reserved Rule.** Uppercase is reserved for navigation, buttons, and chips. Body copy, headings, and prose are always sentence case. If you find uppercase running across a paragraph, it's a bug.

## 4. Elevation

Flat by default. The system uses warm-cream and surface-cool background alternation to create section depth, not shadows. Cards receive a single near-invisible `shadow-sm` to lift them off colored sections — a hint of dimensionality, never a drop shadow. The header gains a subtle shadow on scroll to anchor it as sticky context, but at rest it's flat.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): the only at-rest shadow in the system. Applied to elevated cards on warm sections. Equivalent to Tailwind `shadow-sm`.
- **Card hover lift** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07)`): blog and service cards only, on hover. Pairs with a 1–2px translateY for the lift gesture. Equivalent to Tailwind `shadow-md`.
- **Sticky header on scroll** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.06)`): applied after the user scrolls past the hero.

### Named Rules

**The Flat-Section Rule.** Sections are separated by background color (Warm Cream vs Surface Cool), never by shadows or borders running across the page. Heavy shadows read as 2014 web design; tonal alternation reads as editorial.

**The No-Glass Rule.** No `backdrop-filter`, no translucent panels, no glassmorphism anywhere. The site is a physical place; the interface should feel like paper and ink, not iOS.

## 5. Components

### Buttons
- **Shape:** fully pill-shaped (`border-radius: 9999px`). Confident, friendly, easy thumb target. (External documentation may still reference 8px / `rounded-lg` from an earlier iteration — that is outdated; the production system is pill.)
- **Primary:** Brand Navy background, white text, Oswald 600 uppercase 0.025em, padding `12px 32px`. Hover: `opacity: 0.9` (subtle, no color shift).
- **Outline:** 2px Brand Navy border on transparent background, Brand Navy text. Hover fills with navy and white text.
- **Focus:** visible focus ring using the primary color. Never remove `:focus-visible`.
- **Touch target:** minimum 44×44px overall area. Mobile padding never goes below 12px vertical.

### Cards
- **Corner Style:** `rounded-2xl` (16px). Generous, friendly, never sharp.
- **Background:** white inside Warm Cream or Surface Cool sections.
- **Shadow Strategy:** `shadow-sm` at rest; hover gains `shadow-md` plus a 1–2px translateY for blog and service cards. Static cards (reviews, hours blocks) get no hover lift.
- **Border:** 1px Hairline border for definition.
- **Internal Padding:** 24–32px (md–lg). Breathing room is part of the brand.
- **Nesting:** prohibited. A card never contains another card.

#### Variants
- **Service card:** icon disc → title → description → button. Center-aligned. Used on `/services` and the homepage Services section.
- **Blog post card:** date → title → excerpt → "Read More" link. Left-aligned. Used on `/blog` and the homepage Blog Preview.
- **Review card:** five gold star glyphs → quote → reviewer name → time-ago. Used in the homepage Reviews carousel.
- **Hours / fact card:** icon → label → value. Used in the Hours & Location and Contact sections.

### Chips and Icon Discs
- **Icon Disc:** circular, 40–56px diameter, Sky Pale or Brand Navy Light background, Brand Navy icon glyph. Used to anchor list items and feature points.
- **Numbered Step Disc:** 32px circular, Brand Navy fill, white numeral. Used in How-To step lists.
- **Chip:** Brand Navy Light background, Brand Navy text, 8px radius, small padding. Reserved for tags and inline metadata.

### Star Rating Badge (signature component)
- **Shape:** pill, padding `6px 14px`.
- **Background:** white with a 1px Hairline border, or Brand Navy Light fill — pick one per surface and stay consistent.
- **Content:** `4.9 ⭐⭐⭐⭐⭐ Google`. Number in Oswald 700, stars rendered as Google Gold (#FFD700) glyphs, "Google" in Oswald 600 uppercase.
- **Behavior:** entire badge is a link to the live Google reviews page, opening in a new tab.
- **Placement:** persistent in the header, near the primary CTA. Echoed in the footer.

### Iconography
- **Library:** Lucide via `astro-icon` (`lucide:credit-card`, `lucide:clock`, `lucide:map-pin`).
- **Inline size:** 16–24px in body copy and buttons.
- **Feature size:** 24–28px inside an icon disc.
- **Color:** Brand Navy. Always single-color, never multi-color, never filled with brand-secondary tints.

### Navigation
- **Desktop header:** ~80px tall, white background, logo left, nav links center/right, primary CTA ("GET DIRECTIONS") right. Sticky on scroll with subtle shadow once scrolled. Star Rating Badge sits adjacent to the CTA.
- **Mobile menu:** fullscreen overlay, white background, vertical stack of large Oswald uppercase links (18–20px), contact block (address, phone, hours, directions button) at the bottom. Hamburger opens; X closes; body scroll locks while open. Fade-and-slide animation, 300ms.
- **Link state:** at rest, Brand Navy; hover, subtle underline or 8% opacity navy background.

### Inputs and Forms
- **Field:** white background, 1px Hairline border, 8px radius, padding `12px 16px`, Source Sans 3 17px.
- **Focus:** Brand Navy border, soft Brand Navy Light glow (2px ring at 30% opacity).
- **Label:** Source Sans 3 500, 14–15px, Muted Ink color, 4–8px below-margin.
- Forms are rare on the site; if used, keep them short (3–5 fields) and never modal.

### Imagery
- **Format:** `.webp` for content images, original formats only for print outputs.
- **Hero aspect:** 16:9 or 21:9. Loaded with priority above the fold.
- **Loading:** `loading="eager"` above the fold, `loading="lazy"` below.
- **Alt text:** descriptive and location-aware when relevant: *"Clean laundromat interior at The Washboard in Murray, KY."* Decorative images get `alt=""`.
- **Logo:** always on a pure-white background; never on cream, navy, gradients, photographs, or transparency.

### Motion
- **Duration:** 200–300ms for interactive transitions; 300ms for the mobile-menu fade-and-slide.
- **Properties allowed:** `color`, `background-color`, `opacity`, `transform`, `box-shadow`. Never animate `width` / `height` / `top` / `left` / `padding` — they cause layout thrash and CLS.
- **Easing:** ease-out-quart or cubic-bezier(0.25, 0.1, 0.25, 1) by default. No bounce, no elastic.
- **Reduced motion:** respect `prefers-reduced-motion: reduce`; collapse to instant state changes when set.
- **Carousel (Reviews):** auto-advance 5s per slide, smooth fade between slides, pause on hover, arrow + dot manual controls visible.

### FAQ Accordion (signature pattern)
- **Style:** native `<details>` with `<summary>` showing question + rotating chevron. Zero JS dependency.
- **Borders:** hairline bottom border between items; no top/side borders on the container.
- **Open state:** chevron rotates 180°; answer fades in under the question. Subtle, no layout-shift animation.
- **Schema:** every FAQ list should ship FAQPage JSON-LD on the same page for SEO.

## 6. Do's and Don'ts

### Do:
- **Do** use Warm Cream (#FAF8F5) for section backgrounds, never `#FFFFFF`.
- **Do** keep Brand Navy as the only saturated brand color. Google Gold (#FFD700) is allowed exclusively for Google star-rating glyphs.
- **Do** set every button label in uppercase Oswald with 0.025em letter-spacing.
- **Do** alternate Warm Cream and Surface Cool sections to create rhythm.
- **Do** use `rounded-2xl` (16px) on cards and `rounded-full` on buttons — pill is the brand.
- **Do** quote real numbers, real addresses, real product names. Specificity is identity.
- **Do** keep body line length to 65–75ch.
- **Do** use `.webp` for all content images with descriptive, location-aware alt text.
- **Do** target a 44×44px minimum touch target on every interactive element.
- **Do** mention Murray, Calloway County, or Murray State naturally where it fits, never stuffed.

### Don't:
- **Don't** introduce a second saturated brand color. There is no "secondary accent" — if something needs more emphasis, use scale or whitespace.
- **Don't** use gradients, gradient text, or glassmorphism. Both are absolute bans.
- **Don't** use side-stripe borders (colored `border-left` greater than 1px). Use full borders, tinted backgrounds, or numbered leading discs.
- **Don't** ship dark mode. It contradicts the "bright and welcoming" register and is one of the named anti-references (trendy SaaS).
- **Don't** stack identical icon-and-text card grids end to end. If you need three cards, vary at least one (size, layout, or content density).
- **Don't** use stock laundromat photography. If you can't shoot the real space, prefer typographic or iconographic treatments.
- **Don't** nest cards inside cards. The hierarchy is sections → cards → content, full stop.
- **Don't** write copy that could appear on any laundromat's website. If a sentence could live on a Tide Cleaners landing page, rewrite it.
- **Don't** use em dashes in copy. Use commas, colons, or periods.
- **Don't** place the logo on anything other than a pure-white background.
- **Don't** animate layout properties (width, height, padding, top/left). Use transform and opacity.
- **Don't** put text on top of photos without a solid background plate behind it.
