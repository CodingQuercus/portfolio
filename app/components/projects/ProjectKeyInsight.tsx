type ProjectKeyInsightProps = {
    introduction: string;
    paragraphs: string[];
};

export default function ProjectKeyInsight({
    introduction,
    paragraphs,
}: ProjectKeyInsightProps) {
    return (
        <div className="flex flex-col gap-2 w-full max-w-2xl bg-surface rounded-3xl px-6 md:px-8 py-5 md:py-6">
            <h3 className="type-h3">{introduction}</h3>
            <div className="flex flex-col gap-3">
                {paragraphs.map((paragraph, i) => (
                    <p key={i} className="type-body">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
