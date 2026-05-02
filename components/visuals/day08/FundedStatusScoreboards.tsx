import React from "react";

const periods = [
  {
    label: "Current Quarter",
    assetReturn: "+4.2%",
    assetNote: "Equity and LDI both contributed",
    liabilityMove: "+5.8%",
    liabilityNote: "Rates fell 40bps — liability PV rose",
    fundedStatusChange: "−1.4 ppts",
    fsNote: "From 91% to 89.6%",
    sponsorOutlook: "Contribution requirement likely rises",
    assetPositive: true,
    fsPositive: false,
    highlight: true,
  },
  {
    label: "Year to Date",
    assetReturn: "+7.1%",
    assetNote: "Strong public equity and credit",
    liabilityMove: "+6.9%",
    liabilityNote: "Rates down modestly YTD",
    fundedStatusChange: "+0.2 ppts",
    fsNote: "From 91% to 91.2% — minimal progress",
    sponsorOutlook: "Contribution outlook unchanged",
    assetPositive: true,
    fsPositive: true,
    highlight: false,
  },
  {
    label: "One Year",
    assetReturn: "+11.4%",
    assetNote: "Strong equity-driven returns",
    liabilityMove: "+13.2%",
    liabilityNote: "Substantial rate decline over period",
    fundedStatusChange: "−1.8 ppts",
    fsNote: "From 93% to 91.2% — meaningful decline",
    sponsorOutlook: "Contribution pressure persists",
    assetPositive: true,
    fsPositive: false,
    highlight: false,
  },
];

export default function FundedStatusScoreboards() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Top annotation */}
      <div className="bg-[#D9532B12] border border-[#D9532B30] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#D9532B]">Good asset performance is not the same as good pension performance.</p>
        <p className="text-[11px] text-[#404040]">When liabilities rise faster than assets, funded status deteriorates even in strong return periods.</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Funded-Status Scoreboards
      </p>
      <p className="text-xs text-[#404040] mb-4">
        A pension report should make the liability side visible enough that the board cannot miss the real outcome.
      </p>

      <div className="space-y-3">
        {periods.map((p, i) => (
          <div
            key={i}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: p.highlight ? "#D9532B" : "#E8DDD4" }}
          >
            {/* Period header */}
            <div
              className="px-4 py-2 flex items-center justify-between"
              style={{ backgroundColor: p.highlight ? "#D9532B10" : "#FBF7F3" }}
            >
              <span className="text-sm font-bold text-[#1A1A1A]">{p.label}</span>
              {p.highlight && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#D9532B20", color: "#D9532B" }}>
                  Key teaching example
                </span>
              )}
            </div>

            {/* Four columns */}
            <div className="grid grid-cols-4 divide-x divide-[#E8DDD4]">
              {/* Asset return */}
              <div className="px-3 py-3" style={{ backgroundColor: "#2294BD08" }}>
                <p className="text-[10px] font-bold text-[#2294BD] uppercase tracking-wider mb-1">Asset Return</p>
                <p className="text-lg font-black" style={{ color: p.assetPositive ? "#2294BD" : "#D9532B" }}>
                  {p.assetReturn}
                </p>
                <p className="text-[10px] text-[#404040] mt-0.5">{p.assetNote}</p>
              </div>

              {/* Liability movement */}
              <div className="px-3 py-3" style={{ backgroundColor: "#D9532B08" }}>
                <p className="text-[10px] font-bold text-[#D9532B] uppercase tracking-wider mb-1">Liability Movement</p>
                <p className="text-lg font-black text-[#D9532B]">{p.liabilityMove}</p>
                <p className="text-[10px] text-[#404040] mt-0.5">{p.liabilityNote}</p>
              </div>

              {/* Funded status */}
              <div className="px-3 py-3" style={{ backgroundColor: p.fsPositive ? "#2294BD08" : "#D9532B08" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: p.fsPositive ? "#2294BD" : "#D9532B" }}>
                  Funded Status Δ
                </p>
                <p className="text-lg font-black" style={{ color: p.fsPositive ? "#2294BD" : "#D9532B" }}>
                  {p.fundedStatusChange}
                </p>
                <p className="text-[10px] text-[#404040] mt-0.5">{p.fsNote}</p>
              </div>

              {/* Sponsor outlook */}
              <div className="px-3 py-3" style={{ backgroundColor: "#FAA51A08" }}>
                <p className="text-[10px] font-bold text-[#b07000] uppercase tracking-wider mb-1">Sponsor Outlook</p>
                <p className="text-xs text-[#404040] mt-1">{p.sponsorOutlook}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a pension report should make the liability side visible enough that the board cannot miss the real outcome.
      </p>
    </div>
  );
}
