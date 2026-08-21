import React, { useState, useEffect } from 'react';
import { useNavigate } from '../lib/router';
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
  ChevronDown,
  Clock,
  X,
  ShieldCheck,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface ServicesFullProps {
  onOpenContact?: () => void;
}

interface ServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  benefit: string;
  deliverables: string[];
  scopeDetails: {
    included: string[];
    timeline: string;
    revisions: string;
    notIncluded: string[];
  };
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  extra?: string;
}

const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: '1) What do you need from me to get started?',
    answer: 'A short brief is enough. Ideally, share your goals, references/examples you like, brand assets (logo, colors), and any design file (Figma) or existing website link. If you don’t have a design, I can start from a clean UI direction and iterate with you.'
  },
  {
    id: 'faq-2',
    question: '2) How does pricing and payment work?',
    answer: 'I offer project-based pricing for well-defined scopes and hourly pricing for ongoing work/bug fixes. For fixed-price projects, I usually work with milestones (e.g., 30–50% upfront, rest on delivery or split by phases).'
  },
  {
    id: 'faq-3',
    question: '3) What’s the typical timeline?',
    answer: 'Timelines depend on scope, but here are common ranges:',
    bullets: [
      'Landing page: 2–4 business days',
      'Figma to React: 2–5 business days',
      'React UI (multi-page): 4–10 business days',
      'Bug fixes: 24–48 hours for standard issues'
    ],
    extra: 'I’ll confirm an exact timeline after reviewing your requirements.'
  },
  {
    id: 'faq-4',
    question: '4) How many revisions are included?',
    answer: 'Most projects include 2 revision rounds (small UI adjustments, spacing, copy tweaks). Larger changes or new features can be added as a new milestone.'
  },
  {
    id: 'faq-5',
    question: '5) Do I get the source code?',
    answer: 'Yes. You’ll receive the full source code (GitHub repo or zip) and clear handoff notes. If needed, I can also provide simple setup instructions so your team can run and maintain the project.'
  },
  {
    id: 'faq-6',
    question: '6) Can you work with an existing website or codebase?',
    answer: 'Yes. I can improve responsiveness, fix UI bugs, redesign sections, or refactor React components in existing projects. Just share the live link and (if possible) repository access.'
  },
  {
    id: 'faq-7',
    question: '7) Do you handle deployment and hosting?',
    answer: 'I can deploy frontend projects to Vercel/Netlify and help connect your domain. Hosting/domain costs are paid by the client. If you already have hosting, I can provide a smooth deployment handoff.'
  },
  {
    id: 'faq-8',
    question: '8) Can you integrate APIs or help with backend tasks?',
    answer: 'Yes. I’m frontend-first, but I’m backend-aware and can integrate REST APIs, handle authentication flows, and support small Node/Express/database tasks when needed. For larger backend systems, I’m happy to collaborate with your backend developer/team.'
  },
  {
    id: 'faq-9',
    question: '(Optional extra) Do you offer ongoing support?',
    answer: 'Yes. I can provide post-delivery support for bug fixes and small adjustments. If you need ongoing improvements, we can set up a monthly retainer or hourly plan.'
  }
];

const serviceList: ServiceCard[] = [
  {
    id: 'landing-page',
    icon: Layout,
    title: 'Responsive Website / Landing Page',
    benefit: 'Fast-loading, high-converting pages optimized for all devices and screen sizes.',
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
    benefit: 'Modern, component-driven web applications built with clean and maintainable architecture.',
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
    benefit: 'Exact 1:1 translation from your Figma or Adobe XD designs to production-ready code.',
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
    benefit: 'Quick resolution of CSS layout glitches, broken responsive views, and React state issues.',
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
    benefit: 'Revitalize outdated web interfaces into sleek, contemporary user experiences.',
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
    benefit: 'Speed up your website and rank better on search engines with solid technical foundations.',
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
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const navigate = useNavigate();

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

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
      className="pt-4 sm:pt-6 pb-16 sm:pb-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Freelance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Frontend Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Services</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            High-performance React interfaces, pixel-perfect Figma translations, and responsive websites crafted for international clients and product teams.
          </p>

          {/* Primary Top CTA Row with Trust line */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md mx-auto w-full">
              <button
                onClick={() => scrollToContact()}
                className="flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              </button>
              <button
                onClick={scrollToProjects}
                className="flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer whitespace-nowrap"
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
                  {/* Top Bar: Clean Icon */}
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
          <div className="services-backend-card lg:col-span-5 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-blue-950/30 border border-blue-500/20 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="services-backend-tag inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-mono font-bold mb-3.5">
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
            <div className="services-backend-footer mt-5 pt-4 border-t border-zinc-800 text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>Smooth API integration without blocking workflows</span>
            </div>
          </div>

        </div>

        {/* 3-Step Process Row */}
        <div className="services-process-container rounded-2xl bg-zinc-950/80 border border-zinc-800/90 p-7 sm:p-9 mb-16">
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
                  className="services-process-card relative p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-start hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="services-process-number text-3xl font-extrabold font-mono text-zinc-700">
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

        {/* FAQ Section */}
        <div id="services-faq" className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 font-normal">
              Everything you need to know about working together, project scopes, revisions, and deliverables.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqList.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`services-faq-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-zinc-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/20 is-open' 
                      : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-cyan-300' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`services-faq-chevron w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen 
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180' 
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="services-faq-body px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-800/60 text-zinc-300 text-sm sm:text-base leading-relaxed animate-in fade-in duration-150">
                      <p className="font-normal">{faq.answer}</p>
                      {faq.bullets && (
                        <ul className="mt-3 space-y-1.5 pl-2">
                          {faq.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-200 text-xs sm:text-sm">
                              <span className="text-cyan-400 mt-0.5 font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {faq.extra && (
                        <p className="mt-3 text-xs sm:text-sm font-medium text-cyan-300/90">
                          {faq.extra}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="services-cta-banner text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/30 p-6 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="services-cta-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project in mind or need a frontend specialist?
            </h3>
            <p className="services-cta-subtitle mt-3 text-xs sm:text-base lg:text-lg text-zinc-300 mb-6 font-normal">
              Let&apos;s discuss your scope, timeline, and how I can help bring your web product to life.
            </p>
            
            {/* Mobile 1-Row Responsive Buttons */}
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md mx-auto w-full">
              <button
                onClick={() => scrollToContact()}
                className="flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2.5 whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              </button>
              <button
                onClick={scrollToProjects}
                className="cta-secondary-btn flex-1 sm:flex-initial px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer whitespace-nowrap"
              >
                View Projects
              </button>
            </div>

            <p className="services-cta-note mt-4 text-xs sm:text-sm text-zinc-400 font-mono">
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
                  <h3 className="text-xl font-bold text-white">
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
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-end">
              <button
                type="button"
                onClick={() => scrollToContact(selectedService.title)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
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
