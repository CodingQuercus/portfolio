"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function About() {
    return (
        <motion.div
            className="min-h-screen w-full max-w-[1200px] px-10 md:px-20 z-20 pt-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            >

                <h1 className="text-5xl font-medium text-left">About</h1>
                <div className="text-base text-neutral-600 leading-relaxed flex flex-col gap-2 w-full sm:w-[500px] my-4">
                    <p>
                        Hi, I&apos;m Åke. A Master of Science student in Interaction Technology and Design.
                    </p>
                    <p>
                        I came into this field without a programming background, but early in my studies I discovered that I really enjoy working with code and the structure behind digital interfaces. That led me toward frontend development and interaction design, where I get to combine logical problem-solving with creating clear and usable experiences.
                    </p>
                    <p>
                        Outside of my studies, I enjoy exercising, listening to and playing music, and spending time with my family and friends.
                    </p>

                </div>
            </motion.div>
            <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
                className="flex flex-row cursor-pointer"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="./Ake_Flatholm_Resume.pdf"
                    target="_blank"
                    className="flex flex-row items-center gap-1 px-8 py-2 bg-foreground text-background text-base rounded-full hover:opacity-50"
                >
                    Resume
                    <motion.span
						whileHover={{ x: 4 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
                        <ExternalLink size={16}/>
					</motion.span>
                </motion.a>
            </motion.button>
        </motion.div>
    )
}