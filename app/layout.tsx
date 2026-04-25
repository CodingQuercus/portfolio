import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

import MotionProvider from "./components/MotionProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MontserratFont = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

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
        <html lang="en" data-scroll-behavior="smooth">
            <body
                className={`${MontserratFont.variable} antialiased bg-background`}
            >
                <MotionProvider>
                    <Navbar />
                    <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col min-h-screen">
                        {children}
                        <Footer />
                    </div>
                </MotionProvider>
            </body>
        </html>
    );
}
