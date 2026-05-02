import React from "react";

const archetypes = ["DB Plan", "Endowment", "Reserve Pool", "Insurer-Like Pool"];
const archetypeColors = ["#2294BD", "#FAA51A", "#D9532B", "#404040"];

const rows = [
  {
    dimension: "Equity Role",
    values: [
      "Return-seeking within funded-status guardrails; trimmed as funding improves",
      "Long-horizon growth; core driver of spending support across generations",
      "Limited; mainly used in strategic capital tier once operating needs are met",
      "Constrained by capital requirements and balance-sheet optics",
    ],
  },
  {
    dimension: "Fixed Income Role",
    values: [
      "Liability hedge — duration matched to pension obligations",
      "Liquidity buffer and moderate duration; rate risk secondary to real return",
      "High-quality liquidity reserve; capital preservation in near-term tiers",
      "Surplus asset management; duration aligned to liability profile",
    ],
    annotation: "Duration can mean liability hedging in one case and liquidity reserve in another",
  },
  {
    dimension: "Private Asset Role",
    values: [
      "Return and diversification; pacing constrained by liquidity and funded status",
      "Major return driver; illiquidity premium core to long-horizon mandate",
      "Limited or absent in operating tier; modest in strategic capital tier",
      "Selective; capital treatment, illiquidity, and reporting complexity limit use",
    ],
  },
  {
    dimension: "Liquidity Reserve",
    values: [
      "Modest; collateral for derivatives; benefit payments managed via cash flow",
      "Managed via spending budget and commitment calendar",
      "Large; first-call enterprise buffer; treasury-coordinated",
      "Sized for liability runoff and regulatory liquidity requirements",
    ],
  },
  {
    dimension: "Benchmark Orientation",
    values: [
      "Liability-relative (funded status vs. benchmark); LDI tracking ratio",
      "Policy mix return; often with real-return or spending-plus overlay",
      "Absolute or capital-preservation lens; not return-maximizing",
      "Surplus return or capital-efficiency measure; regulatory context",
    ],
  },
];

export default function PolicyDifferencesByArchetype() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Policy Differences by Archetype
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#b07000]">
          Similar weights can still imply different mandates — the job of each asset class is what matters.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th
                className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg"
                style={{ minWidth: 130 }}
              >
                Dimension
              </th>
              {archetypes.map((a, i) => (
                <th
                  key={i}
                  className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: archetypeColors[i],
                    minWidth: 140,
                    borderRadius: i === archetypes.length - 1 ? "0 8px 0 0" : undefined,
                  }}
                >
                  {a}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <React.Fragment key={ri}>
                <tr className={ri % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] align-top">
                    {row.dimension}
                  </td>
                  {row.values.map((v, vi) => (
                    <td
                      key={vi}
                      className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4] align-top"
                      style={{ backgroundColor: archetypeColors[vi] + "0C" }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
                {row.annotation && (
                  <tr>
                    <td colSpan={archetypes.length + 1} className="px-3 py-1.5 border-b border-[#E8DDD4] bg-[#FAA51A08]">
                      <span className="text-[10px] font-semibold text-[#b07000]">
                        Note: {row.annotation}
                      </span>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: asset weights only become meaningful after the role of each sleeve is stated in client-specific terms.
      </p>
    </div>
  );
}
