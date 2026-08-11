import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, MapPin, Code2 } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 overflow-hidden transition-colors duration-300">
      {/* Animated Moving Accent Beam at Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-zinc-800/80 overflow-hidden">
        {/* Continuous moving light beam */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-zinc-800/60">
          
          {/* Brand & Status Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <a href="#" className="font-mono font-extrabold text-2xl tracking-tight text-white hover:text-cyan-400 transition-colors">
                &lt;Sojib /&gt;
              </a>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base max-w-sm leading-relaxed">
              Software Engineer & Cloud Architect candidate specializing in building scalable web applications, robust APIs, and intelligent software systems.
            </p>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Internships</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Quick Navigation</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-cyan-400 transition-colors py-1 flex items-center gap-1 group"
                >
                  <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Time Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Let's Connect</span>
            </h4>

            {/* Social Buttons */}
            <div className="flex items-center gap-2.5">
              {profile.socialLinks?.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profile.socialLinks?.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${profile.contactEmail}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Live Clock Display */}
            {time && (
              <div className="pt-1 text-xs sm:text-sm text-zinc-400 font-mono flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Local Time: <span className="text-zinc-200 font-semibold">{time}</span></span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {profile.name}. Designed & Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-bold text-zinc-200 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 transition-all cursor-pointer group active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

