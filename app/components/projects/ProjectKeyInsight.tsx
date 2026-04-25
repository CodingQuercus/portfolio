type ProjectKeyInsightProps = {
    introduction: string;
    paragraphs: string[];
};

export default function ProjectKeyInsight({
    introduction,
    paragraphs,
}: ProjectKeyInsightProps) {
    return (
        <div className="flex flex-col bg-darkGrey px-6 md:px-12 lg:px-16 py-6 md:py-8 rounded-2xl md:rounded-3xl text-background gap-3 md:gap-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {introduction}
            </h3>
            <div className="flex flex-col gap-3 md:gap-4">
                {paragraphs.map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-base md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}