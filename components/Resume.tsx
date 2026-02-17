
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-alabaster dark:bg-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Experience Column */}
            <div className="w-full md:w-1/2 scroll-reveal">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-gold/10 rounded-lg text-gold">
                  <Briefcase size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold">Experience</h2>
              </div>
              
              <div className="relative border-l border-navy/10 dark:border-alabaster/10 ml-6 pl-10 space-y-16">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative group">
                    <div className="absolute -left-[53px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-navy border-2 border-gold group-hover:bg-gold transition-colors duration-300"></div>
                    <span className="text-sm font-semibold text-gold mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-navy/60 dark:text-alabaster/60 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="text-sm text-navy/70 dark:text-alabaster/70 leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="w-full md:w-1/2 scroll-reveal delay-200">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-gold/10 rounded-lg text-gold">
                  <GraduationCap size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold">Education</h2>
              </div>

              <div className="relative border-l border-navy/10 dark:border-alabaster/10 ml-6 pl-10 space-y-16">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative group">
                    <div className="absolute -left-[53px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-navy border-2 border-gold group-hover:bg-gold transition-colors duration-300"></div>
                    <span className="text-sm font-semibold text-gold mb-2 block">{edu.period}</span>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-navy/60 dark:text-alabaster/60 font-medium mb-4">{edu.institution}</p>
                    <p className="text-sm text-navy/70 dark:text-alabaster/70 leading-relaxed italic">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
