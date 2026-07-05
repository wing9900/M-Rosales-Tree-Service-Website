# Dynamic Version Changelog

This document describes all changes made to create the **dynamic** version of the tree service website, compared to the previous static version.

---

## Overview

The dynamic version adds support for:
- **Dynamic business name** from URL parameter (`?bizname=...`)
- **GHL (GoHighLevel) Web Call integration** for voice chat metadata
- **Session persistence** of business name across page navigation
- **Mobile header improvements** for long business names

---

## 1. Dynamic Business Name System

### New Files

| File | Purpose |
|------|---------|
| `src/contexts/BusinessNameContext.tsx` | React context that reads `bizname` from URL, stores in state, persists to `sessionStorage`, updates `document.title`, and calls `window.ghlWebCall.setMetadata()` for GHL voice agent |
| `src/components/CompanyName.tsx` | Reusable component that renders the business name from context |

### How It Works

- **URL parameter:** `?bizname=Oak+Tree+Pros` (or any business name, URL-encoded)
- **Default:** `"Leading Care Tree Service"` when no `bizname` is provided
- **Persistence:** Business name is stored in `sessionStorage` and survives navigation within the site
- **GHL integration:** Calls `window.ghlWebCall.setMetadata({ business_name: ... })` with 1.5s retry for voice chat widget

### Where Business Name Is Used

- **Header:** Next to logo (with gradient styling)
- **Footer:** Company name and copyright
- **Hero sections:** Contact, About pages
- **Service pages:** TreeRemoval, TreeTrimming, StumpGrinding, LandClearing, HealthManagement
- **Area pages:** Houston, Katy, Sugar Land, Richmond, Rosenberg, Fulshear
- **GalleryPreview:** "trusted choice" text

---

## 2. Header Changes

### Business Name Styling

- **Position:** Absolutely positioned to the right of the logo
- **Gradient:** Vertical green → brown (`hsl(140 65% 62%)` → `hsl(28 55% 28%)`)
- **Font:** Uppercase, `font-extrabold`, `tracking-tight`
- **Responsive sizing:** Scales by name length (≤28 chars largest, 51+ smallest)
- **Mobile:** Tighter line-height (`leading-[0.75]`) so long names fit in the header without clipping

### Removed

- GHL bizname script from `index.html` (moved to React context)

---

## 3. Footer Changes

### Reviews Link

- **Reviews link** now scrolls to "What Our Clients Say" section (`#reviews`)
- Uses header-aware scroll logic (accounts for sticky header height)
- Only prevents default when already on the same page+hash (re-click to scroll)
- Otherwise navigates to `/#reviews` and `ScrollToTop` handles the scroll

### Scroll Logic

- Added `scrollToHashWithOffset()` for consistent scroll positioning when re-clicking hash links
- Reviews section has `scroll-mt-32` for proper offset below header

---

## 4. App / Scroll Behavior

### ScrollToTop Component

- **Hash scroll:** `#reviews` scrolls to "What Our Clients Say" with proper header offset
- **Retry logic:** Retries up to 40 times (100ms apart) if element not yet in DOM
- **Delay:** 300ms delay when navigating from another page to ensure DOM is ready
- **Header offset:** Calculates sticky header + top bar height for accurate scroll position

---

## 5. Service Pages

### Health Management

- Phone CTA: "Schedule Tree Assessment" → "Call For Assessment"
- Calendar CTA: "Get Health Consultation" → "Schedule An Assessment"

### Other Service Pages

- All use `<CompanyName />` for dynamic business name in hero titles

---

## 6. Vite / Dev Config

### Mobile Preview

- `host: true` in `server` and `preview` config to expose dev server on network
- `npm run dev:mobile` script for explicit `--host` flag
- Access from phone: `http://<your-local-IP>:9080`

---

## 7. Files Modified (Summary)

| Category | Files |
|---------|-------|
| **New** | `src/contexts/BusinessNameContext.tsx`, `src/components/CompanyName.tsx` |
| **Layout** | `src/App.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx` |
| **Sections** | `src/components/sections/GalleryPreview.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/ServicesSection.tsx`, `src/components/sections/WhyChooseUsSection.tsx` |
| **Pages** | `src/pages/About.tsx`, `src/pages/Contact.tsx`, all area pages, all service pages |
| **Config** | `package.json`, `vite.config.ts`, `src/index.css` |

---

## 8. Testing Dynamic Business Name

- **Short name:** `?bizname=Oak+Tree+Pros`
- **Long name:** `?bizname=Super+Professional+Tree+Services+and+Landscaping+Company+of+Greater+Houston`
- **Default:** No parameter = "Leading Care Tree Service"

---

## 9. What Stayed the Same

- Overall design, colors, and layout
- All routes and page structure
- GHL voice chat widget (still loads from `index.html`; metadata now set by React context)
- Service cards, gallery, FAQ, contact forms
- Original repo (`tree-company-custom-website`) was **not** modified; this version lives in `DYNAMIC-custom-tree-service-website`
