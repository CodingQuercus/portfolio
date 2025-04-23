'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from 'react-icons/md'

import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('')

    const handleClick = (section) => {
        setActiveSection(activeSection === section ? '' : section)
    }

    useEffect(() => {
        if (activeSection) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [activeSection])

    const sections = [
        { id: 'about', label: 'ABOUT', content: <About /> },
        { id: 'projects', label: 'PROJECTS', content: <Projects /> },
        { id: 'contact', label: 'CONTACT', content: <Contact /> },
    ]

    return (
        <div id="navigation" className="flex justify-center items-center py-20 min-h-screen bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]">
            <div className="flex flex-col w-full">
                {sections.map(({ id, label }) => (
                    <button
                        key={id}
                        className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-6 sm:py-8 md:py-10 w-full text-center px-4 md:pl-10 md:pr-20 transition-colors cursor-pointer
                            ${activeSection === id ? 'bg-[#00000080]' : 'hover:bg-[#00000080]'}`}
                        onClick={() => handleClick(id)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {sections.map(({ id, content }) =>
                    activeSection === id ? (
                        <motion.div
                            key="modal"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                            className="fixed inset-0 z-40 bg-[#f3f3f3] dark:bg-[#282828] overflow-y-auto flex flex-col items-center"
                        >
                            <div className="sticky top-0 w-full max-w-screen-lg bg-inherit z-50 border-b border-[#f3f3f3]">
                                <div className="relative flex items-center justify-center py-4 sm:py-6">
                                    <h2 className="text-4xl sm:text-6xl md:text-7xl text-center">
                                        {sections.find((section) => section.id === activeSection)?.label}
                                    </h2>

                                    <motion.button
                                        key="close-button"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setActiveSection('')}
                                        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg bg-black text-[#f3f3f3] p-2 sm:p-3 rounded-full hover:bg-[#328E6E] cursor-pointer"
                                        aria-label="Close section"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <MdClose size={24} />
                                    </motion.button>
                                </div>
                            </div>


                            <div className="w-full max-w-screen-lg p-6 pt-4 sm:pt-8">
                                {content}
                            </div>
                        </motion.div>

                    ) : null
                )}
            </AnimatePresence>
        </div>
    )
}
