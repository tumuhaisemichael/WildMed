import type { Metadata } from "next";
import { Inter, Dancing_Script, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExpeditionModal from "@/components/modals/ExpeditionModal";
import StickyBookButton from "@/components/sections/StickyBookButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" });

export const metadata: Metadata = {
  title: "WildMed - WildMed Safaris and Field Projects",
  description: "Experience unforgettable wildlife safaris, veterinary programs, and medical expeditions across Kenya, Tanzania, Uganda, and Rwanda with WildMed Safaris.",
  keywords: "Uganda gorilla trekking, vet volunteer Africa, medical mission Tanzania, custom East Africa safari, wildlife immobilization course, Rwanda gorilla trekking, Kenya wildlife safari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${dancingScript.variable} ${pacifico.variable} font-sans text-gray-800`}>
        <Header />
        <main className="pt-[140px] lg:pt-[150px]">
          {children}
        </main>
        <Footer />
        <ExpeditionModal />
        <StickyBookButton />
        
        {/* Anti-copy script */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('copy', (e) => e.preventDefault());
          document.addEventListener('contextmenu', (e) => {
            if(e.target.tagName !== 'A' && e.target.parentElement.tagName !== 'A') e.preventDefault();
          });
          document.addEventListener('dragstart', (e) => e.preventDefault());
        `}} />
      </body>
    </html>
  );
}
