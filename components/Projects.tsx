
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Impact Portfolio</h2>
          <p className="text-lg text-navy/60 dark:text-alabaster/60">
            Selected case studies demonstrating strategic problem-solving and measurable outcomes.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 scroll-reveal`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <span className="text-gold font-semibold uppercase tracking-widest text-sm mb-4 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  {project.title}
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-navy/40 dark:text-alabaster/40 mb-2">Challenge</h4>
                    <p className="text-navy/70 dark:text-alabaster/70 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-navy/40 dark:text-alabaster/40 mb-2">Solution</h4>
                    <p className="text-navy/70 dark:text-alabaster/70 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="p-6 bg-alabaster dark:bg-navy rounded-lg border-l-4 border-gold">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">ROI / Outcome</h4>
                    <p className="text-navy font-semibold dark:text-alabaster">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
