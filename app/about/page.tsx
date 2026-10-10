import type { Metadata } from 'next';
import Image from 'next/image';

import aboutImage from '@/public/about_img.png';

import { Dumbbell, LucideIcon, Music, Sandwich } from 'lucide-react';

import { Reveal, RevealLine } from '../components/Reveal';

export const metadata: Metadata = {
    title: 'About',
    description:
        'About Åke Flatholm — UX Designer and Frontend Developer based in Umeå, Sweden.',
};

type Hobby = {
    title: string;
    description: string;
    icon: LucideIcon;
};

const hobbies: Hobby[] = [
    {
        title: 'Training',
        description:
            'My biggest passion. Gym, running, and pretty much anything else. I find it energising rather than draining.',
        icon: Dumbbell,
    },
    {
        title: 'Music',
        description:
            'I listen daily and play most days too. Fun fact, I play three instruments, guitar, bass, and piano.',
        icon: Music,
    },
    {
        title: 'Food',
        description:
            "I love eating good food. I like to cook, and lately I've gotten into baking bread.",
        icon: Sandwich,
    },
];

export default function About() {
    return (
        <section
            aria-label="About"
            className="flex flex-col pt-24 md:pt-28 gap-16 md:gap-24"
        >
            {/* Text from the left edge, photo to the right edge, like the other pages. */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start w-full">
                <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1 md:col-span-7">
                    <h1 className="type-h1">Åke Flatholm</h1>
                    <div className="flex flex-col gap-3 type-body max-w-[65ch]">
                        <p>
                            I&apos;m a UX designer and developer based in Umeå,
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
                    className="order-1 md:order-2 w-64 md:w-full md:col-start-9 md:col-span-4"
                />
            </div>

            <div className="flex flex-col gap-6 md:gap-8 w-full">
                <h2 className="type-h2">Get to know me</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hobbies.map((hobby) => {
                        const Icon = hobby.icon;
                        return (
                            <Reveal key={hobby.title} className="relative pt-4">
                                <RevealLine />
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            aria-hidden="true"
                                        />
                                        <p className="type-h3">{hobby.title}</p>
                                    </div>
                                    <p className="type-body-sm">
                                        {hobby.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 w-full">
                <h2 className="type-h2">Education</h2>
                <Reveal className="relative pt-4">
                    <RevealLine />
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-16 type-h3 w-full">
                            <p className="flex-1">
                                Master of Science in Engineering with a
                                specialization in Interaction Technology and
                                Design
                            </p>
                            <p className="whitespace-nowrap">2021 - 2026</p>
                        </div>
                        <p className="type-body text-foreground/60">
                            Umeå University
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
