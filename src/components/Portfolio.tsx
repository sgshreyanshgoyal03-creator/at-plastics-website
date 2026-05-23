import React from 'react';
import { motion } from 'framer-motion';

const cardColors = [
  'bg-indigo-500/5 dark:bg-indigo-900/10 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]',
  'bg-sky-500/5 dark:bg-sky-900/10 hover:border-sky-500/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]',
  'bg-teal-500/5 dark:bg-teal-900/10 hover:border-teal-500/30 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]',
  'bg-blue-500/5 dark:bg-blue-900/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]'
];

const Portfolio: React.FC = () => {
  const images = Array.from({ length: 9 }, (_, i) => `${import.meta.env.BASE_URL}Product Images/${i + 1}.png`);

  return (
    <section id="portfolio" className="relative py-16 md:py-24 px-4 md:px-6 bg-transparent">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-teal-400">Portfolio</span></h2>
        </motion.div>

        <div className="w-full">
          <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 md:px-8 pb-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {images.map((src, index) => {
              const theme = cardColors[index % cardColors.length];
              return (
                <div
                  key={index}
                  className={`group relative h-[300px] w-[240px] xs:h-[360px] xs:w-[280px] sm:h-[450px] sm:w-[350px] md:h-[500px] md:w-[400px] shrink-0 overflow-hidden rounded-2xl md:rounded-3xl glass-card p-3 md:p-4 transition-all duration-500 hover:scale-[1.02] snap-center ${theme}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-700 relative z-0"
                  />
                  <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-bold text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Precision Story {index + 1}</p>
                    <p className="text-slate-200 text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Injection Moulded</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
