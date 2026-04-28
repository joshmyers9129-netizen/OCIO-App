"use client";

// Day 17 visuals: crisis decision tree and denominator effect chart

export function Day17CrisisDecisionTree() {
  return (
    <div className="font-sans text-[12px]">
      {/* Root event */}
      <div className="flex justify-center mb-2">
        <div className="rounded-xl border-2 border-[#D9532B] bg-[#FDF3F1] px-4 py-2 text-center">
          <div className="font-bold text-[#D9532B] text-[13px]">Market Shock Occurs</div>
          <div className="text-[11px] text-[#404040]">Equity drawdown, rate spike, credit freeze, liquidity stress</div>
        </div>
      </div>

      <div className="flex justify-center mb-2"><div className="w-0.5 h-4 bg-[#D9532B]/40" /></div>

      {/* Level 1 assessments */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {[
          { label: "Assess Market Impact", desc: "How far, how fast? Portfolio NAV estimate. Liability impact?", color: "#7C5CBF" },
          { label: "Assess Cash Needs", desc: "Capital calls expected? Benefits / distributions due? Collateral margin?", color: "#FAA51A" },
          { label: "Assess Governance Authority", desc: "What can the OCIO do without committee approval? Escalation threshold?", color: "#2294BD" },
        ].map((n, i) => (
          <div key={i} className="rounded-lg border-2 p-2" style={{ borderColor: n.color, backgroundColor: `${n.color}12` }}>
            <div className="font-bold text-[11px] mb-0.5" style={{ color: n.color }}>{n.label}</div>
            <div className="text-[10px] text-[#404040]">{n.desc}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-2"><div className="w-0.5 h-3 bg-[#404040]/30" /></div>

      {/* Response paths */}
      <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] text-center mb-1.5">Choose Response Path</div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { label: "Rebalance", desc: "Buy dislocated assets, restore policy weights", color: "#2A9D60" },
          { label: "Raise Liquidity", desc: "Sell saleable assets, reduce collateral exposure", color: "#2294BD" },
          { label: "Adjust Commitments", desc: "Pause pacing, request waiver from GPs", color: "#7C5CBF" },
          { label: "Reduce Overlays", desc: "Cut notional exposure, free collateral", color: "#FAA51A" },
          { label: "Escalate to Committee", desc: "Threshold breached — convene emergency session", color: "#D9532B" },
          { label: "Communicate with Stakeholders", desc: "Board update, actuary coordination, sponsor communication", color: "#404040" },
        ].map((p, i) => (
          <div key={i} className="rounded-lg border p-2" style={{ borderColor: p.color, backgroundColor: `${p.color}10` }}>
            <div className="font-bold text-[11px] mb-0.5" style={{ color: p.color }}>{p.label}</div>
            <div className="text-[10px] text-[#404040]">{p.desc}</div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#E8F4F8] border border-[#2294BD]/30 px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#2294BD]">Key principle: </span>Governance authority determines speed of response. Pre-agreed crisis playbook prevents delay when time matters most.
      </div>
    </div>
  );
}

export function Day17DenominatorEffectChart() {
  const scenarios = [
    {
      label: "Before Shock",
      public: 60,
      private: 20,
      other: 20,
      color: "#2294BD",
      privateLabel: "20% private (target)",
    },
    {
      label: "During Shock (Public NAV −30%)",
      public: 42,
      private: 20,
      other: 14,
      color: "#D9532B",
      privateLabel: "26% private (apparent)",
      note: "Private NAV hasn't repriced yet",
    },
    {
      label: "Fully Repriced (12–18 months later)",
      public: 42,
      private: 16,
      other: 14,
      color: "#7C5CBF",
      privateLabel: "22% private (repriced)",
      note: "Private markdown lags public",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="space-y-3">
        {scenarios.map((s, i) => {
          const total = s.public + s.private + s.other;
          const privatePct = Math.round((s.private / total) * 100);
          return (
            <div key={i} className="rounded-xl border-2 p-3" style={{ borderColor: s.color }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[12px]" style={{ color: s.color }}>{s.label}</span>
                <span className="text-[11px] font-bold text-white rounded-full px-2 py-0.5" style={{ backgroundColor: s.color }}>
                  Private: {privatePct}%
                </span>
              </div>
              <div className="flex rounded-lg overflow-hidden h-7 mb-1">
                <div
                  className="flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ width: `${(s.public / total) * 100}%`, backgroundColor: "#2294BD" }}
                >
                  Public {Math.round((s.public / total) * 100)}%
                </div>
                <div
                  className="flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ width: `${(s.private / total) * 100}%`, backgroundColor: s.color }}
                >
                  Private {Math.round((s.private / total) * 100)}%
                </div>
                <div
                  className="flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ width: `${(s.other / total) * 100}%`, backgroundColor: "#7C5CBF" }}
                >
                  Other {Math.round((s.other / total) * 100)}%
                </div>
              </div>
              {s.note && (
                <div className="text-[10px] text-[#D9532B] italic">{s.note}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-2 rounded-lg border border-[#FAA51A]/40 bg-[#FFF8EC] px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#FAA51A]">Illusion vs. reality: </span>The denominator effect makes private allocation look larger than it is. Resist forced selling of private assets to "rebalance" — the actual overweight is smaller than the stale NAV suggests.
      </div>
    </div>
  );
}
