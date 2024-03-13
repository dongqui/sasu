import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
