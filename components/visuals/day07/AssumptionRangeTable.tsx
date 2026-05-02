import React from "react";

const assets = [
  {
    group: "Global Public Equity",
    returnRange: "5% – 8%",
    inflationLinkage: "Partial (earnings-linked)",
    downsideRisk: "High — peak-to-trough drawdowns 30–50%+",
    confidence: "Medium",
    confidenceColor: "#FAA51A",
    note: "Valuation and cycle timing create high dispersion around long-run estimate",
  },
  {
    group: "Core Bonds (Govt / IG)",
    returnRange: "3% – 5%",
    inflationLinkage: "Negative — eroded by surprise inflation",
    downsideRisk: "Moderate — rate surprise and spread widening",
    confidence: "Medium–High",
    confidenceColor: "#2294BD",
    note: "Starting yield is most reliable predictor; term and credit spread add uncertainty",
  },
  {
    group: "Private Assets (Broad)",
    returnRange: "6% – 10%+",
    inflationLinkage: "Variable by strategy",
    downsideRisk: "High — vintage dispersion and illiquidity",
    confidence: "Low–Medium",
    confidenceColor: "#D9532B",
    note: "High structural uncertainty — vintage, manager, and reporting-lag effects",
    flagHighUncertainty: true,
  },
  {
    group: "Real Assets / Inflation-Linked",
    returnRange: "4% – 7%",
    inflationLinkage: "Strong — by design",
    downsideRisk: "Moderate — liquidity and sector-specific",
    confidence: "Medium",
    confidenceColor: "#FAA51A",
    note: "Better inflation hedge but narrower liquidity and implementation complexity",
  },
  {
    group: "Credit (HY / EM)",
    returnRange: "4% – 7%",
    inflationLinkage: "Partial",
    downsideRisk: "High — spread widening in stress",
    confidence: "Low–Medium",
    confidenceColor: "#D9532B",
    note: "Credit spreads create high uncertainty in stress — tail correlation with equity",
    flagHighUncertainty: true,
  },
  {
    group: "Cash / Short-Term",
    returnRange: "2% – 4%",
    inflationLinkage: "Low — reinvestment risk in sustained low-rate periods",
    downsideRisk: "Low",
    confidence: "High",
    confidenceColor: "#2294BD",
    note: "Low return but high certainty; reinvestment risk in prolonged rate decline",
  },
];

export default function AssumptionRangeTable() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Top note */}
      <div className="bg-[#00000008] border border-[#40404030] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#1A1A1A]">
          Use ranges to frame policy, not to predict the next calendar year.
        </p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Assumption Range Table · Long-Horizon Policy Frame
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Ranges encourage better governance by showing where precision is weakest and where policy robustness matters most.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg" style={{ minWidth: 150 }}>
                Asset Group
              </th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#2294BD", minWidth: 100 }}>
                Return Range
              </th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#404040", minWidth: 120 }}>
                Inflation Linkage
              </th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#D9532B", minWidth: 140 }}>
                Downside Sensitivity
              </th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-tr-lg" style={{ backgroundColor: "#FAA51A", minWidth: 100 }}>
                Confidence
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <React.Fragment key={i}>
                <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] align-top">
                    {a.group}
                    {a.flagHighUncertainty && (
                      <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>
                        High uncertainty
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4] align-top font-bold" style={{ backgroundColor: "#2294BD0C" }}>
                    {a.returnRange}
                  </td>
                  <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4] align-top" style={{ backgroundColor: "#4040400A" }}>
                    {a.inflationLinkage}
                  </td>
                  <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4] align-top" style={{ backgroundColor: "#D9532B0A" }}>
                    {a.downsideRisk}
                  </td>
                  <td className="px-3 py-3 text-xs border-b border-[#E8DDD4] align-top" style={{ backgroundColor: "#FAA51A0A" }}>
                    <span className="font-bold" style={{ color: a.confidenceColor }}>{a.confidence}</span>
                  </td>
                </tr>
                <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td colSpan={5} className="px-3 pb-2 pt-0 border-b border-[#E8DDD4]">
                    <p className="text-[10px] text-[#404040] italic">{a.note}</p>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: ranges encourage better governance because they show where precision is weakest and where policy robustness matters most.
      </p>
    </div>
  );
}
