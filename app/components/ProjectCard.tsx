"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type ProjectCardProps = {
    title: string;
    backgroundColor: string;
    description: string;
    tags: string[];
    href: string;
    showExploreLink?: boolean;
};

export default function ProjectCard({
    title,
    backgroundColor,
    description,
    tags,
    href,
    showExploreLink,
}: ProjectCardProps) {
    return (
        <div
            className="flex flex-col justify-between gap-8 rounded-3xl p-6 md:p-8 min-h-[60vh] lg:h-[50vh] 2xl:h-[60vh]"
            style={{ backgroundColor }}
        >
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-background w-full lg:w-4/5">
                    {title}
                </h2>
                <p className="text-background text-base md:text-lg lg:text-xl w-full lg:w-5/6">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-2/3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-background text-sm md:text-base">
                            {tag}
                        </span>
                    ))}
                </div>

                {showExploreLink && (
                    <Link
                        href={href}
                        className="flex flex-row items-center gap-2 bg-background px-6 py-3 rounded-full w-fit hover:bg-foreground hover:text-background transition"
                    >
                        Explore project
                        <FaChevronRight size={20} />
                    </Link>
                )}
            </div>
        </div>
    );
}