import React from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Rows of cash items. Each row has 12 monthly statuses:
// "" = none, "low" = small/certain, "med" = moderate, "high" = large/certain, "risk" = contingent/flag
const calendarData = [
  {
    item: "Benefit / Grant Payments",
    certainty: "High",
    source: "Cash or short reserve",
    monthly: ["high", "med", "high", "med", "high", "med", "high", "med", "high", "med", "high", "high"],
    type: "outflow",
  },
  {
    item: "Spending / Operating Draw",
    certainty: "High",
    source: "Operating cash pool",
    monthly: ["med", "low", "med", "low", "med", "low", "med", "low", "med", "low", "med", "high"],
    type: "outflow",
  },
  {
    item: "Capital Calls (Private)",
    certainty: "Medium",
    source: "Liquidity reserve or planned sales",
    monthly: ["low", "med", "high", "low", "med", "low", "high", "low", "med", "low", "high", "low"],
    type: "outflow",
    hasRisk: true,
  },
  {
    item: "Collateral / Margin Calls",
    certainty: "Contingent",
    source: "Collateral ladder",
    monthly: ["", "risk", "", "", "risk", "", "", "risk", "", "", "risk", ""],
    type: "contingent",
    hasRisk: true,
  },
  {
    item: "Coupon / Income Inflows",
    certainty: "Medium–High",
    source: "Natural inflow",
    monthly: ["high", "", "high", "", "high", "", "high", "", "high", "", "high", ""],
    type: "inflow",
  },
  {
    item: "Private Distributions",
    certainty: "Medium",
    source: "Natural inflow",
    monthly: ["low", "", "med", "", "med", "", "high", "", "med", "", "high", "med"],
    type: "inflow",
  },
  {
    item: "Reserve Draw or Replenish",
    certainty: "Policy-triggered",
    source: "Reserve action — requires authorization",
    monthly: ["", "", "", "", "", "low", "", "", "", "", "", "med"],
    type: "action",
    hasRisk: true,
  },
];

function CellBlock({ status, type }: { status: string; type: string }) {
  if (!status) return <div className="w-full h-6 rounded" style={{ backgroundColor: "#F0E6DD" }} />;

  const isInflow = type === "inflow";
  const isContingent = type === "contingent";
  const isAction = type === "action";

  if (status === "risk") {
    return (
      <div className="w-full h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#D9532B20", border: "1px solid #D9532B" }}>
        <span className="text-[8px] font-bold text-[#D9532B]">!</span>
      </div>
    );
  }

  const intensityMap: Record<string, string> = {
    low: "30",
    med: "60",
    high: "A0",
  };

  const alpha = intensityMap[status] || "60";
  let baseColor = "#D9532B";
  if (isInflow) baseColor = "#2294BD";
  else if (isContingent) baseColor = "#D9532B";
  else if (isAction) baseColor = "#FAA51A";
  else baseColor = "#404040";

  return (
    <div
      className="w-full h-6 rounded"
      style={{ backgroundColor: baseColor + alpha }}
    />
  );
}

const typeConfig: Record<string, { color: string; label: string }> = {
  outflow: { color: "#404040", label: "Outflow (certain)" },
  inflow: { color: "#2294BD", label: "Inflow" },
  contingent: { color: "#D9532B", label: "Contingent risk" },
  action: { color: "#FAA51A", label: "Reserve action" },
};

export default function TwelveMonthLiquidityCalendar() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        12-Month Liquidity Calendar
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#b07000]">Timing errors can matter more than aggregate balance.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Liquidity management improves sharply when every major cash use is placed on a calendar and paired with a source.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(typeConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {["30", "60", "A0"].map((a) => (
                <div key={a} className="w-3 h-3 rounded" style={{ backgroundColor: conf.color + a }} />
              ))}
            </div>
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded flex items-center justify-center" style={{ backgroundColor: "#D9532B20", border: "1px solid #D9532B" }}>
            <span className="text-[7px] font-bold text-[#D9532B]">!</span>
          </div>
          <span className="text-[10px] text-[#404040]">Contingent / stress flag</span>
        </div>
        <span className="text-[10px] text-[#404040] italic">Darker = higher magnitude</span>
      </div>

      {/* Calendar grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: 600 }}>
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-tl-lg" style={{ minWidth: 140 }}>
                Cash Item
              </th>
              <th className="text-left px-3 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 80 }}>
                Certainty
              </th>
              {months.map((m, i) => (
                <th key={i} className="text-center px-1 py-2 text-[10px] font-bold text-white" style={{ minWidth: 36 }}>
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarData.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2 border-b border-[#E8DDD4] align-middle">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: typeConfig[row.type].color }} />
                    <p className="text-[10px] font-bold text-[#1A1A1A]">{row.item}</p>
                    {row.hasRisk && (
                      <span className="text-[8px] font-bold px-1 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>Review</span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2 border-b border-[#E8DDD4] align-middle">
                  <p className="text-[10px] text-[#404040]">{row.certainty}</p>
                </td>
                {row.monthly.map((status, mi) => (
                  <td key={mi} className="px-1 py-2 border-b border-[#E8DDD4]">
                    <CellBlock status={status} type={row.type} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Funding sources table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#404040] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Cash Item</th>
              <th className="text-left px-3 py-2">Timing Certainty</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Typical Funding Source</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Benefit or grant payments", cert: "High", source: "Cash or short reserve" },
              { item: "Capital calls", cert: "Medium", source: "Liquidity reserve or planned sales" },
              { item: "Collateral", cert: "Contingent", source: "Collateral ladder" },
              { item: "Distributions and coupons", cert: "Medium to high", source: "Natural inflow" },
            ].map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-semibold text-[#1A1A1A] border-b border-[#E8DDD4]">{r.item}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{r.cert}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{r.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: liquidity management improves sharply when every major cash use is placed on a calendar and paired with a source.
      </p>
    </div>
  );
}
