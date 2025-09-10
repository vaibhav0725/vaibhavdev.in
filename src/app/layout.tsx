import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Malik",
  description: "Vaibhav Malik's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/VM-logo-draft1.svg" type="image/svg+xml" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-950 relative`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
