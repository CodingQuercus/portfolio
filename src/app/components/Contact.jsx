"use client";

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [alertMessage, setAlertMessage] = useState("");

    const email = "akeflatholm@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/akeflatholm";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setAlertMessage("Email copied!");
            setTimeout(() => setAlertMessage(""), 2000);
        });
    };

    const handleLinkedInRedirect = () => {
        window.open(linkedinUrl, "_blank");
    };

    return (
        <div
            id="contact"
            className="w-full h-screen px-10 flex flex-col justify-start p-40 items-center"
        >
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 md:gap-12 lg:gap-16 sm:max-w-full">
                <motion.div
                    className="bg-transparent flex flex-col sm:flex-row justify-between sm:items-center text-center gap-4 w-full max-w-3xl"
                >
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <FaEnvelope
                                className="text-4xl md:text-4xl lg:text-5xl text-[#282828] dark:text-[#f3f3f3]"
                            />
                            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#282828] dark:text-[#f3f3f3]">Email</h2>
                        </div>

                        <p className="text-lg md:text-xl lg:text-2xl text-[#282828] dark:text-[#f3f3f3] break-all">{email}</p>
                    </div>

                    <div className="flex flex-row sm:flex-col gap-2">
                        <motion.button
                            onClick={handleCopyEmail}
                            className="bg-[#328e6e] text-[#f3f3f3] dark px-4 py-2 border-2 border-[#328e6e] rounded-xl flex justify-center items-center gap-2 hover:bg-[#328e6e90] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E] w-[120px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope size={16} /> Copy
                        </motion.button>
                        <motion.a
                            href={`mailto:${email}`}
                            className="bg-[#328e6e] text-[#f3f3f3] dark px-4 py-2 border-2 border-[#328e6e] rounded-xl flex justify-center items-center gap-2 hover:bg-[#328e6e90] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E] w-[120px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MdOpenInNew size={16} /> Open
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-transparent flex flex-col sm:flex-row justify-between sm:items-center text-center gap-4 w-full max-w-3xl"
                >
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <FaLinkedin
                                className="text-4xl md:text-4xl lg:text-5xl text-[#282828] dark:text-[#f3f3f3]"
                            />
                            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#282828] dark:text-[#f3f3f3]">LinkedIn</h2>
                        </div>
                        <p className="text-lg md:text-xl lg:text-2xl text-[#282828] dark:text-[#f3f3f3]">Connect with me!</p>

                    </div>

                    <div className="flex flex-row sm:flex-col gap-2">
                        <motion.button
                            onClick={handleLinkedInRedirect}
                            className="bg-[#328e6e] text-[#f3f3f3] dark px-4 py-2 border-2 border-[#328e6e] rounded-xl flex justify-center items-center gap-2 hover:bg-[#328e6e90] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E] w-[120px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLinkedin size={16} /> Visit
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {alertMessage && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#328e6e] text-[#f3f3f3] py-2 px-2 rounded-lg shadow-lg flex items-center gap-2 z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    🎉 <span>{alertMessage}</span> 🎉
                </motion.div>
            )}
        </div>
    );
}
