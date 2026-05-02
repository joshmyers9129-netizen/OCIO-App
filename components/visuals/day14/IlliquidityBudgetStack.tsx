import React from "react";

const layers = [
  {
    label: "Liquid Reserves",
    sublabel: "First line of defense",
    pct: 15,
    reliability: "High — immediately accessible",
    stressBehavior: "Can erode fast in stress",
    color: "#2294BD",
    note: null,
  },
  {
    label: "Near-Term Spending / Payout",
    sublabel: "Recurring obligation — cannot defer",
    pct: 8,
    reliability: "Fixed obligation",
    stressBehavior: "Must still be funded even in drawdowns",
    color: "#FAA51A",
    note: null,
  },
  {
    label: "Unfunded Commitments",
    sublabel: "Capital called by managers over next 3–5 years",
    pct: 12,
    reliability: "Uncertain timing",
    stressBehavior: "May accelerate when distributions slow",
    color: "#D9532B",
    note: "Crossover risk: calls may rise while liquid reserves fall",
    isCritical: true,
  },
  {
    label: "Funded Private Exposure",
    sublabel: "NAV in PE, VC, private credit",
    pct: 22,
    reliability: "Illiquid — cannot sell on demand",
    stressBehavior: "Cannot be sold quickly — denominator effect risk",
    color: "#D9532B",
    note: null,
  },
  {
    label: "Other Contingent Claims",
    sublabel: "Collateral, overlay margin, self-insurance",
    pct: 5,
    reliability: "Variable — scenario-dependent",
    stressBehavior: "Can spike unexpectedly in stress",
    color: "#404040",
    note: null,
  },
];

const totalPct = layers.reduce((s, l) => s + l.pct, 0);

export default function IlliquidityBudgetStack() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Illiquidity Budget Stack
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Illiquidity is cumulative across obligations.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        The private allocation is safe only if the surrounding liquidity architecture is safe enough to support it.
      </p>

      {/* Visual stack with bars */}
      <div className="space-y-2 mb-5">
        {layers.map((layer, i) => {
          const barWidth = Math.round((layer.pct / totalPct) * 100);
          return (
            <div key={i}>
              <div
                className="rounded-xl border-l-4 p-3"
                style={{ borderLeftColor: layer.color, backgroundColor: layer.color + "0E" }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-bold text-[#1A1A1A]">{layer.label}</p>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: layer.color + "20", color: layer.color === "#FAA51A" ? "#b07000" : layer.color === "#000000" ? "#404040" : layer.color }}
                      >
                        {layer.pct}% of portfolio
                      </span>
                    </div>
                    <p className="text-[11px] text-[#404040]">{layer.sublabel}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-[#E8DDD4] rounded-full mb-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${barWidth}%`, backgroundColor: layer.color }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Reliability</p>
                    <p className="text-[10px] text-[#1A1A1A]">{layer.reliability}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Under Stress</p>
                    <p className="text-[10px] text-[#1A1A1A]">{layer.stressBehavior}</p>
                  </div>
                </div>

                {layer.note && (
                  <div className="mt-2 rounded px-2 py-1 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                    <p className="text-[10px] font-bold text-[#D9532B]">{layer.note}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Budget Component</th>
              <th className="text-left px-3 py-2">Why It Matters</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Stress Behavior</th>
            </tr>
          </thead>
          <tbody>
            {[
              { comp: "Funded private exposure", why: "Consumes liquidity flexibility", stress: "Cannot be sold quickly" },
              { comp: "Unfunded commitments", why: "Future cash need", stress: "May rise in importance when distributions slow" },
              { comp: "Spending or payout", why: "Recurring obligation", stress: "Must still be funded" },
              { comp: "Liquid reserves", why: "Absorb pressure", stress: "Can erode fast in stress" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.comp}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.why}</td>
                <td className="px-3 py-2.5 text-[#D9532B] font-semibold border-b border-[#E8DDD4]">{row.stress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the private allocation is safe only if the surrounding liquidity architecture is safe enough to support it.
      </p>
    </div>
  );
}
