type ProjectMetaItemProps = {
    label: string;
    information: string;
};

export default function ProjectMetaItem({
    label,
    information,
}: ProjectMetaItemProps) {
    return (
        <div className="flex flex-col flex-1 px-6 md:px-8 py-3 md:py-4 bg-foreground rounded-3xl text-background">
            <dt className="type-small">{label}</dt>
            <dd className="type-h3">{information}</dd>
        </div>
    );
}
