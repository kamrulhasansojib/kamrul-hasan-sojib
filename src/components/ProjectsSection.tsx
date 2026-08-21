import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';
import { Project } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';
import { getCategoryBadgeClass } from '../utils/categoryUtils';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveProjectIndex(Math.min(Math.max(0, index), projects.length - 1));
  };

  const slideLeft = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveProjectIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-950/60 text-blue-400 border border-blue-500/20 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio Showcase ({projects.length} Total)</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl leading-relaxed">
              Selected projects showcasing React UI, API integration, and AI-powered features.
            </p>
          </div>

          {/* Slider Navigation Arrows (Hidden on mobile & tablet) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 self-end">
            <button
              type="button"
              onClick={slideLeft}
              disabled={activeProjectIndex === 0}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                activeProjectIndex === 0
                  ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
              }`}
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={slideRight}
              disabled={activeProjectIndex >= projects.length - 1}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                activeProjectIndex >= projects.length - 1
                  ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
              }`}
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Slider Track */}
        <div className="relative group/track">
          
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative bg-[#0d0d0f] rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] cursor-pointer flex flex-col justify-between min-h-[480px]"
              >
                {/* Project Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={resolveImageUrl(project.image, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide backdrop-blur-md border shadow-md ${getCategoryBadgeClass(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content & Action Buttons */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Tech Tag Pills above title */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-400 bg-blue-950/40 border border-blue-500/30 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-base leading-relaxed line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-2 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-black font-bold text-sm sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 shrink-0 text-black" />
                    </a>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors shrink-0 flex items-center justify-center shadow-sm modal-github-btn cursor-pointer"
                      title="View Project Details"
                      aria-label="View Project Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors shrink-0 flex items-center justify-center shadow-sm modal-github-btn"
                      title="Source Code"
                      aria-label="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Slider Pagination & View All Projects Controls Bar (Single row on mobile & desktop) */}
          <div className="mt-8 flex items-center justify-between gap-3 border-t border-zinc-900 pt-5">
            
            {/* Left side: View all CTA Button */}
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95 group whitespace-nowrap"
              >
                <span className="sm:hidden">View all</span>
                <span className="hidden sm:inline">View all projects</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>

            {/* Right side: Project status (desktop only) + Interactive Dots (mobile & desktop) */}
            {projects.length > 1 && (
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Card Indicator Text (Hidden on mobile, visible on desktop) */}
                <div className="hidden sm:block text-xs font-mono text-zinc-500">
                  Project <span className="text-cyan-400 font-bold">{activeProjectIndex + 1}</span> of <span className="text-zinc-300">{projects.length}</span>
                </div>

                {/* Interactive Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => scrollToIndex(index)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                        activeProjectIndex === index
                          ? 'w-6 sm:w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                          : 'w-2 sm:w-2.5 bg-zinc-800 hover:bg-zinc-700'
                      }`}
                      aria-label={`Go to project slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};



