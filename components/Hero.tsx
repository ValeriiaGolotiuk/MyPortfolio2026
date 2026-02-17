
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.2em] bg-gold/5">
            {PERSONAL_INFO.title}
          </div>
          <h1 className="font-serif text-5xl lg:text-8xl font-bold leading-[1.1] mb-8 text-navy dark:text-white">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl lg:text-2xl text-navy/60 dark:text-white/60 mb-12 max-w-xl leading-relaxed font-light">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a 
              href={PERSONAL_INFO.resumeUrl}
              download
              className="px-10 py-5 bg-navy dark:bg-white text-white dark:text-navy rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-gold dark:hover:bg-gold dark:hover:text-white transition-all duration-500 shadow-2xl shadow-navy/20 dark:shadow-none transform hover:-translate-y-1"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a 
              href="#projects"
              className="px-10 py-5 border border-navy/10 dark:border-white/10 rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:border-gold hover:text-gold transition-all duration-500 transform hover:-translate-y-1"
            >
              Executive Portfolio
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Profile Photo - Hardlinked to IMG_6207.jpeg */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
          <div className="relative">
            {/* Elegant Architectural Rings */}
            <div className="absolute inset-0 -m-8 border border-gold/20 rounded-full scale-95 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute inset-0 -m-12 border border-navy/5 dark:border-white/5 rounded-full"></div>
            
            {/* The Headshot Circular Frame */}
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 lg:w-[540px] lg:h-[540px] rounded-full overflow-hidden border-[12px] border-white dark:border-navy shadow-[0_32px_80px_-16px_rgba(0,0,0,0.4)] bg-slate-100 dark:bg-slate-800">
              <img 
                src="/IMG_6207.jpeg" 
                alt="Valeriia Golotiuk"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s] ease-out"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>

            {/* Floating Experience Branding */}
            <div className="absolute top-10 -right-10 md:-right-24 z-20 bg-white/90 dark:bg-navy/90 backdrop-blur-2xl p-6 rounded-2xl shadow-2xl border border-gold/20 hidden lg:block scroll-reveal">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-navy/40 dark:text-white/40">Status</p>
                    <p className="text-navy dark:text-white font-serif font-bold italic text-lg">MBA Candidate</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy/[0.03] dark:from-white/[0.03] to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-full h-full bg-gold/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default Hero;
