import React from "react";

const example = {
  spendingRate: 5.0,
  inflation: 2.5,
  fees: 0.6,
  netReturnRequired: 8.1,
};

export default function SpendingAndReturnTriangle() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Spending &amp; Return Triangle · Perpetual Pool Net Objective
      </p>
      <p className="text-xs text-[#404040] mb-2">
        Spending policy is part of the investment objective — not a downstream budgeting question.
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-5">
        <p className="text-xs font-semibold text-[#b07000]">
          Higher spending increases required portfolio ambition. Net return = spending + inflation + fees.
        </p>
      </div>

      {/* Triangle SVG */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <svg width={340} height={320} viewBox="0 0 340 320" style={{ maxWidth: "100%" }}>
            <rect x={0} y={0} width={340} height={320} fill="#FBF7F3" rx={10} />

            {/* Triangle shape */}
            <polygon
              points="170,30 30,270 310,270"
              fill="none"
              stroke="#E8DDD4"
              strokeWidth={2}
            />

            {/* Center circle: Net objective */}
            <circle cx={170} cy={186} r={48} fill="#00000010" stroke="#000000" strokeWidth={1.5} />
            <text x={170} y={178} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#1A1A1A">Net Portfolio</text>
            <text x={170} y={193} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#1A1A1A">Objective</text>
            <text x={170} y={208} textAnchor="middle" fontSize={11} fontWeight="black" fill="#2294BD">{example.netReturnRequired}%+</text>

            {/* Top corner: Spending rate */}
            <rect x={110} y={10} width={120} height={42} rx={8} fill="#D9532B" />
            <text x={170} y={29} textAnchor="middle" fontSize={10} fontWeight="bold" fill="white">Spending Rate</text>
            <text x={170} y={44} textAnchor="middle" fontSize={11} fontWeight="bold" fill="white">{example.spendingRate}% per year</text>

            {/* Left corner: Inflation */}
            <rect x={10} y={252} width={120} height={42} rx={8} fill="#FAA51A" />
            <text x={70} y={270} textAnchor="middle" fontSize={10} fontWeight="bold" fill="white">Inflation</text>
            <text x={70} y={285} textAnchor="middle" fontSize={11} fontWeight="bold" fill="white">{example.inflation}% target</text>

            {/* Right corner: Fees */}
            <rect x={210} y={252} width={120} height={42} rx={8} fill="#404040" />
            <text x={270} y={270} textAnchor="middle" fontSize={10} fontWeight="bold" fill="white">Fees &amp; Costs</text>
            <text x={270} y={285} textAnchor="middle" fontSize={11} fontWeight="bold" fill="white">{example.fees}% drag</text>

            {/* Side labels */}
            {/* Left side: spending + real return */}
            <text x={88} y={145} textAnchor="middle" fontSize={8} fill="#D9532B" transform="rotate(-59, 88, 145)">Spending draws on real return</text>
            {/* Right side: inflation protection */}
            <text x={256} y={148} textAnchor="middle" fontSize={8} fill="#FAA51A" transform="rotate(59, 256, 148)">Inflation erodes purchasing power</text>
            {/* Bottom: fees */}
            <text x={170} y={265} textAnchor="middle" fontSize={8} fill="#404040">Fees reduce net return available</text>

            {/* Formula callout */}
            <rect x={40} y={300} width={260} height={16} rx={4} fill="#2294BD12" />
            <text x={170} y={312} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#2294BD">
              Net required = {example.spendingRate}% + {example.inflation}% + {example.fees}% = {example.netReturnRequired}%
            </text>
          </svg>
        </div>

        {/* Side detail */}
        <div className="flex-1 space-y-2">
          <p className="text-xs font-bold text-[#1A1A1A] mb-2">Why each corner matters</p>
          {[
            {
              label: "Spending Rate",
              note: "Creates recurring cash need; higher spending rate directly raises required portfolio return",
              tension: "Higher rate raises required return ambition",
              color: "#D9532B",
            },
            {
              label: "Inflation",
              note: "Perpetual pools must preserve real mission-supporting capacity across generations",
              tension: "Erodes purchasing power year after year",
              color: "#FAA51A",
            },
            {
              label: "Fees & Implementation Cost",
              note: "Can hide inside program complexity; often underweighted in policy discussions",
              tension: "Can hide inside complexity and reduce net return",
              color: "#404040",
            },
            {
              label: "Real Return Objective",
              note: "What the portfolio must earn net of the above to preserve corpus",
              tension: "May require accepting more risk or illiquidity",
              color: "#2294BD",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-lg px-3 py-2 border-l-4" style={{ borderLeftColor: item.color, backgroundColor: item.color + "0E" }}>
              <p className="text-xs font-bold text-[#1A1A1A]">{item.label}</p>
              <p className="text-[11px] text-[#404040]">{item.note}</p>
              <p className="text-[10px] font-semibold mt-0.5" style={{ color: item.color }}>{item.tension}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: endowment-style policy begins with the net objective after spending, inflation, and fees.
      </p>
    </div>
  );
}
