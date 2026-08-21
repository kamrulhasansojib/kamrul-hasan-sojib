import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

interface AboutSectionProps {
  portraitImage?: string;
  name?: string;
  yearsCoding?: string;
  projectsDone?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portraitImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  name = "Kamrul Hasan Sojib",
  yearsCoding = "3+",
  projectsDone = "15+"
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Card with Square Aspect Ratio & Floating Badge */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl">
              
              {/* Square Portrait Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-zinc-900 relative">
                <img
                  src={portraitImage}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
              </div>

              {/* Overlaid Floating Glassmorphism Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Clean Code Advocate
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                    Committed to Best Practices
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading, Bio Paragraphs & Metric Stat Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Large Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-400 tracking-tight mb-6">
                Engineering
              </h2>

              {/* Body Text Paragraphs */}
              <div className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Hello! I'm {name}, a passionate Computer Science undergraduate and a React-focused frontend developer. I build modern, responsive, and user-friendly interfaces with clean, maintainable code and attention to detail.
                </p>

                <p>
                  Currently, I specialize in the MERN stack (MongoDB, Express, React, Node), focusing on building seamless web applications. I believe that writing clean, efficient, and scalable code is not just a preference but a necessity in the modern tech landscape.
                </p>

                <p>
                  Beyond web development, I am heavily invested in competitive programming and mastering complex algorithms using C and C++. I'm constantly learning new backend technologies to build more robust systems.
                </p>
              </div>
            </div>

            {/* Bottom Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-blue-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {yearsCoding}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-wider mt-1">
                  Years Coding
                </div>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-blue-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {projectsDone}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-wider mt-1">
                  Projects Done
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Scroll To Top Button at bottom right - Hidden on mobile to prevent bottom bar scrolling interference */}
      <button
        type="button"
        onClick={scrollToTop}
        className="hidden md:flex fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all cursor-pointer items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </section>
  );
};
