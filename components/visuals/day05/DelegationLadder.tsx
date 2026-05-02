import React from "react";

const rungs = [
  {
    label: "Mission & Return Objective",
    authority: "Board-retained",
    why: "Defines purpose and long-term risk budget",
    color: "#000000",
    authType: "retained",
  },
  {
    label: "Strategic Asset Allocation",
    authority: "Board-retained (OCIO advice)",
    why: "Long-horizon policy choice",
    color: "#000000",
    authType: "retained",
  },
  {
    label: "Benchmark Philosophy",
    authority: "Board-retained (OCIO input)",
    why: "Frames how performance is evaluated",
    color: "#000000",
    authType: "retained",
  },
  {
    label: "Manager Structure",
    authority: "Shared",
    why: "Strategic oversight stays with board; selection moves to OCIO",
    color: "#FAA51A",
    authType: "shared",
    annotation: "Most disputes live here — committees want speed and control simultaneously",
  },
  {
    label: "Public-Manager Substitutions",
    authority: "Delegated (within policy)",
    why: "Needs operating speed; board informed after",
    color: "#2294BD",
    authType: "delegated",
    annotation: "Most disputes live here — committees want speed and control simultaneously",
  },
  {
    label: "Rebalancing",
    authority: "Delegated (within bands)",
    why: "Routine; board informed via quarterly reporting",
    color: "#2294BD",
    authType: "delegated",
  },
  {
    label: "Transition Execution",
    authority: "Delegated",
    why: "Pure implementation task — needs real-time responsiveness",
    color: "#2294BD",
    authType: "delegated",
  },
  {
    label: "Cash Management",
    authority: "Delegated",
    why: "Operational; pre-authorized within policy",
    color: "#2294BD",
    authType: "delegated",
  },
  {
    label: "Exception Escalation",
    authority: "Board escalation required",
    why: "Unusual events return to oversight on rule",
    color: "#D9532B",
    authType: "escalate",
  },
];

const authLabels: Record<string, { bg: string; text: string }> = {
  retained: { bg: "#00000018", text: "#000000" },
  shared: { bg: "#FAA51A20", text: "#b07000" },
  delegated: { bg: "#2294BD18", text: "#2294BD" },
  escalate: { bg: "#D9532B18", text: "#D9532B" },
};

export default function DelegationLadder() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Delegation Ladder · Board-Retained to Provider-Executed
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Selective delegation often produces better compliance than nominal full delegation with frequent vetoes.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          { type: "retained", label: "Board-retained" },
          { type: "shared", label: "Shared" },
          { type: "delegated", label: "Delegated to OCIO" },
          { type: "escalate", label: "Escalation required" },
        ].map((l) => {
          const s = authLabels[l.type];
          return (
            <div key={l.type} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: s.bg, border: `1.5px solid ${s.text}` }} />
              <span className="text-xs text-[#404040]">{l.label}</span>
            </div>
          );
        })}
      </div>

      {/* Ladder */}
      <div className="relative">
        {/* Spine */}
        <div className="absolute left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#000000] via-[#FAA51A] to-[#2294BD]" />

        <div className="space-y-1.5">
          {rungs.map((rung, i) => {
            const s = authLabels[rung.authType];
            return (
              <div key={i} className="flex items-start gap-3">
                {/* Left: authority label */}
                <div className="w-[128px] text-right flex-shrink-0 pt-1.5">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: s.bg, color: s.text }}
                  >
                    {rung.authority}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 mt-1.5 border-2 border-white shadow"
                  style={{ backgroundColor: rung.color }}
                />

                {/* Content */}
                <div
                  className="flex-1 rounded-lg px-3 py-2 border"
                  style={{ borderColor: rung.color + "40", backgroundColor: rung.color + "08" }}
                >
                  <p className="text-sm font-semibold text-[#1A1A1A]">{rung.label}</p>
                  <p className="text-xs text-[#404040] italic">{rung.why}</p>
                  {rung.annotation && (
                    <p className="text-[10px] font-bold mt-1" style={{ color: rung.color }}>
                      ↑ {rung.annotation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: delegation should follow the economics of the decision and the governance speed required — not a desire to sound decisive.
      </p>
    </div>
  );
}
