import React from "react";

const treeData = {
  id: "root",
  label: "Market Shock",
  sublabel: "Equity down 15%+ or liquidity stress event",
  color: "#D9532B",
  type: "trigger",
  children: [
    {
      id: "liquidity",
      label: "Liquidity Pressure?",
      sublabel: "Can cash needs be met in next 90 days?",
      color: "#FAA51A",
      type: "condition",
      timing: "Immediate check",
      children: [
        {
          id: "liq-no",
          label: "No pressure",
          sublabel: "Reserve ladder intact",
          color: "#2294BD",
          type: "action",
          timing: "Hours",
          action: "OCIO monitors — no escalation",
          children: [],
        },
        {
          id: "liq-yes",
          label: "Pressure building",
          sublabel: "Reserve below threshold",
          color: "#D9532B",
          type: "escalation",
          timing: "Same day",
          action: "Escalate to staff — use next reserve tier",
          children: [],
        },
      ],
    },
    {
      id: "policy",
      label: "Policy Band Breach?",
      sublabel: "Any sleeve outside tolerance range?",
      color: "#FAA51A",
      type: "condition",
      timing: "Within 48 hours",
      children: [
        {
          id: "policy-no",
          label: "Within bands",
          sublabel: "Drift within tolerance",
          color: "#2294BD",
          type: "action",
          timing: "Routine",
          action: "OCIO monitors and reports at next scheduled review",
          children: [],
        },
        {
          id: "policy-yes",
          label: "Band breached",
          sublabel: "Rebalance trigger hit",
          color: "#FAA51A",
          type: "shared",
          timing: "Within mandate authority",
          action: "OCIO acts under delegated rebalance authority — notifies staff",
          children: [],
        },
      ],
    },
    {
      id: "denominator",
      label: "Denominator Effect?",
      sublabel: "Private share mechanically elevated",
      color: "#FAA51A",
      type: "condition",
      timing: "Within one week",
      children: [
        {
          id: "denom-minor",
          label: "Minor elevation",
          sublabel: "Within temporary tolerance",
          color: "#2294BD",
          type: "action",
          timing: "Next IC meeting",
          action: "Note in report — review pacing cadence",
          children: [],
        },
        {
          id: "denom-major",
          label: "Significant breach",
          sublabel: "Private share constraining action",
          color: "#D9532B",
          type: "escalation",
          timing: "Special meeting",
          action: "Board review — pacing pause and target range discussion",
          children: [],
        },
      ],
    },
    {
      id: "comms",
      label: "Communication Trigger?",
      sublabel: "Board, donors, or beneficiaries need update",
      color: "#404040",
      type: "condition",
      timing: "24–72 hours",
      children: [
        {
          id: "comms-standard",
          label: "Standard cadence",
          sublabel: "Normal quarterly update sufficient",
          color: "#2294BD",
          type: "action",
          timing: "Next scheduled",
          action: "OCIO prepares brief status note for regular meeting",
          children: [],
        },
        {
          id: "comms-urgent",
          label: "Urgent update needed",
          sublabel: "Board or stakeholders concerned",
          color: "#D9532B",
          type: "escalation",
          timing: "Within 48 hours",
          action: "Targeted brief: what happened, institution impact, actions taken, next decision",
          children: [],
        },
      ],
    },
  ],
};

const typeConfig: Record<string, { color: string; label: string }> = {
  trigger: { color: "#D9532B", label: "Market Trigger" },
  condition: { color: "#FAA51A", label: "Condition Check" },
  action: { color: "#2294BD", label: "Delegated Action" },
  escalation: { color: "#D9532B", label: "Escalation Required" },
  shared: { color: "#FAA51A", label: "Shared Decision" },
};

const fallbackTable = [
  { trigger: "Drawdown", q: "Is policy still intact?", response: "Rebalance or review bands" },
  { trigger: "Liquidity squeeze", q: "Can cash needs still be met?", response: "Use reserve ladder or escalate" },
  { trigger: "Denominator effect", q: "Is private weight constraining action?", response: "Pacing and rebalance review" },
  { trigger: "Stakeholder concern", q: "What must be communicated now?", response: "Targeted update" },
];

export default function CrisisDecisionTree() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Banner */}
      <div className="bg-[#D9532B10] border border-[#D9532B30] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#D9532B]">Crisis speed depends on pre-authorized paths.</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Crisis Decision Tree
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Good crisis management depends on pre-defined actions rather than on improvised debate.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-5">
        {Object.entries(typeConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      {/* Root trigger */}
      <div className="flex justify-center mb-4">
        <div
          className="rounded-xl px-5 py-3 border-2 text-center"
          style={{ borderColor: "#D9532B", backgroundColor: "#D9532B18" }}
        >
          <p className="text-sm font-black text-[#D9532B]">Market Shock</p>
          <p className="text-[11px] text-[#404040]">Equity down 15%+ or liquidity stress event</p>
        </div>
      </div>

      {/* Four branch columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {treeData.children.map((branch) => (
          <div key={branch.id} className="flex flex-col gap-2">
            {/* Condition node */}
            <div
              className="rounded-lg p-2.5 border-l-4"
              style={{ borderLeftColor: branch.color, backgroundColor: branch.color + "14" }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[9px] font-bold px-1 py-0.5 rounded" style={{ backgroundColor: branch.color + "20", color: branch.color === "#FAA51A" ? "#b07000" : branch.color }}>
                  Check
                </span>
                <span className="text-[9px] text-[#404040]">{branch.timing}</span>
              </div>
              <p className="text-xs font-bold text-[#1A1A1A]">{branch.label}</p>
              <p className="text-[10px] italic text-[#404040]">{branch.sublabel}</p>
            </div>

            {/* Two outcome nodes */}
            {branch.children.map((child) => {
              const conf = typeConfig[child.type];
              return (
                <div
                  key={child.id}
                  className="rounded-lg p-2.5 border-l-4"
                  style={{ borderLeftColor: conf.color, backgroundColor: conf.color + "0C" }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className="text-[9px] font-bold px-1 py-0.5 rounded"
                      style={{ backgroundColor: conf.color + "20", color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}
                    >
                      {conf.label}
                    </span>
                    {child.timing && <span className="text-[9px] text-[#404040]">{child.timing}</span>}
                  </div>
                  <p className="text-xs font-bold text-[#1A1A1A] mb-0.5">{child.label}</p>
                  <p className="text-[10px] text-[#404040] mb-1">{child.sublabel}</p>
                  {child.action && (
                    <div className="rounded px-1.5 py-1 bg-white border border-[#E8DDD4]">
                      <p className="text-[9px] font-semibold text-[#1A1A1A]">{child.action}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Summary table */}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Trigger</th>
              <th className="text-left px-3 py-2">First Question</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Typical Response Path</th>
            </tr>
          </thead>
          <tbody>
            {fallbackTable.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.trigger}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.q}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the decision tree is useful because it converts stress from fear into sequence.
      </p>
    </div>
  );
}
