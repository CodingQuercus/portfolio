"use client"

import Navbar from "../components/Navbar"

import { motion } from "framer-motion"

export default function About() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
            <Navbar></Navbar>
            <div className="w-full max-w-[1200px] px-4 sm:px-10 z-20 pt-20">
                <h1 className="text-5xl font-medium text-left">About</h1>
                <div className="text-base leading-relaxed flex flex-col gap-2 w-max-[600px] my-4">

                    <p>
                        Hey, I&apos;m Åke. A Master of Science student in Interaction Technology and Design.
                    </p>
                </div>
				<motion.button whileHover={{scale: 1.05}} className="px-8 py-2 bg-foreground text-background rounded-full flex flex-row gap-1 cursor-pointer hover:opacity-50">
                    <a href="/Ake_Flatholm_Resume.pdf"  target="_blank">Resume</a>
                </motion.button>
            </div>
        </div>
    )
}