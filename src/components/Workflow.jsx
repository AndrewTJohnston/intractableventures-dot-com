import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Code2, Coins, ChevronRight } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      title: "Waste Input",
      desc: "Raw processing data captured at source from waste management facilities.",
      icon: <Recycle className="w-8 h-8 text-emerald-accent" />,
      color: "emerald"
    },
    {
      title: "Daml Logic",
      desc: "Privacy-preserving verification logic confirms carbon sequestration without exposing logistics.",
      icon: <Code2 className="w-8 h-8 text-electric-blue" />,
      color: "blue"
    },
    {
      title: "Carbon Unit",
      desc: "Atomic minting of high-integrity carbon assets directly onto the Canton Global Synchronizer.",
      icon: <Coins className="w-8 h-8 text-emerald-accent" />,
      color: "emerald"
    }
  ];

  return (
    <section className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Daml Atomic Workflow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Our platform converts physical waste processing into digital assets using a zero-trust architecture.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Connector line (desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex-1 w-full max-w-sm"
            >
              <div className="glass-panel p-8 flex flex-col items-center text-center group hover:border-emerald-accent/50 transition-colors">
                <div className={`p-6 rounded-2xl bg-white/5 mb-8 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8">
                    <ChevronRight className="w-6 h-6 text-slate-600 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
