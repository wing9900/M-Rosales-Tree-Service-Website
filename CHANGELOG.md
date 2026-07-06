# Changelog

## July 5–6, 2026 — Gallery mobile fixes, cleanup, legal pages, and deploy SEO

### Gallery (`/gallery`) — mobile caption layout
- **Problem:** Tall portrait images pushed captions below the visible area on mobile; read-more expanded the panel and pushed images up.
- **Fix:** Mobile modal uses `grid-rows-[1fr_auto]`, full-viewport pinning, `max-h-full` on images, and a fixed-height caption panel (`9rem`) with in-panel scroll via shared `ReviewCarouselText`.
- **Read more:** Threshold raised to **132 characters** — only Stump Grinding and Large Tree Pruning captions get a toggle; all others show full text.
- **Desktop:** Gradient overlay captions unchanged.
- **Image crops:** `tree-removal-09.png` (Dismantling Preparation) and `tree-removal-17.png` (Complex Tree Removal) cropped ~15% from the bottom (file-level, not CSS).
- **Performance:** Both PNGs losslessly recompressed after crop (444×816 and 461×870 unchanged; ~882 KB → ~330 KB each).

### Spelling & copy
- Review quotes in `reviews.ts`: punctuation, spacing, accommodating, tree work, time formatting, possessives.
- Gallery: clients' grammar, “sail effect” wording; Contact form labels; Health Management button capitalization.
- **Stump Grinding H1:** `Professional Stump Grinding Services in Houston` (matches other service pages).
- **Tree Removal card:** “Environmentally Responsible Disposal” rewritten to focus on mulch recycling only (no overlap with debris cleanup card).

### Hero, footer, and 404
- Restored desktop **Get Free Estimate** button (`hidden sm:inline-flex`); mobile keeps separate `sm:hidden` button.
- Footer: removed broken `/privacy`, `/terms`, `/sitemap` links → re-added working **Privacy** and **Sitemap** after pages were built.
- NotFound “Browse Services” → `/#services` (no `/services` index route).

### New pages & SEO
- **`/privacy`** — Privacy Policy (contact form data, no analytics trackers, Google Maps + Facebook third-party notes).
- **`/sitemap`** — Human-readable link index (main pages, services, all 18 service areas).
- **`src/lib/siteRoutes.ts`** — Single source of truth for public URLs used by sitemap generation.
- **`sitemap.xml`** — Generated at build time when `VITE_SITE_URL` is set (see README).
- **`robots.txt`** — `Sitemap:` line appended in `dist/` on production builds with `VITE_SITE_URL`.
- Deploy workflow passes `VITE_SITE_URL: ${{ vars.SITE_URL }}` from GitHub Actions repository variable.

### Google Maps (Contact page)
- Replaced placeholder `mapsEmbedUrl` in `business.ts` with address-based embed for `1929 Coulcrest Dr, Houston, TX 77055`.

### Dead code & dev artifact cleanup (no visible change except fixes above)
- Removed unused imports (`Badge` in Gallery, `TreePine` in ServicesSection).
- Removed unused `category` / `service` fields in `GalleryPreview.tsx`.
- Removed empty blog `excerpt` fields and render block in `Blog.tsx`.
- Removed no-op `hero-content-stack` class in `HeroSection.tsx`.
- Consolidated `hoursDetail` → `hours` in `business.ts` / `Contact.tsx`.
- Made `REVIEW_EXPAND_THRESHOLD` and `previewAtWordBoundary` internal to `ReviewCarouselText.tsx`.
- Deleted `scripts/` folder and `docs/` session notes (not used by build or deploy).

### Not changed (known follow-ups)
- Contact form still uses mock `setTimeout` submit (toast only; no email backend).
- Emergency page H1 still uses an em dash (`24/7 Emergency Tree Service in Houston — …`).
- ESLint: 3 pre-existing errors (not run in CI).

---

## July 2026 — M Rosales Tree Service site update & cleanup

### Gallery preview card alignment (July 5, 2026)
- Homepage “See Our Professional Results” cards now align evenly in each row
- Fixed image area to a consistent `h-64` height; cards stretch to equal height via flex layout
- Description text reserves two lines so short copy no longer shrinks cards next to wrapped text

