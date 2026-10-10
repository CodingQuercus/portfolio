'use client';

import ProjectCard from './ProjectCard';
import LinkButton from './LinkButton';

import majMockup from '@/public/maj/maj_mockup.png';
import thesisMockup from '@/public/thesis/thesis_mockup.png';
import awareMockup from '@/public/aware/aware_mockup.png';
import sngMockup from '@/public/sng/sng_mockup.png';

const projects = [
    {
        title: 'Maj',
        year: '2026',
        kind: 'Personal project',
        backgroundColor: '#0F766E',
        description:
            'A full-stack job application tracker built to solve a real problem during my own job search.',
        tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Recharts'],
        mockupImage: majMockup,
        href: '/projects/maj',
    },
    {
        title: 'M.Sc. Thesis',
        year: '2025',
        kind: "Master's thesis",
        backgroundColor: '#1D93F3',
        subtitle:
            'Designing Trustworthy CUIs for Reliable Information Retrieval in QMS.',
        description:
            'A design thinking study exploring how conversational interfaces can be designed to support reliable information retrieval in quality management systems, with a focus on transparency and user trust.',
        tags: [
            'M.Sc. Thesis',
            'Design Thinking',
            'User Research',
            'Usability Testing',
            'Prototyping',
            'Figma',
        ],
        mockupImage: thesisMockup,
        href: '/projects/thesis',
    },
    {
        title: 'aWAre',
        year: '2025',
        kind: 'Course project',
        backgroundColor: '#1ABA87',
        description:
            'A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts and local community posts across Western Australia.',
        tags: [
            'International Collaboration',
            'Design Thinking',
            'React Native',
            'Firebase',
            'Figma',
        ],
        mockupImage: awareMockup,
        href: '/projects/aware',
    },
    {
        title: "Sketch'N'Guess",
        year: '2024',
        kind: 'Course project',
        backgroundColor: '#E96FA6',
        description:
            'A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js, and Socket.io for real-time communication.',
        tags: [
            'React Native',
            'Node.js',
            'Socket.io',
            'Design Sprint',
            'Figma',
        ],
        mockupImage: sngMockup,
        href: '/projects/sketchnguess',
    },
];

export default function Projects() {
    return (
        <section className="flex flex-col w-full gap-8 md:gap-12">
            <h2 className="type-h1">Projects</h2>
            <div className="flex flex-col gap-16 md:gap-24">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.href}
                        {...project}
                        reverse={i % 2 === 1}
                    />
                ))}
            </div>
            <LinkButton arrow="right" href="/projects">
                Explore more projects
            </LinkButton>
        </section>
    );
}
