'use client';
import Image, { StaticImageData } from 'next/image';
import PillButton from './PillButton';

type ProjectCardProps = {
    title: string;
    backgroundColor: string;
    subtitle?: string;
    description: string;
    tags: string[];
    href?: string;
    showExploreLink?: boolean;
    headingLevel?: 'h1' | 'h2' | 'h3';
    mockupImage?: StaticImageData;
    mockupAlt?: string;
    variant?: 'default' | 'compact';
};

export default function ProjectCard({
    title,
    backgroundColor,
    subtitle,
    description,
    tags,
    href,
    showExploreLink,
    headingLevel = 'h3',
    mockupImage,
    mockupAlt = '',
    variant = 'default',
}: ProjectCardProps) {
    const Heading = headingLevel;
    const isCompact = variant === 'compact';

    return (
        <div
            className={`flex flex-col gap-6 rounded-3xl p-6 md:p-8 ${isCompact ? '' : 'min-h-[424px] md:min-h-0'}`}
            style={{ backgroundColor }}
        >
            {isCompact ? (
                <div className="flex flex-col gap-4">
                    <Heading className="type-card-title text-background w-full">
                        {title}
                    </Heading>
                    <p className="type-body-sm text-background w-full lg:w-5/6">
                        {description}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    <div className="flex flex-col gap-2">
                        <Heading className="type-card-title text-background w-full">
                            {title}
                        </Heading>
                        {subtitle && (
                            <p className="type-h3 text-background">
                                {subtitle}
                            </p>
                        )}
                        <p className="type-body-sm text-background w-full">
                            {description}
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-video hidden md:flex items-center justify-center">
                        {mockupImage ? (
                            <Image
                                src={mockupImage}
                                alt={mockupAlt}
                                width={600}
                                height={400}
                                loading="eager"
                                className="w-full h-full object-cover object-top"
                            />
                        ) : (
                            <div className="w-full h-full" />
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/20 pt-4 mt-auto">
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:max-w-[60%]"
                    aria-label="Project tags"
                >
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="type-small text-background opacity-90"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                {showExploreLink && href && (
                    <PillButton
                        arrow="right"
                        href={href}
                        variant="inverse"
                        ariaLabel={`Explore project: ${title}`}
                        className="shrink-0 self-end md:self-auto"
                    >
                        Explore project
                    </PillButton>
                )}
            </div>
        </div>
    );
}
