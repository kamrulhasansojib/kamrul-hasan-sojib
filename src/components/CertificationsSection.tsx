import React, { useState, useRef, useEffect } from 'react';
import { 
  Award, 
  Cloud, 
  Code2, 
  Database, 
  Cpu, 
  Calendar,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Certification } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePreview, setActivePreview] = useState<Certification | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Professional', 'Academic'];

  const filteredCerts = selectedCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  // Reset scroll and index when category changes
  useEffect(() => {
    setActiveCardIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveCardIndex(Math.min(Math.max(0, index), filteredCerts.length - 1));
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
    setActiveCardIndex(index);
  };

  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 mb-3 shadow-sm">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Certifications <span className="text-cyan-400">&</span> Qualifications
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mt-3 max-w-xl leading-relaxed">
              Industry-recognized professional certifications and academic qualifications validating software engineering, cloud architecture, and algorithms mastery.
            </p>
          </div>

          {/* Filter Pills & Slider Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={slideLeft}
                disabled={activeCardIndex === 0}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeCardIndex === 0
                    ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
                }`}
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={slideRight}
                disabled={activeCardIndex >= filteredCerts.length - 1}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeCardIndex >= filteredCerts.length - 1
                    ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
                }`}
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Certifications Carousel Track */}
        <div className="relative group/track">
          
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative bg-zinc-950/90 rounded-3xl border border-zinc-800/90 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  
                  {/* Certificate Image Frame */}
                  {cert.certificateImage && (
                    <div 
                      onClick={() => setActivePreview(cert)}
                      className="relative h-48 sm:h-52 w-full bg-zinc-900 overflow-hidden cursor-pointer group/img"
                    >
                      <img
                        src={resolveImageUrl(cert.certificateImage, 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop')}
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 brightness-90 group-hover/img:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                      {/* Issuer Logo Tag Bottom Left */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-black/90 border border-zinc-700/80 flex items-center justify-center p-1.5 shadow-md cert-issuer-icon">
                          {renderBadgeIcon(cert.badgeLogo)}
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-cyan-500/30 cert-issuer-badge">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Issued: <strong className="text-zinc-100 font-semibold">{cert.issueDate}</strong></span>
                      {cert.expirationDate && (
                        <span className="text-xs text-zinc-400 ml-auto">Exp: {cert.expirationDate}</span>
                      )}
                    </div>

                  </div>

                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2 border-t border-zinc-900/80 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setActivePreview(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95 group/btn"
                  >
                    <span>View Certificate</span>
                    <Maximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Slider Pagination Controls & Status */}
          {filteredCerts.length > 1 && (
            <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
              
              {/* Card Indicator Text */}
              <div className="text-xs sm:text-sm font-mono text-zinc-400">
                Certification <span className="text-cyan-400 font-bold">{activeCardIndex + 1}</span> of <span className="text-zinc-200">{filteredCerts.length}</span>
              </div>

              {/* Interactive Dots */}
              <div className="flex items-center gap-2">
                {filteredCerts.map((cert, index) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeCardIndex === index
                        ? 'w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                        : 'w-2.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Certificate High-Res Modal Lightbox */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActivePreview(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto my-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-5 border-b border-zinc-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 mb-2">
                  <span>{activePreview.issuer}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{activePreview.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 max-h-[50vh] flex items-center justify-center shadow-inner">
              <img
                src={resolveImageUrl(activePreview.certificateImage, 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop')}
                alt={activePreview.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[45vh] object-contain"
              />
            </div>

            {/* Short Description */}
            {activePreview.description && (
              <div className="mt-4 p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80">
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  {activePreview.description}
                </p>
              </div>
            )}

            {/* Modal Footer Info */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-300 pt-3 border-t border-zinc-900">
              <span className="font-mono bg-zinc-900 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-xs sm:text-sm">
                Issued: <strong className="text-zinc-100">{activePreview.issueDate}</strong>
              </span>

              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 font-bold text-sm transition-colors cursor-pointer"
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



