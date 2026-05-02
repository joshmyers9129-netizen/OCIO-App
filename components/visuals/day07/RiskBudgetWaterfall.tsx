import React from "react";

const riskSources = [
  {
    label: "Total Risk Budget",
    share: 100,
    consequence: "All sources combined",
    owner: "Board policy",
    color: "#000000",
    isTotal: true,
  },
  {
    label: "Equity Drawdown Risk",
    share: 40,
    consequence: "Capital loss and behavior strain; spending pressure",
    owner: "Board and OCIO",
    color: "#2294BD",
  },
  {
    label: "Duration Mismatch",
    share: 20,
    consequence: "Funded-status or balance-sheet movement",
    owner: "OCIO and finance",
    color: "#2294BD",
  },
  {
    label: "Illiquidity Risk",
    share: 20,
    consequence: "Cash stress; forced-selling at worst time",
    owner: "OCIO and treasury",
    color: "#FAA51A",
  },
  {
    label: "Credit Spread Exposure",
    share: 12,
    consequence: "Drawdown and correlation risk in stress",
    owner: "OCIO",
    color: "#D9532B",
  },
  {
    label: "Governance Strain",
    share: 8,
    consequence: "Delayed action; policy drift under pressure",
    owner: "Board and staff",
    color: "#D9532B",
  },
];

const barMaxWidth = 340;

export default function RiskBudgetWaterfall() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Total-Portfolio Risk Budget Waterfall
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Risk budgeting improves when the discussion names consequences, not only statistics.
      </p>

      <div className="space-y-2">
        {riskSources.map((src, i) => {
          const barWidth = (src.share / 100) * barMaxWidth;
          return (
            <div key={i} className="flex items-start gap-3">
              {/* Label */}
              <div className="w-44 flex-shrink-0 pt-1">
                <p className="text-xs font-bold text-[#1A1A1A]">{src.label}</p>
                <p className="text-[10px] text-[#404040]">{src.owner}</p>
              </div>

              {/* Bar + share */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="h-7 rounded flex items-center px-2"
                    style={{
                      width: `${barWidth}px`,
                      backgroundColor: src.color,
                      opacity: src.isTotal ? 1 : 0.75,
                      minWidth: 36,
                    }}
                  >
                    <span className="text-white text-xs font-bold">{src.share}%</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#404040] italic">{src.consequence}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final annotation */}
      <div className="mt-4 bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-2">
        <p className="text-xs font-bold text-[#b07000]">Risk budget spent where the client feels it</p>
        <p className="text-[11px] text-[#404040] mt-0.5">
          These allocations should reflect the institution's actual objective. A pension with funded-status pressure should weight duration mismatch more. An endowment with heavy privates should weight illiquidity more.
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E8DDD4]">
        <p className="text-xs font-bold text-[#1A1A1A] mb-2">Risk consequences by source</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Equity drawdown", consequence: "Capital loss and behavior strain", color: "#2294BD" },
            { label: "Duration mismatch", consequence: "Funded-status or balance-sheet movement", color: "#2294BD" },
            { label: "Illiquidity", consequence: "Cash stress and forced sales", color: "#FAA51A" },
            { label: "Governance strain", consequence: "Delayed action and policy drift", color: "#D9532B" },
          ].map((item, i) => (
            <div key={i} className="rounded px-2 py-1.5 border-l-4" style={{ borderLeftColor: item.color, backgroundColor: item.color + "0E" }}>
              <p className="text-[10px] font-bold text-[#1A1A1A]">{item.label}</p>
              <p className="text-[10px] text-[#404040]">{item.consequence}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: risk budgeting improves when the discussion names consequences, not only statistics.
      </p>
    </div>
  );
}
