import React from "react";

const tiers = [
  {
    tier: 1,
    label: "Cash and Near-Cash",
    sublabel: "Operating accounts, money market, T-bills < 30 days",
    speed: "Immediate (same day)",
    reliability: "Very High",
    bestUse: "Routine outflows, benefit payments, operating draw",
    govFriction: "None — pre-authorized",
    pctOfPortfolio: 8,
    color: "#2294BD",
    flag: false,
  },
  {
    tier: 2,
    label: "Short High-Quality Bonds",
    sublabel: "Government and agency < 1 year, short-duration fund",
    speed: "1–3 business days",
    reliability: "High",
    bestUse: "Planned funding, capital calls, spending reserve",
    govFriction: "Low — OCIO can act within delegated authority",
    pctOfPortfolio: 12,
    color: "#2294BD",
    flag: false,
  },
  {
    tier: 3,
    label: "Broader Liquid Fixed Income",
    sublabel: "Investment-grade bonds, broad index funds",
    speed: "3–5 business days",
    reliability: "Moderate–High",
    bestUse: "Larger planned needs, opportunistic rebalancing",
    govFriction: "Some — may require staff coordination",
    pctOfPortfolio: 20,
    color: "#FAA51A",
    flag: false,
  },
  {
    tier: 4,
    label: "Liquid Equity and Multi-Asset",
    sublabel: "Listed equities, liquid alternatives",
    speed: "T+2 settlement, market impact likely",
    reliability: "Moderate — market-dependent",
    bestUse: "Reserve replenishment, large planned changes",
    govFriction: "Moderate — triggers rebalancing review",
    pctOfPortfolio: 35,
    color: "#FAA51A",
    flag: true,
    flagNote: "Requires discretionary approval before cash can move — governance friction can demote this tier by one or more levels",
  },
  {
    tier: 5,
    label: "Contingent Measures",
    sublabel: "Lines of credit, secondary sales, forced realizations",
    speed: "Slow or uncertain (weeks to months)",
    reliability: "Low — conditions and counterparty-dependent",
    bestUse: "True stress only — not routine",
    govFriction: "High — committee approval required",
    pctOfPortfolio: 5,
    color: "#D9532B",
    flag: true,
    flagNote: "Do not treat this tier as a reliable near-term source — reserve for genuine crisis use only",
  },
];

export default function LiquidityWaterfall() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Liquidity Waterfall
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Governance friction can demote a source by one or more tiers.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A credible waterfall ranks sources by actual accessibility, not by theoretical liquidity alone.
      </p>

      <div className="relative">
        {/* Spine */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#2294BD] to-[#D9532B]" />

        <div className="space-y-2">
          {tiers.map((tier, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Tier circle */}
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black border-2 border-white shadow z-10"
                style={{ backgroundColor: tier.color }}
              >
                T{tier.tier}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-xl border-l-4 p-3"
                style={{ borderLeftColor: tier.color, backgroundColor: tier.color + "0E" }}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{tier.label}</p>
                    <p className="text-[11px] text-[#404040]">{tier.sublabel}</p>
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                    style={{
                      backgroundColor: tier.color + "20",
                      color: tier.color === "#FAA51A" ? "#b07000" : tier.color,
                    }}
                  >
                    ~{tier.pctOfPortfolio}% portfolio
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-1.5">
                  {[
                    { label: "Speed", value: tier.speed },
                    { label: "Reliability", value: tier.reliability },
                    { label: "Best Use", value: tier.bestUse },
                    { label: "Governance Friction", value: tier.govFriction },
                  ].map((item, j) => (
                    <div key={j} className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                      <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">{item.label}</p>
                      <p className="text-[10px] text-[#1A1A1A]">{item.value}</p>
                    </div>
                  ))}
                </div>

                {tier.flagNote && (
                  <div className="rounded px-2 py-1.5 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                    <p className="text-[10px] font-bold text-[#D9532B]">{tier.flagNote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Liquidity Tier</th>
              <th className="text-left px-3 py-2">Speed</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Best Use</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tier: "Cash and near cash", speed: "Immediate", use: "Routine outflows" },
              { tier: "Short high-quality bonds", speed: "Short", use: "Planned funding" },
              { tier: "Broader liquid assets", speed: "Moderate", use: "Larger planned needs" },
              { tier: "Contingent measures", speed: "Slow or uncertain", use: "True stress only" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.tier}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.speed}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a credible waterfall ranks sources by actual accessibility, not by theoretical liquidity alone.
      </p>
    </div>
  );
}
