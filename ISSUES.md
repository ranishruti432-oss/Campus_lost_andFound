# Starter Issues (copy each into GitHub)

Format per issue: **Title** / Description / Changes / Acceptance / Files / Difficulty / Labels

---
### 1. Sort items by date (newest/oldest)
**Description:** Browse shows items in saved order only. **Changes:** Add a "Sort by" dropdown and sort inside `getFilteredItems()`. **Acceptance:** Newest/oldest options work together with search and filters. **Files:** `index.html`, `js/app.js` **Difficulty:** Beginner **Labels:** `enhancement`, `good first issue`, `javascript`

### 2. Highlight search matches in cards
**Description:** Show users why an item matched. **Changes:** Wrap matched text in `<mark>` in card titles. **Acceptance:** Case-insensitive, no HTML injection (use `escapeHTML`). **Files:** `js/app.js`, `css/style.css` **Difficulty:** Intermediate **Labels:** `enhancement`, `javascript`

### 3. Turn the location filter into a dropdown
**Description:** Free-text location filter is easy to mistype. **Changes:** Build a dropdown from locations in saved items. **Acceptance:** Dropdown updates after new reports; "All locations" option exists. **Files:** `index.html`, `js/app.js` **Difficulty:** Intermediate **Labels:** `enhancement`, `javascript`

### 4. Add a "Clear filters" button
**Description:** Users must reset each filter manually. **Changes:** Add a button that empties search and all filters, then re-renders. **Acceptance:** One click restores the full list. **Files:** `index.html`, `js/app.js` **Difficulty:** Beginner **Labels:** `good first issue`, `enhancement`

### 5. Show a status filter (Active / Resolved)
**Description:** Resolved items clutter the list. **Changes:** Add a status filter defaulting to Active. **Acceptance:** Resolved items hidden by default but viewable. **Files:** `index.html`, `js/app.js` **Difficulty:** Beginner **Labels:** `enhancement`, `good first issue`

### 6. Stronger form validation
**Description:** Currently only checks for empty fields. **Changes:** Validate contact (email or 10-digit phone), block future dates, minimum description length. **Acceptance:** Clear error text under each field; invalid data is never saved. **Files:** `js/app.js` (`validateForm`) **Difficulty:** Intermediate **Labels:** `enhancement`, `validation`

### 7. Image preview before submission
**Description:** Users can't see the chosen image. **Changes:** Show a thumbnail under the file input; clear it on reset. **Acceptance:** Preview appears on selection and disappears after submit. **Files:** `index.html`, `js/app.js`, `css/style.css` **Difficulty:** Beginner **Labels:** `enhancement`, `good first issue`

### 8. Success message after submitting a report
**Description:** The form silently jumps to Browse. **Changes:** Show a dismissible success banner on Browse after saving. **Acceptance:** Message appears once and auto-hides after a few seconds. **Files:** `index.html`, `js/app.js`, `css/style.css` **Difficulty:** Beginner **Labels:** `enhancement`, `good first issue`

### 9. Better empty states
**Description:** "No items found." is plain. **Changes:** Different messages for "no reports yet" vs "no results for filters", with a Report button. **Acceptance:** Both cases are visually distinct and styled. **Files:** `js/app.js`, `css/style.css` **Difficulty:** Beginner **Labels:** `ui`, `good first issue`

### 10. Dark mode toggle
**Description:** Add a theme switch. **Changes:** Add dark values for the CSS variables under `[data-theme="dark"]`, a toggle button, and remember the choice. **Acceptance:** All pages readable in both themes. **Files:** `css/style.css`, `index.html`, new `js/theme.js` **Difficulty:** Intermediate **Labels:** `enhancement`, `ui`

### 11. "My Reports" section
**Description:** Users want to see items they posted. **Changes:** Save a `reporterId` (random id in localStorage) on each item; add a "My Reports" view showing only those. **Acceptance:** Only own items appear; status can be changed there. **Files:** `index.html`, `js/app.js`, `js/storage.js` **Difficulty:** Intermediate **Labels:** `feature`, `javascript`

### 12. Delete a report
**Description:** Wrong or duplicate reports can't be removed. **Changes:** Add `deleteItem(id)` in storage and a Delete button with a confirm prompt in the details dialog. **Acceptance:** Item disappears after confirming. **Files:** `js/storage.js`, `js/app.js` **Difficulty:** Beginner **Labels:** `feature`, `good first issue`

### 13. Accessibility improvements
**Description:** Cards are clickable `<article>`s with no keyboard support. **Changes:** Make cards focusable (button/`tabindex`), add visible focus styles, `aria-live` on errors, check color contrast. **Acceptance:** Whole app usable by keyboard only; Lighthouse accessibility ≥ 90. **Files:** `js/app.js`, `index.html`, `css/style.css` **Difficulty:** Intermediate **Labels:** `accessibility`

### 14. Responsive polish for mobile
**Description:** Navigation and filters are cramped on small screens. **Changes:** Improve nav layout (e.g. wrap or hamburger), larger tap targets, test at 320px. **Acceptance:** No horizontal scrolling at 320–1200px. **Files:** `css/style.css` (`index.html` if needed) **Difficulty:** Beginner **Labels:** `ui`, `css`, `good first issue`

### 15. Improve navigation highlighting
**Description:** Users can't tell which page they're on. **Changes:** Highlight the active nav button in `showView()`; update the browser tab title. **Acceptance:** Active page clearly marked. **Files:** `js/app.js`, `css/style.css` **Difficulty:** Beginner **Labels:** `ui`, `good first issue`

### 16. Demo data and documentation
**Description:** New contributors see an empty app. **Changes:** Add `js/sample-data.js` and a "Load demo data" button; add screenshots and a CONTRIBUTING.md and PR template. **Acceptance:** Demo items load without duplicates; docs reviewed for clarity. **Files:** new `js/sample-data.js`, `CONTRIBUTING.md`, `README.md` **Difficulty:** Beginner **Labels:** `documentation`, `good first issue`

---
**Recommended labels:** `good first issue`, `beginner`, `intermediate`, `enhancement`, `feature`, `bug`, `ui`, `css`, `javascript`, `accessibility`, `validation`, `documentation`, `help wanted`
