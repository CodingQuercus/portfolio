import { Metadata } from "next";
import Image from "next/image";

import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";
import ProjectProcessList from "@/app/components/projects/ProjectProcessList";
import ProjectMockupGrid from "@/app/components/projects/ProjectMockupGrid";
import ProjectStatRow from "@/app/components/projects/ProjectStatRow";
import ProjectKeyInsight from "@/app/components/projects/ProjectKeyInsight";
import PillButton from "@/app/components/PillButton";

import methodImage from "@/public/thesis/thesis_method.png";
import mockup1 from "@/public/thesis/thesis_mockup_1.png";
import mockup2 from "@/public/thesis/thesis_mockup_2.png";
import mockup3 from "@/public/thesis/thesis_mockup_3.png";
import mockup4 from "@/public/thesis/thesis_mockup_4.png";
import mockup5 from "@/public/thesis/thesis_mockup_5.png";
import mockup6 from "@/public/thesis/thesis_mockup_6.png";

import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "M.Sc. Thesis",
    description:
        "A design thinking study exploring how conversational interfaces can be designed to support reliable, AI-driven information retrieval in quality management systems, with a focus on transparency and user trust.",
};

export default function ThesisPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-30">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="Designing Trustworthy CUIs for Reliable Information Retrieval"
                backgroundColor="#EA9734"
                description="A design thinking study exploring how conversational interfaces can be designed to support reliable, AI-driven information retrieval in quality management systems, with a focus on transparency and user trust."
                tags={["M.Sc. Thesis", "Design Thinking", "User Research", "Usability Testing", "Prototyping", "Figma"]}
                meta={[
                    { label: "Role", information: "UX Researcher & Designer" },
                    { label: "Timeline", information: "Autumn 2025" },
                    { label: "External Partner", information: "AM System" },
                ]}
            />

            <ProjectSection title="The Problem">
                <ProjectParagraph
                    paragraphs={[
                        "Quality management systems store critical compliance documentation, but finding the right information can be slow and dependent on prior system knowledge. Folder-based navigation and free-text search often assume users already know what they're looking for.",
                        "A conversational interface offers an alternative. But in a compliance-driven domain, the design question isn't whether it works. It's whether users can trust what it surfaces.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Process">
                <Image
                    src={methodImage}
                    alt="The design thinking process: five phases; Empathize, Define, Ideate, Prototype, and Test"
                    className="rounded-3xl"
                />

                <ProjectProcessList
                    steps={[
                        { title: "Empathize: Interviews", information: "Semi-structured interviews were conducted with 3 end users and 2 AM System employees to understand current workflows, pain points, and attitudes toward AI-assisted search." },
                        { title: "Define: Thematic Analysis & User Need Statements", information: "A thematic analysis of the interview data resulted in 6 themes and 7 user need statements. Key themes included transparency enables trust, reliability through metadata, and efficiency as a motivator." },
                        { title: "Ideate: HMW Questions & Brainstorming", information: "The user need statements were reframed into How Might We questions to create actionable design challenges. The ideation was conducted individually due to project constraints, which focused the output but limited the breadth of ideas explored. Solutions centered on source visibility, metadata display, role-based filtering, and multiple document formats." },
                        { title: "Prototype: LoFi → HiFi in Figma", information: "Two prototype iterations were created in Figma. The LoFi prototype revealed issues with response length, visual noise, and unclear document connections. The HiFi prototype addressed these with shorter answers, a redesigned source card, and contextual document formats including flowcharts and step-by-step presentations. AI responses were simulated through Figma rather than a live implementation, which kept the focus on interface design and trust independent of AI variability." },
                        { title: "Test: Two rounds of moderated usability testing", information: "Two rounds of moderated usability testing were conducted. The LoFi prototype was tested with 4 AM System employees, and the HiFi prototype with 4 end users using think-aloud protocol, SUS, and S-TIAS questionnaires." },
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Prototype">
                <ProjectMockupGrid
                    mockups={[
                        { src: mockup1, alt: "The start view of the HiFi prototype, showing a conversational search interface with role-based suggested questions and a search input field.", caption: "Start view with role-based suggested questions and a search input" },
                        { src: mockup2, alt: "A conversation view showing the system asking for more context, a generated response with a source card containing document metadata, and a related document suggestion.", caption: "Generated response with source card and related document" },
                        { src: mockup3, alt: "The original document view of a routine, showing document metadata including creator, approver, and dates, alongside the full document content.", caption: "Original document view with full metadata" },
                        { src: mockup4, alt: "The summary view of a document, showing collapsible sections for each part of the routine.", caption: "Summary view with collapsible sections for quick navigation" },
                        { src: mockup5, alt: "A flowchart view of an assembly instruction, showing an information node, a step node, and a control point node connected by arrows.", caption: "Flowchart view of an assembly instruction" },
                        { src: mockup6, alt: "A presentation view of an assembly instruction, showing a step progress bar at the top and the current step content below.", caption: "Presentation view, a step-by-step instruction format" },
                    ]}
                />
            </ProjectSection>
            <ProjectSection title="Results">
                <ProjectParagraph
                    paragraphs={[
                        "The HiFi prototype received a SUS score of 90 (an 'A' grade indicating excellent perceived usability) and a trust score of 5.50 out of 7 on the S-TIAS scale. All four participants completed tasks without difficulty and described natural-language search as intuitive and familiar.",
                        "But the numbers only tell part of the story. The more interesting finding was how users interacted with the generated answers: not as a final authority, but as an entry point.",
                    ]}
                />

                <div className="flex flex-col gap-4">
                    <ProjectStatRow
                        stats={[
                            { value: "90", label: "SUS Score — System Usability Scale", subtitle: "Grade A • Excellent Usability" },
                            { value: "5.50", label: "Trust Score — S-TIAS", subtitle: "High level of perceived trust in the prototype." },
                        ]}
                    />
                    <ProjectKeyInsight
                        introduction="Users treated the generated answer as a starting point, not the conclusion."
                        paragraphs={[
                            "Every participant opened the source card at least once after receiving a response, often immediately, before finishing reading the answer itself. They weren't looking for the AI to be right. They were looking for a faster way to reach the document they could verify themselves.",
                            "As one participant put it: \"Without the source card, I would not have felt like I could trust the response.\"",
                        ]}
                    />
                    <ProjectKeyInsight
                        introduction="Trust was not built through the idea of an AI-driven system. It was built through transparency."
                        paragraphs={[
                            "What made users trust the system was the ability to verify information by accessing the source document and validating the metadata: creator, approver, version, and date. The conversational interaction itself was familiar and efficient, but it wasn't what created trust. Interface design, specifically the source card, document metadata, and one-click access to the original document, had an impact on perceived trust.",
                        ]}
                    />
                </div>
            </ProjectSection>

            <PillButton
                href="https://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-249334"
                target="_blank"
            >
                Read the full thesis
                <FaExternalLinkAlt size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
            </PillButton>

        </article>
    );
}
