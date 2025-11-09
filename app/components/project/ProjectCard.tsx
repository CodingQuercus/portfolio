"use client"

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    year: string;
    title: string;
    description: string;
    image: string;
};

export default function ProjectCard({ year, title, description, image }: ProjectCardProps) {

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <div className="relative w-full max-w-[540px] h-[420px] sm:h-[460px] md:h-[495px] rounded-4xl overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover rounded-4xl"
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#28282840] to-[#282828]" />

            <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-3 pr-4">
                <div className="text-sm">{year}</div>
                <div className="font-bold text-xl sm:text-2xl md:text-3xl">{title}</div>
                <div className="text-sm sm:text-base md:text-lg w-4/5">
                    {description}
                </div>
                <Link
                    href={`/projects/${slug}`}
                    className="mt-2 flex items-center justify-center bg-[#328e6e] hover:bg-[#328e6e80] w-40 sm:w-48 h-10 sm:h-12 rounded-full"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}