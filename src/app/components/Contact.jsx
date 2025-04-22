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
            className="px-6 sm:px-10 md:px-20 pb-[20px] flex flex-col"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl sm:max-w-full">
                <motion.div
                    className="bg-[#00000080] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                    <FaEnvelope
                        size={36}
                        className="text-[#f3f3f3] mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2 text-[#f3f3f3]">Email</h2>
                    <p className="text-[#f3f3f3] text-sm mb-4">{email}</p>
                    <div className="flex gap-3">
                        <motion.button
                            onClick={handleCopyEmail}
                            className="bg-[#f3f3f3] text-[#282828] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope size={16} /> Copy
                        </motion.button>
                        <motion.a
                            href={`mailto:${email}`}
                            className="bg-[#f3f3f3] text-[#282828] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MdOpenInNew size={16} /> Open
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-[#00000080] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                    <FaLinkedin size={36} className="text-[#f3f3f3] mb-4" />
                    <h2 className="text-xl font-semibold mb-2 text-[#f3f3f3]">LinkedIn</h2>
                    <p className="text-[#f3f3f3] text-sm mb-4">Connect with me!</p>
                    <motion.button
                        onClick={handleLinkedInRedirect}
                        className="bg-[#f3f3f3] text-[#282828] px-5 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin size={16} /> Visit
                    </motion.button>
                </motion.div>
            </div>

            {alertMessage && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 z-50"
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
