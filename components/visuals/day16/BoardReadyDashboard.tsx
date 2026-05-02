import React from "react";

const topCards = [
  {
    id: "objective",
    label: "Objective Status",
    question: "Did the institution improve?",
    value: "Funded status: 87.4%",
    delta: "−0.6pp vs. prior quarter",
    status: "Watch",
    statusColor: "#FAA51A",
    note: "Assets +4.2% but liabilities rose more — rates dominated",
    detail: "Target: 90% funded within 3 years",
    color: "#000000",
  },
  {
    id: "policy",
    label: "Policy Result",
    question: "Did the strategy work?",
    value: "+4.2% portfolio",
    delta: "+0.6% vs. policy benchmark",
    status: "On track",
    statusColor: "#2294BD",
    note: "Equity sleeve outperformed; LDI drag from rate movement",
    detail: "Policy benchmark: +3.6% same period",
    color: "#2294BD",
  },
  {
    id: "liability",
    label: "Liability / Spending Lens",
    question: "Did objective-relative position improve?",
    value: "Mixed",
    delta: "Liabilities +4.9% — funded status net flat",
    status: "Flag",
    statusColor: "#D9532B",
    note: "Strong asset return masked by liability growth",
    detail: "Separate scorecard from asset-only return",
    color: "#D9532B",
  },
];

const bottomCards = [
  {
    id: "implementation",
    label: "Implementation Note",
    question: "Did execution add friction?",
    value: "Manager transition complete",
    note: "Core equity sleeve funded in 8 days — minimal cash drag",
    flag: false,
    color: "#2294BD",
    detail: "Completion overlay held exposure during window — no benchmark gap",
  },
  {
    id: "liquidity",
    label: "Liquidity Note",
    question: "Is funding plan on track?",
    value: "Reserve: 9.2 months",
    note: "Q2 call cluster expected — review reserve draw authorization",
    flag: true,
    color: "#FAA51A",
    detail: "Q2 capital calls: ~$14M — within current reserve authorization",
  },
  {
    id: "watch",
    label: "Forward Watch List",
    question: "What matters next?",
    value: "3 items",
    note: null,
    flag: false,
    color: "#D9532B",
    detail: null,
    watchItems: [
      { item: "Funded-status trigger at 85% — monitor monthly", color: "#D9532B" },
      { item: "Active specialist — two-year excess return review due Q3", color: "#FAA51A" },
      { item: "Private pacing — commitment window opens Q2", color: "#2294BD" },
    ],
  },
];

export default function BoardReadyDashboard() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Board-Ready Dashboard
      </p>
      <div className="inline-block bg-[#00000010] border border-[#40404030] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-bold text-[#1A1A1A]">Tell the board what changed and what needs attention next.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Trustees benefit more from a hierarchical dashboard than from a long list of disconnected return tables.
      </p>

      {/* Top row — Objective, Policy, Liability lens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {topCards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: card.statusColor + "40" }}
          >
            <div
              className="px-3 py-2 flex items-center justify-between"
              style={{ backgroundColor: card.statusColor + "12" }}
            >
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">{card.label}</p>
                <p className="text-[10px] italic text-[#404040]">{card.question}</p>
              </div>
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                style={{ backgroundColor: card.statusColor + "20", color: card.statusColor === "#FAA51A" ? "#b07000" : card.statusColor }}
              >
                {card.status}
              </span>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-lg font-black text-[#1A1A1A] mb-0.5">{card.value}</p>
              <p className="text-[10px] font-semibold mb-1" style={{ color: card.statusColor === "#FAA51A" ? "#b07000" : card.statusColor }}>{card.delta}</p>
              <p className="text-[10px] text-[#404040] mb-1">{card.note}</p>
              <p className="text-[10px] italic text-[#404040]">{card.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row — Implementation, Liquidity, Watch list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {bottomCards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: card.color + "40" }}
          >
            <div
              className="px-3 py-2"
              style={{ backgroundColor: card.color + "12" }}
            >
              <p className="text-xs font-bold text-[#1A1A1A]">{card.label}</p>
              <p className="text-[10px] italic text-[#404040]">{card.question}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-sm font-bold text-[#1A1A1A] mb-1">{card.value}</p>
              {card.watchItems ? (
                <div className="space-y-1.5">
                  {card.watchItems.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded px-2 py-1.5 border-l-2"
                      style={{ borderLeftColor: w.color, backgroundColor: w.color + "0C" }}
                    >
                      <p className="text-[10px] text-[#404040]">{w.item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {card.flag ? (
                    <div className="rounded px-2 py-1 bg-[#FAA51A10] border-l-2 border-[#FAA51A] mb-1.5">
                      <p className="text-[10px] font-bold text-[#b07000]">{card.note}</p>
                    </div>
                  ) : (
                    <p className="text-[10px] text-[#404040] mb-1">{card.note}</p>
                  )}
                  {card.detail && <p className="text-[10px] italic text-[#404040]">{card.detail}</p>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: trustees benefit more from a hierarchical dashboard than from a long list of disconnected return tables.
      </p>
    </div>
  );
}
