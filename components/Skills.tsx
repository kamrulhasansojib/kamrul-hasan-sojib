
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

const getSkillSlug = (skill: string) => {
  const mapping: Record<string, string> = {
    'C': 'c',
    'C++': 'cplusplus',
    'JavaScript': 'javascript',
    'PHP': 'php',
    'React.js': 'react',
    'Tailwind CSS': 'tailwindcss',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'CSS': 'css3',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    'MongoDB': 'mongodb',
    'MySQL': 'mysql',
    'Git': 'git',
    'GitHub': 'github',
    'Postman': 'postman',
    'VS Code': 'visualstudiocode',
    'Visual Studio Code': 'visualstudiocode'
  };
  return mapping[skill] || 'code';
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive set of tools and technologies I've mastered to bridge the gap between complex problems and elegant software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <div 
                key={category.title} 
                className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-blue-500/10">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-blue-500/20"
                      >
                        <img 
                          src={`https://cdn.simpleicons.org/${getSkillSlug(skill)}/60a5fa`} 
                          alt={skill} 
                          className="w-4 h-4 object-contain brightness-90 group-hover/skill:brightness-125 group-hover/skill:scale-110 transition-all duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <span className="text-[13px] font-semibold text-gray-400 group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
