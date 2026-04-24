type ProjectMetaItemProps = {
    label: string;
    information: string;
};

export default function ProjectMetaItem({
    label,
    information,
}: ProjectMetaItemProps) {
    return (
        <div className="flex flex-col flex-1 px-6 md:px-8 py-3 md:py-4 bg-darkGrey rounded-2xl md:rounded-3xl text-background">
            <p className="text-sm md:text-base">{label}</p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">{information}</p>
        </div>
    );
}