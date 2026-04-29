import Image, { StaticImageData } from "next/image";

type Mockup = {
    src: StaticImageData;
    alt: string;
    caption?: string;
};

type ProjectMockupGridProps = {
    mockups: Mockup[];
    cols?: 1 | 2 | 3 | 4;
};

export default function ProjectMockupGrid({ mockups, cols = 1 }: ProjectMockupGridProps) {
    const colClass = {
        1: "grid-cols-1 md:grid-cols-2",
        2: "grid-cols-2",
        3: "grid-cols-2 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
    }[cols];

    return (
        <div className={`grid ${colClass} gap-4 md:gap-6 lg:gap-8`}>
            {mockups.map((mockup) => (
                <figure key={mockup.src.src} className="flex flex-col gap-2 items-center">
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image
                            src={mockup.src}
                            alt={mockup.alt}
                            className="w-full h-auto max-h-96 object-contain"
                        />
                    </div>
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