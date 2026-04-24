import ProjectSectionTitle from "./ProjectSectionTitle";

type SectionProps = {
    title: string;
    children: React.ReactNode;
    gap?: "sm" | "md" | "lg";
};

export default function ProjectSection({ title, children, gap = "md" }: SectionProps) {
    const gapClass = { sm: "gap-2", md: "gap-4", lg: "gap-8" }[gap];
    return (
        <div className={`flex flex-col ${gapClass}`}>
            <ProjectSectionTitle title={title} />
            {children}
        </div>
    );
}