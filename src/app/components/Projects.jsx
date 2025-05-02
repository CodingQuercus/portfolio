"use client";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col gap-6 px-1 md:px-20 pb-[20px]"
        >
            <ProjectCard
                year="2025"
                title="Erfaren"
                subtitle="Innovative mobile services and systems"
                desc1="A concept platform designed to reduce loneliness among elderly individuals."
                desc2="Full-stack project."
                desc3="Developed with SvelteKit and Supabase."
                quote="Erfaren is a platform for sharing knowledge and experience"
                what="We’ve created a platform called Erfaren, designed to allow older individuals to share their knowledge and experiences by creating courses and posts. The platform facilitates the exchange of wisdom between generations, providing an opportunity for meaningful connections to be built."
                why="Older individuals often experience loneliness. Our goal with Erfaren is to reduce loneliness by creating a space where older people can share their experiences and make new connections. Through interviews with our target audience, we discovered their preference for larger screens over mobile devices for accessibility and ease of use, which helped shape our design decisions."
                process="The project began with brainstorming sessions to identify the issues we wanted to address. We conducted interviews with our target group to gather insights and inform our decisions. After defining the design direction, we sketched ideas on paper, followed by prototyping in Figma. We drew inspiration from accessible websites like Skatteverket and 1177 to ensure our platform met WCAG (Web Content Accessibility Guidelines). In the implementation phase, we developed the website using SvelteKit and chose SupaBase for the database due to its real-time features."
                result="The outcome is a fully functional website where older individuals can create and participate in courses, share their experiences, and engage in video calls with other people eager to learn something new."
                imageUrl="images/erfaren.png"
                contribution="My main focus during the project was designing the UI and working on the UX aspects of the platform. This involved researching accessible websites to ensure an intuitive and user-friendly experience. I also contributed to the implementation of the platform."
                link="/projects/erfaren"
            />

            <ProjectCard
                year="2024"
                title="Sketch'N'Guess"
                subtitle="Prototype Development for Mobile Applications"
                desc1="A mobile game combining Pictionary with Strava."
                desc2="Full-stack project."
                desc3="Developed with React Native and Node.JS."
                quote="Sketch'N'Guess is a location-based drawing game where players guess and create art on a map"
                what="We’ve developed Sketch’N’Guess, a location-based drawing game where players create and guess drawings on a map. The game allows players to interact with each other in real-time, sharing their creativity and engaging in friendly competition."
                why="We wanted to explore how movement and creativity could be combined into a playful and social experience. By using GPS as part of the core gameplay, we aimed to create a fun way for people to interact through drawing and guessing."
                process="The project started with brainstorming different game ideas centered around creativity and movement. Once we settled on the concept of a GPS-based drawing game, we defined the core features and built initial prototypes. We used React Native for cross-platform development, and integrated libraries like react-native-maps for GPS tracking and socket.io for real-time communication."
                result="The result is a fully functional mobile game where players can create drawings based on their GPS coordinates, and guess each other’s drawings in a fun and interactive environment. The game encourages creativity and social interaction while offering a unique take on location-based gaming."
                imageUrl="images/sketchnguesslogo.png"
                contribution="My main focus during the project was implementing the backend. I worked with Node.js to set up a local server that managed all communication between clients, ensuring real-time interaction. Additionally, I handled the game logic and contributed to the development of the React Native application."
                link="/projects/sketchnguess"
            />

            <ProjectCard
                year="2024"
                title="FikaSpelet"
                subtitle="Product Development in Media Technology using the 'Design-build-test' method"
                desc1="A marketing campaign consisting of a browser game and website for a Swedish company."
                desc2="Full-stack project."
                desc3="Developed using React JS, Phaser.IO, C# and ASP.NET Core."
                quote="FikaSpelet is a marketing game that can be used to increase customer traffic"
                what="We developed a marketing game centered around Swedish fika culture, with a Christmas theme featuring the character Lussebullen. The game was built using Phaser.IO, designed to engage users and promote brand interaction through an interactive web-based game."
                why="The goal was to create an engaging and fun way to promote the brand, increase user interaction, and enhance brand visibility. By combining Swedish traditions with entertainment, we aimed to create a memorable experience that would attract new customers and encourage repeat visits."
                process="The process began with brainstorming sessions to define the game concept. After testing several ideas, we selected a Christmas-themed game. We evaluated different game engines and chose Phaser.IO for its compatibility with web deployment. The development process included prototyping, coding, and testing, along with gathering user feedback through a test launch. We also considered marketing strategies and target audience engagement throughout the project."
                result="The game was successfully developed, offering an interactive experience that enhanced the brand's visibility. Positive feedback from users confirmed the success of the game. The project was wrapped up with the creation of promotional materials, including a poster and presentation."
                imageUrl={undefined}
                contribution="My main focus during the project was implementing the game. Along with another classmate, we worked through pair programming to develop the game using the Phaser.IO game engine. I contributed to both the game logic and the implementation of game mechanics to create an engaging and functional experience."
                link="/projects/fikaspelet"
            />
        </div>
    );
}
