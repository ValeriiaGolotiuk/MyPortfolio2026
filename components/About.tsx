
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Strategic Narrative</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="scroll-reveal delay-100">
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold italic">The Why</h3>
            <p className="text-lg text-navy/70 dark:text-alabaster/70 leading-relaxed">
              I believe that business is the most powerful platform for change. My drive stems from the challenge of translating complex market data into actionable growth levers that benefit both stakeholders and the broader ecosystem.
            </p>
          </div>
          <div className="scroll-reveal delay-200">
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold italic">The How</h3>
            <p className="text-lg text-navy/70 dark:text-alabaster/70 leading-relaxed">
              Applying first-principles thinking combined with MBA-level analytical rigor. Whether it's a market-entry strategy or a turnaround operation, I focus on identifying the bottleneck and deploying capital and talent where it creates the highest ROI.
            </p>
          </div>
          <div className="scroll-reveal delay-300">
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold italic">The Result</h3>
            <p className="text-lg text-navy/70 dark:text-alabaster/70 leading-relaxed">
              Track record of measurable impact: millions in synergy savings, double-digit EBITDA growth, and successful venture funding rounds. I measure success by long-term value creation rather than short-term gains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
