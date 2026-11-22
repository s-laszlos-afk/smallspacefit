# SmallSpaceFit

Research-driven buying guides for compact, quiet, rental-friendly home fitness gear.

Live site: https://s-laszlos-afk.github.io/smallspacefit/

## Structure

- Static HTML, no build step. Each article lives in its own folder as `index.html` for clean URLs.
- `assets/style.css` — single stylesheet, light/dark via `prefers-color-scheme`.
- `assets/site.js` — sets the Amazon Associates tag on all product links. **To activate affiliate tracking, set `AFFILIATE_TAG` at the top of this file** (e.g. `"smallspacefit-20"`) once the Associates account exists.

## Editorial rules

- Product prices and star ratings are never printed verbatim (Amazon Associates policy: pricing display requires their API). Guides use price tiers ("under $100") with an observation date instead.
- Every page with affiliate links carries an FTC disclosure above the first link.
- Content claims are limited to listed specifications and clearly-framed research; no fabricated hands-on testing claims.
