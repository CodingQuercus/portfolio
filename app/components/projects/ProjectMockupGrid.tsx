import Image, { StaticImageData } from "next/image";

type Mockup = {
    src: StaticImageData;
    alt: string;
};

type ProjectMockupGridProps = {
    mockups: Mockup[];
};

export default function ProjectMockupGrid({ mockups }: ProjectMockupGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {mockups.map((mockup, i) => (
                <Image
                    key={i}
                    src={mockup.src}
                    alt={mockup.alt}
                    className="rounded-2xl md:rounded-3xl w-full h-auto"
                />
            ))}
        </div>
    );
}