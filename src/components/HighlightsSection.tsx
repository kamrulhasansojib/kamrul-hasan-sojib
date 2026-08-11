import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, 
  Briefcase, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  X, 
  CheckCircle2, 
  Pause, 
  Play, 
  ExternalLink,
  Award,
  Zap,
  Eye
} from 'lucide-react';
import { HighlightItem } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';

interface HighlightsSectionProps {
  highlights: HighlightItem[];
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ highlights }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Automatic Carousel Interval
  useEffect(() => {
    if (!isAutoPlaying || isHovered || highlights.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 3000); // 3 seconds auto slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, highlights.length]);

  const handleNext = () => {
    if (highlights.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
  };

  const handlePrev = () => {
    if (highlights.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedHighlight(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCategoryBadge = (category: HighlightItem['category']) => {
    switch (category) {
      case 'Achievement':
        return {
          label: 'Achievement',
          icon: <Trophy className="w-3.5 h-3.5 text-amber-400" />,
          style: 'bg-amber-950/80 text-amber-300 border-amber-500/40'
        };
      case 'Job Work':
        return {
          label: 'Job Work',
          icon: <Briefcase className="w-3.5 h-3.5 text-cyan-400" />,
          style: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
        };
      case 'Special Moment':
      default:
        return {
          label: 'Special Moment',
          icon: <Sparkles className="w-3.5 h-3.5 text-purple-400" />,
          style: 'bg-purple-950/80 text-purple-300 border-purple-500/40'
        };
    }
  };

  const activeItem = highlights[currentIndex] || highlights[0];

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-zinc-950/60 border-t border-zinc-900">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 mb-3">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Highlights & Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Milestones, Achievements <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">& Work Moments</span>
          </h2>
        </div>

        {/* Carousel Container */}
        {highlights.length > 0 && activeItem && (
          <div 
            className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden shadow-2xl transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Main Card Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[420px]">
              
              {/* Image Column (7 cols) */}
              <div 
                className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden group cursor-pointer"
                onClick={() => setSelectedHighlight(activeItem)}
              >
                <img 
                  src={resolveImageUrl(activeItem.image, 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop')} 
                  alt={activeItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-zinc-950/40 lg:to-zinc-950" />

                {/* Hover Click Hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Click to expand details</span>
                </div>
              </div>

              {/* Info Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-zinc-950/90 relative">
                <div className="space-y-4">
                  
                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{activeItem.date}</span>
                    </span>
                    {activeItem.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-zinc-400" />
                        <span>{activeItem.location}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedHighlight(activeItem)}
                    className="text-2xl sm:text-3xl font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
                  >
                    {activeItem.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    {activeItem.shortDescription}
                  </p>

                  {/* Tags */}
                  {activeItem.tags && activeItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {activeItem.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-md text-xs sm:text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Controls & CTA */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedHighlight(activeItem)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95"
                  >
                    <span>View Story</span>
                    <Sparkles className="w-4 h-4" />
                  </button>

                  {/* Auto Playback & Navigation Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
                      title={isAutoPlaying ? "Pause Auto Slide" : "Resume Auto Slide"}
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
                      title="Previous Highlight"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <span className="text-xs text-zinc-500 font-mono px-1">
                      {currentIndex + 1}/{highlights.length}
                    </span>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
                      title="Next Highlight"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Dots at Bottom of Carousel Card */}
            <div className="bg-zinc-950 px-6 py-3 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">
                {isAutoPlaying ? "● Auto-rotating every 3s (Hover to pause)" : "Paused"}
              </span>

              <div className="flex items-center gap-1.5">
                {highlights.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* POPUP MODAL DETAILS */}
      {selectedHighlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/50 sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 font-mono">
                  {selectedHighlight.date}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedHighlight(null)}
                className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              {/* High-res Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 max-h-[360px]">
                <img 
                  src={resolveImageUrl(selectedHighlight.image, 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop')} 
                  alt={selectedHighlight.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedHighlight.title}
                </h3>
                {selectedHighlight.location && (
                  <p className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{selectedHighlight.location}</span>
                  </p>
                )}
              </div>

              {/* Full Detailed Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Detailed Story & Experience
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60">
                  {selectedHighlight.fullDescription}
                </p>
              </div>

              {/* Tags */}
              {selectedHighlight.tags && selectedHighlight.tags.length > 0 && (
                <div className="pt-2 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-2">
                    {selectedHighlight.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 text-cyan-300 border border-zinc-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/50 text-right">
              <button
                type="button"
                onClick={() => setSelectedHighlight(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-zinc-800 text-white hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
