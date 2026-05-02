import React from "react";

const layers = [
  {
    order: 1,
    label: "Liability Objective",
    description: "Define what to hedge: funded-status stability, contribution smoothing, or end-state readiness",
    owner: "Board / sponsor",
    controlPoint: "Is the liability measure operationally relevant?",
    color: "#000000",
  },
  {
    order: 2,
    label: "Target Hedge Ratio",
    description: "Express what percentage of interest-rate and credit risk the program should offset",
    owner: "OCIO with board input",
    controlPoint: "Is the ratio linked to an explicit sponsor objective?",
    color: "#404040",
  },
  {
    order: 3,
    label: "Physical Hedge Assets",
    description: "Long-duration bonds, strips, credit — carry the structural part of the hedge",
    owner: "OCIO portfolio manager",
    controlPoint: "How close is the duration fit by key rate?",
    color: "#2294BD",
  },
  {
    order: 4,
    label: "Derivative Overlay",
    description: "Interest-rate swaps, swaptions, futures — extend or scale the hedge efficiently",
    owner: "OCIO implementation team",
    controlPoint: "What is the collateral source and waterfall?",
    color: "#2294BD",
    flagNote: "A hedge ratio without collateral planning is incomplete",
  },
  {
    order: 5,
    label: "Collateral Pool",
    description: "Eligible assets ranked for margin calls: cash → short bonds → broader fixed income",
    owner: "OCIO and treasury / custodian",
    controlPoint: "Can the pool survive a 100bps rate move in 5 days?",
    color: "#FAA51A",
    flagNote: "Stress-call risk — confirm replenishment rules in advance",
  },
  {
    order: 6,
    label: "Monitoring & Reporting",
    description: "Hedge ratio drift, key-rate mismatch, collateral status — reviewed monthly and quarterly",
    owner: "OCIO reporting team",
    controlPoint: "Who acts after drift exceeds tolerance?",
    color: "#2294BD",
  },
];

export default function LDIProgramAnatomy() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        LDI Program Anatomy · Layers Must Work Together
      </p>
      <p className="text-xs text-[#404040] mb-4">
        The usefulness of an LDI program depends on whether its layers are designed as one system.
      </p>

      <div className="relative">
        {/* Spine */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#000000] via-[#2294BD] to-[#2294BD]" />

        <div className="space-y-3">
          {layers.map((layer, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Step circle */}
              <div
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white shadow z-10"
                style={{ backgroundColor: layer.color }}
              >
                <span className="text-white text-sm font-black">{layer.order}</span>
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-xl p-3 border-l-4"
                style={{ borderLeftColor: layer.color, backgroundColor: layer.color + "0C" }}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-bold text-[#1A1A1A]">{layer.label}</p>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded flex-shrink-0"
                    style={{ backgroundColor: layer.color + "20", color: layer.color === "#000000" ? "#404040" : layer.color }}
                  >
                    {layer.owner}
                  </span>
                </div>
                <p className="text-xs text-[#404040] mb-1.5">{layer.description}</p>
                <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                  <p className="text-[10px] font-semibold text-[#404040]">
                    Control point: <span className="font-normal italic">{layer.controlPoint}</span>
                  </p>
                </div>
                {layer.flagNote && (
                  <div className="mt-1.5 rounded px-2 py-1" style={{ backgroundColor: "#D9532B12", borderLeft: "3px solid #D9532B" }}>
                    <p className="text-[10px] font-bold text-[#D9532B]">{layer.flagNote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the usefulness of an LDI program depends on whether its layers are designed as one system.
      </p>
    </div>
  );
}
