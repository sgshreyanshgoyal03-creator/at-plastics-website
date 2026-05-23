import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ThreeScene from './components/ThreeScene';
import Footer from './components/Footer';
import DevelopmentStages from './components/DevelopmentStages';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* 3D Background - Unfolding Animation */}
      <motion.div 
        initial={{ opacity: 0, clipPath: 'inset(50% 0 50% 0)', scale: 1.05 }}
        animate={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)', scale: 1 }}
        transition={{ duration: 2.5, ease: [0.77, 0, 0.17, 1] }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <ThreeScene />
      </motion.div>

      {/* Global Cinematic Vignette Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <DevelopmentStages />
          <Portfolio />
          <Clients />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
