type SectionTitleProps = {
    title: string;
};

export default function ProjectSectionTitle({ title }: SectionTitleProps) {
    return <h2 className="type-h2">{title}</h2>;
}
