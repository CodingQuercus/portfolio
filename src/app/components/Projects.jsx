"use client";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
    return (
        <div
            id="projects"
            className="w-full h-max px-10 md:px-16 xl:px-72 2xl:px-96 py-16 flex flex-col justify-start items-center gap-12"
        >
            <ProjectCard
                year="2025"
                title="aWAre"
                subtitle="Social Media Technology, 7.5hp"
                desc="A collaboration between engineering students at Umeå University and marketing students at Edith Cowan University. The final concept was a location-based application to increase awareness of natural hazards and accidents in Western Australia"
                imageUrl="images/aWAre-MOCK.png"
                link="/projects/aware"
            />

            <ProjectCard
                year="2024"
                title="Sketch'N'Guess"
                subtitle="Prototype Development for Mobile Applications, 7.5hp"
                desc="A game implemented in React Native and Node.JS. A mix of Strava and Pictionary, where players draw using GPS and the remaining players guess the drawing."
                imageUrl="images/SNG-MOCK.png"
                link="/projects/sketchnguess"
            />

            <ProjectCard
                year="2024"
                title="FikaSpelet"
                subtitle="Product Development in Media Technology using the 'Design-build-test' method, 7.5hp"
                desc="A collaboration between a group of students and a Swedish company. The result was a marketing game developed in React and Phaser with the aim of increasing the proportion of customers through the use of Gamification."
                imageUrl="images/FS-MOCK.png"
                link="/projects/fikaspelet"
            />
            <ProjectCard
                year="2023"
                title="ReCharge"
                subtitle="Design in user experience, 15hp"
                desc="A concept application targeting owners of electrical vehicles with the goal of making their experience better."
                imageUrl="images/Recharge-MOCK.png"
                link="/projects/recharge"
            />
        </div>
    );
}
