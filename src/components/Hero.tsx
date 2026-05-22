import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 tracking-wide uppercase">Since 1995</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter mb-6"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500">Precision.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#4f46e5] to-accent pb-2">Perfection.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500">Plastics.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed font-light"
          >
            Elevating manufacturing standards with advanced injection plastic moulding and innovative product development services.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#portfolio" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full overflow-hidden transition-transform active:scale-95 w-full sm:w-auto">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-button rounded-full font-semibold transition-transform active:scale-95 w-full sm:w-auto">
              <Box className="w-5 h-5" />
              <span>Our Services</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content - Abstract visual representation overlaying 3D scene */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block relative h-[600px] w-full pointer-events-none"
        >
          {/* We rely on the 3D scene from App.tsx to provide the visuals here, 
              but we add some floating glass panels to enhance the depth */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-64 h-80 glass-card rounded-3xl border-white/20 p-6 flex flex-col justify-between transform rotate-6"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Box className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-xl mb-1">Moulding</p>
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-10 w-56 h-64 glass-card rounded-3xl border-slate-200 p-6 flex flex-col justify-end transform -rotate-6"
          >
             <p className="text-slate-600 font-medium text-sm mb-2">Innovation Focus</p>
             <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-slate-900">R&amp;D</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
