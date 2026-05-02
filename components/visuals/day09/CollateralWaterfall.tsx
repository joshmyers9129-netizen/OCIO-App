import React from "react";

const tiers = [
  {
    tier: 1,
    label: "Cash & Same-Day Liquidity",
    examples: "Treasury money market, cash reserves, settlement accounts",
    timeToAccess: "Immediate",
    reliability: "High",
    governanceBurden: "Low — pre-authorized",
    color: "#2294BD",
    size: "First call in stress",
    useFirst: true,
  },
  {
    tier: 2,
    label: "Short High-Quality Bonds",
    examples: "Short Treasuries, agency paper, T-bills",
    timeToAccess: "1–2 business days",
    reliability: "Medium–High",
    governanceBurden: "Moderate — OCIO can execute with pre-authorization",
    color: "#2294BD",
    size: "Second call",
  },
  {
    tier: 3,
    label: "Broader Investment-Grade Fixed Income",
    examples: "IG credit, intermediate Treasuries, TIPS",
    timeToAccess: "2–5 business days",
    reliability: "Medium",
    governanceBurden: "Higher — staff notification required",
    color: "#FAA51A",
    size: "Third call",
  },
  {
    tier: 4,
    label: "Risk-Asset Liquidation",
    examples: "Public equity, high-yield bonds — subject to market conditions",
    timeToAccess: "Stress-dependent, 3–10 days",
    reliability: "Low — correlation risk in stress",
    governanceBurden: "High — board escalation likely needed",
    color: "#D9532B",
    size: "Last resort",
    doNotRelyFirst: true,
  },
];

const reliabilityBarWidth = (r: string) => {
  if (r.includes("High")) return "85%";
  if (r.includes("Medium")) return "55%";
  return "30%";
};

const reliabilityColor = (r: string) => {
  if (r.includes("High")) return "#2294BD";
  if (r.includes("Medium")) return "#FAA51A";
  return "#D9532B";
};

export default function CollateralWaterfall() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Collateral Waterfall · Priority Ranking Under Stress
      </p>
      <p className="text-xs text-[#404040] mb-4">
        A credible LDI program knows its first source of collateral before it needs its second.
      </p>

      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2294BD] to-[#D9532B]" />

        <div className="space-y-3">
          {tiers.map((tier, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Tier badge */}
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white shadow z-10 text-white text-sm font-black"
                style={{ backgroundColor: tier.color }}
              >
                {tier.tier}
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-xl p-3 border-l-4"
                style={{ borderLeftColor: tier.color, backgroundColor: tier.color + "0C" }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{tier.label}</p>
                    <p className="text-xs text-[#404040]">{tier.examples}</p>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                    style={{ backgroundColor: tier.color + "20", color: tier.color }}
                  >
                    {tier.size}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-0.5">Time to Access</p>
                    <p className="text-xs text-[#1A1A1A]">{tier.timeToAccess}</p>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-0.5">Reliability</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="h-1.5 rounded flex-1 bg-[#E8DDD4] overflow-hidden">
                        <div
                          className="h-full rounded"
                          style={{ width: reliabilityBarWidth(tier.reliability), backgroundColor: reliabilityColor(tier.reliability) }}
                        />
                      </div>
                      <span className="text-[9px]" style={{ color: reliabilityColor(tier.reliability) }}>{tier.reliability}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                    <p className="text-[9px] font-bold text-[#404040] uppercase tracking-wider mb-0.5">Governance</p>
                    <p className="text-[10px] text-[#404040]">{tier.governanceBurden}</p>
                  </div>
                </div>

                {tier.doNotRelyFirst && (
                  <div className="mt-2 rounded px-2 py-1.5" style={{ backgroundColor: "#D9532B12", borderLeft: "3px solid #D9532B" }}>
                    <p className="text-[10px] font-bold text-[#D9532B]">Do not rely on this tier first in stress — correlation spikes when you need liquidity most</p>
                  </div>
                )}
                {tier.useFirst && (
                  <div className="mt-2 rounded px-2 py-1.5" style={{ backgroundColor: "#2294BD12", borderLeft: "3px solid #2294BD" }}>
                    <p className="text-[10px] font-bold text-[#2294BD]">Pre-designate this source before any overlay hedge is added</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a credible LDI program knows its first source of collateral before it needs its second.
      </p>
    </div>
  );
}
