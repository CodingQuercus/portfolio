'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

import ThemeToggle from './ThemeToggle';
import { NAVBAR_DELAY } from './introTimeline';
import { useIntroMode } from './useIntroMode';
import { EASE_IN_OUT, EASE_OUT } from './motionTokens';

type NavLink = {
    href: string;
    label: string;
    isContact?: boolean;
};

const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const introMode = useIntroMode();
    // Server-rendered hidden on the home page until we know whether the
    // first-visit intro plays; then it drops in after it, or shows at once.
    const [introOnLoad] = useState(pathname === '/');
    const hiddenNav = { y: '-120%' };
    // A case study like /projects/maj still counts as being on Projects.
    const isCurrent = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    const menuButtonRef = useRef<HTMLButtonElement>(null);

    // While the mobile menu is open it behaves as a modal dialog: the page
    // behind can't be scrolled or reached with Tab, focus starts on the first
    // link, and Escape closes it and returns focus to the menu button.
    useEffect(() => {
        if (!isOpen) return;
        const page = document.getElementById('page');
        document.body.style.overflow = 'hidden';
        if (page) page.inert = true;
        document.querySelector<HTMLElement>('#mobile-menu a')?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return;
            setIsOpen(false);
            menuButtonRef.current?.focus();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = '';
            if (page) page.inert = false;
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    // Scrolls to the contact footer and moves keyboard focus there too.
    const goToContact = () => {
        const contact = document.getElementById('contact');
        if (!contact) return;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        contact.focus({ preventScroll: true });
        contact.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
        });
    };

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        goToContact();
    };

    const handleMobileContactClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        setIsOpen(false);
        // Wait for the menu to close first.
        setTimeout(goToContact, 300);
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsOpen(false);
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={introOnLoad ? hiddenNav : false}
                animate={
                    introOnLoad && introMode === 'pending'
                        ? hiddenNav
                        : { y: 0 }
                }
                transition={
                    introMode === 'play'
                        ? {
                              duration: 1,
                              ease: EASE_OUT,
                              delay: NAVBAR_DELAY,
                          }
                        : { duration: 0 }
                }
                className="fixed z-50 top-0 inset-x-0 bg-background border-b border-foreground/10"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: EASE_IN_OUT }}
                    >
                        <Link
                            href="/"
                            className="font-semibold text-lg"
                            onClick={handleLogoClick}
                            aria-label="Go to home page"
                        >
                            {/* ÅF in Montserrat Medium, the same letters as the
                                hero name, outlined so it never waits on the font. */}
                            {/*<svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000344753 30.7539L10.1443 8.3539H13.3123L23.4883 30.7539H20.1283L11.0723 10.1459H12.3523L3.29634 30.7539H0.000344753ZM4.32034 25.1539L5.18435 22.5939H17.7923L18.7203 25.1539H4.32034ZM11.7123 6.97791C11.051 6.97791 10.4537 6.81791 9.92035 6.49791C9.38701 6.17791 8.96035 5.7619 8.64035 5.2499C8.34168 4.7379 8.19235 4.16191 8.19235 3.52191C8.19235 2.88191 8.34168 2.29524 8.64035 1.76191C8.96035 1.22857 9.38701 0.801905 9.92035 0.481905C10.4537 0.161905 11.051 0.00190544 11.7123 0.00190544C12.395 0.00190544 13.003 0.161905 13.5363 0.481905C14.0697 0.801905 14.4857 1.22857 14.7843 1.76191C15.1043 2.29524 15.2643 2.88191 15.2643 3.52191C15.2643 4.16191 15.1043 4.7379 14.7843 5.2499C14.4857 5.7619 14.0697 6.17791 13.5363 6.49791C13.003 6.81791 12.395 6.97791 11.7123 6.97791ZM11.7123 5.63391C12.331 5.63391 12.8323 5.43124 13.2163 5.02591C13.6217 4.62057 13.8243 4.11924 13.8243 3.52191C13.8243 2.90324 13.6217 2.39124 13.2163 1.9859C12.8323 1.58057 12.331 1.3779 11.7123 1.3779C11.115 1.3779 10.6137 1.58057 10.2083 1.9859C9.82435 2.3699 9.63235 2.88191 9.63235 3.52191C9.63235 4.11924 9.82435 4.62057 10.2083 5.02591C10.5923 5.43124 11.0937 5.63391 11.7123 5.63391ZM21.0698 30.7539V8.3539H36.8778V11.1379H24.2698V30.7539H21.0698ZM23.9498 21.6979V18.9459H35.5018V21.6979H23.9498Z" fill="#040404"/>
</svg>*/}
                            Åke Flatholm
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
                                <Link href={link.href} className="text-base">
                                    {link.label}
                                </Link>
                                <motion.span
                                    variants={{
                                        rest: {
                                            width: isCurrent(link.href)
                                                ? '100%'
                                                : 0,
                                        },
                                        hover: { width: '100%' },
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: EASE_IN_OUT,
                                    }}
                                    className="absolute left-0 -bottom-1 h-px bg-foreground"
                                />
                            </motion.div>
                        ))}
                        {/* The main action, so a button rather than a link: a
                            square hairline box, like the site's other lines,
                            that fills in on hover. */}
                        <a
                            href="#contact"
                            onClick={handleContactClick}
                            className="border border-foreground px-5 py-2 text-base transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background motion-reduce:transition-none"
                        >
                            Contact
                        </a>
                        <ThemeToggle />
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            ref={menuButtonRef}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: 45, y: 8 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-foreground origin-center"
                            />
                            <motion.span
                                animate={
                                    isOpen ? { opacity: 0 } : { opacity: 1 }
                                }
                                transition={{ duration: 0.2 }}
                                className="block w-6 h-0.5 bg-foreground"
                            />
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: -45, y: -8 }
                                        : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-foreground origin-center"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE_OUT }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                            aria-hidden="true"
                        />

                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'tween',
                                duration: 0.5,
                                ease: EASE_OUT,
                            }}
                            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background border-l border-foreground/10 z-40 md:hidden flex flex-col items-center justify-center gap-3 px-6 pt-24 pb-8"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation menu"
                        >
                            {[
                                ...navLinks,
                                {
                                    href: '#contact',
                                    label: 'Contact',
                                    isContact: true,
                                },
                            ].map((link) => {
                                const isActive = isCurrent(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={
                                            link.isContact
                                                ? handleMobileContactClick
                                                : () => setIsOpen(false)
                                        }
                                        className={`text-lg text-center py-2 underline-offset-8 decoration-1 ${
                                            link.isContact
                                                ? 'mt-4 border border-foreground px-8 py-3 transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-foreground hover:text-background motion-reduce:transition-none'
                                                : isActive
                                                  ? 'underline'
                                                  : 'hover:underline decoration-foreground/40'
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
