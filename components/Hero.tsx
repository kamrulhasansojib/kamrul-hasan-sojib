import React, { useState, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const titles = [
    "CSE Undergraduate",
    "MERN Stack Developer",
    "Problem Solver",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentTitle = titles[index];
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Internships & Projects
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Kamrul Hasan Sojib
          </span>
        </h1>

        <div className="h-12 text-2xl md:text-3xl font-mono text-gray-400 mb-8 flex items-center justify-center">
          <span className="text-blue-500">ME</span>
          <span className="mx-2">|</span>
          <span>{displayText}</span>
          <span className="w-[2px] h-8 bg-blue-500 ml-1 animate-pulse"></span>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Architecting robust web experiences with the MERN stack and pushing
          logical boundaries with C++. Focused on building scalable, efficient,
          and user-centric software.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/image/Kamrul-Hasan-Sojib-Resume.pdf"
            download
            className="group relative bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 overflow-hidden shadow-xl shadow-blue-500/20 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a
            href="#contact"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm active:scale-95"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator - Positioned ektu niche */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1 mb-1">
            <div className="w-1 h-1.5 bg-blue-500 rounded-full"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
