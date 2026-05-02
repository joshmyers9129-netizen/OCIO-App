import React from "react";

const bridgeSteps = [
  {
    step: 1,
    label: "Objective",
    question: "What matters?",
    output: "Client scorecard",
    color: "#000000",
    example: "Funded status improved from 86.8% to 87.4%",
    icon: "O",
  },
  {
    step: 2,
    label: "Benchmark Context",
    question: "What is a fair comparison?",
    output: "Policy result",
    color: "#404040",
    example: "Portfolio +4.2% vs. custom policy benchmark +3.6%",
    icon: "B",
  },
  {
    step: 3,
    label: "Attribution",
    question: "Why did it happen?",
    output: "Allocation and sleeve effects",
    color: "#2294BD",
    example: "Equity sleeve added +0.9%; LDI drag −0.2%; overlay +0.1%",
    icon: "A",
  },
  {
    step: 4,
    label: "Implementation Note",
    question: "Did execution add or subtract?",
    output: "Transition or rebalance note",
    color: "#FAA51A",
    example: "Manager transition: minimal cash drag, completion overlay held exposure",
    icon: "I",
  },
  {
    step: 5,
    label: "Implication",
    question: "What now?",
    output: "Watch point or action",
    color: "#D9532B",
    example: "Funded-status trigger at 85% — monitor monthly; no action required this quarter",
    icon: "→",
    annotation: "Numbers should lead to a monitoring question.",
  },
];

export default function PerformanceNarrativeBridge() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Performance Narrative Bridge
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Avoid jumping from return to recommendation without the bridge steps.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A good report does not stop with numbers. It ends with a clear implication for oversight.
      </p>

      {/* Bridge flow */}
      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#000000] to-[#D9532B]" />

        <div className="space-y-2">
          {bridgeSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Icon circle */}
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-black border-2 border-white shadow z-10"
                style={{ backgroundColor: step.color }}
              >
                {step.step}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-xl border-l-4 p-3"
                style={{ borderLeftColor: step.color, backgroundColor: step.color + "0C" }}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-[#1A1A1A]">{step.label}</p>
                  <div className="flex gap-2 flex-shrink-0">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: step.color + "20",
                        color: step.color === "#FAA51A" ? "#b07000" : step.color === "#000000" || step.color === "#404040" ? "#404040" : step.color,
                      }}
                    >
                      {step.output}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] italic text-[#404040] mb-1">{step.question}</p>
                <div className="bg-white rounded px-2 py-1.5 border border-[#E8DDD4]">
                  <p className="text-[9px] font-bold text-[#404040] uppercase mb-0.5">Example</p>
                  <p className="text-[10px] text-[#1A1A1A]">{step.example}</p>
                </div>
                {step.annotation && (
                  <div className="mt-2 rounded px-2 py-1.5 bg-[#D9532B10] border-l-2 border-[#D9532B]">
                    <p className="text-[10px] font-bold italic text-[#D9532B]">{step.annotation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Bridge Step</th>
              <th className="text-left px-3 py-2">Question Answered</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Typical Output</th>
            </tr>
          </thead>
          <tbody>
            {[
              { step: "Objective", q: "What matters?", output: "Client scorecard" },
              { step: "Benchmark context", q: "What is fair comparison?", output: "Policy result" },
              { step: "Attribution", q: "Why did it happen?", output: "Allocation and sleeve effects" },
              { step: "Implication", q: "What now?", output: "Watch point or action" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.step}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.q}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a good report does not stop with numbers. It ends with a clear implication for oversight.
      </p>
    </div>
  );
}
