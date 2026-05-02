import React from "react";

const pools = [
  {
    label: "Operating Cash Pool",
    horizon: "Days to months",
    primaryJob: "Protect continuity — payroll, operations, near-term needs",
    drawdown: "Very low — must not be disrupted",
    benchmark: "Capital preservation / short-duration",
    color: "#000000",
    annotation: "Protect continuity",
    pct: 12,
  },
  {
    label: "Strategic Reserve Pool",
    horizon: "Months to 2 years",
    primaryJob: "Absorb enterprise shocks; flex for opportunities",
    drawdown: "Low to moderate — manageable decline acceptable",
    benchmark: "Conservative multi-asset / short-to-intermediate bonds",
    color: "#404040",
    pct: 18,
  },
  {
    label: "Long-Term Capital Pool",
    horizon: "3+ years",
    primaryJob: "Support growth, future needs, or endgame objectives",
    drawdown: "Higher — institution can hold through interim weakness",
    benchmark: "Strategic growth benchmark / diversified multi-asset",
    color: "#2294BD",
    annotation: "Pursue growth within enterprise limits",
    pct: 52,
  },
  {
    label: "Liability Reserve Pool",
    horizon: "Claim or obligation driven",
    primaryJob: "Match enterprise exposure — pensions, self-insurance, contingencies",
    drawdown: "Low to moderate — liability-sensitive",
    benchmark: "Liability-relative or reserve-adequacy basis",
    color: "#D9532B",
    pct: 18,
  },
];

export default function PoolSegmentationLadder() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Pool Segmentation Ladder · Function-First Design
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#b07000]">Same owner does not mean same objective</p>
      </div>

      <p className="text-xs text-[#404040] mb-4">
        Segmentation is the prerequisite for any policy discussion in a multi-pool institution.
      </p>

      <div className="relative">
        {/* Spine */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#000000] to-[#D9532B]" />

        <div className="space-y-2.5">
          {pools.map((pool, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Number circle */}
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white shadow z-10 text-white text-xs font-black"
                style={{ backgroundColor: pool.color }}
              >
                {i + 1}
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-xl border-l-4 p-3"
                style={{ borderLeftColor: pool.color, backgroundColor: pool.color + "0C" }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-bold text-[#1A1A1A]">{pool.label}</p>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                    style={{ backgroundColor: pool.color + "22", color: pool.color === "#000000" ? "#404040" : pool.color }}
                  >
                    ~{pool.pct}% typical
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { label: "Horizon", value: pool.horizon },
                    { label: "Primary Job", value: pool.primaryJob },
                    { label: "Drawdown Tolerance", value: pool.drawdown },
                    { label: "Benchmark Style", value: pool.benchmark },
                  ].map((item, j) => (
                    <div key={j} className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                      <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">{item.label}</p>
                      <p className="text-[11px] text-[#1A1A1A]">{item.value}</p>
                    </div>
                  ))}
                </div>

                {pool.annotation && (
                  <div
                    className="mt-2 rounded px-2 py-1"
                    style={{ borderLeft: `3px solid ${pool.color}`, backgroundColor: pool.color + "15" }}
                  >
                    <p className="text-[10px] font-bold" style={{ color: pool.color === "#000000" ? "#404040" : pool.color }}>
                      {pool.annotation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: segmentation is the prerequisite for any policy discussion in a multi-pool institution.
      </p>
    </div>
  );
}
