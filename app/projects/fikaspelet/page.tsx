import { Metadata } from "next";

import BackButton from "@/app/components/projects/BackButton";
import ProjectHeader from "@/app/components/projects/ProjectHeader";
import ProjectSection from "@/app/components/projects/ProjectSection";
import ProjectParagraph from "@/app/components/projects/ProjectParagraph";
import ProjectMockupGrid from "@/app/components/projects/ProjectMockupGrid";
import ProjectStatRow from "@/app/components/projects/ProjectStatRow";
import ProjectKeyInsight from "@/app/components/projects/ProjectKeyInsight";

import mockup1 from "@/public/fs/fika_start.png";
import mockup2 from "@/public/fs/fika_game.png";
import mockup3 from "@/public/fs/fika_gameover.png";
import mockup4 from "@/public/fs/fika_discount.png";

export const metadata: Metadata = {
    title: "FikaSpelet",
    description:
        "A web-based mobile game developed in collaboration with Svensk Husman using the Design-Build-Test method, combining gamification with brand marketing and resulting in 2,500 play sessions over two days.",
};

export default function FikaSpeletPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-32">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="FikaSpelet"
                backgroundColor="#0050A1"
                description="A web-based marketing game developed in collaboration with Svensk Husman, combining gamification with brand marketing. 2,500 play sessions over two days."
                tags={["Design-Build-Test", "Gamification", "Prototyping", "Figma", "Web/Mobile Development", "React", "Phaser"]}
                meta={[
                    { label: "Role", information: "Developer & Designer" },
                    { label: "Timeline", information: "Spring 2024" },
                    { label: "External Partner", information: "Svensk Husman" },
                ]}
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "Svensk Husman wanted a marketing campaign to drive traffic and sales. We built a browser-based game where players guide a skiing Lussebulle down a snowy slope, collecting lussebullar for points and chasing a hidden golden bun that unlocks a discount code and redirects them to the Svensk Husman website.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="What we built">
                <ProjectParagraph
                    paragraphs={[
                        "A full-stack web application: a React frontend with a Phaser game embedded, backed by an ASP.NET Core API and a MySQL database, deployed on a live domain. Players register with their email, play the game, and compete on a leaderboard for a gift card. The client received a password-protected admin panel to manage campaigns, where they could update the discount code, prize, point threshold and end date, without having to touch code.",
                        "The screenshots below are from the Figma prototype, the live version shipped as an MVP with the same core flow but a simpler visual design.",
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        { src: mockup1, alt: "Start screen showing the FikaSpelet logo, a skiing Lussebulle, email input and a Starta button.", caption: "Start" },
                        { src: mockup2, alt: "Game screen showing the skiing character dodging obstacles and collecting lussebullar.", caption: "Game" },
                        { src: mockup3, alt: "Game over screen showing the player's score and a leaderboard preview.", caption: "Game over" },
                        { src: mockup4, alt: "Discount code modal with a golden Lussebulle and a button to copy the code and visit Svensk Husman.", caption: "Golden Lussebulle (discount code)" },
                    ]}
                    cols={4}
                />
            </ProjectSection>

            <ProjectSection title="Individual contribution">
                <ProjectKeyInsight
                    introduction="I pair-programmed the game together with a teammate."
                    paragraphs={[
                        "We built the Phaser game together, the skiing lussebulle, obstacle generation, collectible mechanics, the golden bun trigger and the score system. Beyond the game I contributed across the stack where needed, including parts of the React frontend and the integration between the game and the backend API.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Result">
                <ProjectStatRow
                    stats={[
                        { value: "2,500", label: "Play sessions", subtitle: "Over a two day test period" },
                        { value: "40x", label: "Plays per person", subtitle: "Average across all users" },
                        { value: "126", label: "Redirects to svenskhusman.se", subtitle: "Via discount code and game over CTA" },
                    ]}
                />
            </ProjectSection>
        </article>
    );
}