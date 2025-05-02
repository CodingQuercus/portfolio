
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="flex flex-col">
    <Hero/>
    <Navigation/>
    <Footer/>
   </div>
  );
}
