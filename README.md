# Campus Lost & Found

A simple website where students can report lost and found items and search for them, instead of relying on WhatsApp groups.

> 🎓 **Built for student open-source contributions.** This project is intentionally small and beginner-friendly. Check the **Issues** tab, pick one, and make your first Pull Request!

## Problem Statement
Students often lose ID cards, books, wallets, keys, chargers and bottles. Right now they depend on word of mouth. This project provides one central place to report and search items.

## Features
- Home page with quick actions
- Report lost / found items (with optional image)
- Browse items as cards
- Search by name or description
- Filter by lost/found, category and location
- Item details popup
- Status: Active / Resolved
- Responsive layout and form validation

## Technologies
HTML, CSS, vanilla JavaScript. Data is stored in the browser's `localStorage` (no backend needed).

## How to Run
1. Download or clone the repo.
2. Open `index.html` in your browser. That's it!

## Project Structure
```
campus-lost-and-found/
├── index.html        # page structure
├── css/style.css     # styling
├── js/storage.js     # saving/loading data (localStorage)
├── js/app.js         # page logic: forms, search, filters, details
├── ISSUES.md         # starter issues
└── README.md
```

## How to Contribute
1. **Fork** the repository (button at top right of GitHub).
2. **Clone** your fork: `git clone https://github.com/YOUR-USERNAME/campus-lost-and-found.git`
3. Pick an issue and comment "I'd like to work on this" to get assigned.
4. **Create a branch:** `git checkout -b feature/short-description`
5. Make your changes and test them in the browser.
6. **Commit:** `git add .` then `git commit -m "Add image preview to report form"`
7. **Push:** `git push origin feature/short-description`
8. **Open a Pull Request** on GitHub from your branch. Write `Closes #issue-number` in the description.

## Contribution Guidelines
- One issue per Pull Request; keep changes small.
- Use clear names and add comments only where they help.
- Don't add frameworks or libraries without discussing in the issue.
- Test on mobile and desktop widths.
- Be kind and respectful in reviews.

## Future Improvements
Real backend and login, notifications, campus map, admin moderation.
