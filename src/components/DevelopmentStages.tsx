import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Lightbulb, Layers, Wrench, CheckSquare, Package, LucideIcon } from 'lucide-react';

// ─── Static data ─────────────────────────────────────────────────────────────

const colorMap: Record<string, { text: string; bg: string; border: string; hover: string; shadow: string; bgSolid: string }> = {
  cyan:    { text: 'text-cyan-500',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    hover: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',    shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.6)]',    bgSolid: 'bg-cyan-500'    },
  blue:    { text: 'text-blue-500',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    hover: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',    shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.6)]',    bgSolid: 'bg-blue-500'    },
  indigo:  { text: 'text-indigo-500',  bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  hover: 'hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',  shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.6)]',   bgSolid: 'bg-indigo-500'  },
  violet:  { text: 'text-violet-500',  bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  hover: 'hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',  shadow: 'shadow-[0_0_15px_rgba(139,92,246,0.6)]',   bgSolid: 'bg-violet-500'  },
  fuchsia: { text: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20', hover: 'hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]', shadow: 'shadow-[0_0_15px_rgba(217,70,239,0.6)]', bgSolid: 'bg-fuchsia-500' },
};

const stages = [
  { id: '01', title: 'Concept & Design',     description: 'We collaborate to transform your idea into functional 3D CAD models, focusing on Design for Manufacturability (DFM) to ensure cost-efficiency.', icon: Lightbulb,    color: 'cyan'    },
  { id: '02', title: 'Prototyping',          description: 'Rapid prototyping using 3D printing or soft tooling to test form, fit, and function before committing to steel molds.',                           icon: Layers,      color: 'blue'    },
  { id: '03', title: 'Mold Fabrication',     description: 'Precision engineering and CNC machining of high-quality steel or aluminum molds tailored to your production volume needs.',                         icon: Wrench,      color: 'indigo'  },
  { id: '04', title: 'Testing & Validation', description: 'First Article Inspection (FAI) and rigorous testing of initial samples to guarantee the mold meets all exact specifications and tolerances.',      icon: CheckSquare, color: 'violet'  },
  { id: '05', title: 'Mass Production',      description: 'High-volume injection moulding with strict quality control, ensuring consistent perfection in every single plastic component.',                        icon: Package,     color: 'fuchsia' },
];

// ─── Sub-component ────────────────────────────────────────────────────────────
// Hooks must be called at the top level of a React component, never inside a
// .map() loop. Extracting each card into its own component solves this correctly.

interface StageCardProps {
  stage: typeof stages[0];
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
}

const StageCard: React.FC<StageCardProps> = ({ stage, index, total, smoothProgress }) => {
  const isEven = index % 2 === 0;
  const Icon = stage.icon as LucideIcon;
  const theme = colorMap[stage.color];

  const threshold = (index / (total - 1)) * 0.85;
  const startFade = Math.max(0, threshold - 0.15);

  const opacity  = useTransform(smoothProgress, [startFade, threshold], [0.3, 1]);
  const scale    = useTransform(smoothProgress, [startFade, threshold], [0.85, 1]);
  const dotScale = useTransform(smoothProgress, [startFade, threshold], [0, 1]);
  const x        = useTransform(smoothProgress, [startFade, threshold], [isEven ? -30 : 30, 0]);

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

      {/* Content card */}
      <motion.div style={{ opacity, scale, x }} className="w-full lg:w-5/12">
        <div className={`glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group transition-all duration-500 ${theme.bg} ${theme.hover}`}>
          {/* Watermark number */}
          <div className="absolute top-2 right-3 text-6xl md:text-8xl font-black text-slate-900/5 dark:text-white/5 select-none pointer-events-none">
            {stage.id}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border bg-white/50 dark:bg-slate-900/50 ${theme.border}`}>
              <Icon className={`w-5 h-5 ${theme.text}`} />
            </div>
            <h3 className={`text-base md:text-2xl font-bold text-slate-900 dark:text-white relative z-10 group-hover:${theme.text} transition-colors leading-tight`}>
              {stage.title}
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10 text-sm md:text-base">
            {stage.description}
          </p>
        </div>
      </motion.div>

      {/* Centre node — desktop only */}
      <div className="hidden lg:flex w-2/12 justify-center">
        <motion.div
          style={{ scale }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
        >
          <motion.div
            style={{ scale: dotScale, opacity: dotScale }}
            className={`w-4 h-4 rounded-full ${theme.bgSolid} ${theme.shadow}`}
          />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block w-5/12" />
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const DevelopmentStages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Product Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500">
              Workflow
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            A systematic, precision-driven approach from initial concept to high-volume manufacturing.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative pb-12 md:pb-24">
          {/* Track (background) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 dark:bg-slate-800/50 -translate-x-1/2" />
          {/* Lit line */}
          <motion.div
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-fuchsia-500 -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />

          <div className="space-y-6 md:space-y-24">
            {stages.map((stage, i) => (
              <StageCard key={stage.id} stage={stage} index={i} total={stages.length} smoothProgress={smoothProgress} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevelopmentStages;
