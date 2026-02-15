import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-accent to-electric-blue rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-obsidian" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">LITTERA<span className="text-emerald-accent">SYNC</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="text-slate-400 hover:text-emerald-accent transition-colors">Provenance</a>
          <a href="#" className="text-slate-400 hover:text-emerald-accent transition-colors">Synchronizer</a>
          <a href="#" className="text-slate-400 hover:text-emerald-accent transition-colors">Liquidity</a>
          <a href="#" className="text-slate-400 hover:text-emerald-accent transition-colors">Resources</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Contact Sales
          </button>
          <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold text-white transition-all flex items-center space-x-2">
            <Shield className="w-4 h-4 text-electric-blue" />
            <span>Node Portal</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
