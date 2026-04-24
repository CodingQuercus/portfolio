import ProcessListItem from "@/app/components/projects/ProcessListItem";

type ProcessStep = {
    title: string;
    information: string;
};

type ProcessListProps = {
    steps: ProcessStep[];
};

export default function ProjectProcessList({ steps }: ProcessListProps) {
    return (
        <div className="flex flex-col gap-6 md:gap-8">
            {steps.map((step, i) => (
                <ProcessListItem
                    key={step.title}
                    number={String(i + 1)}
                    title={step.title}
                    information={step.information}
                />
            ))}
        </div>
    );
}