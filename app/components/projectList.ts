import { StaticImageData } from 'next/image';

import majMockup from '@/public/maj/maj_mockup.png';
import thesisMockup from '@/public/thesis/thesis_mockup.png';
import awareMockup from '@/public/aware/aware_mockup.png';
import sngMockup from '@/public/sng/sng_mockup.png';

type ProjectSummary = {
    title: string;
    backgroundColor: string;
    description: string;
    href: string;
    /** Full tag list, shown on the large home-page cards. */
    tags: string[];
    /** Shorter list for the smaller cards on the projects page. */
    shortTags: string[];
    /** Set for projects featured on the home page. */
    mockupImage?: StaticImageData;
    mockupAlt?: string;
};

// One source for the project cards on the home page and the projects page.
export const projectList: ProjectSummary[] = [
    {
        title: 'Maj',
        backgroundColor: '#0F766E',
        description:
            'A full-stack job application tracker built to solve a real problem during my own job search.',
        href: '/projects/maj',
        tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Recharts'],
        shortTags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Recharts'],
        mockupImage: majMockup,
        mockupAlt:
            'Maj on a laptop and a phone, showing the list of job applications.',
    },
    {
        title: 'Designing Trustworthy CUIs for Information Retrieval',
        backgroundColor: '#1D93F3',
        description:
            'A design thinking study exploring how conversational interfaces can be designed to support reliable information retrieval in quality management systems, with a focus on transparency and user trust.',
        href: '/projects/thesis',
        tags: [
            'M.Sc. Thesis',
            'Design Thinking',
            'User Research',
            'Usability Testing',
            'Prototyping',
            'Figma',
        ],
        shortTags: [
            'Design Thinking',
            'User Research',
            'Usability Testing',
            'Figma',
        ],
        mockupImage: thesisMockup,
        mockupAlt:
            'The conversational search prototype from the thesis, shown on a laptop.',
    },
    {
        title: 'aWAre',
        backgroundColor: '#1ABA87',
        description:
            'A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts and local community posts across Western Australia.',
        href: '/projects/aware',
        tags: [
            'International Collaboration',
            'Design Thinking',
            'React Native',
            'Firebase',
            'Figma',
        ],
        shortTags: [
            'International Collaboration',
            'React Native',
            'Firebase',
            'Figma',
        ],
        mockupImage: awareMockup,
        mockupAlt: 'aWAre shown on three phones, including the hazard map.',
    },
    {
        title: 'BouldR',
        backgroundColor: '#EA9734',
        description:
            'A native Android app for climbers who want to log routes, track progress and review their sessions.',
        href: '/projects/bouldr',
        tags: ['Jetpack Compose', 'Room', 'MVVM', 'CameraX'],
        shortTags: ['Jetpack Compose', 'Room', 'MVVM', 'CameraX'],
    },
    {
        title: "Sketch'N'Guess",
        backgroundColor: '#E96FA6',
        description:
            'A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js, and Socket.io for real-time communication.',
        href: '/projects/sketchnguess',
        tags: [
            'React Native',
            'Node.js',
            'Socket.io',
            'Design Sprint',
            'Figma',
        ],
        shortTags: ['React Native', 'Node.js', 'Socket.io', 'Figma'],
        mockupImage: sngMockup,
        mockupAlt: "Sketch'N'Guess on three phones during a game.",
    },
    {
        title: 'FikaSpelet',
        backgroundColor: '#0050A1',
        description:
            'A web-based mobile game developed in collaboration with a company using the Design-Build-Test method, combining gamification with brand marketing and resulting in 2,500 play sessions over two days.',
        href: '/projects/fikaspelet',
        tags: ['React', 'ASP .NET Core', 'Phaser'],
        shortTags: ['React', 'ASP .NET Core', 'Phaser'],
    },
];
