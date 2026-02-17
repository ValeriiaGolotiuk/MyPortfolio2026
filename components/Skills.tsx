
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-alabaster dark:bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 scroll-reveal">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Core Competencies</h2>
            <p className="text-navy/60 dark:text-alabaster/60 max-w-md">
              A blend of strategic foresight, rigorous quantitative analysis, and modern technical proficiency.
            </p>
          </div>
          <div className="hidden md:block w-32 h-px bg-gold mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group, index) => (
            <div 
              key={group.category}
              className={`p-10 bg-white dark:bg-navy-dark rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-gold scroll-reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-serif text-2xl font-bold mb-8">{group.category}</h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-navy/80 dark:text-alabaster/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
