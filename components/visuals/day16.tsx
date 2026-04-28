"use client";

// Day 16 visuals: benchmark attribution tree and board dashboard

export function Day16BenchmarkAttributionTree() {
  return (
    <div className="font-sans text-[12px]">
      {/* Root */}
      <div className="flex justify-center mb-2">
        <div className="rounded-xl border-2 border-[#2294BD] bg-[#E8F4F8] px-4 py-2 text-center">
          <div className="font-bold text-[#2294BD] text-[13px]">Objective</div>
          <div className="text-[11px] text-[#404040]">e.g. CPI+4%, funded-status goal</div>
        </div>
      </div>

      {/* Level 1 */}
      <div className="flex justify-center mb-2">
        <div className="w-0.5 h-5 bg-[#2294BD]/40" />
      </div>
      <div className="flex justify-center mb-2">
        <div className="rounded-xl border-2 border-[#2294BD] bg-[#E8F4F8] px-4 py-2 text-center">
          <div className="font-bold text-[#2294BD] text-[12px]">Total Policy Benchmark</div>
          <div className="text-[11px] text-[#404040]">Weighted blend of sleeve benchmarks</div>
        </div>
      </div>

      {/* Level 2 branches */}
      <div className="flex justify-center mb-2">
        <div className="w-0.5 h-3 bg-[#2294BD]/40" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {[
          { label: "Sleeve Benchmarks", desc: "Per-asset-class index references", color: "#7C5CBF" },
          { label: "Liability Reference", desc: "Actuarial discount rate or PBO target", color: "#D9532B" },
          { label: "Implementation Effects", desc: "Trading cost, cash drag, fee drag", color: "#FAA51A" },
        ].map((b, i) => (
          <div key={i} className="rounded-lg border-2 p-2.5" style={{ borderColor: b.color, backgroundColor: `${b.color}12` }}>
            <div className="font-bold text-[11px] mb-0.5" style={{ color: b.color }}>{b.label}</div>
            <div className="text-[10px] text-[#404040]">{b.desc}</div>
          </div>
        ))}
      </div>

      {/* Level 3 branches from sleeves */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="col-span-1 space-y-1">
          {[
            { label: "Security / Manager Effects", color: "#7C5CBF" },
            { label: "Private-Markets Pacing", color: "#7C5CBF" },
          ].map((l, i) => (
            <div key={i} className="rounded border p-1.5 text-[10px] font-semibold" style={{ borderColor: l.color, color: l.color, backgroundColor: `${l.color}08` }}>
              {l.label}
            </div>
          ))}
        </div>
        <div className="col-span-1 space-y-1">
          {[
            { label: "Surplus / Deficit vs. Liabilities", color: "#D9532B" },
          ].map((l, i) => (
            <div key={i} className="rounded border p-1.5 text-[10px] font-semibold" style={{ borderColor: l.color, color: l.color, backgroundColor: `${l.color}08` }}>
              {l.label}
            </div>
          ))}
        </div>
        <div className="col-span-1 space-y-1">
          {[
            { label: "Fee Drag", color: "#FAA51A" },
            { label: "Implementation Shortfall", color: "#FAA51A" },
          ].map((l, i) => (
            <div key={i} className="rounded border p-1.5 text-[10px] font-semibold" style={{ borderColor: l.color, color: l.color, backgroundColor: `${l.color}08` }}>
              {l.label}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#2A9D60]/30 bg-[#E8F6EF] px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#2A9D60]">Client emphasis varies: </span>DB plans focus on liability-relative results. Endowments focus on policy vs. active. Both need implementation-effect transparency.
      </div>
    </div>
  );
}

export function Day16BoardDashboard() {
  const sections = [
    {
      title: "Objective Progress",
      color: "#2294BD",
      items: [
        { label: "Total return (fiscal YTD)", value: "+6.8%", vs: "Objective: CPI+4% = +6.1%", good: true },
        { label: "3-Year annualized", value: "+7.2%", vs: "vs. policy benchmark: +6.9%", good: true },
      ],
    },
    {
      title: "Portfolio vs. Policy",
      color: "#7C5CBF",
      items: [
        { label: "Actual allocation vs. policy ranges", value: "In range", vs: "No sleeve outside band", good: true },
        { label: "Active risk (ex-ante TE)", value: "2.1%", vs: "Guideline: ≤3%", good: true },
      ],
    },
    {
      title: "Risk & Liquidity",
      color: "#FAA51A",
      items: [
        { label: "Liquid assets as % of portfolio", value: "38%", vs: "Minimum requirement: 25%", good: true },
        { label: "Collateral headroom", value: "$28M", vs: "vs. $15M estimated worst-case", good: true },
      ],
    },
    {
      title: "Liability / Spending Context",
      color: "#D9532B",
      items: [
        { label: "Funded status", value: "98%", vs: "Prior year: 94%", good: true },
        { label: "Hedge ratio", value: "72%", vs: "Target: 70–80%", good: true },
      ],
    },
    {
      title: "Delegated Actions This Quarter",
      color: "#2A9D60",
      items: [
        { label: "Manager changes", value: "1 termination", vs: "GE Capital Global Equity", good: null },
        { label: "Rebalance events", value: "2 rebalances", vs: "Equity drift correction", good: null },
      ],
    },
    {
      title: "Watch Items & Next Decisions",
      color: "#404040",
      items: [
        { label: "Private equity pacing review", value: "Q3 agenda", vs: "Commitment pace may need adjustment", good: null },
        { label: "Manager search: EM equity", value: "In progress", vs: "Finals slate expected next meeting", good: null },
      ],
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="grid grid-cols-2 gap-2">
        {sections.map((s, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: s.color }}>
            <div className="px-2 py-1.5 font-bold text-white text-[11px]" style={{ backgroundColor: s.color }}>
              {s.title}
            </div>
            <div className="p-2 bg-white space-y-1.5">
              {s.items.map((item, j) => (
                <div key={j} className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold text-[#000]">{item.label}</div>
                    <div className="text-[10px] text-[#404040]">{item.vs}</div>
                  </div>
                  <span className={`text-[11px] font-bold flex-shrink-0 rounded px-1.5 py-0.5 ${
                    item.good === true ? "bg-[#E8F6EF] text-[#2A9D60]" :
                    item.good === false ? "bg-[#FDF3F1] text-[#D9532B]" :
                    "bg-[#F5F5F5] text-[#404040]"
                  }`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg border border-[#404040]/20 bg-[#F5F5F5] px-3 py-1.5 text-[10px] text-[#404040]">
        <span className="font-bold">Design principle: </span>Board dashboard avoids manager-by-manager clutter. Focuses on objective, risk, liquidity, and decision-relevant items only.
      </div>
    </div>
  );
}
