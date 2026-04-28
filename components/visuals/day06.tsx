"use client";

// Day 06 visuals: portfolio design framework funnel and policy differences by client

export function Day06PortfolioDesignFramework() {
  const layers = [
    { label: "1. Mission & Objective", desc: "Return target, preservation vs. growth, spending vs. funded status", color: "#2294BD", width: "100%" },
    { label: "2. Liability or Spending Profile", desc: "Payments schedule, growth rate, sensitivity to rates and inflation", color: "#7C5CBF", width: "90%" },
    { label: "3. Liquidity & Cash-Flow Needs", desc: "Recurring distributions, capital calls, collateral buffers", color: "#FAA51A", width: "80%" },
    { label: "4. Governance Capacity", desc: "Meeting frequency, staff depth, tolerance for implementation complexity", color: "#D9532B", width: "70%" },
    { label: "5. Implementable Structure", desc: "Manager availability, custody, reporting, cost budget", color: "#2A9D60", width: "60%" },
  ];

  const outputs = [
    "Policy ranges",
    "Benchmark structure",
    "Illiquidity budget",
    "Rebalancing rules",
    "Reporting lens",
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1.5 mb-3">
        {layers.map((l, i) => (
          <div key={i} className="mx-auto rounded-lg px-3 py-2 text-white" style={{ backgroundColor: l.color, width: l.width }}>
            <div className="font-bold text-[12px] mb-0.5">{l.label}</div>
            <div className="text-[11px] text-white/80">{l.desc}</div>
          </div>
        ))}
      </div>
      <div className="text-center mb-1.5">
        <span className="text-[11px] text-[#404040] font-semibold">↓ Outputs</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {outputs.map((o) => (
          <span key={o} className="rounded-full bg-[#2294BD] text-white px-3 py-1 text-[11px] font-bold">{o}</span>
        ))}
      </div>
    </div>
  );
}

export function Day06PolicyDifferencesByClient() {
  const clients = [
    {
      label: "DB Pension",
      color: "#2294BD",
      buckets: [
        { name: "Growth Assets", size: 45, desc: "Equity, growth credit" },
        { name: "Hedge Assets", size: 45, desc: "Long bonds, rate overlays" },
        { name: "Liquidity Reserve", size: 10, desc: "Cash, short-duration" },
      ],
      metric: "Funded status stability",
      fear: "Contribution volatility, underfunding",
    },
    {
      label: "Endowment",
      color: "#7C5CBF",
      buckets: [
        { name: "Public Risk Assets", size: 35, desc: "Global equity, credit" },
        { name: "Private Assets", size: 35, desc: "PE, VC, real assets" },
        { name: "Diversifiers", size: 20, desc: "Hedge funds, TIPS" },
        { name: "Liquidity Bucket", size: 10, desc: "Cash, short bonds" },
      ],
      metric: "Long-run real return",
      fear: "Illiquidity at bad time",
    },
    {
      label: "Foundation",
      color: "#2A9D60",
      buckets: [
        { name: "Return-Seeking", size: 50, desc: "Broad growth assets" },
        { name: "Diversifiers", size: 25, desc: "Real assets, alts" },
        { name: "Mission Constraint", size: 15, desc: "ESG screens, program" },
        { name: "Liquidity", size: 10, desc: "5% payout support" },
      ],
      metric: "Mission support + payout",
      fear: "Underspending or illiquidity",
    },
    {
      label: "Operating Pool",
      color: "#FAA51A",
      buckets: [
        { name: "High-Quality Liquidity", size: 50, desc: "Cash, T-bills" },
        { name: "Short-Duration", size: 35, desc: "Short bonds, IG credit" },
        { name: "Modest Growth Sleeve", size: 15, desc: "Equities, real assets" },
      ],
      metric: "Capital preservation + yield",
      fear: "Impairment when cash needed",
    },
  ];

  return (
    <div className="font-sans text-[12px] grid grid-cols-2 gap-3 sm:grid-cols-4">
      {clients.map((c, i) => (
        <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: c.color }}>
          <div className="px-2 py-1.5 text-center font-bold text-white text-[12px]" style={{ backgroundColor: c.color }}>
            {c.label}
          </div>
          <div className="p-2 space-y-1">
            {c.buckets.map((b, j) => (
              <div key={j} className="rounded bg-white border px-2 py-1" style={{ borderColor: `${c.color}40` }}>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-semibold text-[11px] text-[#000]">{b.name}</span>
                  <span className="text-[10px] font-bold" style={{ color: c.color }}>{b.size}%</span>
                </div>
                <div className="text-[10px] text-[#404040]">{b.desc}</div>
              </div>
            ))}
          </div>
          <div className="px-2 pb-2 space-y-0.5">
            <div className="text-[10px] font-bold text-[#2A9D60]">✓ {c.metric}</div>
            <div className="text-[10px] text-[#D9532B]">⚠ {c.fear}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
