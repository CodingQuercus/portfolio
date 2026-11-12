import ProjectStatCard from './ProjectStatCard';

import { READING_WIDTH } from './readingWidth';
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
        <div className={`flex flex-col md:flex-row gap-4 ${READING_WIDTH}`}>
            {stats.map((stat) => (
                <ProjectStatCard key={stat.label} {...stat} />
            ))}
        </div>
    );
}
