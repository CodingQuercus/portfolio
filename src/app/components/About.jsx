"use client";

import { motion } from "framer-motion";
import { MdOpenInNew, MdDownload } from 'react-icons/md';

export default function About() {
    return (
        <div id="about" className="w-screen min-h-screen px-10 md:px-36 py-16 flex flex-col justify-start items-center">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col w-full md:w-1/2 gap-8">
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

                    <div className="flex flex-wrap justify-start gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            download
                            className="flex flex-row justify-center items-center gap-2 px-2 py-2 w-44 h-12 md:w-44 md:h-16 border border-[#328e6e] bg-[#328e6e] text-[#f3f3f3] rounded-lg shadow-md cursor-pointer hover:bg-[#328e6e] hover:border-[#328e6e] text-center"
                        >
                            <MdDownload /> Download CV
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row justify-center items-center gap-2 px-2 py-2 w-44 h-12 md:w-44 md:h-16 border-2 border-[#328e6e] text-[#328e6e] rounded-lg shadow-md hover:bg-[#328e6e] hover:border-[#328e6e] hover:text-[#f3f3f3] cursor-pointer text-center"
                        >
                            <MdOpenInNew size={16} /> View CV
                        </motion.a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="images/about-img.png"
                        alt="Åke Flatholm"
                        className="rounded-full object-cover w-48 h-48 md:w-96 md:h-96 border-[#f3f3f3] border-3"
                    />
                </div>
            </div>
        </div>
    );
}
