'use client';

import React, { useState } from 'react';

export default function Home() {
  const [monthlyEgressTB, setMonthlyEgressTB] = useState<number>(100);
  const costPerGB = 0.09;
  const compressionRatio = 0.55;

  const currentCost = monthlyEgressTB * 1024 * costPerGB;
  const optimizedCost = currentCost * (1 - compressionRatio);
  const savings = currentCost - optimizedCost;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 17 22 12" />
            </svg>
            <span className="font-bold text-xl tracking-wider text-slate-100">AETHERIS<span className="text-cyan-400">EDGE</span></span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#architecture" className="hover:text-cyan-400 transition">Architecture</a>
            <a href="#benchmarks" className="hover:text-cyan-400 transition">Benchmarks</a>
            <a href="#calculator" className="hover:text-cyan-400 transition">Calculator</a>
            <a href="#contact" className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-md font-semibold hover:bg-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-20">
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          <div className="inline-block px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-mono uppercase tracking-widest">
            Tactical Post-Quantum Edge Data-Plane
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Secure, Workload-Aware Data Plane for Constrained Networks
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Combining a Go control plane with a Rust WASM data plane to optimize satellite (SATCOM) and remote tactical link telemetry.
          </p>
        </section>

        <section id="benchmarks" className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
            <div className="text-4xl font-extrabold text-cyan-400">~88%</div>
            <div className="text-sm text-slate-400 uppercase font-mono">Peak Payload Reduction</div>
            <p className="text-xs text-slate-500">Observed on structured, highly repetitive synthetic telemetry workloads.</p>
          </div>
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
            <div className="text-4xl font-extrabold text-cyan-400">~240 µs</div>
            <div className="text-sm text-slate-400 uppercase font-mono">Micro-Kernel Overhead</div>
            <p className="text-xs text-slate-500">Execution time from ingress to egress dispatch under 100-millicore limits.</p>
          </div>
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
            <div className="text-4xl font-extrabold text-cyan-400">FIPS 204</div>
            <div className="text-sm text-slate-400 uppercase font-mono">ML-DSA-44 Authentication</div>
            <p className="text-xs text-slate-500">NIST post-quantum signatures with 100% tamper detection in lab tests.</p>
          </div>
        </section>

        <section id="architecture" className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-100">End-to-End Pipeline Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Go Control Plane</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Lightweight orchestration service managing telemetry aggregation, dynamic key updates, and configuration sync across distributed nodes.
              </p>
            </div>
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Rust WASM Data Plane</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                High-performance runtime for inline delta compression, AES-256-GCM encryption, and WASM/Containerized deployment at the edge.
              </p>
            </div>
          </div>
        </section>

        <section id="calculator" className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl max-w-3xl mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-white">Egress Savings Calculator</h2>
            <p className="text-sm text-slate-400">Estimate bandwidth savings across constrained SATCOM & tactical links.</p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-300">Monthly Egress Traffic:</span>
              <span className="text-cyan-400 font-mono font-bold">{monthlyEgressTB} TB</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="1000" 
              step="10" 
              value={monthlyEgressTB} 
              onChange={(e) => setMonthlyEgressTB(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-center">
            <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-lg">
              <div className="text-xs text-slate-500 uppercase font-mono mb-1">Standard Cost</div>
              <div className="text-xl font-bold text-slate-300">${currentCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
            <div className="p-4 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
              <div className="text-xs text-cyan-400 uppercase font-mono mb-1">Monthly Savings</div>
              <div className="text-xl font-bold text-cyan-400">${savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="p-8 bg-slate-900/80 border border-slate-800 rounded-xl max-w-xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Initiate Joint Evaluation</h2>
            <p className="text-sm text-slate-400">Schedule a 30-minute technical review and live prototype demonstration.</p>
          </div>
          <div className="text-center pt-2">
            <a 
              href="mailto:nathan@topcovergroup.com" 
              className="inline-block px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition"
            >
              Contact nathan@topcovergroup.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
