# Changelog: Header, Contact, and Related Updates

Reference for changes made to the header, contact page, and related files. Use this to adjust layout or revert specific edits.

---

## Logo, favicon, and header layout (March 2025)

### Logo and favicon

- **Favicon (browser tab):** `index.html` line 6 — `<link rel="icon" type="image/x-icon" href="/logo.ico" />`. Replaces previous default/Lovable favicon.
- **Logo image in header:** `Header.tsx` — text “Leading Care Tree Service” replaced with `<img src="/logo.ico" alt="Leading Care Tree Service" />`. Logo lives at `public/logo.ico`.
- **Logo size:** `Header.tsx` line 124 — `className="h-[3.25rem] lg:h-[3.9rem] w-auto object-contain"` (~30% larger than original; mobile 3.25rem, desktop 3.9rem). To resize: change the `h-[…]` values (e.g. 10% larger: multiply by 1.1).
- **Removed:** `public/favicon.ico` (old), `public/placeholder.svg` (unused). Logo is now the single `public/logo.ico`.
- **Project name:** `package.json` — `name` set to `"tree-company-custom-website"`.

### Green bar (top contact bar) — `Header.tsx`

| What | Line | Current class / note | How to adjust |
|------|------|----------------------|----------------|
| **123-456-7890** | 76 | `md:-ml-1` on wrapper div | More left: `md:-ml-2`, `md:-ml-4`. More right: `md:ml-0`, `md:ml-2`. |
| **Licensed & Insured • Emergency Services Available 24/7** | 84 | `ml-[-8%]` on span | More left: `ml-[-10%]`, etc. More right: `ml-[5%]`, `ml-[10%]`. |
| **Pasadena, TX** | 92 | `ml-8 mr-[3%]` on inner div | More right: `ml-10`, `ml-12`. More left: `ml-6`, `ml-4`. |

### White header bar — `Header.tsx`

| What | Line | Current class / note | How to adjust |
|------|------|----------------------|----------------|
| **Bar height (thickness)** | 104 | `py-[0.55rem]` on row div | Thinner: `py-[0.5rem]`. Thicker: `py-[0.6rem]`, `py-4`. Only the `py-*` controls height. |
| **Logo (home) position** | 107 | `ml-6 lg:ml-8` on logo wrapper | More right: `ml-8 lg:ml-10`. More left: `ml-4 lg:ml-6`, or remove. |
| **Nav links (Home, About, Services, …)** | 129 | `space-x-10 ml-16` on `<nav>` | More right: `ml-20`, `ml-24`. More left: `ml-12`, `ml-8`. Only `ml-*` moves the group. |
| **Mobile menu button (hamburger)** | 200 | `lg:hidden mr-5` on SheetTrigger | More left: `mr-6`, `mr-8`. Closer to right edge: `mr-3`, `mr-0`. Only `mr-*` affects position. |

---

## Header typography and nav active state (March 2025)

**File:** `src/components/layout/Header.tsx`

Summary of changes: (1) Logo, top bar text, nav links, and CTA buttons made larger on desktop (or globally for nav/CTAs); (2) Nav active/underline logic fixed so only one item is active and it updates correctly on click; (3) Scroll-spy removed; (4) Home and logo navigation now clear the URL hash so “Home” shows as active when returning to the homepage.

### Typography (desktop only where noted; `lg:` = 1024px+)

- **Logo (“Leading Care Tree Service”):** Mobile stays `text-2xl`; desktop uses `lg:text-[1.575rem]` (~5% larger than 1.5rem). Applied to the logo div (approx. line 121).
- **Top contact bar (green bar):** Phone, “Licensed & Insured • Emergency Services Available 24/7”, and “Pasadena, TX” use `lg:text-[1.03rem] lg:font-bold` so they are 3% larger and bold on desktop only. Applied to the bar container (approx. line 71).
- **Nav links (Home, About, Services, Gallery, Areas We Serve, Blog, Contact):** Size is `text-[1.082rem]` in all six places (desktop Services button, desktop Home link, desktop other Links, mobile Services link, mobile Home link, mobile other Links). This is ~6% larger than the original 1.02rem (1.02 → 1.0506 → 1.082). To change again: use `current × (1 + percent/100)` (e.g. from 1.082, 3% larger → `1.082 × 1.03 ≈ 1.114rem`).
- **Call Now / Get Quote buttons:** Added `text-[0.893rem]` (~2% larger than default `sm` 0.875rem) to both desktop CTAs. To change: use `0.875 × (1 + percent/100)` (e.g. 5% → `0.919rem`).

