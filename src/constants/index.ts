// Site configuration
export const SITE_CONFIG = {
  name: "Photo Journey",
  description: "A photographic journey through Morocco's imperial cities",
  url: "https://photo-journey.vercel.app",
  ogImage: "/images/og-image.jpg",
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

// Social media links
export const SOCIAL_LINKS = [
  { href: "https://instagram.com/photojourney", label: "Instagram" },
  { href: "https://twitter.com/photojourney", label: "Twitter" },
  { href: "https://facebook.com/photojourney", label: "Facebook" },
  { href: "https://youtube.com/photojourney", label: "YouTube" },
] as const;

// Footer sections
export const FOOTER_SECTIONS = [
  {
    title: "Explore",
    links: [
      { href: "/destinations", label: "Destinations" },
      { href: "/stories", label: "Stories" },
      { href: "/photography-tips", label: "Photography Tips" },
      { href: "/gear", label: "Gear" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/journal", label: "Journal" },
      { href: "/press", label: "Press" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/newsletter", label: "Newsletter" },
      { href: "/community", label: "Community" },
      { href: "/support", label: "Support" },
    ],
  },
] as const;

// Image paths
export const IMAGES = {
  // Hero images
  heroMain: "/images/hero-main.jpg",
  heroSecondary: "/images/hero-secondary.jpg",
  
  // Article images
  articleMain: "/images/2.jpg",
  articleSecondary: "/images/3.png",
  
  // Author avatar
  authorAvatar: "/images/3pp.png",
  
  // Tag icons
  adventureIcon: "/images/adventure.png",
  soloIcon: "/images/solo.png",
  africaIcon: "/images/icons8_elephant 1.png",
  
  // Social icons
  shareIcon: "/images/icons8_Share 1.png",
  
  // Placeholder images (using picsum for development)
  placeholder: {
    fezTall: "https://picsum.photos/seed/article-fez-tall/700/1000",
    fezMini: "https://picsum.photos/seed/article-fez-mini/500/500",
    marrakechTall: "https://picsum.photos/seed/article-marrakech-tall/700/1100",
    socialOne: "https://picsum.photos/seed/article-social-1/400/400",
    socialTwo: "https://picsum.photos/seed/article-social-2/400/400",
    closing: "https://picsum.photos/seed/article-closing/900/900",
    banner1: "https://picsum.photos/seed/banner-1/400/400",
    banner2: "https://picsum.photos/seed/banner-2/400/400",
    banner3: "https://picsum.photos/seed/banner-3/400/400",
    behindCard: "https://picsum.photos/seed/article-behind-card/500/500",
  },
} as const;

// Author information
export const AUTHOR_INFO = {
  name: "TransitStay",
  avatar: IMAGES.authorAvatar,
  bio: "Photographer and travel enthusiast, capturing the beauty of Morocco's imperial cities.",
  social: {
    instagram: "@transitstay",
    twitter: "@transitstay",
    website: "transitstay.com",
  },
} as const;

// Article data
export const ARTICLE_DATA = {
  category: "Photo Journey",
  title: "Through the Lens: Morocco's Imperial Cities",
  description: "A photographic journey through Morocco's layered medinas, quiet riads, and sun-washed courtyards — following color, texture, and light from Fez to Marrakech.",
  readTime: "5 min read",
  date: "March 2026",
  author: "TransitStay",
  tags: [
    { label: "Adventures", img: IMAGES.adventureIcon },
    { label: "Solo", img: IMAGES.soloIcon, variant: "soft" as const },
    { label: "Africa", img: IMAGES.africaIcon, variant: "highlight" as const },
  ],
} as const;

// Related articles
export const RELATED_ARTICLES = [
  {
    title: "The Blue City: Chefchaouen's Charm",
    image: "https://picsum.photos/seed/related-chefchaouen/400/400",
    description: "Exploring the magical blue streets of Morocco's most picturesque city.",
    readTime: "4 min read",
  },
  {
    title: "Sahara Sunrise: A Desert Diary",
    image: "https://picsum.photos/seed/related-sahara/400/400",
    description: "From Merzouga to Erg Chebbi, capturing the desert's golden hour.",
    readTime: "6 min read",
  },
  {
    title: "Essaouira: Where the Atlantic Meets Morocco",
    image: "https://picsum.photos/seed/related-essaouira/400/400",
    description: "Coastal winds, fresh seafood, and the laid-back vibe of Morocco's port city.",
    readTime: "5 min read",
  },
] as const;

// Animation durations
export const ANIMATIONS = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Z-index values
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;
