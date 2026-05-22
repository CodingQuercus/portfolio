type SectionTitleProps = {
    title: string;
};

export default function ProjectSectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>;
}
