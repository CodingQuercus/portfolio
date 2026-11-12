'use client';

import { motion, Variants } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectList } from './projectList';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { TEXT_LINK } from './linkStyle';
import { useIntroMode } from './useIntroMode';
import { EASE_OUT } from './motionTokens';

// Projects with a mockup are the ones featured here.
const featured = projectList.filter((p) => p.mockupImage);

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    // Cards fade in on scroll as part of the first-visit intro only;
    // otherwise they're shown straight away.
    const introMode = useIntroMode();
    const playIntro = introMode === 'play';

    return (
        <section className="flex flex-col w-full gap-4">
            <h2 className="type-h1">Projects</h2>
            <div className="flex flex-col gap-4 md:gap-6">
                {featured.map((project) => (
                    <motion.div
                        key={project.href}
                        variants={cardVariants}
                        initial="hidden"
                        animate={introMode === 'skip' ? 'visible' : undefined}
                        whileInView={playIntro ? 'visible' : undefined}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={
                            playIntro
                                ? { duration: 0.8, ease: EASE_OUT }
                                : { duration: 0 }
                        }
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            backgroundColor={project.backgroundColor}
                            href={project.href}
                            tags={project.tags}
                            mockupImage={project.mockupImage}
                            mockupAlt={project.mockupAlt}
                        />
                    </motion.div>
                ))}
            </div>
            <Link
                href="/projects"
                className="flex flex-row items-center gap-1 w-fit type-body"
            >
                <span className={TEXT_LINK}>Explore more projects</span>
                <ChevronRight size={16} aria-hidden="true" />
            </Link>
        </section>
    );
}
