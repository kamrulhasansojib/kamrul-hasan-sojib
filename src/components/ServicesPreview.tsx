import React, { useState, useRef } from 'react';
import { Link, useNavigate } from '../lib/router';
import { 
  Layout, 
  Code2, 
  Figma, 
  Bug,
  Sparkles, 
  Gauge,
  Check, 
  ArrowRight, 
  Clock, 
  Database,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ServicesPreviewProps {
  onOpenContact?: () => void;
}

interface PreviewServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  benefit: string;
  deliverables: string[];
}

const allServices: PreviewServiceCard[] = [
  {
    id: 'landing-page',
    icon: Layout,
    title: 'Responsive Website / Landing Page',
    benefit: 'Fast-loading, high-converting pages optimized for all screen sizes and modern viewports.',
    deliverables: [
      'Mobile-first responsive layout (Tailwind CSS)',
      'Modern animations & interactive UX elements',
      'Clean markup structured for high conversions'
    ]
  },
  {
    id: 'react-spa',
    icon: Code2,
    title: 'React Website / SPA UI',
    benefit: 'Modern, component-driven web applications built with clean and maintainable architecture.',
    deliverables: [
      'Reusable, modular React components',
      'Smooth state management & fast routing',
      'Clean REST API integration & real-time UI states'
    ]
  },
  {
    id: 'figma-to-react',
    icon: Figma,
    title: 'Figma to React',
    benefit: 'Exact 1:1 translation from your Figma or Adobe XD designs to production-ready code.',
    deliverables: [
      'Pixel-perfect typography, spacing & design tokens',
      'Interactive hover, focus & active states',
      'Reusable, modular component structure'
    ]
  },
  {
    id: 'ui-fixes',
    icon: Bug,
    title: 'UI Fixes & Frontend Bug Fixing',
    benefit: 'Quick resolution of CSS layout glitches, broken responsive views, and React state issues.',
    deliverables: [
      'Cross-browser compatibility & mobile layout fixes',
      'State bugs & infinite re-rendering fixes',
      'Broken layout, overflow & z-index patches'
    ]
  },
  {
    id: 'redesign',
    icon: Sparkles,
    title: 'Website Redesign / UI Refresh',
    benefit: 'Revitalize outdated web interfaces into sleek, contemporary user experiences.',
    deliverables: [
      'Modernized design system & typography hierarchy',
      'Dark/Light mode themes & polished micro-interactions',
      'Improved visual hierarchy & user flow'
    ]
  },
  {
    id: 'performance-seo',
    icon: Gauge,
    title: 'Performance & SEO Basics',
    benefit: 'Speed up your website and rank better on search engines with solid technical foundations.',
    deliverables: [
      'Lighthouse-focused improvements (performance, SEO, accessibility)',
      'Image optimization & asset lazy-loading',
      'Semantic HTML structure & OpenGraph meta tags'
    ]
  }
];

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveServiceIndex(Math.min(Math.max(0, newIndex), allServices.length - 1));
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
    setActiveServiceIndex(index);
  };

  const handleRequestQuote = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#contact');
      }
    }
  };

  return (
    <section 
      id="services-preview" 
      className="py-16 sm:py-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-28 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header + Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-mono font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Available for Freelance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Frontend Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Services</span>
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              High-performance React interfaces, pixel-perfect Figma translations, and responsive websites crafted for international clients.
            </p>
          </div>

          {/* Desktop slider nav (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 self-end">
            <button
              type="button"
              onClick={slideLeft}
              disabled={activeServiceIndex === 0}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                activeServiceIndex === 0
                  ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
              }`}
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={slideRight}
              disabled={activeServiceIndex >= allServices.length - 1}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                activeServiceIndex >= allServices.length - 1
                  ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
              }`}
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Service Cards Slider Track (Swipeable 1-by-1 smoothly on mobile without limit) */}
        <div className="relative group/track">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-7 hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20 min-h-[390px] sm:min-h-[420px]"
                >
                  <div>
                    {/* Top: Clean Icon */}
                    <div className="flex items-center mb-4 sm:mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    {/* Title & Benefit */}
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-base text-zinc-300 mb-4 sm:mb-5 leading-relaxed font-normal">
                      {service.benefit}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-3.5 sm:pt-4 border-t border-zinc-800/80 space-y-2 sm:space-y-2.5">
                      <span className="text-[11px] sm:text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5 sm:mb-2">
                        Key Deliverables
                      </span>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-base text-zinc-200">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 sm:mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Pagination & View All Controls Bar: Left: View all, Right: Dots (Mobile & Desktop) */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between gap-3 border-t border-zinc-900 pt-5">
            
            {/* Left side: View all button */}
            <div>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all cursor-pointer active:scale-95 group whitespace-nowrap"
              >
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
                <span className="sm:hidden">View all</span>
                <span className="hidden sm:inline">View all services ({allServices.length})</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>

            {/* Right side: Dots indicator and slide count */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Card Indicator Text (Hidden on mobile, visible on desktop) */}
              <div className="hidden sm:block text-xs font-mono text-zinc-500">
                Service <span className="text-cyan-400 font-bold">{activeServiceIndex + 1}</span> of <span className="text-zinc-300">{allServices.length}</span>
              </div>

              {/* Interactive Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {allServices.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                      activeServiceIndex === index
                        ? 'w-6 sm:w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                        : 'w-2 sm:w-2.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to service slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Backend-Aware Bonus Note (Hidden on mobile, visible on sm and up) */}
        <div className="hidden sm:flex rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-5 sm:p-6 mt-12 mb-8 flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider block">
                Backend-Aware Advantage
              </span>
              <p className="text-sm sm:text-base text-zinc-300 mt-0.5">
                Frontend-first React developer; can collaborate on REST APIs and handle small Node/Express/database tasks when needed.
              </p>
            </div>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 shrink-0 self-end sm:self-center transition-colors group"
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Action Buttons: Request a Quote (Hidden on mobile, visible on sm and up) */}
        <div className="hidden sm:flex flex-col items-center justify-center gap-3 mt-4">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-md mx-auto">
            <button
              onClick={handleRequestQuote}
              className="px-7 py-3.5 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>
            <Link
              to="/services"
              className="px-7 py-3.5 rounded-xl text-base font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>View all services ({allServices.length})</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Typical response time: within 24 hours.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
