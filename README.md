# Photo Journey - Professional TypeScript Implementation

A photographic journey through Morocco's imperial cities, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **TypeScript First**: Full type safety with comprehensive interfaces
- **Component Architecture**: Reusable UI components with proper props typing
- **Optimized Images**: Next.js Image optimization with responsive sizing
- **Professional Structure**: Organized codebase with separation of concerns
- **Modern Hooks**: Custom hooks for common functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component
│   │   ├── Badge.tsx     # Badge component
│   │   ├── Card.tsx      # Card component
│   │   ├── OptimizedImage.tsx # Image wrapper
│   │   └── index.ts      # Barrel export
│   ├── ArticleHero.tsx   # Hero section
│   ├── ArticlePage.tsx   # Main page component
│   └── ...               # Other page components
├── constants/            # Application constants
│   └── index.ts         # Centralized configuration
├── hooks/               # Custom React hooks
│   └── index.ts         # Hook collection
├── lib/                 # Utility library
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # Legacy constants
├── types/               # TypeScript type definitions
│   └── index.ts         # Type exports
└── utils/               # Additional utilities
    └── index.ts         # Helper functions
```

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image Optimization
- **Testing**: Playwright (E2E), BackstopJS (Visual)

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## UI Components

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

### Badge
```tsx
import { Badge } from '@/components/ui';

<Badge variant="gradient" size="sm">
  Photo Journey
</Badge>
```

### OptimizedImage
```tsx
import { OptimizedImage } from '@/components/ui';

<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority
/>
```

## Custom Hooks

### useCarousel
```tsx
import { useCarousel } from '@/hooks';

const { currentPage, nextPage, prevPage, visibleItems } = useCarousel(items, 3);
```

### useLocalStorage
```tsx
import { useLocalStorage } from '@/hooks';

const [theme, setTheme] = useLocalStorage('theme', 'light');
```

## Type Safety

All components are fully typed with TypeScript:

```tsx
interface ArticleHeroProps {
  data: ArticleHeroData;
  className?: string;
}
```

## Design System

### Colors
- Primary Gradient: `#8F9CD3 → #FFCAA4`
- Secondary Gradient: `#AD54F0 → #D24DBC`
- Text Primary: `#1A1A2E`
- Text Secondary: `#4B4B6A`

### Typography
- Serif: Playfair Display
- Sans-serif: Inter

## Responsive Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Testing

```bash
# Run E2E tests
npm run test:e2e

# Run visual regression tests
npm run test:visual

# Approve visual changes
npm run test:visual:approve
```

## Performance

- Image optimization with Next.js Image component
- Lazy loading for images
- Component code splitting
- Optimized bundle size

## License

MIT License - feel free to use this project for learning or commercial purposes.

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
