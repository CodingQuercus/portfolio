
import CaseCard from "./CaseCard"

export default function CaseStudies() {
  return (
    <section className="flex flex-col mb-10">
      <h2 className="text-5xl font-medium mb-8">Work</h2>

      <div className="flex flex-col gap-16">
        <CaseCard
          title="aWAre"
          year="2025"
          subtitle="How do we increase awareness of natural hazards in Western Australia?"
          desc="aWAre is a mobile app designed to help international travelers stay informed about hazards such as bushfires, shark sightings, extreme weather, and traffic incidents. The app combines an interactive map with a community feature for local insights and was developed through a design thinking collaboration with marketing students at Edith Cowan University."
          tags={["Mobile App Design", "UX Research", "React Native", "Firebase"]}
          image="./aware-card-image.png"
          href="/work/aware"
          variant={true}
        />

        <CaseCard
          title="Attitudes Toward Gesture Based Interactions"
          year="2025"
          subtitle="How do young adults in Sweden feel about adopting gesture interactions?"
          desc="This study investigated young adults’ attitudes toward gesture-based interaction in smart homes, using the Technology Acceptance Model to assess perceived ease of use, usefulness, trust, and willingness to adopt the technology. The findings emphasize the need for reliable, privacy-safe systems to support user acceptance."
          tags={["User Research", "HCI", "Gesture Control", "User Adoption"]}
          image="./gesture.png"
          href="/work/gesture"
          variant={false}
        />

        <CaseCard
          title="Sketch’N’Guess"
          year="2024"
          subtitle=""
          desc="Sketch’N’Guess is a mobile multiplayer game where players draw using their real GPS movement, creating drawings on a shared map while others guess what’s being drawn. The app features real-time gameplay, room creation, drawing prompts, and live guessing, built through a design sprint focused on playful, location-based interaction."
          tags={["React Native", "Node.js", "Socket.io", "Design Sprint"]}
          image="./sng-card-image.png"
          href="/work/sketchnguess"
          variant={true}
        />

        <CaseCard
          title="FikaSpelet"
          year="2024"
          subtitle="How can we increase customer traffic during seasonal events?"
          desc="FikaSpelet is a web-based game built with the Design–Build–Test method, where players ski downhill, collect fika items, and avoid obstacles while competing on a leaderboard. The game uses gamification and rewards to drive engagement and direct players to the client’s website, with over 2,500 plays recorded during the test launch."
          tags={["React", "Gamification", "Marketing", "Design-Build-Test"]}
          image="./fs-card-image.png"
          href="/work/fikaspelet"
          variant={false}
        />
      </div>
    </section>
  )
}