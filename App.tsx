
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ProblemSolving from './components/ProblemSolving';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AllProjects from './components/AllProjects';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<'main' | 'all-projects'>('main');

  useEffect(() => {
    if (view === 'main') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'problem-solving', 'education', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [view]);

  // Handle navigating back to home from projects page
  const navigateToMain = () => {
    setView('main');
    window.scrollTo(0, 0);
  };

  const navigateToAllProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('all-projects');
    window.scrollTo(0, 0);
  };

  if (view === 'all-projects') {
    return (
      <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
        <AllProjects onBack={navigateToMain} />
        <Footer />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onViewAll={navigateToAllProjects} />
        <ProblemSolving />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
