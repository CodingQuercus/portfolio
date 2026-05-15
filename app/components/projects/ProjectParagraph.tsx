type ProjectParagraphProps = {
    paragraphs: string[];
};

export default function ProjectParagraph({ paragraphs }: ProjectParagraphProps) {
    return (
        <div className="flex flex-col gap-3 md:gap-4 leading-7 md:leading-8 text-base md:text-lg w-full lg:w-4/5">
            {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
    );
}