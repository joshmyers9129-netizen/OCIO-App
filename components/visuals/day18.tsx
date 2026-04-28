"use client";

// Day 18 visuals: OCIO team operating model and RACI committee calendar

export function Day18OcioTeamOperatingModel() {
  const functions = [
    {
      label: "Research",
      color: "#2294BD",
      roles: ["Manager research", "Macro / CMA", "ESG / risk analytics"],
      outputs: "Manager recommendations, CMA updates, risk views",
    },
    {
      label: "Portfolio Management",
      color: "#7C5CBF",
      roles: ["Client CIO / PM", "Overlay / derivatives", "Asset allocation"],
      outputs: "Policy proposals, allocation decisions, tilt recommendations",
    },
    {
      label: "Implementation",
      color: "#2A9D60",
      roles: ["Transition management", "Trading / execution", "Ops & settlement"],
      outputs: "Executed trades, funded mandates, clean settlement",
    },
    {
      label: "Risk",
      color: "#D9532B",
      roles: ["Risk analytics", "Compliance", "Collateral management"],
      outputs: "Risk reports, breach alerts, collateral positions",
    },
    {
      label: "Client Delivery",
      color: "#FAA51A",
      roles: ["Relationship management", "Reporting & analytics", "Client service"],
      outputs: "Board materials, quarterly reports, RFP responses",
    },
  ];

  const interfaces = ["Custodian", "Prime Broker", "GP Relationships", "Actuary / Consultant", "Legal / Compliance"];

  return (
    <div className="font-sans text-[12px]">
      <div className="grid grid-cols-5 gap-1.5 mb-3">
        {functions.map((f, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: f.color }}>
            <div className="px-2 py-1.5 text-center font-bold text-white text-[10px]" style={{ backgroundColor: f.color }}>
              {f.label}
            </div>
            <div className="p-1.5 space-y-1">
              {f.roles.map((r, j) => (
                <div key={j} className="rounded bg-white/70 border px-1.5 py-0.5 text-[10px] text-[#000]" style={{ borderColor: `${f.color}30` }}>{r}</div>
              ))}
              <div className="mt-1 text-[9px] text-[#404040] italic leading-snug border-t pt-1" style={{ borderColor: `${f.color}30` }}>
                <span className="font-semibold">Output: </span>{f.outputs}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-[#404040]/20 bg-[#F5F5F5] p-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">External Interfaces</div>
        <div className="flex flex-wrap gap-1.5">
          {interfaces.map((i) => (
            <span key={i} className="rounded-full bg-white border border-[#404040]/30 px-2 py-0.5 text-[10px] text-[#404040] font-semibold">{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day18RaciCommitteeCalendar() {
  const responsibilities = [
    { role: "Portfolio Manager", monthly: ["Rebalancing", "Overlay review"], quarterly: ["Policy review", "Manager monitoring"], annual: ["CMA update", "IPS review"] },
    { role: "Research Team", monthly: [], quarterly: ["Manager due diligence", "Market outlook"], annual: ["Full lineup review", "New manager sourcing"] },
    { role: "Risk Team", monthly: ["Risk report", "Collateral review"], quarterly: ["Stress test", "Compliance check"], annual: ["Risk framework update"] },
    { role: "Client Service", monthly: ["Performance flash"], quarterly: ["Board package", "Manager commentary"], annual: ["Annual review meeting"] },
    { role: "Implementation", monthly: ["Trade settlement", "Cash management"], quarterly: ["Transition planning"], annual: ["Custody review"] },
  ];

  const cadenceColor: Record<string, string> = {
    monthly: "#2294BD",
    quarterly: "#7C5CBF",
    annual: "#2A9D60",
  };

  return (
    <div className="font-sans text-[12px]">
      <div className="flex gap-2 mb-2">
        {Object.entries(cadenceColor).map(([k, v]) => (
          <span key={k} className="flex items-center gap-1 text-[10px] capitalize">
            <span className="w-3 h-3 rounded inline-block" style={{ backgroundColor: v }} />{k}
          </span>
        ))}
      </div>
      <div className="space-y-1.5">
        {responsibilities.map((r, i) => (
          <div key={i} className="rounded-lg border border-[#E5E5E5] bg-white overflow-hidden">
            <div className="bg-[#2294BD] text-white px-2 py-1 text-[11px] font-bold">{r.role}</div>
            <div className="grid grid-cols-3 gap-0 divide-x divide-[#E5E5E5]">
              {(["monthly", "quarterly", "annual"] as const).map((cadence) => (
                <div key={cadence} className="px-2 py-1.5">
                  <div className="text-[9px] font-bold uppercase tracking-wide mb-1" style={{ color: cadenceColor[cadence] }}>{cadence}</div>
                  <div className="space-y-0.5">
                    {r[cadence].length > 0 ? r[cadence].map((item) => (
                      <div key={item} className="text-[10px] rounded px-1.5 py-0.5 text-white font-medium" style={{ backgroundColor: cadenceColor[cadence] }}>{item}</div>
                    )) : (
                      <div className="text-[10px] text-[#D0D0D0]">—</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
