type ProjectParagraphProps = {
    paragraphs: string[];
};

export default function ProjectParagraph({
    paragraphs,
}: ProjectParagraphProps) {
    return (
        <div className="flex flex-col gap-2 type-body w-full max-w-2xl">
            {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
    );
}
