import React from "react";

type Node = {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  textColor: string;
  angle: number; // degrees from top (0 = top, clockwise)
};

const outerNodes: Node[] = [
  {
    id: "board",
    label: "Board / IC",
    sublabel: "Oversight, purpose, policy",
    color: "#000000",
    textColor: "#FFFFFF",
    angle: 0,
  },
  {
    id: "cfo",
    label: "CFO & Finance",
    sublabel: "Budget, accounting, enterprise flexibility",
    color: "#D9532B",
    textColor: "#FFFFFF",
    angle: 51,
  },
  {
    id: "treasury",
    label: "Treasury",
    sublabel: "Liquidity, cash timing, collateral",
    color: "#D9532B",
    textColor: "#FFFFFF",
    angle: 102,
  },
  {
    id: "hr",
    label: "HR & Benefits",
    sublabel: "Pension consequences",
    color: "#404040",
    textColor: "#FFFFFF",
    angle: 153,
  },
  {
    id: "donors",
    label: "Donors / Grantees",
    sublabel: "Spending stability, mission delivery",
    color: "#2294BD",
    textColor: "#FFFFFF",
    angle: 204,
  },
  {
    id: "sponsor",
    label: "Sponsor",
    sublabel: "Economic outcome of risk decisions",
    color: "#2294BD",
    textColor: "#FFFFFF",
    angle: 255,
  },
  {
    id: "beneficiaries",
    label: "Beneficiaries",
    sublabel: "Long-term mission beneficiaries",
    color: "#2294BD",
    textColor: "#FFFFFF",
    angle: 306,
  },
  {
    id: "operations",
    label: "Operations",
    sublabel: "Enterprise system dependencies",
    color: "#D9532B",
    textColor: "#FFFFFF",
    angle: 357,
  },
];

// SVG layout
const cx = 230;
const cy = 230;
const r = 145; // outer radius
const nodeW = 96;
const nodeH = 44;
const centerW = 120;
const centerH = 48;

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export default function EnterpriseLinkageMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        How the Portfolio Connects to the Institution
      </p>
      <p className="text-xs text-[#404040] mb-4">
        The client is usually an institutional system — not a single asset pool in isolation.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* SVG Map */}
        <div className="flex-shrink-0">
          <svg width={460} height={460} viewBox="0 0 460 460" style={{ maxWidth: "100%" }}>
            {/* Background */}
            <rect x={0} y={0} width={460} height={460} fill="#FBF7F3" rx={12} />

            {/* Lines from center to each outer node */}
            {outerNodes.map((node) => {
              const rad = degToRad(node.angle - 90);
              const nx = cx + r * Math.cos(rad);
              const ny = cy + r * Math.sin(rad);
              // line thickness by type
              const isStrong = ["board", "cfo", "treasury"].includes(node.id);
              return (
                <line
                  key={node.id + "-line"}
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke={node.color}
                  strokeWidth={isStrong ? 2.5 : 1.5}
                  strokeOpacity={0.6}
                  strokeDasharray={node.id === "hr" || node.id === "operations" ? "5,3" : undefined}
                />
              );
            })}

            {/* Center node */}
            <rect
              x={cx - centerW / 2}
              y={cy - centerH / 2}
              width={centerW}
              height={centerH}
              rx={8}
              fill="#000000"
            />
            <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize={11} fontWeight="bold">
              Investable
            </text>
            <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize={11} fontWeight="bold">
              Pool
            </text>

            {/* Outer nodes */}
            {outerNodes.map((node) => {
              const rad = degToRad(node.angle - 90);
              const nx = cx + r * Math.cos(rad);
              const ny = cy + r * Math.sin(rad);
              return (
                <g key={node.id}>
                  <rect
                    x={nx - nodeW / 2}
                    y={ny - nodeH / 2}
                    width={nodeW}
                    height={nodeH}
                    rx={6}
                    fill={node.color}
                    opacity={0.9}
                  />
                  <text
                    x={nx}
                    y={ny - 5}
                    textAnchor="middle"
                    fill={node.textColor}
                    fontSize={9.5}
                    fontWeight="bold"
                  >
                    {node.label}
                  </text>
                  <text
                    x={nx}
                    y={ny + 8}
                    textAnchor="middle"
                    fill={node.textColor}
                    fontSize={7.5}
                    opacity={0.85}
                  >
                    {node.sublabel.length > 22 ? node.sublabel.slice(0, 22) + "…" : node.sublabel}
                  </text>
                </g>
              );
            })}

            {/* Legend dots */}
            <g>
              <rect x={12} y={424} width={10} height={10} rx={2} fill="#2294BD" />
              <text x={26} y={433} fontSize={9} fill="#404040">Investment-to-mission</text>
              <rect x={130} y={424} width={10} height={10} rx={2} fill="#D9532B" />
              <text x={144} y={433} fontSize={9} fill="#404040">Balance-sheet / ops</text>
              <rect x={258} y={424} width={10} height={10} rx={2} fill="#000000" />
              <text x={272} y={433} fontSize={9} fill="#404040">Governance</text>
            </g>
          </svg>
        </div>

        {/* Side table */}
        <div className="flex-1 space-y-2">
          <p className="text-xs font-bold text-[#1A1A1A] mb-2">Stakeholder transmission by role</p>
          {[
            { stakeholder: "Board / IC", why: "Oversight, purpose, policy", type: "governance" },
            { stakeholder: "CFO & Finance", why: "Budget, accounting, enterprise flexibility", type: "balance-sheet" },
            { stakeholder: "Treasury", why: "Liquidity, cash timing, collateral", type: "balance-sheet" },
            { stakeholder: "HR & Benefits", why: "Pension consequences", type: "ops" },
            { stakeholder: "Donors / Grantees", why: "Spending stability and mission delivery", type: "mission" },
            { stakeholder: "Sponsor", why: "Economic outcome of risk decisions", type: "mission" },
            { stakeholder: "Beneficiaries", why: "Long-term mission beneficiaries", type: "mission" },
            { stakeholder: "Operations", why: "Enterprise system dependencies", type: "ops" },
          ].map((row, i) => {
            const color = row.type === "mission" ? "#2294BD" : row.type === "balance-sheet" ? "#D9532B" : row.type === "governance" ? "#000000" : "#404040";
            return (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg px-3 py-2 border-l-4"
                style={{ borderLeftColor: color, backgroundColor: color + "10" }}
              >
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#1A1A1A]">{row.stakeholder}</p>
                  <p className="text-[11px] text-[#404040]">{row.why}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: client diagnosis is incomplete until the allocator maps which stakeholders actually feel the consequences of portfolio outcomes.
      </p>
    </div>
  );
}
