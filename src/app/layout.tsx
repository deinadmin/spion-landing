import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Spion - Das ultimative Wort-Ratespiel für iOS",
  description: "Finde den Spion unter deinen Freunden! Spannendes Partyspiel für 4-12 Spieler. Mit Apple Intelligence, hunderten Begriffen und ohne Werbung. Jetzt kostenlos für iOS laden.",
  keywords: ["Spion", "Partyspiel", "iOS App", "Wort-Ratespiel", "Gesellschaftsspiel", "Apple Intelligence", "Gruppenspiel", "Deutschland"],
  authors: [{ name: "Carl Steen" }],
  creator: "Carl Steen",
  publisher: "Carl Steen",
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
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://spion.fun',
    title: 'Spion - Das ultimative Wort-Ratespiel für iOS',
    description: 'Finde den Spion unter deinen Freunden! Spannendes Partyspiel für 4-12 Spieler mit Apple Intelligence.',
    siteName: 'Spion App',
    images: [
      {
        url: 'https://spion.fun/app-icon.jpg',
        width: 1024,
        height: 1024,
        alt: 'Spion App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spion - Das ultimative Wort-Ratespiel für iOS',
    description: 'Finde den Spion unter deinen Freunden! Spannendes Partyspiel für 4-12 Spieler.',
    images: ['https://spion.fun/app-icon.jpg'],
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: 'https://spion.fun',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased flex flex-col",
          inter.variable
        )}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
