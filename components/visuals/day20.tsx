"use client";

// Day 20 visuals: client diagnosis worksheet and recommendation structure

export function Day20ClientDiagnosisWorksheet() {
  const sections = [
    {
      label: "Objective",
      color: "#2294BD",
      questions: [
        "Is the goal growth, preservation, liability matching, or perpetual spending?",
        "What is the return hurdle (nominal or real)?",
        "What does failure look like (underfunding, inability to distribute, capital loss)?",
      ],
      conclusion: "→ Objective function",
    },
    {
      label: "Constraints",
      color: "#7C5CBF",
      questions: [
        "What are the liquidity requirements (recurring + contingent)?",
        "What spending or payout rules apply?",
        "What regulatory or legal constraints exist?",
        "What is the tax situation?",
      ],
      conclusion: "→ Constraint set",
    },
    {
      label: "Governance Capacity",
      color: "#FAA51A",
      questions: [
        "How frequently does the committee meet?",
        "Is there dedicated investment staff?",
        "What is the tolerance for implementation complexity?",
        "Who holds fiduciary accountability?",
      ],
      conclusion: "→ Governance model",
    },
    {
      label: "Service Model Conclusion",
      color: "#2A9D60",
      questions: [
        "Does governance capacity match portfolio complexity?",
        "Is full delegation appropriate, or is a hybrid model better?",
        "What scope of OCIO mandate makes sense?",
        "Which provider family is best matched?",
      ],
      conclusion: "→ Service model recommendation",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-2">
        {sections.map((s, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: s.color }}>
            <div className="px-3 py-1.5 font-bold text-white text-[12px]" style={{ backgroundColor: s.color }}>
              {s.label}
            </div>
            <div className="p-2.5 bg-white">
              <div className="space-y-1 mb-2">
                {s.questions.map((q, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ backgroundColor: s.color }}>{j + 1}</div>
                    <span className="text-[11px] text-[#404040]">{q}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border px-2 py-1.5 text-[11px] font-bold" style={{ borderColor: s.color, color: s.color, backgroundColor: `${s.color}10` }}>
                {s.conclusion}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Day20RecommendationStructure() {
  const sections = [
    {
      order: 1,
      label: "Client Diagnosis",
      color: "#2294BD",
      content: [
        "Archetype: what kind of institution is this?",
        "Objective function and return hurdle",
        "Key constraints: liquidity, regulation, governance",
        "Current state vs. needed state",
      ],
    },
    {
      order: 2,
      label: "Mandate Design",
      color: "#7C5CBF",
      content: [
        "Recommended scope of delegation",
        "IPS structure: benchmarks, ranges, constraints",
        "Reserved vs. delegated decisions",
        "Escalation and consent rights",
      ],
    },
    {
      order: 3,
      label: "Portfolio Recommendation",
      color: "#2A9D60",
      content: [
        "Target allocation and policy ranges",
        "Asset-class rationale tied to objective",
        "Illiquidity budget and private markets approach",
        "Benchmark structure and active/passive split",
      ],
    },
    {
      order: 4,
      label: "Implementation Path",
      color: "#FAA51A",
      content: [
        "Transition plan: sequence, timing, estimated cost",
        "Manager structure: lineup architecture",
        "Overlay and operational setup",
        "Milestone timeline to steady state",
      ],
    },
    {
      order: 5,
      label: "Reporting Plan",
      color: "#D9532B",
      content: [
        "Reporting cadence and audience",
        "Key metrics for board vs. staff",
        "Attribution framework and success measures",
        "Watch list and escalation triggers",
      ],
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-1.5">
        {sections.map((s, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex flex-col items-center flex-shrink-0 w-7">
              <div className="w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center" style={{ backgroundColor: s.color }}>
                {s.order}
              </div>
              {i < sections.length - 1 && (
                <div className="w-0.5 flex-1 min-h-3 mt-0.5" style={{ backgroundColor: `${s.color}30` }} />
              )}
            </div>
            <div className="flex-1 rounded-xl border-2 p-2.5" style={{ borderColor: s.color, backgroundColor: `${s.color}08` }}>
              <div className="font-bold text-[12px] mb-1.5" style={{ color: s.color }}>{s.label}</div>
              <div className="grid grid-cols-2 gap-1">
                {s.content.map((c, j) => (
                  <div key={j} className="flex items-start gap-1">
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-[11px] text-[#404040]">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
