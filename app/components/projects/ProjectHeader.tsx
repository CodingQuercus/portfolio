import ProjectCard from '@/app/components/ProjectCard';

type ProjectHeaderProps = {
    title: string;
    backgroundColor: string;
    description: string;
    tags: string[];
    role: string;
    year: string;
};

export default function ProjectHeader({
    title,
    backgroundColor,
    description,
    tags,
    role,
    year,
}: ProjectHeaderProps) {
    return (
        <ProjectCard
            title={title}
            backgroundColor={backgroundColor}
            description={description}
            tags={tags}
            href=""
            showExploreLink={false}
            headingLevel="h1"
            variant="compact"
            role={role}
            year={year}
        />
    );
}
