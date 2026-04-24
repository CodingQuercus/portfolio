type SectionTitleProps = {
    title: string;
};

export default function ProjectSectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>;
}