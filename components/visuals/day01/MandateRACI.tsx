export default function MandateRACI() {
  const roles = ["Board", "Finance Committee", "CIO/Staff", "OCIO Provider"];
  const decisions = ["Policy Approval", "Manager Selection", "Rebalancing", "Tactical Moves", "Reporting Review"];

  const matrix = [
    ["R", "A", "C", "I"],
    ["C", "R", "A", "I"],
    ["I", "C", "R", "A"],
    ["C", "C", "R", "A"],
    ["A", "I", "C", "R"],
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    R: { bg: "#D9532B", text: "#FFFFFF" },
    A: { bg: "#2294BD", text: "#FFFFFF" },
    C: { bg: "#FAA51A", text: "#FFFFFF" },
    I: { bg: "#7C5CBF", text: "#FFFFFF" },
  };

  const meanings = [
    { letter: "R", meaning: "Responsible — Does the work" },
    { letter: "A", meaning: "Accountable — Makes final call" },
    { letter: "C", meaning: "Consulted — Provides input" },
    { letter: "I", meaning: "Informed — Kept in loop" },
  ];

  return (
    <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
      {/* Legend */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        {meanings.map((item) => (
          <div key={item.letter} className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: colorMap[item.letter].bg }}
            >
              {item.letter}
            </div>
            <span className="text-sm text-[#404040]">{item.meaning}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-left px-4 py-3 text-sm font-bold">
                Decision
              </th>
              {roles.map((role) => (
                <th
                  key={role}
                  className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] text-white text-center px-3 py-3 text-sm font-bold"
                >
                  {role}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {decisions.map((decision, i) => (
              <tr key={decision} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}>
                <td className="px-4 py-3 font-medium text-sm text-[#1A1A1A] border-r border-[#E8DDD4]">
                  {decision}
                </td>
                {matrix[i].map((cell, j) => (
                  <td
                    key={`${i}-${j}`}
                    className="px-3 py-3 text-center border-r border-[#E8DDD4] last:border-r-0"
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm mx-auto"
                      style={{ backgroundColor: colorMap[cell].bg }}
                    >
                      {cell}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-[#2294BD]/5 border border-[#2294BD]/20 rounded-lg">
        <p className="text-xs font-bold text-[#2294BD] uppercase tracking-wider mb-2">Teaching Note</p>
        <p className="text-sm text-[#404040]">
          A clear RACI prevents decision delays and misaligned expectations. The provider cannot be simultaneously responsible for execution and absent from policy decisions.
        </p>
      </div>
    </div>
  );
}
