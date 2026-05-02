import React from "react";

const dashboardCards = [
  {
    label: "Reserve Coverage",
    value: "9.4 months",
    sub: "vs. 6-month minimum",
    status: "On track",
    statusColor: "#2294BD",
    note: "Above policy floor — monitor Q3 call season",
    detail: "Base-case safety: ordinary outflows covered for 9+ months",
    icon: "R",
  },
  {
    label: "12-Month Net Outflow",
    value: "−$42M",
    sub: "Base case forecast",
    status: "Monitor",
    statusColor: "#FAA51A",
    note: "Call season overlap with Q2 spending could stress timing",
    detail: "Stress case: −$68M if distributions slow and calls cluster",
    icon: "O",
  },
  {
    label: "Contingent Demands",
    value: "$18M",
    sub: "Unfunded calls + potential margin",
    status: "Watch",
    statusColor: "#D9532B",
    note: "Collateral margin could spike $6–12M in equity stress",
    detail: "Not yet funded from designated source — requires action if triggered",
    icon: "C",
    isFlag: true,
  },
  {
    label: "Natural Inflows",
    value: "+$29M",
    sub: "Coupons + expected distributions",
    status: "On track",
    statusColor: "#2294BD",
    note: "Offsets 69% of base-case net outflow",
    detail: "Distribution timing uncertain after Q3 — monitoring required",
    icon: "I",
  },
  {
    label: "Governance Trigger Status",
    value: "No breach",
    sub: "All tiers within pre-authorized band",
    status: "Clear",
    statusColor: "#2294BD",
    note: "Tier 3 threshold: reserves < 5 months triggers staff escalation",
    detail: "Tier 4 threshold: reserves < 3 months requires committee authorization",
    icon: "G",
  },
  {
    label: "Liquidity Reserve Draw Rate",
    value: "2.8% / quarter",
    sub: "vs. 4.0% maximum policy rate",
    status: "On track",
    statusColor: "#2294BD",
    note: "Trending up slightly — stress scenario would push to 4.5%",
    detail: "Above 4.0% triggers automatic pacing review",
    icon: "D",
  },
];

const triggers = [
  { level: "Routine", threshold: "Reserves > 6 months", action: "Normal operations", authority: "OCIO — no escalation", color: "#2294BD" },
  { level: "Alert", threshold: "Reserves 4–6 months", action: "Notify staff and monitor weekly", authority: "OCIO + Staff", color: "#FAA51A" },
  { level: "Escalation", threshold: "Reserves < 4 months", action: "Pause discretionary commitments", authority: "Staff must authorize", color: "#FAA51A" },
  { level: "Crisis", threshold: "Reserves < 2 months", action: "Emergency committee review", authority: "Committee required", color: "#D9532B" },
];

export default function LiquidityStressDashboard() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Liquidity Stress Dashboard
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Forecasts should change before the cash problem becomes obvious.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A liquidity dashboard is useful when it shows what action the institution should take before pressure becomes urgent.
      </p>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {dashboardCards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: card.statusColor + "40" }}
          >
            {/* Card header */}
            <div
              className="px-3 py-2 flex items-center justify-between"
              style={{ backgroundColor: card.statusColor + "12" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black"
                  style={{ backgroundColor: card.statusColor }}
                >
                  {card.icon}
                </div>
                <p className="text-xs font-bold text-[#1A1A1A]">{card.label}</p>
              </div>
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: card.statusColor + "20", color: card.statusColor === "#FAA51A" ? "#b07000" : card.statusColor }}
              >
                {card.status}
              </span>
            </div>

            {/* Card content */}
            <div className="px-3 py-2.5">
              <p className="text-xl font-black mb-0.5" style={{ color: card.isFlag ? "#D9532B" : "#1A1A1A" }}>
                {card.value}
              </p>
              <p className="text-[10px] text-[#404040] mb-1.5">{card.sub}</p>
              <p className="text-[10px] font-semibold text-[#404040] mb-1">{card.note}</p>
              {card.isFlag && (
                <div className="rounded px-2 py-1 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                  <p className="text-[9px] font-bold text-[#D9532B]">{card.detail}</p>
                </div>
              )}
              {!card.isFlag && (
                <p className="text-[10px] italic text-[#404040]">{card.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Governance trigger table */}
      <div className="overflow-x-auto">
        <p className="text-xs font-bold text-[#1A1A1A] mb-2">Governance Trigger Thresholds</p>
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Level</th>
              <th className="text-left px-3 py-2">Threshold</th>
              <th className="text-left px-3 py-2">Required Action</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Authority</th>
            </tr>
          </thead>
          <tbody>
            {triggers.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 border-b border-[#E8DDD4]">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: row.color + "20", color: row.color === "#FAA51A" ? "#b07000" : row.color }}
                  >
                    {row.level}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.threshold}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.action}</td>
                <td className="px-3 py-2.5 font-semibold border-b border-[#E8DDD4]" style={{ color: row.color === "#FAA51A" ? "#b07000" : row.color }}>{row.authority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a liquidity dashboard is useful when it shows what action the institution should take before pressure becomes urgent.
      </p>
    </div>
  );
}
