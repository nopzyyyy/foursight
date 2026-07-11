import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foursight — Markets for what matters next",
  description: "A premium interactive prediction-market demo for sports, politics, crypto and culture.",
  openGraph: {
    title: "Foursight — Markets for what matters next",
    description: "See the outcome. Own the moment.",
    images: ["https://foursighttt.netlify.app/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foursight — Markets for what matters next",
    description: "See the outcome. Own the moment.",
    images: ["https://foursighttt.netlify.app/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
