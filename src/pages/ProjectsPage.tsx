import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Mail,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Link, useNavigate } from '../lib/router';
import { Project } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';
import { getCategoryBadgeClass } from '../utils/categoryUtils';

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenContact?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onSelectProject,
  onOpenContact
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = useMemo(() => {
    return ['All', 'Full Stack', 'Frontend', 'AI & ML'];
  }, []);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category Match
      const matchesCategory = 
        selectedCategory === 'All' ||
        (selectedCategory === 'Full Stack' && (project.category.toLowerCase().includes('full stack') || project.category.toLowerCase().includes('fullstack'))) ||
        (selectedCategory === 'Frontend' && project.category.toLowerCase().includes('frontend')) ||
        (selectedCategory === 'AI & ML' && (project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('machine learning')));

      // Search Query Match (Title, description, tags, problem, or role)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.role && project.role.toLowerCase().includes(q)) ||
        project.tags.some(tag => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      navigate('/#contact');
    }
  };

  return (
    <div className="projects-page-wrapper min-h-screen pt-24 pb-20 bg-black text-white relative">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900 projects-breadcrumb-bar">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-cyan-400 transition-colors group cursor-pointer projects-back-link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="sm:hidden">Back</span>
            <span className="hidden sm:inline">Back to Home</span>
          </Link>

          {/* Breadcrumb path - hidden on mobile */}
          <div className="hidden sm:block text-xs font-mono text-zinc-500">
            <span>Portfolio</span> / <span className="text-cyan-400 font-bold">Projects Directory</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-950/60 text-blue-400 border border-blue-500/20 mb-4 projects-header-badge">
            <Sparkles className="w-4 h-4" />
            <span>Complete Work Directory ({projects.length} Projects)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight projects-main-heading">
            All Projects & Architecture
          </h1>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed projects-main-subtext">
            Selected projects showcasing React UI, API integration, and AI-powered features. Browse through full-stack systems, frontend interfaces, and machine learning utilities.
          </p>
        </div>

        {/* Search & Category Filter Toolbar (Visible on Desktop lg+, hidden on mobile and tablet) */}
        <div className="hidden lg:block projects-filter-bar rounded-2xl bg-zinc-950/90 border border-zinc-800/90 p-4 sm:p-6 mb-10 shadow-xl">
          <div className="flex items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 text-black shadow-md shadow-cyan-500/20'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 projects-tab-inactive'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Field */}
            <div className="relative w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title or tech tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects-search-input w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="project-grid-card group relative bg-[#0d0d0f] rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] cursor-pointer flex flex-col justify-between"
              >
                {/* Project Image Container */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-900">
                  <img
                    src={resolveImageUrl(project.image, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

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
                    {/* Tech Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-3.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-wider text-blue-400 bg-blue-950/40 border border-blue-500/30 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="project-card-title text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="project-card-desc text-zinc-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-5">
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
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 text-black" />
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
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 projects-empty-card">
            <SlidersHorizontal className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">No matching projects found</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold transition-colors cursor-pointer projects-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Contact / Collaboration Banner */}
        <div className="projects-cta-banner mt-16 text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="projects-cta-title text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have a custom project idea or need frontend engineering?
            </h3>
            <p className="projects-cta-subtitle mt-3 text-sm sm:text-base text-zinc-300 mb-6 font-normal">
              Let&apos;s build fast-loading web applications with clean TypeScript code, responsive interfaces, and API integrations.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleContactClick}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
              <Link
                to="/services"
                className="cta-secondary-btn px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
