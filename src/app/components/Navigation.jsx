'use client'

import { useState } from 'react'
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

    const sections = [
        { id: 'about', label: 'ABOUT', content: <About /> },
        { id: 'projects', label: 'PROJECTS', content: <Projects /> },
        { id: 'contact', label: 'CONTACT', content: <Contact /> },
    ]

    return (
        <div className="min-h-screen flex justify-center items-start bg-[#f3f3f3] text-[#282828] dark:bg-[#282828] dark:text-[#f3f3f3]">
            <div className="flex flex-col w-full">
                {sections.map(({ id, label, content }) => (
                    <div key={id} className="relative">
                        <button
                            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl py-6 sm:py-8 md:py-10 w-full text-center px-4 md:pl-10 md:pr-20 transition-colors
                                ${activeSection === id ? 'bg-[#00000080]' : 'hover:bg-[#00000080]'}`}
                            onClick={() => handleClick(id)}
                        >
                            {label}
                        </button>

                        <motion.div
                            className="mt-4 flex justify-center"
                            initial={{ height: 0 }}
                            animate={{ height: activeSection === id ? 'auto' : 0 }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ overflow: 'hidden' }}
                        >
                            {activeSection === id && (
                                <div className="p-4 bg-[#f3f3f3] dark:bg-[#282828] w-full max-w-screen-lg">
                                    {content}
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {activeSection && (
                    <motion.button
                        key="close-button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveSection('')}
                        className="fixed bottom-1/2 right-6 z-50 text-xl sm:text-2xl bg-[#000000] text-white p-3 sm:p-4 rounded-full hover:bg-[#328E6E] cursor-pointer"
                        aria-label="Close section"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MdClose size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}
