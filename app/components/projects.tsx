import ProjectCard from "./project/ProjectCard";

import awareCard from "@/public/aware-card-image.png";
import sngCard from "@/public/sng-card-image.png";
import fsCard from "@/public/fs-card-image.png";
import rechargeCard from "@/public/recharge-card-image.png";


export default function Projects() {
  return (
    <div className="flex flex-col items-start gap-12 w-full pt-20 px-4">
      <div className="text-4xl sm:text-6xl md:text-8xl font-bold">PROJECTS</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <ProjectCard
          year={"2025"}
          title={"aWAre"}
          description={"A location-based application to increase awareness of natural hazards and accidents."}
          image={awareCard}
        />
        <ProjectCard
          year={"2024"}
          title={"Sketch'N'Guess"}
          description={"A combination of Strava and Pictionary to encourage outdoor activity and daily movement."}
          image={sngCard}
        />
        <ProjectCard
          year={"2024"}
          title={"FikaSpelet"}
          description={"A marketing game aimed at increasing customer traffic through gamification."}
          image={fsCard}
        />
        <ProjectCard
          year={"2024"}
          title={"ReCharge"}
          description={"A concept application providing owners of electrical vehicles an easier time finding and booking chargers."}
          image={rechargeCard}
        />
      </div>
    </div>
  );
}
