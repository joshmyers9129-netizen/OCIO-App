"use client";

// Day 14 visuals: pacing J-curve and illiquidity budget stack

export function Day14PacingJCurve() {
  // Simplified J-curve data points for illustrative purposes
  // [year, commitments, nav, distributions, netCashflow]
  const data = [
    { year: "Y1", nav: 5, commitments: 20, distributions: 0, net: -18 },
    { year: "Y2", nav: 18, commitments: 20, distributions: 2, net: -16 },
    { year: "Y3", nav: 35, commitments: 20, distributions: 8, net: -10 },
    { year: "Y4", nav: 50, commitments: 20, distributions: 15, net: -3 },
    { year: "Y5", nav: 62, commitments: 15, distributions: 25, net: 8 },
    { year: "Y6", nav: 65, commitments: 10, distributions: 35, net: 24 },
    { year: "Y7", nav: 55, commitments: 10, distributions: 45, net: 34 },
    { year: "Y8", nav: 40, commitments: 5, distributions: 55, net: 49 },
    { year: "Y9", nav: 22, commitments: 5, distributions: 60, net: 54 },
    { year: "Y10", nav: 8, commitments: 5, distributions: 62, net: 56 },
  ];

  const maxVal = 70;

  return (
    <div className="font-sans text-[12px]">
      <div className="rounded-xl border border-[#2294BD]/20 bg-[#F5F9FC] p-3 mb-2">
        <div className="flex items-end gap-1 mb-1" style={{ height: "120px" }}>
          {data.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col-reverse gap-0.5 relative">
              {/* NAV bar */}
              <div
                className="rounded-sm"
                style={{ height: `${(d.nav / maxVal) * 100}px`, backgroundColor: "#2294BD" }}
                title={`NAV: ${d.nav}`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1 mb-2">
          {data.map((d) => (
            <div key={d.year} className="flex-1 text-center text-[9px] text-[#404040]">{d.year}</div>
          ))}
        </div>

        {/* Net cash flow J-curve line representation */}
        <div className="border-t border-[#404040]/20 pt-2">
          <div className="text-[10px] font-semibold text-[#404040] mb-1">Net Cash Flow (negative = J-curve trough)</div>
          <div className="flex items-center gap-0.5" style={{ height: "40px" }}>
            {data.map((d, i) => {
              const isNeg = d.net < 0;
              const height = Math.abs(d.net / 60 * 36);
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-center">
                  <div
                    className="w-full rounded-sm"
                    style={{
                      height: `${height}px`,
                      backgroundColor: isNeg ? "#D9532B" : "#2A9D60",
                      alignSelf: isNeg ? "flex-end" : "flex-start",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-2">
        {[
          { color: "#2294BD", label: "Net Asset Value" },
          { color: "#D9532B", label: "Negative cash flow (J-curve)" },
          { color: "#2A9D60", label: "Positive cash flow (distributions)" },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-1 text-[11px] text-[#404040]">
            <span className="w-3 h-3 rounded inline-block" style={{ backgroundColor: l.color }} />
            {l.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        <div className="rounded border border-[#D9532B]/30 bg-[#FDF3F1] px-2 py-1.5">
          <div className="font-bold text-[#D9532B] mb-0.5">J-Curve Period (Y1–Y4)</div>
          <div className="text-[#404040]">Capital calls exceed distributions; NAV building but cash flow negative</div>
        </div>
        <div className="rounded border border-[#FAA51A]/30 bg-[#FFF8EC] px-2 py-1.5">
          <div className="font-bold text-[#FAA51A] mb-0.5">Denominator Effect</div>
          <div className="text-[#404040]">Public NAV falls, private % rises mechanically — illusion of overweight</div>
        </div>
        <div className="rounded border border-[#2A9D60]/30 bg-[#E8F6EF] px-2 py-1.5">
          <div className="font-bold text-[#2A9D60] mb-0.5">Harvest Period (Y5–Y10)</div>
          <div className="text-[#404040]">Distributions rise, pacing may slow — commitment pipeline needs renewal</div>
        </div>
      </div>
    </div>
  );
}

export function Day14IlliquidityBudgetStack() {
  const liquid = [
    { label: "Operating / Spending Reserve", size: 10, color: "#D9532B", note: "Non-negotiable floor" },
    { label: "Benefit / Payout Needs (12-mo)", size: 8, color: "#FAA51A", note: "Pension or grant requirements" },
    { label: "Collateral & Overlay Support", size: 5, color: "#7C5CBF", note: "Margin buffer for derivatives" },
    { label: "Rebalancing Buffer", size: 4, color: "#2294BD", note: "Tactical flexibility" },
    { label: "Capital-Call Reserve", size: 8, color: "#2A9D60", note: "Unfunded commitments buffer" },
  ];
  const illiquidCapacity = 35;

  return (
    <div className="font-sans text-[12px]">
      <div className="flex gap-3 items-start">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">Required Liquid Resources</div>
          {liquid.map((l, i) => (
            <div key={i} className="rounded-lg border px-2 py-1.5 flex justify-between items-center" style={{ borderColor: l.color, backgroundColor: `${l.color}12` }}>
              <div>
                <div className="font-semibold text-[11px]" style={{ color: l.color }}>{l.label}</div>
                <div className="text-[10px] text-[#404040]">{l.note}</div>
              </div>
              <span className="font-bold text-white text-[11px] rounded px-1.5 py-0.5" style={{ backgroundColor: l.color }}>{l.size}%</span>
            </div>
          ))}
        </div>
        <div className="w-28 flex-shrink-0">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">Illiquid Capacity</div>
          <div className="rounded-xl border-2 border-[#2A9D60] bg-[#E8F6EF] p-3 text-center">
            <div className="text-3xl font-bold text-[#2A9D60]">{illiquidCapacity}%</div>
            <div className="text-[10px] text-[#404040] mt-1">of portfolio available for private commitments</div>
          </div>
          <div className="mt-2 rounded-lg border border-[#D9532B]/30 bg-[#FDF3F1] px-2 py-1.5">
            <div className="text-[10px] font-bold text-[#D9532B] mb-0.5">Under stress</div>
            <div className="text-[10px] text-[#404040]">Public NAV falls, distributions slow → effective illiquid % rises</div>
          </div>
        </div>
      </div>
    </div>
  );
}
