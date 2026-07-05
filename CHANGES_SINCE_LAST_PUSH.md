# Changes Since Last GitHub Push

> **IF USER SAYS "GO BACK TO THE VERSION FROM OUR LAST GITHUB PUSH":** Run `git restore .` to revert all uncommitted changes and restore the last pushed version.

---

**Last pushed commit:** `03f1f99` — Link preview: use logo.ico for og:image/twitter:image, remove Hero_Page_Image.webp

**Branch:** main (tracks dynamic/main)

---

## Uncommitted Changes (not yet pushed)

### Header Business Name & Mobile UX (March 2026) — TO BE PUSHED
- **Header.tsx:** Flex layout for mobile centering; gradient; pl-2 pr-4; sm:leading-[1.35]
- **index.css:** .header-business-name mobile/desktop styles; font-weight 960; gradient per line; mobile touch fixes (pointer-events, touch-action)
- **vite.config.ts:** allowedHosts: true for tunnel URLs
- **CHANGELOG.md, GITHUB_RELEASE_NOTES.md:** Updated with session notes

---

### 1. index.html — GHL Voice Chat Widget: bizname URL parameter support (if still uncommitted)

**What changed:** Added a second script block after the GHL loader that:
- Listens for the `load` event
- Reads `bizname` from the URL query string (e.g. `?bizname=Oak+Tree+Pros`)
- Passes it to the AI Voice Agent via `window.ghlWebCall.setMetadata({ business_name: ... })`
- Updates any elements with class `company-name` to display the business name

**Exact addition (lines 32–51):**
```html
    <script>
window.addEventListener('load', function() {
    // 1. Grab the business name from your Loom link (?bizname=Oak+Tree+Pros)
    const urlParams = new URLSearchParams(window.location.search);
    const bizName = urlParams.get('bizname');

    if (bizName) {
        // 2. Pass the name to the AI Voice Agent
        window.ghlWebCall.setMetadata({
            business_name: decodeURIComponent(bizName)
        });

        // 3. Optional: Update any text on your page with the class "company-name"
        const elements = document.querySelectorAll('.company-name');
        elements.forEach(el => {
            el.innerText = decodeURIComponent(bizName);
        });
    }
});
</script>
```

**Files modified:** `index.html` only

---

## How to Revert (undo all changes since last push)

To discard all uncommitted changes and return to the last pushed version:

```bash
git restore index.html
```

Or to revert everything in the working directory:

```bash
git restore .
```

To verify you're back to the last pushed state:

```bash
git status
# Should show: "nothing to commit, working tree clean"
```

---

## Summary

| Item | Status |
|------|--------|
| Last pushed commit | `03f1f99` |
| Uncommitted changes | 1 file: `index.html` |
| Change type | Addition (bizname script for GHL widget) |
