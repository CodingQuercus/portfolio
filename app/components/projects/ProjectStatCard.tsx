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
        <div className="flex flex-col flex-1 bg-darkGrey text-background rounded-2xl md:rounded-3xl px-8 md:px-12 lg:px-16 py-6 md:py-8">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold">{value}</p>
            <p className="text-base md:text-lg lg:text-xl">{label}</p>
            {subtitle && <p className="text-sm md:text-base">{subtitle}</p>}
        </div>
    );
}