
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-navy/10 dark:border-alabaster/10 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-xl font-bold tracking-tight">
          V<span className="text-gold">.</span>G
        </div>
        
        <div className="text-sm text-navy/50 dark:text-alabaster/50">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </div>

        <div className="flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#contact" className="hover:text-gold transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
