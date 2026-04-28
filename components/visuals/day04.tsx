"use client";

// Day 04 visuals: client stakeholder map and RACI workflow

export function Day04ClientStakeholderMap() {
  const stakeholders = [
    { label: "Board", color: "#2294BD", role: "Sets policy, absorbs fiduciary accountability", quadrant: "top" },
    { label: "Investment Committee", color: "#2294BD", role: "Approves allocation, reviews performance", quadrant: "top" },
    { label: "Staff CIO / Finance", color: "#7C5CBF", role: "Translates policy into oversight", quadrant: "left" },
    { label: "CFO / Treasurer", color: "#7C5CBF", role: "Cash needs, balance-sheet volatility, ratings", quadrant: "left" },
    { label: "Consultant", color: "#FAA51A", role: "May advise even when OCIO present", quadrant: "right" },
    { label: "Actuary", color: "#FAA51A", role: "Liability measurement, funding implications", quadrant: "right" },
    { label: "Custodian", color: "#2A9D60", role: "Settlement, reporting, data", quadrant: "bottom" },
    { label: "Legal / Compliance", color: "#2A9D60", role: "Documents, regulatory constraints", quadrant: "bottom" },
    { label: "Investment Ops", color: "#D9532B", role: "Execution, cash management, reconciliation", quadrant: "bottom" },
  ];

  const frictions = [
    { label: "Actuarial vs. portfolio hedging assumptions misalign" },
    { label: "Treasury liquidity needs clash with long-horizon return goals" },
    { label: "Legal delays implementation timelines" },
    { label: "Board approval pace vs. market windows" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="relative bg-[#F5F9FC] rounded-xl border border-[#2294BD]/20 p-4 mb-3">
        <div className="text-center mb-3">
          <div className="inline-block bg-[#2294BD] text-white font-bold text-[13px] rounded-full px-4 py-1.5">
            Client Portfolio Decisions
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {stakeholders.map((s, i) => (
            <div key={i} className="rounded-lg border px-2 py-1.5" style={{ borderColor: s.color, backgroundColor: `${s.color}15` }}>
              <div className="font-bold text-[11px]" style={{ color: s.color }}>{s.label}</div>
              <div className="text-[11px] text-[#404040] leading-snug">{s.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#D9532B]/30 bg-[#FDF3F1] px-3 py-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#D9532B] mb-1.5">Common Friction Points</p>
        <div className="space-y-1">
          {frictions.map((f, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-[#D9532B] font-bold mt-0.5">⚡</span>
              <span className="text-[12px] text-[#404040]">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day04RaciWorkflow() {
  const actions = ["Policy Change", "Manager Change", "Transition", "Benchmark Update", "Quarterly Reporting"];
  const roles = [
    "Board / Committee",
    "Staff CIO / Finance",
    "OCIO Relationship Lead",
    "OCIO Portfolio Manager",
    "Implementation Team",
    "Risk Team",
    "Custodian",
    "Legal / Compliance",
    "Actuary",
  ];

  const matrix: string[][] = [
    ["A",  "C",  "C",  "A",  "I" ],
    ["C",  "C",  "C",  "C",  "C" ],
    ["R",  "R",  "R",  "R",  "R" ],
    ["C",  "R",  "R",  "R",  "I" ],
    ["I",  "I",  "R",  "I",  "I" ],
    ["C",  "C",  "C",  "C",  "R" ],
    ["I",  "I",  "R",  "I",  "I" ],
    ["C",  "C",  "C",  "C",  "I" ],
    ["I",  "I",  "I",  "C",  "I" ],
  ];

  const raciColor: Record<string, string> = {
    R: "bg-[#2294BD] text-white",
    A: "bg-[#2A9D60] text-white",
    C: "bg-[#FAA51A] text-white",
    I: "bg-[#E5E5E5] text-[#404040]",
  };

  const legend = [
    { code: "R", label: "Responsible" },
    { code: "A", label: "Accountable" },
    { code: "C", label: "Consulted" },
    { code: "I", label: "Informed" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-[#2294BD] text-white">
              <th className="px-2 py-2 text-left text-[11px] font-bold">Role</th>
              {actions.map((a) => (
                <th key={a} className="px-2 py-2 text-center text-[10px] font-bold">{a}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
                <td className="px-2 py-1.5 text-[#000] font-semibold border-b border-[#E5E5E5]">{role}</td>
                {matrix[i].map((cell, j) => (
                  <td key={j} className="px-2 py-1.5 text-center border-b border-[#E5E5E5]">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${raciColor[cell]}`}>{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {legend.map((l) => (
          <span key={l.code} className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${raciColor[l.code]}`}>
            {l.code} = {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
