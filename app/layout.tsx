// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Rajib | Website Developer in Alipurduar | Frontend Expert",
  description:
    "I'm Rajib, a frontend website developer based in Alipurduar. I specialize in HTML, CSS, JavaScript, React, Next.js, API integration, and animations with Framer Motion. Let's build your dream website!",
  keywords: [
    "Rajib website developer",
    "Website developer Alipurduar",
    "Frontend developer Alipurduar",
    "React developer Alipurduar",
    "Next.js portfolio developer",
    "Hire website developer near me",
    "Website developer in Alipurduar",
    "Rajib Debnath frontend dev"
  ],
  authors: [{ name: "Rajib Debnath" }],
  creator: "Rajib",
  metadataBase: new URL("https://rajibdev.site"),
  openGraph: {
    title: "Rajib | Website Developer in Alipurduar",
    description:
      "Portfolio of Rajib – website developer from Alipurduar specializing in React, Next.js, and frontend development.",
    url: "https://rajibdev.site",
    siteName: "Rajib Portfolio",
    images: [
      {
        url: "https://rajibdev.site/og-preview.jpg", // Add this image to /public
        width: 1200,
        height: 630,
        alt: "Rajib - Website Developer from Alipurduar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajib | Website Developer in Alipurduar",
    description:
      "Hire Rajib, a frontend developer in Alipurduar with expertise in React, Next.js, and modern web technologies.",
    images: ["https://rajibdev.site/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Local SEO JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rajib",
              "jobTitle": "Frontend Website Developer",
              "url": "https://rajibdev.site",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alipurduar",
                "addressRegion": "West Bengal",
                "addressCountry": "India",
              },
              "sameAs": [
                "https://github.com/yourgithub", // Update
                "https://linkedin.com/in/yourlinkedin", // Update
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
