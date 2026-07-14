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
  title: "MESITA — Masyarakat Ekosistem Wisata Nusantara | Portal Pariwisata Futuristik Indonesia",
  description: "Ekosistem pariwisata futuristik Indonesia menuju Indonesia Tourism #1 Dunia 2045. 17.504 pulau, 714 suku bangsa, 9 pilar ekosistem, $100B target revenue.",
  keywords: ["MESITA", "Pariwisata Indonesia", "Tourism of Civilization", "Desa Wisata", "NusaParadise", "KopNusa", "Ekosistem Pariwisata", "Indonesia Emas 2045", "Raja Ampat", "Borobudur", "Bali"],
  authors: [{ name: "MESITA - Masyarakat Ekosistem Wisata Nusantara" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "MESITA — Ekosistem Pariwisata Futuristik Indonesia",
    description: "Transformasi pariwisata Indonesia dari komoditas menjadi ekosistem hidup menuju Indonesia Tourism #1 Dunia 2045",
    url: "https://mesita.id",
    siteName: "MESITA",
    type: "website",
    images: [{ url: "/images/hero-bg.png", width: 1344, height: 768, alt: "MESITA - Ekosistem Pariwisata Nusantara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MESITA — Ekosistem Pariwisata Futuristik Indonesia",
    description: "9 Pilar Ekosistem. $100B Revenue Target. Indonesia Emas 2045.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
