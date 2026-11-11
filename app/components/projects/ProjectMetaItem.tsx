type ProjectMetaItemProps = {
    label: string;
    information: string;
};

/** A label above a value, under a top hairline like the other blocks. */
export default function ProjectMetaItem({
    label,
    information,
}: ProjectMetaItemProps) {
    return (
        <div className="flex flex-col flex-1 gap-1 border-t border-foreground pt-4">
            <dt className="type-small text-foreground/70">{label}</dt>
            <dd className="type-h3">{information}</dd>
        </div>
    );
}
