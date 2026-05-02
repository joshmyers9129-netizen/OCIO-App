import React from "react";

const layers = [
  {
    label: "Stakeholder & Political Constraints",
    examples: "Board behavior, donor pressure, sponsor sensitivity",
    color: "#FAA51A",
    archetypes: ["Family office", "Sovereign-like", "Foundation"],
  },
  {
    label: "Operational Capacity",
    examples: "Staff limits, data limits, implementation complexity",
    color: "#D9532B",
    archetypes: ["Small foundation", "Healthcare reserve", "Family office"],
  },
  {
    label: "Liability or Enterprise Claims",
    examples: "Pension payments, reserve use, collateral, debt service",
    color: "#2294BD",
    archetypes: ["DB pension", "Healthcare reserve", "Insurance"],
  },
  {
    label: "Spending or Payout Needs",
    examples: "Annual spending formula, grants, withdrawals",
    color: "#2294BD",
    archetypes: ["Endowment", "Foundation", "DB pension"],
  },
  {
    label: "Legal Rules",
    examples: "Statutory payout, trust terms, accounting rules",
    color: "#000000",
    archetypes: ["All archetypes"],
  },
];

export default function ConstraintStack() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        What Constrains the Portfolio First
      </p>
      <p className="text-xs text-[#404040] mb-4">
        The first binding constraint should shape the mandate before peers or asset-class preferences do.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-5">
        {[
          { color: "#000000", label: "Legal / universal" },
          { color: "#2294BD", label: "Mission / liability" },
          { color: "#D9532B", label: "Operational" },
          { color: "#FAA51A", label: "Stakeholder / political" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-[#404040]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Stack — rendered bottom-up in DOM (last = bottom visually, so reversed) */}
      <div className="space-y-2">
        {[...layers].reverse().map((layer, i) => {
          const realIndex = layers.length - 1 - i;
          return (
            <div
              key={i}
              className="rounded-lg px-4 py-3 border-l-4 flex items-start justify-between gap-4"
              style={{
                backgroundColor: layer.color + "14",
                borderLeftColor: layer.color,
              }}
            >
              <div className="flex-1">
                <p className="font-bold text-sm text-[#1A1A1A] mb-0.5">
                  {realIndex === 0 ? "Layer 1 (Bottom) — " : `Layer ${realIndex + 1} — `}
                  {layer.label}
                </p>
                <p className="text-xs text-[#404040]">{layer.examples}</p>
              </div>
              <div className="flex flex-wrap gap-1 justify-end">
                {layer.archetypes.map((a, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: layer.color + "25", color: layer.color === "#000000" ? "#404040" : layer.color }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow indicating stack direction */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-0.5 h-5 bg-[#404040]" />
          <svg width="10" height="8" viewBox="0 0 10 8" fill="#404040">
            <polygon points="5,0 10,8 0,8" />
          </svg>
        </div>
        <p className="text-xs text-[#404040] italic">
          Stack reads bottom-up: legal rules are universal; upper layers bind only after lower layers are satisfied.
        </p>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the portfolio should be designed around the first binding constraint, not around the most fashionable asset mix.
      </p>
    </div>
  );
}
