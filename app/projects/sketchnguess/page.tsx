
import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";
export default function SketchNGuessPage() {
    return (
        <article className="flex flex-col gap-8 min-h-screen pt-24">

            <BackButton label="Back to projects" />

            <ProjectHeader
                title="Sketch'N'Guess"
                backgroundColor="#E96FA6"
                description="A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js, and Socket.io for real-time communication."
                tags={["Design Sprint", "Prototyping", "Figma", "Mobile Development", "React Native", "Node.js", "Socket.io"]}
                meta={[
                    { label: "Role", information: "Designer & Developer" },
                    { label: "Timeline", information: "Autumn 2024" },
                ]}
            />

            <ProjectSection title="The Problem">
                <ProjectParagraph
                    paragraphs={[
                        "Under Construction",
                    ]}
                />
            </ProjectSection>
        </article>
    )
}
