import Image from "next/image";
import heroGraphic from "@/public/hero_img.png";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col items-center gap-6 pt-20 text-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                    ÅKE FLATHOLM
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-[#f3f3f375] max-w-[600px]">
                    M.Sc Student in Interaction Technology and Design
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-center bg-[#282828] rounded-3xl w-full max-w-[400px] sm:max-w-[436px] overflow-hidden">
                    <Image
                        src={heroGraphic}
                        alt="Åke Flatholm"
                        priority
                        className="w-full h-[400px] object-contain"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://www.linkedin.com/in/akeflatholm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#282828] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#328e6e] transition"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="https://github.com/codingquercus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#282828] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#328e6e] transition"
                    >
                        <FaGithubSquare size={22} />
                    </a>
                    <a
                        href="./AF_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#282828] px-4 sm:w-[196px] h-12 rounded-full flex justify-center items-center gap-2 hover:bg-[#328e6e] transition"
                    >
                        <FaFileAlt size={22} />
                        <span className="hidden sm:inline">View Resume</span>
                    </a>
                </div>
            </div>

        </section>
    );
}
