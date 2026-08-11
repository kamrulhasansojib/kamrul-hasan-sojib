import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';
import { getCategoryBadgeClass } from '../utils/categoryUtils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        
        {/* Cover Image Header */}
        <div className="relative h-56 sm:h-64 w-full bg-zinc-900 overflow-hidden">
          <img
            src={resolveImageUrl(project.image, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 shadow-xl border border-zinc-200 transition-transform active:scale-95 modal-close-btn"
            title="Close modal"
          >
            <X className="w-5 h-5 text-zinc-900 stroke-[2.5]" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 z-20">
            <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono border backdrop-blur-md shadow-md ${getCategoryBadgeClass(project.category)}`}>
              {project.category}
            </span>
            <h2 
              className="text-2xl sm:text-3xl font-extrabold text-white image-overlay-title force-white-text mt-2.5 leading-tight"
              style={{ color: '#ffffff' }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="space-y-3 sm:space-y-4">
            {project.longDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              Key Engineering Accomplishments
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Preview</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
