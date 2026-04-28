"use client";

// Day 08 visuals: pension balance sheet and glide path design

export function Day08PensionBalanceSheet() {
  const sensitivities = [
    { driver: "Equity drawdown", effect: "↓ Assets", impact: "negative", direction: "left" },
    { driver: "Falling interest rates", effect: "↑ Liabilities (PV rises)", impact: "negative", direction: "right" },
    { driver: "Rising interest rates", effect: "↓ Liabilities (PV falls)", impact: "positive", direction: "right" },
    { driver: "Contributions from sponsor", effect: "↑ Assets", impact: "positive", direction: "left" },
    { driver: "Benefit payments", effect: "↓ Assets", impact: "negative", direction: "left" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-xl border-2 border-[#2294BD] bg-[#E8F4F8] p-3">
          <div className="font-bold text-[#2294BD] text-[13px] mb-2">Assets</div>
          <div className="space-y-1.5">
            {[
              { label: "Public equities", pct: "45%" },
              { label: "Fixed income", pct: "30%" },
              { label: "Private / alternatives", pct: "15%" },
              { label: "Hedge / overlay", pct: "10%" },
            ].map((a) => (
              <div key={a.label} className="flex justify-between items-center bg-white rounded px-2 py-1">
                <span className="text-[#404040]">{a.label}</span>
                <span className="font-bold text-[#2294BD]">{a.pct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#D9532B] bg-[#FDF3F1] p-3">
          <div className="font-bold text-[#D9532B] text-[13px] mb-2">Liabilities (PV)</div>
          <div className="space-y-1.5">
            {[
              { label: "Benefit obligations (active)", pct: "40%" },
              { label: "Benefit obligations (deferred)", pct: "35%" },
              { label: "Retired beneficiaries", pct: "25%" },
            ].map((l) => (
              <div key={l.label} className="flex justify-between items-center bg-white rounded px-2 py-1">
                <span className="text-[#404040]">{l.label}</span>
                <span className="font-bold text-[#D9532B]">{l.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-[#2A9D60] bg-[#E8F6EF] px-4 py-2 text-center mb-3">
        <span className="font-bold text-[#2A9D60] text-[13px]">Funded Status = Assets − PV(Liabilities)</span>
        <div className="text-[11px] text-[#404040] mt-0.5">e.g. 115% = well-funded; 85% = underfunded → contribution pressure</div>
      </div>

      <div className="rounded-lg border border-[#404040]/20 bg-[#F5F5F5] p-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">Sensitivity Arrows</div>
        <div className="space-y-1">
          {sensitivities.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`text-[11px] font-bold w-4 flex-shrink-0 ${s.impact === "positive" ? "text-[#2A9D60]" : "text-[#D9532B]"}`}>
                {s.impact === "positive" ? "↑" : "↓"}
              </span>
              <span className="text-[11px] text-[#000] flex-1">{s.driver}</span>
              <span className="text-[11px] text-[#404040] italic">{s.effect}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Day08GlidePathDesign() {
  const dataPoints = [
    { fs: 70, growth: 80, hedge: 20, label: "70%" },
    { fs: 80, growth: 65, hedge: 35, label: "80%" },
    { fs: 90, growth: 50, hedge: 50, label: "90%" },
    { fs: 100, growth: 35, hedge: 65, label: "100%" },
    { fs: 110, growth: 20, hedge: 80, label: "110%" },
    { fs: 120, growth: 10, hedge: 90, label: "120%" },
  ];

  return (
    <div className="font-sans text-[12px]">
      <div className="mb-2 text-[11px] font-semibold text-[#404040] text-center">Glide Path: Funded Status → Allocation Shift</div>
      <div className="bg-[#F5F9FC] rounded-xl border border-[#2294BD]/20 p-3 mb-3">
        <div className="flex items-end gap-1 h-32 mb-1">
          {dataPoints.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col-reverse gap-0">
              <div
                className="rounded-b"
                style={{ height: `${(d.growth / 100) * 128}px`, backgroundColor: "#7C5CBF" }}
                title={`Growth: ${d.growth}%`}
              />
              <div
                className="rounded-t"
                style={{ height: `${(d.hedge / 100) * 128}px`, backgroundColor: "#2294BD" }}
                title={`Hedge: ${d.hedge}%`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {dataPoints.map((d) => (
            <div key={d.fs} className="flex-1 text-center text-[10px] text-[#404040]">{d.label}</div>
          ))}
        </div>
        <div className="text-center text-[10px] text-[#404040] mt-0.5 font-semibold">← Funded Status →</div>
      </div>

      <div className="flex gap-2 justify-center mb-2">
        <span className="flex items-center gap-1 text-[11px]"><span className="w-3 h-3 rounded inline-block bg-[#7C5CBF]" /> Growth assets</span>
        <span className="flex items-center gap-1 text-[11px]"><span className="w-3 h-3 rounded inline-block bg-[#2294BD]" /> Hedge assets</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-lg border border-[#FAA51A]/40 bg-[#FFF8EC] px-2 py-1.5">
          <div className="font-bold text-[#FAA51A] mb-0.5">Open Plans</div>
          <div className="text-[#404040]">More gradual de-risking; ongoing accruals support growth allocation</div>
        </div>
        <div className="rounded-lg border border-[#2294BD]/40 bg-[#E8F4F8] px-2 py-1.5">
          <div className="font-bold text-[#2294BD] mb-0.5">Frozen Plans</div>
          <div className="text-[#404040]">Steeper glide path; terminal de-risk target often 90–100% hedged</div>
        </div>
      </div>
    </div>
  );
}
