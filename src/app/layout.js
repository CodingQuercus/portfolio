import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Åke Flatholm | Portfolio",
  description: "A portfolio showcasing my work as an M.Sc student in Interaction Technology and Design at Umeå University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]`}
      >
        {children}
      </body>
    </html>
  );
}
