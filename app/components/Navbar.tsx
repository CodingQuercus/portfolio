"use client"
import Link from "next/link";
import { useState, useEffect } from "react"
import { motion, scale } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed z-50 px-4 md:px-10 py-4 left-1/2 -translate-x-1/2 top-0 w-full transition
            ${scrolled ? "backdrop-blur-sm shadow-sm" : "bg-transparent"}
        `}>
            <div className="flex items-center justify-between">

                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/" className="font-semibold text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 32" fill="none">
                            <path d="M6.0455 31.4545H4.43459e-05L11.716 8.18182H19.2046L23.1932 31.4545H17.1478L14.591 14.0455H14.4091L6.0455 31.4545ZM6.77277 22.2955H19.4091L18.6819 26.5682H6.0455L6.77277 22.2955ZM15.75 6.92045C14.75 6.92045 13.9546 6.57576 13.3637 5.88636C12.7728 5.19697 12.5531 4.37121 12.7046 3.40909C12.8107 2.77273 13.0607 2.19697 13.4546 1.68182C13.8561 1.15909 14.3447 0.749999 14.9205 0.454546C15.5038 0.151515 16.1213 0 16.7728 0C17.447 0 18.0379 0.159091 18.5455 0.477272C19.0531 0.787879 19.4281 1.20833 19.6705 1.73864C19.9129 2.26894 19.9697 2.85985 19.841 3.51136C19.7273 4.13258 19.4697 4.70455 19.0682 5.22727C18.6667 5.74242 18.1743 6.1553 17.591 6.46591C17.0076 6.76894 16.394 6.92045 15.75 6.92045ZM16.0341 4.88636C16.4357 4.88636 16.8107 4.74621 17.1591 4.46591C17.5152 4.18561 17.7197 3.84848 17.7728 3.45455C17.8182 3.06061 17.7197 2.72727 17.4773 2.45455C17.2349 2.17424 16.9016 2.03409 16.4773 2.03409C16.0758 2.03409 15.7122 2.17424 15.3864 2.45455C15.0607 2.72727 14.8599 3.06061 14.7841 3.45455C14.716 3.84091 14.8031 4.17803 15.0455 4.46591C15.2879 4.74621 15.6175 4.88636 16.0341 4.88636ZM19.9389 31.4545L23.8025 8.18182H39.6889L38.9162 12.75H28.6548L27.8821 17.5227H37.1321L36.3594 22.1023H27.1094L25.5639 31.4545H19.9389Z" fill="#040404" />
                        </svg>
                    </Link>
                </motion.div>

                <div className="flex items-center gap-10">

                    <motion.div
                        className="relative w-fit"
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                    >
                        <Link href="/" className="text-lg">
                            Home
                        </Link>

                        <motion.span
                            variants={{
                                rest: { width: pathname === "/" ? "100%" : 0 },
                                hover: { width: "100%" }
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute left-0 -bottom-1 h-[2px] bg-foreground"
                        />
                    </motion.div>

                    <motion.div
                        className="relative w-fit"
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                    >
                        <Link href="/about" className="text-lg">
                            About
                        </Link>

                        <motion.span
                            variants={{
                                rest: { width: pathname === "/about" ? "100%" : 0 },
                                hover: { width: "100%" }
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute left-0 -bottom-1 h-[2px] bg-foreground"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.05}}>
                        <Link
                            href="#contact"
                            className="px-4 py-2 bg-foreground rounded-full text-background hover:opacity-50 transition"
                        >
                            Contact
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
