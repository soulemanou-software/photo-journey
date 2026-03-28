// Base types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Article related types
export interface Tag {
  label: string;
  img: string;
  variant?: "default" | "soft" | "highlight";
}

export interface Author {
  name: string;
  avatar: string;
  readTime: string;
  date: string;
}

export interface Images {
  main: string;
  secondary: string;
}

export interface ArticleHeroData {
  category: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  images: Images;
}

// Social snippet types
export interface SocialSnippetProps {
  platform: "youtube" | "instagram" | "twitter" | "facebook";
  title: string;
  handle: string;
  image: string;
}

// Related articles types
export interface RelatedArticle {
  title: string;
  image: string;
  description?: string;
  readTime?: string;
  author?: string;
}

// Navigation types
export interface NavLink {
  href: string;
  label: string;
}

// Footer types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// UI Component types
export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: "default" | "soft" | "highlight" | "gradient";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
  padding?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}
