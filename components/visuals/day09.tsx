"use client";

// Day 09 visuals: LDI anatomy and collateral waterfall

export function Day09LdiAnatomy() {
  const components = [
    {
      label: "Liability Target",
      color: "#D9532B",
      desc: "PV of benefit obligations; discounted at appropriate curve",
    },
    {
      label: "Physical Hedge Assets",
      color: "#2294BD",
      desc: "Long-duration bonds (nominal + TIPS) designed to track liability sensitivity",
      arrows: ["Matched to liability duration and convexity"],
    },
    {
      label: "Derivatives Overlay",
      color: "#7C5CBF",
      desc: "Interest rate swaps or swaptions that extend hedge ratio beyond physical holdings",
      arrows: ["Notional drives collateral needs"],
    },
    {
      label: "Growth Portfolio",
      color: "#2A9D60",
      desc: "Equities, credit, alternatives — generate surplus return above liability growth",
      arrows: ["Surplus return improves funded status"],
    },
    {
      label: "Collateral Pool",
      color: "#FAA51A",
      desc: "Liquid assets posted as margin; sources rebalancing liquidity",
      arrows: ["Supports overlay margin calls", "Funds rebalancing"],
    },
  ];

  const arrows = [
    "Liability sensitivity → shapes hedge design (duration, convexity target)",
    "Overlay notional → drives collateral pool sizing",
    "Growth assets → generate surplus return above liability growth",
    "Liquidity reserve → supports margin calls and rebalancing",
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-2 mb-3">
        {components.map((c, i) => (
          <div key={i} className="rounded-lg border-l-4 px-3 py-2 bg-white border" style={{ borderLeftColor: c.color, borderColor: `${c.color}30` }}>
            <div className="font-bold text-[12px] mb-0.5" style={{ color: c.color }}>{c.label}</div>
            <div className="text-[11px] text-[#404040]">{c.desc}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-[#2294BD]/20 bg-[#E8F4F8] p-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#2294BD] mb-1.5">Key Linkages</div>
        <div className="space-y-1">
          {arrows.map((a, i) => (
            <div key={i} className="flex gap-1.5 items-start">
              <span className="text-[#2294BD] font-bold flex-shrink-0">→</span>
              <span className="text-[11px] text-[#404040]">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day09CollateralWaterfall() {
  const tiers = [
    {
      tier: 1,
      label: "Cash on Hand",
      speed: "Immediate",
      cost: "Low (opportunity cost)",
      governance: "Pre-approved",
      reliability: "Highest",
      color: "#2A9D60",
    },
    {
      tier: 2,
      label: "Short-Duration Liquid Bonds",
      speed: "1–2 days",
      cost: "Low transaction cost",
      governance: "Delegated to PM",
      reliability: "High",
      color: "#2294BD",
    },
    {
      tier: 3,
      label: "Pre-Identified Liquidation Bucket",
      speed: "2–5 days",
      cost: "Moderate (market impact)",
      governance: "Delegated with notification",
      reliability: "High",
      color: "#7C5CBF",
    },
    {
      tier: 4,
      label: "Equity Index Futures Reduction",
      speed: "Same day",
      cost: "Slippage + roll cost",
      governance: "Delegated to overlay PM",
      reliability: "Moderate (basis risk)",
      color: "#FAA51A",
    },
    {
      tier: 5,
      label: "Credit Line / Sponsor Support",
      speed: "1–3 days",
      cost: "Facility cost",
      governance: "Board / sponsor approval",
      reliability: "Stress-dependent",
      color: "#D9532B",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1.5">
        {tiers.map((t, i) => (
          <div key={i} className="rounded-lg border p-2.5" style={{ borderColor: t.color, backgroundColor: `${t.color}10` }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: t.color }}>
                {t.tier}
              </span>
              <span className="font-bold text-[12px]" style={{ color: t.color }}>{t.label}</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[10px]">
              <div className="rounded bg-white/70 px-1.5 py-1">
                <div className="font-semibold text-[#404040]">Speed</div>
                <div className="text-[#000]">{t.speed}</div>
              </div>
              <div className="rounded bg-white/70 px-1.5 py-1">
                <div className="font-semibold text-[#404040]">Cost</div>
                <div className="text-[#000]">{t.cost}</div>
              </div>
              <div className="rounded bg-white/70 px-1.5 py-1">
                <div className="font-semibold text-[#404040]">Governance</div>
                <div className="text-[#000]">{t.governance}</div>
              </div>
              <div className="rounded bg-white/70 px-1.5 py-1">
                <div className="font-semibold text-[#404040]">Stress reliability</div>
                <div className="text-[#000]">{t.reliability}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
