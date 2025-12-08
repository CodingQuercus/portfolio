import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Åke Flatholm - Portfolio",
  description: "UI/UX Designer",
  icons: {
    icon: [
      { url: "./favicon.svg", type: "image/svg+xml" },
      { url: "./favicon.png", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${InterFont.variable} antialiased flex flex-col items-center min-h-screen bg-background`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
