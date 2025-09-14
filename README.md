# FlexiSaf Tech Store

Frontend deliverable for Intermediate Week 1 — JavaScript Applications with ES6 features, array methods, and Tailwind CSS styling.

## Stack
- Vanilla JavaScript (modules)
- Tailwind CSS via CDN (v3+/v4-compatible CDN)
- No build tools required

## Features
- Product catalog with search, category filter, and sorting
- Shopping cart with add/remove/update quantity
- Totals computed with `map`, `reduce`, and tax calculation
- State persisted in `localStorage`
- Responsive, accessible UI using Tailwind classes
- "ES6 and Array Methods Used" section summarizing concepts

## Run Locally
Open `index.html` directly in your browser or serve with a static server:

```bash
# PowerShell (Windows)
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy Free
You can use any static host. Options:

### GitHub Pages
1. Create a new public repo and push this folder.
2. In GitHub, Settings → Pages → Deploy from branch → `main` / root (`/`).
3. Your site will be available at: `https://<username>.github.io/<repo>/`.

### Netlify
1. Drag-and-drop the folder at `https://app.netlify.com/drop`.
2. Or connect your GitHub repo and deploy from `main`.

### Vercel
1. `vercel deploy` or connect your GitHub repo in the Vercel dashboard.
2. Framework preset: "Other" (static). Output: root directory.

## ES6/Array Methods Demonstrated
- `const`, `let`, arrow functions, template strings
- Object/array destructuring, spread operator
- `map`, `filter`, `reduce`, `sort`, `find`, `some`, `every`
- Modules (`products.js`, `utils.js`, `cart.js`, `main.js`)
- `localStorage` usage via a small storage helper

## Project Structure
```
index.html
src/
  cart.js
  main.js
  products.js
  utils.js
```

## Notes
- Images are royalty-free Unsplash URLs to keep the repository lightweight.
- Tailwind is loaded via CDN to simplify setup; you can switch to a CLI build later if needed.




