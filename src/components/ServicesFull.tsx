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
  title: string;
  benefit: string;
  icon: any;
  deliverables: string[];
  scopeDetails: {
    timeline: string;
    revisions: string;
    included: string[];
    notIncluded: string[];
  };
}

const serviceList: ServiceCard[] = [
  {
    id: 'react-dev',
    title: 'React / Next.js Web Apps',
    benefit: 'Modular, typed, and scalable web applications built for speed and maintainability.',
    icon: Code2,
    deliverables: [
      'Clean TypeScript component architecture',
      'Context / Zustand state management',
      'Tailwind CSS styling & responsive layouts',
      'API & webhook integration with error states'
    ],
    scopeDetails: {
      timeline: '2–4 weeks (scope-dependent)',
      revisions: '2 rounds of structured revisions included',
      included: [
        'Component structure using React & TypeScript',
        'State management & asynchronous data fetching',
        'Mobile, tablet, and desktop responsive QA',
        'Performance optimization & Lighthouse audit > 90'
      ],
      notIncluded: [
        'Complex custom backend architecture from scratch (available as separate scope)',
        'Copywriting and original branding asset creation'
      ]
    }
  },
  {
    id: 'figma-to-code',
    title: 'Figma to Pixel-Perfect Code',
    benefit: 'Exact translation from design files to live interactive interfaces with zero fidelity loss.',
    icon: Figma,
    deliverables: [
      '100% fidelity to spacing, typography & tokens',
      'Responsive breakpoints across all mobile devices',
      'Smooth micro-interactions & hover states',
      'Semantic, accessible HTML5 structure'
    ],
    scopeDetails: {
      timeline: '1–2 weeks per set of core screens',
      revisions: 'Pixel-perfect sign-off guarantee included',
      included: [
        'Exact Figma design token matching',
        'Custom icon and vector handling',
        'Interactive state transitions and dropdowns',
        'Accessibility compliance check (WCAG 2.1 AA)'
      ],
      notIncluded: [
        'Designing original UI screens from scratch in Figma',
        'Backend server setup'
      ]
    }
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    benefit: 'Speed-optimized landing pages that turn visitors into users, subscribers, or buyers.',
    icon: Layout,
    deliverables: [
      'Sub-second load times & Core Web Vitals optimization',
      'Clear hierarchy and high-conversion CTA blocks',
      'Interactive hero elements & proof sections',
      'SEO meta tags, OpenGraph & analytics hooks'
    ],
    scopeDetails: {
      timeline: '4–7 business days',
      revisions: '2 rounds of conversion/copy tweaks included',
      included: [
        'High-converting layout execution',
        'Fast static page generation with Vite or Next.js',
        'Form validation and newsletter/CRM webhook hooks',
        'Cross-browser and multi-device QA testing'
      ],
      notIncluded: [
        'Paid ad campaign management',
        'Custom video production'
      ]
    }
  },
  {
    id: 'perf-optimization',
    title: 'Performance & SEO Audits',
    benefit: 'Boost Core Web Vitals, eliminate bundle bloat, and achieve 90+ Lighthouse scores.',
    icon: Gauge,
    deliverables: [
      'Bundle size reduction & dynamic code splitting',
      'Image optimization & modern WebP/AVIF formats',
      'Lighthouse 90+ across Performance and SEO',
      'Detailed audit report with actionable steps'
    ],
    scopeDetails: {
      timeline: '3–5 business days',
      revisions: '1 verification re-audit after deployment',
      included: [
        'Full performance audit & Core Web Vitals analysis',
        'Direct codebase optimizations & refactoring',
        'Script loading priority tuning & caching recommendations',
        'Before & after performance benchmark reports'
      ],
      notIncluded: [
        'Third-party hosting/CDN migration costs',
        'Database query tuning (unless frontend-related)'
      ]
    }
  },
  {
    id: 'bug-fixes',
    title: 'Frontend Bug Fixes & Refactoring',
    benefit: 'Rapid diagnosis and resolution of UI defects, styling glitches, and broken states.',
    icon: Bug,
    deliverables: [
      'Cross-browser and viewport layout fix verification',
      'State-lifecycle bug resolutions & memory leak cleanup',
      'Legacy code refactoring into modern React hooks',
      'Documented fixes with unit/integration validation'
    ],
    scopeDetails: {
      timeline: '1–3 business days for critical bugs',
      revisions: 'Fix validation guarantee included',
      included: [
        'Isolation and reproduction of reported bugs',
        'Clean, non-breaking patch implementation',
        'Testing across affected browsers/devices',
        'Code review comments explaining the resolution'
      ],
      notIncluded: [
        'Complete platform re-architecture under a bug-fix scope'
      ]
    }
  },
  {
    id: 'api-integration',
    title: 'API & Backend Integration',
    benefit: 'Seamless bridging between frontend UI and REST/GraphQL APIs or Firebase backend services.',
    icon: Cpu,
    deliverables: [
      'REST & GraphQL endpoint consumption with types',
      'Firebase Auth, Firestore, and Storage setups',
      'Robust loading, error, empty, and retry states',
      'Optimistic UI updates for snappy user experience'
    ],
    scopeDetails: {
      timeline: '1–3 weeks (scope-dependent)',
      revisions: 'Endpoint schema synchronization updates',
      included: [
        'TanStack Query / SWR / Axios integration with TypeScript types',
        'JWT or Firebase auth state persistence',
        'Error boundary handling and toast feedback',
        'Mock data fixtures for parallel development'
      ],
      notIncluded: [
        'Building full enterprise microservices from scratch'
      ]
    }
  }
];

