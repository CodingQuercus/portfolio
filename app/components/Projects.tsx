'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ProjectCard from './ProjectCard';
import PillButton from './PillButton';
import { ChevronRight } from 'lucide-react';

import majMockup from '@/public/maj/maj_mockup.png';
import thesisMockup from '@/public/thesis/thesis_mockup.png';
import awareMockup from '@/public/aware/aware_mockup.png';
import sngMockup from '@/public/sng/sng_mockup.png';

const projects = [
    {
        title: 'Maj',
        backgroundColor: '#0F766E',
        description:
            'A full-stack job application tracker built to solve a real problem during my own job search.',
        tags: [
            'Next.js', 
            'Supabase', 
            'Tailwind CSS', 
            'Recharts'],
        mockupImage: majMockup,
        href: '/projects/maj',
        showExploreLink: true,
    },
    {
        title: 'M.Sc. Thesis',
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
        showExploreLink: true,
    },
    {
        title: 'aWAre',
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
        showExploreLink: true,
    },
    {
        title: "Sketch'N'Guess",
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
        showExploreLink: true,
    }
];

export default function Projects() {
    const [shouldAnimate] = useState(() => {
        if (typeof window === 'undefined') return false;
        const hasVisited = sessionStorage.getItem('home-visited');
        if (!hasVisited) {
            sessionStorage.setItem('home-visited', 'true');
            return true;
        }
        return false;
    });

    const cardVariants: Variants = {
        hidden: shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="flex flex-col w-full gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                Projects
            </h2>
            <div className="flex flex-col gap-4 md:gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.href}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
            <PillButton href="/projects">
                Explore more projects
                <ChevronRight size={24} />
            </PillButton>
        </section>
    );
}
