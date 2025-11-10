import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";

import awareProject from "@/public/aware-project.png";
import sngProject from "@/public/sng-project.png";
import fsProject from "@/public/fs-project.png";
import rechargeProject from "@/public/recharge-project.png";

import Footer from "@/app/components/footer";
import { ScrollProgress } from "@/app/components/ScrollProgres.";

type ProjectData = {
    title: string;
    subtitle: string;
    year: string;
    role: string;
    course: string;
    duration: string;
    heroImage: StaticImageData;
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    impact: string[];
    tech: string[];
    color: string,
};

const projects: Record<string, ProjectData> = {
    aware: {
        title: "aWAre",
        subtitle: "Increasing awareness of natural hazards and dangers.",
        year: "2025",
        role: "Designer & Developer",
        course: "Technology for Social Media, 7.5 ECTS",
        duration: "2 months",
        heroImage: awareProject,
        overview:
            "WIP",
        challenge:
            "WIP",
        solution:
            "WIP",
        features: [
            "WIP",
        ],
        impact: [
            "WIP"
        ],
        tech: ["React Native", "TypeScript", "Firebase"],
        color: "#328e6e",
    },
    sketch_n_guess: {
        title: "Sketch'N'Guess",
        subtitle: "Making outdoor activities a bit more fun!",
        year: "2024",
        role: "Designer & Developer",
        course: "Prototype Development for Mobile Applications, 7.5 ECTS",
        duration: "2 months",
        heroImage: sngProject,
        overview:
            "WIP",
        challenge:
            "WIP",
        solution:
            "WIP",
        features: [
            "WIP",
        ],
        impact: [
            "WIP"
        ],
        tech: ["React Native", "TypeScript", "Node.js"],
        color: "#E96FA6"
    },
    fikaspelet: {
        title: "FikaSpelet",
        subtitle: "Increasing customer traffic and engagement through gamification.",
        year: "2024",
        role: "Designer & Developer",
        course: "Prototype Development with Design Build Test, 7.5 ECTS",
        duration: "6 months",
        heroImage: fsProject,
        overview:
            "WIP",
        challenge:
            "WIP",
        solution:
            "WIP",
        features: [
            "WIP",
        ],
        impact: [
            "WIP"
        ],
        tech: ["React Native", "JavaScript", "Phaser", ".NET", "SQL"],
        color: "#0050A1"
    },
    recharge: {
        title: "ReCharge",
        subtitle: "Enhancing EV ownership through smoother charger discovery and planning.",
        year: "2023",
        role: "Designer",
        course: "Design for User Experience, 15 ECTS",
        duration: "2 months",
        heroImage: rechargeProject,
        overview:
            "WIP",
        challenge:
            "WIP",
        solution:
            "WIP",
        features: [
            "WIP",
        ],
        impact: [
            "WIP"
        ],
        tech: ["Figma"],
        color: "#00A3FF"
    },
};

export function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const data = projects[slug];

    if (!data) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Project not found</h1>
                <Link href="/#projects" className="text-[#328e6e] underline">
                    Back to projects
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 pt-10 px-4 sm:px-10 max-w-screen-xl mx-auto">
            <ScrollProgress color={data.color}/>
            <Link 
                href="/#projects" 
                className="flex flex-row items-center justify-center gap-2 w-48 h-12 rounded-full hover:opacity-80]"
                style={{backgroundColor: data.color}}
            >
                <FaChevronLeft size={24}></FaChevronLeft>Back to projects
            </Link>

            <div>
                <p className="text-lg">{data.year}</p>
                <h1 className="text-4xl sm:text-6xl font-bold">{data.title}</h1>
                <p className="text-lg sm:text-xl">{data.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <QuickFact label="Role" value={data.role} />
                <QuickFact label="Course" value={data.course} />
                <QuickFact label="Duration" value={data.duration} />
            </div>

            <div className="w-full rounded-4xl">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] rounded-3xl overflow-hidden">
                    <Image
                        src={data.heroImage}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <Section title="Overview">
                <p>{data.overview}</p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Section title="The Challenge">
                    <p>{data.challenge}</p>
                </Section>
                <Section title="The Solution">
                    <p>{data.solution}</p>
                </Section>
            </div>

            <Section title="Key Features">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.features.map((f, i) => (
                        <li key={i} className="bg-[#282828] p-4 rounded-3xl">
                            {f}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Impact">
                <ul className="flex flex-col gap-2">
                    {data.impact.map((x, i) => (
                        <li key={i} className="leading-snug">• {x}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Tech Stack">
                <div className="flex gap-3 flex-wrap">
                    {data.tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 rounded-full text-sm"
                            style={{ backgroundColor: data.color }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </Section>

            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#282828] p-6 rounded-4xl flex flex-col gap-4">
                    <div className="font-bold text-lg">
                        Interested to hear more about this project?
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                            href="/#projects"
                            className="min-w-40 bg-[#000000] px-4 py-2 text-center rounded-full hover:bg-[#00000080]"
                        >
                            View more projects
                        </Link>

                        <Link
                            href="/#contact"
                            className="min-w-40 px-4 py-2 text-center rounded-full hover:opacity-80"
                            style={{ backgroundColor: data.color }}
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

function QuickFact({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-[#282828] rounded-3xl p-4">
            <p className="text-white/70 text-sm">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}

function Section({ title, children }: { title: string; children: any }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {children}
        </div>
    );
}