### Nav underline (active state)

- **Logic:** Active state is driven by `isActive(path)` using normalized `location.pathname` and hash (strip leading `#` for comparison). Only one item is active at a time.
- **Home:** Active only when `pathname === '/'` and there is **no** hash. If the URL has `#services` or `#service-areas`, Home is not active.
- **Services / Areas We Serve:** Active when `pathname === '/'` and the hash matches (`services` or `service-areas`).
- **Other pages (About, Gallery, Blog, Contact):** Active when `pathname` equals the link path (e.g. `/contact`).
- **Scroll-spy removed:** The feature that updated the hash (and underline) on scroll was removed; the underline now updates only on click/navigation.

### Clearing hash when going to Home

- **Why:** Clicking Home or the logo with a plain `to="/"` or `navigate('/')` did not clear the hash, so the URL could stay `/#services` and “Services” stayed underlined.
- **Logo click:** Uses `navigate({ pathname: '/', hash: '' }, { replace: false })` so the hash is cleared and Home shows as active.
- **Home link (desktop):** Rendered separately with `to={{ pathname: '/', hash: '' }}` so the link always goes to `/` with no hash.
- **Home link (mobile menu):** Same `to={{ pathname: '/', hash: '' }}` in the sheet so behavior matches desktop.
- **Scroll-to-top:** When already on `/` with no hash, clicking Home or the logo prevents default and scrolls to top instead of navigating.

---

## Sidebar removal and footer copyright (recent)

**Date:** March 2025

### Changes made

1. **Removed unused sidebar component**
   - **Deleted:** `src/components/ui/sidebar.tsx` (entire file).
   - The sidebar was not used anywhere in the app. The mobile navigation uses `Sheet` in `Header.tsx`; no layout or page imported from `@/components/ui/sidebar`. Removing it reduces dead code and eliminates the unused dependency.

2. **Removed sidebar CSS variables**
   - **File:** `src/index.css`
   - **In `:root`:** Removed `--sidebar-background`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`.
   - **In `.dark`:** Removed the same set of sidebar variables under the dark theme block.
   - These variables were only referenced by the removed sidebar component.

3. **Updated footer copyright**
   - **File:** `src/components/layout/Footer.tsx`
   - **Change:** Bottom bar copyright text updated from `© 2024 Leading Care Tree Service. All rights reserved.` to `© 2024–2025 Leading Care Tree Service. All rights reserved.`
   - **Location:** Bottom bar of the footer (approx. line 216).

### Left unchanged (per request)

- Service area, phone number, and business name placeholders (e.g. `[Tree Service Company Name]`, `123-456-7890`, `{{EMAIL}}`) were not modified.
- "ORIGINAL" / "CURRENT" / "Mobile:" comments in `HeroSection.tsx` were left in place.
- Other previously identified items (broken links, lint fixes, `App.css`, etc.) were not changed.

---

## Chat widget (Go High Level / Lead Connector) — March 2026

### What’s in the repo

- **Single embed:** The only voice/chat widget code is one script tag in `index.html` (lines 28–32). No custom CSS, no React components, no wrapper.
- **Widget ID:** `69aa4567d72daad629a92a35` (beta Lead Connector chat widget).
- **Script URL:** `https://beta.leadconnectorhq.com/loader.js` with `data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"`.

### Location in code

| What | File | Lines |
|------|------|--------|
| Chat widget script | `index.html` | 28–32 |
| Booking widget (different) | `src/pages/Contact.tsx` | ~147 (iframe; not the voice chat) |

### Script order (important)

