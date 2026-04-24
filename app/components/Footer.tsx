"use client";

import ContactButton from "./footer/ContactButton";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <section id="contact" className="my-12 md:my-16">
            <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold">
                    Let&apos;s get in touch
                </h2>
                <div className="flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-4 w-full">
                    <ContactButton href="https://www.linkedin.com/in/akeflatholm/" label="LinkedIn" icon={<FaLinkedin size={20} />} external />
                    <ContactButton href="https://github.com/CodingQuercus" label="GitHub" icon={<FaGithubSquare size={20} />} external />
                    <ContactButton href="mailto:akeflatholm@gmail.com" label="Email" icon={<FaEnvelope size={20} />} />
                </div>
            </div>
        </section>
    );
}