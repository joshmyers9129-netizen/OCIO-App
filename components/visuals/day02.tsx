"use client";

// Day 02 visuals: OCIO history timeline and provider family tree

export function Day02OcioHistoryTimeline() {
  const events = [
    { period: "1970s", label: "Early Foundations", desc: "Nonprofit pooling and early outsourced investment support emerge" },
    { period: "1980s", label: "Pioneers", desc: "Dedicated investment-office-for-hire firms established; corporate pension outsourcing begins" },
    { period: "1990s", label: "Infrastructure Builds", desc: "Manager-of-managers platforms scale; consultant-affiliated models develop" },
    { period: "2000–02", label: "Bear Market Pressure", desc: "Equity drawdown increases governance burden; OCIO demand rises" },
    { period: "2008–12", label: "Crisis Accelerator", desc: "Financial crisis drives delegated-mandate adoption; LDI and alternatives expand" },
    { period: "2010s", label: "Rapid Scaling", desc: "Consultant-affiliated OCIO scales rapidly; AUM concentration increases" },
    { period: "2020–22", label: "Pandemic & Staffing Strain", desc: "Remote governance stress, liquidity complexity, operational strain reinforce OCIO appeal" },
    { period: "2022+", label: "Rate Shock Era", desc: "LDI stress, denominator effect, renewed focus on implementation credibility" },
  ];

  return (
    <div className="font-sans text-[13px]">
      <div className="relative pl-6">
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#2294BD]/30" />
        <div className="space-y-3">
          {events.map((e, i) => (
            <div key={i} className="relative flex gap-3">
              <div className="absolute -left-4 mt-1 w-4 h-4 rounded-full border-2 border-[#2294BD] bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2294BD]" />
              </div>
              <div className="rounded-lg border border-[#2294BD]/20 bg-white px-3 py-2 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold text-white bg-[#2294BD] rounded px-1.5 py-0.5">{e.period}</span>
                  <span className="text-[11px] font-bold text-[#000]">{e.label}</span>
                </div>
                <p className="text-[12px] text-[#404040] leading-snug">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day02ProviderFamilyTree() {
  const columns = [
    {
      label: "Consultant-Rooted",
      color: "#E8F4F8",
      border: "#2294BD",
      tiers: [
        { tier: ">$100B AUM", providers: "Large advisory firm OCIO platforms (e.g., global consultancy-owned)" },
        { tier: "$50B–$100B", providers: "Mid-size consultant spin-offs and affiliated platforms" },
        { tier: "<$50B", providers: "Boutique advisory-OCIO hybrids, strong in specific client niches" },
      ],
    },
    {
      label: "Asset Manager / Bank-Rooted",
      color: "#F3EFFA",
      border: "#7C5CBF",
      tiers: [
        { tier: ">$100B AUM", providers: "Major bank trust, insurance-affiliated, and AM-embedded OCIO arms" },
        { tier: "$50B–$100B", providers: "Asset manager OCIO divisions with institutional client focus" },
        { tier: "<$50B", providers: "Specialty AM divisions targeting specific plan types" },
      ],
    },
    {
      label: "Specialist / Independent",
      color: "#E8F6EF",
      border: "#2A9D60",
      tiers: [
        { tier: ">$100B AUM", providers: "A few large pure-play OCIO providers" },
        { tier: "$50B–$100B", providers: "Endowment-model specialists, pension-risk-focused boutiques" },
        { tier: "<$50B", providers: "Mission-specific, single-archetype specialists; perceived independence valued" },
      ],
    },
  ];

  return (
    <div className="font-sans text-[13px]">
      <div className="grid grid-cols-3 gap-2">
        {columns.map((col, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: col.border, backgroundColor: col.color }}>
            <div className="px-2 py-2 text-center font-bold text-white text-[11px]" style={{ backgroundColor: col.border }}>
              {col.label}
            </div>
            <div className="p-2 space-y-1.5">
              {col.tiers.map((t, j) => (
                <div key={j} className="rounded bg-white/80 px-2 py-1.5">
                  <div className="text-[10px] font-bold text-[#404040] uppercase tracking-wide mb-0.5">{t.tier}</div>
                  <div className="text-[11px] text-[#000] leading-snug">{t.providers}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg border border-[#FAA51A]/40 bg-[#FFF8EC] px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#FAA51A]">Note: </span>Top tier controls most reported OCIO AUM. Smaller firms compete via client specialization, bespoke service, and perceived independence.
      </div>
    </div>
  );
}
