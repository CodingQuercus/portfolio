"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="flex flex-col items-start justify-evenly min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-2"
            >
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                >
                    <div className="text-5xl font-semibold sm:text-7xl md:text-8xl lg:text-9xl">
                        Åke Flatholm
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
                    className="flex flex-col gap-1 sm:gap-2 sm:w-4/5 md:w-3/4"
                >
                    <p className="text-base md:text-2xl">
                        Hi, I&apos;m a Master of Science Student in Interaction Technology and Design from Umeå.
                    </p>
                    <p className="text-base md:text-2xl leading-normal">
                        Currently working on my master&apos;s thesis, where I design and evaluate AI-driven conversational user interfaces, with a focus on user trust.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
