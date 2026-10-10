import LinkButton from './LinkButton';
import { Reveal, RevealLine } from './Reveal';

type ProjectCardMiniProps = {
    title: string;
    year: string;
    kind: string;
    description: string;
    href: string;
    tags: string[];
};

/** A project on the Projects page: text on a hairline, no image. */
export default function ProjectCardMini({
    title,
    year,
    kind,
    description,
    href,
    tags,
}: ProjectCardMiniProps) {
    return (
        <Reveal as="li" className="relative flex flex-col gap-4 pt-3">
            <RevealLine />
            <div className="flex flex-col gap-4 flex-1">
                <p className="flex justify-between gap-4 type-small text-foreground/60 mb-2">
                    <span className="tabular-nums">{year}</span>
                    <span className="text-right">{kind}</span>
                </p>
                <h2 className="type-card-title">{title}</h2>
                <p className="type-body-sm line-clamp-3">{description}</p>
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-1 type-small text-foreground/60"
                    aria-label="Project tags"
                >
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <LinkButton
                    arrow="right"
                    href={href}
                    ariaLabel={`Explore project: ${title}`}
                    className="mt-auto"
                >
                    Explore project
                </LinkButton>
            </div>
        </Reveal>
    );
}
