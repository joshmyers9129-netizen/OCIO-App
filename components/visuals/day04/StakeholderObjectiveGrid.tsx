import React from "react";

const stakeholders = [
  { label: "Board", primaryQ: "Does this fit policy?", fearMost: "Loss of control or unclear accountability" },
  { label: "Staff / CIO", primaryQ: "Can we execute and monitor this?", fearMost: "Implementation quality breakdown" },
  { label: "CFO / Treasurer", primaryQ: "What happens to cash?", fearMost: "Liquidity surprise" },
  { label: "Actuary", primaryQ: "How does liability framing change?", fearMost: "Mismatch in measurement basis" },
  { label: "Operations / Legal", primaryQ: "Can this be executed cleanly?", fearMost: "Process failure after approval" },
  { label: "Provider PM", primaryQ: "Do I have the authority to act?", fearMost: "Ambiguous delegation or delayed consent" },
];

const dimensions = [
  { key: "objective", label: "Objective Clarity", color: "#2294BD" },
  { key: "liquidity", label: "Liquidity Effect", color: "#D9532B" },
  { key: "funded", label: "Funded-Status Effect", color: "#404040" },
  { key: "operational", label: "Operational Path", color: "#D9532B" },
  { key: "benchmark", label: "Benchmark Effect", color: "#000000" },
  { key: "communication", label: "Communication Need", color: "#FAA51A" },
];

// Heat mapping: 3=high, 2=medium, 1=low
const heatData: Record<string, Record<string, number>> = {
  Board: { objective: 3, liquidity: 2, funded: 2, operational: 1, benchmark: 2, communication: 3 },
  "Staff / CIO": { objective: 3, liquidity: 2, funded: 2, operational: 3, benchmark: 3, communication: 2 },
  "CFO / Treasurer": { objective: 2, liquidity: 3, funded: 2, operational: 2, benchmark: 1, communication: 2 },
  Actuary: { objective: 2, liquidity: 1, funded: 3, operational: 1, benchmark: 3, communication: 2 },
  "Operations / Legal": { objective: 1, liquidity: 2, funded: 1, operational: 3, benchmark: 1, communication: 2 },
  "Provider PM": { objective: 3, liquidity: 2, funded: 2, operational: 3, benchmark: 3, communication: 2 },
};

function heatStyle(level: number, color: string) {
  if (level === 3) return { backgroundColor: color + "28", fontWeight: "bold", color };
  if (level === 2) return { backgroundColor: color + "12", fontWeight: "normal", color: "#404040" };
  return { backgroundColor: "transparent", fontWeight: "normal", color: "#BBBBBB" };
}

function heatLabel(level: number) {
  if (level === 3) return "●●●";
  if (level === 2) return "●●○";
  return "●○○";
}

export default function StakeholderObjectiveGrid() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Stakeholder Objectives in One View
      </p>
      <p className="text-xs text-[#404040] mb-1">
        Disagreement often reflects different scoreboards — not opposition to prudent investing.
      </p>
      <div className="bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4 inline-block">
        <p className="text-[11px] font-semibold text-[#b07000]">
          The same recommendation can be strong under one scoreboard and weak under another until the conflict is named.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg" style={{ minWidth: 120 }}>
                Stakeholder
              </th>
              {dimensions.map((d, i) => (
                <th
                  key={i}
                  className="text-center px-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: d.color,
                    minWidth: 90,
                    borderRadius: i === dimensions.length - 1 ? "0 8px 0 0" : undefined,
                  }}
                >
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stakeholders.map((s, si) => (
              <tr key={si} className={si % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">
                  {s.label}
                </td>
                {dimensions.map((d, di) => {
                  const level = heatData[s.label]?.[d.key] ?? 1;
                  const style = heatStyle(level, d.color);
                  return (
                    <td
                      key={di}
                      className="text-center px-2 py-3 border-b border-[#E8DDD4]"
                      style={{ backgroundColor: style.backgroundColor }}
                    >
                      <span className="text-[10px]" style={{ color: style.color, fontWeight: style.fontWeight as React.CSSProperties["fontWeight"] }}>
                        {heatLabel(level)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom detail cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {stakeholders.map((s, i) => (
          <div key={i} className="bg-[#FBF7F3] rounded-lg px-3 py-2 border border-[#E8DDD4]">
            <p className="text-xs font-bold text-[#1A1A1A]">{s.label}</p>
            <p className="text-[11px] text-[#404040]">
              <span className="font-semibold">Asks:</span> {s.primaryQ}
            </p>
            <p className="text-[11px] text-[#D9532B]">
              <span className="font-semibold">Fears:</span> {s.fearMost}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: better meeting outcomes come from naming the scoreboards explicitly before the room debates the recommendation.
      </p>
    </div>
  );
}
