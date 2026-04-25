"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Designing Trustworthy CUIs for Reliable Information Retrieval",
        backgroundColor: "#EA9734",
        description:
            "A design thinking study exploring how conversational interfaces can be designed to support reliable, AI-driven information retrieval in quality management systems, with a focus on transparency and user trust.",
        tags: [
            "M.Sc. Thesis",
            "Design Thinking",
            "User Research",
            "Usability Testing",
            "Prototyping",
            "Figma",
        ],
        href: "/projects/thesis",
        showExploreLink: true,
    },
    {
        title: "aWAre",
        backgroundColor: "#1ABA87",
        description:
            "A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts across Western Australia.",
        tags: [
            "International Collaboration",
            "Design Thinking",
            "User Research",
            "Prototyping",
            "Figma",
            "Mobile Development",
            "React Native",
            "Firebase",
        ],
        href: "/projects/aware",
        showExploreLink: true,
    },
    {
        title: "Sketch'N'Guess",
        backgroundColor: "#E96FA6",
        description:
            "A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js, and Socket.io for real-time communication.",
        tags: [
            "Design Sprint",
            "Prototyping",
            "Figma",
            "Mobile Development",
            "React Native",
            "Node.js",
            "Socket.io",
        ],
        href: "/projects/sketchnguess",
        showExploreLink: true,
    },
    {
        title: "FikaSpelet",
        backgroundColor: "#0050A1",
        description:
            "A web-based mobile game developed in collaboration with a company using the Design-Build-Test method, combining gamification with brand marketing and resulting in 2,500 play sessions over two days.",
        tags: [
            "Design-Build-Test",
            "Gamification",
            "Prototyping",
            "Figma",
            "Web/Mobile Development",
            "React",
            "Phaser.js",
        ],
        href: "/projects/fikaspelet",
        showExploreLink: true,
    },
]


export default function Projects() {

    const [shouldAnimate] = useState(() => {
        if (typeof window === "undefined") return false;
        const hasVisited = sessionStorage.getItem("home-visited");
        if (!hasVisited) {
            sessionStorage.setItem("home-visited", "true");
            return true;
        }
        return false;
    });

    const cardVariants: Variants = {
        hidden: shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="flex flex-col w-full">
            <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold mb-4">
                Projects
            </h2>
            <div className="flex flex-col gap-8" >
                {projects.map((project) => (
                    <motion.div
                        key={project.href}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}