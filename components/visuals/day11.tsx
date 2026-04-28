"use client";

// Day 11 visuals: pool segmentation ladder and cashflow sensitivity map

export function Day11PoolSegmentationLadder() {
  const tiers = [
    {
      level: 1,
      label: "Operating Cash",
      liquidity: "Same-day / overnight",
      drawdown: "None tolerated",
      duration: "0–3 months",
      privates: "Never",
      owner: "Treasury / CFO",
      color: "#2294BD",
    },
    {
      level: 2,
      label: "Short-Term Reserve",
      liquidity: "1–5 business days",
      drawdown: "Minimal (< 1%)",
      duration: "3–12 months",
      privates: "Never",
      owner: "Treasury / IC",
      color: "#7C5CBF",
    },
    {
      level: 3,
      label: "Intermediate Reserve",
      liquidity: "1–4 weeks",
      drawdown: "Low–moderate (< 5%)",
      duration: "1–3 years",
      privates: "Rarely",
      owner: "Investment Committee",
      color: "#FAA51A",
    },
    {
      level: 4,
      label: "Long-Term Strategic Reserve",
      liquidity: "Months to quarters",
      drawdown: "Moderate (< 15%)",
      duration: "3–7 years",
      privates: "Selectively",
      owner: "CIO / IC",
      color: "#D9532B",
    },
    {
      level: 5,
      label: "Mission / Perpetual Capital",
      liquidity: "Multi-year horizon",
      drawdown: "High tolerance",
      duration: "7+ years",
      privates: "Yes — core allocation",
      owner: "Board / CIO",
      color: "#2A9D60",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1.5">
        {tiers.map((t, i) => (
          <div
            key={i}
            className="rounded-lg border p-2.5"
            style={{ borderColor: t.color, backgroundColor: `${t.color}10` }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: t.color }}>
                {t.level}
              </span>
              <span className="font-bold text-[12px]" style={{ color: t.color }}>{t.label}</span>
            </div>
            <div className="grid grid-cols-5 gap-1 text-[10px]">
              {[
                { k: "Liquidity", v: t.liquidity },
                { k: "Drawdown tol.", v: t.drawdown },
                { k: "Duration", v: t.duration },
                { k: "Private assets", v: t.privates },
                { k: "Owner", v: t.owner },
              ].map((item) => (
                <div key={item.k} className="rounded bg-white/70 px-1 py-1">
                  <div className="font-semibold text-[#404040] mb-0.5">{item.k}</div>
                  <div className="text-[#000]">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Day11CashflowSensitivityMap() {
  // Positions: [illiquidityTolerance (0-100), cashflowSensitivity (0-100)]
  const institutions = [
    { label: "Operating Cash", x: 5, y: 95, color: "#D9532B" },
    { label: "Insurer Surplus", x: 25, y: 70, color: "#FAA51A" },
    { label: "Healthcare Reserve", x: 20, y: 60, color: "#FAA51A" },
    { label: "Reserve Pool", x: 15, y: 80, color: "#D9532B" },
    { label: "DB Pension", x: 55, y: 50, color: "#2294BD" },
    { label: "Private Foundation", x: 65, y: 30, color: "#2A9D60" },
    { label: "Endowment", x: 80, y: 20, color: "#2A9D60" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="relative bg-[#F5F9FC] rounded-xl border border-[#2294BD]/20 overflow-hidden" style={{ height: "260px" }}>
        {/* Y axis label */}
        <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-semibold text-[#404040] whitespace-nowrap">
          ↑ Sensitivity to Near-Term Cash Outflows ↑
        </div>
        {/* X axis label */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#404040] whitespace-nowrap">
          ← Low Illiquidity Tolerance — High Illiquidity Tolerance →
        </div>

        {/* Quadrant shading */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#2A9D60]/5 border-b border-l border-[#2A9D60]/20" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#D9532B]/5 border-t border-r border-[#D9532B]/20" />

        {/* Plot points */}
        {institutions.map((inst, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `${10 + inst.x * 0.82}%`,
              bottom: `${10 + inst.y * 0.7}%`,
            }}
          >
            <div
              className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: inst.color }}
            />
            <div
              className="text-[9px] font-semibold text-white rounded px-1 mt-0.5 leading-tight text-center"
              style={{ backgroundColor: inst.color, maxWidth: "70px" }}
            >
              {inst.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
