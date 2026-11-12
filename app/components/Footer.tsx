import ContactLinks from './ContactLinks';

// Plain text links: the pages above already end with buttons, so the footer
// stays quiet.
export default function Footer() {
    return (
        <footer
            id="contact"
            className="my-6 md:my-12 flex flex-col gap-6 md:gap-8"
        >
            <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="type-h1">Contact</h2>
                <ContactLinks />
            </div>

            <p className="type-caption">
                © {new Date().getFullYear()} Åke Flatholm
            </p>
        </footer>
    );
}
