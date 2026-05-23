import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: '25+ Years Experience',
    description: 'Decades of expertise in delivering top-tier plastic moulding solutions for diverse industries.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: 'Uncompromising Quality',
    description: 'Rigorous quality assurance protocols ensuring every product meets international standards.'
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-500" />,
    title: 'Innovative Technology',
    description: 'State-of-the-art machinery and advanced techniques for precision manufacturing.'
  },
  {
    icon: <Users className="w-10 h-10 text-emerald-500" />,
    title: 'Client-Centric Approach',
    description: 'Dedicated support and tailored solutions designed to meet your specific project requirements.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Why <span className="text-primary">Choose Us?</span></h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            We combine experience, technology, and dedication to deliver unparalleled results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-5 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl inline-block">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
