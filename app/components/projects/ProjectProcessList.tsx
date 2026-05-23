import ProcessListItem from '@/app/components/projects/ProcessListItem';

type ProcessStep = {
    title: string;
    information: string;
};

type ProcessListProps = {
    steps: ProcessStep[];
};

export default function ProjectProcessList({ steps }: ProcessListProps) {
    return (
        <ol className="flex flex-col gap-2 md:gap-4 list-none">
            {steps.map((step, i) => (
                <ProcessListItem
                    key={step.title}
                    number={String(i + 1)}
                    title={step.title}
                    information={step.information}
                />
            ))}
        </ol>
    );
}
