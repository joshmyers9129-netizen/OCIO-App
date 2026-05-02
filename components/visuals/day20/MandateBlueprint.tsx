import React from "react";

const blueprintSections = [
  {
    id: "objective",
    label: "1. Objective and Institutional Context",
    question: "What problem is being solved?",
    content: "Pool segmentation, spending / benefit obligations, time horizon, return requirement",
    delegated: false,
    color: "#000000",
    icon: "O",
  },
  {
    id: "constraints",
    label: "2. Constraints and Key Risks",
    question: "What cannot be ignored?",
    content: "Liquidity, liability, accounting, governance cadence, legal, stakeholder",
    delegated: false,
    color: "#000000",
    icon: "C",
  },
  {
    id: "rights",
    label: "3. Decision-Rights Split",
    question: "Who decides what?",
    content: "Retained: policy, benchmark, structural changes, oversight\nDelegated: rebalancing, manager changes within bands, transitions\nEscalation: threshold breaches, conflicts",
    delegated: true,
    color: "#FAA51A",
    icon: "D",
    callout: "What is delegated",
  },
  {
    id: "policy",
    label: "4. Policy Structure by Pool / Sleeve",
    question: "What structure is proposed?",
    content: "Asset allocation by pool, sleeve design, benchmark stack, target weights and bands",
    delegated: false,
    color: "#2294BD",
    icon: "P",
  },
  {
    id: "implementation",
    label: "5. Implementation Model",
    question: "How does the portfolio get there?",
    content: "Transition plan, rebalancing rules, tools (overlay, completion, pacing), execution path",
    delegated: true,
    color: "#FAA51A",
    icon: "I",
    callout: "What is retained",
  },
  {
    id: "reporting",
    label: "6. Reporting Architecture",
    question: "How will the institution know it is working?",
    content: "Objective-first dashboard, board-level vs. staff-level reporting, attribution, disclosure",
    delegated: false,
    color: "#2294BD",
    icon: "R",
    callout: "How success is measured",
  },
  {
    id: "oversight",
    label: "7. Oversight and Escalation",
    question: "When does the provider come back?",
    content: "Governance calendar, escalation triggers, stress protocol, annual policy review",
    delegated: false,
    color: "#000000",
    icon: "G",
  },
  {
    id: "economics",
    label: "8. Economics and Conflicts",
    question: "What does it cost and where can alignment slip?",
    content: "All fee layers, affiliated product policy, conflict monitoring, benchmark and transition costs",
    delegated: false,
    color: "#D9532B",
    icon: "E",
  },
];

const fallbackTable = [
  { section: "Objective", q: "What problem is being solved?" },
  { section: "Constraints", q: "What cannot be ignored?" },
  { section: "Decision rights", q: "Who decides what?" },
  { section: "Policy", q: "What structure is proposed?" },
  { section: "Implementation", q: "How does the portfolio get there?" },
  { section: "Reporting", q: "How will the institution know it is working?" },
  { section: "Oversight", q: "When does the provider come back?" },
  { section: "Economics", q: "What does it cost and where can alignment slip?" },
];

export default function MandateBlueprint() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Mandate Blueprint
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">A good mandate is not a manager recommendation plus an IPS. It is an integrated operating design.</p>
      </div>
      <p className="text-xs text-[#404040] mb-5">
        Eight connected panels. Each must answer its defining question before the design is complete.
      </p>

      {/* Two-column blueprint panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {blueprintSections.map((section, i) => (
          <div
            key={section.id}
            className="rounded-xl border-l-4 p-3 relative"
            style={{ borderLeftColor: section.color, backgroundColor: section.color + "0C" }}
          >
            <div className="flex items-start gap-2 mb-1.5">
              <div
                className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black"
                style={{ backgroundColor: section.color }}
              >
                {section.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#1A1A1A]">{section.label}</p>
                <p className="text-[10px] italic text-[#404040]">{section.question}</p>
              </div>
              {section.callout && (
                <span
                  className="text-[8px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ backgroundColor: section.color + "20", color: section.color === "#FAA51A" ? "#b07000" : section.color === "#000000" || section.color === "#404040" ? "#404040" : section.color }}
                >
                  {section.callout}
                </span>
              )}
            </div>
            <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
              <p className="text-[10px] text-[#404040] whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Callout boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <div className="rounded-lg px-4 py-3 bg-[#FAA51A12] border border-[#FAA51A40]">
          <p className="text-xs font-bold text-[#b07000] mb-1">What is Delegated</p>
          <p className="text-[11px] text-[#404040]">Rebalancing inside bands, public manager changes within architecture, transitions, pacing within pre-approved limits</p>
        </div>
        <div className="rounded-lg px-4 py-3 bg-[#00000010] border border-[#40404030]">
          <p className="text-xs font-bold text-[#404040] mb-1">What is Retained</p>
          <p className="text-[11px] text-[#404040]">Policy approval, structural changes, benchmark philosophy, provider oversight, conflict review, escalation decisions</p>
        </div>
        <div className="rounded-lg px-4 py-3 bg-[#2294BD12] border border-[#2294BD30]">
          <p className="text-xs font-bold text-[#2294BD] mb-1">How Success is Measured</p>
          <p className="text-[11px] text-[#404040]">Objective-first dashboard, policy benchmark comparison, funded status or spending support, forward watch list</p>
        </div>
      </div>

      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Section</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">What It Must Answer</th>
            </tr>
          </thead>
          <tbody>
            {fallbackTable.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.section}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.q}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a good mandate is not a manager recommendation plus an IPS. It is an integrated operating design.
      </p>
    </div>
  );
}
