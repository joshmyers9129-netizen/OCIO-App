import React from "react";

const feeNodes = [
  {
    id: "provider",
    label: "Provider Advisory / Discretionary Fee",
    basis: "e.g., 30–50bps on AUM",
    mandateArea: "All",
    conflictRisk: "Low — direct charge",
    affiliatedRisk: false,
    color: "#2294BD",
    note: "Scope must be explicit — what is included vs. excluded",
  },
  {
    id: "manager",
    label: "Underlying Manager Fees",
    basis: "Varies widely — active vs. passive",
    mandateArea: "Public and private portfolios",
    conflictRisk: "Moderate — provider may favor cheaper or more complex",
    affiliatedRisk: false,
    color: "#2294BD",
    note: "Layering adds up — total cost is what matters",
  },
  {
    id: "internal",
    label: "Internal / Affiliated Product Fees",
    basis: "Often embedded — not visible as separate",
    mandateArea: "Private program, overlay, cash management",
    conflictRisk: "High — incentive to prefer internal vehicles",
    affiliatedRisk: true,
    color: "#D9532B",
    note: "When are internal products used? How are savings shared with the client?",
  },
  {
    id: "transition",
    label: "Transition and Implementation Costs",
    basis: "Spread, market impact, timing cost",
    mandateArea: "Manager changes, rebalancing",
    conflictRisk: "Moderate — often unbudgeted",
    affiliatedRisk: false,
    color: "#FAA51A",
    note: "Visible only after the fact — must be tracked and reported",
  },
  {
    id: "overlay",
    label: "Overlay / Completion Costs",
    basis: "Bid-ask, margin, management fee",
    mandateArea: "LDI, completion, FX",
    conflictRisk: "Moderate — niche pricing",
    affiliatedRisk: false,
    color: "#FAA51A",
    note: "Should be disclosed separately — not buried in implementation",
  },
  {
    id: "custody",
    label: "Custody and Reporting Economics",
    basis: "Custody fee, sub-advisory economics",
    mandateArea: "Reporting, safekeeping",
    conflictRisk: "Low — but preferred-custodian arrangements can limit flexibility",
    affiliatedRisk: false,
    color: "#404040",
    note: "Ask about preferred custodian relationships and data fees",
  },
];

const questions = [
  { q: "What is included in the headline fee?", why: "Scope mismatch is common" },
  { q: "How much external manager cost remains?", why: "Layering adds up" },
  { q: "When are affiliated products used?", why: "Incentive distortion risk" },
  { q: "How visible are implementation costs?", why: "Unbudgeted leakage" },
  { q: "How are savings shared with the client?", why: "Alignment test" },
];

export default function FeeAndConflictMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Fee and Conflict Map
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Low headline fee can still hide rich total economics.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Fees are decision-useful only when they are mapped to where and how they arise.
      </p>

      {/* Fee node cards */}
      <div className="space-y-2 mb-5">
        {feeNodes.map((node, i) => (
          <div
            key={i}
            className="rounded-xl border-l-4 p-3"
            style={{ borderLeftColor: node.color, backgroundColor: node.color + "0C" }}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-[#1A1A1A]">{node.label}</p>
                {node.affiliatedRisk && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>
                    Affiliated risk
                  </span>
                )}
              </div>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                style={{
                  backgroundColor: node.color + "20",
                  color: node.color === "#FAA51A" ? "#b07000" : node.color === "#404040" ? "#404040" : node.color,
                }}
              >
                {node.basis}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-1.5">
              <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Mandate Area</p>
                <p className="text-[10px] text-[#1A1A1A]">{node.mandateArea}</p>
              </div>
              <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4] md:col-span-2">
                <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Conflict Risk</p>
                <p className="text-[10px] text-[#1A1A1A]">{node.conflictRisk}</p>
              </div>
            </div>

            <div
              className="rounded px-2 py-1.5"
              style={{ backgroundColor: node.affiliatedRisk ? "#D9532B10" : "#40404010", borderLeft: `2px solid ${node.affiliatedRisk ? "#D9532B" : "#404040"}` }}
            >
              <p className="text-[10px] font-semibold" style={{ color: node.affiliatedRisk ? "#D9532B" : "#404040" }}>
                Ask: {node.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Key questions table */}
      <div className="overflow-x-auto">
        <p className="text-xs font-bold text-[#1A1A1A] mb-2">Key Fee Diligence Questions</p>
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Question to Ask</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-semibold text-[#1A1A1A] border-b border-[#E8DDD4]">{q.q}</td>
                <td className="px-3 py-2.5 text-[#D9532B] font-semibold border-b border-[#E8DDD4]">{q.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: fees are decision-useful only when they are mapped to where and how they arise.
      </p>
    </div>
  );
}
