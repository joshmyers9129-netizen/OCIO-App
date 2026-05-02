import React from "react";

const layers = [
  { label: "Advisory / Mandate Fee", note: "Core OCIO service", color: "#2294BD", question: "Is this enough to understand total economics?", transparent: true },
  { label: "Asset-Based Mandate Fee", note: "Core OCIO service tier 2", color: "#2294BD", question: "How does AUM scale affect alignment?", transparent: true },
  { label: "Proprietary Public Vehicles", note: "Internal implementation", color: "#D9532B", question: "When are these used and why?", transparent: false },
  { label: "Private Funds / Co-investments", note: "Alternatives access", color: "#D9532B", question: "Are economics layered and comparable?", transparent: false },
  { label: "Transition / Trading Revenue", note: "Operational stack", color: "#404040", question: "Is bundled pricing masking tradeoffs?", transparent: true },
  { label: "Custody / Reporting Services", note: "Operational stack", color: "#404040", question: "Who benefits from added complexity?", transparent: true },
  { label: "Overlay / Collateral Services", note: "Specialized implementation", color: "#D9532B", question: "Who benefits from added complexity?", transparent: false },
];

export default function BusinessModelStack() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Where Providers Really Make Money
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Most conflict questions are revenue-stack questions in disguise.
      </p>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#2294BD" }} />
          <span className="text-xs text-[#404040]">Transparent core fee</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#D9532B" }} />
          <span className="text-xs text-[#404040]">Potential conflict layer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#404040" }} />
          <span className="text-xs text-[#404040]">Neutral service layer</span>
        </div>
      </div>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div key={i} className="flex items-stretch gap-3">
            <div
              className="flex-1 rounded-lg px-4 py-2.5 flex items-center justify-between"
              style={{ backgroundColor: layer.color + "18", borderLeft: `4px solid ${layer.color}` }}
            >
              <div>
                <p className="font-bold text-sm text-[#1A1A1A]">{layer.label}</p>
                <p className="text-xs text-[#404040]">{layer.note}</p>
              </div>
              {!layer.transparent && (
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#D9532B20", color: "#D9532B" }}>
                  Conflict risk
                </span>
              )}
            </div>
            <div className="w-56 flex items-center">
              <p className="text-xs text-[#404040] italic">{layer.question}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: The allocator should know exactly where the provider gets paid and how that could shape behavior.
      </p>
    </div>
  );
}
