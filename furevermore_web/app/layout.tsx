import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furevermore | Refined Custom Pet Portraits & Keepsakes",
  description: "Turn your favorite pet photos into artful custom portraits. Furevermore creates refined keepsakes designed to be treasured for years.",
  metadataBase: new URL("https://furevermore.nextstepsbeyond.online"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Furevermore | AI Pet Artistry",
    description: "Transform your beloved pets into timeless masterpieces.",
    url: "https://furevermore.nextstepsbeyond.online",
    siteName: "Furevermore",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Furevermore AI Pet Art",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furevermore | AI Pet Artistry",
    description: "Transform your beloved pets into timeless masterpieces.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
