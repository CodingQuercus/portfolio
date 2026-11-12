// Plain text links: the pages above already end with buttons, so the footer
// stays quiet.
const linkClass =
    'underline decoration-1 underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-300';

export default function Footer() {
    return (
        <footer
            id="contact"
            className="my-6 md:my-12 flex flex-col gap-6 md:gap-8"
        >
            <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="type-h1">Contact</h2>
                <a
                    href="mailto:hello@akeflatholm.com"
                    className={`type-h2 w-fit break-all ${linkClass}`}
                >
                    hello@akeflatholm.com
                </a>
                <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2 type-body">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/akeflatholm/"
                            target="_blank"
                            className={linkClass}
                        >
                            LinkedIn
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/CodingQuercus"
                            target="_blank"
                            className={linkClass}
                        >
                            GitHub
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/AF_CV_EN.pdf"
                            target="_blank"
                            className={linkClass}
                        >
                            CV in English
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/AF_CV_SE.pdf"
                            target="_blank"
                            className={linkClass}
                            lang="sv"
                        >
                            CV på svenska
                            <span className="sr-only" lang="en">
                                {' '}
                                (opens in new tab)
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <p className="type-caption">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
