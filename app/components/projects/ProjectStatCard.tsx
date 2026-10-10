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
        <div className="flex flex-col flex-1 gap-2 border-t border-foreground pt-4">
            <p
                className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter"
                aria-label={`Score: ${value}`}
            >
                {value}
            </p>
            <p className="type-h3">{label}</p>
            {subtitle && (
                <p className="type-small text-foreground/60">{subtitle}</p>
            )}
        </div>
    );
}
