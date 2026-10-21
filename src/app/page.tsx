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
              <span className="text-[10px] text-slate-400 tracking-normal mt-1">Top Cover Group LLC</span>
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
            <span>STATUS: TECHNICAL EVALUATION - VALIDATED SYNTHETIC WORKLOADS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Intelligent Data Reduction for the Edge
          </h1>
          
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Aetheris Edge is a software-defined data-plane technology that reduces repeated structured data by transmitting changes and reconstructing original records at the receiving endpoint. Designed for bandwidth-constrained, latency-sensitive edge and gateway environments.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">High-Performance Rust Data Plane</h3>
              <p className="text-xs text-slate-400">Rust-based data-plane evaluation runtime with containerized deployment and x86-64 and ARM64 release artifacts. Resource requirements depend on workload and deployment configuration.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Authentication & Key Management</h3>
              <p className="text-xs text-slate-400">Prototype authentication and key-establishment capabilities include post-quantum cryptographic components. Security configuration and integration require deployment-specific validation.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Security & Observability</h3>
              <p className="text-xs text-slate-400">Prototype encryption capabilities and Prometheus-compatible operational metrics. Published data-reduction results do not represent a fully validated encrypted network deployment.</p>
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
            <h3 className="text-2xl font-bold text-white mt-1">Security Architecture & Validation Status</h3>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-semibold">Security Function</th>
                  <th className="p-4 font-semibold text-cyan-400">Prototype Configuration - Status</th>
                  <th className="p-4 font-semibold text-slate-400">Planned Development</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-4 font-medium text-white">Packet Authentication</td>
                  <td className="p-4 text-cyan-300">ML-DSA-65 (Prototype; validation pending)</td>
                  <td className="p-4 text-slate-400">ML-DSA-87 (Next-gen high security)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Payload Encryption</td>
                  <td className="p-4 text-cyan-300">AES-256-GCM (Prototype; validation pending)</td>
                  <td className="p-4 text-slate-400">Implementation hardening</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Key Exchange</td>
                  <td className="p-4 text-cyan-300">Hybrid X25519 + ML-KEM-768 (Prototype; validation pending)</td>
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
          <p className="text-xs text-slate-400 bg-slate-900/60 border border-slate-800 rounded-lg p-4">
            Security features describe prototype configurations. Published data-reduction
            results do not validate every cryptographic configuration. Feature compilation
            does not establish FIPS certification or production security accreditation.
            Partner-specific security and performance testing is required.
          </p>
        </section>

        {/* SECTION 5: BENCHMARKS */}
        <section id="benchmarks" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Validation Evidence</h2>
            <h3 className="text-2xl font-bold text-white mt-1">Measured Performance on Structured Synthetic Workloads</h3>
            <p className="text-xs text-slate-400 mt-2 bg-slate-900/60 p-4 rounded border border-slate-800">
              Results reflect controlled local Unix-socket evaluation workloads using structured telemetry frames.
              Byte reduction is measured at the framed application-data boundary, not across a complete encrypted
              network connection. Internal processing measurements exclude network transport, encryption overhead,
              and receiver-side reconstruction. Results are workload-dependent and require independent validation
              in each prospective deployment environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">45.60%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Framed-Byte Reduction</h4>
              <p className="text-xs text-slate-400">
                Measured reduction on the documented repetitive structured-data workload.
                Not a claim of equivalent network bandwidth savings.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">31,000 / 31,000</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Exact Reconstruction</h4>
              <p className="text-xs text-slate-400">
                Original records reconstructed exactly across the documented synthetic validation runs.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center space-y-2">
              <span className="text-3xl font-black text-cyan-400">99.98%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Internal Processing Within 100 Microseconds</h4>
              <p className="text-xs text-slate-400">
                30,995 of 31,000 measured frames completed internal processing within 100 microseconds
                in the recorded synthetic runs. Not an end-to-end latency measurement.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: EVALUATION */}
        <section id="evaluation" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Technical Evaluation</h2>
            <h3 className="text-2xl font-bold text-white mt-1">Structured Technical Evaluation Path</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 01</span>
              <h4 className="text-base font-bold text-white">Workload Discovery & Scope</h4>
              <p className="text-xs text-slate-400">Agree on eligible data types, interfaces, baseline measurements, acceptance criteria, and test boundaries.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 02</span>
              <h4 className="text-base font-bold text-white">Initial Technical Proof Point</h4>
              <p className="text-xs text-slate-400">Conduct a limited, mutually agreed technical assessment at no charge, using defined workloads and measurement boundaries.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400">STEP 03</span>
              <h4 className="text-base font-bold text-white">Evidence Review & Pilot Decision</h4>
              <p className="text-xs text-slate-400">Review reconstruction accuracy, measured data reduction, processing overhead, and operational fit. Any subsequent paid pilot is scoped and priced separately.</p>
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
                <p><span className="text-slate-500">Organization:</span> Top Cover Group LLC</p>
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
            <p className="font-bold text-slate-200">Top Cover Group LLC</p>
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
