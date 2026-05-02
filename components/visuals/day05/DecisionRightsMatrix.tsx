import React from "react";

type Mark = "✓" | "A" | "—" | "C" | "R" | "I";

interface MatrixRow {
  decision: string;
  board: Mark;
  staff: Mark;
  ocio: Mark;
  escalation: string;
  flag?: boolean;
}

const rows: MatrixRow[] = [
  {
    decision: "Benchmark Changes",
    board: "A",
    staff: "C",
    ocio: "C",
    escalation: "Any structural change",
    flag: true,
  },
  {
    decision: "Public-Manager Changes",
    board: "—",
    staff: "C",
    ocio: "✓",
    escalation: "New strategy type",
  },
  {
    decision: "Private Commitments",
    board: "A",
    staff: "C",
    ocio: "R",
    escalation: "Exceeds pacing plan",
    flag: true,
  },
  {
    decision: "Rebalancing",
    board: "—",
    staff: "C",
    ocio: "✓",
    escalation: "Breaches policy band",
  },
  {
    decision: "Cash Management",
    board: "—",
    staff: "—",
    ocio: "✓",
    escalation: "Material shortfall",
  },
  {
    decision: "Derivatives Use",
    board: "A",
    staff: "C",
    ocio: "R",
    escalation: "Leverage beyond policy norm",
    flag: true,
  },
  {
    decision: "Reporting Exceptions",
    board: "I",
    staff: "A",
    ocio: "R",
    escalation: "Unexplained variance",
  },
];

function markStyle(m: Mark) {
  if (m === "A") return { bg: "#00000015", color: "#000000", fw: "bold" };
  if (m === "✓") return { bg: "#2294BD18", color: "#2294BD", fw: "bold" };
  if (m === "R") return { bg: "#2294BD12", color: "#2294BD", fw: "bold" };
  if (m === "C") return { bg: "#FAA51A15", color: "#b07000", fw: "normal" };
  if (m === "—") return { bg: "transparent", color: "#CCCCCC", fw: "normal" };
  return { bg: "transparent", color: "#404040", fw: "normal" };
}

export default function DecisionRightsMatrix() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Top banner */}
      <div className="bg-[#00000010] border border-[#40404030] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#1A1A1A]">Authority without reporting is not oversight</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Decision-Rights Matrix · Retained, Shared, Delegated
      </p>
      <p className="text-xs text-[#404040] mb-3">
        A blank escalation column is a governance defect.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          { mark: "A", label: "Accountable (board-retained)", color: "#000000" },
          { mark: "✓", label: "Delegated to OCIO", color: "#2294BD" },
          { mark: "C", label: "Consulted", color: "#b07000" },
          { mark: "I", label: "Informed only", color: "#404040" },
        ].map((l) => (
          <div key={l.mark} className="flex items-center gap-1.5">
            <span className="text-xs font-bold w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: l.color + "20", color: l.color }}>
              {l.mark}
            </span>
            <span className="text-xs text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg" style={{ minWidth: 150 }}>
                Decision
              </th>
              <th className="text-center px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#000000", minWidth: 70 }}>
                Board
              </th>
              <th className="text-center px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#404040", minWidth: 70 }}>
                Staff
              </th>
              <th className="text-center px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#2294BD", minWidth: 70 }}>
                OCIO
              </th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-tr-lg" style={{ backgroundColor: "#D9532B", minWidth: 160 }}>
                Escalation Trigger
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">
                  {row.decision}
                  {row.flag && (
                    <span className="ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>
                      Sensitive
                    </span>
                  )}
                </td>
                {(["board", "staff", "ocio"] as const).map((col) => {
                  const v = row[col];
                  const s = markStyle(v);
                  return (
                    <td
                      key={col}
                      className="text-center px-3 py-3 border-b border-[#E8DDD4] text-sm"
                      style={{ backgroundColor: s.bg }}
                    >
                      <span style={{ color: s.color, fontWeight: s.fw as React.CSSProperties["fontWeight"] }}>{v}</span>
                    </td>
                  );
                })}
                <td className="px-3 py-3 border-b border-[#E8DDD4] text-xs text-[#404040] italic">
                  {row.escalation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a mandate is strong when every important row has a visible owner and a visible route back to committee when facts change.
      </p>
    </div>
  );
}
