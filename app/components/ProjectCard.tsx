'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

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
            className="flex flex-col gap-6 rounded-3xl p-6 md:p-8"
            style={{ backgroundColor }}
        >
            {isCompact ? (
                <div className="flex flex-col gap-4">
                    <Heading className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-background w-full">
                        {title}
                    </Heading>
                    <p className="text-background text-base md:text-lg opacity-90 w-full lg:w-5/6">
                        {description}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    <div className="flex flex-col gap-2">
                        <Heading className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-background w-full">
                            {title}
                        </Heading>
                        {subtitle && (
                            <p className="text-background text-lg md:text-xl font-medium">
                                {subtitle}
                            </p>
                        )}
                        <p className="text-background text-base md:text-lg w-full">
                            {description}
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                        {mockupImage ? (
                            <Image
                                src={mockupImage}
                                alt={mockupAlt}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover object-top"
                            />
                        ) : (
                            <div className="w-full h-full" />
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/20 pt-4">
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:max-w-[60%]"
                    aria-label="Project tags"
                >
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="text-background text-sm md:text-base opacity-90"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                {showExploreLink && href && (
                    <Link
                        href={href}
                        className="w-fit shrink-0 self-end md:self-auto"
                        aria-label={`Explore project: ${title}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-row items-center gap-2 bg-background text-foreground px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-foreground hover:text-background transition-colors text-base"
                        >
                            Explore project
                            <FaChevronRight size={16} aria-hidden="true" />
                        </motion.div>
                    </Link>
                )}
            </div>
        </div>
    );
}