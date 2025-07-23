"use client";

import { motion } from "framer-motion";
import { MdOpenInNew, MdDownload } from 'react-icons/md';

export default function About() {
    return (
        <div id="about" className="w-full min-h-screen px-10 md:px-16 xl:px-72 2xl:px-96 py-4 xl:py-16 flex flex-col justify-start items-center">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col w-full md:w-1/2 gap-8">
                    <p className="text-left sm:text-base text-[#282828] dark:text-[#f3f3f3] font-normal leading-relaxed">
                        Hey! I’m Åke, a soon-to-be fifth-year student in the M.Sc. program in Interaction Technology and Design at 
                        Umeå University. I’m currently wrapping up my final courses and looking forward to starting with my master’s thesis this fall.
                        <br />
                        <br />
                        Over the past few years, I’ve developed a interest in UI/UX design and front-end development. 
                        I enjoy turning ideas into intuitive, accessible, and visually engaging experiences.
                        <br />
                        <br />
                        When I’m not designing or coding, you’ll probably find me exercising or
                        playing music.
                    </p>

                    <div className="flex flex-wrap justify-start gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            download
                            className="flex flex-row justify-center items-center gap-2 px-2 py-2 w-40 h-12 md:w-44 md:h-16 border-2 border-[#328e6e] bg-[#328e6e] text-[#f3f3f3] rounded-lg shadow-md cursor-pointer hover:bg-[#328e6e90] hover:border-[#328e6e] text-center"
                        >
                            <MdDownload /> Download CV
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row justify-center items-center gap-2 px-2 py-2 w-40 h-12 md:w-44 md:h-16 border-2 border-[#328e6e] bg-[#328e6e] text-[#f3f3f3] rounded-lg shadow-md cursor-pointer hover:bg-[#328e6e90] hover:border-[#328e6e] text-center"                        >
                            <MdOpenInNew size={16} /> View CV
                        </motion.a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="images/about-img.png"
                        alt="Åke Flatholm"
                        className="rounded-full object-cover w-48 h-48 md:w-96 md:h-96 border-[#328e6e] border-8"
                    />
                </div>
            </div>
        </div>
    );
}
