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

export const metadata: Metadata = {
  title: "S.S. Engineering Works | Expert Pumping Machinery Services",
  description: "Authorized KSB Service Center providing comprehensive repair, installation, and maintenance for pumping machinery in Himachal Pradesh since 1970.",
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
