import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";

// Initialize Manrope font with all weights
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "SaaS DevSomeware",
  description: "On-demand development and API integration with senior level engineers",
  keywords: "SaaS development, API integration, web development, software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${manrope.variable} scroll-smooth`}>
      <body className={`bg-black text-white antialiased ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}