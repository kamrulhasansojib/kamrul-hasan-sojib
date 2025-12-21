import React from 'react';
import { EDUCATION_TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Academic Path</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {EDUCATION_TIMELINE.map((item, index) => (
              <div key={item.institution} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-400 font-medium italic mb-4">{item.institution}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer side for layout */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;