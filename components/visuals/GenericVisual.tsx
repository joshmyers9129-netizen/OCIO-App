import React from "react";

interface GenericVisualProps {
  title?: string;
  type?: "matrix" | "timeline" | "waterfall" | "framework" | "dashboard" | "map" | "checklist" | "spectrum";
}

export function GenericVisual({ title, type = "framework" }: GenericVisualProps) {
  if (type === "matrix") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <svg viewBox="0 0 600 400" className="w-full" style={{ minHeight: "300px" }}>
          {/* Grid squares */}
          <defs>
            <pattern id="smallGrid" width="75" height="100" patternUnits="userSpaceOnUse">
              <path d="M 75 0 L 0 0 0 100" fill="none" stroke="#E8DDD4" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Quadrants with gradient fills */}
          <rect x="80" y="80" width="150" height="150" fill="#2294BD" opacity="0.12" />
          <rect x="280" y="80" width="150" height="150" fill="#FAA51A" opacity="0.12" />
          <rect x="80" y="280" width="150" height="150" fill="#7C5CBF" opacity="0.12" />
          <rect x="280" y="280" width="150" height="150" fill="#D9532B" opacity="0.12" />

          {/* Axes */}
          <line x1="80" y1="280" x2="480" y2="280" stroke="#404040" strokeWidth="2" />
          <line x1="80" y1="80" x2="80" y2="430" stroke="#404040" strokeWidth="2" />

          {/* Axis labels */}
          <text x="280" y="380" textAnchor="middle" fontSize="13" fontWeight="600" fill="#404040">
            Primary Dimension →
          </text>
          <text x="20" y="240" textAnchor="middle" fontSize="13" fontWeight="600" fill="#404040" transform="rotate(-90 20 240)">
            Secondary Dimension →
          </text>

          {/* Center labels */}
          <text x="155" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2294BD">
            Quadrant 1
          </text>
          <text x="355" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FAA51A">
            Quadrant 2
          </text>
          <text x="155" y="360" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7C5CBF">
            Quadrant 3
          </text>
          <text x="355" y="360" textAnchor="middle" fontSize="12" fontWeight="700" fill="#D9532B">
            Quadrant 4
          </text>

          {/* Data points */}
          <circle cx="120" cy="120" r="5" fill="#2294BD" opacity="0.7" />
          <circle cx="420" cy="180" r="5" fill="#FAA51A" opacity="0.7" />
          <circle cx="100" cy="340" r="5" fill="#7C5CBF" opacity="0.7" />
          <circle cx="380" cy="320" r="5" fill="#D9532B" opacity="0.7" />
        </svg>
      </div>
    );
  }

  if (type === "waterfall") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <div className="space-y-3">
          {[
            { label: "Starting Value", value: "100%", color: "#2294BD" },
            { label: "Allocation A", value: "+35%", color: "#FAA51A" },
            { label: "Allocation B", value: "+25%", color: "#7C5CBF" },
            { label: "Allocation C", value: "+20%", color: "#D9532B" },
            { label: "Allocation D", value: "+20%", color: "#2294BD" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-[#404040]">{item.label}</span>
                <span className="text-sm font-bold" style={{ color: item.color }}>
                  {item.value}
                </span>
              </div>
              <div className="h-8 rounded-lg bg-[#F5F0EB] overflow-hidden">
                <div
                  className="h-full flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    backgroundColor: item.color,
                    width: item.value.replace("%", ""),
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "timeline") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2294BD] via-[#FAA51A] to-[#D9532B]" />

          {/* Timeline events */}
          <div className="space-y-8 ml-20">
            {[
              { year: "2020", event: "Phase 1", desc: "Foundation" },
              { year: "2022", event: "Phase 2", desc: "Growth" },
              { year: "2024", event: "Phase 3", desc: "Optimization" },
              { year: "2026", event: "Phase 4", desc: "Advancement" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                  style={{
                    backgroundColor: ["#2294BD", "#FAA51A", "#7C5CBF", "#D9532B"][i],
                  }}
                />
                <div>
                  <p className="font-bold text-[#404040]">{item.year}</p>
                  <p className="font-semibold text-[#1A1A1A]">{item.event}</p>
                  <p className="text-sm text-[#404040]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "checklist") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <div className="space-y-3">
          {[
            "Strategic alignment confirmed",
            "Stakeholders engaged and aligned",
            "Implementation plan detailed",
            "Governance framework established",
            "Accountability structure clear",
            "Risk mitigation strategies identified",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#FBF7F3] rounded-lg border border-[#E8DDD4]">
              <div className="w-5 h-5 rounded border-2 border-[#2294BD] flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded bg-[#2294BD]" />
              </div>
              <span className="text-sm text-[#404040]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Metric A", value: "87%", color: "#2294BD" },
            { label: "Metric B", value: "64", color: "#FAA51A" },
            { label: "Metric C", value: "$2.3B", color: "#7C5CBF" },
            { label: "Metric D", value: "15", color: "#D9532B" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg border border-[#E8DDD4] bg-[#FBF7F3]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-2">
                {item.label}
              </p>
              <p className="text-2xl font-bold" style={{ color: item.color }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "spectrum") {
    return (
      <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
        <div className="flex h-12 rounded-lg overflow-hidden shadow-sm">
          {["Low", "Medium", "High"].map((label, i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center font-bold text-white text-sm"
              style={{
                backgroundColor: ["#2294BD", "#FAA51A", "#D9532B"][i],
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <p className="text-xs text-[#404040] mt-4 text-center">
          Spectrum from low to high intensity or adoption
        </p>
      </div>
    );
  }

  // Default framework view
  return (
    <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
      <div className="grid grid-cols-3 gap-4">
        {["Component A", "Component B", "Component C"].map((label, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border-2"
            style={{
              borderColor: ["#2294BD", "#FAA51A", "#D9532B"][i],
              backgroundColor: ["#2294BD", "#FAA51A", "#D9532B"][i] + "08",
            }}
          >
            <p
              className="font-bold text-sm"
              style={{ color: ["#2294BD", "#FAA51A", "#D9532B"][i] }}
            >
              {label}
            </p>
            <p className="text-xs text-[#404040] mt-2">Key attributes and details</p>
          </div>
        ))}
      </div>
    </div>
  );
}