### Content & branding
- Centralized business info, assets, reviews, and gallery config in `src/lib/business.ts`, `reviews.ts`, and `galleryImages.ts`
- Updated hero, contact, about crew photo, FAQ copy, and service-area content for M Rosales Tree Service (Houston)
- Homepage reviews carousel: 17 verified Google reviews with read-more for long entries and local reviewer photos
- Full `/gallery` page: 14 real tree-removal job photos + stump grinding; homepage preview keeps original safe-removal and stump cards
- About page: crew photo above story; removed redundant stats block
- Orange `variant="cta"` buttons on FAQ and Services custom-quote sections (matches hero)

### Structure
- Replaced per-city area page files with dynamic `AreaPage` + `serviceAreasContent.ts`
- Removed GHL ChatWidget / Sarah card (`ChatWidgetSection.tsx`) and related dead wiring

### Cleanup (no user-facing behavior change)
- Removed 33 unused shadcn UI components, dead hooks (`use-mobile`), and `App.css`
- Deleted orphan/duplicate gallery assets, 10 unreferenced UUID PNGs, and dev script artifacts
- Removed unused exports (`hideCTA` prop, dead `ASSETS` keys, `GOOGLE_REVIEW_COUNT`)
- Removed historical internal markdown notes (kept `README.md` and this changelog)
- CSS bundle reduced ~20 KB after unused Tailwind classes were dropped

### Maintenance scripts (dev only, not wired to npm)
- ~~`scripts/copy-gallery-photos.mjs`, `crop-about-us-photo.mjs`, `fetch-reviews.mjs`, `scrape-reviews.mjs`, `download-faces.mjs`~~ **Removed July 6, 2026** (see changelog entry above)

---

## July 6, 2026 — Mobile hero + low-risk dead code cleanup

_Historical notes from earlier July 6 work. Session docs (`docs/SESSION_NOTES_2026-07-06.md`) were later removed; see top changelog entry for current state._

### Mobile hero (PR #5, branch `cursor/mobile-hero-image-cta-ed51`)
- Hero image crop on mobile: `object-[34%_50%]` (was `object-[center_52%]`) to show full truck and crew
- Desktop/tablet crop unchanged (`sm:` / `lg:` breakpoints)
- “Get Free Estimate” hero button: mobile only via `sm:hidden`; desktop hero shows “Call Now” only

### Low-risk cleanup (PR #6, branch `cursor/low-risk-dead-code-cleanup-ed51`)
- Removed 33 unused npm packages (790 → 304 installed); dropped Sonner, next-themes, React Query scaffolding
- Deleted entire `scripts/` folder and stale `google-reviews.json`
- Deleted `docs/HEADER_LAYOUT_NOTES.md`; added session notes doc
- Removed dead WebP stub in `optimized-image.tsx`, unused `BUSINESS` address fields, `isFromUrl` context export
- Fixed README (project name, port 9080); pruned invalid Tailwind content globs
- Removed unused `build:ci` npm script

### iOS Pro Max hero CTA position (PR #7, branch `cursor/hero-ios-promax-cta-ed51`)
- Wrapped reviews pill + CTA buttons in `.hero-cta-cluster` in `HeroSection.tsx`
- iOS large phones only (~420–440px width): `margin-top: 3.25rem` on cluster to reveal crew in hero photo
- Excludes Android, tablet, desktop via `@supports (-webkit-touch-callout: none)` + width/breakpoint rules
- **Iteration history:** v1 no effect (900px height rule); v2 overcorrected (`margin-top: auto`); v3 current fixed gap
- See `docs/SESSION_NOTES_2026-07-06.md` § PR #7 for full rollback and fine-tuning guide

---

## Session Updates

### ChatWidgetSection — Card Position Formula Fix & Tuning (March 2026)

**Issue:** `SMALL_PHONE_CARD_TOP_MIN` and `SMALL_PHONE_CARD_TOP_MAX` had no effect on most small phones because the formula used a hardcoded `18` and only clamped at the edges. Devices 360px+ already produced values above MIN, so changing MIN/MAX did nothing.

**Formula change:** Replaced `Math.min(MAX, Math.max(MIN, 18 + (w - 320) * 0.07))` with `MIN + (w - 320) * (MAX - MIN) / 70`. Now MIN and MAX directly define the range: at 320px width → MIN%, at 390px width → MAX%. Linear interpolation between.

**Card position tuning:** Adjusted `SMALL_PHONE_CARD_TOP_MIN` 18→25 and `SMALL_PHONE_CARD_TOP_MAX` 23→30 to move the green Sarah card lower on small phones.

