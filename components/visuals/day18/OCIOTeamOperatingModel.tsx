import React from "react";

const functions_ = [
  {
    id: "research",
    label: "Research / Manager Oversight",
    job: "Build approved toolkit; maintain manager watch list",
    failureIfWeak: "Lineup quality decays over time",
    flow: "Views and approvals → Portfolio Management",
    color: "#2294BD",
    angle: -90,
  },
  {
    id: "portfolio",
    label: "Portfolio Management",
    job: "Translate policy to portfolio; own sleeve weights and drift",
    failureIfWeak: "No clear decision owner between meetings",
    flow: "Instructions → Implementation",
    color: "#2294BD",
    angle: -30,
  },
  {
    id: "implementation",
    label: "Implementation",
    job: "Trade, rebalance, transition, overlay execution",
    failureIfWeak: "Execution leakage; cash drag",
    flow: "Actions + completion → Reporting",
    color: "#FAA51A",
    angle: 30,
  },
  {
    id: "reporting",
    label: "Reporting and Client Delivery",
    job: "Maintain oversight loop; prepare board materials",
    failureIfWeak: "Board loses visibility into actions",
    flow: "Dashboard + narrative → Client Coverage",
    color: "#2294BD",
    angle: 90,
  },
  {
    id: "risk",
    label: "Risk and Compliance",
    job: "Monitor policy, bands, liquidity, and escalation triggers",
    failureIfWeak: "Breaches undetected or unreported",
    flow: "Alerts and flags → Portfolio Management",
    color: "#D9532B",
    angle: 150,
  },
  {
    id: "client",
    label: "Client Coverage",
    job: "Communicate, coordinate governance, manage expectations",
    failureIfWeak: "Overpromising or misaligned expectations",
    flow: "Feedback and schedule → Portfolio and Research",
    color: "#404040",
    angle: -150,
  },
];

const handoffs = [
  { from: "Research", to: "Portfolio Management", label: "Approved lineup" },
  { from: "Portfolio Management", to: "Implementation", label: "Trade/rebalance instruction" },
  { from: "Implementation", to: "Reporting", label: "Actions completed" },
  { from: "Reporting", to: "Client Coverage", label: "Board materials" },
  { from: "Risk", to: "Portfolio Management", label: "Breach alerts" },
];

const functionTable = [
  { fn: "Research / oversight", job: "Build approved toolkit", failure: "Lineup quality decays" },
  { fn: "Portfolio management", job: "Translate policy to portfolio", failure: "No clear owner" },
  { fn: "Implementation", job: "Trade and transition", failure: "Execution leakage" },
  { fn: "Reporting and client delivery", job: "Maintain oversight loop", failure: "Board loses visibility" },
];

export default function OCIOTeamOperatingModel() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        OCIO Team Operating Model
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">A thin spoke can weaken the whole platform.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        OCIO quality is often determined by how well the spokes connect, not only by how strong each one looks in isolation.
      </p>

      {/* Hub-and-spoke visual */}
      <div className="bg-[#FBF7F3] rounded-xl p-4 mb-5 overflow-x-auto">
        <svg viewBox="0 0 500 360" className="w-full" style={{ minWidth: 380 }}>
          {/* Center hub */}
          <circle cx="250" cy="180" r="48" fill="#1A1A1A" />
          <text x="250" y="174" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">Client</text>
          <text x="250" y="188" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">Mandate</text>
          <text x="250" y="202" textAnchor="middle" fontSize="8" fill="#E8DDD4">Center</text>

          {/* Spoke nodes */}
          {functions_.map((fn, i) => {
            const rad = (fn.angle * Math.PI) / 180;
            const r = 145;
            const cx = 250 + r * Math.cos(rad);
            const cy = 180 + r * Math.sin(rad);
            const lineX1 = 250 + 50 * Math.cos(rad);
            const lineY1 = 180 + 50 * Math.sin(rad);
            const lineX2 = 250 + (r - 38) * Math.cos(rad);
            const lineY2 = 180 + (r - 38) * Math.sin(rad);

            return (
              <g key={fn.id}>
                {/* Spoke line */}
                <line x1={lineX1} y1={lineY1} x2={lineX2} y2={lineY2} stroke={fn.color} strokeWidth="1.5" strokeDasharray={fn.id === "risk" ? "4,2" : "none"} />
                {/* Node circle */}
                <circle cx={cx} cy={cy} r="36" fill={fn.color + "18"} stroke={fn.color} strokeWidth="1.5" />
                {/* Node text */}
                {fn.label.split(" ").slice(0, 2).map((word, wi) => (
                  <text key={wi} x={cx} y={cy - 6 + wi * 12} textAnchor="middle" fontSize="8" fontWeight="700" fill={fn.color === "#FAA51A" ? "#b07000" : fn.color === "#000000" || fn.color === "#404040" ? "#404040" : fn.color}>
                    {word}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Function cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {functions_.map((fn) => (
          <div
            key={fn.id}
            className="rounded-xl border-l-4 p-3"
            style={{ borderLeftColor: fn.color, backgroundColor: fn.color + "0C" }}
          >
            <p className="text-xs font-bold text-[#1A1A1A] mb-0.5">{fn.label}</p>
            <p className="text-[11px] text-[#404040] mb-1">{fn.job}</p>
            <div className="flex flex-col gap-1">
              <div className="bg-white rounded px-2 py-1 border border-[#E8DDD4]">
                <p className="text-[9px] font-bold text-[#404040] uppercase">Handoff</p>
                <p className="text-[10px] text-[#1A1A1A]">{fn.flow}</p>
              </div>
              <div className="rounded px-2 py-1" style={{ backgroundColor: "#D9532B10", borderLeft: "2px solid #D9532B" }}>
                <p className="text-[9px] font-bold text-[#D9532B] uppercase">If Weak</p>
                <p className="text-[10px] text-[#D9532B]">{fn.failureIfWeak}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Function</th>
              <th className="text-left px-3 py-2">Main Job</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Failure if Weak</th>
            </tr>
          </thead>
          <tbody>
            {functionTable.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.fn}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.job}</td>
                <td className="px-3 py-2.5 font-semibold text-[#D9532B] border-b border-[#E8DDD4]">{row.failure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: OCIO quality is often determined by how well the spokes connect, not only by how strong each one looks in isolation.
      </p>
    </div>
  );
}
