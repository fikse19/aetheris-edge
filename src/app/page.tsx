"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* PERSISTENT HEADER WITH NAVIGATION & CONTACT */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* INLINE VECTOR LOGO EMBLEM */}
            <div className="h-10 w-10 relative flex-shrink-0 rounded-md bg-slate-950 border border-cyan-500/40 flex items-center justify-center p-1.5 shadow-md shadow-cyan-500/10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="42" ry="18" stroke="currentColor" strokeWidth="4" className="text-cyan-200/80" transform="rotate(-25 50 50)" />
                <path d="M50 12 L18 82 H36 L50 48 L64 82 H82 Z" fill="currentColor" />
                <path d="M50 28 L32 72 H42 L50 54 L58 72 H68 Z" fill="#020617" />
                <path d="M50 38 L38 68 H62 Z" fill="currentColor" className="text-cyan-300" />
                <path d="M50 48 L44 68 H56 Z" fill="#020617" />
                <circle cx="50" cy="58" r="4" fill="currentColor" className="text-cyan-200" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-cyan-400 text-base leading-none">AETHERIS EDGE</span>
              <span className="text-[10px] text-slate-400 tracking-normal mt-1">Top Cover Group</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1 lg:space-x-2 bg-slate-950/60 p-1 rounded-lg border border-slate-800 text-xs">
            {[
              { id: "overview", label: "Overview" },
              { id: "landscape", label: "Landscape" },
              { id: "architecture", label: "Architecture" },
              { id: "cybersecurity", label: "Cybersecurity" },
              { id: "benchmarks", label: "Benchmarks" },
              { id: "evaluation", label: "Evaluation" },
              { id: "contact", label: "Contact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="mailto:nathan@topcovergroup.com"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-md transition-all shadow-lg shadow-cyan-500/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* SECTION 1: OVERVIEW & STATUS */}
        <section id="overview" className="space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 bg-cyan-950/50 border border-cyan-800/50 rounded-full px-3 py-1 text-xs text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>STATUS: ACTIVE EVALUATION — Working Prototype Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            A Secure, Workload-Aware Edge Data Plane for Constrained Networks
          </h1>
          
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Aetheris Edge combines workload-aware data optimization, source-authenticated transport, and lightweight edge execution for environments where bandwidth, latency, and compute resources are constrained.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">High-Performance Rust Data Plane</h3>
              <p className="text-xs text-slate-400">High-performance Rust data-plane runtime designed for a low memory footprint (&lt;0.2 CPU cores / &lt;64 MB RAM).</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Packet Authentication</h3>
              <p className="text-xs text-slate-400">Source authentication powered by Hybrid X25519 + ML-KEM-768 & ML-DSA-65 (Implemented).</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Payload Confidentiality & Observability</h3>
              <p className="text-xs text-slate-400">In-flight AES-256-GCM encryption with Prometheus / Grafana telemetry pipeline integration.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: MARKET LANDSCAPE */}
        <section id="landscape" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Market Landscape</h2>
            <h3 className="text-2xl font-bold text-white mt-1">The Edge Data-Plane Landscape</h3>
            <p className="text-sm text-slate-400 mt-1">Why legacy hardware and point solutions fail at the tactical edge—and how Aetheris unifies the stack.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <h4 className="text-slate-200 font-semibold text-base">Legacy Hardware</h4>
              <p className="text-xs text-red-400 font-medium">Bandwidth-Heavy & Rigid</p>
              <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside pt-2">
                <li>High power/thermal load</li>
                <li>Massive cloud backhaul</li>
                <li>Fixed capacity scaling</li>
              </ul>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/80 p-6 rounded-xl space-y-3">
              <h4 className="text-slate-200 font-semibold text-base">Point Solutions</h4>
              <p className="text-xs text-yellow-400 font-medium">Fragmented & Complex</p>
              <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside pt-2">
                <li>Complex orchestration</li>
                <li>Uncoordinated overhead</li>
                <li>Security vulnerabilities</li>
              </ul>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-800/50 p-6 rounded-xl space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-bl">RECOMMENDED</div>
              <h4 className="text-white font-semibold text-base">Aetheris Edge</h4>
              <p className="text-xs text-cyan-400 font-medium">Unified Tactical Data Plane</p>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside pt-2">
                <li>Low-footprint Rust runtime</li>
                <li>Post-quantum security</li>
                <li>Inline delta compression</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: ARCHITECTURE */}
        <section id="architecture" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Architecture</h2>
            <h3 className="text-2xl font-bold text-white mt-1">End-to-End Edge Data Pipeline</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Ingress & Classification", desc: "Inspects incoming telemetry, C2, or streaming packets." },
              { num: "02", title: "Workload-Aware Processing", desc: "Applies inline delta compression on eligible repetitive streams." },
              { num: "03", title: "Authenticated Transport", desc: "Applies configured authentication and encryption before egress." },
              { num: "04", title: "Receive & Restore", desc: "Verifies authentication, decrypts payload, and reconstructs optimized data." }
            ].map((step) => (
              <div key={step.num} className="bg-slate-900/40 border border-slate-800 p-5 rounded-lg space-y-2">
                <span className="text-2xl font-black text-cyan-400">{step.num}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CYBERSECURITY */}
        <section id="cybersecurity" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Cybersecurity</h2>
            <h3 className="text-2xl font-bold text-white mt-1">Cryptographic Architecture & Progression</h3>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-semibold">Security Function</th>
                  <th className="p-4 font-semibold text-cyan-400">Current Prototype (Implemented)</th>
                  <th className="p-4 font-semibold text-slate-400">Target / Roadmap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-4 font-medium text-white">Packet Authentication</td>
                  <td className="p-4 text-cyan-300">ML-DSA-65 (Implemented)</td>
                  <td className="p-4 text-slate-400">ML-DSA-87 (Next-gen high security)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Payload Encryption</td>
                  <td className="p-4 text-cyan-300">AES-256-GCM (Implemented)</td>
                  <td className="p-4 text-slate-400">Implementation hardening</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Key Exchange</td>
                  <td className="p-4 text-cyan-300">Hybrid X25519 + ML-KEM-768 (Implemented)</td>
                  <td className="p-4 text-slate-400">Pure ML-KEM-1024</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Hardware Binding</td>
                  <td className="p-4 text-cyan-300">Host Identity & Software Protection</td>
                  <td className="p-4 text-slate-400">TPM 2.0 Key Sealing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: BENCHMARKS */}
        <section id="benchmarks" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Benchmark Harness</h2>
            <h3 className="text-2xl font-bold text-white mt-1">Laboratory Test Results & Methodology</h3>
            <p className="text-xs text-slate-500 mt-2 italic bg-slate-900/60 p-3 rounded border border-slate-800">
              [ENVIRONMENT DISCLAIMER NOTE] Metrics recorded within a local synthetic test harness under a configured 100-millicore CPU limit and simulated SATCOM latency profiles. Results reflect controlled testing and require independent customer validation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">&lt;0.5 ms</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">p99 Latency Goal</h4>
              <p className="text-xs text-slate-400">Observed execution time from test-harness ingress to egress dispatch for selected telemetry packet batches.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">54.5%–56.9%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Net Wire Savings Baseline</h4>
              <p className="text-xs text-slate-400">Measured across structured telemetry and state-sync testbed workloads before cryptographic transport.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">100%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tamper Verification</h4>
              <p className="text-xs text-slate-400">Authentication checks identified all deliberately modified packets within the defined synthetic test set.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: EVALUATION */}
        <section id="evaluation" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Technical Evaluation</h2>
            <h3 className="text-2xl font-bold text-white mt-1">3-Step Technical Evaluation Path</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 01</span>
              <h4 className="text-base font-bold text-white">Discovery & Staging</h4>
              <p className="text-xs text-slate-400">Define target workload, baseline network metrics, and deploy sidecar in the testbed environment.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 02</span>
              <h4 className="text-base font-bold text-white">Impairment Testing</h4>
              <p className="text-xs text-slate-400">Conduct controlled impairment testing under simulated latency, jitter, and packet loss.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 03</span>
              <h4 className="text-base font-bold text-white">Reporting & Review</h4>
              <p className="text-xs text-slate-400">Deliver joint evaluation report, A/B payload metrics, and production recommendations.</p>
            </div>
          </div>
        </section>

        {/* DEDICATED CONTACT SECTION */}
        <section id="contact" className="border-t border-slate-800/80 pt-12 space-y-8">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Initiate Joint Evaluation</h2>
            <h3 className="text-2xl font-bold text-white mt-1">Schedule a Technical Review</h3>
            <p className="text-sm text-slate-400 mt-1">Schedule a 30-minute technical review, live prototype demonstration, or request our technical diligence package under mutual NDA.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-4">
              <h4 className="text-base font-bold text-white">Direct Channels</h4>
              <div className="space-y-2 text-xs text-slate-300">
                <p><span className="text-slate-500">Email:</span> <a href="mailto:nathan@topcovergroup.com" className="text-cyan-400 hover:underline">nathan@topcovergroup.com</a></p>
                <p><span className="text-slate-500">Website:</span> <a href="https://www.aetheris-edge.com" className="text-cyan-400 hover:underline">www.aetheris-edge.com</a></p>
                <p><span className="text-slate-500">Organization:</span> Top Cover Group, Inc.</p>
              </div>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-800/50 p-6 rounded-xl space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white">Technical Diligence Package</h4>
                <p className="text-xs text-slate-400 mt-1">Detailed architecture specifications, implementation details, reproducible test methodologies, and test artifacts available under mutual NDA.</p>
              </div>
              <a
                href="mailto:nathan@topcovergroup.com?subject=Aetheris%20Edge%20Technical%20Diligence%20Request"
                className="inline-block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-md transition-all shadow-lg shadow-cyan-500/20 mt-2"
              >
                Request Diligence Package
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 px-6 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <div>
            <p className="font-bold text-slate-200">Top Cover Group, Inc.</p>
            <p className="text-slate-500">Aetheris Edge Platform — Patent Pending</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:nathan@topcovergroup.com" className="hover:text-cyan-400 transition-colors">
              nathan@topcovergroup.com
            </a>
            <span>•</span>
            <span>Detailed Diligence Packages Available Under NDA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
