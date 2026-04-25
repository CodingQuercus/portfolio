"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <nav className="fixed z-50 top-0 inset-x-0 bg-background shadow-md">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href="/" className="font-semibold text-xl" onClick={handleLogoClick}>
                            <svg width="48" height="48" viewBox="0 0 65 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.000562549 47.8076L21.6954 14.2076H29.4234L37.6794 47.8076H29.9034L23.3754 18.0476H26.4474L8.30344 47.8076H-0.000562549ZM8.97544 40.6076L12.1434 34.7036H29.4714L30.3834 40.6076H8.97544ZM27.2154 11.6156C26.0954 11.6156 25.0874 11.3596 24.1914 10.8476C23.2954 10.3036 22.5754 9.59962 22.0314 8.73562C21.5194 7.87162 21.2634 6.89562 21.2634 5.80761C21.2634 4.75161 21.5194 3.79161 22.0314 2.92761C22.5754 2.03161 23.2954 1.32761 24.1914 0.815616C25.1194 0.271615 26.1274 -0.000385284 27.2154 -0.000385284C28.3674 -0.000385284 29.3914 0.271615 30.2874 0.815616C31.1834 1.32761 31.8874 2.03161 32.3994 2.92761C32.9434 3.79161 33.2154 4.75161 33.2154 5.80761C33.2154 6.89562 32.9434 7.87162 32.3994 8.73562C31.8874 9.59962 31.1834 10.3036 30.2874 10.8476C29.3914 11.3596 28.3674 11.6156 27.2154 11.6156ZM27.2154 8.73562C28.0794 8.73562 28.7834 8.46362 29.3274 7.91962C29.8714 7.37562 30.1434 6.68762 30.1434 5.85562C30.1434 4.99162 29.8714 4.28762 29.3274 3.74362C28.7834 3.16761 28.0794 2.87961 27.2154 2.87961C26.4154 2.87961 25.7274 3.15162 25.1514 3.69562C24.6074 4.23961 24.3354 4.94361 24.3354 5.80761C24.3354 6.67161 24.6074 7.37562 25.1514 7.91962C25.6954 8.46362 26.3834 8.73562 27.2154 8.73562ZM43.4214 29.3276H59.5974L58.3014 35.5676H42.1734L43.4214 29.3276ZM40.3494 47.8076H32.5254L39.2454 14.2076H64.6374L63.3414 20.4476H45.7734L40.3494 47.8076Z" fill="#040404" />
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
                        className="md:hidden p-2 z-50 relative"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background shadow-xl z-40 md:hidden flex flex-col items-center justify-center gap-3 px-6 pt-24 pb-8"
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