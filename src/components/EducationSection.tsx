import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationItems } from '../data/portfolioData';
import { AnimatedMovingLines } from './AnimatedMovingLines';

interface ExpandableDescriptionProps {
  description: string;
}

const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <p
        className={`text-zinc-300 text-sm sm:text-base leading-relaxed ${
          !isExpanded ? 'line-clamp-3 sm:line-clamp-none' : ''
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="sm:hidden mt-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 cursor-pointer focus:outline-none"
      >
        <span>{isExpanded ? 'Read Less' : 'Read More...'}</span>
      </button>
    </div>
  );
};

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Moving Wave Lines Animated Background */}
      <AnimatedMovingLines />
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Academic background in Computer Science & Engineering, core algorithmic foundations, and academic achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connector */}
          <div className="absolute top-6 bottom-6 left-6 sm:left-8 w-[2px] bg-zinc-800" />

          {educationItems.map((item) => (
            <div key={item.id} className="relative pl-14 sm:pl-20 group">
              
              {/* Icon Node */}
              <div className="absolute left-3 sm:left-5 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-purple-400 group-hover:bg-purple-950/80 transition-all flex items-center justify-center text-purple-400 z-10 shadow-xl">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 hover:border-purple-500/40 transition-all duration-300 shadow-2xl space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm mt-0.5">{item.institution}</p>
                  </div>

                  <div className="flex flex-wrap md:flex-col lg:flex-row items-start lg:items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono bg-zinc-900 px-3.5 py-1.5 rounded-full border border-zinc-800">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.grade}</span>
                    </div>
                  </div>
                </div>

                <ExpandableDescription description={item.description} />

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Academic Highlights</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework/Skills */}
                {item.skills && item.skills.length > 0 && (
                  <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-2">
                    {item.skills.map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-zinc-900 text-purple-300 border border-purple-500/20"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
