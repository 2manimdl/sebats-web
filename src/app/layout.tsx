import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sebats, — Creative Media Studio",
  description: "Ambil Jeda, Sebats Dulu. Ruang kreatif yang merayakan momen jeda di tengah hustle culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased overflow-x-hidden w-full">
        
        {/* Navbar bebas di luar SmoothScroll */}
        <Navbar />

        <SmoothScroll>
          {children}
          {/* Footer kembali hadir! */}
          <Footer />
        </SmoothScroll>

        <FloatingWhatsApp />
      </body>
    </html>
  );
}