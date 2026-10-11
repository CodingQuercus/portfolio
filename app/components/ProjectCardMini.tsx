import LinkButton from './LinkButton';
import { Reveal, RevealLine } from './Reveal';
import RowCover from './RowCover';

type ProjectCardMiniProps = {
    title: string;
    year: string;
    kind: string;
    /** Project colour, used for the hover tint. */
    color: string;
    description: string;
    href: string;
    tags: string[];
};

/** A project on the Projects page: text on a hairline, no image. */
export default function ProjectCardMini({
    title,
    year,
    kind,
    color,
    description,
    href,
    tags,
}: ProjectCardMiniProps) {
    return (
        <Reveal
            as="li"
            className="group/row relative isolate flex flex-col gap-4 pt-3 pb-4 px-3 md:px-4"
        >
            <RevealLine />
            <RowCover href={href} color={color} />
            <div className="flex flex-col gap-4 flex-1">
                <p className="flex justify-between gap-4 type-small text-foreground/70 mb-2">
                    <span className="tabular-nums">{year}</span>
                    <span className="text-right">{kind}</span>
                </p>
                <h2 className="type-card-title">{title}</h2>
                <p className="type-body-sm line-clamp-3">{description}</p>
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-1 type-small text-foreground/70"
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
                    className="relative z-10 mt-auto"
                >
                    Explore project
                </LinkButton>
            </div>
        </Reveal>
    );
}
