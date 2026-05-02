import React from "react";

const pools = [
  { label: "Operating Cash", fundingHorizon: 3, drawdownTolerance: 1, accountingSensitivity: 3, govUrgency: 3, enterpriseEffect: "Business continuity risk" },
  { label: "Strategic Reserve", fundingHorizon: 2, drawdownTolerance: 2, accountingSensitivity: 2, govUrgency: 2, enterpriseEffect: "Shock absorption capacity" },
  { label: "Long-Term Capital", fundingHorizon: 1, drawdownTolerance: 3, accountingSensitivity: 1, govUrgency: 1, enterpriseEffect: "Future growth and optionality" },
  { label: "Liability Reserve", fundingHorizon: 2, drawdownTolerance: 2, accountingSensitivity: 3, govUrgency: 2, enterpriseEffect: "Reserve adequacy and claim payment" },
  { label: "Self-Insurance Fund", fundingHorizon: 2, drawdownTolerance: 1, accountingSensitivity: 3, govUrgency: 3, enterpriseEffect: "Claim payment and regulatory reserve" },
];

const dimensions = [
  { key: "fundingHorizon", label: "Funding Horizon Urgency", flipColor: true },
  { key: "drawdownTolerance", label: "Drawdown Tolerance" },
  { key: "accountingSensitivity", label: "Accounting Sensitivity", flipColor: true },
  { key: "govUrgency", label: "Governance Urgency", flipColor: true },
];

function cellStyle(value: number, flipColor: boolean) {
  // For flipColor: high value = more sensitive = more orange/red
  // For tolerance: high value = more tolerant = more blue
  if (flipColor) {
    if (value === 3) return { bg: "#D9532B18", color: "#D9532B", label: "High" };
    if (value === 2) return { bg: "#FAA51A18", color: "#b07000", label: "Moderate" };
    return { bg: "#2294BD12", color: "#2294BD", label: "Low" };
  } else {
    if (value === 3) return { bg: "#2294BD18", color: "#2294BD", label: "High" };
    if (value === 2) return { bg: "#FAA51A18", color: "#b07000", label: "Moderate" };
    return { bg: "#D9532B12", color: "#D9532B", label: "Low" };
  }
}

export default function EnterpriseCashflowSensitivityMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Enterprise Cash-Flow Sensitivity Map
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Enterprise importance can exceed asset size</p>
      </div>

      <p className="text-xs text-[#404040] mb-4">
        The institution's most important pool is not always the largest pool.
      </p>

      {/* Heat map table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg" style={{ minWidth: 130 }}>
                Pool Type
              </th>
              {dimensions.map((d, i) => (
                <th
                  key={i}
                  className="text-center px-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: "#404040",
                    minWidth: 100,
                    borderRadius: i === dimensions.length - 1 ? "0 8px 0 0" : undefined,
                  }}
                >
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, pi) => (
              <tr key={pi} className={pi % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] align-top">
                  {pool.label}
                </td>
                {dimensions.map((d, di) => {
                  const val = pool[d.key as keyof typeof pool] as number;
                  const style = cellStyle(val, d.flipColor || false);
                  return (
                    <td
                      key={di}
                      className="text-center px-2 py-3 border-b border-[#E8DDD4]"
                      style={{ backgroundColor: style.bg }}
                    >
                      <span className="text-xs font-bold" style={{ color: style.color }}>
                        {style.label}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Enterprise effect summary */}
      <div className="mt-4">
        <p className="text-xs font-bold text-[#1A1A1A] mb-2">Enterprise consequences by pool</p>
        <div className="space-y-1.5">
          {pools.map((pool, i) => {
            const urgency = pool.govUrgency;
            const color = urgency === 3 ? "#D9532B" : urgency === 2 ? "#FAA51A" : "#2294BD";
            return (
              <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2 border-l-4" style={{ borderLeftColor: color, backgroundColor: color + "0C" }}>
                <p className="text-xs font-bold text-[#1A1A1A] w-36 flex-shrink-0">{pool.label}</p>
                <p className="text-xs text-[#404040]">{pool.enterpriseEffect}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heat legend */}
      <div className="mt-3 flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#D9532B18", border: "1px solid #D9532B" }} />
          <span className="text-[10px] text-[#404040]">High sensitivity / urgency</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#FAA51A18", border: "1px solid #FAA51A" }} />
          <span className="text-[10px] text-[#404040]">Moderate</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#2294BD12", border: "1px solid #2294BD" }} />
          <span className="text-[10px] text-[#404040]">Low / tolerant</span>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the institution's most important pool is not always the largest pool.
      </p>
    </div>
  );
}
