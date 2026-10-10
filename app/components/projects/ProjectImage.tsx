import Image, { StaticImageData } from 'next/image';

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
        <div className="flex flex-col gap-1 md:gap-2 md:w-3/4 lg:w-2/3 mx-auto">
            <div className="overflow-hidden">
                <Image src={src} alt={alt} className="w-full" />
            </div>
            <figcaption className="type-caption text-center">
                {caption}
            </figcaption>
        </div>
    );
}
