import React from "react";

// Two-axis quadrant: x = illiquidity tolerance, y = governance capacity
const portfolioDesigns = [
  {
    label: "Simple Reserve Model",
    x: 15,
    y: 15,
    color: "#2294BD",
    quadrant: "Low / Low",
    description: "High-quality liquid assets; clear cash access; simple benchmark",
    note: "Simpler does not mean inferior if the mission is protected",
    annotate: true,
  },
  {
    label: "Flexible Liquid Model",
    x: 20,
    y: 72,
    color: "#2294BD",
    quadrant: "Low illiquidity / High governance",
    description: "Strong governance but deliberately keeps liquid for optionality",
    note: "Underuses long horizon but preserves flexibility",
  },
  {
    label: "Capacity-Building Zone",
    x: 68,
    y: 22,
    color: "#D9532B",
    quadrant: "High illiquidity / Low governance",
    description: "Fragile copied model — governance cannot support illiquid complexity",
    note: "Risk of liquidity and oversight failure",
    flagRisk: true,
  },
  {
    label: "Balanced Perpetual Model",
    x: 48,
    y: 52,
    color: "#FAA51A",
    quadrant: "Moderate / Moderate",
    description: "Diversified with measured illiquidity; governance matches complexity",
    note: "Most common suitable design for mid-size foundations and endowments",
  },
  {
    label: "Mature Complex Model",
    x: 82,
    y: 82,
    color: "#2294BD",
    quadrant: "High / High",
    description: "Large private program; deep staff; mature reporting and pacing discipline",
    note: "Suitable only if staffing, reporting, and pacing discipline are mature",
    annotate: true,
  },
];

const chartW = 380;
const chartH = 320;
const padL = 40;
const padB = 36;
const plotW = chartW - padL - 20;
const plotH = chartH - padB - 20;

function toSVG(xPct: number, yPct: number) {
  return {
    x: padL + (xPct / 100) * plotW,
    y: chartH - padB - (yPct / 100) * plotH,
  };
}

export default function GovernanceIlliquidityMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Governance &amp; Illiquidity Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Private-market ambition should rise only when governance capacity can support it.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Quadrant chart */}
        <div className="flex-shrink-0">
          <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} style={{ maxWidth: "100%" }}>
            <rect x={0} y={0} width={chartW} height={chartH} fill="#FBF7F3" rx={10} />

            {/* Quadrant fills */}
            <rect x={padL} y={20} width={plotW / 2} height={plotH / 2} fill="#2294BD06" />
            <rect x={padL + plotW / 2} y={20} width={plotW / 2} height={plotH / 2} fill="#2294BD10" />
            <rect x={padL} y={20 + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#FAA51A08" />
            <rect x={padL + plotW / 2} y={20 + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#D9532B08" />

            {/* Quadrant labels */}
            <text x={padL + 8} y={38} fontSize={8} fill="#404040" fontWeight="bold">Simple reserve</text>
            <text x={padL + 8} y={48} fontSize={8} fill="#404040" fontWeight="bold">model</text>

            <text x={padL + plotW - 8} y={38} fontSize={8} fill="#2294BD" fontWeight="bold" textAnchor="end">Mature complex</text>
            <text x={padL + plotW - 8} y={48} fontSize={8} fill="#2294BD" fontWeight="bold" textAnchor="end">model</text>

            <text x={padL + 8} y={20 + plotH / 2 + 18} fontSize={8} fill="#b07000" fontWeight="bold">Balanced perpetual</text>
            <text x={padL + 8} y={20 + plotH / 2 + 28} fontSize={8} fill="#b07000" fontWeight="bold">model</text>

            <text x={padL + plotW - 8} y={20 + plotH / 2 + 18} fontSize={8} fill="#D9532B" fontWeight="bold" textAnchor="end">Capacity-building</text>
            <text x={padL + plotW - 8} y={20 + plotH / 2 + 28} fontSize={8} fill="#D9532B" fontWeight="bold" textAnchor="end">zone (fragile)</text>

            {/* Grid lines */}
            <line x1={padL} y1={20 + plotH / 2} x2={padL + plotW} y2={20 + plotH / 2} stroke="#404040" strokeWidth={0.5} strokeDasharray="4,3" strokeOpacity={0.3} />
            <line x1={padL + plotW / 2} y1={20} x2={padL + plotW / 2} y2={20 + plotH} stroke="#404040" strokeWidth={0.5} strokeDasharray="4,3" strokeOpacity={0.3} />

            {/* Axes */}
            <line x1={padL} y1={chartH - padB} x2={padL + plotW} y2={chartH - padB} stroke="#404040" strokeWidth={1.5} />
            <line x1={padL} y1={20} x2={padL} y2={chartH - padB} stroke="#404040" strokeWidth={1.5} />

            {/* Axis labels */}
            <text x={padL + plotW / 2} y={chartH - 6} textAnchor="middle" fontSize={9} fill="#404040" fontWeight="bold">Illiquidity Tolerance →</text>
            <text x={12} y={chartH / 2} textAnchor="middle" fontSize={9} fill="#404040" fontWeight="bold" transform={`rotate(-90, 12, ${chartH / 2})`}>
              Governance Capacity →
            </text>

            {/* Data points */}
            {portfolioDesigns.map((pt) => {
              const pos = toSVG(pt.x, pt.y);
              return (
                <g key={pt.label}>
                  <circle cx={pos.x} cy={pos.y} r={12} fill={pt.color} opacity={0.85} />
                  <text x={pos.x} y={pos.y + 3.5} textAnchor="middle" fontSize={7} fontWeight="bold" fill="white">
                    {pt.label.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail cards */}
        <div className="flex-1 space-y-2">
          {portfolioDesigns.map((pt, i) => (
            <div
              key={i}
              className="rounded-lg px-3 py-2 border-l-4"
              style={{ borderLeftColor: pt.color, backgroundColor: pt.color + "10" }}
            >
              <div className="flex items-start justify-between gap-1 mb-0.5">
                <p className="text-xs font-bold text-[#1A1A1A]">{pt.label}</p>
                {pt.flagRisk && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>Risk</span>
                )}
              </div>
              <p className="text-[11px] text-[#404040]">{pt.description}</p>
              {pt.annotate && (
                <p className="text-[10px] font-semibold mt-0.5 italic" style={{ color: pt.color }}>{pt.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: illiquidity should rise because it is supportable and rewarded, not because it sounds endowment-like.
      </p>
    </div>
  );
}
