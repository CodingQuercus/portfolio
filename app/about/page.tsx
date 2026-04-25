"use client";

import Image from "next/image";
import aboutImage from "@/public/about_img2.jpeg";

import { StaggerContainer, StaggerItem } from "../components/StaggerOnMount";

import PillButton from "../components/PillButton";

type Skill = {
    label: string;
};

const skills: Skill[] = [
    { label: "UX Design" },
    { label: "Frontend Development" },
    { label: "User Research" },
    { label: "Prototyping" },
    { label: "Usability Testing" },
    { label: "React" },
    { label: "Figma" },
    { label: "React Native" },
];

export default function About() {
    return (
        <StaggerContainer
            className="flex flex-col items-center pt-24 md:pt-30 gap-12 md:gap-16"
        >
            <StaggerItem>
                <div className="flex flex-col md:flex-row items-center justify-around gap-8 w-full">
                    <div className="flex flex-col gap-4 order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                            Åke Flatholm
                        </h2>
                        <div className="flex flex-col gap-4 text-base md:text-xl lg:text-2xl leading-7 md:leading-8 w-full md:max-w-lg">
                            <p>
                                I&apos;m a UX designer and frontend developer based in Umeå, Sweden.
                                I enjoy working across the full process of a project, from understanding user needs through research
                                to designing and building solutions, and iterating on them through usability testing.

                            </p>
                            <p>
                                I have a Master of Science in Engineering with a specialization in
                                Interaction Technology and Design from Umeå University.
                                The program combines the human side of technology with the craft of building it,
                                which reflects how I approach my work.
                            </p>
                        </div>
                    </div>
                    <Image
                        src={aboutImage}
                        alt="An image of Åke"
                        width={384}
                        height={520}
                        loading="eager"
                        className="rounded-4xl order-1 md:order-2 w-64 md:w-96 h-auto"
                    />
                </div>
            </StaggerItem>

            <StaggerItem>
                <div className="flex flex-col gap-4 md:gap-6 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold">Skills & Tools</h3>
                    <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                        {skills.map((skill) => (
                            <span
                                key={skill.label}
                                className="rounded-full px-4 md:px-6 py-2 md:py-3 text-background bg-darkGrey font-bold text-sm md:text-base"
                            >
                                {skill.label}
                            </span>
                        ))}
                    </div>
                </div>
            </StaggerItem>

            <StaggerItem>
                <div className="flex flex-col gap-4 md:gap-6 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
                    <div className="flex flex-col gap-2 bg-darkGrey text-background px-6 md:px-8 py-4 rounded-2xl">
                        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-16 font-bold text-lg md:text-xl lg:text-2xl w-full">
                            <h4 className="flex-1">
                                Master of Science in Engineering with a specialization in
                                Interaction Technology and Design
                            </h4>
                            <h4 className="whitespace-nowrap">2021 - 2026</h4>
                        </div>
                        <p className="text-base md:text-lg lg:text-xl">Umeå University</p>
                    </div>

                    <PillButton href="/Ake_Flatholm_Resume.pdf" target="_blank">
                        Download CV
                    </PillButton>
                </div>
            </StaggerItem>
        </StaggerContainer>
    );
}