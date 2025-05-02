'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose, MdHouse } from 'react-icons/md'

import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import { FaArrowDown } from 'react-icons/fa'

const sections = [
    { id: 'about', label: 'ABOUT ME', content: <About /> },
    { id: 'projects', label: 'PROJECTS', content: <Projects /> },
    { id: 'contact', label: 'CONTACT', content: <Contact /> },
]

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [transitionDirection, setTransitionDirection] = useState('in')
    const [pendingSection, setPendingSection] = useState('')

    const handleClick = (section) => {
        if (section === activeSection) {
            setTransitionDirection('out')
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveSection('')
                setIsTransitioning(false)
            }, 600)
        } else {
            setPendingSection(section)
            setTransitionDirection('in')
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveSection(section)
                setPendingSection('')
                setIsTransitioning(false)
            }, 600)
        }
    }

    useEffect(() => {
        if (activeSection) {
            document.body.classList.add('scroll-lock')
        } else {
            document.body.classList.remove('scroll-lock')
        }
        return () => {
            document.body.classList.remove('scroll-lock')
        }
    }, [activeSection])


    return (
        <div id="navigation" className="relative flex justify-center items-center py-20 min-h-screen bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]">
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="transition-overlay"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 bg-[#328E6E]"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col w-full">
                {sections.map(({ id, label }) => (
                    <button
                        key={id}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-6 sm:py-8 md:py-10 w-full text-center px-4 md:pl-10 md:pr-20 transition duration-500 cursor-pointer hover:bg-[#328E6E] focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                        onClick={() => handleClick(id)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {activeSection && !isTransitioning && (
                    <motion.div
                        key={activeSection}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-[#f3f3f3] dark:bg-[#282828] overflow-y-auto flex flex-col items-center"
                    >
                        <div className="sticky top-0 w-full max-w-screen-lg bg-inherit z-50 border-b border-[#f3f3f3]">
                            <div className="relative flex items-center justify-center py-4 sm:py-6">
                                <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-semibold">
                                    {sections.find((section) => section.id === activeSection)?.label}
                                </h2>

                                <motion.button
                                    key="close-button"
                                    onClick={() => handleClick(activeSection)}
                                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg bg-[#f3f3f3] text-[#282828] p-2 sm:p-3 rounded-full hover:bg-[#328E6E] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                                    aria-label="Close section"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <MdClose size={24} />
                                </motion.button>
                            </div>
                        </div>

                        <div className="w-full max-w-screen-lg p-6 pt-4 sm:pt-8">
                            {sections.find((section) => section.id === activeSection)?.content}
                            <div className="flex justify-center my-5">
                                {sections.findIndex((s) => s.id === activeSection) < sections.length - 1 ? (
                                    <motion.button
                                        onClick={() => {
                                            const currentIndex = sections.findIndex((s) => s.id === activeSection)
                                            const nextSection = sections[currentIndex + 1].id
                                            handleClick(nextSection)
                                        }}
                                        className="bg-[#f3f3f3] text-[#282828] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#328e6e] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaArrowDown className="flex-1" />
                                        {sections[sections.findIndex((s) => s.id === activeSection) + 1].label}
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        onClick={() => {
                                            handleClick(activeSection)
                                            window.scrollTo({top: 0})
                                        }}
                                        className="bg-[#f3f3f3] text-[#282828] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#328e6e] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MdHouse className="flex-1" />
                                        HOME
                                    </motion.button>
                                )}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
