import React from "react";

const criteria = [
  {
    criterion: "Governance Fit",
    weight: 20,
    whatGoodLooks: "Decision rights match client; authority design matches operating speed",
    redFlag: "Discretion rhetoric without usable delegation design",
    providerA: 4,
    providerB: 3,
    providerC: 2,
    isCritical: true,
  },
  {
    criterion: "Policy and Portfolio Quality",
    weight: 18,
    whatGoodLooks: "Benchmark stack, risk budget, and asset allocation all coherent",
    redFlag: "Generic policy copied across clients",
    providerA: 4,
    providerB: 4,
    providerC: 3,
    isCritical: false,
  },
  {
    criterion: "Implementation Depth",
    weight: 16,
    whatGoodLooks: "Clear execution path, named handoffs, post-trade reporting",
    redFlag: "Thin operating detail behind investment philosophy",
    providerA: 3,
    providerB: 5,
    providerC: 2,
    isCritical: true,
  },
  {
    criterion: "Private Program Readiness",
    weight: 12,
    whatGoodLooks: "Pacing, commitment governance, collateral structure, PME benchmark",
    redFlag: "Access claims without conflict disclosure",
    providerA: 2,
    providerB: 5,
    providerC: 2,
    isCritical: false,
  },
  {
    criterion: "Reporting Quality",
    weight: 12,
    whatGoodLooks: "Objective-first, board-ready, transparent disclosures",
    redFlag: "Polished but shallow — no implication section",
    providerA: 5,
    providerB: 3,
    providerC: 3,
    isCritical: false,
  },
  {
    criterion: "Conflicts and Economics",
    weight: 10,
    whatGoodLooks: "All fee layers explainable; incentives aligned to client outcomes",
    redFlag: "Opaque internal incentives or heavy affiliated product use",
    providerA: 4,
    providerB: 2,
    providerC: 4,
    isCritical: true,
  },
  {
    criterion: "Team Depth and Succession",
    weight: 8,
    whatGoodLooks: "Clear primary and backup ownership; succession named",
    redFlag: "Single-point-of-failure on key roles",
    providerA: 4,
    providerB: 4,
    providerC: 2,
    isCritical: false,
  },
  {
    criterion: "Onboarding and Transition Readiness",
    weight: 4,
    whatGoodLooks: "Transition plan, benchmark map, custody readiness all documented",
    redFlag: "Vague onboarding language in proposal",
    providerA: 3,
    providerB: 4,
    providerC: 3,
    isCritical: false,
  },
];

function ScoreBar({ score }: { score: number }) {
  const color = score >= 4 ? "#2294BD" : score === 3 ? "#FAA51A" : "#D9532B";
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((d) => (
          <div
            key={d}
            className="w-2 h-2 rounded-sm"
            style={{ backgroundColor: d <= score ? color : "#E8DDD4" }}
          />
        ))}
      </div>
      <span className="text-[9px] font-bold" style={{ color: color === "#FAA51A" ? "#b07000" : color }}>{score}/5</span>
    </div>
  );
}

export default function OCIOProviderEvaluationScorecard() {
  const totalA = criteria.reduce((s, c) => s + c.providerA * (c.weight / 100), 0);
  const totalB = criteria.reduce((s, c) => s + c.providerB * (c.weight / 100), 0);
  const totalC = criteria.reduce((s, c) => s + c.providerC * (c.weight / 100), 0);

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        OCIO Provider Evaluation Scorecard
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Weights should follow client need, not market fashion.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A disciplined scorecard turns subjective impressions into a more defensible recommendation.
      </p>

      {/* Weighted totals summary */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Provider A", score: totalA, highlight: totalA >= totalB && totalA >= totalC },
          { label: "Provider B", score: totalB, highlight: totalB >= totalA && totalB >= totalC },
          { label: "Provider C", score: totalC, highlight: totalC >= totalA && totalC >= totalB },
        ].map((p, i) => (
          <div
            key={i}
            className="rounded-xl p-3 text-center border-2"
            style={{
              borderColor: p.highlight ? "#2294BD" : "#E8DDD4",
              backgroundColor: p.highlight ? "#2294BD14" : "#FBF7F3",
            }}
          >
            <p className="text-xs font-bold text-[#404040] mb-1">{p.label}</p>
            <p className="text-2xl font-black" style={{ color: p.highlight ? "#2294BD" : "#404040" }}>
              {(p.score * 100).toFixed(0)}
            </p>
            <p className="text-[10px] text-[#404040]">weighted score / 500</p>
            {p.highlight && <p className="text-[9px] font-bold text-[#2294BD] mt-0.5">Preferred</p>}
          </div>
        ))}
      </div>

      {/* Detailed scorecard */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-tl-lg" style={{ minWidth: 140 }}>Criterion</th>
              <th className="text-center px-2 py-2 text-[10px] font-bold uppercase" style={{ minWidth: 50 }}>Wt</th>
              <th className="text-left px-3 py-2 text-[10px] font-bold uppercase" style={{ minWidth: 160 }}>What Good Looks Like</th>
              <th className="text-center px-2 py-2 text-[10px] font-bold uppercase" style={{ minWidth: 80 }}>Provider A</th>
              <th className="text-center px-2 py-2 text-[10px] font-bold uppercase" style={{ minWidth: 80 }}>Provider B</th>
              <th className="text-center px-2 py-2 text-[10px] font-bold uppercase rounded-tr-lg" style={{ minWidth: 80 }}>Provider C</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((c, i) => (
              <React.Fragment key={i}>
                <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                    <div className="flex items-center gap-1.5">
                      {c.isCritical && (
                        <span className="text-[8px] font-bold px-1 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>Key</span>
                      )}
                      <p className="text-xs font-bold text-[#1A1A1A]">{c.criterion}</p>
                    </div>
                  </td>
                  <td className="text-center px-2 py-2.5 border-b border-[#E8DDD4] align-top">
                    <span className="text-xs font-bold text-[#404040]">{c.weight}%</span>
                  </td>
                  <td className="px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                    <p className="text-[10px] text-[#404040]">{c.whatGoodLooks}</p>
                    <p className="text-[9px] font-semibold text-[#D9532B] mt-0.5">Red flag: {c.redFlag}</p>
                  </td>
                  <td className="text-center px-2 py-2.5 border-b border-[#E8DDD4] align-middle">
                    <ScoreBar score={c.providerA} />
                  </td>
                  <td className="text-center px-2 py-2.5 border-b border-[#E8DDD4] align-middle">
                    <ScoreBar score={c.providerB} />
                  </td>
                  <td className="text-center px-2 py-2.5 border-b border-[#E8DDD4] align-middle">
                    <ScoreBar score={c.providerC} />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a disciplined scorecard turns subjective impressions into a more defensible recommendation.
      </p>
    </div>
  );
}
