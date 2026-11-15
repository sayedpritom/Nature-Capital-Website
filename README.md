# Nature Capital — landing page

Static website (HTML5, CSS3, vanilla JS). No build step, no frameworks, no backend.

## Structure

```
website/
├── index.html            Page markup (semantic: header, main > 4 sections, footer)
├── css/style.css         All styles — tokens, desktop, tablet, mobile
├── js/script.js          Minimal (page needs no interactions)
├── assets/
│   ├── images/           Photos (WebP) and the two line textures (SVG)
│   ├── logos/            main-logo.svg, footer-logo.svg
│   ├── icons/            Pillar icons, vertical divider, globe
│   └── fonts/            Sabon LT Pro (Bold, Roman) and Outfit (Light, Regular, Medium), WOFF
└── README.md
```

## Editing

- Open the folder in VS Code and edit `index.html` / `css/style.css`. To preview locally use the
  Live Server extension, or double-click `index.html`.
- Colors, fonts and the scale unit are CSS variables at the top of `css/style.css` (`:root`).
- **Large screens (>1100px)** use a spacious layout: section backgrounds run edge to edge while the content sits in a
  centered container (`--wrap`, up to about 1870px wide). `--u` is 1px at a 1600px window, scales down below that and
  grows only slowly above it, so 4K and ultrawide displays get more breathing room rather than a simply stretched page.
  Horizontal structure uses fractions of the container; type and vertical spacing use `--u`.
  The hero photo is clipped to the curved card by the `#hero-shape` SVG at the top of `index.html`.
- **1025–1100px** keeps the proportional 1600px-artboard layout; **tablet (≤1024px)** and **mobile (≤700px)** are
  unchanged fluid layouts. The forced line breaks (`<br class="br-d">`) are hidden on tablet/mobile so text reflows.
- Section order in the HTML: hero → The Long Game → pillars → Real Estate. Held for the Long Term.
  → Built to Endure → footer.

## Deploying to Netlify

1. Go to https://app.netlify.com/drop
2. Drag the whole `website` folder (the one containing `index.html`) onto the page.

`index.html` is at the root and every path is relative, so no configuration file is needed.

## Notes and limitations

- **Logos:** the supplied logo SVGs contained live text set in Gotham, which isn't available in
  browsers. The "NATURE / CAPITAL" lettering in both `assets/logos/*.svg` was converted to
  outlines by tracing the high-resolution design export. For a perfect vector result, re-export
  both logos from Illustrator with Type → Create Outlines and replace those two files.
- **Globe icon** next to the URL was not supplied; `assets/icons/globe.svg` is a simple
  replacement drawn to match.
- **Long Game texture:** `texture-long-game.svg` (the "alternative" texture) is used up to 1100px; `texture-long-game-wide.svg` is the same artwork set to stretch, used above 1100px.
- **Hero text** contains a double space ("holding  and stewarding") exactly as in the design.
  Remove the `&nbsp;` in `index.html` if it was unintended.
- Hero photo curve is a CSS `clip-path` traced from the design; photos are WebP.
- Tablet/mobile layouts were not part of the Illustrator design; they are proposed adaptations.

## Finishing touches
- Content fades up gently as it scrolls into view (`js/script.js` + `.reveal` classes). It is disabled for visitors who
  prefer reduced motion, and the page works without JavaScript.
- Hover lift on the pillar icons, a thin accent rule under "The Long Game" (large screens), a soft shadow on the
  Real Estate photo, and a hairline divider in the "Built to Endure" band.

## Polish pass (loader, motion, depth)
- **Branded loader:** the logo's hexagon draws itself, then the sun, mountain, tree, water and wordmark build in, and the
  cream curtain lifts. Shown once per browser session; skipped for reduced-motion / data-saver visitors and repeat views.
  Markup is the `.loader` block in `index.html`; timing is in the "Branded loader" section of `css/style.css`
  and the minimum display time (`MIN`) in `js/script.js`.
- **Motion:** images settle in with a soft zoom, accent rules draw in, and the green/blue bands drift slightly on scroll
  on large screens (CSS-only scroll-linked animation; ignored by browsers that don't support it).
- **Depth:** a very light paper grain and gentle gradients on the cream sections, and a subtle top-to-bottom depth in the
  green and blue overlays. Colours are unchanged.
- **Headings:** terracotta rule under "The Long Game" (matching Real Estate); gold rule (the logo's sun) above the closing
  statement on the dark blue band.
- **Mobile/tablet:** short statements (Long Game, pillar quote, closing band) are centered on mobile; the hero and Real
  Estate copy stay left-aligned.
- **Accessibility/SEO:** skip link, favicon from the logo mark, Organization structured data, lazy-loaded below-the-fold images.
