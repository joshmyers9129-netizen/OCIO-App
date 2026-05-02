import React from "react";

const steps = [
  {
    id: 1,
    label: "Board / IC Approval",
    owner: "Client + OCIO",
    role: "shared",
    leakPoint: null,
    description: "Vote approves new manager lineup or allocation change",
  },
  {
    id: 2,
    label: "Instruction & Scope",
    owner: "OCIO + Staff",
    role: "shared",
    leakPoint: "Ambiguous scope — unclear what is in / out",
    description: "Written instruction to implementation team with full mandate spec",
  },
  {
    id: 3,
    label: "Paperwork & Custody Setup",
    owner: "OCIO Implementation",
    role: "provider",
    leakPoint: "Document lag — account not ready on target date",
    description: "Manager agreements, custodian account codes, benchmark mapping",
  },
  {
    id: 4,
    label: "Transition Execution",
    owner: "OCIO Implementation",
    role: "provider",
    leakPoint: "Cash drag — proceeds sit uninvested in transit",
    description: "Termination of old manager, cross or market trades, funding of new mandate",
  },
  {
    id: 5,
    label: "Exposure Completion",
    owner: "OCIO Overlay Team",
    role: "provider",
    leakPoint: "Residual gap — benchmark mismatch during open window",
    description: "Overlay or futures used to close any benchmark gap during funding window",
  },
  {
    id: 6,
    label: "Settlement & Reconciliation",
    owner: "Custodian + OCIO",
    role: "shared",
    leakPoint: "Settlement delay — failed trades create temporary misalignment",
    description: "All positions confirm at custodian, positions match OCIO records",
  },
  {
    id: 7,
    label: "Post-Trade Report",
    owner: "OCIO Reporting",
    role: "provider",
    leakPoint: "Outcome not visible — no transition cost or exposure summary",
    description: "Report shows timing, cost, residual exposure, and benchmark alignment",
  },
];

const roleConfig: Record<string, { color: string; bg: string; label: string }> = {
  provider: { color: "#2294BD", bg: "#2294BD14", label: "OCIO-Led" },
  shared: { color: "#FAA51A", bg: "#FAA51A14", label: "Shared" },
  client: { color: "#404040", bg: "#40404014", label: "Client" },
};

export default function ApprovedDecisionToLivePortfolio() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Banner */}
      <div className="bg-[#00000010] border border-[#40404030] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#1A1A1A]">Approval is the start of implementation, not the end of investment work.</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Approved Decision to Live Portfolio
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Seven steps separate a board vote from a fully invested, benchmark-aligned live account.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-5">
        {Object.entries(roleConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040] font-semibold">{conf.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#D9532B]" />
          <span className="text-[10px] text-[#404040] font-semibold">Leak point risk</span>
        </div>
      </div>

      {/* Flow steps */}
      <div className="relative">
        {/* Spine line */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#404040] to-[#2294BD]" />

        <div className="space-y-2">
          {steps.map((step, i) => {
            const conf = roleConfig[step.role];
            return (
              <div key={i} className="flex items-start gap-4">
                {/* Step circle */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black border-2 border-white shadow z-10"
                  style={{ backgroundColor: conf.color }}
                >
                  {step.id}
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-xl p-3 border-l-4"
                  style={{ borderLeftColor: conf.color, backgroundColor: conf.bg }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-bold text-[#1A1A1A]">{step.label}</p>
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                      style={{ backgroundColor: conf.color + "22", color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}
                    >
                      {step.owner}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#404040] mb-1">{step.description}</p>
                  {step.leakPoint && (
                    <div className="flex items-start gap-1.5 rounded px-2 py-1 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                      <span className="text-[9px] font-bold text-[#D9532B] uppercase flex-shrink-0 mt-0.5">Leak:</span>
                      <span className="text-[10px] font-semibold text-[#D9532B]">{step.leakPoint}</span>
                    </div>
                  )}
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
              <th className="text-left px-3 py-2 rounded-tl-lg">Step</th>
              <th className="text-left px-3 py-2">Main Owner</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Common Leak Point</th>
            </tr>
          </thead>
          <tbody>
            {[
              { step: "Instruction", owner: "OCIO + Staff", leak: "Ambiguous scope" },
              { step: "Transition", owner: "OCIO Implementation", leak: "Cash drag or trading cost" },
              { step: "Completion", owner: "OCIO or Overlay Team", leak: "Residual exposure gap" },
              { step: "Reporting", owner: "OCIO Reporting", leak: "Outcome not visible" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2 font-semibold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.step}</td>
                <td className="px-3 py-2 text-[#404040] border-b border-[#E8DDD4]">{row.owner}</td>
                <td className="px-3 py-2 text-[#D9532B] font-semibold border-b border-[#E8DDD4]">{row.leak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the realized portfolio depends on the quality of every step between the vote and the final settled position.
      </p>
    </div>
  );
}
