import ProjectCard from "@/app/components/ProjectCard";
import ProjectMetaRow from "@/app/components/projects/ProjectMetaRow";

type MetaItem = {
  label: string;
  information: string;
};

type ProjectHeaderProps = {
  title: string;
  backgroundColor: string;
  description: string;
  tags: string[];
  meta: MetaItem[];
};

export default function ProjectHeader({
  title,
  backgroundColor,
  description,
  tags,
  meta,
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <ProjectCard
        title={title}
        backgroundColor={backgroundColor}
        description={description}
        tags={tags}
        href=""
        showExploreLink={false}
      />
      <ProjectMetaRow items={meta} />
    </div>
  );
}