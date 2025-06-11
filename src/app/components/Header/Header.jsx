"use client";

import { AnimatePresence, motion } from "framer-motion";

import { IoMenu, IoClose } from "react-icons/io5";

export default function Header({ currentSection, menuIsActive, toggleMenu, navigateToSection }) {

    const sectionLabels = {
        home: '',
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        contact: 'CONTACT',
    }

    return (
        <div className="w-full flex flex-row bg-[#f3f3f3] dark:bg-[#282828] justify-between items-center sticky top-0 py-4 z-30 px-10 md:px-16 xl:px-48 2xl:px-72 shadow-md transition-colors duration-300">
            <motion.button
                onClick={() => navigateToSection("home")}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 text-[#f3f3f3] bg-[#282828] dark:text-[#282828] dark:bg-[#f3f3f3] rounded-lg w-12 h-12 md:h-16 md:w-16 cursor-pointer hover:bg-[#f3f3f3] hover:text-[#282828] hover:border-[#282828] hover:border-2 transition-colors dark:hover:bg-[#282828] dark:hover:text-[#f3f3f3] dark:hover:border-[#f3f3f3]"
            >
                <svg width="36" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors">
                    <path d="M9.01598 40H0.493253L14.9251 10.9091H25.7205L30.4933 40H21.9705L19.1296 18.9205H18.9023L9.01598 40ZM9.35689 28.5227H25.3796L24.3569 34.4318H8.33416L9.35689 28.5227ZM20.6353 9.43182C19.3853 9.43182 18.391 9.00568 17.6523 8.15341C16.9137 7.29167 16.6391 6.25947 16.8285 5.05682C16.9611 4.24242 17.283 3.50379 17.7944 2.84091C18.3058 2.17803 18.9355 1.65246 19.6836 1.2642C20.4317 0.875946 21.2224 0.681818 22.0558 0.681818C22.908 0.681818 23.6514 0.880681 24.2859 1.27841C24.9298 1.66667 25.4033 2.19223 25.7063 2.85511C26.0094 3.50852 26.0804 4.24242 25.9194 5.05682C25.7679 5.85227 25.4317 6.58144 24.9109 7.24432C24.39 7.9072 23.7556 8.4375 23.0075 8.83523C22.2594 9.23295 21.4686 9.43182 20.6353 9.43182ZM21.0898 6.76136C21.5728 6.76136 22.0273 6.59564 22.4535 6.2642C22.8891 5.92329 23.1353 5.5161 23.1921 5.04261C23.2489 4.56913 23.1258 4.1714 22.8228 3.84943C22.5198 3.51799 22.1126 3.35227 21.6012 3.35227C21.1183 3.35227 20.6779 3.51799 20.2802 3.84943C19.8919 4.18087 19.6505 4.58333 19.5558 5.05682C19.4705 5.51136 19.5747 5.90909 19.8683 6.25C20.1713 6.59091 20.5785 6.76136 21.0898 6.76136ZM27.2951 40L32.1246 10.9091H52.5792L51.4996 17.2727H38.9428L38.1474 22.2727H49.4542L48.3746 28.6364H37.0678L35.1928 40H27.2951Z" fill="currentColor" />
                </svg>

            </motion.button>
            <AnimatePresence mode="wait">
                {currentSection !== 'home' && (
                    <motion.p
                        key={currentSection}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="font-bold text-2xl md:text-4xl uppercase text-[#f3f3f3]"
                    >
                        {sectionLabels[currentSection]}
                    </motion.p>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => toggleMenu(!menuIsActive)}
                className="flex items-center justify-center gap-2 text-[#f3f3f3] bg-[#282828] dark:text-[#282828] dark:bg-[#f3f3f3] rounded-lg w-12 h-12 md:h-16 md:w-16 cursor-pointer hover:bg-[#f3f3f3] hover:text-[#282828] hover:border-[#282828] hover:border-2 dark:hover:bg-[#282828] dark:hover:text-[#f3f3f3] dark:hover:border-[#f3f3f3]"
                whileHover={{ scale: 1.05 }}
                aria-label={menuIsActive ? 'Close menu' : 'Open menu'}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {menuIsActive ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: "flex" }}
                        >
                            <IoClose size={32} className="sm:size-8 md:size-12"/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: "flex" }}
                        >
                            <IoMenu size={32} className="sm:size-8 md:size-12"/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}