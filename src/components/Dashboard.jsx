import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart, Server, Cpu } from 'lucide-react';

const Dashboard = () => {
  const [data, setData] = useState({
    sequestration: 428.5,
    throughput: 12.4,
    nodes: 84
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        sequestration: +(prev.sequestration + (Math.random() * 0.5)).toFixed(2),
        throughput: +(12.4 + (Math.random() * 2 - 1)).toFixed(1),
        nodes: prev.nodes
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-obsidian-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Live Network Health</h2>
            <p className="text-slate-400 max-w-md">Real-time monitoring of carbon sequestration across the synchronized global waste-stream sub-ledger.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-emerald-accent text-sm font-mono">
            <span className="w-2 h-2 bg-emerald-accent rounded-full animate-pulse" />
            <span>LIVE STATUS: OPTIMAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-emerald-accent/10 rounded-lg">
                <BarChart className="w-6 h-6 text-emerald-accent" />
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase">Metric: CO2e</div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{data.sequestration} <span className="text-sm font-normal text-slate-400">mT</span></div>
            <div className="text-sm text-slate-400">Total Sequestration (24h)</div>
            <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-accent"
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-electric-blue/10 rounded-lg">
                <Activity className="w-6 h-6 text-electric-blue" />
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase">Latency: 12ms</div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{data.throughput} <span className="text-sm font-normal text-slate-400">tx/s</span></div>
            <div className="text-sm text-slate-400">Atomic Settlement Throughput</div>
            <div className="mt-6 flex space-x-1 items-end h-8">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-electric-blue/40"
                  animate={{ height: [10, Math.random() * 30 + 10, 10] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-white/10 rounded-lg">
                <Server className="w-6 h-6 text-slate-300" />
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase">Canton Participants</div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{data.nodes}</div>
            <div className="text-sm text-slate-400">Active Network Nodes</div>
            <div className="mt-6 flex items-center -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-obsidian-light bg-slate-800 flex items-center justify-center text-[10px] text-white">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-obsidian-light bg-emerald-accent flex items-center justify-center text-[10px] text-obsidian font-bold">
                +79
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
