import type { Metadata } from "next";
import "./globals.css";
import { Libre_Bodoni } from 'next/font/google';

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-libre-bodoni', // important for Tailwind
});

export const metadata: Metadata = {
  title: "Photo Journey | Through the Lens: Morocco's Imperial Cities",
  description:
    "A photographic journey through Morocco's imperial cities - Fez, Marrakech, and beyond. Discover the beauty, culture, and magic through the lens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libreBodoni.variable}>
      <body className="min-h-screen bg-white antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
