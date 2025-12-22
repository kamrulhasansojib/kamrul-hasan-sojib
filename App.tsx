import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import ProblemSolving from "./components/ProblemSolving";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AllProjects from "./components/AllProjects";
import Certifications from "./components/Certifications";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [view, setView] = useState<"main" | "all-projects">("main");

  useEffect(() => {
    if (view === "main") {
      const handleScroll = () => {
        const sections = [
          "home",
          "about",
          "skills",
          "certifications",
          "projects",
          "problem-solving",
          "contact",
        ];
        
        let currentSection = "home";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is in viewport (top is above middle of screen)
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentSection = section;
              break;
            }
            // Fallback: check if we're past the section
            if (rect.top < 200 && rect.bottom > 0) {
              currentSection = section;
            }
          }
        }
        
        setActiveSection(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Call immediately on mount
      
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [view]);

  const navigateToMain = () => {
    setView("main");
    window.scrollTo(0, 0);
  };

  const navigateToAllProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    setView("all-projects");
    window.scrollTo(0, 0);
  };

  if (view === "all-projects") {
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
        <Certifications />
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