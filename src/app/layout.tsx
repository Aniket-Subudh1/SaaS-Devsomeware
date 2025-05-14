import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevSomeware | Development that scales",
  description: "On-demand development and API integration with senior level engineers",
  keywords: "SaaS development, API integration, web development, software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* Background elements */}
        <div className="bg-noise"></div>
        <div className="bg-grid"></div>
        <div className="carpet-texture"></div>
        
        {children}
      </body>
    </html>
  );
}