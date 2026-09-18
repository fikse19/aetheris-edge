export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Inline Vector Logo */}
            <div className="h-10 w-10 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-400 font-extrabold text-xl shadow-lg shadow-cyan-500/10">
              <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 22h20L12 2z" />
                <path d="M12 6l-5 10h10l-5-10z" />
                <circle cx="12" cy="14" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-wider text-white">
              AETHERIS <span className="text-cyan-400">EDGE</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Data-Plane Active
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Patent Pending
          </span>
          <span className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-widest">
            Active Evaluation
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          The Edge Data-Plane Landscape
        </h1>
        <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
          Why legacy hardware and point solutions fail at the tactical edge—and how Aetheris unifies the stack into a single, compiled Rust container.
        </p>
      </section>

      {/* Competitive Feature Matrix Table */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          Competitive Feature Matrix
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="p-4">Capabilities & Performance</th>
                <th className="p-4">Legacy WAN Optimizers <br/><span className="text-slate-500 normal-case">(e.g., Riverbed, Silver Peak)</span></th>
                <th className="p-4">Modern SASE / SD-WAN <br/><span className="text-slate-500 normal-case">(e.g., Zscaler, Palo Alto)</span></th>
                <th className="p-4 text-cyan-400 bg-cyan-950/30">Aetheris Edge Data-Plane</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-4 font-semibold text-white">Bandwidth Optimization</td>
                <td className="p-4 text-slate-400">20%–35% <span className="text-xs block text-slate-500">(Heavy byte caching)</span></td>
                <td className="p-4 text-slate-400">0%–15% <span className="text-xs block text-slate-500">(Basic header compression)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">54.5%–56.9% <span className="text-xs block text-cyan-500/80">(Real-time delta-compression)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Degraded Link Voice Quality</td>
                <td className="p-4 text-slate-400">Unstable <span className="text-xs block text-slate-500">(MOS &lt; 2.8 under loss)</span></td>
                <td className="p-4 text-slate-400">Moderate <span className="text-xs block text-slate-500">(MOS ~3.2 with FEC overhead)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">High Fidelity <span className="text-xs block text-cyan-500/80">(MOS 3.44–3.79 under SATCOM delay)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Cryptographic Readiness</td>
                <td className="p-4 text-slate-400">Legacy <span className="text-xs block text-slate-500">(AES-256 / IPSec)</span></td>
                <td className="p-4 text-slate-400">Standard <span className="text-xs block text-slate-500">(TLS 1.3 / WireGuard)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">Post-Quantum Ready <span className="text-xs block text-cyan-500/80">(NIST FIPS 204)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Tenancy Architecture</td>
                <td className="p-4 text-slate-400">Appliance-per-tenant <span className="text-xs block text-slate-500">(High VM footprint)</span></td>
                <td className="p-4 text-slate-400">IP/VLAN Overlays <span className="text-xs block text-slate-500">(Complex routing)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">Native Header Isolation <span className="text-xs block text-cyan-500/80">(X-Tenant-ID)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Observability & Billing</td>
                <td className="p-4 text-slate-400">Proprietary SNMP <span className="text-xs block text-slate-500">(Siloed logs)</span></td>
                <td className="p-4 text-slate-400">Third-party agents <span className="text-xs block text-slate-500">(Datadog/Splunk)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">Native Open Standards <span className="text-xs block text-cyan-500/80">(Prometheus / Grafana)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Deployment Footprint</td>
                <td className="p-4 text-slate-400">Heavy <span className="text-xs block text-slate-500">(Multi-GB VMs or dedicated hardware)</span></td>
                <td className="p-4 text-slate-400">Cloud-dependent <span className="text-xs block text-slate-500">(Requires hairpin traffic)</span></td>
                <td className="p-4 font-bold text-cyan-400 bg-cyan-950/20">Ultra-Light <span className="text-xs block text-cyan-500/80">(Compiled Rust container, zero-dep)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pitch Callouts */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-400 pl-4">
          Key Market Differentiators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="text-cyan-400 font-bold text-lg mb-2">Consolidates the &quot;Franken-Stack&quot;</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Replaces three separate vendors—WAN optimization, edge security, and session border controllers—with a single, low-latency Rust binary.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="text-cyan-400 font-bold text-lg mb-2">Proactive Egress Savings</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automates real-time cloud transport cost reduction ($0.09/GB baseline) visible directly on executive telemetry dashboards.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="text-cyan-400 font-bold text-lg mb-2">Zero-Trust for SATCOM & Edge</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivers post-quantum encryption without forcing traffic hairpins through centralized cloud proxies or heavy gateway appliances.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Aetheris Edge Inc. All rights reserved. Live Verification Build.
      </footer>
    </main>
  );
}
