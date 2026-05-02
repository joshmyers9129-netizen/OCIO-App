import React from "react";

interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
  color: string;
  textColor: string;
  type: "action" | "test" | "decision" | "report";
}

interface FlowEdge {
  from: string;
  to: string;
  label: string;
  color: string;
}

const triggers = [
  { label: "Policy-band breach", color: "#FAA51A" },
  { label: "Structural leverage request", color: "#D9532B" },
  { label: "Private pacing overrun", color: "#D9532B" },
  { label: "Liquidity shortfall", color: "#D9532B" },
  { label: "New strategy type", color: "#FAA51A" },
  { label: "Manager event", color: "#404040" },
];

const flowSteps = [
  {
    step: 1,
    label: "Routine Action",
    sublabel: "OCIO executes within delegated authority",
    color: "#2294BD",
    role: "provider",
  },
  {
    step: 2,
    label: "Threshold Test",
    sublabel: "Does action breach policy band, pacing limit, or leverage rule?",
    color: "#FAA51A",
    role: "test",
  },
  {
    step: 3,
    label: "Delegated Execution",
    sublabel: "Action proceeds — OCIO reports after the fact",
    color: "#2294BD",
    role: "provider",
  },
  {
    step: 4,
    label: "Staff Review",
    sublabel: "OCIO notifies staff; confirm authority and timing",
    color: "#404040",
    role: "staff",
  },
  {
    step: 5,
    label: "Committee Review",
    sublabel: "Return to board or committee for consent",
    color: "#000000",
    role: "board",
  },
  {
    step: 6,
    label: "After-Action Report",
    sublabel: "Documented in next quarterly report regardless of path",
    color: "#2294BD",
    role: "provider",
  },
];

export default function EscalationArchitecture() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Escalation Architecture · From Routine Action to Committee Review
      </p>
      <p className="text-xs text-[#404040] mb-4">
        Good discretion includes pre-agreed boundaries and a route back to oversight.
      </p>

      {/* Orange annotation */}
      <div className="inline-block bg-[#FAA51A18] border border-[#FAA51A50] rounded px-3 py-1.5 mb-5">
        <p className="text-xs font-bold text-[#b07000]">Escalate by rule, not by anxiety</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Flow diagram */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="relative space-y-0">
            {/* Step 1: Routine action */}
            <div className="flex items-center gap-3 mb-0">
              <FlowBox step={flowSteps[0]} />
            </div>

            {/* Arrow down to threshold test */}
            <FlowArrow label="Action initiated" color="#404040" />

            {/* Step 2: Threshold test */}
            <div className="flex items-center gap-3">
              <FlowBox step={flowSteps[1]} diamond />
            </div>

            {/* Two branches from threshold */}
            <div className="flex items-start gap-3 mt-2">
              {/* No breach → delegated execution */}
              <div className="flex flex-col items-center" style={{ flex: 1 }}>
                <div className="text-[10px] font-bold text-[#2294BD] mb-1">No breach</div>
                <div
                  className="rounded-lg px-3 py-2.5 border-l-4 w-full"
                  style={{ borderLeftColor: "#2294BD", backgroundColor: "#2294BD12" }}
                >
                  <p className="text-xs font-bold text-[#2294BD]">{flowSteps[2].label}</p>
                  <p className="text-[11px] text-[#404040]">{flowSteps[2].sublabel}</p>
                </div>
              </div>

              {/* Breach → staff review → committee → report */}
              <div className="flex flex-col items-center" style={{ flex: 1 }}>
                <div className="text-[10px] font-bold text-[#D9532B] mb-1">Breach or exception</div>
                <div
                  className="rounded-lg px-3 py-2.5 border-l-4 w-full mb-2"
                  style={{ borderLeftColor: "#404040", backgroundColor: "#40404010" }}
                >
                  <p className="text-xs font-bold text-[#404040]">{flowSteps[3].label}</p>
                  <p className="text-[11px] text-[#404040]">{flowSteps[3].sublabel}</p>
                </div>
                <div className="text-[10px] text-[#404040] mb-1">↓</div>
                <div
                  className="rounded-lg px-3 py-2.5 border-l-4 w-full"
                  style={{ borderLeftColor: "#000000", backgroundColor: "#00000010" }}
                >
                  <p className="text-xs font-bold text-[#1A1A1A]">{flowSteps[4].label}</p>
                  <p className="text-[11px] text-[#404040]">{flowSteps[4].sublabel}</p>
                </div>
              </div>
            </div>

            {/* After-action */}
            <div className="mt-2">
              <div className="text-[10px] text-center text-[#404040] mb-1">↓ Both paths converge</div>
              <div
                className="rounded-lg px-3 py-2.5 border-l-4"
                style={{ borderLeftColor: "#2294BD", backgroundColor: "#2294BD08" }}
              >
                <p className="text-xs font-bold text-[#2294BD]">{flowSteps[5].label}</p>
                <p className="text-[11px] text-[#404040]">{flowSteps[5].sublabel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trigger table */}
        <div className="flex-1">
          <p className="text-xs font-bold text-[#1A1A1A] mb-2">Escalation Triggers</p>
          <div className="space-y-1.5">
            {[
              { trigger: "Policy-band breach", firstReview: "OCIO and staff", path: "Execute or escalate per rule", color: "#FAA51A" },
              { trigger: "Liquidity shortfall", firstReview: "Staff and treasury", path: "Immediate escalation", color: "#D9532B" },
              { trigger: "New strategy type", firstReview: "Committee", path: "Consent required", color: "#D9532B" },
              { trigger: "Manager event (in-authority)", firstReview: "OCIO", path: "Report after action", color: "#404040" },
              { trigger: "Private pacing overrun", firstReview: "Staff and board", path: "Immediate escalation", color: "#D9532B" },
              { trigger: "Structural leverage request", firstReview: "Committee", path: "Consent required", color: "#D9532B" },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-lg px-3 py-2 border-l-4"
                style={{ borderLeftColor: t.color, backgroundColor: t.color + "10" }}
              >
                <p className="text-xs font-bold text-[#1A1A1A]">{t.trigger}</p>
                <p className="text-[11px] text-[#404040]">
                  First review: {t.firstReview} → {t.path}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-[#404040] mt-4 pt-3 border-t border-[#E8DDD4]">
        Teaching point: the best escalation architecture reduces surprises without forcing the committee into every ordinary decision.
      </p>
    </div>
  );
}

function FlowBox({ step, diamond }: { step: (typeof flowSteps)[0]; diamond?: boolean }) {
  return (
    <div
      className={`w-full rounded-lg px-3 py-2.5 border-l-4 ${diamond ? "bg-[#FAA51A10]" : ""}`}
      style={{
        borderLeftColor: step.color,
        backgroundColor: step.color + "12",
      }}
    >
      <p className="text-xs font-bold" style={{ color: step.color }}>
        {diamond ? "◇ " : ""}{step.label}
      </p>
      <p className="text-[11px] text-[#404040]">{step.sublabel}</p>
    </div>
  );
}

function FlowArrow({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center justify-center gap-1 my-1">
      <div className="h-4 w-0.5" style={{ backgroundColor: color }} />
      <span className="text-[10px]" style={{ color }}>{label}</span>
    </div>
  );
}