- The GHL script is placed **before** the React app script (`main.tsx`). The loader uses `document.currentScript` to read `data-widget-id` and other attributes. If the GHL script runs after the React script (or is injected dynamically in some setups), the widget can fail to load.
- **Do not** move the GHL script to after `main.tsx` unless you use a delayed inject that still allows the loader to see the script element when it runs.

### What was removed for a fresh start

- All previous voice/chat widget embeds (old widget IDs, setTimeout injects, custom z-index/overflow CSS).
- Any `ChatWidgetSection` or green “Sarah answers” card component (deleted earlier).
- No DNS prefetch or other head/body code for the chat widget; only the one script tag.

### Replacing the widget

To switch to a new GHL chat widget:

1. In `index.html`, replace the script tag in the body (the one with `beta.leadconnectorhq.com/loader.js`).
2. Update only the three attributes as needed: `src`, `data-resources-url`, `data-widget-id`. Keep the script **before** `<script type="module" src="/src/main.tsx"></script>`.
3. Do not add a second chat widget script (e.g. from `widgets.leadconnectorhq.com`); one loader per chat widget.

### Greeting bubble (for reference)

If the greeting/text bubble does not show while the launcher button does, the cause is usually (1) Go High Level settings (greeting message and “show again” / next-prompt timer in Sites → Chat Widget), or (2) stacking/visibility on the page. This repo does not add any custom CSS for the widget; add minimal rules only if the widget is hidden behind the header.

---

## Sarah card (widget background) — March 2026

**File:** `src/components/sections/ChatWidgetSection.tsx`  
**Usage:** Imported and rendered on the homepage in `src/pages/Index.tsx` (after `FAQSection`). Fixed in the bottom-right so it sits behind/under the GHL chat widget button.

### What it is

- A compact fixed card (“Sarah card”) that promotes the AI receptionist and sits behind the green chat widget button.
- Contains: “Live · Available 24/7” badge (with pulse), headline “Your phone rings at 11pm. Sarah answers.”, three checkmark bullets, a short divider, and a CTA link “Want this for your business?” (underlined, links to `/contact`).
- Close button (×) hides the card for the session (React state).
- Hidden on viewports ≤640px via CSS class `.sarah-card`.

### Bullet order (checkmark lines)

1. No salary, no sick days, no hassle  
2. Captures every call and website lead  
3. Books your calendar and notifies you instantly  

### How to adjust the card (dimensions and position)

All of the following are in the main card `div` style object in `ChatWidgetSection.tsx`:

| What | Line | Property | Example values |
|------|------|----------|----------------|
| **Up/down** | 37 | `bottom: "12px"` | Higher = move up (e.g. `"24px"`). Lower = move down (e.g. `"8px"`). |
| **Left/right** | 38 | `right: "11px"` | Higher = move left. Lower = move right. |
| **Card width** | 39 | `width: "300px"` | e.g. `"280px"` (narrower), `"320px"` (wider). |
| **Internal spacing** | 43 | `padding: "14px 16px"` | First = top/bottom, second = left/right. |
| **Corner roundness** | 42 | `borderRadius: "16px"` | Smaller = sharper corners. |

### How to adjust the divider above the CTA

- **Line 145:** `marginRight: "28px"` — shortens the line so it doesn’t run behind the widget button. Increase to shorten the line further; decrease to lengthen it.

### How to adjust the check marks (size and position)

- **Check mark size:** In the `CheckIcon` component at the **top of the file** (lines 4–14):
  - **Line 5:** `width="10"` and `height="8"` — increase for a bigger icon (e.g. `width="12"` `height="10"`).
  - **Line 9:** `strokeWidth="1.8"` — increase for a thicker check (e.g. `"2.2"`).
- **Space between check and text:** On **lines 120, 126, 132** (each bullet row), the object has `gap: "8px"`. Increase to move the icon farther from the text; decrease to bring it closer.
- **Check mark up/down:** Wrap `<CheckIcon />` in a span with `style={{ transform: "translateY(1px)" }}` to nudge down, or `translateY(-1px)` to nudge up.

