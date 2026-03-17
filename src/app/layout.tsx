import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "maplibre-gl/dist/maplibre-gl.css";

import "./globals.css";

import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wanmap.vercel.app";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WanMap | 犬と歩く今治ガイド",
    template: "%s | WanMap",
  },
  description:
    "犬連れで今治を訪れる人のための、実地図ベースのスポット・コース・緊急情報ガイド。",
  openGraph: {
    title: "WanMap | 犬と歩く今治ガイド",
    description:
      "今治市を犬連れで歩くための、実地図ベースのスポット・コース・緊急情報ガイド。",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WanMap | 犬と歩く今治ガイド",
    description:
      "今治市を犬連れで歩くための、実地図ベースのスポット・コース・緊急情報ガイド。",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a3a4a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <div className="page-shell pb-28">
          <Header />
          <main className="mx-auto flex w-full max-w-[480px] flex-col gap-6 px-4 pb-24 pt-6">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
