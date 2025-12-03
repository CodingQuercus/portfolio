"use client"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import { motion } from "framer-motion"

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
                <div className="text-base leading-relaxed flex flex-col gap-2 w-max-[600px] my-4">
                    <p>
                        Hey, I&apos;m Åke. A Master of Science student in Interaction Technology and Design.
                    </p>
                </div>
                </motion.div>
				<motion.button 
                    whileHover={{scale: 1.05}} 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
                    className="px-8 py-2 bg-foreground text-background rounded-full flex flex-row gap-1 cursor-pointer hover:opacity-50"
                >
                    <a href="./Ake_Flatholm_Resume.pdf"  target="_blank">Resume</a>
                </motion.button>
            </motion.div>
    )
}