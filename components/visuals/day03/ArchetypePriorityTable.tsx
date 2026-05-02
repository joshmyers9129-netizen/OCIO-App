import React from "react";

const rows = [
  {
    archetype: "DB Pension",
    objective: "Funded status and endgame readiness",
    liquidityNeed: "Moderate to high, liability-linked",
    benchmarkFrame: "Liability or funded-status relative",
    reportingLens: "Sponsor and funded status",
    delegationSweet: "De-risking triggers, hedge governance, transitions",
  },
  {
    archetype: "Foundation",
    objective: "Support spending; preserve purchasing power",
    liquidityNeed: "Ongoing spending and commitments",
    benchmarkFrame: "Policy plus real-return frame",
    reportingLens: "Spending and purchasing power",
    delegationSweet: "Private-market pacing, manager substitution",
  },
  {
    archetype: "Healthcare Reserve",
    objective: "Protect enterprise flexibility",
    liquidityNeed: "High enterprise relevance",
    benchmarkFrame: "Reserve and liquidity frame",
    reportingLens: "Balance-sheet resilience",
    delegationSweet: "Multi-pool coordination, liquidity tiering",
  },
  {
    archetype: "Family Office",
    objective: "Preserve and grow capital across uses",
    liquidityNeed: "Variable, linked to external wealth events",
    benchmarkFrame: "Goal-based or custom",
    reportingLens: "Optionality and concentration offset",
    delegationSweet: "Continuity, tax coordination, customization",
  },
  {
    archetype: "Sovereign-Like Pool",
    objective: "Support strategic or reserve goals",
    liquidityNeed: "Political and macro dependent",
    benchmarkFrame: "Reserve or strategic objective frame",
    reportingLens: "Fiscal or strategic utility",
    delegationSweet: "Complex mandate design, multi-objective governance",
  },
];

const colDefs = [
  { key: "objective", label: "Primary Objective", color: "#2294BD" },
  { key: "liquidityNeed", label: "Liquidity Need", color: "#D9532B" },
  { key: "benchmarkFrame", label: "Benchmark Frame", color: "#404040" },
  { key: "reportingLens", label: "Reporting Lens", color: "#000000" },
  { key: "delegationSweet", label: "Delegation Sweet Spot", color: "#FAA51A" },
];

export default function ArchetypePriorityTable() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Same Size · Different Priorities
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Two institutions at similar scale can require very different policy and governance choices because the capital serves different jobs.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th
                className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg"
                style={{ minWidth: 120 }}
              >
                Archetype
              </th>
              {colDefs.map((col, i) => (
                <th
                  key={i}
                  className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: col.color,
                    minWidth: 130,
                    borderRadius: i === colDefs.length - 1 ? "0 8px 0 0" : undefined,
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] text-xs">
                  {row.archetype}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#2294BD10" }}
                >
                  {row.objective}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#D9532B10" }}
                >
                  {row.liquidityNeed}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#40404010" }}
                >
                  {row.benchmarkFrame}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#F0E6DD" }}
                >
                  {row.reportingLens}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#FAA51A10" }}
                >
                  {row.delegationSweet}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: two institutions can sit at similar scale and still need different policy, reporting, and delegation because the capital serves different jobs.
      </p>
    </div>
  );
}
