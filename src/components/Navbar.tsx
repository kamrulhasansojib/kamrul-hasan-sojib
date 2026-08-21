import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Sun, 
  Moon, 
  ChevronDown, 
  User, 
  Briefcase, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenContact: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenContact,
  isDarkMode = true,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const navigateToSection = (hash: string) => {
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    
    // If hash changes, dispatch event so components like ExperienceSection react immediately
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-black/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name Brand */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <span className={`font-extrabold text-xl sm:text-2xl tracking-tight transition-colors font-mono whitespace-nowrap ${
              isDarkMode ? 'text-blue-400 group-hover:text-cyan-300' : 'text-blue-600 group-hover:text-cyan-600'
            }`}>
              &lt;Sojib /&gt;
            </span>
          </a>

          {/* Desktop / Large Screen Nav Items */}
          <nav className={`hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold whitespace-nowrap ${
            isDarkMode ? 'text-zinc-200' : 'text-slate-800'
          }`}>
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            
            {/* About Dropdown (with Experience & Education) */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`flex items-center gap-1.5 py-1.5 hover:text-cyan-400 transition-colors cursor-pointer focus:outline-none ${
                  aboutDropdownOpen ? 'text-cyan-400' : ''
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-zinc-400'
                }`} />
              </button>

              {/* Minimalist Floating Dropdown Menu */}
              {aboutDropdownOpen && (
                <div 
                  className={`absolute top-full left-0 mt-1.5 w-44 p-1.5 rounded-xl shadow-xl border transition-all duration-150 z-50 backdrop-blur-xl ${
                    isDarkMode 
                      ? 'bg-zinc-950/95 border-zinc-800 text-zinc-200 shadow-cyan-950/20' 
                      : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-300/40'
                  }`}
                >
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection('#about');
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all group ${
                      isDarkMode 
                        ? 'hover:bg-zinc-800/80 hover:text-cyan-300 text-zinc-300' 
                        : 'hover:bg-slate-100 hover:text-cyan-600 text-slate-700'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span>About Overview</span>
                  </a>

                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection('#experience');
                      const el = document.getElementById('experience');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all group ${
                      isDarkMode 
                        ? 'hover:bg-zinc-800/80 hover:text-cyan-300 text-zinc-300' 
                        : 'hover:bg-slate-100 hover:text-cyan-600 text-slate-700'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span>Experience</span>
                  </a>

                  <a
                    href="#education"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection('#education');
                      const el = document.getElementById('experience') || document.getElementById('education');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all group ${
                      isDarkMode 
                        ? 'hover:bg-zinc-800/80 hover:text-cyan-300 text-zinc-300' 
                        : 'hover:bg-slate-100 hover:text-cyan-600 text-slate-700'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span>Education</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Right Action Bar (Large Screens) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Dark / Light Mode Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle Dark or Light Mode"
                className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 ${
                  isDarkMode 
                    ? 'bg-zinc-900/90 border-zinc-700/80 text-zinc-200 hover:text-amber-300 hover:border-amber-400/50 hover:bg-zinc-800'
                    : 'bg-slate-200/90 border-slate-300 text-slate-800 hover:text-indigo-600 hover:border-indigo-400/50 hover:bg-slate-300'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            )}

            {/* Internship Contact CTA */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/15 cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Hire Me</span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Trigger & Dark Mode Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle Dark/Light Mode"
                className={`p-2 rounded-xl border transition-all shrink-0 ${
                  isDarkMode 
                    ? 'bg-zinc-900 border-zinc-800 text-amber-400' 
                    : 'bg-slate-200 border-slate-300 text-indigo-600'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={onOpenContact}
              aria-label="Hire Me"
              className="p-2 rounded-xl text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all cursor-pointer active:scale-95 shrink-0 flex items-center justify-center shadow-md shadow-cyan-500/15"
              title="Hire Me"
            >
              <Mail className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border shrink-0 ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                  : 'bg-slate-200 border-slate-300 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Dropdown Nav */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-4 pt-4 border-t rounded-2xl p-4 space-y-2.5 max-h-[80vh] overflow-y-auto ${
            isDarkMode 
              ? 'border-zinc-800 bg-zinc-950/95 text-zinc-200 backdrop-blur-xl' 
              : 'border-slate-200 bg-white/95 text-slate-800 shadow-xl backdrop-blur-xl'
          }`}>
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors"
            >
              Home
            </a>
            
            {/* Mobile About Item + Sublinks */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors cursor-pointer"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAboutOpen ? 'rotate-180 text-cyan-400' : 'text-zinc-500'
                }`} />
              </button>

              {mobileAboutOpen && (
                <div className="pl-3.5 my-1 space-y-1 border-l-2 border-zinc-800 ml-1.5">
                  <a 
                    href="#about" 
                    onClick={() => navigateToSection('#about')}
                    className="block text-sm font-medium hover:text-cyan-400 text-zinc-400 py-1 transition-colors"
                  >
                    About Overview
                  </a>
                  <a 
                    href="#experience" 
                    onClick={() => navigateToSection('#experience')}
                    className="block text-sm font-medium hover:text-cyan-400 text-zinc-400 py-1 transition-colors"
                  >
                    Experience
                  </a>
                  <a 
                    href="#education" 
                    onClick={() => navigateToSection('#education')}
                    className="block text-sm font-medium hover:text-cyan-400 text-zinc-400 py-1 transition-colors"
                  >
                    Education
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold hover:text-cyan-400 py-1.5 transition-colors"
            >
              Contact
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-center shadow-md shadow-cyan-500/15"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

