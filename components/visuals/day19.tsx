"use client";

// Day 19 visuals: provider landscape map and provider evaluation scorecard

export function Day19ProviderLandscapeMap() {
  const providers = [
    // [model, scaleTier, label]
    { model: "Consultant-Rooted", scale: "Large (>$100B)", label: "Global advisory-OCIO platforms", color: "#2294BD" },
    { model: "Consultant-Rooted", scale: "Mid ($50–100B)", label: "Consultant-affiliated OCIO spin-offs", color: "#2294BD" },
    { model: "Consultant-Rooted", scale: "Niche (<$50B)", label: "Advisory boutiques; independent consultants", color: "#2294BD" },
    { model: "Asset Mgr / Bank", scale: "Large (>$100B)", label: "Bank trust and AM-embedded OCIO arms", color: "#7C5CBF" },
    { model: "Asset Mgr / Bank", scale: "Mid ($50–100B)", label: "AM OCIO divisions; insurance-affiliated", color: "#7C5CBF" },
    { model: "Asset Mgr / Bank", scale: "Niche (<$50B)", label: "Specialty AM platforms by plan type", color: "#7C5CBF" },
    { model: "Pure-Play / Specialist", scale: "Large (>$100B)", label: "Large independent OCIO providers", color: "#2A9D60" },
    { model: "Pure-Play / Specialist", scale: "Mid ($50–100B)", label: "Endowment-model specialists, pension risk", color: "#2A9D60" },
    { model: "Pure-Play / Specialist", scale: "Niche (<$50B)", label: "Mission-specific; single-archetype deep focus", color: "#2A9D60" },
  ];

  const models = ["Consultant-Rooted", "Asset Mgr / Bank", "Pure-Play / Specialist"];
  const scales = ["Large (>$100B)", "Mid ($50–100B)", "Niche (<$50B)"];
  const modelColors: Record<string, string> = {
    "Consultant-Rooted": "#2294BD",
    "Asset Mgr / Bank": "#7C5CBF",
    "Pure-Play / Specialist": "#2A9D60",
  };

  return (
    <div className="font-sans text-[12px]">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-2 py-1.5 text-[10px] font-bold text-[#404040] w-28">Scale Tier</th>
            {models.map((m) => (
              <th key={m} className="px-2 py-1.5 text-center text-[11px] font-bold text-white rounded" style={{ backgroundColor: modelColors[m] }}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scales.map((scale, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
              <td className="px-2 py-2 font-bold text-[11px] text-[#404040] border-b border-[#E5E5E5]">{scale}</td>
              {models.map((model) => {
                const p = providers.find(pr => pr.model === model && pr.scale === scale);
                return (
                  <td key={model} className="px-2 py-2 border-b border-[#E5E5E5]">
                    {p && (
                      <div className="rounded-lg border px-2 py-1.5 text-[11px]" style={{ borderColor: `${p.color}40`, backgroundColor: `${p.color}10` }}>
                        {p.label}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 rounded-lg bg-[#FFF8EC] border border-[#FAA51A]/40 px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#FAA51A]">Concentration: </span>Top tier controls a majority of reported OCIO AUM. Smaller providers remain competitive through specialization, perceived independence, and bespoke client relationships.
      </div>
    </div>
  );
}

export function Day19ProviderEvaluationScorecard() {
  const categories = [
    {
      label: "Investment Capabilities",
      color: "#2294BD",
      criteria: [
        "Asset-class depth and manager research quality",
        "Alternatives access and pacing discipline",
        "CMA rigor and evidence base",
        "Performance track record (with peer context)",
      ],
    },
    {
      label: "Governance & Delegation Model",
      color: "#7C5CBF",
      criteria: [
        "IPS and mandate clarity",
        "Escalation process and committee design",
        "Decision rights transparency",
        "Regulatory and fiduciary structure",
      ],
    },
    {
      label: "Implementation Quality",
      color: "#2A9D60",
      criteria: [
        "Transition management capability",
        "Overlay / derivatives execution",
        "Operational infrastructure and custodian relationships",
        "Implementation shortfall track record",
      ],
    },
    {
      label: "Reporting & Communication",
      color: "#FAA51A",
      criteria: [
        "Attribution depth and transparency",
        "Board dashboard quality",
        "Reporting customization",
        "Communication speed in stress events",
      ],
    },
    {
      label: "Conflicts of Interest",
      color: "#D9532B",
      criteria: [
        "Proprietary product usage and disclosure",
        "Revenue sharing arrangements",
        "Manager selection objectivity",
        "Fee structure and alignment",
      ],
    },
    {
      label: "Client Fit",
      color: "#404040",
      criteria: [
        "Client roster similarity (archetype match)",
        "Team stability and key-person risk",
        "Scalability and service model at your size",
        "Cultural and communication fit",
      ],
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="grid grid-cols-2 gap-2">
        {categories.map((cat, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: cat.color }}>
            <div className="px-2 py-1.5 font-bold text-white text-[11px]" style={{ backgroundColor: cat.color }}>
              {cat.label}
            </div>
            <div className="p-2 space-y-1 bg-white">
              {cat.criteria.map((c, j) => (
                <div key={j} className="flex items-start gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: cat.color }} />
                  <span className="text-[11px] text-[#404040]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
