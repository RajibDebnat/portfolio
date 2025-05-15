// app/layout.tsx
import Script from 'next/script';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Rajib | Website Developer in Alipurduar | Frontend Expert",
  description:
    "I'm Rajib, a frontend website developer from Alipurduar.Let's take your Business online angd get more customers. Let's build your dream website!",
  keywords: [
    "Rajib website developer",
    "Website developer Alipurduar",
    "Frontend developer Alipurduar",
    "React developer Alipurduar",
    "Next.js portfolio developer",
    "Hire website developer near me",
    "Website developer in Alipurduar",
    "Rajib Debnath frontend dev",
    'website devloper near me'
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
        url: "https://rajibdev.site/og-preview.jpg",
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

// ✅ Fix TypeScript error for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PW57WF73FE"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PW57WF73FE');
          `}
        </Script>

        {/* ✅ JSON-LD Local SEO Schema */}
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
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
              "https://github.com/RajibDebnat", // ← Update this
              "https://www.linkedin.com/in/rajib-debnath-0715a6236/", // ← Update this
            ],
          })}
        </Script>
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
