import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center relative">
        <div className="flex items-center gap-3 md:gap-4">
          <img src={`${import.meta.env.BASE_URL}Logo Image/logo.png`} alt="A.T. Plastics Industry Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
          <span className="font-bold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-primary">A.T. Plastics</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
          <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">Portfolio</a>
          <a href="#contact" className="glass-button px-5 py-2 rounded-full font-semibold">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-4 shadow-lg md:hidden z-40 border border-white/20"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-white/40 rounded-xl transition-colors">Services</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-white/40 rounded-xl transition-colors">Portfolio</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center font-semibold px-4 py-3 rounded-xl transition-colors shadow-md mt-2">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
