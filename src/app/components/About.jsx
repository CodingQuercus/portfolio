"use client";

import { motion } from "framer-motion";
import { MdOpenInNew, MdDownload } from 'react-icons/md';

export default function About() {
    return (
        <div id="about" className="px-6 sm:px-10 md:px-20 pb-[40px]">
            <div className="bg-[#00000080] rounded-2xl shadow-lg px-6 py-8 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-left sm:text-base text-[#f3f3f3] font-normal leading-relaxed">
                        Hey! I’m Åke, a fourth-year student in the M.Sc. programme in Interaction
                        Technology and Design at Umeå University. This spring, I’m finishing my final
                        courses before starting my master’s thesis in the fall.
                        <br />
                        <br />
                        Over the past few years, I’ve developed a passion for UI/UX and front-end
                        development. I aim to create intuitive and user-friendly digital experiences.
                        <br />
                        <br />
                        When I’m not designing or coding, you’ll probably find me exercising or
                        playing music.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="images/about-img.png"
                        alt="Åke Flatholm"
                        className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 border-[#f3f3f3] border-3"
                    />
                </div>
            </div>

            <div className="mt-10 flex flex-col items-start sm:items-start">
                <h3 className="font-bold text-left text-[#f3f3f3]">Download or view my CV</h3>
                <div className="flex flex-wrap justify-start gap-4 mt-3">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="cv/Ake_Flatholm_CV.pdf"
                        download
                        className="flex flex-row justify-center items-center gap-2 px-5 py-2 w-[140px] border border-[#f3f3f3] bg-[#f3f3f3] text-[#282828] rounded-lg shadow-md cursor-pointer text-center"
                    >
                        <MdDownload /> Download
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="cv/Ake_Flatholm_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row justify-center items-center gap-2 px-5 py-2 w-[140px] border border-[#f3f3f3] text-[#f3f3f3] rounded-lg shadow-md cursor-pointer text-center"
                    >
                        <MdOpenInNew size={16} /> View
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
