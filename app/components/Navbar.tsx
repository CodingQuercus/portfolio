"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import PillButton from "./PillButton";

type NavLink = {
    href: string;
    label: string;
    isContact?: boolean;
};

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleMobileContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 300);
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsOpen(false);
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="fixed z-50 top-0 inset-x-0 bg-background shadow-md" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href="/" className="font-semibold text-xl" onClick={handleLogoClick} aria-label="Go to home page">
                            <svg width="48" height="48" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.000890642 31.3926L9.98311 8.99258H15.1031L25.1191 31.3926H19.6791L11.4871 11.6166H13.5351L5.31111 31.3926H-0.000890642ZM4.99111 26.5926L6.36711 22.6566H17.8871L19.2951 26.5926H4.99111ZM12.5111 7.74458C11.7858 7.74458 11.1138 7.57391 10.4951 7.23258C9.89778 6.86991 9.42844 6.40058 9.08711 5.82458C8.74578 5.24858 8.57511 4.59791 8.57511 3.87258C8.57511 3.16858 8.74578 2.52858 9.08711 1.95258C9.42844 1.35524 9.89778 0.885909 10.4951 0.544577C11.1138 0.18191 11.7858 0.000576019 12.5111 0.000576019C13.2791 0.000576019 13.9618 0.18191 14.5591 0.544577C15.1564 0.885909 15.6258 1.35524 15.9671 1.95258C16.3298 2.52858 16.5111 3.16858 16.5111 3.87258C16.5111 4.59791 16.3298 5.24858 15.9671 5.82458C15.6258 6.40058 15.1564 6.86991 14.5591 7.23258C13.9618 7.57391 13.2791 7.74458 12.5111 7.74458ZM12.5431 5.82458C13.0978 5.82458 13.5564 5.64324 13.9191 5.28058C14.2818 4.91791 14.4631 4.45924 14.4631 3.90458C14.4631 3.32858 14.2818 2.85924 13.9191 2.49658C13.5564 2.11258 13.0871 1.92058 12.5111 1.92058C11.9778 1.92058 11.5191 2.10191 11.1351 2.46458C10.7724 2.82724 10.5911 3.29658 10.5911 3.87258C10.5911 4.44858 10.7724 4.91791 11.1351 5.28058C11.5191 5.64324 11.9884 5.82458 12.5431 5.82458ZM21.6831 31.3926V8.99258H38.6111V13.1526H26.8671V31.3926H21.6831ZM26.4831 23.2326V19.0726H37.2351V23.2326H26.4831Z" fill="#040404" />
                            </svg>
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                className="relative w-fit"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <Link href={link.href} className="text-xl">
                                    {link.label}
                                </Link>
                                <motion.span
                                    variants={{
                                        rest: { width: pathname === link.href ? "100%" : 0 },
                                        hover: { width: "100%" },
                                    }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute left-0 -bottom-1 h-0.5 bg-foreground"
                                />
                            </motion.div>
                        ))}
                        <PillButton href="#contact" onClick={handleContactClick}>
                            Contact
                        </PillButton>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-foreground origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-foreground origin-center"
                        />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                            aria-hidden="true"
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background shadow-xl z-40 md:hidden flex flex-col items-center justify-center gap-3 px-6 pt-24 pb-8"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation menu"
                        >
                            {[
                                ...navLinks,
                                { href: "#contact", label: "Contact", isContact: true }
                            ].map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={
                                            link.isContact
                                                ? handleMobileContactClick
                                                : () => setIsOpen(false)
                                        }
                                        className={`text-xl text-center px-4 py-2 rounded-full transition-colors ${isActive
                                            ? "underline underline-offset-8 decoration-2"
                                            : "hover:bg-foreground/5"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}