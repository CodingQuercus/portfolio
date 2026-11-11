type StatCardProps = {
    value: string;
    label: string;
    subtitle?: string;
};

export default function ProjectStatCard({
    value,
    label,
    subtitle,
}: StatCardProps) {
    return (
        <div className="flex flex-col flex-1 bg-surface rounded-3xl px-6 md:px-8 py-5 md:py-6">
            <p
                className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter"
                aria-label={`Score: ${value}`}
            >
                {value}
            </p>
            <p className="type-body">{label}</p>
            {subtitle && <p className="type-small">{subtitle}</p>}
        </div>
    );
}
