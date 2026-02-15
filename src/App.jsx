import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Workflow from './components/Workflow';
import InstitutionalGateway from './components/InstitutionalGateway';
import LiquidityBridge from './components/LiquidityBridge';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-300 selection:bg-emerald-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Workflow />
        <InstitutionalGateway />
        <LiquidityBridge />
      </main>

      <footer className="py-12 bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight text-white">LITTERA<span className="text-emerald-accent">SYNC</span></div>
          <div className="text-sm text-slate-500">© 2026 Littera-Sync. Built on Canton Network. All rights reserved.</div>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
