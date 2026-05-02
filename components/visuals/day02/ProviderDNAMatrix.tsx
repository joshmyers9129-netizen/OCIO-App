import React from "react";

const rows = [
  {
    lineage: "Consultant-rooted",
    strengths: "Governance design, broad research, policy architecture",
    blindSpots: "Implementation proof required",
    conflicts: "Product expansion over time",
    bestFit: "Governance-heavy searches, policy-first institutions",
  },
  {
    lineage: "Asset-manager-rooted",
    strengths: "Portfolio construction, execution depth, trading platform",
    blindSpots: "Openness and product neutrality",
    conflicts: "Internal funds and sleeves",
    bestFit: "Implementation-intensive mandates, LDI, transitions",
  },
  {
    lineage: "Bank / custody-rooted",
    strengths: "Plumbing, reporting, scale, operational integration",
    blindSpots: "Strategic customization depth",
    conflicts: "Cross-selling, bundled economics",
    bestFit: "Multi-pool institutions, enterprise coordination needs",
  },
  {
    lineage: "Specialist boutique",
    strengths: "Senior attention, customization, alignment clarity",
    blindSpots: "Succession, capacity, scale",
    conflicts: "Key-person dependency",
    bestFit: "Foundations, family-office style, select pensions",
  },
];

export default function ProviderDNAMatrix() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-4">
        Provider DNA Matrix · Lineage does not settle selection — it tells you which questions come first
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg">Lineage</th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#2294BD" }}>Natural Strengths</th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#FAA51A" }}>Likely Blind Spots</th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#D9532B" }}>Conflict Hot Spots</th>
              <th className="text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#404040] text-white rounded-tr-lg">Best-Fit Clients</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-3 font-bold text-[#1A1A1A] border-b border-[#E8DDD4] text-sm">{row.lineage}</td>
                <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]" style={{ backgroundColor: "#2294BD12" }}>{row.strengths}</td>
                <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]" style={{ backgroundColor: "#FAA51A12" }}>{row.blindSpots}</td>
                <td className="px-3 py-3 text-xs text-[#1A1A1A] border-b border-[#E8DDD4]" style={{ backgroundColor: "#D9532B12" }}>{row.conflicts}</td>
                <td className="px-3 py-3 text-xs text-[#404040] border-b border-[#E8DDD4] bg-[#F0E6DD]">{row.bestFit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: Lineage tells you what questions to ask first, what proof to request, and which risk to price into the evaluation.
      </p>
    </div>
  );
}
