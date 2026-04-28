"use client";

// Day 03 visuals: client archetype comparison and OCIO fit heatmap

export function Day03ClientArchetypeComparison() {
  const archetypes = [
    { name: "Corporate DB Pension", objective: "Funded-status stability", constraint: "Sponsor tolerance, PBGC", liquidity: "Moderate (benefit pmts)", governance: "Centralized, actuarial", scope: "Full OCIO common", failure: "Over-hedging vs. return" },
    { name: "Public DB Pension", objective: "Benefit security, contributions", constraint: "Legislative, public scrutiny", liquidity: "Moderate (pensions)", governance: "Board-heavy, political", scope: "Targeted delegation", failure: "Political override of investment" },
    { name: "DC-Related Pools", objective: "Participant outcomes", constraint: "ERISA prudence, fees", liquidity: "High (participant redemptions)", governance: "Committee-driven", scope: "Menu design + QDIA", failure: "Fee leakage, passive neglect" },
    { name: "Endowment", objective: "Perpetual growth + spending", constraint: "Spending rule, inflation", liquidity: "Moderate-low (illiquid)", governance: "IC, staff CIO", scope: "Full OCIO or hybrid", failure: "Illiquidity at bad time" },
    { name: "Private Foundation", objective: "Mission support + 5% payout", constraint: "IRS payout rule, mission", liquidity: "Moderate (grants)", governance: "Family/board IC", scope: "Full OCIO frequent", failure: "Underspending or illiquidity" },
    { name: "Community Foundation", objective: "Donor intent + distribution", constraint: "Multiple donor agreements", liquidity: "Variable (grants)", governance: "Distributed, advisory", scope: "Pooling + OCIO", failure: "Donor misalignment" },
    { name: "Healthcare System", objective: "Operational reserve + returns", constraint: "Capital needs, rating agencies", liquidity: "High (operations)", governance: "Finance committee", scope: "Hybrid OCIO growing", failure: "Correlation with revenues" },
    { name: "Insurer Surplus", objective: "Capital return, ALM", constraint: "Regulatory capital, risk-based", liquidity: "Moderate-high", governance: "Risk & investment committee", scope: "Specialty ALM focus", failure: "Regulatory capital breach" },
    { name: "Reserve Pool", objective: "Preservation + modest return", constraint: "Liquidity first", liquidity: "Very high", governance: "Treasury-led", scope: "Limited delegation", failure: "Reaching for yield" },
    { name: "Taft-Hartley Plan", objective: "Benefit security", constraint: "Joint labor-management board", liquidity: "Moderate", governance: "Bipartite board", scope: "OCIO growing", failure: "Political board dynamics" },
    { name: "Family-Office Mandate", objective: "Wealth preservation + growth", constraint: "Family governance complexity", liquidity: "Flexible", governance: "Family office CIO", scope: "Varies widely", failure: "Governance breakdown" },
  ];

  const cols = ["Objective", "Key Constraint", "Liquidity", "Governance", "OCIO Scope", "Failure Mode"];

  return (
    <div className="font-sans text-[12px] overflow-x-auto">
      <table className="w-full border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-[#2294BD] text-white">
            <th className="px-2 py-2 text-left font-bold text-[11px] rounded-tl-lg">Archetype</th>
            {cols.map((c) => (
              <th key={c} className="px-2 py-2 text-left font-bold text-[11px]">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {archetypes.map((a, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
              <td className="px-2 py-1.5 font-semibold text-[#000] border-b border-[#E5E5E5]">{a.name}</td>
              <td className="px-2 py-1.5 text-[#404040] border-b border-[#E5E5E5]">{a.objective}</td>
              <td className="px-2 py-1.5 text-[#404040] border-b border-[#E5E5E5]">{a.constraint}</td>
              <td className="px-2 py-1.5 text-[#404040] border-b border-[#E5E5E5]">{a.liquidity}</td>
              <td className="px-2 py-1.5 text-[#404040] border-b border-[#E5E5E5]">{a.governance}</td>
              <td className="px-2 py-1.5 text-[#404040] border-b border-[#E5E5E5]">{a.scope}</td>
              <td className="px-2 py-1.5 text-[#D9532B] border-b border-[#E5E5E5] text-[11px]">{a.failure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Day03OcioFitByArchetype() {
  const archetypes = [
    "Corporate DB Pension",
    "Public DB Pension",
    "DC-Related Pools",
    "Endowment",
    "Private Foundation",
    "Community Foundation",
    "Healthcare System",
    "Insurer Surplus",
    "Reserve Pool",
    "Taft-Hartley Plan",
    "Family-Office",
  ];

  type FitLevel = "High" | "Medium" | "Low";

  const fits: Record<string, { consulting: FitLevel; hybrid: FitLevel; full: FitLevel; note: string }> = {
    "Corporate DB Pension":  { consulting: "Low",    hybrid: "Medium", full: "High",   note: "LDI complexity and implementation speed favor full delegation" },
    "Public DB Pension":     { consulting: "High",   hybrid: "High",   full: "Medium", note: "Political oversight may limit discretion scope" },
    "DC-Related Pools":      { consulting: "High",   hybrid: "Medium", full: "Low",    note: "Menu governance and ERISA favour advisory-plus model" },
    "Endowment":             { consulting: "Medium", hybrid: "High",   full: "High",   note: "Scale and staff depth determine where on spectrum" },
    "Private Foundation":    { consulting: "Low",    hybrid: "Medium", full: "High",   note: "Small board, limited staff, complex privates → full OCIO" },
    "Community Foundation":  { consulting: "Medium", hybrid: "High",   full: "Medium", note: "Multiple donor pools often need pooled delegation" },
    "Healthcare System":     { consulting: "Medium", hybrid: "High",   full: "Medium", note: "Depends on treasury depth; OCIO growing" },
    "Insurer Surplus":       { consulting: "Medium", hybrid: "High",   full: "Low",    note: "Regulatory constraints limit full discretion transfer" },
    "Reserve Pool":          { consulting: "High",   hybrid: "Medium", full: "Low",    note: "Liquidity primacy limits illiquid strategies" },
    "Taft-Hartley Plan":     { consulting: "Medium", hybrid: "High",   full: "Medium", note: "Joint board dynamics affect delegation appetite" },
    "Family-Office":         { consulting: "Low",    hybrid: "Medium", full: "High",   note: "Principal-agent complexity; highly bespoke" },
  };

  const fitColor: Record<FitLevel, string> = {
    High: "bg-[#2A9D60] text-white",
    Medium: "bg-[#FAA51A] text-white",
    Low: "bg-[#E5E5E5] text-[#404040]",
  };

  return (
    <div className="font-sans text-[12px] overflow-x-auto">
      <table className="w-full border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-[#2294BD] text-white">
            <th className="px-2 py-2 text-left text-[11px] font-bold">Archetype</th>
            <th className="px-2 py-2 text-center text-[11px] font-bold">Consulting</th>
            <th className="px-2 py-2 text-center text-[11px] font-bold">Hybrid / Sleeve</th>
            <th className="px-2 py-2 text-center text-[11px] font-bold">Full OCIO</th>
            <th className="px-2 py-2 text-left text-[11px] font-bold">Key driver</th>
          </tr>
        </thead>
        <tbody>
          {archetypes.map((a, i) => {
            const f = fits[a];
            return (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}>
                <td className="px-2 py-1.5 font-semibold text-[#000] border-b border-[#E5E5E5]">{a}</td>
                {(["consulting", "hybrid", "full"] as const).map((k) => (
                  <td key={k} className="px-2 py-1.5 text-center border-b border-[#E5E5E5]">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${fitColor[f[k]]}`}>{f[k]}</span>
                  </td>
                ))}
                <td className="px-2 py-1.5 text-[11px] text-[#404040] border-b border-[#E5E5E5] italic">{f.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
