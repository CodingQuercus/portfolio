"use client";

import Link from "next/link";
import Image from "next/image";
import aboutImage from "@/public/about_img2.jpeg";

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
  { label: "Design Methods" },
  { label: "Figma" },
  { label: "React Native" },
];

export default function About() {
  return (
    <section className="flex flex-col items-center pt-24 md:pt-30 gap-12 md:gap-16">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 w-full">
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Åke Flatholm
          </h2>
          <div className="flex flex-col gap-4 text-base md:text-xl lg:text-2xl leading-7 md:leading-8 w-full md:max-w-lg">
            <p>
              I&apos;m a UX designer and Frontend Developer based in Umeå,
              Sweden. I design and build digital experiences grounded in how
              people actually think by combining user research, interaction
              design, and code.
            </p>
            <p>
              I have a Master of Science in Engineering with a specialization
              in Interaction Technology and Design. A degree which has given me
              a foundation in both the human side of technology and the craft
              of building it.
            </p>
          </div>
        </div>
        <Image
          src={aboutImage}
          alt="An image of Åke"
          width={384}
          height={520}
          className="rounded-4xl order-1 md:order-2 w-64 md:w-96 h-auto"
        />
      </div>

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
        <Link
          href="/Ake_Flatholm_Resume.pdf"
          target="_blank"
          className="text-background bg-foreground px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-xl w-fit"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}