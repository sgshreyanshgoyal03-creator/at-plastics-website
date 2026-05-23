import React from 'react';
import { motion } from 'framer-motion';
import { Factory, PenTool, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-primary">Services</span></h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Delivering precision, durability, and innovation for over two decades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 md:p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden bg-fuchsia-500/5 dark:bg-fuchsia-900/10 hover:border-fuchsia-500/30 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]"
          >
            <Factory className="w-12 h-12 text-fuchsia-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Injection Plastic Moulding</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              High-volume, precision manufacturing of plastic parts. We utilize state-of-the-art machinery to ensure consistent quality and exact tolerances for every batch.
            </p>
            <ul className="space-y-3">
              {['High-volume production', 'Precision tolerances', 'Quality assurance', 'Material selection expertise'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-6 md:p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden bg-emerald-500/5 dark:bg-emerald-900/10 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <PenTool className="w-12 h-12 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Product Development</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              From concept to prototype to final product. Our engineering team collaborates with you to design and refine products optimized for manufacturability.
            </p>
            <ul className="space-y-3">
              {['Concept design', '3D Prototyping', 'Mold design', 'Design for Manufacturability (DFM)'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
