import type { Metadata } from 'next';
import ProjectCardMini from '../components/ProjectCardMini';
import { projectList } from '../components/projectList';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'A mix of academic work and things I keep building on my own time.',
};

export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-4 pt-24 md:pt-28">
            <h1 className="type-h1">Projects</h1>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projectList.map((project) => (
                    <ProjectCardMini
                        key={project.href}
                        title={project.title}
                        description={project.description}
                        backgroundColor={project.backgroundColor}
                        href={project.href}
                        tags={project.shortTags}
                    />
                ))}
            </ul>
        </section>
    );
}
