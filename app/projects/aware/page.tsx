import type { Metadata } from "next";

import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";
import ProjectImage from "@/app/components/projects/ProjectImage";
import ProjectMockupGrid from "@/app/components/projects/ProjectMockupGrid";
import ProjectCodeBlock from "@/app/components/projects/ProjectCodeBlock";


import moscowImage from "@/public/aware/aware_moscow.png";
import mockup1 from "@/public/aware/aware_mockup_1.png";
import mockup2 from "@/public/aware/aware_mockup_2.png";
import mockup3 from "@/public/aware/aware_mockup_3.png";
import mockup4 from "@/public/aware/aware_mockup_4.png";
import clusterBefore from "@/public/aware/clusterBefore.png";
import clusterOne from "@/public/aware/afterClusterOnePin.png";
import clusterThree from "@/public/aware/afterClusterThreePins.png";
import clusterFour from "@/public/aware/afterClusterFourPins.png";


export const metadata: Metadata = {
    title: "aWAre",
    description:
        "A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts and local community posts across Western Australia.",
};

const clusterCode = `const groupPins = (pins: Pin[], region: Region) => {
  // Threshold proportional to zoom level
  const threshold = region.latitudeDelta * 0.2;

  const groups: { latitude: number; longitude: number; pins: Pin[] }[] = [];
  const visited = new Set<number>();

  for (let i = 0; i < pins.length; i++) {
    if (visited.has(i)) continue;

    const group = [pins[i]];
    const queue = [pins[i]];
    visited.add(i);

    // BFS — find all pins within threshold distance
    while (queue.length > 0) {
      const current = queue.pop()!;

      for (let j = i + 1; j < pins.length; j++) {
        if (visited.has(j)) continue;

        const target = pins[j];
        const latDiff = Math.abs(current.latitude - target.latitude);
        const lonDiff = Math.abs(current.longitude - target.longitude);

        if (latDiff < threshold && lonDiff < threshold) {
          group.push(target);
          queue.push(target);
          visited.add(j);
        }
      }
    }

    // Place group marker at average position of all pins
    const avg = group.reduce(
      (acc, pin) => ({
        latitude: acc.latitude + pin.latitude / group.length,
        longitude: acc.longitude + pin.longitude / group.length,
      }),
      { latitude: 0, longitude: 0 }
    );

    groups.push({ ...avg, pins: group });
  }

  return groups;
};`;

export default function AwarePage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-32">

            <BackButton label="Back to projects" />

            <ProjectHeader
                title="aWAre"
                backgroundColor="#1ABA87"
                description="A safety app developed in collaboration with marketing students at Edith Cowan University in Perth, providing users with hazard alerts and local community posts across Western Australia."
                tags={["International Collaboration", "Design Thinking", "User Research", "Prototyping", "Figma", "Mobile Development", "React Native", "Firebase"]}
                meta={[
                    { label: "Role", information: "Developer & Designer" },
                    { label: "Timeline", information: "Spring 2025" },
                    { label: "External Partner", information: "ECU" }
                ]}
            />

            <ProjectSection title="The Problem">
                <ProjectParagraph
                    paragraphs={[
                        "Our ECU partners came to us with a wicked problem: how might we effectively educate people about the dangers of wildlife and natural hazards in Western Australia?",
                        "Western Australia has apps for bushfires, apps for shark alerts, apps for weather. But there is no single app that brings it all together. And as an international tourist, you might not even know which dangers to look out for in the first place.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Concept Evolution">
                <ProjectParagraph
                    paragraphs={[
                        "We started with two concepts. A map app showing hazards in real time, and a quiz app for learning about dangers before arriving. The ECU students pushed back on both. The map was too similar to what already existed, and they believed that no one would open a quiz app while visiting. But both had something worth keeping, and the discussion that followed led to a new concept combining the map concept with a community feature.",
                        "We made one decision early that shaped everything after: the app would inform, not advise. Users are responsible for their own choices. aWAre helps the user to gain awareness about their surroundings, but what they do with that information is up to them."]} />
                <ProjectImage src={moscowImage} alt="MoSCoW produced after the joint concept session with ECU students." />

            </ProjectSection>

            <ProjectSection title="Design">
                <ProjectParagraph
                    paragraphs={[
                        "The goal of the design was to keep it simple. The last thing you want when travelling in an unfamiliar country is an app that overwhelms you.",
                        "We worked in Figma through several iterations, presenting to the ECU students along the way and refining based on their feedback. The screenshots below are from the final Figma prototype."
                    ]}
                />
                <ProjectMockupGrid
                    cols={4}
                    mockups={[
                        { src: mockup1, alt: "Onboarding screen showing the aWAre splash and login flow.", caption: "Onboarding" },
                        { src: mockup2, alt: "Map view showing hazard pins across Western Australia.", caption: "Map with hazard pins" },
                        { src: mockup3, alt: "Community feed showing location-based posts from other travellers.", caption: "Community feed" },
                        { src: mockup4, alt: "Warnings list showing colour-coded hazard severity.", caption: "Warnings list" },
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Pin Clustering">
                <ProjectParagraph
                    paragraphs={[
                        "As the map filled with hazard pins, a problem emerged. When multiple pins appeared close together they overlapped and became hard to read. My individual assignment was to solve this.",
                        "Instead of using a ready-made clustering library, I built a custom algorithm. Pins are grouped based on their latitude and longitude relative to the current zoom level, so clusters dissolve into individual pins as the user zooms in.",
                    ]}
                />
                <ProjectMockupGrid
                    cols={4}
                    mockups={[
                        { src: clusterBefore, alt: "Overlapping pins before clustering.", caption: "Before clustering" },
                        { src: clusterOne, alt: "All pins clustered into one.", caption: "Widest zoom" },
                        { src: clusterThree, alt: "Cluster dissolving into pins.", caption: "Zooming in" },
                        { src: clusterFour, alt: "Individual pins at closer zoom.", caption: "Closer zoom" },
                    ]}
                />
                <ProjectCodeBlock code={clusterCode} description="groupPins algorithm implemented with TypeScript" />
                <ProjectParagraph
                    paragraphs={[
                        "The algorithm works well for a small set of pins, but it runs in O(n²) time. For every pin it checks every other pin. For a dataset with thousands of pins this would become noticeably slow, and is something I would revisit if the app were to scale. The grouping threshold is also a magic number tuned by trial and error rather than calculated from the actual viewport dimensions.",
                    ]}
                />
            </ProjectSection>
        </article>
    );
}
