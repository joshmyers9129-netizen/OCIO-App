import React from "react";

// J-curve and pacing data by year
const years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Commitment pacing (cumulative commitments as % of target)
const commitmentPacing = [10, 25, 45, 60, 70, 78, 84, 88, 90, 92, 93];

// Funded NAV share (% of portfolio)
const fundedNAV = [4, 7, 11, 15, 18, 20, 21, 22, 22, 22, 23];

// Net cash flow (negative = outflow, positive = inflow), as % of program size
const netCashFlow = [-8, -12, -10, -8, -5, -2, 2, 5, 7, 8, 8];

// SVG chart dimensions
const SVG_W = 560;
const SVG_H = 220;
const MARGIN = { top: 20, right: 30, bottom: 40, left: 50 };
const CHART_W = SVG_W - MARGIN.left - MARGIN.right;
const CHART_H = SVG_H - MARGIN.top - MARGIN.bottom;

function scaleX(i: number) {
  return MARGIN.left + (i / (years.length - 1)) * CHART_W;
}

function scaleY(value: number, min: number, max: number) {
  return MARGIN.top + CHART_H - ((value - min) / (max - min)) * CHART_H;
}

function makePath(data: number[], min: number, max: number) {
  return data.map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(v, min, max)}`).join(" ");
}

const phases = [
  { label: "Early build", start: 0, end: 3, color: "#D9532B" },
  { label: "Mid maturation", start: 3, end: 6, color: "#FAA51A" },
  { label: "Mature program", start: 6, end: 10, color: "#2294BD" },
];

const phaseTable = [
  { phase: "Early build", pattern: "Net outflow", governance: "Protect liquidity and diversify vintages", color: "#D9532B" },
  { phase: "Mid maturation", pattern: "Mixed", governance: "Monitor pacing and recycle wisely", color: "#FAA51A" },
  { phase: "Mature program", pattern: "More balanced", governance: "Keep exposure near target", color: "#2294BD" },
  { phase: "Stress period", pattern: "Highly uncertain", governance: "Defend liquidity and pacing discipline", color: "#404040" },
];

export default function PacingAndJCurveFramework() {
  const allNav = fundedNAV;
  const allCommit = commitmentPacing;
  const allCash = netCashFlow;

  const navMin = 0, navMax = 100;
  const cashMin = -15, cashMax = 15;

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Pacing and J-Curve Framework
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Target exposure is reached through a pacing path, not by declaration.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A private target becomes investable only when the pacing path and cash demands are visible.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-3">
        {[
          { color: "#2294BD", label: "Funded NAV share" },
          { color: "#FAA51A", label: "Commitment pacing (% of target)" },
          { color: "#D9532B", label: "Net cash flow" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-4 h-0.5" style={{ backgroundColor: l.color }} />
            <span className="text-[10px] text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      {/* SVG Chart */}
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full" style={{ minWidth: 400 }}>
          {/* Phase shading */}
          {phases.map((p, i) => (
            <rect
              key={i}
              x={scaleX(p.start)}
              y={MARGIN.top}
              width={scaleX(p.end) - scaleX(p.start)}
              height={CHART_H}
              fill={p.color + "10"}
            />
          ))}

          {/* Zero line for cash flow reference */}
          <line
            x1={MARGIN.left}
            y1={scaleY(0, cashMin, cashMax)}
            x2={MARGIN.left + CHART_W}
            y2={scaleY(0, cashMin, cashMax)}
            stroke="#40404040"
            strokeWidth="1"
            strokeDasharray="4,3"
          />

          {/* Funded NAV path */}
          <path
            d={makePath(allNav, navMin, navMax)}
            stroke="#2294BD"
            strokeWidth="2"
            fill="none"
          />

          {/* Commitment pacing path */}
          <path
            d={makePath(allCommit, navMin, navMax)}
            stroke="#FAA51A"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,3"
          />

          {/* Net cash flow path */}
          <path
            d={makePath(allCash, cashMin, cashMax)}
            stroke="#D9532B"
            strokeWidth="2"
            fill="none"
          />

          {/* J-curve shaded zone annotation */}
          <rect
            x={scaleX(0)}
            y={scaleY(-2, cashMin, cashMax)}
            width={scaleX(4) - scaleX(0)}
            height={scaleY(-12, cashMin, cashMax) - scaleY(-2, cashMin, cashMax)}
            fill="#D9532B08"
            stroke="#D9532B"
            strokeWidth="0.5"
            strokeDasharray="3,2"
          />
          <text x={scaleX(0) + 4} y={scaleY(-10, cashMin, cashMax)} fontSize="8" fill="#D9532B" fontWeight="700">
            J-curve
          </text>
          <text x={scaleX(0) + 4} y={scaleY(-10, cashMin, cashMax) + 10} fontSize="8" fill="#D9532B">
            (peak outflow)
          </text>

          {/* Phase labels */}
          {phases.map((p, i) => (
            <text
              key={i}
              x={(scaleX(p.start) + scaleX(p.end)) / 2}
              y={MARGIN.top + 12}
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill={p.color}
            >
              {p.label}
            </text>
          ))}

          {/* X-axis */}
          <line x1={MARGIN.left} y1={MARGIN.top + CHART_H} x2={MARGIN.left + CHART_W} y2={MARGIN.top + CHART_H} stroke="#404040" strokeWidth="1" />
          {years.map((y, i) => (
            <g key={i}>
              <line x1={scaleX(i)} y1={MARGIN.top + CHART_H} x2={scaleX(i)} y2={MARGIN.top + CHART_H + 4} stroke="#404040" strokeWidth="1" />
              <text x={scaleX(i)} y={MARGIN.top + CHART_H + 14} textAnchor="middle" fontSize="9" fill="#404040">
                Yr {y}
              </text>
            </g>
          ))}

          {/* Y-axis left */}
          <line x1={MARGIN.left} y1={MARGIN.top} x2={MARGIN.left} y2={MARGIN.top + CHART_H} stroke="#404040" strokeWidth="1" />
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <text x={MARGIN.left - 4} y={scaleY(v, navMin, navMax) + 4} textAnchor="end" fontSize="8" fill="#404040">{v}%</text>
            </g>
          ))}
          <text x={12} y={MARGIN.top + CHART_H / 2} textAnchor="middle" fontSize="8" fill="#404040" transform={`rotate(-90, 12, ${MARGIN.top + CHART_H / 2})`}>
            % of Portfolio / Target
          </text>
        </svg>
      </div>

      {/* Phase summary table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Program Phase</th>
              <th className="text-left px-3 py-2">Typical Cash Pattern</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Main Governance Task</th>
            </tr>
          </thead>
          <tbody>
            {phaseTable.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 border-b border-[#E8DDD4]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: row.color }} />
                    <span className="font-bold text-[#1A1A1A]">{row.phase}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.pattern}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.governance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a private target becomes investable only when the pacing path and cash demands are visible.
      </p>
    </div>
  );
}
