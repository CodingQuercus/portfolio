type ProjectKeyInsightProps = {
    introduction: string;
    paragraphs: string[];
};

export default function ProjectKeyInsight({
    introduction,
    paragraphs,
}: ProjectKeyInsightProps) {
    return (
        <div className="flex flex-col gap-3 border-t border-foreground pt-4">
            <span className="type-small text-foreground/60">Key insight</span>
            <h3 className="type-h3 max-w-3xl">{introduction}</h3>
            <div className="flex flex-col gap-3">
                {paragraphs.map((paragraph, i) => (
                    <p key={i} className="type-body max-w-3xl">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