const faqList = [
  {
    id: 'faq-1',
    question: 'How do we get started on a project?',
    answer: 'Simply click "Request a Quote" or fill out the contact form with your project overview, timeline, and Figma link or requirements. I will review everything and get back to you within 24 hours with questions, timeline estimates, and next steps.'
  },
  {
    id: 'faq-2',
    question: 'How does payment and milestone tracking work?',
    answer: 'For fixed-price projects, work is typically split into 2 or 3 milestones (e.g., 50% upfront deposit, 50% upon final sign-off and deployment). For ongoing contract or hourly work, invoices are processed weekly or bi-weekly with transparent time logs.'
  },
  {
    id: 'faq-3',
    question: 'Can you work with our existing codebase or backend team?',
    answer: 'Yes! I have extensive experience integrating with existing Git repositories, following team code styles, and coordinating directly with backend developers on REST/GraphQL API contracts.',
    bullets: [
      'Clear Git branching & clean pull request descriptions',
      'Active communication via Slack, Discord, or GitHub issues',
      'Proactive input on API response structures & state management'
    ]
  },
  {
    id: 'faq-4',
    question: 'What is included in post-delivery support?',
    answer: 'Every completed project includes 14 days of complimentary post-delivery bug fixing and deployment support to guarantee everything runs smoothly in your production environment.'
  },
  {
    id: 'faq-5',
    question: 'What timezone do you work in and how do you communicate?',
    answer: 'I work in UTC+6 and have comfortable overlap with US, European, and Asia-Pacific timezones. I communicate primarily via asynchronous updates (Slack/Email/Loom) and scheduled Google Meet / Zoom syncs when needed.'
  },
  {
    id: 'faq-6',
    question: 'Do you offer ongoing retainer or maintenance contracts?',
    answer: 'Yes, after delivering the initial project, I offer monthly retainer packages for continuous feature development, performance monitoring, and rapid bug fixes.',
    extra: 'Retainer slots are limited to ensure high responsiveness for existing partners.'
  }
];

const processSteps = [
  {
    step: '01',
    name: 'Discovery & Scope',
    icon: Search,
    desc: 'Review Figma designs, user flows, and tech requirements to define a clear milestone plan.'
  },
  {
    step: '02',
    name: 'Iterative Development',
    icon: Code2,
    desc: 'Build modular, typed components with regular live staging previews for feedback.'
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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

        {/* CTA Banner: Have a project in mind (Placed above FAQ) */}
        <div className="services-cta-banner text-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/30 p-6 sm:p-12 relative overflow-hidden mb-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="services-cta-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project in mind or need a frontend specialist?
            </h3>
            <p className="services-cta-subtitle mt-3 text-xs sm:text-base lg:text-lg text-zinc-300 mb-6 font-normal">
              Let&apos;s discuss your scope, timeline, and how I can help bring your web product to life.
            </p>
            
            {/* Primary CTAs */}
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

            {/* Response time */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 mt-4 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Typical response time: within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="services-faq" className="mb-8">
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
