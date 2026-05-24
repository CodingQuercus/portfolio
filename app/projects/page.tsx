import type { Metadata } from 'next';
import ProjectCardMini from '../components/ProjectCardMini';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'A mix of academic work and things I keep building on my own time.',
};

const projects = [
    {
        title: 'Maj',
        backgroundColor: '#0F766E',
        description:
            'A full-stack job application tracker built to solve a real problem during my own job search.',
        tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Recharts'],
        href: '/projects/maj',
    },
    {
        title: 'M.Sc. Thesis',
        backgroundColor: '#1D93F3',
        description:
            'A design thinking study exploring how conversational interfaces can be designed to support reliable information retrieval in quality management systems, with a focus on transparency and user trust.',
        tags: [
            'Design Thinking',
            'User Research',
            'Usability Testing',
            'Figma',
        ],
        href: '/projects/thesis',
    },
    {
        title: 'aWAre',
        backgroundColor: '#1ABA87',
        description:
            'A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts and local community posts across Western Australia.',
        tags: [
            'International Collaboration',
            'React Native',
            'Firebase',
            'Figma',
        ],
        href: '/projects/aware',
    },
    {
        title: 'BouldR',
        backgroundColor: '#EA9734',
        description:
            'A native Android app for climbers who want to log routes, track progress and review their sessions.',
        tags: ['Jetpack Compose', 'Room', 'MVVM', 'CameraX'],
        href: '/projects/bouldr',
    },
    {
        title: "Sketch'N'Guess",
        backgroundColor: '#E96FA6',
        description:
            'A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js, and Socket.io for real-time communication.',
        tags: ['React Native', 'Node.js', 'Socket.io', 'Figma'],
        href: '/projects/sketchnguess',
    },
    {
        title: 'FikaSpelet',
        backgroundColor: '#0050A1',
        description:
            'A web-based mobile game developed in collaboration with a company using the Design-Build-Test method, combining gamification with brand marketing and resulting in 2,500 play sessions over two days.',
        tags: ['React', 'ASP .NET Core', 'Phaser'],
        href: '/projects/fikaspelet',
    },
];

export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-4 pt-24 md:pt-28">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                Projects
            </h1>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCardMini
                        {...project}
                        key={project.title + '_' + index}
                    />
                ))}
            </ul>
        </section>
    );
}
