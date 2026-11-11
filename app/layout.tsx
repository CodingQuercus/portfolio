import type { Metadata } from 'next';
import './globals.css';

import { Montserrat } from 'next/font/google';

import MotionProvider from './components/MotionProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MontserratFont = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://akeflatholm.com'),
    alternates: {
        canonical: 'https://akeflatholm.com',
    },
    robots: {
        index: true,
        follow: true,
    },
    title: {
        default: 'Portfolio | Åke Flatholm',
        template: '%s | Åke Flatholm',
    },
    description: 'UX Designer and Developer based in Umeå, Sweden.',
    authors: [{ name: 'Åke Flatholm' }],
    creator: 'Åke Flatholm',
    openGraph: {
        type: 'website',
        title: 'Portfolio | Åke Flatholm',
        description: 'UX Designer and Developer based in Umeå, Sweden.',
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | Åke Flatholm',
        description: 'UX Designer and Developer based in Umeå, Sweden.',
        images: ['/og-image.png'],
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
                className={`${MontserratFont.variable} antialiased bg-background`}
            >
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:rounded-full focus:border focus:border-foreground"
                >
                    Skip to content
                </a>
                <MotionProvider>
                    <Navbar />
                    {/* "page" is made inert while the mobile menu is open. */}
                    <div
                        id="page"
                        className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col min-h-screen"
                    >
                        <main
                            id="main"
                            tabIndex={-1}
                            className="flex flex-col focus:outline-none"
                        >
                            {children}
                        </main>
                        <Footer />
                    </div>
                </MotionProvider>
            </body>
        </html>
    );
}
