"use client";

// Day 05 visuals: delegation ladder and decision-rights matrix

export function Day05DelegationLadder() {
  const rungs = [
    {
      level: 6,
      label: "Full Total-Portfolio OCIO",
      comfort: "Boards that trust process and want speed",
      benefit: "Maximum implementation efficiency",
      risk: "Principal-agent misalignment if poorly governed",
      color: "#2A9D60",
    },
    {
      level: 5,
      label: "Tactical Discretion Within Limits",
      comfort: "Committees willing to delegate short-term moves",
      benefit: "Rapid response to market dislocations",
      risk: "Tactical drift from strategic intent",
      color: "#7C5CBF",
    },
    {
      level: 4,
      label: "Manager-Change Discretion Within Policy",
      comfort: "Clients trusting provider manager research",
      benefit: "Faster manager turnover, better lineup quality",
      risk: "Style or benchmark misfit if not constrained",
      color: "#2294BD",
    },
    {
      level: 3,
      label: "Sleeve-Level Delegation",
      comfort: "Moderate governance capacity, asset-class-specific",
      benefit: "Operational efficiency per sleeve",
      risk: "Total-portfolio coherence risk",
      color: "#FAA51A",
    },
    {
      level: 2,
      label: "Rebalance-Only Discretion",
      comfort: "Clients wanting policy adherence without committee vote",
      benefit: "Removes drift from target allocation",
      risk: "Execution transparency needed",
      color: "#D9532B",
    },
    {
      level: 1,
      label: "Advice Only",
      comfort: "Clients who want full control",
      benefit: "Maximum oversight; no delegation gap",
      risk: "Decision speed limited by governance capacity",
      color: "#404040",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="relative">
        {rungs.map((r, i) => {
          const indent = (rungs.length - i - 1) * 12;
          return (
            <div
              key={r.level}
              className="relative rounded-lg border mb-1.5 p-2.5"
              style={{
                marginLeft: `${indent}px`,
                borderColor: r.color,
                backgroundColor: `${r.color}15`,
              }}
            >
              <div className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.level}
                </span>
                <div className="flex-1">
                  <div className="font-bold text-[12px] mb-1" style={{ color: r.color }}>{r.label}</div>
                  <div className="grid grid-cols-3 gap-1 text-[10px]">
                    <div>
                      <span className="font-semibold text-[#404040]">Client comfort: </span>
                      <span className="text-[#404040]">{r.comfort}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#2A9D60]">Speed benefit: </span>
                      <span className="text-[#404040]">{r.benefit}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#D9532B]">Risk if misapplied: </span>
                      <span className="text-[#404040]">{r.risk}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center text-[10px] text-[#404040] mt-1">← Narrower Delegation — Broader Delegation →</div>
      </div>
    </div>
  );
}

export function Day05DecisionRightsMatrix() {
  const decisions = [
    "Policy Allocation",
    "Benchmark Changes",
    "Manager Hires / Fires",
    "Rebalancing",
    "Tactical Tilts",
    "Private Commitments",
    "Derivative Usage",
    "Liquidity Response",
    "Extraordinary Market Events",
  ];

  type Cell = "R" | "D" | "C" | "E" | "P" | "";

  const matrix: Cell[][] = [
    ["R", "",  "",  "",  "" ],
    ["R", "",  "C", "",  "" ],
    ["",  "D", "",  "",  "" ],
    ["",  "D", "",  "",  "" ],
    ["",  "D", "C", "",  "" ],
    ["R", "",  "C", "",  "" ],
    ["",  "D", "C", "",  "" ],
    ["",  "D", "",  "E", "P"],
    ["",  "",  "",  "E", "P"],
  ];

  const cols = ["Client Reserves", "Provider Delegates", "Consult Before Acting", "Escalate After Acting", "Emergency Protocol"];

  const cellStyle: Record<string, string> = {
    R: "bg-[#2294BD] text-white",
    D: "bg-[#2A9D60] text-white",
    C: "bg-[#FAA51A] text-white",
    E: "bg-[#D9532B] text-white",
    P: "bg-[#7C5CBF] text-white",
    "": "bg-transparent text-transparent",
  };

  const cellLabel: Record<string, string> = { R: "Reserved", D: "Delegated", C: "Consult", E: "Escalate", P: "Protocol", "": "—" };

  return (
    <div className="font-sans text-[12px] overflow-x-auto">
      <table className="w-full border-collapse min-w-[580px]">
        <thead>
          <tr className="bg-[#2294BD] text-white">
            <th className="px-2 py-2 text-left text-[11px] font-bold">Decision</th>
            {cols.map((c) => (
              <th key={c} className="px-2 py-2 text-center text-[10px] font-bold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {decisions.map((d, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
              <td className="px-2 py-1.5 font-semibold text-[#000] border-b border-[#E5E5E5]">{d}</td>
              {matrix[i].map((cell, j) => (
                <td key={j} className="px-2 py-1.5 text-center border-b border-[#E5E5E5]">
                  {cell ? (
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${cellStyle[cell]}`}>
                      {cellLabel[cell]}
                    </span>
                  ) : (
                    <span className="text-[#D0D0D0]">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