**How to adjust:** Edit lines 128–129. Lower values = card higher; higher values = card lower. Formula: `pct = MIN + (width - 320) * (MAX - MIN) / 70`.

**File modified:** `src/components/sections/ChatWidgetSection.tsx`

---

### ChatWidgetSection — Small Phone Optimizations (≤390px) (March 2026)

**Scope:** All changes apply only within `@media (max-width: 390px)`. No impact on larger phones, tablets, or desktop.

**CLAIM MY FREE TRIAL (mobile banner when Sarah card closed)**
- Wrapped CTA in `banner-cta-wrapper` div with `padding-right: 100px` to avoid overlap with GHL call button
- CTA constrained to `width: 100%` of wrapper content area (reserves right zone for GHL)

**Sarah card (when open) — Talk to Sarah now + Try an agent FREE**
- Wrapped Talk block and CTA in `sarah-mobile-cta-group` with `display: flex; align-items: center` to center both above the divider
- `padding-right: 80px` on CTA group (vs 100px GHL safe zone) so "Try an agent FREE for my business" button is ~20% wider
- Talk block and CTA centered with `margin-left: 0; margin-right: 0`

**Typography & sizing (small phones only)**
- "Every lead captured. Zero effort." headline: `19px` → `18.06px` (~5% smaller) via `.banner-headline span`
- Headline position: `transform: translateY(-4px)` on `.banner-headline` to move text up within the green banner (visual shift only; does not affect banner bounds or layout)
- "No credit card required · Free setup · Cancel anytime" disclaimer: `11.05px` → `9px` (~20% smaller) via `.banner-disclaimer`

**Card position (small phones on live)**
- Sarah card was too low on first load for small phones (live only; address bar shrinks viewport). Added width-based override: when viewport width ≤ 390px, use formula (see "Card Position Formula Fix" entry for current formula). Card vertical position now controlled by `SMALL_PHONE_CARD_TOP_MIN` and `SMALL_PHONE_CARD_TOP_MAX` (lines 128–129).

**Constants added (lines 122–129)**
- `SMALL_PHONE_BREAKPOINT = "390px"`
- `SMALL_PHONE_GHL_SAFE_ZONE = "100px"`
- `SMALL_PHONE_CTA_GROUP_PADDING_RIGHT = "80px"` — lower than safe zone = wider CTA button
- `SMALL_PHONE_CARD_TOP_BREAKPOINT = 390`, `SMALL_PHONE_CARD_TOP_MIN`, `SMALL_PHONE_CARD_TOP_MAX` — card vertical position for small phones (MIN/MAX = % from top; lower = higher on screen)

**Classes added**
- `banner-cta-wrapper`, `banner-headline`, `banner-disclaimer`, `sarah-mobile-cta-group`, `sarah-talk-block`

**File modified**
- `src/components/sections/ChatWidgetSection.tsx`

---

### Responsive Design, Page Updates & Mobile Tunnel (March 2026)

**Responsive Design Audit Fixes (P0/P1)**
- `src/index.css`: Added `overflow-x: hidden` on `html` to prevent horizontal overflow on small screens (< 390px)
- `src/components/layout/Header.tsx`:
  - Removed `ml-[-8%]` from top contact bar (prevented overflow on narrow viewports)
  - Header padding: `px-2` → `px-4` on mobile
  - Added `gap-2` to header flex row
  - Logo margin: `ml-6` → `ml-2 sm:ml-4 lg:ml-8`
  - Business name: `pr-4` → `pr-2 sm:pr-4`
  - Menu button: `mr-5` → `mr-2 sm:mr-4`
- `src/components/sections/ChatWidgetSection.tsx`:
  - `BANNER_CTA_MIN_WIDTH`: `240px` → `min(240px, 85vw)` (responsive for < 390px)
  - `BANNER_CTA_MAX_WIDTH`: `280px` → `min(280px, 90vw)`
  - Mobile banner padding: fixed `55px`/`20px` → `clamp(16px, 5vw, 55px)` / `clamp(16px, 5vw, 20px)`

**Emergency Storm Response Page**
- Removed redundant EMERGENCY HOTLINE CTA button from hero section
- Hero section: `section-padding` → `section-padding-sm` (reduced vertical height)
- Paragraph `mb-8` → `mb-0`
- STORM EMERGENCY CTA: "CALL NOW: Emergency Response Team" → "Call For Emergency Response"
- Button: added `w-auto max-w-fit` to prevent excessive width (fixes Android zoom layout issue)

