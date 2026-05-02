import React from "react";

const memoSections = [
  {
    num: 1,
    label: "Executive Summary",
    question: "What are we recommending?",
    guidance: "3–5 sentences: recommendation, rationale, risks retained, approval requested",
    audienceNote: "Board language — clear conclusion up front",
    color: "#000000",
    boardLevel: true,
  },
  {
    num: 2,
    label: "Institutional Diagnosis",
    question: "Why is a change needed?",
    guidance: "Pool structure, governance pain points, cost and complexity issues, diagnostic findings",
    audienceNote: "Board + Staff — factual, brief",
    color: "#000000",
    boardLevel: true,
  },
  {
    num: 3,
    label: "Options Considered",
    question: "What alternatives were evaluated?",
    guidance: "2–4 alternatives with reasons for deselection; avoid overselling preferred",
    audienceNote: "Shows diligence — keeps in main memo",
    color: "#2294BD",
    boardLevel: false,
  },
  {
    num: 4,
    label: "Recommended Mandate Model",
    question: "Why this structure?",
    guidance: "Model choice: full, selective, or partial OCIO; decision-rights split summary; pool architecture",
    audienceNote: "Board-facing — keep high-level",
    color: "#2294BD",
    boardLevel: true,
  },
  {
    num: 5,
    label: "Decision-Rights Schedule",
    question: "Who will decide what?",
    guidance: "Retained decisions / delegated decisions / escalation triggers — explicit table or list",
    audienceNote: "Board must approve this section",
    color: "#FAA51A",
    boardLevel: true,
  },
  {
    num: 6,
    label: "Policy and Implementation Design",
    question: "What will the portfolio look like and how will it be executed?",
    guidance: "Policy portfolio, sleeve structure, benchmarks, transition plan, implementation tools",
    audienceNote: "Main memo: high level. Detail → Appendix",
    color: "#2294BD",
    boardLevel: false,
    appendixNote: "Full benchmark stack and model weights → Appendix",
  },
  {
    num: 7,
    label: "Risks, Conflicts, and Mitigants",
    question: "What could go wrong and what does it cost?",
    guidance: "Name top 4–6 risks; each with owner, mitigation, and escalation trigger",
    audienceNote: "Name risks directly — do not bury in caveats",
    color: "#D9532B",
    boardLevel: true,
  },
  {
    num: 8,
    label: "Economics",
    question: "What does it cost?",
    guidance: "Fee layer summary: provider fee, underlying, implementation, overlay, affiliated product disclosure",
    audienceNote: "Full fee schedule → Appendix",
    color: "#D9532B",
    boardLevel: false,
    appendixNote: "Fee breakdown and conflict disclosures → Appendix",
  },
  {
    num: 9,
    label: "Approval Request and Next Steps",
    question: "What happens if approved?",
    guidance: "Exact resolution language; sequence: documentation → transition → reporting → first-quarter review",
    audienceNote: "Resolution-quality statement — not a loose summary",
    color: "#000000",
    boardLevel: true,
  },
];

export default function DecisionMemoAnatomy() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Decision Memo Anatomy
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Sequence matters — committees approve narratives, not raw analysis.</p>
      </div>
      <p className="text-xs text-[#404040] mb-5">
        The best memo order reduces cognitive load and makes tradeoffs explicit before the vote.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#00000018] border border-black" />
          <span className="text-[10px] text-[#404040]">Board-level section (must dominate)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#2294BD14] border border-[#2294BD]" />
          <span className="text-[10px] text-[#404040]">Staff / technical section</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#FAA51A14] border border-[#FAA51A]" />
          <span className="text-[10px] text-[#404040]">Shared — board approval required</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#D9532B14] border border-[#D9532B]" />
          <span className="text-[10px] text-[#404040]">Risk / economics — name directly</span>
        </div>
      </div>

      {/* Memo sections */}
      <div className="space-y-2">
        {memoSections.map((section, i) => (
          <div
            key={i}
            className="rounded-xl border-l-4 p-3"
            style={{
              borderLeftColor: section.color,
              backgroundColor: section.color + "0C",
            }}
          >
            <div className="flex items-start gap-3">
              {/* Number badge */}
              <div
                className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black"
                style={{ backgroundColor: section.color }}
              >
                {section.num}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-xs font-bold text-[#1A1A1A]">{section.label}</p>
                    <p className="text-[10px] italic text-[#404040]">{section.question}</p>
                  </div>
                  <div className="flex flex-col gap-1 items-end flex-shrink-0">
                    {section.boardLevel && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#00000014", color: "#404040" }}>
                        Board language
                      </span>
                    )}
                    {section.appendixNote && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#2294BD14", color: "#2294BD" }}>
                        Appendix
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Content Guidance</p>
                    <p className="text-[10px] text-[#1A1A1A]">{section.guidance}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Audience Note</p>
                    <p className="text-[10px] text-[#404040] italic">{section.audienceNote}</p>
                  </div>
                </div>

                {section.appendixNote && (
                  <div className="mt-1.5 rounded px-2 py-1 bg-[#2294BD10] border-l-2 border-[#2294BD]">
                    <p className="text-[9px] font-semibold text-[#2294BD]">{section.appendixNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the best memo order reduces cognitive load and makes tradeoffs explicit before the vote.
      </p>
    </div>
  );
}
