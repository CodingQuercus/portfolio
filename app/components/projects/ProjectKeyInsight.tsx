type ProjectKeyInsightProps = {
    introduction: string;
    paragraphs: string[];
};

export default function ProjectKeyInsight({
    introduction,
    paragraphs,
}: ProjectKeyInsightProps) {
    return (
        <div className="flex flex-col bg-darkGrey px-4 md:px-8 py-2 md:py-6 rounded-2xl md:rounded-3xl text-background gap-2 md:gap-2">
            <h3 className="text-lg md:text-2xl font-bold">{introduction}</h3>
            <div className="flex flex-col gap-3">
                {paragraphs.map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-base md:text-lg leading-7 md:leading-8"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
