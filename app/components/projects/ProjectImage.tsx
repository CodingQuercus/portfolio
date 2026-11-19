import Image, { StaticImageData } from 'next/image';

import { MEDIA_WIDTH } from './readingWidth';
type ProjectImageProps = {
    src: StaticImageData;
    alt: string;
    caption?: string;
};

export default function ProjectImage({ src, alt, caption }: ProjectImageProps) {
    // Captions are written without a full stop; alt text ends with one.
    const shown = caption ?? alt.replace(/\.$/, '');
    return (
        <figure className={`flex flex-col gap-1 md:gap-2 ${MEDIA_WIDTH}`}>
            <div className="rounded-2xl overflow-hidden border border-foreground/10">
                <Image src={src} alt={alt} className="rounded-2xl w-full" />
            </div>
            <figcaption className="type-caption">{shown}</figcaption>
        </figure>
    );
}
