import React from "react";

const quarters = ["Q1", "Q2", "Q3", "Q4"];

const calendarRows = [
  {
    activity: "Pacing Review",
    owner: "OCIO + Committee",
    ownerType: "shared",
    question: "Are commitments on plan?",
    q1: { status: "required", note: "Annual plan set" },
    q2: { status: "required", note: "Mid-year check" },
    q3: { status: "required", note: "Pipeline review" },
    q4: { status: "required", note: "Plan next year" },
  },
  {
    activity: "Reserve Test",
    owner: "OCIO + Treasury",
    ownerType: "shared",
    question: "Can calls be funded?",
    q1: { status: "required", note: "Pre-season test" },
    q2: { status: "required", note: "Call season" },
    q3: { status: "caution", note: "Low-call period" },
    q4: { status: "required", note: "Stress scenario" },
  },
  {
    activity: "Commitment Approval",
    owner: "Committee or Delegated Rule",
    ownerType: "client",
    question: "Does pacing still fit policy?",
    q1: { status: "required", note: "New vintage window" },
    q2: { status: "caution", note: "Only if pipeline ready" },
    q3: { status: "caution", note: "Slow season — defer?" },
    q4: { status: "required", note: "Year-end commitments" },
  },
  {
    activity: "Capital Call Monitoring",
    owner: "OCIO Implementation",
    ownerType: "provider",
    question: "Is cash management ready?",
    q1: { status: "required", note: "Peak call season" },
    q2: { status: "required", note: "Moderate calls" },
    q3: { status: "caution", note: "Monitor for surprises" },
    q4: { status: "required", note: "Year-end calls" },
  },
  {
    activity: "Distribution Update",
    owner: "OCIO",
    ownerType: "provider",
    question: "Has liquidity outlook changed?",
    q1: { status: "caution", note: "Early year — limited" },
    q2: { status: "required", note: "Acceleration check" },
    q3: { status: "required", note: "Forecast revision" },
    q4: { status: "required", note: "Annual reconcile" },
  },
  {
    activity: "Stress / Pause Trigger Review",
    owner: "Committee",
    ownerType: "client",
    question: "Should pacing slow or stop?",
    q1: { status: "caution", note: "Review policy band" },
    q2: { status: "caution", note: "Mid-year check" },
    q3: { status: "caution", note: "Monitor only" },
    q4: { status: "required", note: "Annual stress test" },
  },
];

const ownerConfig: Record<string, { color: string; label: string }> = {
  provider: { color: "#2294BD", label: "OCIO-Led" },
  shared: { color: "#FAA51A", label: "Shared" },
  client: { color: "#404040", label: "Client / Committee" },
};

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  required: { color: "#2294BD", bg: "#2294BD18", label: "Active" },
  caution: { color: "#FAA51A", bg: "#FAA51A18", label: "Monitor" },
  skip: { color: "#E8DDD4", bg: "#F0E6DD", label: "—" },
};

export default function CommitmentGovernanceCalendar() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Commitment Governance Calendar
      </p>
      <div className="inline-block bg-[#FAA51A14] border border-[#FAA51A40] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#b07000]">Governance cadence should match pacing cadence.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A private program is easier to govern when commitment decisions and reserve testing follow a visible calendar.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(statusConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: conf.bg, border: `1px solid ${conf.color}` }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
        <div className="w-px h-4 bg-[#E8DDD4]" />
        {Object.entries(ownerConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conf.color }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-tl-lg" style={{ minWidth: 140 }}>
                Governance Activity
              </th>
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider" style={{ minWidth: 120 }}>
                Key Question
              </th>
              {quarters.map((q, i) => (
                <th
                  key={i}
                  className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ minWidth: 100, borderRadius: i === quarters.length - 1 ? "0 8px 0 0" : undefined }}
                >
                  {q}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((row, i) => {
              const conf = ownerConfig[row.ownerType];
              const qData = [row.q1, row.q2, row.q3, row.q4];
              return (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-2.5 border-b border-[#E8DDD4] align-top">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: conf.color }} />
                      <p className="text-xs font-bold text-[#1A1A1A]">{row.activity}</p>
                    </div>
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: conf.color + "18", color: conf.color === "#FAA51A" ? "#b07000" : conf.color }}
                    >
                      {row.owner}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-[11px] text-[#404040] border-b border-[#E8DDD4] align-top italic">
                    {row.question}
                  </td>
                  {qData.map((qd, qi) => {
                    const sc = statusConfig[qd.status];
                    return (
                      <td
                        key={qi}
                        className="text-center px-2 py-2.5 border-b border-[#E8DDD4] align-top"
                        style={{ backgroundColor: sc.bg }}
                      >
                        <p className="text-[9px] font-bold mb-0.5" style={{ color: sc.color }}>{sc.label}</p>
                        <p className="text-[9px] text-[#404040]">{qd.note}</p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Annotation boxes */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-lg px-3 py-2.5 bg-[#2294BD12] border-l-4 border-[#2294BD]">
          <p className="text-xs font-bold text-[#2294BD] mb-1">Q1 / Q4 — Active Governance</p>
          <p className="text-[11px] text-[#404040]">Commitment decisions and reserve tests are most consequential at year boundaries. Plan accordingly.</p>
        </div>
        <div className="rounded-lg px-3 py-2.5 bg-[#FAA51A12] border-l-4 border-[#FAA51A]">
          <p className="text-xs font-bold text-[#b07000] mb-1">Slow reserves? Slow pacing.</p>
          <p className="text-[11px] text-[#404040]">Annotate periods where commitment decisions should slow or accelerate based on reserve conditions from the reserve test row.</p>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a private program is easier to govern when commitment decisions and reserve testing follow a visible calendar.
      </p>
    </div>
  );
}
