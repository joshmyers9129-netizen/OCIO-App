import React from "react";

// Two-axis quadrant chart: x = liquidity strain, y = governance strain
// Points represent policy options
const policyOptions = [
  {
    label: "Conservative",
    x: 15,
    y: 15,
    color: "#2294BD",
    description: "Low equity, high-quality bonds, short-duration liquid assets",
  },
  {
    label: "Balanced",
    x: 38,
    y: 40,
    color: "#2294BD",
    description: "Moderate equity, diversified multi-asset, limited illiquidity",
  },
  {
    label: "Growth",
    x: 62,
    y: 68,
    color: "#FAA51A",
    description: "High equity, moderate privates, active risk-taking",
  },
  {
    label: "Private-Heavy Growth",
    x: 82,
    y: 82,
    color: "#D9532B",
    description: "Large private allocation, high capital-call risk, governance intensive",
  },
];

const chartW = 360;
const chartH = 320;
const padL = 36;
const padB = 36;
const plotW = chartW - padL - 20;
const plotH = chartH - padB - 20;

function toSVG(xPct: number, yPct: number) {
  return {
    x: padL + (xPct / 100) * plotW,
    y: chartH - padB - (yPct / 100) * plotH,
  };
}

export default function HoldabilityUnderStress() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Holdability Under Stress
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Strategic policy should be evaluated on holdability as well as expected return.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Quadrant chart */}
        <div className="flex-shrink-0">
          <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} style={{ maxWidth: "100%" }}>
            <rect x={0} y={0} width={chartW} height={chartH} fill="#FBF7F3" rx={10} />

            {/* Quadrant background fills */}
            {/* Bottom-left: green — Governable and fundable */}
            <rect
              x={padL}
              y={20}
              width={plotW / 2}
              height={plotH / 2}
              fill="#2294BD08"
            />
            {/* Top-right: red — Attractive on paper, unstable in practice */}
            <rect
              x={padL + plotW / 2}
              y={20}
              width={plotW / 2}
              height={plotH / 2}
              fill="#D9532B08"
            />

            {/* Quadrant label annotations */}
            <text x={padL + 8} y={38} fontSize={8} fill="#2294BD" fontWeight="bold">Governable &</text>
            <text x={padL + 8} y={48} fontSize={8} fill="#2294BD" fontWeight="bold">fundable</text>

            <text x={padL + plotW - 8} y={38} fontSize={8} fill="#D9532B" fontWeight="bold" textAnchor="end">Attractive on paper,</text>
            <text x={padL + plotW - 8} y={48} fontSize={8} fill="#D9532B" fontWeight="bold" textAnchor="end">unstable in practice</text>

            {/* Grid lines */}
            <line x1={padL} y1={20 + plotH / 2} x2={padL + plotW} y2={20 + plotH / 2} stroke="#404040" strokeWidth={0.5} strokeDasharray="4,3" strokeOpacity={0.3} />
            <line x1={padL + plotW / 2} y1={20} x2={padL + plotW / 2} y2={20 + plotH} stroke="#404040" strokeWidth={0.5} strokeDasharray="4,3" strokeOpacity={0.3} />

            {/* Axes */}
            <line x1={padL} y1={chartH - padB} x2={padL + plotW} y2={chartH - padB} stroke="#404040" strokeWidth={1.5} />
            <line x1={padL} y1={20} x2={padL} y2={chartH - padB} stroke="#404040" strokeWidth={1.5} />

            {/* Axis labels */}
            <text x={padL + plotW / 2} y={chartH - 6} textAnchor="middle" fontSize={9} fill="#404040" fontWeight="bold">
              Liquidity Strain Under Stress →
            </text>
            <text
              x={12}
              y={chartH / 2}
              textAnchor="middle"
              fontSize={9}
              fill="#404040"
              fontWeight="bold"
              transform={`rotate(-90, 12, ${chartH / 2})`}
            >
              Governance Strain Under Stress →
            </text>

            {/* Axis ticks */}
            {["Low", "High"].map((t, i) => (
              <text key={i} x={padL + (i === 0 ? 4 : plotW - 4)} y={chartH - padB + 12} textAnchor={i === 0 ? "start" : "end"} fontSize={8} fill="#888">{t}</text>
            ))}
            {["Low", "High"].map((t, i) => (
              <text key={i} x={padL - 4} y={chartH - padB - (i === 0 ? 4 : plotH - 8)} textAnchor="end" fontSize={8} fill="#888">{t}</text>
            ))}

            {/* Data points */}
            {policyOptions.map((pt) => {
              const pos = toSVG(pt.x, pt.y);
              return (
                <g key={pt.label}>
                  <circle cx={pos.x} cy={pos.y} r={10} fill={pt.color} opacity={0.85} />
                  <text
                    x={pos.x}
                    y={pos.y + 3}
                    textAnchor="middle"
                    fontSize={7}
                    fontWeight="bold"
                    fill="white"
                  >
                    {pt.label.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail cards */}
        <div className="flex-1 space-y-2">
          <p className="text-xs font-bold text-[#1A1A1A] mb-2">
            Policy option profiles — preferred point depends on mission, not universal risk appetite
          </p>
          {[
            { label: "Conservative", strain: "Low / Low", description: "High-quality, liquid; suitable for enterprise-protection mandates", color: "#2294BD" },
            { label: "Balanced", strain: "Moderate / Moderate", description: "Diversified; manageable in most governance structures with adequate delegation", color: "#2294BD" },
            { label: "Growth", strain: "Moderate-High / High", description: "Requires strong governance, liquidity planning, and behavioral discipline", color: "#FAA51A" },
            { label: "Private-Heavy Growth", strain: "High / High", description: "Attractive on paper; requires deep illiquidity tolerance and fast governance", color: "#D9532B" },
          ].map((pt, i) => (
            <div
              key={i}
              className="rounded-lg px-3 py-2 border-l-4"
              style={{ borderLeftColor: pt.color, backgroundColor: pt.color + "10" }}
            >
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-xs font-bold text-[#1A1A1A]">{pt.label}</p>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: pt.color + "20", color: pt.color }}>
                  {pt.strain}
                </span>
              </div>
              <p className="text-[11px] text-[#404040]">{pt.description}</p>
            </div>
          ))}

          {/* Stress note */}
          <div className="bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-2 mt-2">
            <p className="text-xs font-bold text-[#D9532B] mb-0.5">Stress test question</p>
            <p className="text-[11px] text-[#404040]">
              What would happen after a 20% equity drawdown, a wave of capital calls, or a sudden cash need? If the answer implies emergency selling or ad hoc policy changes, the policy may be too aggressive for the actual institution.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: strategic policy should be evaluated on holdability as well as expected return.
      </p>
    </div>
  );
}
