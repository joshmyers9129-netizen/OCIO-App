import React from "react";

const triggers = [
  {
    fsRange: "Below 80%",
    growthStance: "Higher growth",
    hedgeStance: "Lower hedge (30–40%)",
    action: "Monitor; stress-test capital plan",
    authority: "Board review required",
    color: "#D9532B",
    hedgePct: 35,
    growthPct: 65,
  },
  {
    fsRange: "80% – 90%",
    growthStance: "Balanced (moderate growth)",
    hedgeStance: "Rising hedge (40–55%)",
    action: "Prepare next-trigger actions; confirm collateral plan",
    authority: "Staff and OCIO; board informed",
    color: "#FAA51A",
    hedgePct: 48,
    growthPct: 52,
  },
  {
    fsRange: "90% – 100%",
    growthStance: "Reduced growth",
    hedgeStance: "Higher hedge (55–75%)",
    action: "Execute pre-authorized de-risking shift",
    authority: "OCIO pre-authorized; report after",
    color: "#FAA51A",
    hedgePct: 65,
    growthPct: 35,
    annotation: "If not executable, it is not a real glide path",
  },
  {
    fsRange: "100% – 110%",
    growthStance: "Low growth focus",
    hedgeStance: "Very high hedge (75–90%)",
    action: "Lock in gains; review end-state options",
    authority: "OCIO pre-authorized; board for end-state",
    color: "#2294BD",
    hedgePct: 82,
    growthPct: 18,
  },
  {
    fsRange: "Above 110%",
    growthStance: "Capital preservation",
    hedgeStance: "Near-full hedge (90%+)",
    action: "Explore termination or buy-out readiness",
    authority: "Full board decision required",
    color: "#2294BD",
    hedgePct: 92,
    growthPct: 8,
  },
];

export default function GlidepathDecisionMap() {
  const barW = 200;

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Glide-Path Decision Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        The glide path is valuable only when triggers, actions, and authority are specified together.
      </p>

      {/* Legend */}
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#2294BD" }} />
          <span className="text-xs text-[#404040]">Hedge sleeve (LDI)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#E8DDD4" }} />
          <span className="text-xs text-[#404040]">Growth sleeve</span>
        </div>
      </div>

      <div className="space-y-3">
        {triggers.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: t.color + "50" }}
          >
            {/* Header row */}
            <div
              className="px-4 py-2 flex items-center gap-3"
              style={{ backgroundColor: t.color + "15" }}
            >
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: t.color + "25", color: t.color }}
              >
                {t.fsRange}
              </span>
              <span className="text-xs font-semibold text-[#1A1A1A]">Funded Status</span>
              {t.annotation && (
                <span className="ml-auto text-[10px] font-bold italic" style={{ color: t.color }}>
                  ↑ {t.annotation}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8DDD4]">
              {/* Allocation bar */}
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-wider mb-2">Target Allocation</p>
                <div className="flex rounded overflow-hidden" style={{ height: 24, width: barW }}>
                  <div
                    style={{ width: `${t.hedgePct}%`, backgroundColor: "#2294BD" }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-white text-[9px] font-bold">{t.hedgePct}%</span>
                  </div>
                  <div
                    style={{ width: `${t.growthPct}%`, backgroundColor: "#E8DDD4" }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-[#404040] text-[9px] font-bold">{t.growthPct}%</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-1">
                  <p className="text-[10px] text-[#2294BD]">{t.hedgeStance}</p>
                </div>
              </div>

              {/* Action */}
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-[#b07000] uppercase tracking-wider mb-1">Required Action</p>
                <p className="text-xs text-[#1A1A1A]">{t.action}</p>
              </div>

              {/* Authority */}
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-wider mb-1">Authority</p>
                <p className="text-xs text-[#404040]">{t.authority}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reporting cadence side note */}
      <div className="mt-4 bg-[#2294BD10] border border-[#2294BD30] rounded px-3 py-2">
        <p className="text-xs font-bold text-[#2294BD] mb-1">Reporting cadence after a trigger event</p>
        <p className="text-[11px] text-[#404040]">
          Within 5 business days: notify staff and update collateral status. Within 30 days: provide post-trigger report to committee showing executed trade, funded-status effect, and new hedge ratio.
        </p>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the glide path is valuable only when triggers, actions, and authority are specified together.
      </p>
    </div>
  );
}
