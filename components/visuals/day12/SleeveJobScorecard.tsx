import React from "react";

const sleeves = [
  {
    name: "Core Beta",
    role: "Market beta — passive / low-cost",
    roleClarity: 3,
    benchmarkFit: 3,
    costEfficiency: 3,
    transitionDifficulty: 1,
    recommendation: "Keep unless cost issue",
    recommendationColor: "#2294BD",
    flag: false,
  },
  {
    name: "Active Specialist",
    role: "Targeted active — differentiated return",
    roleClarity: 2,
    benchmarkFit: 2,
    costEfficiency: 2,
    transitionDifficulty: 2,
    recommendation: "Test continued edge and role",
    recommendationColor: "#b07000",
    flag: true,
  },
  {
    name: "Completion / Overlay",
    role: "Precision fit — close residual gaps",
    roleClarity: 3,
    benchmarkFit: 3,
    costEfficiency: 2,
    transitionDifficulty: 2,
    recommendation: "Protect architecture",
    recommendationColor: "#2294BD",
    flag: false,
  },
  {
    name: "Liability Hedge",
    role: "Duration and liability sensitivity",
    roleClarity: 3,
    benchmarkFit: 3,
    costEfficiency: 3,
    transitionDifficulty: 2,
    recommendation: "Keep — structurally important",
    recommendationColor: "#2294BD",
    flag: false,
  },
  {
    name: "Private Growth",
    role: "Illiquidity premium — long horizon",
    roleClarity: 2,
    benchmarkFit: 2,
    costEfficiency: 1,
    transitionDifficulty: 3,
    recommendation: "Review pacing and benchmark",
    recommendationColor: "#b07000",
    flag: true,
  },
  {
    name: "Legacy Satellite Mandates",
    role: "Unclear — overlapping styles",
    roleClarity: 1,
    benchmarkFit: 1,
    costEfficiency: 1,
    transitionDifficulty: 2,
    recommendation: "Candidate for exit",
    recommendationColor: "#D9532B",
    flag: true,
    flagNote: "Could a simpler tool do this job?",
  },
];

function StatusDots({ value }: { value: number }) {
  const color = value === 3 ? "#2294BD" : value === 2 ? "#FAA51A" : "#D9532B";
  const label = value === 3 ? "High" : value === 2 ? "Medium" : "Low";
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-1">
        {[1, 2, 3].map((d) => (
          <div
            key={d}
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: d <= value ? color : "#E8DDD4" }}
          />
        ))}
      </div>
      <span className="text-[9px] font-bold" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export default function SleeveJobScorecard() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Sleeve Job Scorecard
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Monitoring should start with role before performance.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Before evaluating performance, confirm each sleeve has a clear job and a meaningful benchmark.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {[
          { color: "#2294BD", label: "High — clear and effective" },
          { color: "#FAA51A", label: "Medium — assess and monitor" },
          { color: "#D9532B", label: "Low — review or exit" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d <= (i === 0 ? 3 : i === 1 ? 2 : 1) ? l.color : "#E8DDD4" }}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider bg-[#1A1A1A] text-white rounded-tl-lg" style={{ minWidth: 140 }}>
                Sleeve
              </th>
              {[
                "Role Clarity",
                "Benchmark Fit",
                "Cost Efficiency",
                "Transition Difficulty",
              ].map((col, i) => (
                <th
                  key={i}
                  className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: "#404040", minWidth: 100 }}
                >
                  {col}
                </th>
              ))}
              <th
                className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white rounded-tr-lg"
                style={{ backgroundColor: "#404040", minWidth: 140 }}
              >
                Decision
              </th>
            </tr>
          </thead>
          <tbody>
            {sleeves.map((sleeve, i) => (
              <React.Fragment key={i}>
                <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-3 border-b border-[#E8DDD4] align-top">
                    <p className="text-xs font-bold text-[#1A1A1A]">{sleeve.name}</p>
                    <p className="text-[10px] text-[#404040]">{sleeve.role}</p>
                  </td>
                  <td className="text-center px-3 py-3 border-b border-[#E8DDD4] align-middle">
                    <StatusDots value={sleeve.roleClarity} />
                  </td>
                  <td className="text-center px-3 py-3 border-b border-[#E8DDD4] align-middle">
                    <StatusDots value={sleeve.benchmarkFit} />
                  </td>
                  <td className="text-center px-3 py-3 border-b border-[#E8DDD4] align-middle">
                    <StatusDots value={sleeve.costEfficiency} />
                  </td>
                  <td className="text-center px-3 py-3 border-b border-[#E8DDD4] align-middle">
                    <StatusDots value={sleeve.transitionDifficulty} />
                  </td>
                  <td className="text-center px-3 py-3 border-b border-[#E8DDD4] align-middle">
                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded"
                      style={{
                        backgroundColor: sleeve.recommendationColor + "18",
                        color: sleeve.recommendationColor,
                      }}
                    >
                      {sleeve.recommendation}
                    </span>
                  </td>
                </tr>
                {sleeve.flagNote && (
                  <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                    <td colSpan={6} className="px-4 pb-2 border-b border-[#E8DDD4]">
                      <div className="rounded px-3 py-1.5 bg-[#FAA51A12] border-l-2 border-[#FAA51A]">
                        <p className="text-[10px] font-bold italic text-[#b07000]">
                          {sleeve.flagNote}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: monitoring should start with role before performance. A sleeve that cannot define its job cannot be evaluated fairly.
      </p>
    </div>
  );
}
