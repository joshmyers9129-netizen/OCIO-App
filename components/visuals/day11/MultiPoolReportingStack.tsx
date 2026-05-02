import React from "react";

const enterpriseSummary = {
  totalValue: "$1.4B",
  overallReturn: "+6.8%",
  overallBenchmark: "+6.2%",
  liquidityConcern: "Operating pool liquidity near lower policy bound — monitor",
};

const pools = [
  {
    name: "Operating Cash Pool",
    objective: "Protect continuity — min. 6 months of operating cash",
    benchmark: "Capital preservation",
    liquidityStatus: "Adequate — within policy",
    recentResult: "+1.2% (Q)",
    statusColor: "#2294BD",
    statusLabel: "On track",
    color: "#000000",
    keyMetric: "Min. liquidity: 98% accessible within 2 days",
  },
  {
    name: "Strategic Reserve Pool",
    objective: "Absorb enterprise shocks; provide buffer for covenant stress",
    benchmark: "Conservative multi-asset",
    liquidityStatus: "Strong — above policy threshold",
    recentResult: "+4.1% (Q)",
    statusColor: "#2294BD",
    statusLabel: "On track",
    color: "#404040",
    keyMetric: "Reserve drawdown: 2.4% — within policy",
  },
  {
    name: "Long-Term Capital Pool",
    objective: "Support long-run growth and mission capacity",
    benchmark: "Diversified multi-asset (60/40+)",
    liquidityStatus: "Normal — private commitments on plan",
    recentResult: "+9.3% (Q)",
    statusColor: "#2294BD",
    statusLabel: "Strong",
    color: "#2294BD",
    keyMetric: "Private pacing: 4 commitments YTD vs. 5 planned",
  },
  {
    name: "Liability Reserve / Self-Insurance",
    objective: "Maintain reserve adequacy against claims pattern",
    benchmark: "Reserve-adequacy measure",
    liquidityStatus: "Under watch — claim activity elevated",
    recentResult: "+2.8% (Q)",
    statusColor: "#D9532B",
    statusLabel: "Watch",
    color: "#D9532B",
    keyMetric: "Reserve ratio: 94% vs. 100% target — flag",
    flagNote: "Claims elevated — review reserve adequacy at next board meeting",
  },
];

export default function MultiPoolReportingStack() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Multi-Pool Reporting Stack
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Enterprise reporting should summarize, not blur, pool-specific objectives.
      </p>

      {/* Enterprise summary banner */}
      <div className="bg-[#00000010] border border-[#40404030] rounded-xl px-4 py-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-[#1A1A1A]">Enterprise Summary · {enterpriseSummary.totalValue} total AUM</p>
          <div className="flex gap-3">
            <span className="text-xs font-bold text-[#2294BD]">Return: {enterpriseSummary.overallReturn}</span>
            <span className="text-xs text-[#404040]">vs. benchmark {enterpriseSummary.overallBenchmark}</span>
          </div>
        </div>
        {enterpriseSummary.liquidityConcern && (
          <div className="bg-[#FAA51A15] border border-[#FAA51A40] rounded px-3 py-1.5">
            <p className="text-[11px] font-semibold text-[#b07000]">Note: {enterpriseSummary.liquidityConcern}</p>
          </div>
        )}
        <p className="text-[10px] text-[#404040] mt-1.5 italic">Cash mobility limitation: operating and reserve pools are not freely interchangeable under enterprise stress.</p>
      </div>

      {/* Pool cards */}
      <div className="space-y-3">
        {pools.map((pool, i) => (
          <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: pool.color + "40" }}>
            {/* Pool header */}
            <div
              className="px-4 py-2 flex items-center justify-between"
              style={{ backgroundColor: pool.color + "12" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pool.color }} />
                <p className="text-sm font-bold text-[#1A1A1A]">{pool.name}</p>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: pool.statusColor + "20", color: pool.statusColor }}
              >
                {pool.statusLabel}
              </span>
            </div>

            {/* Pool metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8DDD4]">
              <div className="px-3 py-2.5">
                <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-1">Objective</p>
                <p className="text-xs text-[#404040]">{pool.objective}</p>
              </div>
              <div className="px-3 py-2.5">
                <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-1">Benchmark</p>
                <p className="text-xs text-[#404040]">{pool.benchmark}</p>
              </div>
              <div className="px-3 py-2.5">
                <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-1">Liquidity Status</p>
                <p className="text-xs text-[#404040]">{pool.liquidityStatus}</p>
              </div>
              <div className="px-3 py-2.5">
                <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-1">Recent Result</p>
                <p className="text-sm font-bold" style={{ color: pool.color === "#000000" ? "#404040" : pool.color }}>{pool.recentResult}</p>
                <p className="text-[10px] text-[#404040]">{pool.keyMetric}</p>
              </div>
            </div>

            {pool.flagNote && (
              <div className="px-4 py-2 bg-[#D9532B10] border-t border-[#D9532B30]">
                <p className="text-[10px] font-bold text-[#D9532B]">{pool.flagNote}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: reporting should let leadership see both pool integrity and enterprise interaction in one view.
      </p>
    </div>
  );
}
