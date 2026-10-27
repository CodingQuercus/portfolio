import Image, { StaticImageData } from 'next/image';

import LinkButton from './LinkButton';
import { Reveal, RevealLine } from './Reveal';
import RowCover from './RowCover';

type ProjectCardMiniProps = {
    title: string;
    year: string;
    kind: string;
    /** Project colour, used behind the image and for the hover tint. */
    color: string;
    /** One mockup, or a few phone screenshots shown side by side. */
    images: StaticImageData[];
    /** Describes all the images together; only the first one carries it. */
    imagesAlt: string;
    description: string;
    href: string;
    tags: string[];
};

/** A project on the Projects page: text on a hairline, image on a colour panel above it. */
export default function ProjectCardMini({
    title,
    year,
    kind,
    color,
    images,
    imagesAlt,
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
                <div
                    className="overflow-hidden aspect-video flex items-center justify-center gap-[4%] p-4 md:p-6 mb-2"
                    style={{ backgroundColor: color }}
                >
                    {images.map((image, i) => (
                        <Image
                            key={image.src}
                            src={image}
                            alt={i === 0 ? imagesAlt : ''}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className={
                                images.length > 1
                                    ? 'h-full w-auto object-contain'
                                    : 'w-full h-full object-contain'
                            }
                        />
                    ))}
                </div>
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
