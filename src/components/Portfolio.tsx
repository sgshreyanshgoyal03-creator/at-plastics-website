import React from 'react';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our <span className="text-accent">Portfolio</span></h2>
        </motion.div>

        <div className="w-full">
          <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 md:px-8 pb-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative h-[360px] w-[280px] sm:h-[450px] sm:w-[350px] md:h-[500px] md:w-[400px] shrink-0 overflow-hidden rounded-3xl glass-card p-4 transition-transform duration-500 hover:scale-[1.02] snap-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-slate-100 font-semibold text-lg drop-shadow-md">Precision Story {index + 1}</p>
                  <p className="text-slate-200 text-sm">Injection Moulded</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
