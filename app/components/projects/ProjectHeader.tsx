import ProjectCard from '@/app/components/ProjectCard';

type ProjectHeaderProps = {
    title: string;
    backgroundColor: string;
    description: string;
    tags: string[];
    /** One plain sentence on role, partner and when. */
    summary: string;
};

export default function ProjectHeader({
    title,
    backgroundColor,
    description,
    tags,
    summary,
}: ProjectHeaderProps) {
    return (
        <div className="flex flex-col gap-4">
            <ProjectCard
                title={title}
                backgroundColor={backgroundColor}
                description={description}
                tags={tags}
                href=""
                showExploreLink={false}
                headingLevel="h1"
                variant="compact"
            />
            <p className="type-body">{summary}</p>
        </div>
    );
}
