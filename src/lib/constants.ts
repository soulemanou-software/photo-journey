export const SITE_NAME = "Photo Journey";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/stories" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const IMAGES = {
  hero: {
    chefchaouen: "https://picsum.photos/seed/morocco1/800/800",
    marrakechCity: "https://picsum.photos/seed/morocco2/800/800",
    moroccoDesert: "https://picsum.photos/seed/morocco3/800/800",
  },
  behindTheLens: {
    sunset: "https://picsum.photos/seed/sunset1/800/800",
    moroccanDoor: "https://picsum.photos/seed/door1/600/600",
    blueStreet: "https://picsum.photos/seed/blue1/600/600",
    minaret: "https://picsum.photos/seed/tower1/600/600",
  },
  fez: {
    main: "https://picsum.photos/seed/fez1/900/1100",
    detail: "https://picsum.photos/seed/fez2/600/340",
  },
  marrakech: {
    main: "https://picsum.photos/seed/marrakech1/900/1100",
    souk: "https://picsum.photos/seed/souk1/600/600",
    spices: "https://picsum.photos/seed/spice1/600/600",
  },
  chasing: {
    riad: "https://picsum.photos/seed/riad1/600/600",
    lanterns: "https://picsum.photos/seed/lantern1/600/600",
    mosaic: "https://picsum.photos/seed/mosaic1/600/600",
    garden: "https://picsum.photos/seed/garden1/600/600",
  },
  related: {
    article1: "https://picsum.photos/seed/article1/400/250",
    article2: "https://picsum.photos/seed/article2/400/250",
    article3: "https://picsum.photos/seed/article3/400/250",
  },
  author: "https://picsum.photos/seed/author1/100/100",
};

export const AUTHOR = {
  name: "Sarah Mitchell",
  role: "Travel Photographer",
  avatar: IMAGES.author,
  date: "March 15, 2025",
  readTime: "12 min read",
};

export const RELATED_ARTICLES = [
  {
    id: 1,
    title: "Finding Peace in Tangier: Morocco's Most Relaxed City",
    excerpt:
      "Discover the serene beauty of Tangier, where Mediterranean charm meets Moroccan tradition in perfect harmony.",
    image: IMAGES.related.article1,
    date: "Feb 20, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Cooking Through Morocco: A Culinary Photo Journey",
    excerpt:
      "From tagines to pastilla, explore the rich culinary landscape of Morocco through the lens.",
    image: IMAGES.related.article2,
    date: "Jan 15, 2025",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "The Desert's Palette: Sahara Photography Guide",
    excerpt:
      "Learn the techniques and timing needed to capture the ever-changing colors of the Sahara Desert.",
    image: IMAGES.related.article3,
    date: "Dec 28, 2024",
    readTime: "9 min read",
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Stories", href: "/stories" },
    { label: "Contact", href: "/contact" },
  ],
  categories: [
    { label: "Travel", href: "/travel" },
    { label: "Photography", href: "/photography" },
    { label: "Culture", href: "/culture" },
    { label: "Adventure", href: "/adventure" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};
