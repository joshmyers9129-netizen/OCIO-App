import React from "react";

// Key-rate buckets with hedge coverage breakdown
const keyRateBuckets = [
  {
    bucket: "2Y",
    label: "Short\n(2 yr)",
    liabilityExposure: 5,
    physicalHedge: 5,
    completion: 0,
    residual: 0,
    note: "Usually small; physical bonds cover well",
  },
  {
    bucket: "5Y",
    label: "Intermed.\n(5 yr)",
    liabilityExposure: 15,
    physicalHedge: 11,
    completion: 3,
    residual: 1,
    note: "Monitor roll-down effects",
  },
  {
    bucket: "10Y",
    label: "Intermed.\n(10 yr)",
    liabilityExposure: 25,
    physicalHedge: 18,
    completion: 5,
    residual: 2,
    note: "Completion fills gap efficiently",
  },
  {
    bucket: "20Y",
    label: "Long\n(20 yr)",
    liabilityExposure: 30,
    physicalHedge: 18,
    completion: 8,
    residual: 4,
    note: "Highest precision need; overlay supplements",
    flagResidual: true,
  },
  {
    bucket: "30Y",
    label: "Ultra-long\n(30 yr)",
    liabilityExposure: 25,
    physicalHedge: 12,
    completion: 7,
    residual: 6,
    note: "Residual mismatch often largest; custom completion needed",
    flagResidual: true,
  },
];

const maxHeight = 180;

export default function KeyRateCompletionMap() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Key-Rate &amp; Completion Map
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Headline duration fit can hide curve mismatch — key-rate and completion reporting reveal where precision is needed.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {[
          { color: "#2294BD", label: "Physical hedge" },
          { color: "#FAA51A", label: "Completion mandate" },
          { color: "#D9532B", label: "Residual mismatch" },
          { color: "#E8DDD4", label: "Unhedged liability exposure" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-4 mb-4 overflow-x-auto pb-2">
        {keyRateBuckets.map((b, i) => {
          const totalH = (b.liabilityExposure / 30) * maxHeight;
          const physH = (b.physicalHedge / 30) * maxHeight;
          const compH = (b.completion / 30) * maxHeight;
          const residH = (b.residual / 30) * maxHeight;

          return (
            <div key={i} className="flex flex-col items-center gap-1" style={{ minWidth: 72 }}>
              {/* Stacked bars */}
              <div className="relative flex items-end gap-1" style={{ height: maxHeight + 20 }}>
                {/* Liability exposure bar (background) */}
                <div className="relative flex flex-col justify-end" style={{ width: 30, height: maxHeight + 10 }}>
                  <div className="absolute bottom-0 w-full rounded-t" style={{ height: totalH, backgroundColor: "#E8DDD4" }} />
                </div>

                {/* Hedge breakdown bar */}
                <div className="relative flex flex-col justify-end" style={{ width: 30, height: maxHeight + 10 }}>
                  {/* Physical */}
                  <div
                    className="absolute w-full rounded-t"
                    style={{
                      bottom: 0,
                      height: physH,
                      backgroundColor: "#2294BD",
                    }}
                  />
                  {/* Completion stacked above physical */}
                  <div
                    className="absolute w-full"
                    style={{
                      bottom: physH,
                      height: compH,
                      backgroundColor: "#FAA51A",
                    }}
                  />
                  {/* Residual stacked above completion */}
                  {b.residual > 0 && (
                    <div
                      className="absolute w-full rounded-t"
                      style={{
                        bottom: physH + compH,
                        height: residH,
                        backgroundColor: "#D9532B",
                        opacity: 0.9,
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Bucket label */}
              <p className="text-[10px] font-bold text-[#404040] text-center whitespace-pre-line leading-tight">
                {b.label}
              </p>

              {/* Residual flag */}
              {b.flagResidual && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-center" style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}>
                  Flag
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 bg-[#000000] text-white text-xs font-bold uppercase tracking-wider rounded-tl-lg">Key Rate</th>
              <th className="text-center px-3 py-2 text-white text-xs font-bold" style={{ backgroundColor: "#E8DDD4", color: "#404040" }}>Liability Exp.</th>
              <th className="text-center px-3 py-2 text-white text-xs font-bold" style={{ backgroundColor: "#2294BD" }}>Physical</th>
              <th className="text-center px-3 py-2 text-white text-xs font-bold" style={{ backgroundColor: "#FAA51A" }}>Completion</th>
              <th className="text-center px-3 py-2 text-white text-xs font-bold" style={{ backgroundColor: "#D9532B" }}>Residual</th>
              <th className="text-left px-3 py-2 text-white text-xs font-bold rounded-tr-lg bg-[#404040]">Note</th>
            </tr>
          </thead>
          <tbody>
            {keyRateBuckets.map((b, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{b.bucket}</td>
                <td className="px-3 py-2 text-center border-b border-[#E8DDD4]">{b.liabilityExposure}%</td>
                <td className="px-3 py-2 text-center border-b border-[#E8DDD4] font-bold" style={{ color: "#2294BD" }}>{b.physicalHedge}%</td>
                <td className="px-3 py-2 text-center border-b border-[#E8DDD4] font-bold" style={{ color: "#b07000" }}>{b.completion}%</td>
                <td className="px-3 py-2 text-center border-b border-[#E8DDD4] font-bold" style={{ color: b.flagResidual ? "#D9532B" : "#404040" }}>
                  {b.residual}%{b.flagResidual ? " ⚠" : ""}
                </td>
                <td className="px-3 py-2 text-xs text-[#404040] italic border-b border-[#E8DDD4]">{b.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Acceptable mismatch legend */}
      <div className="mt-3 flex gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#2294BD20", border: "1px solid #2294BD" }} />
          <span className="text-[10px] text-[#404040]">Acceptable mismatch (≤2%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#D9532B20", border: "1px solid #D9532B" }} />
          <span className="text-[10px] text-[#404040]">Above tolerance (&gt;3%) — flag for review</span>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: headline duration fit can hide curve mismatch, which is why key-rate and completion reporting matter.
      </p>
    </div>
  );
}
