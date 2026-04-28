"use client";

// Day 15 visuals: liquidity calendar and liquidity waterfall

export function Day15LiquidityCalendar() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  type Flow = { label: string; color: string; type: "committed" | "likely" | "contingent" };

  const flows: Flow[] = [
    { label: "Benefits / spending", color: "#D9532B", type: "committed" },
    { label: "Expected capital calls", color: "#FAA51A", type: "likely" },
    { label: "Private distributions", color: "#2A9D60", type: "likely" },
    { label: "Collateral buffer", color: "#7C5CBF", type: "contingent" },
    { label: "Manager transitions", color: "#2294BD", type: "committed" },
    { label: "Reserve minimum", color: "#404040", type: "committed" },
  ];

  // Illustrative presence — 1 = has this flow, 0 = no, -1 = light
  const presence: number[][] = [
    [1,1,1,1,1,1,1,1,1,1,1,1], // Benefits
    [0,0,1,0,0,1,0,0,1,0,0,1], // Capital calls
    [0,1,0,1,0,1,0,1,0,1,0,1], // Distributions
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], // Collateral
    [0,0,1,0,0,0,1,0,0,0,1,0], // Transitions
    [1,1,1,1,1,1,1,1,1,1,1,1], // Reserve
  ];

  const typeLabel: Record<Flow["type"], string> = {
    committed: "Committed",
    likely: "Likely",
    contingent: "Contingent",
  };

  const typeColor: Record<Flow["type"], string> = {
    committed: "#2294BD",
    likely: "#FAA51A",
    contingent: "#7C5CBF",
  };

  return (
    <div className="font-sans text-[12px] overflow-x-auto">
      <table className="w-full border-collapse min-w-[520px]">
        <thead>
          <tr className="bg-[#2294BD] text-white">
            <th className="px-2 py-1.5 text-left text-[10px] font-bold w-32">Flow</th>
            {months.map((m) => (
              <th key={m} className="px-1 py-1.5 text-center text-[10px] font-bold">{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flows.map((f, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
              <td className="px-2 py-1 border-b border-[#E5E5E5]">
                <div className="font-semibold text-[10px] text-[#000]">{f.label}</div>
                <div className="text-[9px]" style={{ color: typeColor[f.type] }}>{typeLabel[f.type]}</div>
              </td>
              {presence[i].map((p, j) => (
                <td key={j} className="px-1 py-1 text-center border-b border-[#E5E5E5]">
                  {p === 1 && (
                    <div className="w-4 h-4 rounded mx-auto" style={{ backgroundColor: f.color }} />
                  )}
                  {p === -1 && (
                    <div className="w-4 h-4 rounded mx-auto opacity-30" style={{ backgroundColor: f.color }} />
                  )}
                  {p === 0 && (
                    <div className="w-4 h-4 rounded mx-auto bg-transparent" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 mt-2">
        {Object.entries(typeLabel).map(([k, v]) => (
          <span key={k} className="flex items-center gap-1 text-[10px]">
            <span className="w-3 h-3 rounded inline-block" style={{ backgroundColor: typeColor[k as Flow["type"]] }} />
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Day15LiquidityWaterfall() {
  const tiers = [
    {
      tier: 1,
      label: "Operating Cash / Reserve Cash",
      speed: "Immediate",
      cost: "None (opportunity cost)",
      governance: "Treasury standing authority",
      color: "#2A9D60",
    },
    {
      tier: 2,
      label: "Short-Duration Liquid Assets",
      speed: "T+1 to T+3",
      cost: "Minimal transaction cost",
      governance: "Delegated to OCIO PM",
      color: "#2294BD",
    },
    {
      tier: 3,
      label: "Pre-Designated Saleable Public Assets",
      speed: "T+2 to T+5",
      cost: "Moderate market impact",
      governance: "Delegated with notification",
      color: "#7C5CBF",
    },
    {
      tier: 4,
      label: "Overlay / Futures De-Risking",
      speed: "Same day to T+2",
      cost: "Roll cost + slippage",
      governance: "Delegated to overlay team",
      color: "#FAA51A",
    },
    {
      tier: 5,
      label: "Contingent Sources (Line / Sponsor)",
      speed: "1–5 business days",
      cost: "Facility fee + relationship risk",
      governance: "Board / sponsor approval",
      color: "#D9532B",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1.5">
        {tiers.map((t, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex flex-col items-center flex-shrink-0 w-6">
              <div className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: t.color }}>{t.tier}</div>
              {i < tiers.length - 1 && <div className="w-0.5 flex-1 min-h-2 mt-0.5" style={{ backgroundColor: `${t.color}40` }} />}
            </div>
            <div className="flex-1 rounded-lg border px-2 py-2" style={{ borderColor: t.color, backgroundColor: `${t.color}10` }}>
              <div className="font-bold text-[11px] mb-1.5" style={{ color: t.color }}>{t.label}</div>
              <div className="grid grid-cols-3 gap-1 text-[10px]">
                <div className="rounded bg-white/70 px-1.5 py-1">
                  <div className="font-semibold text-[#404040]">Speed</div>
                  <div>{t.speed}</div>
                </div>
                <div className="rounded bg-white/70 px-1.5 py-1">
                  <div className="font-semibold text-[#404040]">Cost</div>
                  <div>{t.cost}</div>
                </div>
                <div className="rounded bg-white/70 px-1.5 py-1">
                  <div className="font-semibold text-[#404040]">Governance</div>
                  <div>{t.governance}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
