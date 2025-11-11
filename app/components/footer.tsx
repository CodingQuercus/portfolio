
import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="border-t-2 border-[#282828] z-50 px-4">
            <div className="flex flex-col gap-4 py-8">
                <div className="flex flex-row flex-wrap gap-4 justify-between">
                    <div className="flex flex-col">
                        <div className="font-bold text-lg">Åke Flatholm</div>
                        <div className="text-base">M.Sc Student in Interaction Technology and Design</div>
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
                <div className="flex flex-row justify-between">
                    <div className="text-sm">© 2025</div>
                    <div className="text-sm">Designed with <strong>Figma</strong> • Built with <strong>Next.js</strong></div>
                </div>
            </div>
        </div>
    );
}