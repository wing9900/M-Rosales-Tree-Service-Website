# Release Notes — Card Position Formula Fix & Tuning (March 2026)

## Summary

Fixed Sarah card position formula so `SMALL_PHONE_CARD_TOP_MIN` and `SMALL_PHONE_CARD_TOP_MAX` actually control the card position on small phones. Adjusted values to move the card lower.

---

## Changes

### Formula fix
- **Before:** Hardcoded `18 + (width - 320) * 0.07` with clamp; MIN/MAX only affected very narrow widths (320–340px)
- **After:** `MIN + (width - 320) * (MAX - MIN) / 70` — MIN and MAX define the full range. At 320px → MIN%, at 390px → MAX%

### Card position tuning
- `SMALL_PHONE_CARD_TOP_MIN`: 18 → 25
- `SMALL_PHONE_CARD_TOP_MAX`: 23 → 30
- Card sits lower on small phones

### How to adjust (lines 128–129)
- Lower MIN/MAX = card higher on screen
- Higher MIN/MAX = card lower on screen

---

# Release Notes — ChatWidgetSection Small Phone Optimizations (March 2026)

## Summary

ChatWidgetSection optimizations for small phones (≤390px): GHL call button overlap fixes, centered Talk/CTA layout, and typography adjustments. All changes are scoped to `@media (max-width: 390px)` — no impact on larger phones, tablets, or desktop.

---

## Changes

### CLAIM MY FREE TRIAL (mobile banner)
- Wrapped CTA in `banner-cta-wrapper` with `padding-right: 100px` to avoid overlap with GHL call button
- CTA fills wrapper content area; right zone reserved for GHL widget

### Sarah card — Talk to Sarah now + Try an agent FREE
- Wrapped in `sarah-mobile-cta-group` with flex centering
- "Talk to Sarah now" and "Try an agent FREE for my business" centered above divider
- CTA group `padding-right: 80px` (vs 100px GHL safe zone) so button is ~20% wider

### Typography (small phones only)
- **Headline** "Every lead captured. Zero effort.": 19px → 18.06px (~5% smaller)
- **Headline position:** `transform: translateY(-4px)` — moves text up within the green banner without affecting banner bounds or layout
- **Disclaimer** "No credit card required · Free setup · Cancel anytime": 11.05px → 9px (~20% smaller)

### Card position (small phones on live)
- Width-based override when width ≤ 390px. Formula now uses `SMALL_PHONE_CARD_TOP_MIN` and `SMALL_PHONE_CARD_TOP_MAX` directly (see "Card Position Formula Fix" release). Current values: MIN=25, MAX=30.

### Constants (ChatWidgetSection.tsx lines 122–129)
- `SMALL_PHONE_BREAKPOINT = "390px"`
- `SMALL_PHONE_GHL_SAFE_ZONE = "100px"`
- `SMALL_PHONE_CTA_GROUP_PADDING_RIGHT = "80px"`
- `SMALL_PHONE_CARD_TOP_BREAKPOINT`, `SMALL_PHONE_CARD_TOP_MIN`, `SMALL_PHONE_CARD_TOP_MAX` — card vertical position for small phones

---

## Files Modified
- `src/components/sections/ChatWidgetSection.tsx`
- `CHANGELOG.md`

---

# Release Notes — Default Business Name & Demo Updates (March 2026)

## Summary

Default business name changed to **"Local Tree Services"** for the demo site. When no `?bizname=` URL parameter is provided, the site now displays "Local Tree Services" in the header, footer, title, and meta tags.

---

## Default Business Name

- **Before:** "Leading Care Tree Service" (or previously "Local Tree Services and Landscaping Company of Greater Houston" for testing)
- **After:** "Local Tree Services"
- **Context:** `BusinessNameContext.tsx` — `DEFAULT_BUSINESS_NAME`, `DEFAULT_TITLE`
- **Also updated:** `index.html` title, author meta, og:title; `CompanyName.tsx` JSDoc

---

