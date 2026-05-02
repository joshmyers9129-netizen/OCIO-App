import React from "react";

const rows = [
  {
    fn: "Research / Manager Oversight",
    primaryOwner: "Senior Research Lead",
    backupOwner: "2 Associate Analysts",
    timeSensitivity: "Low — weekly cadence",
    keyPersonRisk: "moderate",
    conflictRisk: "Low",
    conflictNote: null,
    mainDiligenceQ: "Who covers if research lead departs? Is the approved toolkit frozen?",
  },
  {
    fn: "Portfolio Management",
    primaryOwner: "Lead Portfolio Manager",
    backupOwner: "1 backup PM (limited to model portfolios)",
    timeSensitivity: "High — daily decisions",
    keyPersonRisk: "high",
    conflictRisk: "Moderate",
    conflictNote: "PM may face pressure from relationship team on custom promises",
    mainDiligenceQ: "Who is the true decision owner? Can backup PM run a custom mandate?",
  },
  {
    fn: "Implementation",
    primaryOwner: "Implementation Lead",
    backupOwner: "1 trader + custody team",
    timeSensitivity: "Very high — time-critical",
    keyPersonRisk: "high",
    conflictRisk: "Low",
    conflictNote: null,
    mainDiligenceQ: "Can execution continue if lead is out during a transition?",
  },
  {
    fn: "Reporting",
    primaryOwner: "Reporting Manager",
    backupOwner: "2 analysts (data only, not narrative)",
    timeSensitivity: "Medium — board cycle",
    keyPersonRisk: "moderate",
    conflictRisk: "Low",
    conflictNote: "Risk: narrative consistency may vary if backup prepares board materials",
    mainDiligenceQ: "Are narratives and disclosures consistent when staffing changes?",
  },
  {
    fn: "Client Coverage",
    primaryOwner: "Relationship Lead",
    backupOwner: "Rotating coverage — inconsistent",
    timeSensitivity: "High — board-schedule driven",
    keyPersonRisk: "high",
    conflictRisk: "High",
    conflictNote: "Relationship lead may over-commit platform to custom features or exceptions",
    mainDiligenceQ: "Can coverage lead override investment authority? Who says no?",
  },
  {
    fn: "Risk and Compliance",
    primaryOwner: "Risk Officer",
    backupOwner: "Outsourced — limited real-time coverage",
    timeSensitivity: "High — breach monitoring",
    keyPersonRisk: "high",
    conflictRisk: "Low",
    conflictNote: null,
    mainDiligenceQ: "Is outsourced risk coverage fast enough during crisis? Who escalates?",
  },
];

const riskConfig: Record<string, { color: string; label: string }> = {
  low: { color: "#2294BD", label: "Low" },
  moderate: { color: "#FAA51A", label: "Moderate" },
  high: { color: "#D9532B", label: "High" },
};

export default function CapacitySuccessionAndConflictMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Capacity, Succession and Conflict Map
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Depth matters most where actions are time-sensitive.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Team diligence improves when it tests continuity and incentives, not just current resumes.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(riskConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label} key-person or conflict risk</span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {rows.map((row, i) => {
          const kpConf = riskConfig[row.keyPersonRisk];
          const conflictLow = row.conflictRisk === "Low";

          return (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: kpConf.color + "40" }}
            >
              {/* Row header */}
              <div
                className="px-4 py-2 flex items-center justify-between"
                style={{ backgroundColor: kpConf.color + "10" }}
              >
                <p className="text-sm font-bold text-[#1A1A1A]">{row.fn}</p>
                <div className="flex gap-2">
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: kpConf.color + "20", color: kpConf.color === "#FAA51A" ? "#b07000" : kpConf.color }}
                  >
                    Key-person: {kpConf.label}
                  </span>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: conflictLow ? "#2294BD18" : row.conflictRisk === "High" ? "#D9532B18" : "#FAA51A18",
                      color: conflictLow ? "#2294BD" : row.conflictRisk === "High" ? "#D9532B" : "#b07000",
                    }}
                  >
                    Conflict: {row.conflictRisk}
                  </span>
                </div>
              </div>

              {/* Row content */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Primary Owner</p>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{row.primaryOwner}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Backup Coverage</p>
                  <p className="text-[11px] text-[#404040]">{row.backupOwner}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Time Sensitivity</p>
                  <p className="text-[11px] text-[#404040]">{row.timeSensitivity}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Diligence Question</p>
                  <p className="text-[10px] italic text-[#404040]">{row.mainDiligenceQ}</p>
                </div>
              </div>

              {row.conflictNote && (
                <div className="px-4 py-2 bg-[#D9532B08] border-t border-[#D9532B30]">
                  <p className="text-[10px] font-bold text-[#D9532B]">Conflict risk: {row.conflictNote}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: team diligence improves when it tests continuity and incentives, not just current resumes.
      </p>
    </div>
  );
}
