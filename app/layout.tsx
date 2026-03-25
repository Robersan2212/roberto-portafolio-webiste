import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberto Sanchez | Software Engineer",
  description: "Portfolio of Roberto Sanchez, Software Engineer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-full overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-full min-w-0 overflow-x-clip min-h-dvh`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
