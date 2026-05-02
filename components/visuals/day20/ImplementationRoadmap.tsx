import React from "react";

const phases = [
  {
    phase: 1,
    label: "Approval",
    sublabel: "Board or committee vote",
    must: "Board vote and formal resolution; decision-rights schedule approved",
    owner: "Committee",
    ownerType: "client",
    checkpoints: ["Decision-rights signoff", "Provider appointment authorized"],
    duration: "Week 0",
    color: "#000000",
  },
  {
    phase: 2,
    label: "Legal Documentation",
    sublabel: "IPS, delegation, contracts",
    must: "IPS updated; delegation schedule signed; escalation rules documented",
    owner: "Staff + Legal + OCIO",
    ownerType: "shared",
    checkpoints: ["IPS signed", "Delegation schedule signed", "Escalation rules documented"],
    duration: "Weeks 1–3",
    color: "#FAA51A",
  },
  {
    phase: 3,
    label: "Portfolio Mapping and Transition",
    sublabel: "Manager moves, cash plan, interim exposures",
    must: "Benchmark finalized; transition plan approved; completion overlay arranged",
    owner: "OCIO Implementation",
    ownerType: "provider",
    checkpoints: ["Benchmark finalization", "Transition risk review", "Cash plan approved"],
    duration: "Weeks 3–8",
    color: "#2294BD",
  },
  {
    phase: 4,
    label: "Reporting Build",
    sublabel: "Dashboard and benchmarks live",
    must: "Board dashboard template approved; attribution structure confirmed",
    owner: "OCIO Reporting + Staff",
    ownerType: "shared",
    checkpoints: ["Client reporting approval", "First reporting cycle tested"],
    duration: "Weeks 4–8",
    color: "#2294BD",
  },
  {
    phase: 5,
    label: "Initial Operating Cadence",
    sublabel: "Governance calendar and weekly workflow",
    must: "Weekly/monthly/quarterly ownership confirmed; escalation path tested",
    owner: "OCIO + Staff",
    ownerType: "shared",
    checkpoints: ["Governance calendar confirmed", "First board update scheduled"],
    duration: "Month 2",
    color: "#FAA51A",
  },
  {
    phase: 6,
    label: "First-Quarter Review",
    sublabel: "Early feedback and adjustment",
    must: "Review transition costs, benchmark performance, early operating friction",
    owner: "Committee + OCIO",
    ownerType: "shared",
    checkpoints: ["Post-live operating review", "Any benchmark or delegation adjustments"],
    duration: "Month 3",
    color: "#404040",
  },
];

const ownerConfig: Record<string, { color: string; label: string }> = {
  client: { color: "#404040", label: "Client / Committee" },
  shared: { color: "#FAA51A", label: "Shared" },
  provider: { color: "#2294BD", label: "OCIO-Led" },
};

const fallbackTable = [
  { phase: "Approval", must: "Board or committee vote and record" },
  { phase: "Documentation", must: "IPS, delegation, contracts, escalation rules" },
  { phase: "Transition", must: "Manager moves, cash plan, interim exposures" },
  { phase: "Reporting", must: "Dashboard and benchmarks live" },
  { phase: "Cadence", must: "Weekly, monthly, quarterly ownership established" },
  { phase: "Review", must: "Early feedback and adjustment" },
];

export default function ImplementationRoadmap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Approval to Live Portfolio — Implementation Roadmap
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Implementation readiness belongs inside the recommendation, not after it.</p>
      </div>
      <p className="text-xs text-[#404040] mb-5">
        Six phases from approval vote to first-quarter operating review.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-5">
        {Object.entries(ownerConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      {/* Phase roadmap */}
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#000000] to-[#404040]" />

        <div className="space-y-3">
          {phases.map((phase, i) => {
            const ownerConf = ownerConfig[phase.ownerType];
            return (
              <div key={i} className="flex items-start gap-4">
                {/* Phase circle */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black border-2 border-white shadow z-10"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.phase}
                </div>

                {/* Phase card */}
                <div
                  className="flex-1 rounded-xl border-l-4 p-3"
                  style={{ borderLeftColor: phase.color, backgroundColor: phase.color + "0C" }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-bold text-[#1A1A1A]">{phase.label}</p>
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: ownerConf.color + "20", color: ownerConf.color === "#FAA51A" ? "#b07000" : ownerConf.color === "#404040" ? "#404040" : ownerConf.color }}
                        >
                          {ownerConf.label}
                        </span>
                      </div>
                      <p className="text-[11px] italic text-[#404040]">{phase.sublabel}</p>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: "#40404014", color: "#404040" }}>
                      {phase.duration}
                    </span>
                  </div>

                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4] mb-1.5">
                    <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Must Complete</p>
                    <p className="text-[10px] text-[#1A1A1A]">{phase.must}</p>
                  </div>

                  {/* Checkpoints */}
                  <div className="flex flex-wrap gap-1.5">
                    {phase.checkpoints.map((cp, ci) => (
                      <span
                        key={ci}
                        className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: phase.color + "18", color: phase.color === "#FAA51A" ? "#b07000" : phase.color === "#000000" || phase.color === "#404040" ? "#404040" : phase.color }}
                      >
                        ✓ {cp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Phase</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">What Must Be Completed</th>
            </tr>
          </thead>
          <tbody>
            {fallbackTable.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.phase}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.must}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: implementation readiness belongs inside the recommendation, not after it.
      </p>
    </div>
  );
}
