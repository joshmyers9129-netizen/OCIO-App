import React from "react";

const providers = [
  {
    label: "Consultant-rooted",
    x: 80, // high customization
    y: 40, // moderate implementation
    color: "#2294BD",
    description: "High customization, moderate implementation",
  },
  {
    label: "Asset-manager-rooted",
    x: 55,
    y: 75, // high implementation
    color: "#FAA51A",
    description: "Variable customization, high implementation",
  },
  {
    label: "Bank / custody-rooted",
    x: 45,
    y: 80, // high operational integration
    color: "#404040",
    description: "Moderate customization, high operational integration",
  },
  {
    label: "Specialist boutique",
    x: 85, // high customization
    y: 50, // selective implementation
    color: "#D9532B",
    description: "High customization, selective implementation",
  },
];

const clients = [
  { label: "Frozen DB plan", x: 30, y: 85, color: "#2294BD" },
  { label: "Small foundation", x: 70, y: 35, color: "#FAA51A" },
  { label: "Healthcare multi-pool", x: 40, y: 75, color: "#404040" },
  { label: "Family-office style", x: 80, y: 45, color: "#D9532B" },
];

export default function DNAtoFitMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Provider DNA vs. Client Need · Indicative fit, not ranking
      </p>
      <p className="text-xs text-[#404040] mb-4">
        There is no universally best lineage — there are better and worse fits between lineage and mandate need.
      </p>
      <div className="relative bg-[#FBF7F3] rounded-lg border border-[#E8DDD4]" style={{ height: "340px" }}>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#404040]" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#404040]" />
        </div>
        {/* Quadrant labels */}
        <div className="absolute top-4 left-4 text-[10px] text-[#404040] font-medium">Low customization<br />Low implementation</div>
        <div className="absolute top-4 right-4 text-right text-[10px] text-[#404040] font-medium">High customization<br />Low implementation</div>
        <div className="absolute bottom-4 left-4 text-[10px] text-[#404040] font-medium">Low customization<br />High implementation</div>
        <div className="absolute bottom-4 right-4 text-right text-[10px] text-[#404040] font-medium">High customization<br />High implementation</div>
        {/* Provider zones */}
        {providers.map((p, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(${p.x}% - 36px)`,
              top: `calc(${100 - p.y}% - 24px)`,
            }}
          >
            <div
              className="w-14 h-8 rounded-full flex items-center justify-center text-white text-[9px] font-bold text-center leading-tight shadow"
              style={{ backgroundColor: p.color }}
            >
              {p.label.split(" ").slice(0, 2).join(" ")}
            </div>
          </div>
        ))}
        {/* Client dots */}
        {clients.map((c, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `calc(${c.x}% - 4px)`,
              top: `calc(${100 - c.y}% - 4px)`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full border-2 border-white shadow"
              style={{ backgroundColor: c.color }}
              title={c.label}
            />
          </div>
        ))}
        {/* Axis labels */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#404040]">
          Customization Need →
        </div>
        <div
          className="absolute left-1 top-1/2 text-[10px] font-bold text-[#404040]"
          style={{ transform: "translateY(-50%) rotate(-90deg)", writingMode: "vertical-rl", transformOrigin: "center center" }}
        >
          Implementation Intensity →
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { label: "High governance design need", note: "Can the firm translate policy into execution?" },
          { label: "High implementation intensity", note: "Is the operating platform proven?" },
          { label: "High customization need", note: "Is the platform too standardized?" },
          { label: "High operational integration need", note: "Is plumbing being mistaken for strategy?" },
        ].map((item, i) => (
          <div key={i} className="bg-[#FBF7F3] rounded p-2 border border-[#E8DDD4]">
            <p className="text-xs font-bold text-[#1A1A1A]">{item.label}</p>
            <p className="text-[11px] text-[#404040]">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
