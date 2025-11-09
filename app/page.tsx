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
        <div className="flex flex-col min-h-screen bg-[#000000] px-4 sm:px-10 md:px-20 lg:px-40">
            {/*<div className="fixed inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#328e6e] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </div>*/}
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
    );
}
