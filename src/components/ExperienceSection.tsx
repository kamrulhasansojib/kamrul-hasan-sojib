import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceItems, educationItems } from '../data/portfolioData';
import { AnimatedMovingLines } from './AnimatedMovingLines';

interface ExpandableDescriptionProps {
  description: string;
  accentColor?: 'cyan' | 'purple';
}

const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({ description, accentColor = 'cyan' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hoverTextClass = accentColor === 'purple' 
    ? 'text-purple-400 hover:text-purple-300' 
    : 'text-cyan-400 hover:text-cyan-300';

  return (
    <div className="pt-2">
      <p
        className={`text-zinc-300 text-base sm:text-lg leading-relaxed ${
          !isExpanded ? 'line-clamp-3 sm:line-clamp-none' : ''
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`sm:hidden mt-1.5 text-xs font-semibold ${hoverTextClass} inline-flex items-center gap-1 cursor-pointer focus:outline-none`}
      >
        <span>{isExpanded ? 'Read Less' : 'Read More...'}</span>
      </button>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const workExperience = experienceItems.filter(item => item.type !== 'Education');

  // Handle hash updates if navigated via navbar (#experience or #education)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#education') {
        setActiveTab('education');
      } else if (hash === '#experience') {
        setActiveTab('experience');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="experience" className="py-24 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      {/* Moving Wave Lines Animated Background */}
      <AnimatedMovingLines />

      {/* Invisible anchor for Education link in navbar */}
      <div id="education" className="absolute -top-24" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/60 text-blue-400 border border-blue-500/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Career & Academic Journey</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Experience <span className="text-blue-500">&</span> Education
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mt-3 leading-relaxed">
            {activeTab === 'experience' 
              ? 'Hands-on software development experience, tech leadership, and problem-solving achievements.'
              : 'Academic background in Computer Science & Engineering, core CS fundamentals, and academic milestones.'
            }
          </p>

          {/* 2 Toggle Buttons */}
          <div className="mt-6 flex items-center justify-center gap-2 p-1.5 bg-zinc-950 rounded-2xl border border-zinc-800/90 shadow-xl">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="max-w-5xl mx-auto space-y-8 relative">
            <div className="absolute top-6 bottom-6 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-transparent" />

            {workExperience.map((item) => (
              <div key={item.id} className="relative pl-14 sm:pl-20 group">
                {/* Node Icon Circle */}
                <div className="absolute left-3 sm:left-5 top-2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-cyan-400 group-hover:bg-cyan-950/90 transition-all flex items-center justify-center text-cyan-400 z-10 shadow-xl shadow-cyan-950/50">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Card Container */}
                <div className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl backdrop-blur-xl relative overflow-hidden group-hover:shadow-cyan-950/30">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-900/80">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-base sm:text-lg mt-1 flex items-center gap-2">
                        <span>{item.company}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm sm:text-base text-zinc-300 font-mono bg-zinc-900/90 px-4 py-2 rounded-full w-fit border border-zinc-800 shrink-0 shadow-inner">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <ExpandableDescription description={item.description} accentColor="cyan" />

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Key Contributions & Impact</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-2.5 sm:p-3 rounded-xl border border-zinc-800/60">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-900/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-zinc-400 mr-2">Technologies:</span>
                    {item.skillsUsed.map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-zinc-900/90 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === 'education' && (
          <div className="max-w-5xl mx-auto space-y-8 relative">
            <div className="absolute top-6 bottom-6 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

            {educationItems.map((item) => (
              <div key={item.id} className="relative pl-14 sm:pl-20 group">
                <div className="absolute left-3 sm:left-5 top-2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-purple-400 group-hover:bg-purple-950/90 transition-all flex items-center justify-center text-purple-400 z-10 shadow-xl shadow-purple-950/50">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <div className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 hover:border-purple-500/50 transition-all duration-300 shadow-2xl backdrop-blur-xl relative overflow-hidden group-hover:shadow-purple-950/30">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-all" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-900/80">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold text-base sm:text-lg mt-1">{item.institution}</p>
                    </div>

                    <div className="flex flex-wrap md:flex-col lg:flex-row items-start lg:items-center gap-2.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-sm sm:text-base text-zinc-300 font-mono bg-zinc-900/90 px-4 py-2 rounded-full border border-zinc-800 shadow-inner">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm sm:text-base text-emerald-400 font-bold bg-emerald-950/60 px-4 py-2 rounded-full border border-emerald-500/30 shadow-md">
                        <Award className="w-4 h-4" />
                        <span>{item.grade}</span>
                      </div>
                    </div>
                  </div>

                  <ExpandableDescription description={item.description} accentColor="purple" />

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>Key Academic Highlights</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {item.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-2.5 sm:p-3 rounded-xl border border-zinc-800/60">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

