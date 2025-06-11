'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ navigateToSection }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="min-h-screen flex flex-col items-center px-8 md:px-16 py-16 justify-start text-center gap-5 transition-colors duration-300 bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]">
            <div className="space-y-4 w-full max-w-4xl">
                <motion.div
                    className="text-5xl md:text-7xl lg:text-9xl font-extrabold flex gap-2"
                    initial={{ x: '-300%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 70, damping: 10, delay: 0.3 }}
                >
                    <span className="h-20 md:h-28 lg:h-32 flex items-center text-[#282828] dark:text-[#f3f3f3]">ÅKE</span>
                    <motion.span
                        className="flex-1 h-20 md:h-28 lg:h-32 flex items-center justify-center bg-[#328e6e] text-[#f3f3f3] rounded-full text-xl md:text-2xl lg:text-4xl font-semibold relative"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 70 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000080] text-[#f3f3f3] text-base md:text-xl lg:text-2xl font-semibold rounded-full opacity-0 cursor-pointer"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            M.Sc. Student
                        </motion.div>
                    </motion.span>
                </motion.div>

                <motion.div
                    className="text-xl md:text-3xl lg:text-4xl font-semibold flex gap-2"
                    initial={{ x: '300%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 10, delay: 0.9 }}
                >
                    <motion.span
                        className="flex-1 h-20 md:h-28 lg:h-32 flex items-center justify-center bg-[#328e6e] text-[#f3f3f3] rounded-full relative"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 60 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000080] text-[#f3f3f3] text-base md:text-xl lg:text-2xl font-semibold rounded-full opacity-0 cursor-pointer"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Interaction Technology and Design
                        </motion.div>
                    </motion.span>
                </motion.div>

                <motion.div
                    className="flex text-5xl md:text-7xl lg:text-9xl font-extrabold gap-2"
                    initial={{ x: '-300%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 10, delay: 1.5 }}
                >
                    <motion.span
                        className="h-20 md:h-28 lg:h-32 flex-1 flex items-center justify-center bg-[#328e6e] text-[#f3f3f3] px-4 rounded-full text-lg md:text-2xl lg:text-4xl font-bold relative"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 60 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000080] text-[#f3f3f3] text-base md:text-xl lg:text-2xl font-semibold rounded-full opacity-0 cursor-pointer"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            @UMU
                        </motion.div>
                    </motion.span>
                    <span className="flex-1 h-20 md:h-28 lg:h-32 flex items-center">FLATHOLM</span>
                </motion.div>
            </div>
            <motion.div
                className="flex flex-row py-4 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
            >
                <motion.button
                    className="bg-[#328e6e] border-[#328e6e] border-2 px-2 py-2 w-36 h-12 md:w-44 md:h-16 rounded-lg cursor-pointer text-[#f3f3f3]"
                    onClick={() => navigateToSection("contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact
                </motion.button>

                <motion.button
                    className="border-[#328e6e] border-2 px-2 py-2 w-36 h-12 md:w-44 md:h-16 rounded-lg cursor-pointer text-[#328e6e] hover:bg-[#328e6e] hover:border-[#328e6e] hover:text-[#f3f3f3]"
                    onClick={() => navigateToSection("projects")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Projects
                </motion.button>
            </motion.div>
        </section>
    )
}
