import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layout, 
  Code2, 
  Figma, 
  Bug, 
  Sparkles, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Database,
  Search,
  Cpu,
  Check,
  ChevronRight,
  Clock,
  X,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ServicesFullProps {
  onOpenContact?: () => void;
}

interface ServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  benefit: string;
  priceHint: string;
  deliverables: string[];
  scopeDetails: {
    included: string[];
    timeline: string;
    revisions: string;
    notIncluded: string[];
  };
}

const serviceList: ServiceCard[] = [
  {
    id: 'landing-page',
    icon: Layout,
    title: 'Responsive Website / Landing Page',
    badge: 'Conversion-Focused',
    benefit: 'Fast-loading, high-converting pages optimized for all devices and screen sizes.',
    priceHint: 'Project-based · from $120',
    deliverables: [
      'Mobile-first responsive layout (Tailwind CSS)',
      'Modern animations & interactive UX elements',
      'Clean markup structured for high conversions'
    ],
    scopeDetails: {
      included: [
        'Complete mobile, tablet & desktop responsiveness',
        'Custom hero, feature highlights, and conversion CTA blocks',
        'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
        'Speed & asset optimization'
      ],
      timeline: '2–4 business days',
      revisions: '2 rounds of design & layout revisions included',
      notIncluded: [
        'Domain and web hosting subscription costs',
        'Copywriting & brand asset creation (client-provided)'
      ]
    }
  },
  {
    id: 'react-spa',
    icon: Code2,
    title: 'React Website / SPA UI',
    badge: 'Scalable Architecture',
    benefit: 'Modern, component-driven web applications built with clean and maintainable architecture.',
    priceHint: 'Project-based pricing',
    deliverables: [
      'Reusable, modular React components',
      'Smooth state management & fast routing',
      'Clean REST API integration & real-time UI states'
    ],
    scopeDetails: {
      included: [
        'Single Page Application (SPA) frontend architecture',
        'REST API endpoints consumption and error handling states',
        'Dynamic modals, forms with client-side validation',
        'Organized code structure ready for scale'
      ],
      timeline: '4–8 business days (depending on scope)',
      revisions: '2 rounds of milestone reviews & refinements',
      notIncluded: [
        'Large-scale enterprise backend infrastructure setup',
        'Paid 3rd party API subscriptions'
      ]
    }
  },
  {
    id: 'figma-to-react',
    icon: Figma,
    title: 'Figma to React',
    badge: 'Pixel-Perfect',
    benefit: 'Exact 1:1 translation from your Figma or Adobe XD designs to production-ready code.',
    priceHint: 'Project-based · from $80 / page',
    deliverables: [
      'Pixel-perfect typography, spacing & design tokens',
      'Interactive hover, focus & active states',
      'Reusable, modular component structure'
    ],
    scopeDetails: {
      included: [
        'Faithful visual translation of Figma frames to clean JSX',
        'Tailwind CSS design token mapping (colors, fonts, radii)',
        'Responsive adaptation for mobile & tablet breakpoints',
        'Clean SVGs & optimized icon assets'
      ],
      timeline: '2–5 business days',
      revisions: '2 rounds of pixel-alignment revisions',
      notIncluded: [
        'Creating original Figma designs from scratch (UI implementation only)'
      ]
    }
  },
  {
    id: 'ui-fixes',
    icon: Bug,
    title: 'UI Fixes & Frontend Bug Fixing',
    badge: 'Fast Delivery',
    benefit: 'Quick resolution of CSS layout glitches, broken responsive views, and React state issues.',
    priceHint: 'Quick fixes · from $40',
    deliverables: [
      'Cross-browser compatibility & mobile layout fixes',
      'State bugs & infinite re-rendering fixes',
      'Broken layout, overflow & z-index patches'
    ],
    scopeDetails: {
      included: [
        'Debugging and fixing identified frontend errors/glitches',
        'Resolving CSS overflow, flex/grid alignment & mobile cutoff bugs',
        'React hook lifecycle and state synchronization fixes',
        'Clean git commit / pull request with concise summary'
      ],
      timeline: '24–48 hours for standard fixes',
      revisions: 'Verification test & 1 follow-up check included',
      notIncluded: [
        'Full application re-architecting (separate project scope)'
      ]
    }
  },
  {
    id: 'redesign',
    icon: Sparkles,
    title: 'Website Redesign / UI Refresh',
    badge: 'Modern UI Refresh',
    benefit: 'Revitalize outdated web interfaces into sleek, contemporary user experiences.',
    priceHint: 'Project-based pricing',
    deliverables: [
      'Modernized design system & typography hierarchy',
      'Dark/Light mode themes & polished micro-interactions',
      'Improved visual hierarchy & user flow'
    ],
    scopeDetails: {
      included: [
        'Comprehensive UI overhaul of existing web pages',
        'Refined typography, color schemes & card layouts',
        'Micro-interactions and subtle entering transitions',
        'Preserving existing business logic while enhancing visuals'
      ],
      timeline: '3–6 business days',
      revisions: '2 rounds of visual style refinements',
      notIncluded: [
        'Complete database migration or backend rewrites'
      ]
    }
  },
  {
    id: 'performance-seo',
    icon: Gauge,
    title: 'Performance & SEO Basics',
    badge: 'Performance-Ready',
    benefit: 'Speed up your website and rank better on search engines with solid technical foundations.',
    priceHint: 'Project-based pricing',
    deliverables: [
      'Lighthouse-focused improvements (performance, SEO, accessibility)',
      'Image optimization & asset lazy-loading',
      'Semantic HTML structure & OpenGraph meta tags'
    ],
    scopeDetails: {
      included: [
        'Audit & remediation of render-blocking resources',
        'Image compression, modern formats (WebP) & lazy-loading',
        'Semantic HTML tags (H1-H6, ARIA attributes, alt texts)',
        'OpenGraph social cards and SEO meta tags setup'
      ],
      timeline: '2–4 business days',
      revisions: 'Pre/post Lighthouse comparative report & 1 revision round',
      notIncluded: [
        'Paid backlink campaigns or ongoing monthly SEO copywriting'
      ]
    }
  }
];