**About Page**
- Layout: two-column grid → single-column flex (info cards below Our Story on desktop)
- Our Story: centered heading, paragraphs, and CTA buttons (desktop + mobile)
- Info cards: centered below content with `max-w-2xl`

**Stump Grinding Page**
- Removed `animate-spin` from Cog icon in hero section

**Dev Tooling**
- `package.json`: Added `dev:tunnel` script — `npx cloudflared tunnel --url http://127.0.0.1:9080` for mobile testing (works with hotspot)
- `BACKUP_BEFORE_RESPONSIVE_FIXES.md`: Restore-point notes for reverting responsive changes if needed

**Files modified**
- `package.json`, `src/index.css`, `src/components/layout/Header.tsx`, `src/components/sections/ChatWidgetSection.tsx`
- `src/pages/About.tsx`, `src/pages/services/Emergency.tsx`, `src/pages/services/StumpGrinding.tsx`

---

### Default Business Name — Demo Site (March 2026)

**Change**
- Default business name set to **"Local Tree Services"** for demo website
- Updated when no `?bizname=` URL parameter is provided (no sessionStorage override)

**Files modified**
- `src/contexts/BusinessNameContext.tsx` — `DEFAULT_BUSINESS_NAME`, `DEFAULT_TITLE`
- `index.html` — `<title>`, `<meta name="author">`, `<meta property="og:title">`
- `src/components/CompanyName.tsx` — JSDoc comment

---

### Header Business Name — Mobile Layout, Gradient & Typography (March 2026)

**Mobile Layout (centering)**
- Restructured mobile header to use flexbox: business name now sits in a `flex-1` center section between logo and hamburger menu
- Business name is centered between logo and menu for all name lengths (short to long)
- Added `pl-2 pr-4` on mobile to fine-tune horizontal position (adjust `pr-4` to `pr-6` etc. to shift left/right)
- Desktop layout unchanged: business name remains absolutely positioned at `left-[7rem]`

**Gradient & Coloring**
- Unified gradient for mobile and desktop: `hsl(140 65% 65%)` → `hsl(140 50% 35%)` → `hsl(28 55% 17%)` (light green top, darker green middle, dark olive bottom)
- Same gradient applied per line via `background-size` + `background-repeat: repeat-y` so multi-line names have consistent coloring
- Mobile: `background-size: 100% 1lh`; desktop: `background-size: 100% 1.35em`
- Desktop text-shadow: `0 1px 2px rgba(0,0,0,0.12)`

**Typography**
- Font weight increased from 800 (extrabold) to 960 (~20% heavier) for business name
- Desktop line spacing: `sm:leading-[1.35]` (adjust in Header.tsx line 166)
- Mobile line spacing: `line-height: 1.5` in `index.css` (mobile media query)

**Files modified**
- `src/components/layout/Header.tsx` — flex layout, gradient, positioning
- `src/index.css` — `.header-business-name` mobile/desktop styles, font-weight, gradient overrides

---

### src/index.css — Mobile Touch Fixes
- `a svg, button svg { pointer-events: none }` — prevents SVG icons from blocking touch events on links/buttons (iOS/Android)
- `a, button { touch-action: manipulation }` — removes 300ms tap delay on mobile

---

### vite.config.ts
- `allowedHosts: true` — allows Cloudflare tunnel and ngrok URLs when testing on mobile (fixes "Blocked request" host error)

---

### ChatWidgetSection (Sarah Card) — Major Overhaul (March 2025)

**New Features**
- Sarah card now has separate mobile and desktop layouts (mobile: centered, compact; desktop: bottom-right, full card)
- Mobile card uses `createPortal` to render to `document.body` so it stays fixed when scrolling
- Added "Talk to Sarah now" with arrow icon (points to GHL call button)
- Swapped order on both mobile and desktop: "Talk to Sarah now" appears above "Try an agent FREE for my business"
- Contact CTAs (Try an agent FREE, CLAIM MY FREE TRIAL) scroll to top of contact page when already on `/contact` instead of re-navigating
- Mobile and desktop banners shown after closing Sarah card ("Every lead captured. Zero effort." + CLAIM MY FREE TRIAL)
- Banners persist across page navigation

