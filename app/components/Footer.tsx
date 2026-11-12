import CvMenu from './CvMenu';
import { TEXT_LINK } from './linkStyle';

// Plain text links: the pages above already end with buttons, so the footer
// stays quiet.
const linkClass = TEXT_LINK;

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
                        <CvMenu linkClass={linkClass} />
                    </li>
                </ul>
            </div>

            <p className="type-caption">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
