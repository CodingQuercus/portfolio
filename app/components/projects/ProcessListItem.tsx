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
        <li className="flex flex-col gap-2">
            <p className="type-h3 flex flex-row gap-3">
                <span aria-hidden="true">{number}.</span>
                {title}
            </p>
            <p className="type-body w-full lg:w-4/5">{information}</p>
        </li>
    );
}
