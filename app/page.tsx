import Image from "next/image";

import Header from "./components/header";

import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { ScrollProgress } from "./components/ScrollProgres.";

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#000000]">

            <div className="fixed inset-0 opacity-25 pointer-events-none z-10">
                <div className="absolute top-0 -left-4 w-44 h-44 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                <div className="absolute -bottom-8 right-24 w-44 h-44 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000" />
            </div>

            <div className="w-full max-w-[1200px] px-4 sm:px-10 z-20">
                <ScrollProgress></ScrollProgress>
                <Header></Header>
                <section id="home">
                    <Hero></Hero>
                </section>
                <section id="about">
                    <About></About>
                </section>
                <section id="projects">
                    <Projects></Projects>
                </section>
                <section id="contact">
                    <Contact></Contact>
                </section>
                <Footer></Footer>
            </div>
        </div>
    );
}
