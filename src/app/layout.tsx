"use client";

import "./globals.scss";

import { AnimatePresence } from "framer-motion";
import Header from "src/components/header";
import localFont from "next/font/local";

const inter = localFont({
  display: "swap",
  src: "../../public/fonts/inter.ttf",
  variable: "--font-inter",
});
const satoshi = localFont({
  display: "swap",
  src: "../../public/fonts/satoshi.ttf",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <html lang="en">
        <body className={`${inter.variable} ${satoshi.variable}`}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </AnimatePresence>
  );
}
