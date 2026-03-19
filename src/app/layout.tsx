import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
