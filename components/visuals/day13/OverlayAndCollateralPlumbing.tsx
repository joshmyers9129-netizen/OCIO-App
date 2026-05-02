import React from "react";

const nodes = [
  {
    id: "portfolio",
    label: "Underlying Portfolio",
    sublabel: "Carries strategic assets",
    color: "#2294BD",
    x: 50,
    y: 60,
  },
  {
    id: "overlay",
    label: "Overlay Exposure",
    sublabel: "Maintain target market exposure",
    color: "#2294BD",
    x: 50,
    y: 180,
  },
  {
    id: "collateral",
    label: "Collateral Pool",
    sublabel: "Support derivative positions",
    color: "#FAA51A",
    x: 280,
    y: 120,
  },
  {
    id: "cash",
    label: "Cash Account",
    sublabel: "Handle flows and margin calls",
    color: "#404040",
    x: 510,
    y: 60,
  },
  {
    id: "rebalance",
    label: "Rebalancing Flows",
    sublabel: "New cash / distributions / drift",
    color: "#404040",
    x: 510,
    y: 180,
  },
];

const flows = [
  { from: "portfolio", to: "overlay", label: "Benchmark gap", color: "#2294BD", dashed: false },
  { from: "overlay", to: "collateral", label: "Margin / variation", color: "#FAA51A", dashed: false },
  { from: "collateral", to: "cash", label: "Collateral call pressure", color: "#D9532B", dashed: true },
  { from: "cash", to: "overlay", label: "Cash required for margin", color: "#FAA51A", dashed: true },
  { from: "cash", to: "portfolio", label: "New funding", color: "#2294BD", dashed: false },
  { from: "rebalance", to: "portfolio", label: "Drift correction", color: "#404040", dashed: false },
  { from: "rebalance", to: "cash", label: "Proceeds", color: "#404040", dashed: false },
];

const components = [
  {
    name: "Overlay Exposure",
    purpose: "Maintain target market exposure",
    risk: "Mismatch if not funded",
    color: "#2294BD",
    flag: false,
  },
  {
    name: "Collateral Pool",
    purpose: "Support derivative positions",
    risk: "Unexpected call pressure",
    color: "#FAA51A",
    flag: true,
    flagNote: "Delayed cash movement can break intended exposure alignment",
  },
  {
    name: "Cash Account",
    purpose: "Handle flows",
    risk: "Idle balance or delay",
    color: "#404040",
    flag: true,
    flagNote: "Delayed cash movement can break intended exposure alignment",
  },
  {
    name: "Underlying Portfolio",
    purpose: "Carry strategic assets",
    risk: "Temporary underexposure",
    color: "#2294BD",
    flag: false,
  },
];

