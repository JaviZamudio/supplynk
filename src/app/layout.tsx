import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/contexts/GlobalProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supplynk",
  description: "Una aplicación para ayudar en la cadena de produccion"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
