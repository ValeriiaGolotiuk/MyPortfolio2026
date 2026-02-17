
import React from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-navy/70 dark:text-alabaster/70 mb-10 leading-relaxed">
              I am always open to discussing strategic opportunities, venture partnerships, or consulting engagements. Feel free to reach out directly or connect via social platforms.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-navy/5 dark:bg-alabaster/5 group-hover:bg-gold/10 transition-colors">
                  <Mail className="text-navy dark:text-alabaster group-hover:text-gold" size={24} />
                </div>
                <span className="text-lg font-medium group-hover:text-gold transition-colors">{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-navy/5 dark:bg-alabaster/5 group-hover:bg-gold/10 transition-colors">
                  <Linkedin className="text-navy dark:text-alabaster group-hover:text-gold" size={24} />
                </div>
                <span className="text-lg font-medium group-hover:text-gold transition-colors">LinkedIn Profile</span>
              </a>
              <a href={PERSONAL_INFO.github} className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-navy/5 dark:bg-alabaster/5 group-hover:bg-gold/10 transition-colors">
                  <Github className="text-navy dark:text-alabaster group-hover:text-gold" size={24} />
                </div>
                <span className="text-lg font-medium group-hover:text-gold transition-colors">GitHub Repository</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 scroll-reveal delay-200">
            <form className="bg-alabaster dark:bg-navy p-8 md:p-12 rounded-2xl shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-navy/50 dark:text-alabaster/50">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-navy-dark border border-navy/10 dark:border-alabaster/10 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-navy/50 dark:text-alabaster/50">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white dark:bg-navy-dark border border-navy/10 dark:border-alabaster/10 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-navy/50 dark:text-alabaster/50">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Inquiry regarding..."
                  className="w-full bg-white dark:bg-navy-dark border border-navy/10 dark:border-alabaster/10 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-navy/50 dark:text-alabaster/50">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="How can I help you?"
                  className="w-full bg-white dark:bg-navy-dark border border-navy/10 dark:border-alabaster/10 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-navy dark:bg-alabaster text-white dark:text-navy py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gold dark:hover:bg-gold transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
