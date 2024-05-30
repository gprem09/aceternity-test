import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";

const ntr = NTR({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prem",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ntr.className}>{children}</body>
    </html>
  );
}
