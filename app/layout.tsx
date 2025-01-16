import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
export const metadata: Metadata = {
  title: "RAJIB PORTFOLIO || AMAZED BY SKILLS",
  description:
    "portfolio website . that shows experties on forntend devlopment with HTML, CSS, JAVASCRIPT, REACT, NEXTJS, API INTREGATION AND MORE WITH FRAMER MOTION ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
>
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