export default function OverlayAndCollateralPlumbing() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Overlay and Collateral Plumbing
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#b07000]">Efficient overlay use still requires cash governance.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Implementation tools only add value when the supporting cash and control structure is visible and reliable.
      </p>

      {/* Flow diagram */}
      <div className="bg-[#FBF7F3] rounded-xl p-4 mb-5 overflow-x-auto">
        <svg viewBox="0 0 660 260" className="w-full" style={{ minWidth: 480 }}>
          <defs>
            <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#2294BD" />
            </marker>
            <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#FAA51A" />
            </marker>
            <marker id="arrowRust" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#D9532B" />
            </marker>
            <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#404040" />
            </marker>
          </defs>

          {/* Portfolio node */}
          <rect x="10" y="20" width="130" height="60" rx="8" fill="#2294BD14" stroke="#2294BD" strokeWidth="1.5" />
          <text x="75" y="45" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">Underlying Portfolio</text>
          <text x="75" y="60" textAnchor="middle" fontSize="8" fill="#404040">Strategic assets</text>
          <text x="75" y="73" textAnchor="middle" fontSize="8" fill="#404040">OCIO-managed</text>

          {/* Overlay node */}
          <rect x="10" y="140" width="130" height="60" rx="8" fill="#2294BD14" stroke="#2294BD" strokeWidth="1.5" />
          <text x="75" y="165" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">Overlay Exposure</text>
          <text x="75" y="180" textAnchor="middle" fontSize="8" fill="#404040">Futures / swaps</text>
          <text x="75" y="193" textAnchor="middle" fontSize="8" fill="#404040">Benchmark completion</text>

          {/* Collateral node */}
          <rect x="255" y="80" width="140" height="60" rx="8" fill="#FAA51A14" stroke="#FAA51A" strokeWidth="1.5" />
          <text x="325" y="105" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">Collateral Pool</text>
          <text x="325" y="120" textAnchor="middle" fontSize="8" fill="#404040">Short bonds / cash</text>
          <text x="325" y="133" textAnchor="middle" fontSize="8" fill="#404040">Supports derivatives</text>

          {/* Cash node */}
          <rect x="510" y="20" width="130" height="60" rx="8" fill="#40404014" stroke="#404040" strokeWidth="1.5" />
          <text x="575" y="45" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">Cash Account</text>
          <text x="575" y="60" textAnchor="middle" fontSize="8" fill="#404040">Flows and margin</text>
          <text x="575" y="73" textAnchor="middle" fontSize="8" fill="#D9532B" fontWeight="600">Risk: delay</text>

          {/* Rebalance node */}
          <rect x="510" y="140" width="130" height="60" rx="8" fill="#40404014" stroke="#404040" strokeWidth="1.5" />
          <text x="575" y="165" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">Rebalancing Flows</text>
          <text x="575" y="180" textAnchor="middle" fontSize="8" fill="#404040">New cash / drift</text>
          <text x="575" y="193" textAnchor="middle" fontSize="8" fill="#404040">corrections</text>

          {/* Arrows */}
          {/* Portfolio → Overlay (benchmark gap) */}
          <line x1="75" y1="80" x2="75" y2="138" stroke="#2294BD" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
          <text x="80" y="113" fontSize="8" fill="#2294BD" fontWeight="600">Benchmark gap</text>

          {/* Overlay → Collateral (margin) */}
          <line x1="140" y1="175" x2="253" y2="130" stroke="#FAA51A" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
          <text x="170" y="145" fontSize="8" fill="#b07000" fontWeight="600">Variation margin</text>

          {/* Collateral ↔ Cash (call pressure) */}
          <line x1="395" y1="100" x2="508" y2="55" stroke="#D9532B" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowRust)" />
          <text x="420" y="75" fontSize="8" fill="#D9532B" fontWeight="600">Call pressure</text>

          {/* Cash → Overlay (required margin) */}
          <path d="M 510 60 Q 350 230 140 190" stroke="#FAA51A" strokeWidth="1.5" strokeDasharray="5,3" fill="none" markerEnd="url(#arrowOrange)" />
          <text x="300" y="237" fontSize="8" fill="#b07000" fontWeight="600">Cash for margin</text>

          {/* Cash → Portfolio */}
          <line x1="510" y1="50" x2="142" y2="50" stroke="#2294BD" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
          <text x="320" y="45" fontSize="8" fill="#2294BD" fontWeight="600" textAnchor="middle">New funding</text>

          {/* Rebalance → Portfolio */}
          <line x1="510" y1="170" x2="142" y2="70" stroke="#404040" strokeWidth="1.5" markerEnd="url(#arrowGray)" />

          {/* Rebalance → Cash */}
          <line x1="575" y1="140" x2="575" y2="82" stroke="#404040" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
          <text x="580" y="115" fontSize="8" fill="#404040">Proceeds</text>
        </svg>
      </div>

      {/* Component table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Component</th>
              <th className="text-left px-3 py-2">Purpose</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Main Risk</th>
            </tr>
          </thead>
          <tbody>
            {components.map((c, i) => (
              <React.Fragment key={i}>
                <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                      {c.name}
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{c.purpose}</td>
                  <td className="px-3 py-2.5 font-semibold border-b border-[#E8DDD4]" style={{ color: c.flag ? "#D9532B" : "#404040" }}>{c.risk}</td>
                </tr>
                {c.flagNote && (
                  <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                    <td colSpan={3} className="px-4 pb-2 border-b border-[#E8DDD4]">
                      <div className="rounded px-2 py-1 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                        <p className="text-[10px] font-semibold text-[#D9532B]">{c.flagNote}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: implementation tools only add value when the supporting cash and control structure is visible and reliable.
      </p>
    </div>
  );
}
