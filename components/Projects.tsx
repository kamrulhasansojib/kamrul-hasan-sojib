
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onViewAll?: (e: React.MouseEvent) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  const featuredProjects = PROJECTS.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive visible cards calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredProjects.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A curated selection of my most impactful works. Showing {visibleCards} projects at a time.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all active:scale-90"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all active:scale-90"
                aria-label="Next Project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="h-10 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
            <button 
              onClick={onViewAll}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
            >
              View All <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative" ref={sliderRef}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {featuredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="px-3 shrink-0 transition-all duration-300"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="group h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-4 gap-3 mt-auto">
                        <a
                          href={project.demoLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="col-span-3 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                          Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="aspect-square bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center transition-all active:scale-95 group/git"
                          aria-label="GitHub Source Code"
                        >
                          <Github className="w-5 h-5 text-white group-hover/git:text-blue-400 transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-12 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${((currentIndex + visibleCards) / featuredProjects.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
