import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codesetu.com"), // change to your deployed domain
  title: {
    default: "BuildOS – Smart Construction Management by CodeSetu",
    template: "%s | BuildOS",
  },
  description:
    "BuildOS empowers construction teams with real-time project tracking, smart scheduling, and seamless collaboration. Choose your role and transform the way you build.",
  keywords: [
    "construction management",
    "project tracking",
    "BuildOS",
    "CodeSetu",
    "construction software",
    "builder dashboard",
    "smart scheduling",
    "real-time collaboration",
  ],
  authors: [{ name: "CodeSetu", url: "https://codesetu.com" }],
  creator: "CodeSetu",
  openGraph: {
    title: "BuildOS – Smart Construction Management",
    description:
      "Explore a role-based demo of BuildOS – a powerful platform for construction project owners, professionals, and stakeholders.",
    url: "https://codesetu.com", // update this
    siteName: "BuildOS",
    images: [
      {
        url: "https://codesetu.com/og-image.png", // update with actual image
        width: 1200,
        height: 630,
        alt: "BuildOS – Smart Construction Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildOS – Smart Construction Management",
    description:
      "Role-based dashboards, AI-powered scheduling, and mobile-first design — BuildOS is the future of construction management.",
    creator: "@codesetu", // optional, if you have a Twitter handle
    images: ["https://codesetu.com/og-image.png"], // update
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#1d4ed8", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
