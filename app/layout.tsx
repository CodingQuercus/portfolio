import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Åke Flatholm - Portfolio",
  description: "UI/UX Designer",
  icons: {
    icon: [
      {url: "/icon.png"}
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${InterFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
