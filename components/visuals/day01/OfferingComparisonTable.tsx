export default function OfferingComparisonTable() {
  const offerings = [
    { name: "Traditional Consulting", governance: "Advisory", implementation: "Advice", discretion: "None", timeline: "3-6 months" },
    { name: "Commingled Fund", governance: "Product", implementation: "Access", discretion: "Fund manager", timeline: "Immediate" },
    { name: "Implementation Support", governance: "Oversight", implementation: "Execution", discretion: "Limited", timeline: "6-12 months" },
    { name: "Full OCIO", governance: "Delegated", implementation: "Full", discretion: "Broad", timeline: "9-18 months" },
  ];

  const colors = ["#2294BD", "#FAA51A", "#7C5CBF", "#D9532B"];

  return (
    <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-left px-4 py-3 text-sm font-bold rounded-tl-lg">
                Service Model
              </th>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-center px-4 py-3 text-sm font-bold">
                Governance Role
              </th>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-center px-4 py-3 text-sm font-bold">
                Implementation
              </th>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-center px-4 py-3 text-sm font-bold">
                Discretion
              </th>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-center px-4 py-3 text-sm font-bold rounded-tr-lg">
                Search Timeline
              </th>
            </tr>
          </thead>
          <tbody>
            {offerings.map((offering, i) => (
              <tr key={offering.name} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}>
                <td className="px-4 py-4 font-semibold text-sm text-[#1A1A1A] border-r border-[#E8DDD4]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors[i] }}
                    />
                    {offering.name}
                  </div>
                </td>
                <td className="px-4 py-4 text-center text-sm text-[#404040] border-r border-[#E8DDD4]">
                  {offering.governance}
                </td>
                <td className="px-4 py-4 text-center text-sm text-[#404040] border-r border-[#E8DDD4]">
                  {offering.implementation}
                </td>
                <td className="px-4 py-4 text-center text-sm text-[#404040] border-r border-[#E8DDD4]">
                  {offering.discretion}
                </td>
                <td className="px-4 py-4 text-center text-sm text-[#404040]">
                  {offering.timeline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key insight */}
      <div className="mt-6 p-4 bg-[#D9532B]/5 border border-[#D9532B]/20 rounded-lg">
        <p className="text-xs font-bold text-[#D9532B] uppercase tracking-wider mb-2">Critical Point</p>
        <p className="text-sm text-[#404040]">
          These are not competing products. They solve different problems. The search must start by identifying which problem the institution actually has.
        </p>
      </div>
    </div>
  );
}
