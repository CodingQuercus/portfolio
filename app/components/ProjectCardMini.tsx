'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

type ProjectCardMiniProps = {
    title: string;
    description: string;
    backgroundColor: string;
    href: string;
    tags: string[];
};

export default function ProjectCardMini({
    title,
    description,
    backgroundColor,
    href,
    tags,
}: ProjectCardMiniProps) {
    return (
        <div
            className="flex flex-col rounded-3xl p-6 md:p-8 min-h-80"
            style={{ backgroundColor }}
        >
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-background">
                    {title}
                </h2>
                <p className="text-background text-base md:text-lg line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-white/20 pt-4 mt-auto">
                <ul
                    className="flex flex-row flex-wrap gap-2 lg:max-w-[60%] min-h-8 md:min-h-12"
                    aria-label="Project tags"
                >
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="text-background text-sm opacity-90"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <Link
                    href={href}
                    className="w-fit shrink-0 self-end lg:self-auto"
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
            </div>
        </div>
    );
}
