import AboutQuiz from "./quiz/quiz";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-start gap-8 pt-20 px-4 sm:px-0 w-full"
    >
      <div className="text-4xl sm:text-6xl md:text-8xl font-bold">ABOUT ME</div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="bg-[#282828] rounded-4xl p-6 sm:p-8 w-full lg:w-1/2 text-base sm:text-lg leading-relaxed">
          <strong>Hey!</strong>
          <br />
          <br />
          I am Åke, a fifth year student in the M.Sc program in Interaction
          Technology and Design at Umeå University. I am currently writing my
          masters thesis.
          <br />
          <br />
          Throughout my studies, I have developed a passion for UI / UX and
          frontend development. I always aim to create engaging and user-friendly
          digital experiences.
          <br />
          <br />
          When I am not designing or coding, you will probably find me at the
          gym, hanging out with friends or playing music.
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <AboutQuiz />
        </div>
      </div>
    </section>
  );
}