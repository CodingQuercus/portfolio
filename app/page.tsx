import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <div className="flex flex-col z-20">
            <Hero></Hero>
            <Projects></Projects>
        </div>
    );
}
