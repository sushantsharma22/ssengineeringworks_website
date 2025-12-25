import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import DynamicBackground from "@/components/layout/DynamicBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Detect deployment environment at build time
const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github-pages';
const basePath = isGitHubPages ? '/ssengineeringworks_website' : '';
const siteUrl = isGitHubPages 
  ? 'https://sushantsharma22.github.io/ssengineeringworks_website'
  : process.env.NEXT_PUBLIC_SITE_URL || 'https://ssengineeringworks.vercel.app';

export const metadata: Metadata = {
  title: "S.S. Engineering Works | Expert Pumping Machinery Services",
  description: "Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32', type: 'image/x-icon' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
      { url: `${basePath}/android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: `${basePath}/favicon.ico`,
  },
  manifest: `${basePath}/site.webmanifest`,
  openGraph: {
    title: 'S.S. Engineering Works | Expert Pumping Machinery Services',
    description: 'Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.',
    url: siteUrl,
    siteName: 'S.S. Engineering Works',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.S. Engineering Works | Expert Pumping Machinery Services',
    description: 'Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200`}>
        <DynamicBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
