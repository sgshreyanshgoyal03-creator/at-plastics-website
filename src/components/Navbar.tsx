import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={`${import.meta.env.BASE_URL}Logo Image/logo.png`} alt="A.T. Plastics Industry Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-primary">A.T. Plastics Industry</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
          <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">Portfolio</a>
          <a href="#contact" className="glass-button px-5 py-2 rounded-full font-semibold">Contact Us</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
