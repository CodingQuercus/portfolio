import Image, { StaticImageData } from 'next/image';

import LinkButton from './LinkButton';
import { Reveal, RevealLine } from './Reveal';

type ProjectCardProps = {
    title: string;
    year: string;
    /** What kind of project, e.g. "Course project". */
    kind: string;
    /** Puts the screenshot on the left on wide screens, for alternating rows. */
    reverse?: boolean;
    /** Project colour, used behind the screenshot. */
    backgroundColor: string;
    subtitle?: string;
    description: string;
    tags: string[];
    href: string;
    headingLevel?: 'h2' | 'h3';
    mockupImage?: StaticImageData;
    mockupAlt?: string;
};

/** A project on the home page: text on a hairline, screenshot on a colour panel. */
export default function ProjectCard({
    title,
    year,
    kind,
    reverse = false,
    backgroundColor,
    subtitle,
    description,
    tags,
    href,
    headingLevel = 'h3',
    mockupImage,
    mockupAlt = '',
}: ProjectCardProps) {
    const Heading = headingLevel;

    return (
        <Reveal
            as="article"
            className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-3"
        >
            <RevealLine />
            <div className="md:col-span-2 flex justify-between gap-4 type-small text-foreground/60 md:mb-4">
                <span className="tabular-nums">{year}</span>
                <span className="text-right">{kind}</span>
            </div>
            <div
                className={`flex flex-col gap-4 ${reverse ? 'md:col-start-2 md:row-start-2' : ''}`}
            >
                <div className="flex flex-col gap-2">
                    <Heading className="type-card-title">{title}</Heading>
                    {subtitle && <p className="type-h3">{subtitle}</p>}
                </div>
                <p className="type-body-sm max-w-prose">{description}</p>
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
                    className="mt-2 md:mt-auto"
                >
                    Explore project
                </LinkButton>
            </div>
            {mockupImage && (
                <div
                    className={`overflow-hidden aspect-video flex items-center justify-center p-4 md:p-6 ${reverse ? 'md:col-start-1 md:row-start-2' : ''}`}
                    style={{ backgroundColor }}
                >
                    <Image
                        src={mockupImage}
                        alt={mockupAlt}
                        width={600}
                        height={400}
                        loading="eager"
                        className="w-full h-full object-contain"
                    />
                </div>
            )}
        </Reveal>
    );
}
