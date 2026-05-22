'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

type ProjectCardMiniProps = {
    title: string;
    description: string;
    backgroundColor: string;
    href: string;
};

export default function ProjectCardMini({
    title,
    description,
    backgroundColor,
    href,
}: ProjectCardMiniProps) {
    return (
        <div
            className="flex flex-col justify-between gap-4 rounded-3xl p-6 md:p-8 min-h-[280px]"
            style={{ backgroundColor }}
        >
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-background">
                    {title}
                </h2>
                <p className="text-background/80 text-base md:text-lg line-clamp-2">
                    {description}
                </p>
            </div>
            <Link
                href={href}
                className="w-fit self-end"
                aria-label={`Explore project: ${title}`}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-row items-center gap-2 bg-background text-foreground px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-foreground hover:text-background transition-colors text-base lg:text-lg"
                >
                    Explore project
                    <FaChevronRight
                        size={18}
                        className="md:w-5 md:h-5"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
        </div>
    );
}
