import ContactTile from './footer/ContactTile';

export default function Footer() {
    return (
        <footer
            id="contact"
            // On wider screens the footer fills the screen below the navbar.
            className="mt-24 md:mt-40 pb-8 md:pb-12 md:min-h-[calc(100dvh-5rem)] flex flex-col gap-8 md:gap-12"
        >
            <h2 className="type-h1">Contact</h2>

            {/* Tiles separated by 1px hairlines: the grid's own colour shows
                through the 1px gaps between them. */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-px bg-foreground/20 border border-foreground/20">
                <ContactTile
                    href="mailto:hello@akeflatholm.com"
                    kind="internal"
                    // Shown so the address can be read or copied without a mail app.
                    label="hello@akeflatholm.com"
                    className="col-span-2 md:row-span-2 md:min-h-64"
                >
                    Email
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

            <p className="type-caption">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
