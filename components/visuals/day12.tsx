"use client";

// Day 12 visuals: lineup architecture map and benchmark stack

export function Day12LineupArchitectureMap() {
  const layers = [
    {
      label: "Policy Sleeves",
      color: "#2294BD",
      sleeves: [
        { name: "Global Equity", bench: "MSCI ACWI", type: "Active blend", complexity: "Medium", lens: "Alpha + factor" },
        { name: "Fixed Income", bench: "Bloomberg Agg", type: "Active core", complexity: "Low", lens: "Duration + spread" },
        { name: "Private Equity", bench: "Custom PME", type: "Active only", complexity: "High", lens: "Pacing + TVPI" },
        { name: "Real Assets", bench: "CPI + 4%", type: "Active blend", complexity: "High", lens: "Inflation hedge" },
      ],
    },
    {
      label: "Completion Sleeves",
      color: "#7C5CBF",
      sleeves: [
        { name: "Cash Equitization", bench: "Equity futures", type: "Overlay", complexity: "Low", lens: "Tracking error" },
        { name: "Factor Completion", bench: "Factor indices", type: "Passive", complexity: "Low", lens: "Active bet offset" },
      ],
    },
    {
      label: "Liquidity Reserve",
      color: "#2A9D60",
      sleeves: [
        { name: "Short-Duration / Cash", bench: "T-bill / SOFR", type: "Passive", complexity: "Low", lens: "Availability" },
      ],
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: layer.color }}>
            <div className="px-3 py-1.5 font-bold text-white text-[11px]" style={{ backgroundColor: layer.color }}>
              {layer.label}
            </div>
            <div className="p-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {layer.sleeves.map((s, j) => (
                <div key={j} className="rounded-lg border bg-white px-2 py-1.5" style={{ borderColor: `${layer.color}40` }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-[11px]" style={{ color: layer.color }}>{s.name}</span>
                    <span className="text-[9px] rounded px-1.5 py-0.5 text-white font-bold" style={{ backgroundColor: layer.color }}>{s.type}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px]">
                    <div className="text-[#404040]"><span className="font-semibold">Bench:</span><br />{s.bench}</div>
                    <div className="text-[#404040]"><span className="font-semibold">Complexity:</span><br />{s.complexity}</div>
                    <div className="text-[#404040]"><span className="font-semibold">Monitor:</span><br />{s.lens}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Day12BenchmarkStack() {
  const layers = [
    {
      label: "Total Policy Benchmark",
      desc: "Weighted blend of all sleeve benchmarks → measures total portfolio value add vs. policy",
      color: "#2294BD",
      width: "100%",
    },
    {
      label: "Sleeve Benchmarks",
      desc: "Each sleeve measured independently → isolates asset-class and manager decisions",
      color: "#7C5CBF",
      width: "85%",
      sub: ["Global Equity: MSCI ACWI", "Fixed Income: Bloomberg Agg", "PE: PME Benchmark", "Real Assets: CPI+4%"],
    },
    {
      label: "Completion / Residual References",
      desc: "Overlay and completion positions measured against factor or futures benchmarks",
      color: "#2A9D60",
      width: "70%",
      sub: ["Cash equitization vs. equity futures", "Factor completion vs. factor indices"],
    },
  ];

  const warning = "Poor sleeve benchmark definitions create attribution noise: active bets spill between sleeves, making it unclear where value was added or lost.";

  return (
    <div className="font-sans text-[12px]">
      <div className="flex flex-col items-center space-y-1.5 mb-3">
        {layers.map((l, i) => (
          <div
            key={i}
            className="rounded-xl border-2 p-3"
            style={{ borderColor: l.color, backgroundColor: `${l.color}12`, width: l.width }}
          >
            <div className="font-bold text-[12px] mb-0.5" style={{ color: l.color }}>{l.label}</div>
            <div className="text-[11px] text-[#404040] mb-1">{l.desc}</div>
            {l.sub && (
              <div className="flex flex-wrap gap-1">
                {l.sub.map((s) => (
                  <span key={s} className="rounded bg-white border px-1.5 py-0.5 text-[10px] text-[#404040]" style={{ borderColor: `${l.color}40` }}>{s}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-[#D9532B]/30 bg-[#FDF3F1] px-3 py-2 flex gap-2 items-start">
        <span className="text-[#D9532B] font-bold text-lg flex-shrink-0">⚠</span>
        <p className="text-[11px] text-[#404040]">{warning}</p>
      </div>
    </div>
  );
}
