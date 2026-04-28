"use client";

// Day 01 visuals: OCIO market map and outsourcing fit matrix

export function Day01MarketSpectrum() {
  const columns = [
    {
      label: "Traditional\nConsulting",
      color: "#E8F4F8",
      border: "#2294BD",
      items: [
        { role: "Policy", owner: "Client sets" },
        { role: "Manager hire/fire", owner: "Client decides" },
        { role: "Rebalancing", owner: "Client approves" },
        { role: "Transitions", owner: "Client manages" },
        { role: "Day-to-day", owner: "Client owns" },
      ],
    },
    {
      label: "Advisory Plus\n/ Hybrid",
      color: "#EEF5FB",
      border: "#2294BD",
      items: [
        { role: "Policy", owner: "Joint" },
        { role: "Manager hire/fire", owner: "Advisor recommends" },
        { role: "Rebalancing", owner: "Advisor triggers" },
        { role: "Transitions", owner: "Shared" },
        { role: "Day-to-day", owner: "Client oversees" },
      ],
    },
    {
      label: "Implementation\nOnly",
      color: "#FFF8EC",
      border: "#FAA51A",
      items: [
        { role: "Policy", owner: "Client sets" },
        { role: "Manager hire/fire", owner: "Client decides" },
        { role: "Rebalancing", owner: "Provider executes" },
        { role: "Transitions", owner: "Provider manages" },
        { role: "Day-to-day", owner: "Provider executes" },
      ],
    },
    {
      label: "Partial OCIO",
      color: "#F3EFFA",
      border: "#7C5CBF",
      items: [
        { role: "Policy", owner: "Joint" },
        { role: "Manager hire/fire", owner: "Provider within policy" },
        { role: "Rebalancing", owner: "Provider discretion" },
        { role: "Transitions", owner: "Provider manages" },
        { role: "Day-to-day", owner: "Shared accountability" },
      ],
    },
    {
      label: "Full OCIO",
      color: "#E8F6EF",
      border: "#2A9D60",
      items: [
        { role: "Policy", owner: "Provider recommends" },
        { role: "Manager hire/fire", owner: "Provider decides" },
        { role: "Rebalancing", owner: "Provider discretion" },
        { role: "Transitions", owner: "Provider manages" },
        { role: "Day-to-day", owner: "Provider owns" },
      ],
    },
  ];

  return (
    <div className="font-sans text-[13px]">
      <div className="flex gap-1.5 overflow-x-auto pb-2">
        {columns.map((col, i) => (
          <div
            key={i}
            className="flex-1 min-w-[140px] rounded-lg border-2 overflow-hidden"
            style={{ borderColor: col.border, backgroundColor: col.color }}
          >
            <div
              className="px-2 py-2 text-center font-bold text-white text-[11px] leading-tight"
              style={{ backgroundColor: col.border }}
            >
              {col.label.split("\n").map((l, j) => (
                <div key={j}>{l}</div>
              ))}
            </div>
            <div className="p-2 space-y-1.5">
              {col.items.map((item, j) => (
                <div key={j} className="rounded bg-white/70 px-2 py-1">
                  <div className="text-[10px] font-semibold text-[#404040] uppercase tracking-wide">{item.role}</div>
                  <div className="text-[11px] text-[#000]">{item.owner}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-[#FAA51A]/40 bg-[#FFF8EC] px-3 py-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#FAA51A] mb-1">Adjacent Services (not OCIO)</p>
        <div className="flex flex-wrap gap-2">
          {["Multi-asset funds", "Outsourced trading", "Transition management", "Custodian support"].map((s) => (
            <span key={s} className="rounded-full bg-white border border-[#FAA51A]/30 px-2 py-0.5 text-[11px] text-[#404040]">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day01OutsourcingFitMatrix() {
  const quadrants = [
    {
      pos: "top-left",
      label: "Low Burden / High Complexity",
      recommendation: "Implementation Support or Sleeve Delegation",
      example: "Frozen corporate DB plan",
      color: "#FFF8EC",
      border: "#FAA51A",
      badge: "bg-[#FAA51A]",
    },
    {
      pos: "top-right",
      label: "High Burden / High Complexity",
      recommendation: "Strong candidate for Full OCIO",
      example: "Small college endowment with limited staff",
      color: "#E8F6EF",
      border: "#2A9D60",
      badge: "bg-[#2A9D60]",
    },
    {
      pos: "bottom-left",
      label: "Low Burden / Low Complexity",
      recommendation: "Consulting often sufficient",
      example: "Well-staffed public plan",
      color: "#E8F4F8",
      border: "#2294BD",
      badge: "bg-[#2294BD]",
    },
    {
      pos: "bottom-right",
      label: "High Burden / Low Complexity",
      recommendation: "Hybrid or Partial OCIO",
      example: "Mid-size foundation, minimal alternatives",
      color: "#F3EFFA",
      border: "#7C5CBF",
      badge: "bg-[#7C5CBF]",
    },
  ];

  return (
    <div className="font-sans text-[13px]">
      <div className="flex items-center justify-center mb-2">
        <span className="text-[11px] text-[#404040] font-semibold">↑ Implementation Complexity ↑</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {quadrants.map((q, i) => (
          <div key={i} className="rounded-xl border-2 p-3" style={{ borderColor: q.border, backgroundColor: q.color }}>
            <p className="text-[10px] font-bold text-[#404040] leading-tight mb-1">{q.label}</p>
            <div className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white mb-1.5 ${q.badge}`}>
              {q.recommendation}
            </div>
            <p className="text-[11px] text-[#404040] italic">e.g. {q.example}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <span className="text-[11px] text-[#404040] font-semibold">← Low Governance Burden — High Governance Burden →</span>
      </div>
    </div>
  );
}
