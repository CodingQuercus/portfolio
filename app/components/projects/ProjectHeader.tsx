import ProjectMetaRow from '@/app/components/projects/ProjectMetaRow';

type MetaItem = {
    label: string;
    information: string;
};

type ProjectHeaderProps = {
    title: string;
    description: string;
    tags: string[];
    meta: MetaItem[];
};

export default function ProjectHeader({
    title,
    description,
    tags,
    meta,
}: ProjectHeaderProps) {
    return (
        <header className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="type-h1 text-balance">{title}</h1>
                <p className="type-body max-w-3xl">{description}</p>
                <ul
                    className="flex flex-row flex-wrap gap-x-4 gap-y-1 type-small text-foreground/60"
                    aria-label="Project tags"
                >
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <ProjectMetaRow items={meta} />
        </header>
    );
}
