# Backup: Code State Before Responsive Design Fixes

**Date:** March 19, 2026  
**Purpose:** Restore point if responsive fixes cause issues. Revert by copying these sections back into the respective files.

---

## 1. src/index.css — Key Sections to Restore

### body (lines 141-145)
```css
  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
```

### html (lines 146-148)
```css
  html {
    scroll-behavior: smooth;
  }
```

**Note:** No `overflow-x: hidden` exists. If we add it, remove to revert.

### Full html + body block (for full restore)
```css
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
```

---

## 2. src/components/layout/Header.tsx — Key Sections to Restore

### Top Contact Bar - Middle div (lines 96-100)
```tsx
            <div className="hidden md:flex flex-1 justify-center">
              <span className="text-sm md:text-base ml-[-8%]">
                Licensed & Insured • Emergency Services Available 24/7
              </span>
            </div>
```

### Main Header wrapper (line 117)
```tsx
        <div className="w-full px-2 lg:px-4 xl:px-6">
```

### Header flex row (line 118)
```tsx
          <div className="flex items-center justify-between py-[0.55rem] relative overflow-visible lg:overflow-hidden">
```

### Logo div (line 119)
```tsx
            <div 
              className="flex flex-shrink-0 items-center space-x-3 cursor-pointer ml-6 lg:ml-8" 
```

### Business name div (line 144)
```tsx
              className="header-business-name flex flex-1 min-w-0 justify-center items-center pl-2 pr-4 lg:flex-none lg:absolute lg:left-[7rem] lg:top-1/2 lg:-translate-y-1/2 lg:w-[300px] lg:translate-x-0 lg:justify-start lg:pl-0 lg:pr-0 cursor-pointer"
```

### Mobile Menu Button (line 254)
```tsx
              <SheetTrigger asChild className="flex-shrink-0 lg:hidden mr-5">
```

---

## 3. src/components/sections/ChatWidgetSection.tsx — Key Constants & MobileBanner

### Banner CTA constants (lines 117-119)
```ts
const BANNER_CTA_MIN_WIDTH = "240px";
const BANNER_CTA_MAX_WIDTH = "280px";
const BANNER_CTA_PADDING = "10px 20px";
```

### MobileBanner padding (line 230)
```ts
      padding: `${paddingPx + extraTop}px 55px calc(60px + env(safe-area-inset-bottom, 0px)) 20px`,
```

### MobileBanner CTA Link style (lines 254-258)
```ts
        width: BANNER_CTA_MAX_WIDTH,
        minWidth: BANNER_CTA_MIN_WIDTH,
        flexShrink: 0,
```

---

## Git Revert Command

If changes are committed and you need to revert the entire responsive fix commit:
```bash
git revert <commit-hash> --no-edit
git push dynamic main
```

To see recent commits:
```bash
git log --oneline -5
```
