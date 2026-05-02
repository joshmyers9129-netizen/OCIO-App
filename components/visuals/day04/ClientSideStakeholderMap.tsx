import React from "react";

const stakeholders = [
  {
    id: "board",
    label: "Board / Committee",
    lens: "Purpose and policy",
    hiddenVeto: "Requests specificity only after approval",
    role: "authority",
    angle: 270,
  },
  {
    id: "staff",
    label: "Staff / CIO",
    lens: "Day-to-day oversight and translation",
    hiddenVeto: "Capacity limits discovered late",
    role: "authority",
    angle: 315,
  },
  {
    id: "cfo",
    label: "CFO / Treasurer",
    lens: "Cash and enterprise risk",
    hiddenVeto: "Liquidity concern discovered late",
    role: "enterprise",
    angle: 0,
  },
  {
    id: "actuary",
    label: "Actuary",
    lens: "Liability and funded status",
    hiddenVeto: "Different measurement basis",
    role: "enterprise",
    angle: 45,
  },
  {
    id: "legal",
    label: "Legal",
    lens: "Documentation and compliance",
    hiddenVeto: "Process cannot launch on time",
    role: "execution",
    angle: 90,
  },
  {
    id: "custodian",
    label: "Custodian",
    lens: "Settlement and reporting",
    hiddenVeto: "Account setup not confirmed",
    role: "execution",
    angle: 135,
  },
  {
    id: "operations",
    label: "Operations",
    lens: "Instruction clarity and settlement",
    hiddenVeto: "Undocumented dependency",
    role: "execution",
    angle: 180,
  },
  {
    id: "ocio",
    label: "OCIO Provider",
    lens: "Portfolio and implementation",
    hiddenVeto: "Assumed readiness not confirmed",
    role: "provider",
    angle: 225,
  },
];

const roleColors: Record<string, string> = {
  authority: "#000000",
  enterprise: "#D9532B",
  execution: "#404040",
  provider: "#2294BD",
};

const cx = 200;
const cy = 200;
const outerR = 145;
const nodeW = 88;
const nodeH = 36;

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export default function ClientSideStakeholderMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Client-Side Stakeholder Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Who sets policy, who tests enterprise implications, and who turns investment intent into executable instructions.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* SVG radial map */}
        <div className="flex-shrink-0">
          <svg width={400} height={400} viewBox="0 0 400 400" style={{ maxWidth: "100%" }}>
            <rect x={0} y={0} width={400} height={400} fill="#FBF7F3" rx={12} />

            {/* Annotation */}
            <rect x={290} y={12} width={100} height={38} rx={6} fill="#FAA51A20" stroke="#FAA51A" strokeWidth={1} />
            <text x={340} y={27} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#FAA51A">Approval is not</text>
            <text x={340} y={40} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#FAA51A">readiness</text>

            {/* Connection lines */}
            {stakeholders.map((s) => {
              const rad = degToRad(s.angle);
              const nx = cx + outerR * Math.cos(rad);
              const ny = cy + outerR * Math.sin(rad);
              const color = roleColors[s.role];
              const isHighFriction = s.id === "cfo" || s.id === "actuary" || s.id === "custodian";
              return (
                <g key={s.id + "-line"}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={nx}
                    y2={ny}
                    stroke={color}
                    strokeWidth={isHighFriction ? 2.5 : 1.5}
                    strokeOpacity={0.55}
                    strokeDasharray={s.role === "execution" ? "4,3" : undefined}
                  />
                  {isHighFriction && (
                    <circle cx={(cx + nx) / 2} cy={(cy + ny) / 2} r={4} fill="#FAA51A" opacity={0.8} />
                  )}
                </g>
              );
            })}

            {/* Center: Portfolio decision */}
            <rect x={cx - 58} y={cy - 22} width={116} height={44} rx={8} fill="#1A1A1A" />
            <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">Portfolio</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">Decision</text>

            {/* Outer stakeholder nodes */}
            {stakeholders.map((s) => {
              const rad = degToRad(s.angle);
              const nx = cx + outerR * Math.cos(rad);
              const ny = cy + outerR * Math.sin(rad);
              const color = roleColors[s.role];
              return (
                <g key={s.id}>
                  <rect
                    x={nx - nodeW / 2}
                    y={ny - nodeH / 2}
                    width={nodeW}
                    height={nodeH}
                    rx={5}
                    fill={color}
                    opacity={0.88}
                  />
                  <text x={nx} y={ny + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight="bold">
                    {s.label}
                  </text>
                </g>
              );
            })}

            {/* Legend */}
            {[
              { color: "#000000", label: "Authority (approve)" },
              { color: "#D9532B", label: "Enterprise (inform)" },
              { color: "#2294BD", label: "Provider (execute)" },
              { color: "#404040", label: "Operations (settle)" },
            ].map((item, i) => (
              <g key={i}>
                <rect x={12} y={358 + i * 0} width={8} height={8} rx={1} fill={item.color} />
                <text x={24} y={365 + i * 0} fontSize={7.5} fill="#404040">{item.label}</text>
              </g>
            ))}
            <g>
              {[
                { color: "#000000", label: "Authority (approve)" },
                { color: "#D9532B", label: "Enterprise (inform)" },
                { color: "#2294BD", label: "Provider (execute)" },
                { color: "#404040", label: "Ops (settle)" },
              ].map((item, i) => (
                <g key={i}>
                  <rect x={12 + i * 92} y={380} width={8} height={8} rx={1} fill={item.color} />
                  <text x={24 + i * 92} y={388} fontSize={7.5} fill="#404040">{item.label}</text>
                </g>
              ))}
              <circle cx={200} cy={200} r={0} />
            </g>
          </svg>
        </div>

        {/* Hidden veto table */}
        <div className="flex-1">
          <p className="text-xs font-bold text-[#1A1A1A] mb-2">Typical Hidden Veto Points</p>
          <div className="space-y-1.5">
            {stakeholders.map((s, i) => {
              const color = roleColors[s.role];
              return (
                <div
                  key={i}
                  className="rounded-lg px-3 py-2 border-l-4"
                  style={{ borderLeftColor: color, backgroundColor: color + "12" }}
                >
                  <p className="text-xs font-bold text-[#1A1A1A]">{s.label}</p>
                  <p className="text-[11px] text-[#404040]">
                    <span className="font-medium">Lens:</span> {s.lens}
                  </p>
                  <p className="text-[11px] text-[#D9532B]">
                    <span className="font-medium">Hidden veto:</span> {s.hiddenVeto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a good OCIO recommendation names the economic case and the operating dependencies before the decision leaves committee.
      </p>
    </div>
  );
}
