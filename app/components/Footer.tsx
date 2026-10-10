import ContactButton from './footer/ContactButton';
import LinkButton from './LinkButton';

export default function Footer() {
    return (
        <footer
            id="contact"
            className="mt-24 md:mt-40 mb-8 md:mb-12 flex flex-col gap-12 md:gap-16"
        >
            <div className="flex flex-col gap-6 md:gap-8">
                <h2 className="type-h1">Contact</h2>
                <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full">
                    <ContactButton
                        href="https://www.linkedin.com/in/akeflatholm/"
                        label="LinkedIn"
                        external
                    />
                    <ContactButton
                        href="https://github.com/CodingQuercus"
                        label="GitHub"
                        external
                    />
                    <ContactButton
                        href="mailto:hello@akeflatholm.com"
                        label="Email"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="type-h2">Download CV</h3>
                <div className="flex flex-row flex-wrap gap-6 md:gap-8">
                    <LinkButton
                        href="/AF_CV_EN.pdf"
                        target="_blank"
                        arrow="down"
                    >
                        English
                    </LinkButton>
                    <LinkButton
                        href="/AF_CV_SE.pdf"
                        target="_blank"
                        arrow="down"
                    >
                        Svenska
                    </LinkButton>
                </div>
            </div>

            <p className="type-caption border-t border-foreground/20 pt-4">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
