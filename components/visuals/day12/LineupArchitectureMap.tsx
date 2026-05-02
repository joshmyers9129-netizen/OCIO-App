import React from "react";

const sleeves = [
  {
    name: "Global Core Equity",
    role: "Market beta — broad exposure",
    style: "Passive / low-cost core",
    benchmark: "MSCI ACWI",
    components: 1,
    pctOfPortfolio: 30,
    color: "#2294BD",
    flag: false,
  },
  {
    name: "Active Specialist Equity",
    role: "Targeted active risk — differentiated return",
    style: "Active concentrated (1–2 mandates)",
    benchmark: "MSCI ACWI + 200bps hurdle",
    components: 2,
    pctOfPortfolio: 15,
    color: "#2294BD",
    flag: false,
  },
  {
    name: "Liability Hedge / Core Fixed Income",
    role: "Duration and liability sensitivity",
    style: "Structured — long bonds + swaps",
    benchmark: "Custom liability index",
    components: 2,
    pctOfPortfolio: 20,
    color: "#404040",
    flag: false,
  },
  {
    name: "Private Growth",
    role: "Illiquidity premium — long horizon growth",
    style: "Commingled PE, VC, private credit",
    benchmark: "PME (public market equivalent)",
    components: 3,
    pctOfPortfolio: 18,
    color: "#FAA51A",
    flag: false,
  },
  {
    name: "Completion / Beta Alignment",
    role: "Precise policy fit — close residual gaps",
    style: "Index or overlay tools",
    benchmark: "Custom completion benchmark",
    components: 1,
    pctOfPortfolio: 7,
    color: "#2294BD",
    flag: false,
  },
  {
    name: "Legacy Satellite Mandates",
    role: "Unclear — multiple overlapping styles",
    style: "Mixed (2 active, 1 semi-passive)",
    benchmark: "Multiple inconsistent benchmarks",
    components: 3,
    pctOfPortfolio: 10,
    color: "#D9532B",
    flag: true,
    flagNote: "Crowding risk — no clear distinct role",
  },
];

export default function LineupArchitectureMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Banner */}
      <div className="bg-[#00000010] border border-[#40404030] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#1A1A1A]">Every manager should trace back to a sleeve job.</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Lineup Architecture Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        A lineup is coherent when every manager slot can be explained by the job of the sleeve above it.
      </p>

      {/* Architecture: Policy level → Implementation level */}
      <div className="space-y-2">
        {sleeves.map((sleeve, i) => (
          <div
            key={i}
            className="rounded-xl border-l-4 overflow-hidden"
            style={{ borderLeftColor: sleeve.color }}
          >
            <div
              className="px-4 py-2.5"
              style={{ backgroundColor: sleeve.color + "0E" }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: sleeve.color + "22", color: sleeve.color === "#000000" || sleeve.color === "#404040" ? "#404040" : sleeve.color }}
                  >
                    {sleeve.pctOfPortfolio}%
                  </span>
                  <p className="text-sm font-bold text-[#1A1A1A]">{sleeve.name}</p>
                  {sleeve.flag && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>
                      Review
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#404040] flex-shrink-0">{sleeve.components} component{sleeve.components > 1 ? "s" : ""}</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Role</p>
                  <p className="text-[10px] text-[#1A1A1A]">{sleeve.role}</p>
                </div>
                <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Style</p>
                  <p className="text-[10px] text-[#1A1A1A]">{sleeve.style}</p>
                </div>
                <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Benchmark</p>
                  <p className="text-[10px] text-[#1A1A1A]">{sleeve.benchmark}</p>
                </div>
              </div>

              {sleeve.flagNote && (
                <div className="mt-2 rounded px-2 py-1 bg-[#D9532B12] border-l-2 border-[#D9532B]">
                  <p className="text-[10px] font-bold text-[#D9532B]">{sleeve.flagNote}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a lineup is coherent when every manager slot can be explained by the job of the sleeve above it.
      </p>
    </div>
  );
}
