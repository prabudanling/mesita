import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NusaParadise.id — Portal Wisata Peradaban Terbesar di Dunia",
  description:
    "Kapal peradaban yang membawa 17.504 pulau, 714 suku bangsa, 1.300 bahasa daerah, dan seluruh kekayaan alam Indonesia berlayar menuju surga dunia yang nyata.",
  keywords: [
    "NusaParadise",
    "Pariwisata Indonesia",
    "Tourism of Civilization",
    "Desa Wisata",
    "Investasi Pariwisata",
    "KNBMP",
    "MESITA",
    "ASITA",
    "Surga Dunia",
    "Ekosistem Pariwisata",
    "Raja Ampat",
    "Borobudur",
    "Bali",
  ],
  authors: [{ name: "NusaParadise.id" }],
  creator: "NusaParadise.id",
  publisher: "NusaParadise.id",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nusaparadise.id",
    siteName: "NusaParadise.id",
    title: "NusaParadise.id — Portal Wisata Peradaban Terbesar di Dunia",
    description:
      "Kapal peradaban yang membawa 17.504 pulau, 714 suku bangsa, dan seluruh kekayaan alam Indonesia menuju surga dunia yang nyata.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "NusaParadise.id — Surga Wisata Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NusaParadise.id — Portal Wisata Peradaban",
    description:
      "17.504 pulau. 714 suku bangsa. 6.016+ desa wisata. Satu platform untuk seluruh pariwisata Indonesia.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
