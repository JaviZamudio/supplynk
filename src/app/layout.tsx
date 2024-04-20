/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/contexts/GlobalProviders";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { UserProvider } from "@auth0/nextjs-auth0/client";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supplynk",
  description: "Una aplicación para ayudar en la cadena de produccion",
  icons: "/logo_mini.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>

        <body className={inter.className}>

          <GlobalProviders>

            <Sidebar />

            <main className="flex-1 flex flex-col p-4">
              {children}
            </main>
          </GlobalProviders>
        </body>
      </UserProvider>
    </html>
  );
}
