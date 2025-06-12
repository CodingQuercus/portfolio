"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {

    const [expanded, setExpanded] = useState(null);

    const projects = [
        {
            year:"2025",
            title:"aWAre",
            subtitle:"Social Media Technology, 7.5hp",
            desc: "A collaboration between engineering students at Umeå University and marketing students at Edith Cowan University. The concept was a location-based app designed to raise awareness of natural hazards and accidents in Western Australia.",
            imageUrl:"images/aWAre-MOCK.png",
            link:"/projects/aware"
        },
        {
            year:"2024",
            title:"Sketch'N'Guess",
            subtitle:"Prototype Development for Mobile Applications, 7.5hp",
            desc: "A mobile game developed with React Native and Node.js. Combining elements of Strava and Pictionary, players drew using GPS movement while others guessed the drawing in real time.",
            imageUrl:"images/SNG-MOCK.png",
            link:"/projects/sketchnguess"
        },
        {
            year:"2024",
            title:"FikaSpelet",
            subtitle:"Product Development in Media Technology using the 'Design-build-test' method, 7.5hp",
            desc: "Created in collaboration with a Swedish company, this marketing game was built using React and Phaser. The goal was to boost customer engagement through gamification techniques.",
            imageUrl:"images/FS-MOCK.png",
            link:"/projects/fikaspelet"
        },
        {
            year:"2023",
            title:"ReCharge",
            subtitle:"Design in user experience, 15hp",
            desc: "A concept app targeting electric vehicle owners, aimed at improving the user experience by simplifying charging station discovery and route planning.",
            imageUrl:"images/Recharge-MOCK.png",
            link:"/projects/recharge"
        }
    ]
    
    return (
        <div
          id="projects"
          className="w-full h-max px-10 md:px-16 xl:px-72 2xl:px-96 py-4 xl:py-16
                     flex flex-col gap-12 items-center"
        >
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              {...p}
              onExpand={() => setExpanded(p)}
            />
          ))}
        </div>
  );
}
