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
    description:
            'UX Designer and Developer based in Umeå, Sweden.',
    authors: [{ name: 'Åke Flatholm' }],
    creator: 'Åke Flatholm',
    openGraph: {
        type: 'website',
        title: 'Portfolio | Åke Flatholm',
        description:
            'UX Designer and Developer based in Umeå, Sweden.',
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | Åke Flatholm',
        description:
            'UX Designer and Developer based in Umeå, Sweden.',
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
