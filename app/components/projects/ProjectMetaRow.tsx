
import ProjectMetaItem from "./ProjectMetaItem";

type MetaItem = {
  label: string;
  information: string;
};

type ProjectMetaRowProps = {
  items: MetaItem[];
};

export default function ProjectMetaRow({ items }: ProjectMetaRowProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {items.map((item) => (
        <ProjectMetaItem key={item.label} label={item.label} information={item.information} />
      ))}
    </div>
  );
}