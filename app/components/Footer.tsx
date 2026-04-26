"use client";

import ContactButton from "./footer/ContactButton";
import PillButton from "./PillButton";
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="my-6 md:my-12 flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold">
                            Contact
                        </h2>
                        <div className="flex flex-row flex-wrap gap-2 md:gap-4 w-full">
                            <ContactButton
                                href="https://www.linkedin.com/in/akeflatholm/"
                                label="LinkedIn"
                                icon={<FaLinkedin size={20} aria-hidden="true" />}
                                external
                            />
                            <ContactButton
                                href="https://github.com/CodingQuercus"
                                label="GitHub"
                                icon={<FaGithubSquare size={20} aria-hidden="true" />}
                                external
                            />
                            <ContactButton
                                href="mailto:akeflatholm@gmail.com"
                                label="Email"
                                icon={<FaEnvelope size={20} aria-hidden="true" />}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold">
                            Download CV
                        </h3>
                        <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                            <PillButton href="/AF_CV_EN.pdf" target="_blank">
                                <FaDownload size={14} aria-hidden="true" />
                                English
                                <span className="sr-only">(opens in new tab)</span>
                            </PillButton>
                            <PillButton href="/AF_CV_SE.pdf" target="_blank">
                                <FaDownload size={14} aria-hidden="true" />
                                Svenska
                                <span className="sr-only">(opens in new tab)</span>
                            </PillButton>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} Åke Flatholm
                </p>
        </footer>
    );
}