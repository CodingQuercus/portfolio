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
            className="w-screen h-screen px-10 py-16 flex flex-col justify-start items-center gap-11"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:max-w-full">
                <motion.div
                    className="bg-[#f3f3f3] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                    <FaEnvelope
                        size={36}
                        className="text-[#282828] mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2 text-[#282828]">Email</h2>
                    <p className="text-[#282828] text-sm mb-4">{email}</p>
                    <div className="flex gap-3">
                        <motion.button
                            onClick={handleCopyEmail}
                            className="bg-[#328e6e] text-[#f3f3f3] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#328e6e] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope size={16} /> Copy
                        </motion.button>
                        <motion.a
                            href={`mailto:${email}`}
                            className="bg-[#328e6e] text-[#f3f3f3] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#328e6e] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MdOpenInNew size={16} /> Open
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-[#f3f3f3] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                    <FaLinkedin size={36} className="text-[#282828] mb-4" />
                    <h2 className="text-xl font-semibold mb-2 text-[#282828]">LinkedIn</h2>
                    <p className="text-[#282828] text-sm mb-4">Connect with me!</p>
                    <motion.button
                        onClick={handleLinkedInRedirect}
                        className="bg-[#328e6e] text-[#f3f3f3] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#328e6e] focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin size={16} /> Visit
                    </motion.button>
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
