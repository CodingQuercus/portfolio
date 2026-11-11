import ContactTile from './footer/ContactTile';

export default function Footer() {
    return (
        <footer
            id="contact"
            // Focusable so the navbar's Contact link can move focus here.
            tabIndex={-1}
            // On wider screens the footer exactly fills the screen when
            // scrolled to, matching the page's 120px scroll-padding-top.
            className="focus:outline-none mt-24 md:mt-40 pb-8 md:pb-12 md:min-h-[calc(100dvh-120px)] flex flex-col gap-8 md:gap-12"
        >
            <h2 className="type-h1">Contact</h2>

            {/* Open grid: each tile has only a top hairline, with space
                between. The address gets a row of its own so it can be read
                at a glance; the other links share the row below. */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                <ContactTile
                    href="mailto:hello@akeflatholm.com"
                    kind="internal"
                    label="Email"
                    className="col-span-2 md:col-span-4"
                >
                    <span className="text-[clamp(1.25rem,4.5vw,2.5rem)]">
                        hello@akeflatholm.com
                    </span>
                </ContactTile>
                <ContactTile
                    href="https://www.linkedin.com/in/akeflatholm/"
                    kind="external"
                >
                    LinkedIn
                </ContactTile>
                <ContactTile
                    href="https://github.com/CodingQuercus"
                    kind="external"
                >
                    GitHub
                </ContactTile>
                <ContactTile href="/AF_CV_EN.pdf" kind="download" label="CV">
                    English
                </ContactTile>
                <ContactTile
                    href="/AF_CV_SE.pdf"
                    kind="download"
                    label="CV"
                    lang="sv"
                >
                    Svenska
                </ContactTile>
            </div>

            <p className="type-caption mt-auto">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
