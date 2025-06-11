'use client'

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Hero from "./components/Hero";
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PixelBackground from './components/PixelTransition';

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [currentSection, setCurrentSection] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false);

  const hasMounted = useRef(false);

  useEffect(() => {
    const savedSection = sessionStorage.getItem('currentSection');
    if (savedSection && savedSection !== currentSection) {
      setCurrentSection(savedSection);
    }
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      hasMounted.current = true;
    }
  }, [currentSection]);

  const toggleMenu = (value) => {
    setMenuIsActive(value);
  };

  const navigateToSection = (section) => {
    if (section === currentSection) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      sessionStorage.setItem('currentSection', section);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className="flex flex-col">
      <Header
        currentSection={currentSection}
        menuIsActive={menuIsActive}
        toggleMenu={toggleMenu}
        navigateToSection={navigateToSection}
      />
      <Menu
        menuIsActive={menuIsActive}
        toggleMenu={toggleMenu}
        navigateToSection={navigateToSection}
        currentSection={currentSection}
      />
      <PixelBackground isTransitioning={isTransitioning} />

      {currentSection === 'home' && <Hero navigateToSection={navigateToSection} />}
      {currentSection === 'about' && <About />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}
