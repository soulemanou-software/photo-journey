# Photo Journey — Through the Lens: Morocco's Imperial Cities

Pixel-perfect implementation of a travel photography blog page, reproduced faithfully from Figma designs (desktop 1440px, tablet 768px, mobile 375px).

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styles | TailwindCSS |
| Visual Tests | BackstopJS |
| E2E Tests | Playwright |

## Design Tokens (extracted from Figma SVGs)

| Token | Value |
|---|---|
| Main gradient | `#8F9CD3` → `#FFCAA4` (periwinkle → warm peach) |
| Accent gradient | `#AD54F0` → `#D24DBC` (purple → magenta) |
| Blob blue | `#8BB5FF` |
| Blob orange | `#FFD596` |
| Blob lavender | `#9791EC` |
| Blob cream | `#FBE8DA` |
| Text primary | `#1A1A2E` |
| Text secondary | `#4B4B6A` |
| Footer bg | `#1A1A2E` |
| Fonts | Playfair Display (serif) + Inter (sans) |

## Getting Started

```bash
# Install (with Puppeteer download skipped for offline environments)
PUPPETEER_SKIP_DOWNLOAD=true npm install

# Development server
npm run dev         # http://localhost:3000

# Build for production
npm run build
npm start
```

## Testing

```bash
# E2E tests (Playwright) — requires dev server running
npm run test:e2e

# Visual regression (BackstopJS)
npm run test:visual:reference   # capture reference screenshots
npm run test:visual             # compare against reference
npm run test:visual:approve     # approve new reference
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Assembles all sections + background blobs
│   └── globals.css         # Tailwind base + custom classes
├── components/
│   ├── Header.tsx          # Sticky nav, mobile hamburger
│   ├── HeroSection.tsx     # Title left + circular photo right
│   ├── GradientBanner.tsx  # Periwinkle→peach card + 3 overlapping circles
│   ├── BehindTheLens.tsx   # 3 small circles + large sunset circle
│   ├── FezSection.tsx      # Portrait image left, text right
│   ├── MarrakechSection.tsx# Portrait image left, text + 2 images right, quote
│   ├── ChasingMorocco.tsx  # Centered title + 4 circles
│   ├── RelatedArticles.tsx # 3 cards with circular images
│   └── Footer.tsx          # Dark bg, 4 columns, gradient newsletter
└── lib/
    └── constants.ts        # All data, image URLs, nav/footer links
tests/
├── backstop/               # BackstopJS visual test artifacts
└── e2e/
    └── homepage.spec.ts    # Playwright E2E tests
```

## Responsive Breakpoints

| Breakpoint | Width | Description |
|---|---|---|
| Mobile | 375px | Single column, stacked layout |
| Tablet | 768px | Two-column where applicable |
| Desktop | 1440px | Full layout with side-by-side sections |
