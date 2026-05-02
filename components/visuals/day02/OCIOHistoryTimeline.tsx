import React from "react";

const eras = [
  {
    period: "1980s to early 1990s",
    pressure: "Growing institutional complexity",
    shift: "More specialist advice",
    catalyst: "Committee latency becomes costlier",
    color: "#2294BD",
  },
  {
    period: "Late 1990s to 2007",
    pressure: "Alternatives and multi-asset growth",
    shift: "More implementation support",
    catalyst: "Private markets create pacing and liquidity demands",
    color: "#2294BD",
  },
  {
    period: "Post-2008 to 2021",
    pressure: "Governance and risk stress",
    shift: "Faster move toward delegation",
    catalyst: "LDI and funded-status management need daily oversight",
    color: "#FAA51A",
  },
  {
    period: "Post-2022",
    pressure: "Liquidity and collateral lessons",
    shift: "More scrutiny of operating depth",
    catalyst: "Stress episodes expose plumbing risk",
    color: "#D9532B",
  },
];

export default function OCIOHistoryTimeline() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-4">
        How the OCIO Market Formed · Provider lineage reflects which problem a firm originally learned to solve
      </p>
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[120px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2294BD] via-[#FAA51A] to-[#D9532B]" />
        <div className="space-y-6">
          {eras.map((era, i) => (
            <div key={i} className="flex gap-4 items-start">
              {/* Period label */}
              <div className="w-[108px] text-right flex-shrink-0">
                <span className="text-[11px] font-bold text-[#404040] leading-tight">{era.period}</span>
              </div>
              {/* Dot */}
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 border-2 border-white shadow"
                style={{ backgroundColor: era.color }}
              />
              {/* Content */}
              <div
                className="flex-1 rounded-lg p-3 border"
                style={{ borderColor: era.color + "40", backgroundColor: era.color + "08" }}
              >
                <div className="flex flex-wrap gap-2 mb-1.5">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: era.color + "20", color: era.color }}
                  >
                    Pressure: {era.pressure}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{era.shift}</p>
                <p className="text-xs text-[#404040] italic">{era.catalyst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: The category formed because institutional problems changed.
      </p>
    </div>
  );
}
