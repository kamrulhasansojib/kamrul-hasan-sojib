import React from 'react';
import { AnimatedMovingLines } from './AnimatedMovingLines';
import { 
  Terminal, 
  LayoutGrid, 
  Database, 
  Code2, 
  GitBranch, 
  Server, 
  Send, 
  Layers, 
  Sparkles,
  Zap,
  Users,
  FileText,
  MessageSquare,
  Brain,
  Clock
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'Frontend':
        return <LayoutGrid className="w-6 h-6 text-cyan-400" />;
      case 'Backend & DB':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Tools':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case 'C':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
            alt="C" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'C++':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
            alt="C++" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'Python':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
            alt="Python" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'JavaScript':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            alt="JavaScript" 
            className="w-4 h-4 shrink-0 object-contain rounded-xs"
          />
        );
      case 'PHP':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
            alt="PHP" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'React.js':
      case 'React':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'Tailwind CSS':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
            alt="Tailwind CSS" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'HTML5':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML5" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'CSS':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            alt="CSS" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'Node.js':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
            alt="Node.js" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'Express.js':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
            alt="Express.js" 
            className="w-4 h-4 shrink-0 object-contain dark:invert dark:brightness-200"
          />
        );
      case 'MongoDB':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
            alt="MongoDB" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'MySQL':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            alt="MySQL" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'Docker':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
            alt="Docker" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'AI & ML':
        return (
          <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-white" />
          </span>
        );
      case 'Git & GitHub':
      case 'Git':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'GitHub':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
            className="w-4 h-4 shrink-0 object-contain dark:invert"
          />
        );
      case 'Postman':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" 
            alt="Postman" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      case 'VS Code':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            alt="VS Code" 
            className="w-4 h-4 shrink-0 object-contain"
          />
        );
      default:
        return <Zap className="w-4 h-4 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Moving Wave Lines Animated Background */}
      <AnimatedMovingLines />

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Technical <span className="text-cyan-400">Toolkit</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mt-3 max-w-xl leading-relaxed font-normal">
            A comprehensive set of tools and technologies I've mastered to bridge the gap between complex problems and elegant software solutions.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0d0d0f] border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] relative overflow-hidden min-h-[260px]"
            >
              <div>
                {/* Top Glowing Category Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
                  {getCategoryIcon(group.category)}
                </div>

                {/* Category Heading */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-6 mb-6">
                  {group.category}
                </h3>

                {/* Skills Pill Chips Container */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/30 text-zinc-100 text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-zinc-800/90 hover:scale-[1.03] transition-all cursor-default"
                    >
                      {getSkillIcon(skill.name)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Additional Skills & Soft Skills Strip */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0d0d0f] border border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center gap-3.5 shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-md shadow-cyan-950/50">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-cyan-400 uppercase">
                ADDITIONAL SKILLS:
              </h4>
              <p className="text-sm text-zinc-300 font-medium mt-0.5">Productivity & Professional Competencies</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { name: 'Leadership', icon: <Users className="w-3.5 h-3.5 text-purple-400" />, color: 'border-purple-500/40 text-purple-200 bg-purple-950/40 hover:bg-purple-900/50' },
              { name: 'Microsoft Office (Word, Excel, PowerPoint)', icon: <FileText className="w-3.5 h-3.5 text-blue-400" />, color: 'border-blue-500/40 text-blue-200 bg-blue-950/40 hover:bg-blue-900/50' },
              { name: 'Communication & Teamwork', icon: <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />, color: 'border-emerald-500/40 text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50' },
              { name: 'Problem Solving', icon: <Brain className="w-3.5 h-3.5 text-cyan-400" />, color: 'border-cyan-500/40 text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/50' },
              { name: 'Time Management', icon: <Clock className="w-3.5 h-3.5 text-sky-400" />, color: 'border-sky-500/40 text-sky-200 bg-sky-950/40 hover:bg-sky-900/50' },
            ].map((skill, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-xl text-sm font-mono font-medium border ${skill.color} flex items-center gap-2 shadow-sm hover:scale-[1.03] transition-all cursor-default`}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

