import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-start gap-12 w-full pt-20 pb-20 px-4"
    >
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">CONTACT</h2>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="bg-[#282828] rounded-4xl p-6 sm:p-8 w-full lg:w-1/2 text-2xl sm:text-3xl leading-relaxed">
          Have an <strong>idea</strong>, a <strong>problem to solve</strong>, or
          <strong> just want to talk</strong>?
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <a
            href="https://www.linkedin.com/in/akeflatholm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#282828] flex flex-col p-8 rounded-4xl hover:bg-[#328e6e] transition"
          >
            <div className="flex flex-row items-center gap-3">
              <FaLinkedin size={32} />
              <div className="text-2xl sm:text-3xl font-semibold">LinkedIn</div>
            </div>
            <div className="text-base sm:text-lg">Connect with me!</div>
          </a>

          <a
            href="mailto:akeflatholm@gmail.com"
            className="bg-[#282828] flex flex-col p-8 rounded-4xl hover:bg-[#328e6e] transition"
          >
            <div className="flex flex-row items-center gap-3">
              <FaEnvelope size={32} />
              <div className="text-2xl sm:text-3xl font-semibold">Email</div>
            </div>
            <div className="text-base sm:text-lg">
              akeflatholm@gmail.com
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