# Release Notes — Header Business Name & Mobile UX (March 2026)

## Summary

Header business name improvements: mobile flex layout for consistent centering between logo and hamburger menu, unified gradient styling for all name lengths, and typography tweaks. Also includes mobile touch fixes for links/buttons and Vite config for tunnel URLs.

---

## Header Business Name

### Mobile Layout
- **Centering:** Business name uses flexbox (`flex-1`) to stay centered between logo and menu for any name length
- **Position tweak:** `pl-2 pr-4` — change `pr-4` to `pr-6`/`pr-8` to shift left, `pr-2` to shift right

### Gradient & Styling
- **Colors:** Light green top → darker green → dark olive bottom (same on mobile and desktop)
- **Per-line gradient:** `background-size` + `background-repeat: repeat-y` so multi-line names have consistent coloring

### Typography
- **Font weight:** 960 (20% heavier than extrabold)
- **Line spacing:** Desktop `leading-[1.35]`; mobile `line-height: 1.5` (adjust in `index.css`)

---

## Other Changes

### src/index.css
- **Mobile touch:** `pointer-events: none` on SVG inside links/buttons; `touch-action: manipulation` on links/buttons
- **Header styles:** `.header-business-name` mobile/desktop media queries for gradient, line-height, font-weight

### vite.config.ts
- **allowedHosts: true** — enables Cloudflare tunnel / ngrok URLs for mobile testing

---

## Files Modified
- `src/components/layout/Header.tsx`
- `src/index.css`
- `vite.config.ts`
- `CHANGELOG.md`
- `GITHUB_RELEASE_NOTES.md`

---

# Release Notes — Sarah Card Overhaul & UX Improvements (Previous)

## Summary

Major update to the ChatWidgetSection (Sarah card) with separate mobile/desktop layouts, post-close banners, scroll-to-contact behavior, and extensive positioning controls. Includes code cleanup and minor fixes to `index.html` and `src/index.css`.

---

## ChatWidgetSection (Sarah Card)

### New Behavior
- **Dual layout:** Mobile card is centered and compact; desktop card is bottom-right with full content
- **"Talk to Sarah now"** with arrow icon, positioned above the CTA button on both breakpoints
- **Contact links** (Try an agent FREE, CLAIM MY FREE TRIAL) scroll to top when user is already on `/contact` instead of reloading
- **Banners after close:** Mobile and desktop banners ("Every lead captured. Zero effort." + CLAIM MY FREE TRIAL) appear when the Sarah card is closed and persist across pages

### Tunable Constants
All positioning and sizing is controlled via constants at the top of `ChatWidgetSection.tsx`:
- Card position: `MOBILE_CARD_TOP`, `DESKTOP_CARD_BOTTOM`, `DESKTOP_CARD_RIGHT`
- Bottom trim: `DESKTOP_CARD_BOTTOM_TRIM`, `MOBILE_CARD_BOTTOM_TRIM`
- Talk/CTA offsets: `DESKTOP_TALK_MARGIN_*`, `DESKTOP_CTA_*`, `MOBILE_TALK_MARGIN_*`, `MOBILE_CTA_BUTTON_OFFSET_Y`

### Code Quality
- Extracted `handleContactClick` helper (DRY)
- TalkToSarahBlock offset props optional when `inline={true}`
- Removed redundant fallbacks in MobileBanner
- Updated comments

---

## Other Changes

### Link preview (og:image, twitter:image)
- Switched to `/logo.ico` (header logo) for link previews when sharing site URL
- Removed `public/assets/Hero_Page_Image.webp`

### index.html
- Viewport meta: `viewport-fit=cover`, `interactive-widget=resizes-visual`

### src/index.css
- Disabled `-webkit-touch-callout` on images (prevents Save/Copy popup on mobile long-press)
- Newline at EOF

---

## Files Modified
- `src/components/sections/ChatWidgetSection.tsx`
- `index.html`
- `src/index.css`
- `CHANGELOG.md`
- `public/assets/Hero_Page_Image.webp` (deleted)
