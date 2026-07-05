# Version Notes

## Latest Update - January 10, 2025 (Version 1.3)

### ⚠️ IMPORTANT WARNING ⚠️  
**This version includes time zone selector, mobile background fixes, and layout improvements. If issues arise, consider reverting to previous version.**

### Changes Made:
1. **Time Zone Selector Added**:
   - Added time zone dropdown above the booking calendar on Contact page
   - Changed calendar header from "Schedule Your Service" to "Tree Service Calendar"
   - Added 6 US time zones (Eastern, Central, Mountain, Pacific, Alaska, Hawaii)
2. **Mobile Background Image Fixes**:
   - Fixed Hero section background image responsiveness for mobile/tablet
   - Added explicit `objectPosition: 'center center'` style to Hero background
   - Fixed Contact page background image styling for better mobile display
   - Removed inline Tailwind classes and used proper CSS styling
3. **Mobile Layout Improvements**:
   - Added `whitespace-nowrap` to city/state text in Hero section to keep on same line
   - Ensured "{{CITY}}, {{STATE}}" stays on one line on mobile devices

### Files Modified:
- `src/components/sections/HeroSection.tsx` - Background image mobile positioning and city/state layout
- `src/pages/Contact.tsx` - Time zone selector and background image fixes

---

## Previous Update - January 10, 2025 (Version 1.2)

### ⚠️ IMPORTANT WARNING ⚠️  
**This version includes multiple mobile responsiveness fixes. If issues arise, consider reverting to previous version.**

### Changes Made:
1. **Fixed CallButton component** - Resolved TypeScript error where component was returning void instead of JSX
2. **Mobile Menu Updates**:
   - "Call Now" button now properly positioned above "Get Quote" in mobile navigation
   - Fixed mobile sticky bottom CTA bar with proper "Get Quote" link and icon
3. **Mobile Background Image Fixes**:
   - Hero section: Improved object positioning for better mobile display
   - Contact page: Changed background position from 'center top' to 'center center' for optimal mobile viewing
4. **Contact Page Mobile Responsiveness**:
   - Fixed company name header overflow with responsive text sizes (3xl→6xl)
   - Added conditional line break for better mobile text wrapping
   - Updated calendar iframe with responsive height (500px mobile, 700px desktop)
   - Improved padding and container spacing for mobile devices

### Files Modified:
- `src/components/ui/call-button.tsx` - Fixed return statement TypeScript error
- `src/components/layout/Header.tsx` - Mobile CTA button fixes  
- `src/components/sections/HeroSection.tsx` - Background image mobile positioning
- `src/pages/Contact.tsx` - Mobile header text and calendar responsiveness
- `VERSION_NOTES.md` - This update

---

## Previous Update - December 6, 2024

### ⚠️ IMPORTANT WARNING ⚠️
**This version may contain unwanted changes. If issues arise later, consider reverting to a previous version.**

### Changes Made:
- **Updated index.html**: Complete overhaul with new SEO meta tags and chat widget positioning
  - Added professional tree services SEO title with {{COMPANY_NAME}} placeholder
  - Added comprehensive meta description for Houston tree services
  - Included OpenGraph and Twitter card meta tags
  - Added LeadConnector chat widget script with ID: 68b7c42cb832cc195dbea55a
  - Added mobile-specific CSS positioning for chat widget (bottom: 50px, right: 50px on screens ≤1024px)

### Files Modified:
- `index.html` - Complete replacement with new HTML structure

### Placeholders to Replace:
- {{COMPANY_NAME}} - Replace with actual company name
- {{PHONE}} - Replace with actual phone number

### Next Steps:
- Test chat widget functionality
- Verify SEO meta tags are working correctly
- Replace placeholder values with actual company information
- Monitor for any layout or functionality issues

---

## Previous Versions
Use Git history to revert if needed.