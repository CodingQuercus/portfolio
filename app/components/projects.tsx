import ProjectCard from "./project/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col items-start gap-12 w-full pt-20 px-4">
      <div className="text-4xl sm:text-6xl md:text-8xl font-bold">PROJECTS</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <ProjectCard
          year={"2025"}
          title={"aWAre"}
          description={"A location-based application to increase awareness of natural hazards and accidents."}
          image={"/aware-card-image.png"}
        />
        <ProjectCard
          year={"2024"}
          title={"Sketch'N'Guess"}
          description={"A combination of Strava and Pictionary to encourage outdoor activity and daily movement."}
          image={"/sng-card-image.png"}
        />
        <ProjectCard
          year={"2024"}
          title={"FikaSpelet"}
          description={"A marketing game aimed at increasing customer traffic through gamification."}
          image={"/fs-card-image.png"}
        />
        <ProjectCard
          year={"2024"}
          title={"ReCharge"}
          description={"A concept application providing owners of electrical vehicles an easier time finding and booking chargers."}
          image={"/recharge-card-image.png"}
        />
      </div>
    </div>
  );
}
