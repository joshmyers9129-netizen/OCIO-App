import React from "react";

const activities = [
  {
    activity: "Rebalancing",
    keyControl: "Threshold and decision authority defined in IPS",
    escalationOwner: "OCIO Portfolio Manager",
    reportingOutput: "Drift correction log with dates and band breach record",
    ownerType: "shared",
    hasReport: true,
    hasEscalation: true,
  },
  {
    activity: "Transition Execution",
    keyControl: "Sequencing plan and benchmark mapping pre-approved",
    escalationOwner: "OCIO Implementation Lead",
    reportingOutput: "Transition cost and exposure report",
    ownerType: "provider",
    hasReport: true,
    hasEscalation: true,
  },
  {
    activity: "Overlay / Completion",
    keyControl: "Collateral limits and margin buffer documented",
    escalationOwner: "OCIO Overlay Team",
    reportingOutput: "Exposure and margin status by trade date",
    ownerType: "provider",
    hasReport: true,
    hasEscalation: true,
  },
  {
    activity: "FX Management",
    keyControl: "Currency policy and hedging purpose stated",
    escalationOwner: "OCIO Risk Team",
    reportingOutput: "Currency exposure summary vs. policy",
    ownerType: "provider",
    hasReport: true,
    hasEscalation: true,
  },
  {
    activity: "Benchmark Update",
    keyControl: "IC sign-off before custodian change",
    escalationOwner: "Dual: Staff + OCIO Rel. Lead",
    reportingOutput: "Benchmark change log — missing from most providers",
    ownerType: "shared",
    hasReport: false,
    hasEscalation: false,
    flagNote: "Dual ownership and no standard report — common leak point",
  },
  {
    activity: "Post-Trade Review",
    keyControl: "Post-trade reconciliation vs. pre-trade plan",
    escalationOwner: "OCIO Reporting Team",
    reportingOutput: "Timing, cost, residual exposure, and benchmark alignment",
    ownerType: "provider",
    hasReport: true,
    hasEscalation: true,
  },
  {
    activity: "Exception Escalation",
    keyControl: "Escalation criteria documented in mandate",
    escalationOwner: "OCIO Risk + Staff — often unclear",
    reportingOutput: "Exception log with resolution notes",
    ownerType: "shared",
    hasReport: false,
    hasEscalation: false,
    flagNote: "No standard reporting output — audit trail frequently absent",
  },
];

const ownerConfig: Record<string, { color: string; label: string }> = {
  provider: { color: "#2294BD", label: "OCIO-Led" },
  shared: { color: "#FAA51A", label: "Shared" },
  client: { color: "#404040", label: "Client" },
};

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span
      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
      style={{
        backgroundColor: ok ? "#2294BD18" : "#D9532B18",
        color: ok ? "#2294BD" : "#D9532B",
      }}
    >
      {ok ? "Present" : "Missing"}
    </span>
  );
}

export default function ImplementationControlChecklist() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Implementation Control Checklist
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">If it cannot be reported, it cannot be monitored.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Implementation quality becomes governable when each tool is paired with a named control and visible output.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(ownerConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-tl-lg" style={{ minWidth: 120 }}>Activity</th>
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 160 }}>Key Control</th>
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 140 }}>Escalation Owner</th>
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 160 }}>Reporting Output</th>
              <th className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 70 }}>Report?</th>
              <th className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-tr-lg" style={{ minWidth: 80 }}>Escalation?</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act, i) => {
              const conf = ownerConfig[act.ownerType];
              return (
                <React.Fragment key={i}>
                  <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                    <td className="px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: conf.color }} />
                        <p className="text-xs font-bold text-[#1A1A1A]">{act.activity}</p>
                      </div>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded mt-0.5 inline-block"
                        style={{ backgroundColor: conf.color + "18", color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}
                      >
                        {conf.label}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-[11px] text-[#404040] border-b border-[#E8DDD4] align-top">{act.keyControl}</td>
                    <td className="px-3 py-2.5 text-[11px] text-[#404040] border-b border-[#E8DDD4] align-top">{act.escalationOwner}</td>
                    <td className="px-3 py-2.5 text-[11px] text-[#404040] border-b border-[#E8DDD4] align-top">{act.reportingOutput}</td>
                    <td className="text-center px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                      <StatusBadge ok={act.hasReport} />
                    </td>
                    <td className="text-center px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                      <StatusBadge ok={act.hasEscalation} />
                    </td>
                  </tr>
                  {act.flagNote && (
                    <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                      <td colSpan={6} className="px-4 pb-2.5 border-b border-[#E8DDD4]">
                        <div className="rounded px-3 py-1.5 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                          <p className="text-[10px] font-bold text-[#D9532B]">{act.flagNote}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: implementation quality becomes governable when each tool is paired with a named control and visible output.
      </p>
    </div>
  );
}
