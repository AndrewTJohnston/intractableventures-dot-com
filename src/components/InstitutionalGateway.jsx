import React from 'react';
import { motion } from 'framer-motion';
import { Network, Lock, Fingerprint, ShieldCheck } from 'lucide-react';

const InstitutionalGateway = () => {
  return (
    <section className="py-24 bg-obsidian-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-accent/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Institutional Gateway</h2>
          <p className="text-lg text-slate-400 mb-10">
            Securely connect your Canton Participant Node to access high-integrity carbon units. Our zero-knowledge infrastructure ensures your logistics data remains strictly confidential while proving the provenance of every credit.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-emerald-accent/10 rounded-lg">
                <Lock className="w-5 h-5 text-emerald-accent" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Privacy-Preserving Provenance</h4>
                <p className="text-sm text-slate-500">Verify waste data without exposing sensitive corporate logistics.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-electric-blue/10 rounded-lg">
                <Network className="w-5 h-5 text-electric-blue" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Canton Synchronizer Integration</h4>
                <p className="text-sm text-slate-500">Seamlessly connect to the Global Synchronizer for atomic settlements.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 relative"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Fingerprint className="w-8 h-8 text-emerald-accent" />
            <h3 className="text-xl font-bold text-white">Node Authentication</h3>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Participant ID</label>
              <input
                type="text"
                placeholder="canton-node-xxxx-xxxx"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Credentials</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-accent transition-colors"
              />
            </div>
            <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold flex items-center justify-center space-x-2 transition-all">
              <ShieldCheck className="w-5 h-5 text-emerald-accent" />
              <span>Initialize Connection</span>
            </button>
            <div className="text-center text-xs text-slate-600">
              Authorized personnel only. All access is logged on the sub-ledger.
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalGateway;
