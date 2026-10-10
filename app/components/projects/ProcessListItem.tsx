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
        <li className="flex flex-col text-background gap-2">
            <div className="flex flex-row items-center gap-3">
                <span
                    aria-hidden="true"
                    className="flex justify-center items-center bg-foreground text-background text-lg md:text-xl font-medium rounded-full w-8 h-8 md:w-10 md:h-10 shrink-0"
                >
                    {number}
                </span>
                <p className="type-h3 text-foreground">{title}</p>
            </div>
            <p className="type-body text-foreground w-full lg:w-4/5">
                {information}
            </p>
        </li>
    );
}
