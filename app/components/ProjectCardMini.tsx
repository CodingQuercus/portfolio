'use client';
import PillButton from './PillButton';

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
                <h2 className="type-card-title text-background">{title}</h2>
                <p className="type-body-sm text-background line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-white/20 pt-4 mt-auto">
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-2 lg:max-w-[60%] min-h-8 md:min-h-12"
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
                <PillButton
                    arrow="right"
                    href={href}
                    variant="inverse"
                    ariaLabel={`Explore project: ${title}`}
                    className="shrink-0 self-end lg:self-auto"
                >
                    Explore project
                </PillButton>
            </div>
        </div>
    );
}
