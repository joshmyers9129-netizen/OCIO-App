import React from "react";

// Portfolio composition at 4 time points
const timePoints = [
  {
    label: "Before Shock",
    sublabel: "Normal conditions",
    totalValue: 100,
    public: 75,
    private: 25,
    note: "Normal flexibility",
    color: "#2294BD",
  },
  {
    label: "After Public Drawdown",
    sublabel: "Markets drop 20%; private marks lag",
    totalValue: 85,
    public: 60,
    private: 25,
    note: "Private share rises mechanically — reduced liquid flexibility",
    color: "#FAA51A",
    flag: true,
    flagNote: "Reported private share: 29.4% — no new commitments made",
  },
  {
    label: "After Lagged Marks",
    sublabel: "Private valuations partially adjust (months later)",
    totalValue: 82,
    public: 60,
    private: 22,
    note: "Board reassesses target ranges — commitments under review",
    color: "#D9532B",
    flag: true,
    flagNote: "Pacing pressure: distributions slowing while board debates targets",
  },
  {
    label: "After Policy Response",
    sublabel: "Rebalance + pacing adjustment",
    totalValue: 88,
    public: 66,
    private: 22,
    note: "Policy path taken — flexibility partially restored",
    color: "#2294BD",
  },
];

const SVG_W = 520;
const SVG_H = 180;
const MARGIN = { top: 20, right: 20, bottom: 40, left: 50 };
const CHART_W = SVG_W - MARGIN.left - MARGIN.right;
const CHART_H = SVG_H - MARGIN.top - MARGIN.bottom;
const BAR_WIDTH = CHART_W / timePoints.length - 12;

function barX(i: number) {
  return MARGIN.left + i * (CHART_W / timePoints.length) + 6;
}

export default function DenominatorEffectMechanics() {
  const maxTotal = 100;

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Denominator Effect Mechanics
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">The reported private share can rise even without new commitments.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        The denominator effect matters because it changes the governance and liquidity problem even before private valuations catch up.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#2294BD" }} />
          <span className="text-[10px] text-[#404040]">Public assets</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#D9532B" }} />
          <span className="text-[10px] text-[#404040]">Private assets</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border border-dashed border-[#FAA51A]" style={{ backgroundColor: "#FAA51A14" }} />
          <span className="text-[10px] text-[#404040]">Denominator effect flag</span>
        </div>
      </div>

      {/* SVG stacked bar chart */}
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full" style={{ minWidth: 400 }}>
          {timePoints.map((tp, i) => {
            const totalH = (tp.totalValue / maxTotal) * CHART_H;
            const privateH = (tp.private / maxTotal) * CHART_H;
            const publicH = (tp.public / maxTotal) * CHART_H;
            const x = barX(i);
            const barBottom = MARGIN.top + CHART_H;

            return (
              <g key={i}>
                {/* Public (blue) - on top */}
                <rect
                  x={x}
                  y={barBottom - publicH - privateH}
                  width={BAR_WIDTH}
                  height={publicH}
                  fill="#2294BD"
                  rx="3"
                />
                {/* Private (rust) - on bottom */}
                <rect
                  x={x}
                  y={barBottom - privateH}
                  width={BAR_WIDTH}
                  height={privateH}
                  fill="#D9532B"
                />
                {/* Flag border */}
                {tp.flag && (
                  <rect
                    x={x - 2}
                    y={barBottom - totalH - 2}
                    width={BAR_WIDTH + 4}
                    height={totalH + 4}
                    fill="none"
                    stroke="#FAA51A"
                    strokeWidth="2"
                    strokeDasharray="4,2"
                    rx="4"
                  />
                )}
                {/* Private % label */}
                <text
                  x={x + BAR_WIDTH / 2}
                  y={barBottom - privateH / 2 + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="white"
                >
                  {Math.round((tp.private / tp.totalValue) * 100)}%
                </text>
                {/* Total value label */}
                <text
                  x={x + BAR_WIDTH / 2}
                  y={barBottom - totalH - 6}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="#1A1A1A"
                >
                  ${tp.totalValue}
                </text>
                {/* X-axis label */}
                <text
                  x={x + BAR_WIDTH / 2}
                  y={barBottom + 14}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="600"
                  fill="#404040"
                >
                  {tp.label.split(" ").slice(0, 2).join(" ")}
                </text>
              </g>
            );
          })}
          {/* Y-axis */}
          <line x1={MARGIN.left} y1={MARGIN.top} x2={MARGIN.left} y2={MARGIN.top + CHART_H} stroke="#404040" strokeWidth="1" />
          <line x1={MARGIN.left} y1={MARGIN.top + CHART_H} x2={MARGIN.left + CHART_W} y2={MARGIN.top + CHART_H} stroke="#404040" strokeWidth="1" />
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={MARGIN.left - 4} y1={MARGIN.top + CHART_H - (v / 100) * CHART_H} x2={MARGIN.left} y2={MARGIN.top + CHART_H - (v / 100) * CHART_H} stroke="#404040" strokeWidth="1" />
              <text x={MARGIN.left - 6} y={MARGIN.top + CHART_H - (v / 100) * CHART_H + 4} textAnchor="end" fontSize="8" fill="#404040">{v}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Detail cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {timePoints.map((tp, i) => (
          <div
            key={i}
            className="rounded-lg border-l-4 p-3"
            style={{ borderLeftColor: tp.color, backgroundColor: tp.color + "0C" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs font-bold text-[#1A1A1A]">{tp.label}</p>
              {tp.flag && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#FAA51A18", color: "#b07000" }}>Flag</span>
              )}
            </div>
            <p className="text-[11px] text-[#404040] mb-1 italic">{tp.sublabel}</p>
            <div className="flex gap-3 mb-1.5">
              <span className="text-[10px] font-semibold" style={{ color: "#2294BD" }}>
                Public: ${tp.public} ({Math.round((tp.public / tp.totalValue) * 100)}%)
              </span>
              <span className="text-[10px] font-semibold" style={{ color: "#D9532B" }}>
                Private: ${tp.private} ({Math.round((tp.private / tp.totalValue) * 100)}%)
              </span>
            </div>
            <p className="text-[10px] text-[#404040]">{tp.note}</p>
            {tp.flagNote && (
              <div className="mt-1.5 rounded px-2 py-1 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                <p className="text-[10px] font-bold text-[#D9532B]">{tp.flagNote}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Time Point</th>
              <th className="text-left px-3 py-2">Public Share</th>
              <th className="text-left px-3 py-2">Private Share</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Main Implication</th>
            </tr>
          </thead>
          <tbody>
            {[
              { time: "Before shock", pub: "Higher", priv: "Lower", impl: "Normal flexibility" },
              { time: "After public drawdown", pub: "Lower", priv: "Higher (lagged)", impl: "Less liquid flexibility" },
              { time: "After lagged marks", pub: "Adjusted", priv: "Adjusted", impl: "Board reassesses targets" },
              { time: "After action", pub: "Depends on response", priv: "Depends on response", impl: "Policy path matters" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.time}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.pub}</td>
                <td className="px-3 py-2.5 font-semibold border-b border-[#E8DDD4]" style={{ color: i === 1 ? "#D9532B" : "#404040" }}>{row.priv}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.impl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the denominator effect matters because it changes the governance and liquidity problem even before private valuations catch up.
      </p>
    </div>
  );
}
