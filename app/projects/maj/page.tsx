import type { Metadata } from "next";

import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";
import ProjectImage from "@/app/components/projects/ProjectImage";
import PillButton from "@/app/components/PillButton";

import landingImage from "@/public/maj/maj_landing.png";

import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Maj",
    description: "A personal job application tracker built with Next.js and Supabase.",
};

export default function MajPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-32">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="Maj"
                backgroundColor="#0F766E"
                description="My application journal, a full-stack job application tracker built to solve a real problem during my own job search."
                tags={["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"]}
                meta={[
                    { label: "Role", information: "Developer & Designer" },
                    { label: "Timeline", information: "Spring 2026" },
                    { label: "Type", information: "Personal project" },
                ]}
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "I'm currently looking for my first job after graduating, and I needed a way to keep track of where I had applied.",
                        "Spreadsheets worked but felt clunky. I decided to build something purpose-built, and use it as an opportunity to learn Next.js App Router and Supabase in a real project with auth, a database, and full CRUD.",
                    ]}
                />
            </ProjectSection>

            <ProjectImage src={landingImage} alt="Maj landing page." />

            <PillButton
                href="https://github.com/codingquercus/maj"
                target="_blank"
            >
                View on GitHub
                <FaExternalLinkAlt size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
            </PillButton>
        </article>
    );
}