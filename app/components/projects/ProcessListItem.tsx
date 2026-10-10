type ProcessListItemProps = {
    number: string;
    title: string;
    information: string;
};

export default function ProcessListItem({
    number,
    title,
    information,
}: ProcessListItemProps) {
    return (
        <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[4rem_minmax(0,1fr)] gap-y-2 border-t border-foreground/20 pt-4">
            <span
                aria-hidden="true"
                className="type-h3 text-foreground/60 tabular-nums"
            >
                {number.padStart(2, '0')}
            </span>
            <p className="type-h3">{title}</p>
            <p className="type-body col-start-2 max-w-3xl">{information}</p>
        </li>
    );
}
