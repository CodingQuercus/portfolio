import type { Metadata } from 'next';
import Image from 'next/image';

import aboutImage from '@/public/about_img.png';

export const metadata: Metadata = {
    title: 'About',
    description:
        'About Åke Flatholm — UX Designer and Frontend Developer based in Sweden.',
};

type Hobby = {
    title: string;
    description: string;
};

const hobbies: Hobby[] = [
    {
        title: 'Training',
        description:
            'My biggest passion. Gym, running, and pretty much anything else. I find it energising rather than draining.',
    },
    {
        title: 'Music',
        description:
            'I listen daily and play most days too. Fun fact, I play three instruments, guitar, bass, and piano.',
    },
    {
        title: 'Food',
        description:
            "I love eating good food. I like to cook, and lately I've gotten into baking bread.",
    },
];

export default function About() {
    return (
        <section
            aria-label="About"
            className="flex flex-col items-center pt-24 md:pt-28 gap-4 md:gap-8"
        >
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 w-full">
                <div className="flex flex-col gap-2 order-2 md:order-1">
                    <h1 className="type-h1">Åke Flatholm</h1>
                    <div className="flex flex-col gap-2 type-body w-full md:max-w-lg">
                        <p>
                            I&apos;m a UX designer and developer based in
                            Sweden. I enjoy working across the full process of a
                            project, from understanding user needs through
                            research to designing and building solutions, and
                            iterating on them.
                        </p>
                        <p>
                            What drew me to this line of work is understanding
                            how complex systems can be and how simple they can
                            feel to use. Closing this gap requires taking both
                            sides of the equation into consideration: the users
                            and the implementation.
                        </p>
                        <p>
                            I have a Master of Science in Engineering with a
                            specialization in Interaction Technology and Design
                            from Umeå University. A programme that treats the
                            human side and the technical side as the same
                            problem.
                        </p>
                    </div>
                </div>
                <Image
                    src={aboutImage}
                    alt="Portrait of Åke Flatholm smiling"
                    width={384}
                    height={520}
                    loading="eager"
                    style={{ height: 'auto' }}
                    className="rounded-3xl order-1 md:order-2 w-64 md:w-96"
                />
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h2 className="type-h2">Get to know me</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {hobbies.map((hobby) => (
                        <div key={hobby.title} className="flex flex-col gap-2">
                            <h3 className="type-h3">{hobby.title}</h3>
                            <p className="type-body-sm">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h2 className="type-h2">Education</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-16 type-h3 w-full">
                        <p className="flex-1">
                            Master of Science in Engineering with a
                            specialization in Interaction Technology and Design
                        </p>
                        <p className="whitespace-nowrap">2021 - 2026</p>
                    </div>
                    <p className="type-body">Umeå University</p>
                </div>
            </div>
        </section>
    );
}
