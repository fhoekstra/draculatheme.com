"use client";

import "./globals.scss";

import * as gtag from "../lib/gtag";

import { usePathname, useSearchParams } from "next/navigation";

import Header from "src/components/header";
import Providers from "src/utils/providers";
import Script from "next/script";
import localFont from "next/font/local";
import { useEffect } from "react";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    gtag.pageview(`${pathname}?${searchParams}`);
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body className={`${inter.variable} ${satoshi.variable}`}>
        <Header />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