### index.html changes (March 2026)

- **Twitter site meta removed:** `<meta name="twitter:site" content="@gulfcoasttree" />` was removed so shared links are not attributed to another business’s Twitter handle.
- **Chat widget position CSS removed:** A `<style>` block that tried to position the GHL chat button (desktop vs mobile) was removed; it did not reliably move the widget. Widget placement is left to GHL defaults.

### Sarah card tweaks (March 2026)

- **Mobile visibility:** The card is **hidden on viewports ≤640px** via `.sarah-card { display: none !important; }` in a `@media (max-width: 640px)` block (lines 27–29). It was briefly shown on mobile then reverted.
- **Bullet text styling:** The three checkmark lines use `color: "rgba(255,255,255,1)"` (full white) and `fontWeight: 500` so they are slightly bolder than normal without competing with the headline (`fontWeight: 800`). To soften: use `rgba(255,255,255,0.9)` and/or remove `fontWeight` or set to `400`. To emphasize more: use `600`.
- **Card width:** Main card `div` uses `width: "340px"` (line 38). Adjust there to make the card narrower or wider.

---

## Booking calendar (Contact page) — March 2026

**File:** `src/pages/Contact.tsx` (Booking Calendar - Right Side, ~lines 144–154)

### Current embed

- **Widget URL:** `https://api.leadconnectorhq.com/widget/booking/Opssx8ON48iWulrY0I2b`
- **iframe id:** `Opssx8ON48iWulrY0I2b_1772871842799`
- **Dimensions:** `width: '100%'`, `height: '800px'` so the calendar and “Enter Details” form fit in a fixed-height area.
- **Scrolling:** `scrolling="yes"` and `style={{ overflow: 'auto' }}` so the **entire widget content** (calendar, then form) scrolls inside the iframe. The browser’s scrollbar appears on the iframe when content is taller than 800px. No outer wrapper or custom scrollbar; scrolling is handled inside the iframe only.
- **Script:** `https://link.msgsndr.com/js/form_embed.js` is included in a `<script>` tag immediately after the iframe (required for the booking form behavior).

### Replacing the booking widget

1. In `Contact.tsx`, locate the iframe in the “Booking Calendar - Right Side” block.
2. Replace the `src` URL with the new booking widget URL from GHL/Lead Connector (format: `https://api.leadconnectorhq.com/widget/booking/{widgetId}`).
3. Update the iframe `id` to match the value provided by GHL (often `{widgetId}_{timestamp}`).
4. Keep `scrolling="yes"` and `overflow: 'auto'` so users can scroll to the form and submit. Leave the form_embed.js script in place.

### Note on “Work Description” and widget content

- The “Work Description” text area and other fields inside the booking form are rendered by the GHL widget (inside the iframe). Their default size, placeholder text, and validation cannot be changed from this repo; adjust them in the Go High Level / Lead Connector booking form settings.

---

## Mobile menu (sheet) and header — March 2026

### Green strip (top contact bar) on mobile only

- **File:** `src/components/layout/Header.tsx`
- **Change:** The top green bar (`#top-contact-bar`) has `hidden lg:block` in its `className`. It is **hidden on viewports below 1024px** (mobile/tablet) and **visible at lg and above** (desktop). On mobile, the white header and page content sit at the top with no green strip. `getHeaderOffset()` still uses the bar's height when present; when hidden, its height is 0 so scroll offset remains correct.

### White menu box (sheet) — size, position, corners

- **File:** `src/components/ui/sheet.tsx` — left/right variants (lines 39 and 41).
- **Position:** `top-0` so the panel is flush with the top of the viewport on all breakpoints.
- **Width:** `w-[min(260px,75vw)] max-w-[260px]` — at most 260px; on narrow viewports uses 75% of viewport width.
- **Height:** `h-[56vh] max-h-[min(56vh,473px)]` — 56% of viewport height, capped at 473px on tall viewports so the menu doesn't get too long on desktop/narrowed window. Mobile (shorter viewport) is unaffected by the cap.
- **Corners:** Rounded except top-right: `rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none` (right panel). Left panel uses the opposite (rounded except top-left).
- **Scrolling:** `overflow-y-auto` so the menu content scrolls when it exceeds the height.
- **Close button:** Built-in Sheet close (X) is `absolute right-5 top-6` in `sheet.tsx` (line 66). No custom close button; the default Radix/shadcn close is used.

