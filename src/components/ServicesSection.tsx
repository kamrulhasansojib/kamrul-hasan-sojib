import React from 'react';
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
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  badge?: string;
  benefit: string;
  deliverables: string[];
}

const serviceList: ServiceCard[] = [
  {
    icon: Layout,
    title: 'Responsive Website / Landing Page',
    badge: 'High Conversion',
    benefit: 'Fast-loading, high-converting pages optimized for all screens.',
    deliverables: [
      'Mobile-first responsive layout (Tailwind CSS)',
      'Modern animations & UX interactions',
      'Clean markup structured for high conversions'
    ]
  },
  {
    icon: Code2,
    title: 'React Website / SPA UI',
    badge: 'Scalable Architecture',
    benefit: 'Modern, component-driven web applications built with clean architecture.',
    deliverables: [
      'Custom React / TypeScript components',
      'Smooth state management & fast routing',
      'Clean API integration & real-time UI states'
    ]
  },
  {
    icon: Figma,
    title: 'Figma to React',
    badge: 'Pixel-Perfect',
    benefit: 'Exact 1:1 translation from your Figma or Adobe XD designs to production code.',
    deliverables: [
      'Pixel-perfect typography, spacing & colors',
      'Interactive hover & active states',
      'Reusable, modular component structure'
    ]
  },
  {
    icon: Bug,
    title: 'UI Fixes & Frontend Bug Fixing',
    badge: 'Quick Turnaround',
    benefit: 'Quick resolution of CSS layout glitches, broken responsive views, and React bugs.',
    deliverables: [
      'Cross-browser compatibility & mobile fixes',
      'State bugs & re-rendering fixes',
      'Broken layout & responsive viewport patches'
    ]
  },
  {
    icon: Sparkles,
    title: 'Website Redesign / UI Refresh',
    badge: 'Modern Aesthetic',
    benefit: 'Revitalize outdated web interfaces into sleek, contemporary user experiences.',
    deliverables: [
      'Modernized design system & typography',
      'Dark/Light mode themes & polished micro-interactions',
      'Improved visual hierarchy & user flow'
    ]
  },
  {
    icon: Gauge,
    title: 'Performance & SEO Basics',
    badge: 'Speed & Rankings',
    benefit: 'Speed up your website and rank better on Google with solid technical foundations.',
    deliverables: [
      'Lighthouse score optimization (90+ score targets)',
      'Image optimization & asset lazy-loading',
      'Semantic HTML structure & OpenGraph meta tags'
    ]
  }
];

const processSteps = [
  {
    step: '01',
    name: 'Discovery & Scope',
    icon: Search,
    desc: 'Reviewing your Figma designs, technical requirements, and target timeline.'
  },
  {
    step: '02',
    name: 'Build & Iterate',
    icon: Cpu,
    desc: 'Developing clean, type-safe React/Tailwind code with regular milestone updates.'
  },
  {
    step: '03',
    name: 'Deliver & Deploy',
    icon: CheckCircle2,
    desc: 'Polishing, testing across viewports, QA verification, and seamless launch handoff.'
  }
];

const whatYouGetItems = [
  'Clean, readable, and well-documented codebase',
  '100% responsive testing across mobile, tablet & desktop',
  'Direct, transparent English communication & milestone updates',
  'Post-delivery support to ensure smooth deployment'
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const scrollToContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Available for Freelance & Contract</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Frontend Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            High-performance React interfaces, pixel-perfect Figma translations, and responsive websites crafted for international clients and product teams.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-7 hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-xs sm:text-sm font-mono font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-cyan-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Benefit */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-normal">
                    {service.benefit}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="pt-5 border-t border-zinc-800/80 space-y-2.5">
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                      Deliverables
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-200">
                        <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Hint */}
                <div className="mt-7 pt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Included in scope</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
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

          {/* Backend-Friendly Note Box (5 Cols) */}
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
                While my primary mastery is modern frontend UI, I have solid backend experience (REST APIs, Node.js, Express, databases). I can seamlessly collaborate with your backend engineers, build integration layers, or handle small server-side tasks when needed.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-800 text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Full frontend-to-API synergy without blockers</span>
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

        {/* CTA Area (Request a Quote / View Projects) */}
        <div className="text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project in mind or need a frontend specialist?
            </h3>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 mb-8 font-normal">
              Let&apos;s discuss your scope, timeline, and how I can help bring your web product to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center gap-2.5"
              >
                <span>Hire Me / Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-xl text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
