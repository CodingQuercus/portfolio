'use client'

import React from 'react'
import { motion } from 'framer-motion'

const anim = {
    open: {
        x: '0',
        transition: { type: 'tween', duration: 0.4 },
    },
    closed: {
        x: '100%',
        transition: { type: 'tween', duration: 0.4 },
    },
}

export default function Menu({ menuIsActive, toggleMenu, navigateToSection, currentSection }) {
    const sections = [
        { id: 'home', label: 'HOME' },
        { id: 'about', label: 'ABOUT ME' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'contact', label: 'CONTACT' },
    ]

    const handleClick = (id) => {
        toggleMenu(false)
        navigateToSection(id)
    }

    return (
        <motion.div
            className="fixed top-0 right-0 h-full w-64 md:w-72 xl:w-96 2xl:w-xl bg-[#328e6e] z-20 flex flex-col justify-center shadow-xl"
            initial="closed"
            animate={menuIsActive ? 'open' : 'closed'}
            variants={anim}
        >
            <div className="flex flex-col">
                {sections.map(({ id, label }) => {
                    const isActive = currentSection === id

                    return (
                        <button
                            key={id}
                            className={`text-2xl font-bold py-4 px-4 text-center transition-colors cursor-pointer
                                        ${isActive ? 'bg-[#282828] text-[#f3f3f3s]' : 'text-white hover:bg-[#282828]'}
                                        `}
                            onClick={() => handleClick(id)}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </motion.div>
    )
}
