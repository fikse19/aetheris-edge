import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  "use client";

  import { useState } from "react";

  export default function Home() {
    const [monthlyEgressTB, setMonthlyEgressTB] = useState<number>(100);
    const costPerGB = 0.09;
    const compressionRatio = 0.55;

    const totalBytesGB = monthlyEgressTB * 1024;
    const rawMonthlyCost = totalBytesGB * costPerGB;
    const savedMonthly = rawMonthlyCost * compressionRatio;
    const savedAnnual = savedMonthly * 12;

    return (
      <main className="min-h-screen bg-slate-950 font-sans text-white antialiased">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="mb-6 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-400">
            Verified Performance • NIST FIPS 204 Ready
          </span>
          <h1 className="mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
            The Post-Quantum Edge Data-Plane for Tactical &amp; SATCOM Networks
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-400">
            Cut cloud egress fees by <strong className="font-semibold text-blue-400">55%</strong> while securing live voice and telemetry over severely degraded satellite links. Built with Rust, verified with Prometheus &amp; Grafana.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="border-b border-slate-800 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0">
              <div className="text-3xl font-extrabold text-blue-400">54.5% - 56.9%</div>
              <div className="mt-1 text-sm text-slate-400">Real-Time Delta Compression</div>
            </div>
            <div className="border-b border-slate-800 pb-4 text-center sm:border-b-0 sm:pb-0 md:border-r">
              <div className="text-3xl font-extrabold text-emerald-400">MOS 3.44+</div>
              <div className="mt-1 text-sm text-slate-400">Voice Quality over Impaired SATCOM</div>
            </div>
            <div className="border-b border-slate-800 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0">
              <div className="text-3xl font-extrabold text-purple-400">FIPS 204</div>
              <div className="mt-1 text-sm text-slate-400">Post-Quantum Cryptographic Integrity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-amber-400">Multi-Tenant</div>
              <div className="mt-1 text-sm text-slate-400">Prometheus &amp; Grafana Telemetry</div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800/80 bg-slate-900/30 px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
            <h2 className="mb-2 text-center text-3xl font-bold text-white">Interactive Egress Savings Calculator</h2>
            <p className="mb-8 text-center text-slate-400">See how much Aetheris saves your cloud infrastructure based on verified 55% edge delta-compression.</p>

            <div className="mb-8">
              <div className="mb-3 flex justify-between font-medium text-slate-300">
                <span>Monthly Cloud Egress Traffic:</span>
                <span className="font-bold text-blue-400">{monthlyEgressTB} TB / Month</span>
              </div>
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={monthlyEgressTB}
                onChange={(event) => setMonthlyEgressTB(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500"
                aria-label="Monthly cloud egress traffic in terabytes"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 rounded-xl border border-slate-800 bg-slate-900 p-6 md:grid-cols-2">
              <div>
                <div className="text-sm text-slate-400">Estimated Monthly Savings</div>
                <div className="text-3xl font-extrabold text-emerald-400">${savedMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                <div className="mt-1 text-xs text-slate-500">Based on $0.09/GB baseline cloud egress fee</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Estimated Annual Savings</div>
                <div className="text-3xl font-extrabold text-emerald-400">${savedAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                <div className="mt-1 text-xs text-slate-500">Direct bottom-line infrastructure cost reduction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
    </div>
  );
}
