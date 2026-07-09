import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

export const metadata: Metadata = {
  title: "Lazaro Campos",
  description:
    "Backend Developer based in Cuba, passionate about building scalable applications with Java and Spring. I also share insights on software architecture, backend development, and emerging technologies."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="width-full bg-contrast text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
