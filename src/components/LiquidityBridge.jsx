import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Landmark, Globe2 } from 'lucide-react';

const LiquidityBridge = () => {
  const providers = [
    { name: "Goldman Sachs", status: "Connected", volume: "$2.4B" },
    { name: "J.P. Morgan", status: "Active", volume: "$1.8B" },
    { name: "BlackRock", status: "Provisioned", volume: "$5.1B" },
    { name: "HSBC", status: "Connected", volume: "$900M" },
    { name: "UBS", status: "Active", volume: "$1.2B" },
    { name: "BNP Paribas", status: "Provisioned", volume: "$750M" },
  ];

  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">The Global Liquidity Bridge</h2>
            <p className="text-slate-400">Tapping into the Canton Network of Networks to connect waste-carbon units directly to institutional capital markets.</p>
          </div>
          <div className="flex space-x-4">
            <div className="glass-panel px-6 py-4 flex items-center space-x-3">
              <Landmark className="w-5 h-5 text-electric-blue" />
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Open Liquidity</div>
                <div className="text-white font-mono">$14.2B</div>
              </div>
            </div>
            <div className="glass-panel px-6 py-4 flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-emerald-accent" />
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Yield (Avg)</div>
                <div className="text-white font-mono">5.4%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Ticker Animation */}
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...providers, ...providers].map((provider, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 glass-panel p-6 border-l-2 border-l-emerald-accent/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold">{provider.name}</span>
                  <Globe2 className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Node Status</span>
                  <span className="text-emerald-accent font-mono">{provider.status}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-slate-500">Committed</span>
                  <span className="text-white font-mono">{provider.volume}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
        </div>

        <div className="mt-20 glass-panel p-12 text-center border-dashed border-2 border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 italic">"A Network of Networks Advantage"</h3>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8">
            Littera-Sync is not a silo. We are a sub-ledger on the Canton Network, allowing seamless interoperability with other tokenized assets like Digital Green Bonds and Institutional CDCs.
          </p>
          <div className="flex justify-center space-x-8 opacity-50 grayscale">
            {/* Simulated logo placements */}
            <div className="text-2xl font-black tracking-tighter text-white italic">CANTON</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">HYPERLEDGER</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">DAML</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidityBridge;
