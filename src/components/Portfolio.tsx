import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Portfolio: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const images = Array.from({ length: 9 }, (_, i) => `${import.meta.env.BASE_URL}Product Images/${i + 1}.png`);

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our <span className="text-accent">Portfolio</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Scroll down to explore our premium precision parts.
          </p>
        </motion.div>

        <div className="w-full flex justify-start items-center">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] shrink-0 overflow-hidden rounded-3xl glass-card p-4 transition-transform duration-500 hover:scale-[1.02]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
