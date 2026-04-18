import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RenaultParts - Renault Araçları İçin Orijinal Yedek Parçalar",
  description:
    "Orijinal Renault yedek parçaları için güvenilir adresiniz. Tüm Renault modelleri için kaliteli motor parçaları, frenler, filtreler ve daha fazlası.",
  keywords: [
    "Renault yedek parça",
    "yedek parça",
    "otomobil parçaları",
    "OEM parça",
    "Renault",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
