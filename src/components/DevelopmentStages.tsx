import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Lightbulb, Layers, Wrench, CheckSquare, Package } from 'lucide-react';

const stages = [
  { id: '01', title: 'Concept & Design', description: 'We collaborate to transform your idea into functional 3D CAD models, focusing on Design for Manufacturability (DFM) to ensure cost-efficiency.', icon: Lightbulb },
  { id: '02', title: 'Prototyping', description: 'Rapid prototyping using 3D printing or soft tooling to test form, fit, and function before committing to steel molds.', icon: Layers },
  { id: '03', title: 'Mold Fabrication', description: 'Precision engineering and CNC machining of high-quality steel or aluminum molds tailored to your production volume needs.', icon: Wrench },
  { id: '04', title: 'Testing & Validation', description: 'First Article Inspection (FAI) and rigorous testing of initial samples to guarantee the mold meets all exact specifications and tolerances.', icon: CheckSquare },
  { id: '05', title: 'Mass Production', description: 'High-volume injection moulding with strict quality control, ensuring consistent perfection in every single plastic component.', icon: Package },
];

const DevelopmentStages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of the entire stages container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Apply a smooth spring physics to the progress so the line grows fluidly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Product Development <span className="text-primary">Workflow</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A systematic, precision-driven approach from initial concept to high-volume manufacturing.
          </p>
        </div>

        <div ref={containerRef} className="relative pb-24">
          {/* Vertical connecting line (Background) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>
          
          {/* Vertical connecting line (Foreground/Lit) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 origin-top"
          ></motion.div>

          <div className="space-y-12 md:space-y-24">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const Icon = stage.icon;
              
              // Calculate the exact progress threshold for this stage
              // 5 stages = thresholds at 0.0, 0.25, 0.5, 0.75, 1.0
              const threshold = (index / (stages.length - 1)) * 0.85;
              
              // The node/card lights up when smoothProgress crosses its threshold
              // We give it a small window (e.g. threshold - 0.1 to threshold) to fade in
              const startFade = Math.max(0, threshold - 0.15);
              const endFade = threshold;

              const opacity = useTransform(smoothProgress, [startFade, endFade], [0.3, 1]);
              const scale = useTransform(smoothProgress, [startFade, endFade], [0.8, 1]);
              const dotScale = useTransform(smoothProgress, [startFade, endFade], [0, 1]);
              const xOffset = isEven ? -30 : 30;
              const x = useTransform(smoothProgress, [startFade, endFade], [xOffset, 0]);

              return (
                <div key={stage.id} className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    style={{ opacity, scale, x }}
                    className="w-full lg:w-5/12"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-colors">
                      <div className="absolute top-0 right-0 text-6xl md:text-8xl font-black text-slate-900/5 -translate-y-4 translate-x-4">
                        {stage.id}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 relative z-10">{stage.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed relative z-10">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node for Desktop Timeline */}
                  <div className="hidden lg:flex w-2/12 justify-center relative">
                    <motion.div 
                      style={{ scale }}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center relative z-10 border-slate-200 bg-white"
                    >
                      <motion.div 
                        style={{ scale: dotScale, opacity: dotScale }}
                        className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(2,132,199,0.8)]"
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Empty div for spacing on the other side */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
