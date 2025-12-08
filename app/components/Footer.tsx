"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        <section id="contact" className="w-full max-w-[1200px] px-10 md:px-20">
            <div className="flex flex-col mb-10">
                <div className="text-4xl sm:text-5xl font-medium mb-4">Let&apos;s get in touch</div>

                <div className="flex flex-col w-40 gap-2">

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="flex flex-row items-center justify-between cursor-pointer"
                    >
                        <Link 
                            href="https://www.linkedin.com/in/akeflatholm/" 
                            target="_blank" 
                            className="text-2xl md:text-3xl"
                        >
                            LinkedIn
                        </Link>

                        <motion.span
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <ChevronRight size={32}/>
                        </motion.span>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="flex flex-row items-center justify-between cursor-pointer"
                    >
                        <Link href="mailto:akeflatholm@gmail.com" className="text-2xl md:text-3xl">
                            Email
                        </Link>

                        <motion.span
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <ChevronRight size={32}/>
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
