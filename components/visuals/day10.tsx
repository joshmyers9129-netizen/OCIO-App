"use client";

// Day 10 visuals: spending return triangle and governance illiquidity map

export function Day10SpendingReturnTriangle() {
  return (
    <div className="font-sans text-[12px]">
      <div className="relative flex flex-col items-center mb-3">
        {/* Triangle built from three corners */}
        <div className="relative w-full max-w-xs">
          {/* Top vertex */}
          <div className="flex justify-center mb-2">
            <div className="rounded-xl border-2 border-[#D9532B] bg-[#FDF3F1] px-4 py-2 text-center w-40">
              <div className="font-bold text-[#D9532B] text-[13px]">Spending Policy</div>
              <div className="text-[11px] text-[#404040]">Annual distribution rate (e.g. 4–5%)</div>
            </div>
          </div>

          {/* Middle row with center box */}
          <div className="flex justify-center mb-2">
            <div className="rounded-xl border-2 border-[#2294BD] bg-[#E8F4F8] px-4 py-2 text-center w-52">
              <div className="font-bold text-[#2294BD] text-[12px]">Required Long-Run</div>
              <div className="font-bold text-[#2294BD] text-[14px]">Gross Return</div>
              <div className="text-[11px] text-[#404040] mt-0.5">= Spending + Inflation + Costs</div>
              <div className="text-[12px] font-bold text-[#2294BD] mt-0.5">e.g. 4.5% + 2.5% + 0.5% = 7.5%</div>
            </div>
          </div>

          {/* Bottom two vertices */}
          <div className="flex justify-between">
            <div className="rounded-xl border-2 border-[#7C5CBF] bg-[#F3EFFA] px-3 py-2 text-center w-36">
              <div className="font-bold text-[#7C5CBF] text-[13px]">Inflation</div>
              <div className="text-[11px] text-[#404040]">Erodes real value of portfolio</div>
            </div>
            <div className="rounded-xl border-2 border-[#2A9D60] bg-[#E8F6EF] px-3 py-2 text-center w-36">
              <div className="font-bold text-[#2A9D60] text-[13px]">Costs</div>
              <div className="text-[11px] text-[#404040]">Mgmt fees, admin, taxes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#FAA51A]/40 bg-[#FFF8EC] px-3 py-2 text-[11px] text-[#404040]">
        <span className="font-bold text-[#FAA51A]">Smoothing rules</span> may reduce year-to-year spending volatility but do not eliminate the underlying portfolio return burden. A lower spending rate buys more buffer, not a free lunch.
      </div>
    </div>
  );
}

export function Day10GovernanceIlliquidityMap() {
  const zones = [
    {
      pos: "top-left",
      label: "High Governance / Low Cash Support",
      desc: "Moderate illiquidity tolerance — monitor carefully",
      example: "Endowment with complex governance but limited predictable cash",
      color: "#FAA51A",
      tolerance: "Moderate with caution",
    },
    {
      pos: "top-right",
      label: "High Governance / High Cash Support",
      desc: "Highest illiquidity tolerance — can access full private markets program",
      example: "Large endowment or DB plan with strong staff and predictable cash flows",
      color: "#2A9D60",
      tolerance: "High",
    },
    {
      pos: "bottom-left",
      label: "Low Governance / Low Cash Support",
      desc: "Low illiquidity tolerance — stick to liquid strategies",
      example: "Small foundation or operating reserve pool",
      color: "#D9532B",
      tolerance: "Low",
    },
    {
      pos: "bottom-right",
      label: "Low Governance / High Cash Support",
      desc: "Selective, limited illiquidity possible — must keep it simple",
      example: "Healthcare system with predictable revenues but thin investment staff",
      color: "#7C5CBF",
      tolerance: "Selective",
    },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="mb-2 text-center text-[11px] font-semibold text-[#404040]">↑ Reliable Cash-Flow Support ↑</div>
      <div className="grid grid-cols-2 gap-2">
        {zones.map((z, i) => (
          <div key={i} className="rounded-xl border-2 p-2.5" style={{ borderColor: z.color, backgroundColor: `${z.color}12` }}>
            <div className="font-bold text-[11px] mb-1" style={{ color: z.color }}>{z.label}</div>
            <div className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white mb-1.5" style={{ backgroundColor: z.color }}>
              Tolerance: {z.tolerance}
            </div>
            <div className="text-[11px] text-[#404040] mb-1">{z.desc}</div>
            <div className="text-[10px] italic text-[#404040]">e.g. {z.example}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-[11px] font-semibold text-[#404040]">← Low Governance Capacity — High Governance Capacity →</div>
    </div>
  );
}
