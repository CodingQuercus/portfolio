import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div className="flex flex-col gap-16 w-full max-w-[1200px] px-10 md:px-20 z-20">
        <Hero></Hero>
        <CaseStudies></CaseStudies>
      </div>
  );
}
