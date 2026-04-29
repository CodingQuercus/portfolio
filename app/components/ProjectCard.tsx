"use client";

import Link from "next/link";
import { motion } from "framer-motion"
import { FaChevronRight } from "react-icons/fa";

type ProjectCardProps = {
    title: string;
    backgroundColor: string;
    description: string;
    tags: string[];
    href?: string;
    showExploreLink?: boolean;
    headingLevel?: "h1" | "h2" | "h3";
    variant?: "default" | "compact";
};


export default function ProjectCard({
    title,
    backgroundColor,
    description,
    tags,
    href,
    showExploreLink,
    headingLevel = "h3",
    variant = "default",
}: ProjectCardProps) {

    const Heading = headingLevel;
    const isCompact = variant === "compact";

    return (
        <div
            className={`flex flex-col justify-between gap-8 rounded-3xl p-6 md:p-8 ${isCompact ? "" : "min-h-[440px] md:min-h-[520px] lg:min-h-[600px]"}`}
            style={{ backgroundColor }}
        >
            <div className="flex flex-col gap-4">
                <Heading className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-background w-full lg:w-4/5">
                    {title}
                </Heading>
                <p className="text-background text-base md:text-lg lg:text-xl w-full lg:w-5/6">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
                <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-2/3" aria-label="Project tags">
                    {tags.map((tag) => (
                        <li key={tag} className="text-background text-sm md:text-base">
                            {tag}
                        </li>
                    ))}
                </ul>

                {showExploreLink && href && (
                    <Link
                        href={href}
                        className="w-fit self-end md:self-auto"
                        aria-label={`Explore project: ${title}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-row items-center gap-2 bg-background text-foreground px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-foreground hover:text-background transition-colors text-base lg:text-lg"
                        >
                            Explore project
                            <FaChevronRight size={18} className="md:w-5 md:h-5" aria-hidden="true" />
                        </motion.div>
                    </Link>
                )}
            </div>
        </div>
    );
}