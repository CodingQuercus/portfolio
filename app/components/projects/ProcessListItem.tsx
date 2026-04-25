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
        <div className="flex flex-col text-background gap-2">
            <div className="flex flex-row items-center gap-3">
                <span className="flex justify-center items-center bg-darkGrey text-background text-lg md:text-xl lg:text-2xl rounded-full w-8 h-8 md:w-10 md:h-10 shrink-0">
                    {number}
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold">
                    {title}
                </p>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-foreground w-full lg:w-4/5">
                {information}
            </p>
        </div>
    );
}