### Mobile menu trigger (hamburger)

- **File:** `src/components/layout/Header.tsx` — Sheet and SheetTrigger (around lines 199–205).
- **Sheet:** `open={isOpen} onOpenChange={setIsOpen}` only; no refs, blur, or repaint logic.
- **Button:** `<Button variant="outline" size="icon">` with no id or extra `className`. Visible only when the sheet is used (`lg:hidden` on SheetTrigger).

### Blue-button fix attempts reverted

- Multiple attempts were made to fix a persistent blue highlight on the hamburger after closing the sheet on mobile (focus/ring overrides, ref + blur, repaint trick, custom close on the left, pointer-events-none, etc.). All of that code has been **removed**. The implementation is back to the default: plain Sheet with `setIsOpen`, outline Button, and the built-in Sheet close (X). No related overrides remain in `Header.tsx`, `sheet.tsx`, or `index.css`.

---

## Hero and deployment fixes — March 2026

### Hero “Get Free Estimate” button (404 fix)

- **File:** `src/components/sections/HeroSection.tsx`
- **Problem:** The button used `<a href="/contact">`, which triggers a full page request to `/contact`. On the live host (e.g. Vercel), there is no file at that path, so the server returned **404 NOT_FOUND** when the button was clicked or the URL was opened directly.
- **Fix:** Replaced the anchor with React Router’s `<Link to="/contact">` so navigation is client-side. The Contact page now loads without a 404. The `Link` import was added from `react-router-dom`.
- **Location:** The CTA button with the Calendar icon and “Get Free Estimate” text (around lines 108–113). Do not revert to `<a href="/contact">` for this button.

### Vercel SPA routing (404 on refresh fix)

- **File:** `vercel.json` (project root)
- **Problem:** Refreshing or opening a direct link to a route (e.g. `/contact`, `/about`) on the live site caused **404 NOT_FOUND** because Vercel looks for a file at that path; in an SPA, routes exist only in the client.
- **Fix:** Added a rewrite so all requests are served `index.html`, allowing the React app to load and React Router to handle the route:
  ```json
  {
    "rewrites": [
      {"source": "/(.*)", "destination": "/index.html"}
    ]
  }
  ```
- **Note:** After deploying, Vercel will serve `index.html` for every path, so refresh and direct links work. Do not remove `vercel.json` or the `rewrites` entry without replacing it with an equivalent SPA fallback (e.g. same rule in another host’s config).

---

## 1. Header (`src/components/layout/Header.tsx`)

### Top contact bar (green bar)

- **Layout:** Three-column flex, same structure as the white header below.
- **Container:** Full-width with `w-full px-2 lg:px-4 xl:px-6` (no `container-custom` max-width so logo/CTAs can sit near edges).

| Column   | Content | Location / Notes |
|----------|---------|-------------------|
| **Left** | Phone: `123-456-7890` (with icon) | Line 76. Use `md:ml-*` or `md:-ml-*` to move phone left/right. See “Logo, favicon, and header layout” section above for current values. |
| **Middle** | `Licensed & Insured • Emergency Services Available 24/7` | Line 84. Use `ml-[…%]` or negative % to nudge. See table above. |
| **Right** | `Pasadena, TX` (with icon) | Line 92. Use `ml-*` and `mr-[%]` on inner div. See table above. |

**Key lines (see “Logo, favicon, and header layout” section for full table):**

- **72:** Green bar container.
- **76:** Phone column.
- **84:** Trust text span.
- **92:** Pasadena wrapper.

### Main header (white bar)

