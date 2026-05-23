import ProjectSectionTitle from './ProjectSectionTitle';

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function ProjectSection({
    title,
    children,
}: SectionProps) {
    return (
        <div className="flex flex-col gap-2">
            <ProjectSectionTitle title={title} />
            {children}
        </div>
    );
}
