"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"

import BackButton from "@/app/components/projects/BackButton";

import ProjectHeader from "@/app/components/projects/ProjectHeader";

import ProjectSection from "@/app/components/projects/ProjectSection";

import ProjectParagraph from "@/app/components/projects/ProjectParagraph";

import ProjectProcessList from "@/app/components/projects/ProjectProcessList";

import ProjectMockupGrid from "@/app/components/projects/ProjectMockupGrid";

import ProjectStatRow from "@/app/components/projects/ProjectStatRow";
import ProjectKeyInsight from "@/app/components/projects/ProjectKeyInsight";

import methodImage from "@/public/thesis/thesis_method.png";

import mockup1 from "@/public/thesis/thesis_mockup_1.png";
import mockup2 from "@/public/thesis/thesis_mockup_2.png";
import mockup3 from "@/public/thesis/thesis_mockup_3.png";
import mockup4 from "@/public/thesis/thesis_mockup_4.png";
import mockup5 from "@/public/thesis/thesis_mockup_5.png";
import mockup6 from "@/public/thesis/thesis_mockup_6.png";

import { FaExternalLinkAlt } from "react-icons/fa";


export default function ThesisPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24">
            <BackButton href="/" label="Back to projects" />

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
                        "Quality management systems store critical compliance documentation — but finding the right information can be slow and dependent on prior system knowledge. Folder-based navigation and free-text search often assume users already know what they're looking for. A conversational interface offers an alternative, but in a compliance-driven domain the design question isn't whether it works — it's whether users can trust what it surfaces.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Process">
                <Image
                    src={methodImage}
                    alt="An image of the design thinking process. Showing the five phases; Empathize, Define, Ideate, Prototype, and Test"
                    className="rounded-3xl"
                />

                <ProjectProcessList
                    steps={[
                        { title: "Empathize — Interviews", information: "Semi-structured interviews with 3 end users and 2 AM System employees to understand current workflows, pain points, and attitudes toward AI-assisted search." },
                        { title: "Define — Thematic Analysis & User Need Statements", information: "Interview data synthesized into 6 themes and 7 user need statements. Key themes: transparency enables trust, reliability through metadata, and efficiency as a motivator." },
                        { title: "Ideate — HMW Questions & Brainstorming", information: "How Might We questions reframed user needs into design challenges. Solutions focused on source visibility, metadata display, role-based filtering, and multiple document formats." },
                        { title: "Prototype — LoFi → HiFi in Figma", information: "Two iterations. LoFi revealed issues with response length, visual noise, and unclear document connections. HiFi addressed these with shorter answers, a redesigned source card, and contextual document formats including flowcharts and step-by-step presentations." },
                        { title: "Test — Two rounds of moderated usability testing", information: "LoFi tested with 4 AM System employees. HiFi tested with 4 end users using think-aloud protocol, SUS, and S-TIAS questionnaires." },
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Prototype">

                <ProjectMockupGrid
                    mockups={[
                        { src: mockup1, alt: "Starting view of the HiFi prototype." },
                        { src: mockup2, alt: "A user has searched for information." },
                        { src: mockup3, alt: "A user is viewing the original document." },
                        { src: mockup4, alt: "A user is viewing the summary of a document." },
                        { src: mockup5, alt: "A user is viewing the flowchart of a document." },
                        { src: mockup6, alt: "A user is viewing the presentation mode of a document." },
                    ]}
                />
            </ProjectSection>


            <ProjectSection title="Results">
                <ProjectParagraph
                    paragraphs={[
                        "The HiFi prototype received a SUS score of 90 — an \"A\" grade indicating excellent perceived usability — and a trust score of 5.50 out of 7 on the S-TIAS scale. All four participants completed tasks without difficulty and described natural-language search as intuitive and familiar.",
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
                            "Every participant opened the source card at least once after receiving a response — often immediately, before finishing reading the answer itself. They weren't looking for the AI to be right. They were looking for a faster way to reach the document they could verify themselves.",
                            "As one participant put it: \"Without the source card, I would not have felt like I could trust the response.\"",
                        ]}
                    />
                    <ProjectKeyInsight
                        introduction="Trust was not built through the idea of an AI-driven system — it was built through transparency."
                        paragraphs={[
                            "What made users trust the system was the ability to verify information — by accessing the source document and validating the metadata: creator, approver, version, and date. The conversational interaction itself was familiar and efficient, but it wasn't what created trust. Interface design — specifically the source card, document metadata, and one-click access to the original document — had a direct impact on perceived trust.",
                        ]}
                    />
                </div>
            </ProjectSection>
            <motion.div
                whileHover={{ translateY: -4 }}
                className="bg-foreground text-background rounded-full hover:bg-mintgreen cursor-pointer w-fit px-4 md:px-6 py-2 md:py-3 transition"
            >
                <Link
                    href="https://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-249334"
                    target="_blank"
                    className="text-base md:text-lg lg:text-xl flex flex-row gap-2 items-center justify-center"
                >
                    Read the full thesis
                    <FaExternalLinkAlt size={16} className="md:w-5 md:h-5" />
                </Link>
            </motion.div>
        </article>
    );
}
