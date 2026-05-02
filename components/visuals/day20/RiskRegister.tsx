import React from "react";

const risks = [
  {
    risk: "Governance Bottleneck",
    why: "Retained decisions may slow execution if not clearly bounded",
    mitigation: "Narrow retained decisions to policy, structural changes, and escalation triggers only",
    owner: "Committee + OCIO",
    escalationTrigger: "Decision outside delegated band requires committee action",
    severity: "high",
    firstQtrReview: false,
  },
  {
    risk: "Liquidity Shortfall",
    why: "Capital calls, distributions, or benefit payments may cluster unexpectedly",
    mitigation: "Reserve ladder, 12-month cash calendar, pre-authorized draw authority",
    owner: "Treasury + OCIO",
    escalationTrigger: "Reserve buffer below threshold",
    severity: "high",
    firstQtrReview: true,
  },
  {
    risk: "Reporting Mismatch",
    why: "Board may not see how results relate to the mandate objective",
    mitigation: "Pre-approved objective-first dashboard with forward watch list",
    owner: "OCIO Reporting + Staff",
    escalationTrigger: "Report fails objective test or benchmark not properly displayed",
    severity: "medium",
    firstQtrReview: true,
  },
  {
    risk: "Implementation Delay",
    why: "Transition leakage or cash drag if sequencing not documented before approval",
    mitigation: "Transition plan, completion overlay, funded-state monitoring",
    owner: "OCIO Implementation",
    escalationTrigger: "Cash drag exceeds 5 business days or benchmark misalignment detected",
    severity: "medium",
    firstQtrReview: true,
  },
  {
    risk: "Conflict or Fee Opacity",
    why: "Affiliated vehicles or layered fees distort portfolio construction incentives",
    mitigation: "Explicit monitoring, annual fee disclosure, conflict review by committee",
    owner: "Committee",
    escalationTrigger: "Proprietary use exceeds guidelines; undisclosed economic arrangement",
    severity: "high",
    firstQtrReview: false,
  },
  {
    risk: "Benchmark Misfit",
    why: "If sleeves lack clear benchmarks, attribution is impossible and monitoring breaks down",
    mitigation: "Benchmark stack documented and signed before transition; custom benchmarks pre-approved",
    owner: "OCIO Portfolio Mgr",
    escalationTrigger: "Any sleeve without agreed benchmark 30 days after approval",
    severity: "medium",
    firstQtrReview: true,
  },
  {
    risk: "Team or Succession Risk",
    why: "Key-person departure could affect portfolio continuity or reporting",
    mitigation: "Backup coverage named for each critical role; succession protocol in contract",
    owner: "OCIO Leadership + Staff",
    escalationTrigger: "Lead PM or implementation head departs — notify client within 5 business days",
    severity: "medium",
    firstQtrReview: false,
  },
  {
    risk: "Denominator Effect (Private)",
    why: "Public-market drawdown can mechanically elevate private share without new commitments",
    mitigation: "Pre-defined tolerance bands; pacing pause authority documented",
    owner: "OCIO + Committee",
    escalationTrigger: "Private share exceeds upper tolerance band for 2 consecutive reports",
    severity: "medium",
    firstQtrReview: false,
  },
];

const severityConfig: Record<string, { color: string; bg: string; label: string }> = {
  high: { color: "#D9532B", bg: "#D9532B14", label: "High consequence" },
  medium: { color: "#FAA51A", bg: "#FAA51A14", label: "Moderate" },
  low: { color: "#2294BD", bg: "#2294BD14", label: "Low" },
};

export default function RiskRegister() {
  const firstQtrItems = risks.filter((r) => r.firstQtrReview);

  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Risk Register
      </p>
      <div className="inline-block bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#D9532B]">Every high-consequence risk should have an owner, a mitigation path, and a return-to-committee trigger.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Credibility improves when the recommendation shows both tradeoffs and controls.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(severityConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-5">
        {risks.map((risk, i) => {
          const sc = severityConfig[risk.severity];
          return (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: sc.color + "40" }}
            >
              {/* Header */}
              <div
                className="px-4 py-2 flex items-center justify-between gap-2"
                style={{ backgroundColor: sc.bg }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-[#1A1A1A]">{risk.risk}</p>
                  {risk.firstQtrReview && (
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#2294BD18", color: "#2294BD" }}>
                      Q1 Review
                    </span>
                  )}
                </div>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ backgroundColor: sc.color + "20", color: sc.color === "#FAA51A" ? "#b07000" : sc.color }}
                >
                  {sc.label}
                </span>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Why It Matters</p>
                  <p className="text-[11px] text-[#404040]">{risk.why}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Mitigation</p>
                  <p className="text-[11px] text-[#2294BD] font-semibold">{risk.mitigation}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Owner</p>
                  <p className="text-[11px] text-[#1A1A1A] font-semibold">{risk.owner}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-1">Escalation Trigger</p>
                  <p className="text-[11px] text-[#D9532B] font-semibold">{risk.escalationTrigger}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Q1 review items */}
      <div className="bg-[#2294BD12] border border-[#2294BD30] rounded-xl px-4 py-3 mb-4">
        <p className="text-xs font-bold text-[#2294BD] mb-2">Items for First-Quarter Review ({firstQtrItems.length} risks flagged)</p>
        <div className="flex flex-wrap gap-2">
          {firstQtrItems.map((r, i) => (
            <span key={i} className="text-[10px] font-semibold px-2 py-1 rounded bg-white border border-[#2294BD30] text-[#2294BD]">
              {r.risk}
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: credibility improves when the recommendation shows both tradeoffs and controls.
      </p>
    </div>
  );
}
