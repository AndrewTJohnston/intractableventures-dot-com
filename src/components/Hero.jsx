import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Visualization - Animated Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 Q 25 25 50 50 T 100 50"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="0.1"
            animate={{
              d: [
                "M0 50 Q 25 25 50 50 T 100 50",
                "M0 50 Q 25 75 50 50 T 100 50",
                "M0 50 Q 25 25 50 50 T 100 50",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#50C878" />
              <stop offset="100%" stopColor="#7DF9FF" />
            </linearGradient>
          </defs>
        </svg>
        {/* Particle nodes simulation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-accent/40 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-accent/10 border border-emerald-accent/20 text-emerald-accent text-xs font-bold uppercase tracking-wider mb-6">
            <Activity className="w-3 h-3" />
            <span>Canton Network Live Sub-Ledger</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Institutional <span className="text-gradient">Carbon</span> Accounting.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Synchronize waste-processing value chains with global capital markets using privacy-preserving Daml smart contracts on the Canton Network.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-emerald-accent hover:bg-emerald-accent/90 text-obsidian font-bold rounded-lg flex items-center space-x-2 transition-all shadow-lg shadow-emerald-accent/20">
              <span>Connect Participant Node</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-semibold transition-all">
              View Governance
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Abstract Synchronizer Node Visualization */}
            <motion.div
              className="absolute w-64 h-64 border-2 border-emerald-accent/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-80 h-80 border border-electric-blue/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-20 w-48 h-48 glass-panel flex items-center justify-center p-8 glow-emerald">
              <div className="text-center">
                <Zap className="w-12 h-12 text-emerald-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">ATOMIC</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Settlement</div>
              </div>
            </div>

            {/* Satellite data nodes */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 glass-panel flex items-center justify-center"
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{
                  transformOrigin: "center 160px",
                  top: "20px"
                }}
              >
                <div className="w-2 h-2 bg-electric-blue rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
