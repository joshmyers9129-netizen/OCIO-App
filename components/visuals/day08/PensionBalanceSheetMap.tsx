import React from "react";

export default function PensionBalanceSheetMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Pension Balance-Sheet Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Pension OCIO work should always connect portfolio change to funded-status and sponsor impact.
      </p>

      {/* Main diagram */}
      <div className="relative">
        <svg width="100%" viewBox="0 0 600 320" style={{ maxHeight: 320 }}>
          {/* Background */}
          <rect x={0} y={0} width={600} height={320} fill="#FBF7F3" rx={10} />

          {/* ===== ASSETS (left) ===== */}
          <rect x={20} y={30} width={160} height={180} rx={8} fill="#2294BD18" stroke="#2294BD" strokeWidth={1.5} />
          <text x={100} y={55} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#2294BD">PLAN ASSETS</text>
          <text x={100} y={74} textAnchor="middle" fontSize={9} fill="#404040">Market value of investments</text>

          {/* Asset components */}
          {[
            { label: "Growth assets", y: 90, color: "#2294BD" },
            { label: "LDI / hedge assets", y: 115, color: "#2294BD" },
            { label: "Completion portfolio", y: 140, color: "#2294BD" },
            { label: "Cash / collateral", y: 165, color: "#FAA51A" },
          ].map((item) => (
            <g key={item.label}>
              <rect x={30} y={item.y} width={140} height={18} rx={3} fill={item.color + "20"} />
              <text x={100} y={item.y + 12} textAnchor="middle" fontSize={9} fill="#404040">{item.label}</text>
            </g>
          ))}

          {/* ===== LIABILITIES (right) ===== */}
          <rect x={420} y={30} width={160} height={180} rx={8} fill="#D9532B18" stroke="#D9532B" strokeWidth={1.5} />
          <text x={500} y={55} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#D9532B">LIABILITIES</text>
          <text x={500} y={74} textAnchor="middle" fontSize={9} fill="#404040">Present value of obligations</text>

          {/* Liability components */}
          {[
            { label: "Active member benefits", y: 90, color: "#D9532B" },
            { label: "Deferred vested benefits", y: 115, color: "#D9532B" },
            { label: "Retiree annuities", y: 140, color: "#D9532B" },
            { label: "Discount-rate sensitivity", y: 165, color: "#FAA51A" },
          ].map((item) => (
            <g key={item.label}>
              <rect x={430} y={item.y} width={140} height={18} rx={3} fill={item.color + "20"} />
              <text x={500} y={item.y + 12} textAnchor="middle" fontSize={9} fill="#404040">{item.label}</text>
            </g>
          ))}

          {/* ===== FUNDED STATUS (center) ===== */}
          <rect x={210} y={60} width={180} height={80} rx={8} fill="#00000015" stroke="#000000" strokeWidth={1.5} />
          <text x={300} y={86} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1A1A1A">FUNDED STATUS</text>
          <text x={300} y={103} textAnchor="middle" fontSize={10} fill="#404040">Assets − Liabilities</text>
          <text x={300} y={120} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#2294BD">Main pension scoreboard</text>

          {/* Arrows from assets/liabilities to funded status */}
          <path d="M180 120 L210 120" stroke="#2294BD" strokeWidth={1.5} markerEnd="url(#arrowBlue)" fill="none" />
          <path d="M420 120 L390 120" stroke="#D9532B" strokeWidth={1.5} markerEnd="url(#arrowRust)" fill="none" />

          {/* Arrow labels */}
          <text x={192} y={115} textAnchor="middle" fontSize={8} fill="#2294BD">return</text>
          <text x={408} y={115} textAnchor="middle" fontSize={8} fill="#D9532B">rate ↑ ↓</text>

          {/* ===== SPONSOR CONSEQUENCES (bottom center) ===== */}
          <rect x={150} y={225} width={300} height={70} rx={8} fill="#FAA51A18" stroke="#FAA51A" strokeWidth={1.5} />
          <text x={300} y={248} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#b07000">SPONSOR CONSEQUENCES</text>
          <text x={300} y={266} textAnchor="middle" fontSize={9} fill="#404040">Contribution requirements · Accounting P&L · Balance-sheet optics</text>
          <text x={300} y={282} textAnchor="middle" fontSize={9} fill="#D9532B">Debt capacity · Enterprise flexibility</text>

          {/* Arrow from funded status to sponsor */}
          <path d="M300 140 L300 225" stroke="#404040" strokeWidth={1.5} strokeDasharray="5,3" fill="none" />
          <text x={310} y={185} fontSize={8} fill="#404040">funded-status change</text>

          {/* Annotation callout */}
          <rect x={200} y={295} width={200} height={20} rx={4} fill="#D9532B12" />
          <text x={300} y={309} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#D9532B">
            Asset outperformance can still leave funded status flat
          </text>

          {/* Arrow definitions */}
          <defs>
            <marker id="arrowBlue" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#2294BD" />
            </marker>
            <marker id="arrowRust" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#D9532B" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Summary table */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { component: "Assets", moves: "Market return and hedging", why: "Supports benefit payments", color: "#2294BD" },
          { component: "Liabilities", moves: "Rates, inflation, demographics", why: "Defines required capital", color: "#D9532B" },
          { component: "Funded Status", moves: "Asset minus liability value", why: "Main pension scoreboard", color: "#000000" },
          { component: "Sponsor Impact", moves: "Contribution and accounting effect", why: "Enterprise consequence", color: "#FAA51A" },
        ].map((item, i) => (
          <div key={i} className="rounded-lg px-3 py-2 border-t-4" style={{ borderTopColor: item.color, backgroundColor: item.color + "08" }}>
            <p className="text-xs font-bold text-[#1A1A1A] mb-1">{item.component}</p>
            <p className="text-[10px] text-[#404040]">{item.moves}</p>
            <p className="text-[10px] font-semibold mt-1" style={{ color: item.color }}>{item.why}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: pension OCIO work should always connect portfolio change to funded-status and sponsor impact.
      </p>
    </div>
  );
}
