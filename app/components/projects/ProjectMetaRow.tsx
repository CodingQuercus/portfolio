import ProjectMetaItem from './ProjectMetaItem';

type MetaItem = {
    label: string;
    information: string;
};

type ProjectMetaRowProps = {
    items: MetaItem[];
};

export default function ProjectMetaRow({ items }: ProjectMetaRowProps) {
    return (
        // Side by side only from xl: below that a long value like "UX
        // Researcher & Designer" wraps and stretches every box in the row.
        <dl className="flex flex-col xl:flex-row gap-4">
            {items.map((item) => (
                <ProjectMetaItem
                    key={item.label}
                    label={item.label}
                    information={item.information}
                />
            ))}
        </dl>
    );
}
