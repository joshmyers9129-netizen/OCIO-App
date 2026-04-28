"use client";

// Day 13 visuals: policy to live portfolio workflow and overlay plumbing

export function Day13PolicyToLivePortfolio() {
  const steps = [
    { label: "Recommendation Approved", leakage: "Timing delay: market moves between approval and execution" },
    { label: "Mandate Setup", leakage: "Documentation delay: legal, custodian, manager onboarding" },
    { label: "Termination / Funding Instructions", leakage: "Cash drag: assets sit uninvested during transition" },
    { label: "Transition Execution", leakage: "Trading cost: market impact, commissions, crossing risk" },
    { label: "Cash Deployment", leakage: "Benchmark mismatch: target not fully funded yet" },
    { label: "Overlay Setup", leakage: "Settlement risk: collateral not in place, futures gap" },
    { label: "Benchmark Updates", leakage: "Attribution noise: benchmark lag creates phantom tracking error" },
    { label: "Reporting Go-Live", leakage: "Data error: incorrect benchmark or sleeve allocation" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-[#2294BD] text-white text-[10px] font-bold flex items-center justify-center">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 h-3 bg-[#2294BD]/30 mt-0.5" />}
            </div>
            <div className="flex-1 rounded-lg border border-[#2294BD]/20 bg-white px-2 py-1.5 mb-1">
              <div className="font-bold text-[12px] text-[#000] mb-0.5">{s.label}</div>
              <div className="flex gap-1 items-start">
                <span className="text-[#D9532B] font-bold flex-shrink-0 text-[10px] mt-0.5">Leakage:</span>
                <span className="text-[11px] text-[#D9532B]">{s.leakage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg bg-[#E8F6EF] border border-[#2A9D60]/30 px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#2A9D60]">Best practice: </span>Pre-plan transitions, pre-fund collateral, pre-agree benchmarks before recommendation approval. Each control point is a chance to protect value.
      </div>
    </div>
  );
}

export function Day13OverlayPlumbing() {
  const components = [
    {
      label: "Physical Holdings",
      color: "#2294BD",
      desc: "Core managers, ETFs, individual securities — the 'real' portfolio",
      pos: "center",
    },
    {
      label: "Cash Bucket",
      color: "#7C5CBF",
      desc: "Uninvested cash from distributions, contributions, transitions",
      pos: "left",
    },
    {
      label: "Futures / Swap Overlay",
      color: "#2A9D60",
      desc: "Equitizes cash, adjusts beta, completes benchmark exposure",
      pos: "right",
    },
    {
      label: "FX Hedge Layer",
      color: "#FAA51A",
      desc: "Hedges currency risk on international physical holdings",
      pos: "right",
    },
    {
      label: "Collateral Pool",
      color: "#D9532B",
      desc: "Liquid assets posted as margin; receives / releases on net basis",
      pos: "left",
    },
  ];

  const flows = [
    { from: "Cash Bucket", to: "Futures / Swap Overlay", label: "Cash invested through overlay" },
    { from: "FX Hedge Layer", to: "Physical Holdings", label: "Currency hedge vs. international assets" },
    { from: "Futures / Swap Overlay", to: "Collateral Pool", label: "Collateral posting and release" },
    { from: "Futures / Swap Overlay", to: "Physical Holdings", label: "Benchmark completion adjustments" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="space-y-2">
          {components.filter(c => c.pos === "left").map((c, i) => (
            <div key={i} className="rounded-lg border p-2" style={{ borderColor: c.color, backgroundColor: `${c.color}12` }}>
              <div className="font-bold text-[11px] mb-0.5" style={{ color: c.color }}>{c.label}</div>
              <div className="text-[10px] text-[#404040]">{c.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-xl border-2 border-[#2294BD] bg-[#E8F4F8] p-3 text-center">
            <div className="font-bold text-[#2294BD] text-[13px] mb-1">Physical Holdings</div>
            <div className="text-[11px] text-[#404040]">Core managers, ETFs, individual securities</div>
          </div>
        </div>
        <div className="space-y-2">
          {components.filter(c => c.pos === "right").map((c, i) => (
            <div key={i} className="rounded-lg border p-2" style={{ borderColor: c.color, backgroundColor: `${c.color}12` }}>
              <div className="font-bold text-[11px] mb-0.5" style={{ color: c.color }}>{c.label}</div>
              <div className="text-[10px] text-[#404040]">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#404040]/20 bg-[#F5F5F5] p-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">Key Flows</div>
        <div className="space-y-1">
          {flows.map((f, i) => (
            <div key={i} className="flex gap-2 items-center text-[11px]">
              <span className="text-[#2294BD] font-bold flex-shrink-0">→</span>
              <span className="text-[#404040]"><span className="font-semibold text-[#000]">{f.label}</span>: {f.from} ↔ {f.to}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
