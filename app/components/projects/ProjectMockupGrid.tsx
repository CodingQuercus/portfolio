import Image, { StaticImageData } from "next/image";

type Mockup = {
    src: StaticImageData;
    alt: string;
    caption?: string;
};

type ProjectMockupGridProps = {
    mockups: Mockup[];
};

export default function ProjectMockupGrid({ mockups }: ProjectMockupGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {mockups.map((mockup) => (
                <figure key={mockup.src.src} className="flex flex-col gap-2">
                    <Image
                        src={mockup.src}
                        alt={mockup.alt}
                        className="rounded-2xl md:rounded-3xl w-full h-auto"
                    />
                    {mockup.caption && (
                        <figcaption className="text-sm text-center text-foreground/60">
                            {mockup.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
        </div>
    );
}