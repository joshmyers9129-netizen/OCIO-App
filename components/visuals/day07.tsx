"use client";

// Day 07 visuals: CMA decision workflow and risk budget waterfall

export function Day07CmaDecisionWorkflow() {
  const steps = [
    { id: 1, label: "Capital Market Assumptions", desc: "Return, volatility, correlation forecasts", color: "#2294BD" },
    { id: 2, label: "Policy Candidates", desc: "Asset allocation options derived from CMAs", color: "#7C5CBF" },
    { id: 3, label: "Scenario Tests", desc: "Stress tests: rate shock, equity drawdown, credit crisis", color: "#FAA51A" },
    { id: 4, label: "Risk Budget Checks", desc: "Does policy fit within risk tolerance?", color: "#D9532B" },
    { id: 5, label: "Liquidity & Governance Overlay", desc: "Can client implement? Governance capacity check", color: "#2A9D60" },
    { id: 6, label: "Recommended Allocation", desc: "Final policy with ranges, benchmarks, constraints", color: "#2294BD" },
  ];

  const sideInputs = [
    { label: "Liabilities", step: 1 },
    { label: "Spending rules", step: 2 },
    { label: "Illiquidity tolerance", step: 4 },
    { label: "Benchmark structure", step: 5 },
    { label: "Implementation constraints", step: 5 },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="flex gap-4">
        <div className="flex-1 space-y-1.5">
          {steps.map((s, i) => (
            <div key={s.id}>
              <div className="flex items-start gap-2 rounded-lg border px-3 py-2" style={{ borderColor: s.color, backgroundColor: `${s.color}12` }}>
                <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: s.color }}>
                  {s.id}
                </span>
                <div>
                  <div className="font-bold text-[12px]" style={{ color: s.color }}>{s.label}</div>
                  <div className="text-[11px] text-[#404040]">{s.desc}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-start ml-[26px] text-[#404040]">↓</div>
              )}
            </div>
          ))}
        </div>
        <div className="w-36 space-y-2">
          <div className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-1">Client Inputs</div>
          {sideInputs.map((s, i) => (
            <div key={i} className="rounded-lg border border-[#7C5CBF]/30 bg-[#F3EFFA] px-2 py-1.5">
              <div className="text-[10px] font-semibold text-[#7C5CBF]">→ Step {s.step}</div>
              <div className="text-[11px] text-[#000]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day07RiskBudgetWaterfall() {
  const blocks = [
    {
      label: "Total Portfolio Risk Budget",
      value: 100,
      color: "#2294BD",
      controls: [],
      isTotal: true,
    },
    {
      label: "Growth Asset Risk",
      value: 55,
      color: "#7C5CBF",
      controls: ["Hedge asset allocation", "Rebalancing rules", "Risk-off triggers"],
    },
    {
      label: "Liability / Spending Mismatch Risk",
      value: 25,
      color: "#FAA51A",
      controls: ["Duration overlay", "LDI strategy", "Spending smoothing rules"],
    },
    {
      label: "Illiquidity Risk",
      value: 12,
      color: "#D9532B",
      controls: ["Pacing plan", "Liquidity reserve", "Commitment pacing"],
    },
    {
      label: "Implementation & Operational Risk",
      value: 8,
      color: "#2A9D60",
      controls: ["Delegated authority", "Reporting thresholds", "Transition governance"],
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-2">
        {blocks.map((b, i) => (
          <div key={i} className="rounded-lg border p-3" style={{ borderColor: b.color, backgroundColor: `${b.color}12` }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[12px]" style={{ color: b.color }}>{b.label}</span>
              {b.isTotal ? (
                <span className="text-[11px] font-bold text-white rounded-full px-2 py-0.5" style={{ backgroundColor: b.color }}>100%</span>
              ) : (
                <span className="text-[11px] font-bold text-white rounded-full px-2 py-0.5" style={{ backgroundColor: b.color }}>~{b.value}%</span>
              )}
            </div>
            {b.controls.length > 0 && (
              <div className="bg-white/70 rounded p-1.5">
                <div className="text-[10px] font-semibold text-[#404040] mb-1">Controls:</div>
                <div className="flex flex-wrap gap-1">
                  {b.controls.map((c) => (
                    <span key={c} className="rounded bg-white border px-1.5 py-0.5 text-[10px] text-[#404040]" style={{ borderColor: `${b.color}40` }}>{c}</span>
                  ))}
                </div>
              </div>
            )}
            {i === 0 && (
              <div className="text-center text-[10px] text-[#404040] mt-1">↓ Decomposed into:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
