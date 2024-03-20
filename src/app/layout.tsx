import type { Metadata } from "next";
import localFont from "next/font/local";

import Providers from "./Providers";

import "./globals.css";

const verdana = localFont({
  src: [
    {
      path: "./fonts/Verdana.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Verdana-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "SASOO",
  description: "성장에 필요한 컨텐츠들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={verdana.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
