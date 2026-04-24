import ProjectStatCard from "./ProjectStatCard";

type StatItem = {
    value: string;
    label: string;
    subtitle?: string;
};

type ProjectStatRowProps = {
    stats: StatItem[];
};

export default function ProjectStatRow({ stats }: ProjectStatRowProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat) => (
                <ProjectStatCard key={stat.label} {...stat} />
            ))}
        </div>
    );
}