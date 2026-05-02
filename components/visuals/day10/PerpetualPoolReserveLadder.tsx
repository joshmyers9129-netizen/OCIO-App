import React from "react";

const layers = [
  {
    label: "Near-Term Spending Reserve",
    horizon: "0 – 12 months",
    job: "Fund grants, distributions, and budget commitments",
    volatility: "Very low — must fund without heroic assumptions",
    assets: "Cash, money market, short T-bills",
    color: "#000000",
    annotation: "Must fund without heroic assumptions",
    pctOfPool: 8,
  },
  {
    label: "Intermediate Liquidity Reserve",
    horizon: "1 – 3 years",
    job: "Support rebalancing, capital calls, and unforeseen needs",
    volatility: "Low to moderate — cushion for drawdowns",
    assets: "Short bonds, liquid diversified assets, TIPS",
    color: "#404040",
    pctOfPool: 15,
    privateNote: "Private-asset commitments interact most closely with this layer",
  },
  {
    label: "Long-Horizon Growth Capital",
    horizon: "3+ years",
    job: "Pursue real return and long-run corpus preservation",
    volatility: "Higher — can carry more interim risk",
    assets: "Global equity, diversified multi-asset, private markets (paced)",
    color: "#2294BD",
    annotation: "Can carry more interim risk",
    pctOfPool: 62,
  },
  {
    label: "Private Pacing Overlay",
    horizon: "Multi-year commitment cycle",
    job: "Manage commitment, drawdown, and distribution discipline",
    volatility: "Illiquidity is paid risk — budget explicitly",
    assets: "PE, VC, private credit, infrastructure (paced commitment program)",
    color: "#D9532B",
    pctOfPool: 15,
    privateNote: "Interacts with intermediate layer for capital call funding",
  },
];

export default function PerpetualPoolReserveLadder() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Perpetual-Pool Reserve Ladder
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Perpetual pools still need visible reserve layers to avoid bad selling decisions in stress.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {[
          { color: "#000000", label: "Spending reserve" },
          { color: "#404040", label: "Liquidity reserve" },
          { color: "#2294BD", label: "Long-horizon growth" },
          { color: "#D9532B", label: "Private pacing" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Spine */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#000000] to-[#D9532B]" />

        <div className="space-y-3">
          {layers.map((layer, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Indicator */}
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white shadow z-10 text-white text-xs font-black"
                style={{ backgroundColor: layer.color }}
              >
                {i + 1}
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-xl border-l-4 p-3"
                style={{ borderLeftColor: layer.color, backgroundColor: layer.color + "0C" }}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-bold text-[#1A1A1A]">{layer.label}</p>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                    style={{ backgroundColor: layer.color + "25", color: layer.color === "#000000" ? "#404040" : layer.color }}
                  >
                    ~{layer.pctOfPool}% of pool
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-1.5">
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Horizon</p>
                    <p className="text-[11px] text-[#1A1A1A]">{layer.horizon}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Job</p>
                    <p className="text-[11px] text-[#1A1A1A]">{layer.job}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Volatility</p>
                    <p className="text-[11px] text-[#1A1A1A]">{layer.volatility}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Typical Assets</p>
                    <p className="text-[11px] text-[#1A1A1A]">{layer.assets}</p>
                  </div>
                </div>

                {layer.annotation && (
                  <div
                    className="mt-1 rounded px-2 py-1"
                    style={{ backgroundColor: layer.color + "15", borderLeft: `3px solid ${layer.color}` }}
                  >
                    <p className="text-[10px] font-bold" style={{ color: layer.color === "#000000" ? "#404040" : layer.color }}>
                      {layer.annotation}
                    </p>
                  </div>
                )}
                {layer.privateNote && (
                  <div className="mt-1 rounded px-2 py-1 bg-[#FAA51A12] border-l-2 border-[#FAA51A]">
                    <p className="text-[10px] text-[#b07000]">{layer.privateNote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: perpetual pools still need visible reserve layers if the board wants to avoid bad selling decisions.
      </p>
    </div>
  );
}
