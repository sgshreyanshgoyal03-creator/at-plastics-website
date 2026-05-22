import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ThreeScene from './components/ThreeScene';
import Footer from './components/Footer';
import DevelopmentStages from './components/DevelopmentStages';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <DevelopmentStages />
          <Portfolio />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
