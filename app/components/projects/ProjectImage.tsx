import Image, { StaticImageData } from 'next/image';

import { READING_WIDTH } from './readingWidth';
type ProjectImageProps = {
    src: StaticImageData;
    alt: string;
    caption?: string;
};

export default function ProjectImage({
    src,
    alt,
    caption = alt,
}: ProjectImageProps) {
    return (
        <figure className={`flex flex-col gap-1 md:gap-2 ${READING_WIDTH}`}>
            <div className="rounded-3xl overflow-hidden">
                <Image src={src} alt={alt} className="rounded-3xl w-full" />
            </div>
            <figcaption className="type-caption">{caption}</figcaption>
        </figure>
    );
}
