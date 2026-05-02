import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const calendarRows = [
  {
    fn: "Research / Oversight",
    color: "#2294BD",
    items: [
      { day: "Monday", status: "required", note: "Review watch list + any manager alerts" },
      { day: "Tuesday", status: "monitor", note: "Sector / market update if needed" },
      { day: "Wednesday", status: "monitor", note: "Mid-week check only" },
      { day: "Thursday", status: "required", note: "Lineup recommendation finalized" },
      { day: "Friday", status: "monitor", note: "Week-end review note" },
    ],
  },
  {
    fn: "Portfolio Management",
    color: "#2294BD",
    items: [
      { day: "Monday", status: "required", note: "Drift and cash review — flag actions needed" },
      { day: "Tuesday", status: "required", note: "Instruct implementation on scheduled actions" },
      { day: "Wednesday", status: "monitor", note: "Exception review only" },
      { day: "Thursday", status: "required", note: "End-of-week position check" },
      { day: "Friday", status: "monitor", note: "Confirm actions complete" },
    ],
  },
  {
    fn: "Implementation",
    color: "#FAA51A",
    items: [
      { day: "Monday", status: "monitor", note: "Receive instructions — confirm capacity" },
      { day: "Tuesday", status: "required", note: "Execute scheduled trades and rebalances" },
      { day: "Wednesday", status: "required", note: "Transitions and overlay activity" },
      { day: "Thursday", status: "required", note: "Settlement review — flag fails" },
      { day: "Friday", status: "monitor", note: "Post-trade summary to reporting" },
    ],
  },
  {
    fn: "Reporting",
    color: "#2294BD",
    items: [
      { day: "Monday", status: "monitor", note: "Standing weekly data refresh" },
      { day: "Tuesday", status: "monitor", note: "Capture any early-week actions" },
      { day: "Wednesday", status: "monitor", note: "Mid-week data update" },
      { day: "Thursday", status: "required", note: "Compile actions for client calendar" },
      { day: "Friday", status: "required", note: "Weekly summary — ready for Monday client notes" },
    ],
  },
  {
    fn: "Client Coverage",
    color: "#404040",
    items: [
      { day: "Monday", status: "monitor", note: "Check client calendar — any urgent items?" },
      { day: "Tuesday", status: "monitor", note: "Routine only" },
      { day: "Wednesday", status: "required", note: "Client call or touchpoint window" },
      { day: "Thursday", status: "monitor", note: "Follow-up on any questions" },
      { day: "Friday", status: "exception", note: "Exception: urgent communication only" },
    ],
  },
];

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  required: { color: "#2294BD", bg: "#2294BD18", label: "Active" },
  monitor: { color: "#404040", bg: "#40404010", label: "Monitor" },
  exception: { color: "#D9532B", bg: "#D9532B14", label: "Exception" },
};

export default function WeeklyWorkflowAndHandoffCalendar() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Weekly Workflow and Handoff Calendar
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Routine is a control, not a sign of bureaucracy.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        A strong workflow lets the client see how the platform runs, not just who attends meetings.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {Object.entries(statusConfig).map(([key, conf]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: conf.bg, border: `1px solid ${conf.color}` }} />
            <span className="text-[10px] text-[#404040]">{conf.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: 600 }}>
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-tl-lg" style={{ minWidth: 130 }}>
                Function
              </th>
              {days.map((d, i) => (
                <th
                  key={i}
                  className="text-center px-2 py-2.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ minWidth: 110, borderRadius: i === days.length - 1 ? "0 8px 0 0" : undefined }}
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2 border-b border-[#E8DDD4] align-top">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                    <p className="text-[10px] font-bold text-[#1A1A1A]">{row.fn}</p>
                  </div>
                </td>
                {row.items.map((item, di) => {
                  const sc = statusConfig[item.status];
                  return (
                    <td
                      key={di}
                      className="px-2 py-2 border-b border-[#E8DDD4] align-top text-center"
                      style={{ backgroundColor: sc.bg }}
                    >
                      <p className="text-[9px] font-bold mb-0.5" style={{ color: sc.color === "#404040" ? "#404040" : sc.color }}>{sc.label}</p>
                      <p className="text-[9px] text-[#404040]">{item.note}</p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key handoffs table */}
      <div className="mt-4 overflow-x-auto">
        <p className="text-xs font-bold text-[#1A1A1A] mb-2">Key Handoffs During the Week</p>
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#404040] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Function</th>
              <th className="text-left px-3 py-2">Typical Weekly Task</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {[
              { fn: "Research", task: "Review approved toolkit issues", why: "Keeps inputs current" },
              { fn: "Portfolio management", task: "Assess drift and actions", why: "Maintains alignment" },
              { fn: "Implementation", task: "Execute planned changes", why: "Turns decision into portfolio" },
              { fn: "Reporting", task: "Capture actions and results", why: "Preserves oversight" },
            ].map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{r.fn}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{r.task}</td>
                <td className="px-3 py-2.5 text-[#2294BD] font-semibold border-b border-[#E8DDD4]">{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a strong workflow lets the client see how the platform runs, not just who attends meetings.
      </p>
    </div>
  );
}