- **Container:** `w-full px-2 lg:px-4 xl:px-6`.
- **Row:** Line 104 — `py-[0.55rem]` controls bar height; logo left, nav center, CTAs right.
- **Logo:** Line 107 — image `logo.ico` with `ml-6 lg:ml-8`; line 124 sets size `h-[3.25rem] lg:h-[3.9rem]`.
- **Desktop nav:** Line 129 — `space-x-10 ml-16`; change `ml-*` to move nav group.
- **CTA buttons:** Wrapper with `space-x-6`, `lg:ml-0`.
- **Mobile menu button:** Line 200 — `lg:hidden mr-5`; change `mr-*` to move hamburger.

**Key lines (approximate):**

- **102:** Main header container padding.
- **133:** Nav — `space-x-6` for link spacing; link classes for size/weight.
- **164:** CTA wrapper — `space-x-6` between buttons; `lg:ml-0` for right-edge alignment.
- **187:** Mobile menu trigger — `mr-3` for tap area; remove or reduce to bring button closer to edge.

---

## 2. Contact page (`src/pages/Contact.tsx`)

- **Hours heading:** “Hour of Operation” → “Hours of Operation” (line ~219).
- **Booking calendar:** GHL booking widget embed (iframe + form_embed.js). See “Booking calendar (Contact page) — March 2026” above for widget ID, scrolling behavior, and how to replace.

---

## 3. Services section (`src/components/sections/ServicesSection.tsx`)

- **Emergency Storm Response card:** Service image uses stronger brightness/saturation: `brightness-[1.35] saturate-110` when `service.title === "Emergency Storm Response"`, otherwise `brightness-110`.
- **Line:** ~76 (inside the `className` for `OptimizedImage`).

---

## 4. Global CSS (`src/index.css`)

- **`.container-custom`:** `lg:px-8` → `lg:px-0` so large screens have no horizontal padding from this class. Scope: `@layer utilities`; also changed from `.container-custom` (nested) to `.container-custom` at root for the rule.
- **Line:** ~269–271.

---

## 5. Blog page (`src/pages/Blog.tsx`)

- **Post excerpts:** Two blog posts had their `excerpt` set to empty string `""` (were previously longer copy with Houston links/text).
- **Lines:** ~10 and ~81 (inside the post objects).

---

## Quick reference: “Where do I change…?”

| Goal | File | Where |
|------|------|--------|
| Phone position (green bar) | Header.tsx | Line ~75, `md:ml-*` on left column |
| Trust line position (green bar) | Header.tsx | Line ~84, `ml-[10%]` on span |
| Pasadena, TX position (green bar) | Header.tsx | Line ~91, `ml-6 mr-[5%]` on wrapper |
| Logo / nav / CTA spacing (white bar) | Header.tsx | Lines ~102, 133, 164 |
| Mobile menu button spacing | Header.tsx | Line ~187, `mr-3` on SheetTrigger |
| Contact “Hours” label | Contact.tsx | Line ~219 |
| Emergency card image look | ServicesSection.tsx | Line ~76 |
| Site-wide container padding (lg) | index.css | Line ~270 |
| Blog excerpt text | Blog.tsx | Lines ~10, ~81 |
| Chat widget (GHL) | index.html | Lines 28–32; see “Chat widget” section above |
| Sarah card (position, size, divider, checkmarks) | ChatWidgetSection.tsx | See “Sarah card (widget background)” section above |
| Booking calendar (widget URL, height, scrolling) | Contact.tsx | ~lines 144–154; see “Booking calendar (Contact page)” section above |
| Green strip visibility (mobile vs desktop) | Header.tsx | top-contact-bar: `hidden lg:block`; see "Mobile menu (sheet) and header" section above |
| White menu box (sheet) size, position, corners, height cap | sheet.tsx | Lines 39, 41 (left/right variants); see "Mobile menu (sheet) and header" section above |
| Hero “Get Free Estimate” button (link to Contact) | HeroSection.tsx | ~lines 109–113; use `<Link to="/contact">` not `<a href="/contact">` |
| Vercel SPA routing (fix 404 on refresh) | vercel.json | Root; `rewrites` to `/index.html` |

---

*Last updated to match repo state at time of push.*
