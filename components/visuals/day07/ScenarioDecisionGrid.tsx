import React from "react";

const scenarios = [
  {
    scenario: "Equity Shock",
    portfolioEffect: "Growth sleeve drawdown 25–40%; total portfolio down 15–25%",
    institutionalEffect: "Behavior and spending pressure; private allocation appears too large",
    likelyResponse: "Hold policy; rebalance toward equity per plan; test liquidity buffer",
    severity: "high",
    benchmark: "Total portfolio vs. policy benchmark",
  },
  {
    scenario: "Inflation Surprise",
    portfolioEffect: "Bond real value eroded; nominal anchors shift; real assets outperform",
    institutionalEffect: "Policy objective at risk; spending power reduced",
    likelyResponse: "Review real-asset allocation; evaluate TIPS / inflation hedge",
    severity: "medium",
    benchmark: "Real return vs. spending benchmark",
  },
  {
    scenario: "Rate Rally",
    portfolioEffect: "Bond gains; liability present value rises; funded status may improve",
    institutionalEffect: "Funded-status change; de-risking trigger may activate",
    likelyResponse: "Execute glide path if funded-status threshold hit; check collateral",
    severity: "medium",
    benchmark: "Funded-status vs. LDI benchmark",
  },
  {
    scenario: "Liquidity Squeeze",
    portfolioEffect: "Forced-cash risk; public assets may be sold to meet calls",
    institutionalEffect: "Governance urgency; board may override policy in stress",
    likelyResponse: "Activate escalation rule; confirm cash ladder; halt new commitments",
    severity: "high",
    benchmark: "Liquidity policy compliance",
  },
  {
    scenario: "Private Capital-Call Cluster",
    portfolioEffect: "Large cash outflows concentrated in short window",
    institutionalEffect: "Liquidity strain; policy allocation drift as privates funded",
    likelyResponse: "Draw on pre-approved facility; delay discretionary commitments",
    severity: "medium",
    benchmark: "Pacing plan vs. actual commitment rate",
  },
];

const severityStyle: Record<string, { bg: string; text: string; label: string }> = {
  high: { bg: "#D9532B18", text: "#D9532B", label: "High severity" },
  medium: { bg: "#FAA51A18", text: "#b07000", label: "Moderate" },
};

export default function ScenarioDecisionGrid() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Scenario Decision Grid
      </p>
      <p className="text-xs text-[#404040] mb-4">
        A scenario without a decision path is incomplete.
      </p>

      <div className="space-y-3">
        {scenarios.map((s, i) => {
          const sev = severityStyle[s.severity];
          return (
            <div key={i} className="rounded-xl border border-[#E8DDD4] overflow-hidden">
              {/* Header */}
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ backgroundColor: sev.bg }}
              >
                <div>
                  <span className="text-sm font-bold text-[#1A1A1A]">{s.scenario}</span>
                  <span className="ml-3 text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: sev.bg, color: sev.text, border: `1px solid ${sev.text}40` }}>
                    {sev.label}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#404040] italic">
                  Benchmark: {s.benchmark}
                </span>
              </div>

              {/* Three-column grid */}
              <div className="grid grid-cols-3 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2.5 bg-[#2294BD08]">
                  <p className="text-[10px] font-bold text-[#2294BD] uppercase tracking-wider mb-1">Portfolio Effect</p>
                  <p className="text-xs text-[#404040]">{s.portfolioEffect}</p>
                </div>
                <div className="px-3 py-2.5 bg-white">
                  <p className="text-[10px] font-bold text-[#D9532B] uppercase tracking-wider mb-1">Institutional Effect</p>
                  <p className="text-xs text-[#404040]">{s.institutionalEffect}</p>
                </div>
                <div className="px-3 py-2.5 bg-[#FAA51A08]">
                  <p className="text-[10px] font-bold text-[#b07000] uppercase tracking-wider mb-1">Likely Response</p>
                  <p className="text-xs text-[#404040]">{s.likelyResponse}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 bg-[#D9532B10] border border-[#D9532B30] rounded px-3 py-2">
        <p className="text-xs font-bold text-[#D9532B]">Scenario analysis should end with an action map</p>
        <p className="text-[11px] text-[#404040] mt-0.5">
          For each scenario, the board or OCIO should be able to say in advance: what authority exists, who gets called, what temporary action is approved, and when the matter returns to committee.
        </p>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the value of a scenario rises sharply when it clarifies what the board or OCIO would actually do next.
      </p>
    </div>
  );
}
