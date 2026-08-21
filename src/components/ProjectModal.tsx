import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  Code2, 
  ImageIcon, 
  ChevronLeft, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { Project } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';
import { getCategoryBadgeClass } from '../utils/categoryUtils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Extract screenshots list (ensuring at least 1 image is present)
  const screenshots: string[] = (project.screenshots && project.screenshots.length > 0)
    ? project.screenshots
    : [project.image];

  // Extract exactly 3 key features
  const keyFeatures: string[] = (project.keyFeatures && project.keyFeatures.length > 0)
    ? project.keyFeatures.slice(0, 3)
    : (project.highlights && project.highlights.length > 0)
      ? project.highlights.slice(0, 3)
      : [
          'High-performance responsive UI optimized across all viewports',
          'Robust state management and real-time data synchronization',
          'Modular component architecture with type-safe interfaces'
        ];

  // Problem statement fallback
  const problemStatement: string = project.problem || 
    'Users and businesses frequently struggle with fragmented workflows, slow interface performance, and lack of real-time visibility into mission-critical data.';

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="project-modal-dialog relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Scrollable Container (Includes Main Image + Content for full fluid scrolling) */}
        <div className="overflow-y-auto flex-1 w-full relative">
          
          {/* Main Top Header Image (Scrollable) */}
          <div className="relative h-52 sm:h-64 md:h-72 w-full bg-zinc-900 overflow-hidden">
            <img
              src={resolveImageUrl(screenshots[activeImageIndex] || project.image, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300"
            />
            
            {/* Subtle Gradient Shadow on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

            {/* Category badge directly ON the top image */}
            <div className="absolute bottom-4 left-4 sm:left-6 z-20">
              <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-mono border backdrop-blur-md shadow-lg ${getCategoryBadgeClass(project.category)}`}>
                {project.category}
              </span>
            </div>

            {/* Close button positioned on top right */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 hover:bg-black text-white shadow-xl border border-white/20 transition-transform active:scale-95 modal-close-btn cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-5 sm:p-6 md:p-8 space-y-6">
            
            {/* Project Title Header */}
            <div className="pb-4 border-b border-zinc-800 modal-header-section">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight modal-main-title">
                {project.title}
              </h2>
            </div>

            {/* 1. Problem Section (Subtle Neutral Contrast) */}
            <div className="rounded-xl p-4 sm:p-5 bg-zinc-900/80 border border-zinc-800 modal-problem-card">
              <div className="flex items-center gap-2 mb-2 text-zinc-300 font-bold text-xs sm:text-sm uppercase tracking-wider modal-problem-heading">
                <AlertCircle className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>Problem Statement</span>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed modal-problem-text">
                {problemStatement}
              </p>
            </div>

            {/* 2. Project Long Description */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Project Overview</span>
              </h4>
              <div className="space-y-3">
                {project.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 3. Key Features (3 Bullets) */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Key Features (Top 3)</span>
              </h4>
              <div className="space-y-2.5">
                {keyFeatures.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 modal-feature-item"
                  >
                    <span className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-zinc-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tech Stack */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold bg-blue-950/40 border border-blue-500/30 text-blue-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Screenshots (Multiple Images) */}
            {screenshots.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cyan-400" />
                    <span>Screenshots ({screenshots.length} Images)</span>
                  </h4>
                  {screenshots.length > 1 && (
                    <span className="text-xs font-mono text-zinc-400">
                      Showing {activeImageIndex + 1} of {screenshots.length}
                    </span>
                  )}
                </div>

                {/* Main Screenshot Preview - compact on mobile phones (h-52), spacious on desktop */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 h-52 sm:h-64 md:h-[380px] lg:h-[440px] group flex items-center justify-center shadow-inner">
                  <img
                    src={resolveImageUrl(screenshots[activeImageIndex], 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
                    alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-black/70 transition-all duration-300"
                  />

                  {screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-zinc-700 shadow-xl transition-transform active:scale-95 cursor-pointer z-10"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-zinc-700 shadow-xl transition-transform active:scale-95 cursor-pointer z-10"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Selector */}
                {screenshots.length > 1 && (
                  <div className="flex items-center gap-2.5 mt-3.5 overflow-x-auto pb-2 scrollbar-thin">
                    {screenshots.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer bg-zinc-900 ${
                          activeImageIndex === idx
                            ? 'border-cyan-400 shadow-md shadow-cyan-500/30 scale-105 ring-2 ring-cyan-400/20'
                            : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                        }`}
                      >
                        <img
                          src={resolveImageUrl(imgUrl, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
                          alt={`Thumbnail ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 6. Action Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 border-t border-zinc-800">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer modal-github-btn"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
