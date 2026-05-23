import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const clients = [
  {
    name: 'Shakti Mat NZ',
    logo: `${import.meta.env.BASE_URL}Shakti Mat Logo/Shakti Mat Logo.jpg`,
    fallbackText: 'Shakti Mat NZ',
    scaleClass: 'scale-[1.3]',
    bgClass: 'bg-emerald-500/5 dark:bg-emerald-900/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30'
  },
  {
    name: 'FullDome Pro USA',
    logo: 'https://fulldome.pro/wp-content/uploads/2020/02/Logo-Fulldome.pro-b-1.png',
    fallbackText: 'FullDome Pro USA',
    scaleClass: 'scale-100',
    bgClass: 'bg-orange-500/5 dark:bg-orange-900/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500/30'
  },
  {
    name: 'Many Local Clients',
    logo: '',
    fallbackText: 'Many Local Clients',
    isTextOnly: true,
    bgClass: 'bg-sky-500/5 dark:bg-sky-900/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:border-sky-500/30'
  }
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-primary">Happy Clients</span></h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Trusted by innovative brands and local businesses worldwide.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-5"
            >
              <div className={`glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl flex items-center justify-center w-[160px] h-[90px] sm:w-[200px] sm:h-[100px] md:w-[240px] md:h-[120px] transition-all duration-500 group ${client.bgClass}`}>
                {client.isTextOnly ? (
                  <div className="p-4 bg-sky-500/10 rounded-2xl group-hover:bg-sky-500/20 transition-colors">
                    <Users className="w-10 h-10 text-sky-500" />
                  </div>
                ) : (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
                    className={`max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity ${client.scaleClass || ''}`}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                )}
                {!client.isTextOnly && (
                  <span className="font-bold text-xl text-slate-800 dark:text-slate-100 hidden">{client.fallbackText}</span>
                )}
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 tracking-wide">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
