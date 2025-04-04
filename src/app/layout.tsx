import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market Tinder - Connect with Local Vendors",
  description: "Find and connect with local vendors for your events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
