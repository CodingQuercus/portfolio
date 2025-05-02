"use client";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='flex flex-col align-middle items-center pb-5 bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3] px-30'>
            <div className="mt-12 flex items-center gap-6">
                    <motion.a
                        href="https://github.com/CodingQuercus"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-[#F3F3F3] hover:underline transition focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E] focus:rounded-lg"
                    >
                        <FaGithub size={24}/>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/akeflatholm"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-[#F3F3F3] hover:underline transition focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E] focus:rounded-lg"
                    >
                        <FaLinkedin size={24}/>
                    </motion.a>
            </div>

            <footer className="mt-8 text-sm lg:text-md text-center">
                Developed with <strong>Next.js</strong> and <strong>Framer Motion</strong> by <strong>Åke Flatholm</strong> © 2025
            </footer>

        </div>
    )
}