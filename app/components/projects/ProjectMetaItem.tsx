type ProjectMetaItemProps = {
    label: string;
    information: string;
};

/** A label above a value on a hairline, like the hero tags. */
export default function ProjectMetaItem({
    label,
    information,
}: ProjectMetaItemProps) {
    return (
        <div className="flex flex-col flex-1 gap-1 border-b border-foreground pb-3">
            <dt className="type-small text-foreground/60">{label}</dt>
            <dd className="type-h3">{information}</dd>
        </div>
    );
}
