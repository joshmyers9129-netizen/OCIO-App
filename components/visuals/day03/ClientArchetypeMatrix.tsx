import React from "react";

const rows = [
  {
    archetype: "DB Pension",
    objective: "Manage funded status and endgame",
    dominantRisk: "Liability mismatch",
    governanceCadence: "Frequent; sponsor-driven",
    outsourcingTrigger: "Daily de-risking and hedge governance",
  },
  {
    archetype: "Endowment / Foundation",
    objective: "Support spending, preserve purchasing power",
    dominantRisk: "Spending and liquidity strain",
    governanceCadence: "Quarterly; mission-driven",
    outsourcingTrigger: "Lean staff and private-market complexity",
  },
  {
    archetype: "Healthcare / Reserve Pool",
    objective: "Protect enterprise flexibility",
    dominantRisk: "Liquidity and balance-sheet stress",
    governanceCadence: "Enterprise-linked; treasury-coordinated",
    outsourcingTrigger: "Multi-pool coordination",
  },
  {
    archetype: "Insurance-Related Pool",
    objective: "Support capital and liability needs",
    dominantRisk: "Accounting and capital sensitivity",
    governanceCadence: "Regulatory and reporting cycles",
    outsourcingTrigger: "Complex risk framework",
  },
  {
    archetype: "Family Office",
    objective: "Preserve and grow family capital across uses",
    dominantRisk: "Concentrated external exposures",
    governanceCadence: "Personal; generational",
    outsourcingTrigger: "Need for operating continuity",
  },
  {
    archetype: "Sovereign-Like Pool",
    objective: "Support strategic or reserve goals",
    dominantRisk: "Political and macro constraints",
    governanceCadence: "Macro and policy cycles",
    outsourcingTrigger: "Complex mandate design",
  },
];

const cols = [
  { label: "Primary Objective", key: "objective", color: "#2294BD" },
  { label: "Dominant Risk", key: "dominantRisk", color: "#D9532B" },
  { label: "Governance Cadence", key: "governanceCadence", color: "#000000" },
  { label: "Outsourcing Trigger", key: "outsourcingTrigger", color: "#FAA51A" },
];

export default function ClientArchetypeMatrix() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Six Archetypes · Six Decision Systems
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Client type is defined by purpose and constraints, not by size or brand label.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th
                className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg"
                style={{ minWidth: 130 }}
              >
                Archetype
              </th>
              {cols.map((col, i) => (
                <th
                  key={i}
                  className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: col.color,
                    minWidth: 150,
                    borderRadius: i === cols.length - 1 ? "0 8px 0 0" : undefined,
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
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] text-sm">
                  {row.archetype}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#2294BD12" }}
                >
                  {row.objective}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#D9532B12" }}
                >
                  {row.dominantRisk}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#F0E6DD" }}
                >
                  {row.governanceCadence}
                </td>
                <td
                  className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]"
                  style={{ backgroundColor: "#FAA51A12" }}
                >
                  {row.outsourcingTrigger}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: archetypes differ because the capital serves different institutional purposes. Similar asset size does not erase those differences.
      </p>
    </div>
  );
}
