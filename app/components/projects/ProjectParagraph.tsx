import { READING_WIDTH } from './readingWidth';
type ProjectParagraphProps = {
    paragraphs: string[];
};

export default function ProjectParagraph({
    paragraphs,
}: ProjectParagraphProps) {
    return (
        <div className={`flex flex-col gap-2 type-body ${READING_WIDTH}`}>
            {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
    );
}
