import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSM-CMS",
  description: "A CMS developed by SSM",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "min-h-[100dvh] flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
