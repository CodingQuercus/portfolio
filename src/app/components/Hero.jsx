'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { FaArrowDown } from 'react-icons/fa'


export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        setMounted(true)
        const timer = setTimeout(() => setShowScroll(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    if (!mounted) return null

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-300 bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]">
            <div className="space-y-4 w-full max-w-4xl">
                <motion.div
                    className="text-5xl md:text-7xl lg:text-9xl font-extrabold flex gap-2"
                    initial={{ x: '-300%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 70, damping: 10, delay: 0.3 }}
                >
                    <span className="h-20 md:h-28 lg:h-32 flex items-center text-[#f3f3f3]">ÅKE</span>
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
                            M.Sc Student
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

            {showScroll && (
                <motion.div
                    className="absolute bottom-10 text-lg text-[#328e6e] cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                        const el = document.getElementById('navigation');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <FaArrowDown />
                        <p className="ml-2">Scroll down</p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}
