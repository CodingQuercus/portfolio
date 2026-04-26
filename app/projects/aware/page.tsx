import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";

export default function AwarePage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-32">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="aWAre"
                backgroundColor="#1ABA87"
                description="A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts across Western Australia."
                tags={["International Collaboration", "Design Thinking", "User Research", "Prototyping", "Figma", "Mobile Development", "React Native", "Firebase"]}
                meta={[
                    { label: "Role", information: "Developer & Designer" },
                    { label: "Timeline", information: "Spring 2025" },
                ]}
            />

            <ProjectSection title="The Problem">
                <ProjectParagraph
                    paragraphs={[
                        "Under Construction"
                    ]}
                />
            </ProjectSection>
        </article>
    );
}
