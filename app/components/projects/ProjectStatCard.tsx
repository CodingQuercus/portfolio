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
        <div className="flex flex-col flex-1 bg-foreground text-background rounded-3xl px-8 md:px-12 lg:px-16 py-6 md:py-8">
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