const processSteps = [
  {
    step: '01',
    name: 'Discovery & Scope',
    icon: Search,
    desc: 'Reviewing your Figma designs, technical requirements, and defining milestone delivery.'
  },
  {
    step: '02',
    name: 'Build & Iterate',
    icon: Cpu,
    desc: 'Developing clean, type-safe React/Tailwind code with regular progress updates.'
  },
  {
    step: '03',
    name: 'Deliver & Deploy',
    icon: CheckCircle2,
    desc: 'Testing across viewports, final QA verification, and seamless launch handoff.'
  }
];

const whatYouGetItems = [
  'Clean, readable, and well-documented codebase',
  '100% responsive testing across mobile, tablet & desktop',
  'Direct, transparent English communication & milestone updates',
  'Post-delivery support to ensure smooth deployment'
];

export const ServicesFull: React.FC<ServicesFullProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const navigate = useNavigate();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToContact = (customServiceTitle?: string) => {
    if (selectedService) setSelectedService(null);
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

  const scrollToProjects = () => {
    if (selectedService) setSelectedService(null);
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#projects');
    }
  };

  return (
    <section 
      id="services-full" 
      className="py-16 sm:py-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Available for Freelance & Contract</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Frontend Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            High-performance React interfaces, pixel-perfect Figma translations, and responsive websites crafted for international clients and product teams.
          </p>

          {/* Primary Top CTA Row with Trust line */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => scrollToContact()}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={scrollToProjects}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
              >
                View Projects
              </button>
            </div>

            {/* Quick response guarantee */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Typical response time: within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* 6 Service Cards Grid (Equal Heights with Flex-Col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-7 hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20 h-full"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Benefit */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 mb-4 leading-relaxed font-normal">
                    {service.benefit}
                  </p>

                  {/* Subtle Pricing Hint */}
                  <div className="inline-block text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-md mb-5">
                    {service.priceHint}
                  </div>

                  {/* Deliverables Bullet List */}
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

                {/* Interactive Scope Details Trigger */}
                <div className="mt-7 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>See scope details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-zinc-400">
                    {service.scopeDetails.timeline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Add Row: "What You Get" + "Backend-Friendly Advantage" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* What You Get Box (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-7 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              What You Get with Every Project
            </h4>
            <p className="text-sm sm:text-base text-zinc-400 mb-6 font-normal">
              Standard quality standards baked into every milestone without extra charges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatYouGetItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-200 bg-zinc-900/50 p-3.5 rounded-xl border border-zinc-800/60">
                  <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend-Friendly Note Box (5 Cols - Concise 1-2 lines) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-blue-950/30 border border-blue-500/20 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-mono font-bold mb-3.5">
                <Database className="w-4 h-4" />
                <span>Backend-Aware Advantage</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                Need API or Database Collaboration?
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Frontend-first React developer; can collaborate on REST APIs and handle small Node/Express/database tasks when needed.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-800 text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Smooth API integration without blocking workflows</span>
            </div>
          </div>

        </div>

        {/* 3-Step Process Row */}
        <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/90 p-7 sm:p-9 mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Simple 3-Step Workflow
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold text-white mt-2">How We Work Together</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx}
                  className="relative p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-start hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold font-mono text-zinc-700">
                      {step.step}
                    </span>
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold text-white mb-2">{step.name}</h5>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project in mind or need a frontend specialist?
            </h3>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 mb-6 font-normal">
              Let&apos;s discuss your scope, timeline, and how I can help bring your web product to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToContact()}
                className="px-7 py-3.5 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center gap-2.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-xl text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
              >
                View Projects
              </button>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-mono">
              Typical response time: within 24 hours.
            </p>
          </div>
        </div>

      </div>

      {/* Scope Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <selectedService.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-5">
              
              {/* Timeline & Revisions Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-zinc-900/70 border border-zinc-800/80 p-3.5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Estimated Timeline
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {selectedService.scopeDetails.timeline}
                  </span>
                </div>
                <div className="bg-zinc-900/70 border border-zinc-800/80 p-3.5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Revision Policy
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {selectedService.scopeDetails.revisions}
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  What&apos;s Included in Scope
                </h4>
                <div className="space-y-2 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60">
                  {selectedService.scopeDetails.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Not Included */}
              <div>
                <h4 className="text-sm font-bold text-zinc-300 mb-2.5 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-zinc-500" />
                  What&apos;s Not Included
                </h4>
                <div className="space-y-2 bg-zinc-900/20 p-4 rounded-xl border border-zinc-800/40">
                  {selectedService.scopeDetails.notIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <span className="text-zinc-500 text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-400">
                {selectedService.priceHint}
              </span>
              <button
                type="button"
                onClick={() => scrollToContact(selectedService.title)}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20 cursor-pointer flex items-center gap-2"
              >
                <span>Request Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
