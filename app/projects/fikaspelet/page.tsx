import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";

export default function FikaSpeletPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-32">

            <BackButton label="Back to projects" />

            <ProjectHeader
                title="FikaSpelet"
                backgroundColor="#0050A1"
                description="A web-based mobile game developed in collaboration with a company using the Design-Build-Test method, combining gamification with brand marketing and resulting in 2,500 play sessions over two days."
                tags={["Design-Build-Test", "Gamification", "Prototyping", "Figma", "Web/Mobile Development", "React", "Phaser.js"]}
                meta={[
                    { label: "Role", information: "Developer & Designer" },
                    { label: "Timeline", information: "Spring 2024" },
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
