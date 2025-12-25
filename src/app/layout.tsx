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

// Hardcoded site URL for custom domain - No environment variables needed
const siteUrl = 'https://ssengineeringworkshp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'S.S. Engineering Works | Expert Pumping Machinery Services in Himachal Pradesh',
    template: '%s | S.S. Engineering Works'
  },
  description: 'Authorized KSB Service Center since 1970. Expert repair, installation & maintenance of pumping machinery across Una, Shimla, Kangra & 6+ districts in HP. 24/7 emergency support.',
  keywords: [
    'KSB pump service',
    'pump repair Himachal Pradesh',
    'pumping machinery Una',
    'water pump installation HP',
    'industrial pump maintenance',
    'Jal Shakti pump contractor',
    'submersible pump repair',
    'centrifugal pump service',
    'pump spare parts HP',
    'emergency pump repair',
    'S.S. Engineering Works'
  ],
  authors: [{ name: 'S.S. Engineering Works', url: siteUrl }],
  creator: 'S.S. Engineering Works',
  publisher: 'S.S. Engineering Works',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'S.S. Engineering Works',
    title: 'S.S. Engineering Works | Expert Pumping Machinery Services',
    description: 'Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.',
    images: [
      {
        url: `${siteUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: 'S.S. Engineering Works Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.S. Engineering Works | Expert Pumping Machinery Services',
    description: 'Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.',
    images: [`${siteUrl}/android-chrome-512x512.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "S.S. Engineering Works",
              "image": `${siteUrl}/android-chrome-512x512.png`,
              "@id": siteUrl,
              "url": siteUrl,
              "telephone": "+91-98161-34151",
              "email": "ssewuna@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Bus Stand, Hamirpur Road",
                "addressLocality": "Una",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "174303",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.4685,
                "longitude": 76.2708
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [],
              "priceRange": "₹₹",
              "description": "Authorized KSB Service Center providing expert pump repair, installation & maintenance in Himachal Pradesh since 1970.",
              "foundingDate": "1970",
              "areaServed": ["Una", "Hamirpur", "Bilaspur", "Kangra", "Solan", "Shimla"]
            })
          }}
        />
      </head>
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
