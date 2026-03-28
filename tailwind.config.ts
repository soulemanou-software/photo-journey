import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['var(--font-libre-bodoni)', 'serif'],
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          periwinkle: "#8F9CD3",
          peach: "#FFCAA4",
          purple: "#AD54F0",
          magenta: "#D24DBC",
          "blob-blue": "#8BB5FF",
          "blob-orange": "#FFD596",
          "blob-lavender": "#9791EC",
          "blob-cream": "#FBE8DA",
        },
        text: {
          primary: "#1A1A2E",
          secondary: "#4B4B6A",
          muted: "#9090A8",
          light: "#B0B0C8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F9F9FB",
          muted: "#F3F3F7",
        },
        footer: {
          bg: "#1A1A2E",
          text: "#C4C4D4",
        },
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(to right, #8F9CD3, #FFCAA4)",
        "gradient-accent":
          "linear-gradient(to right, #AD54F0, #D24DBC)",
        "gradient-accent-diag":
          "linear-gradient(135deg, #AD54F0, #D24DBC)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
