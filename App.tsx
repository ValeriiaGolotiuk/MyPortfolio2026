
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const containerRef = useScrollReveal();

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  return (
    <main ref={containerRef} className="antialiased overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <Hero />
      
      <About />
      
      <Skills />
      
      <Projects />
      
      <Resume />
      
      <Contact />
      
      <Footer />
    </main>
  );
};

export default App;
