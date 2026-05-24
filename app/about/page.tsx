import type { Metadata } from 'next';
import Image from 'next/image';

import aboutImage from '@/public/about_img2.jpeg';

import { Dumbbell, LucideIcon, Music, Sandwich } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About',
    description:
        'About Åke Flatholm — UX Designer and Frontend Developer based in Umeå, Sweden.',
};

type Skill = {
    label: string;
};

type Hobby = {
    title: string;
    description: string;
    color: string;
    icon: LucideIcon;
};

const skills: Skill[] = [
    { label: 'UX Design' },
    { label: 'Frontend Development' },
    { label: 'User Research' },
    { label: 'Prototyping' },
    { label: 'Usability Testing' },
    { label: 'React' },
    { label: 'Figma' },
    { label: 'React Native' },
];

const hobbies: Hobby[] = [
    {
        title: 'Training',
        description:
            'My biggest passion. Gym, running, and pretty much anything else. I find it energising rather than draining.',
        color: '#1D93F3',
        icon: Dumbbell,
    },
    {
        title: 'Music',
        description:
            'I listen daily and play most days too. Fun fact, I play three instruments, guitar, bass, and piano.',
        color: '#E96FA6',
        icon: Music,
    },
    {
        title: 'Food',
        description:
            "I love eating good food. I like to cook, and lately I've gotten into baking bread.",
        color: '#1ABA87',
        icon: Sandwich,
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
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                        Åke Flatholm
                    </h1>
                    <div className="flex flex-col gap-2 text-base md:text-lg leading-7 md:leading-8 w-full md:max-w-lg">
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
                    className="rounded-4xl order-1 md:order-2 w-64 md:w-96 h-auto"
                />
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Skills & Tools
                </h2>
                <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                    {skills.map((skill) => (
                        <span
                            key={skill.label}
                            className="rounded-full px-4 md:px-6 py-2 md:py-3 text-background bg-darkGrey font-semibold text-sm md:text-base"
                        >
                            {skill.label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Get to know me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    {hobbies.map((hobby) => {
                        const Icon = hobby.icon;
                        return (
                            <div
                                key={hobby.title}
                                style={{ background: hobby.color }}
                                className="flex flex-col gap-2 text-background px-6 py-5 rounded-2xl"
                            >
                                <div className="flex flex-row gap-2 items-center">
                                    <Icon
                                        size={24}
                                        className="text-background opacity-90"
                                    />
                                    <p className="font-bold text-base md:text-lg">
                                        {hobby.title}
                                    </p>
                                </div>
                                <p className="text-sm md:text-base leading-6">
                                    {hobby.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
                <div className="flex flex-col gap-2 bg-darkGrey text-background px-6 md:px-8 py-4 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-16 font-bold text-base md:text-xl w-full">
                        <p className="flex-1">
                            Master of Science in Engineering with a
                            specialization in Interaction Technology and Design
                        </p>
                        <p className="whitespace-nowrap">2021 - 2026</p>
                    </div>
                    <p className="text-base md:text-lg">Umeå University</p>
                </div>
            </div>
        </section>
    );
}
