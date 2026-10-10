type ProjectKeyInsightProps = {
    introduction: string;
    paragraphs: string[];
};

export default function ProjectKeyInsight({
    introduction,
    paragraphs,
}: ProjectKeyInsightProps) {
    return (
        <div className="flex flex-col bg-foreground px-4 md:px-8 py-2 md:py-6 rounded-3xl text-background gap-2 md:gap-2">
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
