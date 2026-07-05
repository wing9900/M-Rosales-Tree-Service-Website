# White Header Section – Layout & Positioning Notes

**Documented before adding dynamic business name**

## Main Header (white section) – `sticky-header`

### Container
- `flex items-center justify-between py-[0.55rem] relative`
- Wrapper: `w-full px-2 lg:px-4 xl:px-6`

### Left: Logo
- **Div:** `flex items-center space-x-3 cursor-pointer ml-6 lg:ml-8`
- **Img:** `h-[3.25rem] lg:h-[3.9rem]` (52px mobile, 62px desktop)
- **Position:** Left edge + 24px (ml-6) / 32px (ml-8) padding

### Center: Desktop Navigation
- **Nav:** `hidden lg:flex items-center space-x-10 ml-16`
- **Links:** Home, About, Services, Gallery, Areas We Serve, Blog, Contact
- **Position:** 64px left margin from nav start

### Right: CTA Buttons (desktop)
- **Div:** `hidden lg:flex items-center space-x-6 lg:ml-0`
- **Buttons:** Call Now, Get Quote

### Mobile: Menu Button
- **Sheet trigger:** `lg:hidden mr-5`
- **Position:** Right side, 20px margin

### Height
- Determined by logo height (3.25rem / 3.9rem) + vertical padding (0.55rem × 2)
