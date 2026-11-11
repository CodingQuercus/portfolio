'use client';

import ContactButton from './footer/ContactButton';
import PillButton from './PillButton';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            id="contact"
            className="my-6 md:my-12 flex flex-col gap-4 md:gap-8"
        >
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-col gap-2 md:gap-4">
                    <h2 className="type-h1">Contact</h2>
                    <div className="flex flex-row flex-wrap gap-2 md:gap-4 w-full">
                        <ContactButton
                            href="https://www.linkedin.com/in/akeflatholm/"
                            label="LinkedIn"
                            icon={<Linkedin size={20} aria-hidden="true" />}
                            external
                        />
                        <ContactButton
                            href="https://github.com/CodingQuercus"
                            label="GitHub"
                            icon={<Github size={20} aria-hidden="true" />}
                            external
                        />
                        <ContactButton
                            href="mailto:hello@akeflatholm.com"
                            label="Email"
                            icon={<Mail size={20} aria-hidden="true" />}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:gap-4">
                    <h3 className="type-h2">Download CV</h3>
                    <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                        <PillButton href="/AF_CV_EN.pdf" target="_blank">
                            <Download size={14} aria-hidden="true" />
                            English
                            <span className="sr-only">(opens in new tab)</span>
                        </PillButton>
                        <PillButton href="/AF_CV_SE.pdf" target="_blank">
                            <Download size={14} aria-hidden="true" />
                            <span lang="sv">Svenska</span>
                            <span className="sr-only">(opens in new tab)</span>
                        </PillButton>
                    </div>
                </div>
            </div>

            <p className="type-caption">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
