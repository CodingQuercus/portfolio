import { Reveal, RevealLine } from '../Reveal';

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

/** A case-study section: its hairline draws in as it scrolls into view. */
export default function ProjectSection({ title, children }: SectionProps) {
    return (
        <Reveal
            as="section"
            className="relative flex flex-col gap-4 md:gap-6 pt-6"
        >
            <RevealLine />
            <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="type-h2">{title}</h2>
                {children}
            </div>
        </Reveal>
    );
}