**Positioning & Layout Constants (tunable)**
- `MOBILE_CARD_TOP`, `MOBILE_CARD_LEFT`, `MOBILE_CARD_TRANSFORM` — mobile card position
- `DESKTOP_CARD_BOTTOM`, `DESKTOP_CARD_RIGHT` — desktop card position
- `DESKTOP_CARD_BOTTOM_TRIM`, `MOBILE_CARD_BOTTOM_TRIM` — trim from bottom (negative = shorter)
- `DESKTOP_TALK_MARGIN_LEFT`, `DESKTOP_TALK_MARGIN_TOP` — "Talk to Sarah now" position (desktop)
- `DESKTOP_CTA_MARGIN_LEFT`, `DESKTOP_CTA_BUTTON_OFFSET_Y` — CTA button position (desktop)
- `MOBILE_TALK_MARGIN_LEFT`, `MOBILE_TALK_MARGIN_TOP` — "Talk to Sarah now" position (mobile)
- `MOBILE_CTA_BUTTON_OFFSET_Y` — CTA button vertical offset (mobile, uses transform)

**Code Quality**
- Extracted `handleContactClick` helper for scroll-to-top-on-contact behavior (used by CTALink, MobileBanner, DesktopBanner)
- Made TalkToSarahBlock offset props (`bottom`, `right`, `offsetX`, `offsetY`) optional when `inline={true}`
- Removed redundant `?? 10` / `?? 0` fallbacks in MobileBanner padding parsing
- Updated comments for offset constants (noted they apply when inline=false)

**Media Queries**
- Mobile card uses `top: MOBILE_CARD_TOP svh` in media query for viewport-stable positioning
- `.sarah-card-desktop` hidden on mobile; `.sarah-card-mobile` hidden on desktop
- `.sarah-mobile-banner` hidden on desktop; `.sarah-desktop-banner` hidden on mobile

---

### Link preview image (og:image, twitter:image)
- Switched from `/assets/Hero_Page_Image.webp` to `/logo.ico` (same as header logo/favicon)
- Deleted `public/assets/Hero_Page_Image.webp` (no longer used)
- Link previews when sharing site URL now show the logo

---

### index.html
- Viewport meta: added `viewport-fit=cover` and `interactive-widget=resizes-visual` for better mobile behavior

### src/index.css
- Disabled mobile touch callout on images (`-webkit-touch-callout: none`) to prevent Save/Copy popup on long-press
- Added newline at end of file

---

### ChatWidgetSection (Sarah Card) — Earlier Session

**Badge "Live · Available 24/7"**
- Increased brightness on both mobile and desktop (+4%): background opacity, border, dot color (#ff9542), text (#fff5e8)
- Mobile only: increased badge size by 3% (gap, padding, dot, text)
- Mobile only: shifted badge up using `transform: translateY()` (configurable via `MOBILE_BADGE_OFFSET_Y`)

**Text & Typography**
- Main heading "Your phone rings at 11pm. Sarah answers.": fontWeight 800→900 (desktop), 700→800 (mobile)
- Bullet points (No salary, Captures every call, Books your calendar): fontWeight 500→600 on both mobile and desktop
- Added configurable space between "11pm." and "Sarah answers." on mobile via `MOBILE_PHRASE_GAP`
- Added `MOBILE_PHRASE_GAP_VERTICAL` for vertical space between "Your phone rings at 11pm." and "Sarah answers." lines on mobile (default: 4px)

**Mobile Layout**
- Increased all mobile card elements by 5%: text sizes, badge, checkmarks, padding, gaps, margins
- Checkmarks scaled 1.05x on mobile via CSS

**Removed**
- Glow effect behind GHL phone icon (previously added, then removed per user request)

---

### Footer

**"View All Areas →" Bug Fix**
- Fixed link not scrolling back to service areas section when already on homepage
- Added `onClick` handler: when on `/#service-areas`, prevents default and scrolls to `#service-areas` element
- Ensures smooth scroll back to section when user has scrolled down

---

### ServiceAreasSection

- Added `scroll-mt-24` to `#service-areas` section for proper scroll offset when navigating with sticky header

---

### Other Files Modified
- `.gitignore`, `App.tsx`, `Header.tsx`, `HeroSection.tsx`, `Index.tsx`, `ServiceAreas.tsx` — various updates from project development
