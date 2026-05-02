import React from "react";

const stages = [
  {
    number: "01",
    label: "Objective",
    color: "#000000",
    questions: [
      "What must this portfolio do?",
      "What type of loss matters most?",
      "Who bears the consequences?",
    ],
    failure: "Return target stated without mission context",
    archetypes: ["DB plan → funded-status stability", "Endowment → spending support", "Reserve → enterprise protection"],
  },
  {
    number: "02",
    label: "Constraints",
    color: "#404040",
    questions: [
      "What legal or regulatory rules apply?",
      "What spending or payout is required?",
      "What stakeholder limits exist?",
    ],
    failure: "Constraints discovered after policy is approved",
    archetypes: ["Legal payout rules", "Spending formulas", "Board mandate limits"],
  },
  {
    number: "03",
    label: "Liquidity & Cash Flows",
    color: "#D9532B",
    questions: [
      "When is cash needed, and how certain is timing?",
      "What collateral or margin calls are possible?",
      "How is private pacing managed?",
    ],
    failure: "Liquidity treated as secondary to return",
    archetypes: ["Benefit payments", "Capital calls", "Rebalancing needs"],
  },
  {
    number: "04",
    label: "Governance & Implementation",
    color: "#FAA51A",
    questions: [
      "Who can act between meetings?",
      "What rebalancing authority exists?",
      "Can the team hold the policy through stress?",
    ],
    failure: "Uninvestable policy — committee too slow to act",
    archetypes: ["Delegation schedule", "OCIO authority bands", "Escalation rules"],
  },
  {
    number: "05",
    label: "Policy Portfolio & Benchmark",
    color: "#2294BD",
    questions: [
      "What is the strategic allocation by role?",
      "How will performance be measured?",
      "How are illiquid assets represented?",
    ],
    failure: "Performance judged against wrong yardstick",
    archetypes: ["Liability-relative", "Spending-relative", "Absolute or goal-based"],
  },
];

export default function InstitutionalPortfolioDesignFramework() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Institutional Portfolio Design Framework
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Asset allocation is a chain of linked design choices — later stages cannot repair a weak objective statement.
      </p>

      {/* Process flow */}
      <div className="flex flex-col md:flex-row gap-2 items-stretch overflow-x-auto pb-2">
        {stages.map((stage, i) => (
          <React.Fragment key={i}>
            <div
              className="flex-1 rounded-xl border-t-4 p-4 bg-[#FBF7F3] min-w-[160px]"
              style={{ borderTopColor: stage.color }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-lg font-black"
                  style={{ color: stage.color }}
                >
                  {stage.number}
                </span>
                <span className="text-sm font-bold text-[#1A1A1A]">{stage.label}</span>
              </div>

              {/* Questions */}
              <div className="space-y-1 mb-3">
                {stage.questions.map((q, j) => (
                  <div key={j} className="flex items-start gap-1.5">
                    <span className="text-[#2294BD] font-bold text-xs mt-0.5">›</span>
                    <p className="text-[11px] text-[#404040]">{q}</p>
                  </div>
                ))}
              </div>

              {/* Common failure */}
              <div
                className="rounded px-2 py-1.5 mb-2"
                style={{ backgroundColor: "#D9532B12", borderLeft: "3px solid #D9532B" }}
              >
                <p className="text-[10px] font-semibold text-[#D9532B]">Common failure</p>
                <p className="text-[10px] text-[#404040]">{stage.failure}</p>
              </div>

              {/* Archetype examples */}
              <div className="flex flex-wrap gap-1">
                {stage.archetypes.map((a, j) => (
                  <span
                    key={j}
                    className="text-[9px] px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: stage.color + "18", color: stage.color === "#000000" ? "#404040" : stage.color }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow between stages */}
            {i < stages.length - 1 && (
              <div className="flex items-center justify-center flex-shrink-0 md:w-6">
                <svg width={20} height={20} viewBox="0 0 20 20" className="md:rotate-0 rotate-90">
                  <path d="M2 10 L16 10 M12 6 L18 10 L12 14" stroke="#404040" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a strategic allocation is only as strong as the chain of assumptions that connects mission to implementable policy.
      </p>
    </div>
  );
}
