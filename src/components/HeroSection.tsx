import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Server, 
  Database, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Facebook,
  Mail, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { ProfileData, ImageCropStyle, BackgroundPattern, AccentGradient, TechBadge } from '../types';
import { resolveImageUrl } from '../utils/imageUtils';

interface HeroSectionProps {
  profile: ProfileData;
  cropStyle: ImageCropStyle;
  backgroundPattern: BackgroundPattern;
  accentGradient: AccentGradient;
  badges: TechBadge[];
  portraitImage?: string;
  onOpenContact: () => void;
  onBadgeClick?: (badgeName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  cropStyle,
  backgroundPattern,
  accentGradient,
  badges,
  portraitImage,
  onOpenContact,
  onBadgeClick
}) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(true);
  const [isTabVisible, setIsTabVisible] = React.useState(typeof document !== 'undefined' ? !document.hidden : true);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionQuery.matches);
      const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      motionQuery.addEventListener('change', handleMotionChange);

      // IntersectionObserver for Hero Section
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: 0.05 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      // VisibilityChange listener for browser tab
      const handleVisibilityChange = () => {
        setIsTabVisible(!document.hidden);
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        motionQuery.removeEventListener('change', handleMotionChange);
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  const isPaused = !isIntersecting || !isTabVisible || prefersReducedMotion;

  // Crop shape styling class mapping
  const getCropShapeClass = (shape: ImageCropStyle) => {
    switch (shape) {
      case 'circular':
        return 'rounded-full';
      case 'soft-blob':
        return 'blob-shape-organic';
      case 'smooth-blob':
        return 'blob-shape-smooth';
      default:
        return 'blob-shape-organic';
    }
  };

  // Border ring gradient mapping
  const getBorderGradientClass = (accent: AccentGradient) => {
    switch (accent) {
      case 'blue-cyan':
        return 'from-blue-500 via-cyan-400 to-indigo-500';
      case 'purple-pink':
        return 'from-purple-500 via-pink-500 to-indigo-500';
      case 'emerald-teal':
        return 'from-emerald-400 via-teal-400 to-cyan-500';
      case 'amber-orange':
        return 'from-amber-400 via-orange-500 to-red-500';
      default:
        return 'from-blue-500 via-cyan-400 to-indigo-500';
    }
  };

  // Glow color mapping
  const getGlowBgClass = (accent: AccentGradient) => {
    switch (accent) {
      case 'blue-cyan':
        return 'from-blue-600/35 via-cyan-500/25 to-blue-700/20';
      case 'purple-pink':
        return 'from-purple-600/35 via-pink-500/25 to-indigo-700/20';
      case 'emerald-teal':
        return 'from-emerald-600/35 via-teal-500/25 to-cyan-700/20';
      case 'amber-orange':
        return 'from-amber-600/35 via-orange-500/25 to-amber-700/20';
      default:
        return 'from-blue-600/35 via-cyan-500/25 to-blue-700/20';
    }
  };

  // Icon component lookup for floating badges
  const renderBadgeIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className={`w-4 h-4 ${color}`} />;
      case 'Server':
        return <Server className={`w-4 h-4 ${color}`} />;
      case 'Database':
        return <Database className={`w-4 h-4 ${color}`} />;
      default:
        return <Terminal className={`w-4 h-4 ${color}`} />;
    }
  };

  const cropClass = getCropShapeClass(cropStyle);
  const borderGradient = getBorderGradientClass(accentGradient);
  const glowBg = getGlowBgClass(accentGradient);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[85vh] bg-black text-white flex items-center pt-28 sm:pt-32 lg:pt-24 lg:pb-20 pb-12 overflow-hidden border-b border-zinc-900/80 w-full max-w-full"
    >
      
      {/* Background ambient lighting accents with subtle blur */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* SPLIT HERO CONTAINER: 
            Desktop: 60% text left / 40% image right
            Mobile: image top, text bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          
          {/* ==========================================
              IMAGE SIDE (40% desktop, Mobile: Top)
              ========================================== */}
          <div className="w-full lg:w-[40%] flex justify-center items-center lg:items-start relative order-first lg:order-last lg:self-start lg:pt-[106px] pt-4 sm:pt-6 lg:pt-[106px] pb-6 sm:pb-8 lg:pb-0">
            
            <div className="relative w-full max-w-lg sm:max-w-xl flex justify-center items-center my-auto lg:my-0">
              
              {/* HERO IMAGE CONTAINER WITH ROTATING CONIC BORDER RING & HOVER SCALE */}
              <div className={`relative group cursor-pointer transition-all duration-500 flex justify-center items-center ${cropClass}`}>
                
                {/* Rotating Conic Gradient Border Ring */}
                <div className={`absolute -inset-[3px] overflow-hidden p-[3px] pointer-events-none ${cropClass}`}>
                  <div 
                    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    className={`absolute -inset-[100%] bg-conic-gradient bg-[conic-gradient(from_0deg,#3b82f6,#06b6d4,#6366f1,#3b82f6)] animate-conic-spin opacity-85 group-hover:opacity-100 transition-opacity duration-300 ${cropClass}`}
                  />
                </div>

                {/* Main Image Wrapper with Organic / Circular Crop & Subtle Floating Loop */}
                <div 
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                  className={`relative w-64 sm:w-80 lg:w-[350px] lg:h-[350px] aspect-square overflow-hidden bg-zinc-950 p-1 transition-transform duration-500 ease-out group-hover:scale-[1.03] animate-float-subtle shadow-xl ${cropClass}`}
                >
                  <img
                    src={resolveImageUrl(profile.avatarUrl, portraitImage)}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-top ${cropClass} transition-all duration-500 brightness-[1.02] contrast-[1.05] group-hover:contrast-110`}
                  />

                  {/* Subtle Inner Highlight Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-cyan-500/10 pointer-events-none ${cropClass}`} />
                </div>


                {/* Subtle Concentric Orbit Rings Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.06)] pointer-events-none z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] lg:w-[500px] lg:h-[500px] rounded-full border border-blue-500/15 pointer-events-none z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] rounded-full border border-indigo-500/10 pointer-events-none z-10" />

                {/* Continuous Circular Orbital Ring for Pure Icon Badges (Textless) */}
                <div
                  className="hero-orbit-ring absolute top-1/2 left-1/2 w-[290px] h-[290px] sm:w-[390px] sm:h-[390px] lg:w-[470px] lg:h-[470px] rounded-full pointer-events-none z-20 flex items-center justify-center will-change-transform"
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                >
                  {badges.map((badge, index) => {
                    const totalBadges = badges.length;
                    const angleOffset = (index * 360) / totalBadges;
                    const hasImage = badge.imageUrl || badge.iconName?.startsWith('http') || badge.iconName?.startsWith('/') || badge.iconName?.startsWith('data:');

                    return (
                      <div
                        key={badge.id || index}
                        className="absolute inset-0 flex justify-center items-start pointer-events-none"
                        style={{ transform: `rotate(${angleOffset}deg)` }}
                      >
                        {/* Positioned at top perimeter of orbit circle */}
                        <div className="-mt-3.5 sm:-mt-5">
                          <div
                            style={{ 
                              animationPlayState: isPaused ? 'paused' : 'running',
                              transformOrigin: 'center center' 
                            }}
                            onClick={() => onBadgeClick?.(badge.name)}
                            title={badge.name}
                            className="hero-badge-counter group/badge cursor-pointer pointer-events-auto relative flex items-center justify-center will-change-transform"
                          >
                            {/* Sleek round icon badge without text label */}
                            <div className={`w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 p-1.5 sm:p-2 lg:p-2.5 flex items-center justify-center shadow-lg hover:border-cyan-400 hover:scale-125 transition-all duration-300 ${badge.bgGlow || 'shadow-cyan-500/10'}`}>
                              {hasImage ? (
                                <img
                                  src={badge.imageUrl || badge.iconName}
                                  alt={badge.name}
                                  referrerPolicy="no-referrer"
                                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
                                />
                              ) : (
                                renderBadgeIcon(badge.iconName, badge.color)
                              )}
                            </div>

                            {/* Tooltip on hover showing tech name */}
                            <div className="absolute -bottom-7 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 bg-zinc-900 border border-zinc-700 text-cyan-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-xl pointer-events-none z-30">
                              {badge.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

          {/* ==========================================
              TEXT SIDE (60% desktop, Left-Aligned)
              ========================================== */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left order-last lg:order-first">
            
            {/* Left-Aligned "Available for Internships" Badge */}
            {profile.availableForInternships && (
              <div 
                onClick={onOpenContact}
                className="group/badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-6 hover:border-cyan-400 hover:bg-cyan-900/50 transition-all duration-300 cursor-pointer"
              >
                {/* Live Indicator Pulse Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="tracking-wide">Available for Internships</span>
                <span className="text-cyan-400/60 group-hover/badge:translate-x-0.5 transition-transform">→</span>
              </div>
            )}

            {/* Name Title */}
            <div className="relative mb-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">{profile.name}</span>
              </h1>
            </div>

            {/* Role Subtitle */}
            <div className="flex items-center gap-2 mb-4 text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-400/90">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <h2>{profile.role}</h2>
            </div>

            {/* Description & Bio Paragraph (Strictly Left Aligned) */}
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal">
              {profile.tagline} {profile.bio}
            </p>

            {/* Left-Aligned Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* Primary CTA: Get in Touch / Inquire */}
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/50 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
              </a>

              {/* Download CV CTA */}
              <a
                href={profile.resumeUrl && profile.resumeUrl !== '#' ? profile.resumeUrl : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}
                download="Kamrul_Hasan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-300 hover:text-cyan-300 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Social & Location Bar */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-zinc-900/90 w-full max-w-2xl">
              <div className="flex items-center gap-2.5">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                {profile.facebookUrl && (
                  <a
                    href={profile.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
                    title="Facebook Profile"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
                  title="Email Direct"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Highlights Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-8 w-full max-w-lg">
              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{profile.yearsExperience}</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-medium">Experience</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">{profile.projectsCompleted}</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-medium">Projects Built</div>
              </div>
              <a 
                href="#certifications"
                className="p-3 sm:p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 transition-colors group cursor-pointer block shadow-md"
              >
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {profile.certificationsCount || "2+"}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 font-medium group-hover:text-zinc-300 transition-colors">Certifications</div>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Animated Moving Accent Beam between Home (Hero) and About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-800/80 overflow-hidden z-20">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"
          animate={{ x: ['-100%', '300%'] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
};
