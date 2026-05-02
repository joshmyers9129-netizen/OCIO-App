import React from "react";

const checklistItems = [
  {
    item: "Delegation Schedule",
    why: "Defines real authority — speed claims not credible without it",
    owner: "OCIO + Client Legal",
    evidence: "Draft IPS with delegation table reviewed by both parties",
    status: "resolved",
    unresolvedRisk: null,
  },
  {
    item: "Benchmark Mapping",
    why: "Enables reporting and transitions — performance confusion later if missing",
    owner: "OCIO Portfolio Mgr",
    evidence: "Full benchmark stack documented for each sleeve",
    status: "resolved",
    unresolvedRisk: null,
  },
  {
    item: "Custody Coordination",
    why: "Account setup and data feeds must precede live trading",
    owner: "OCIO Implementation + Custodian",
    evidence: "Custody account codes confirmed; data feed tested",
    status: "watch",
    unresolvedRisk: "Data feed testing incomplete — timeline risk if delayed",
  },
  {
    item: "Reporting Template Agreed",
    why: "Board reporting expectations set before first cycle",
    owner: "OCIO Reporting + Staff",
    evidence: "Template reviewed by committee; objective card included",
    status: "resolved",
    unresolvedRisk: null,
  },
  {
    item: "Transition Plan",
    why: "Protects live portfolio — cash drag or leaks without sequencing",
    owner: "OCIO Implementation",
    evidence: "Detailed plan: termination, funding, completion, settlement",
    status: "resolved",
    unresolvedRisk: null,
  },
  {
    item: "Fee Inventory and Disclosure",
    why: "All cost layers explainable before signing",
    owner: "OCIO + Client Legal",
    evidence: "Fee schedule with layer breakdown signed",
    status: "watch",
    unresolvedRisk: "Private program fee disclosure pending — must resolve before commitment activity",
  },
  {
    item: "Communication Plan",
    why: "Board surprise risk if not set in advance — timing and format must be agreed",
    owner: "OCIO Rel. Lead + Staff",
    evidence: "Board calendar, contact escalation, and urgent-notification protocol",
    status: "unresolved",
    unresolvedRisk: "Urgent notification protocol not agreed — must be documented pre-launch",
  },
  {
    item: "Exception and Escalation Paths",
    why: "If not documented before launch, first incident will reveal the gap",
    owner: "Staff + OCIO Risk",
    evidence: "Escalation criteria, thresholds, and named contacts",
    status: "unresolved",
    unresolvedRisk: "Escalation criteria not yet written into mandate documents",
  },
];

const statusConfig: Record<string, { color: string; bg: string; label: string; icon: string }> = {
  resolved: { color: "#2294BD", bg: "#2294BD14", label: "Evidenced", icon: "✓" },
  watch: { color: "#FAA51A", bg: "#FAA51A14", label: "Partial", icon: "~" },
  unresolved: { color: "#D9532B", bg: "#D9532B14", label: "Missing", icon: "!" },
};

export default function ImplementationReadinessChecklist() {
  const resolved = checklistItems.filter((i) => i.status === "resolved").length;
  const partial = checklistItems.filter((i) => i.status === "watch").length;
  const missing = checklistItems.filter((i) => i.status === "unresolved").length;

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Implementation Readiness Checklist — Finalist
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">A provider not ready to onboard cleanly may not be ready to deliver cleanly.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Selection quality improves when the team asks whether the finalist is operationally ready, not only strategically appealing.
      </p>

      {/* Summary badges */}
      <div className="flex flex-wrap gap-3 mb-5">
        {[
          { label: "Evidenced", count: resolved, color: "#2294BD" },
          { label: "Partial / Watch", count: partial, color: "#FAA51A" },
          { label: "Missing / Unresolved", count: missing, color: "#D9532B" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-lg px-4 py-2 flex items-center gap-2"
            style={{ backgroundColor: s.color + "14", border: `1px solid ${s.color}40` }}
          >
            <span className="text-xl font-black" style={{ color: s.color }}>{s.count}</span>
            <span className="text-xs font-semibold text-[#404040]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Checklist */}
      <div className="space-y-2">
        {checklistItems.map((item, i) => {
          const sc = statusConfig[item.status];
          return (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: sc.color + "40" }}
            >
              <div
                className="px-4 py-2 flex items-center justify-between gap-2"
                style={{ backgroundColor: sc.bg }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ backgroundColor: sc.color }}
                  >
                    {sc.icon}
                  </div>
                  <p className="text-sm font-bold text-[#1A1A1A]">{item.item}</p>
                </div>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ backgroundColor: sc.color + "20", color: sc.color === "#FAA51A" ? "#b07000" : sc.color }}
                >
                  {sc.label}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Why It Matters</p>
                  <p className="text-[11px] text-[#404040]">{item.why}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Owner</p>
                  <p className="text-[11px] text-[#404040]">{item.owner}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Evidence Standard</p>
                  <p className="text-[11px] text-[#404040]">{item.evidence}</p>
                </div>
              </div>

              {item.unresolvedRisk && (
                <div className="px-4 py-2 border-t border-[#E8DDD4]" style={{ backgroundColor: sc.color + "0A" }}>
                  <p className="text-[10px] font-bold" style={{ color: sc.color === "#FAA51A" ? "#b07000" : sc.color }}>
                    Risk: {item.unresolvedRisk}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: selection quality improves when the team asks whether the finalist is operationally ready, not only strategically appealing.
      </p>
    </div>
  );
}
