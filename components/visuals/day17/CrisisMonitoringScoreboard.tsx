import React from "react";

const scoreboardRows = [
  {
    dimension: "Market Drawdown",
    currentStatus: "−14.2%",
    threshold: "Policy band −15% / risk budget 80%",
    statusLevel: "watch",
    owner: "OCIO Portfolio Mgr",
    nextAction: "Monitor daily — rebalance authorization ready if band breached",
    delegatedTaken: false,
    breached: false,
  },
  {
    dimension: "Liquidity Pressure",
    currentStatus: "8.1 months reserve",
    threshold: "< 6 months triggers escalation",
    statusLevel: "ok",
    owner: "OCIO + Treasury",
    nextAction: "Reserve adequate — Q2 call season watch",
    delegatedTaken: false,
    breached: false,
  },
  {
    dimension: "Denominator Effect",
    currentStatus: "Private share: 28.4%",
    threshold: "Target range 20–28% — near upper bound",
    statusLevel: "alert",
    owner: "OCIO + Committee",
    nextAction: "Pause new commitments — pacing review needed",
    delegatedTaken: true,
    delegatedNote: "Commitment pause actioned under delegated authority",
    breached: false,
  },
  {
    dimension: "Collateral / Margin",
    currentStatus: "Margin call: +$4M",
    threshold: "Buffer exhausted if +$8M",
    statusLevel: "watch",
    owner: "OCIO Overlay Team",
    nextAction: "Funding arranged — monitor for second leg",
    delegatedTaken: true,
    delegatedNote: "Margin funded from collateral pool — Tier 2",
    breached: false,
  },
  {
    dimension: "Communication Cadence",
    currentStatus: "Ad hoc note sent",
    threshold: "Board update within 48hrs of shock",
    statusLevel: "ok",
    owner: "OCIO Rel. Lead",
    nextAction: "Full quarterly dashboard update in 2 weeks",
    delegatedTaken: true,
    delegatedNote: "Crisis brief sent: market event, institution impact, actions taken",
    breached: false,
  },
  {
    dimension: "Governance Trigger Status",
    currentStatus: "Level 2 — Alert",
    threshold: "Level 3 requires board emergency call",
    statusLevel: "alert",
    owner: "Staff + OCIO",
    nextAction: "Board on standby — no emergency call needed yet",
    delegatedTaken: false,
    breached: false,
  },
];

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  ok: { color: "#2294BD", bg: "#2294BD14", label: "OK" },
  watch: { color: "#FAA51A", bg: "#FAA51A14", label: "Watch" },
  alert: { color: "#D9532B", bg: "#D9532B14", label: "Alert" },
  breached: { color: "#D9532B", bg: "#D9532B20", label: "Breached" },
};

export default function CrisisMonitoringScoreboard() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Crisis Monitoring Scoreboard
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Stress governance improves when the scoreboard is shared.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Crisis oversight gets stronger when the board can see market, liquidity, and governance conditions at the same time.
      </p>

      {/* Status legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(statusConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: "#2294BD" }} />
          <span className="text-[10px] text-[#404040]">Blue badge = delegated action taken</span>
        </div>
      </div>

      <div className="space-y-2">
        {scoreboardRows.map((row, i) => {
          const conf = statusConfig[row.statusLevel];
          return (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: conf.color + "40" }}
            >
              {/* Row header */}
              <div
                className="px-4 py-2 flex items-center justify-between gap-2"
                style={{ backgroundColor: conf.bg }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-[#1A1A1A]">{row.dimension}</p>
                  {row.delegatedTaken && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#2294BD18", color: "#2294BD" }}>
                      Action taken
                    </span>
                  )}
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                  style={{ backgroundColor: conf.color + "20", color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}
                >
                  {conf.label}
                </span>
              </div>

              {/* Row content */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Current Status</p>
                  <p className="text-sm font-bold" style={{ color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}>{row.currentStatus}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Threshold</p>
                  <p className="text-[11px] text-[#404040]">{row.threshold}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Owner</p>
                  <p className="text-[11px] text-[#404040]">{row.owner}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Next Action</p>
                  <p className="text-[11px] text-[#404040]">{row.nextAction}</p>
                </div>
              </div>

              {row.delegatedNote && (
                <div className="px-4 py-2 bg-[#2294BD10] border-t border-[#2294BD30]">
                  <p className="text-[10px] font-bold text-[#2294BD]">Delegated: {row.delegatedNote}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: crisis oversight gets stronger when the board can see market, liquidity, and governance conditions at the same time.
      </p>
    </div>
  );
}
