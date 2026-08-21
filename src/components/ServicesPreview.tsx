import React, { useState, useRef } from 'react';
import { Link, useNavigate } from '../lib/router';
import { 
  Layout, 
  Code2, 
  Figma, 
  Sparkles, 
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

const topServices: PreviewServiceCard[] = [
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
  }
];

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    if (newIndex !== activeServiceIndex && newIndex >= 0 && newIndex < topServices.length) {
      setActiveServiceIndex(newIndex);
    }
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
      className="py-20 sm:py-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-28 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header + Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Available for Freelance</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Frontend Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Services</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              High-performance React interfaces, pixel-perfect Figma translations, and responsive websites crafted for international clients.
            </p>
          </div>

          {/* Desktop slider nav */}
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
              disabled={activeServiceIndex >= topServices.length - 1}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                activeServiceIndex >= topServices.length - 1
                  ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
              }`}
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top 3 Service Cards Slider Track (Swipeable like Featured Projects on mobile) */}
        <div className="relative group/track mb-10">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-7 hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20 min-h-[420px]"
                >
                  <div>
                    {/* Top: Clean Icon */}
                    <div className="flex items-center mb-5">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title & Benefit */}
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 mb-5 leading-relaxed font-normal">
                      {service.benefit}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-zinc-800/80 space-y-2.5">
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                        Key Deliverables
                      </span>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-200">
                          <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Pagination Controls Bar */}
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-900 pt-4">
            <div className="text-xs font-mono text-zinc-500">
              Service <span className="text-cyan-400 font-bold">{activeServiceIndex + 1}</span> of <span className="text-zinc-300">{topServices.length}</span>
            </div>

            {/* Interactive Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {topServices.map((service, index) => (
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

            {/* Mobile Navigation Arrows */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={slideLeft}
                disabled={activeServiceIndex === 0}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  activeServiceIndex === 0
                    ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
                }`}
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={slideRight}
                disabled={activeServiceIndex >= topServices.length - 1}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  activeServiceIndex >= topServices.length - 1
                    ? 'bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 shadow-md'
                }`}
                aria-label="Next Service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Backend-Aware Bonus Note */}
        <div className="rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

        {/* Action Buttons: Request a Quote + View all services (Single row on mobile) */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-md mx-auto">
            <button
              onClick={handleRequestQuote}
              className="flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            </button>
            <Link
              to="/services"
              className="flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span>View all services (6)</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Typical response time: within 24 hours.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
