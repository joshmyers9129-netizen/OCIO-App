import React from "react";

type RACIValue = "R" | "A" | "C" | "I" | "R/C" | "";

interface RACIRow {
  step: string;
  board: RACIValue;
  staff: RACIValue;
  relLead: RACIValue;
  pm: RACIValue;
  implTeam: RACIValue;
  risk: RACIValue;
  custodian: RACIValue;
  legal: RACIValue;
  actuary: RACIValue;
  flag?: string;
}

const rows: RACIRow[] = [
  {
    step: "Policy Change",
    board: "A",
    staff: "C",
    relLead: "R",
    pm: "C",
    implTeam: "I",
    risk: "C",
    custodian: "I",
    legal: "C",
    actuary: "C",
  },
  {
    step: "Benchmark Update",
    board: "A",
    staff: "C",
    relLead: "R",
    pm: "R",
    implTeam: "I",
    risk: "C",
    custodian: "I",
    legal: "I",
    actuary: "C",
    flag: "Dual owner risk: OCIO PM and Rel. Lead",
  },
  {
    step: "Trade List Approval",
    board: "I",
    staff: "C",
    relLead: "A",
    pm: "R",
    implTeam: "C",
    risk: "C",
    custodian: "I",
    legal: "I",
    actuary: "",
  },
  {
    step: "Collateral Setup",
    board: "I",
    staff: "C",
    relLead: "A",
    pm: "C",
    implTeam: "R",
    risk: "C",
    custodian: "R",
    legal: "C",
    actuary: "",
    flag: "Dual owner risk: Impl. Team and Custodian",
  },
  {
    step: "Trade Execution",
    board: "I",
    staff: "I",
    relLead: "I",
    pm: "A",
    implTeam: "R",
    risk: "C",
    custodian: "C",
    legal: "I",
    actuary: "",
  },
  {
    step: "Post-Trade Reporting",
    board: "I",
    staff: "C",
    relLead: "A",
    pm: "C",
    implTeam: "R",
    risk: "C",
    custodian: "C",
    legal: "I",
    actuary: "I",
  },
  {
    step: "Exception Escalation",
    board: "A",
    staff: "R",
    relLead: "R",
    pm: "C",
    implTeam: "C",
    risk: "C",
    custodian: "I",
    legal: "C",
    actuary: "I",
    flag: "Dual owner risk: Staff and Rel. Lead",
  },
];

const cols: { key: keyof RACIRow; label: string }[] = [
  { key: "board", label: "Board" },
  { key: "staff", label: "Staff" },
  { key: "relLead", label: "OCIO Rel. Lead" },
  { key: "pm", label: "Portfolio Mgr" },
  { key: "implTeam", label: "Impl. Team" },
  { key: "risk", label: "Risk" },
  { key: "custodian", label: "Custodian" },
  { key: "legal", label: "Legal" },
  { key: "actuary", label: "Actuary" },
];

function cellColor(v: RACIValue) {
  if (v === "R") return { bg: "#2294BD18", color: "#2294BD", fw: "bold" };
  if (v === "A") return { bg: "#00000012", color: "#000000", fw: "bold" };
  if (v === "C") return { bg: "#FAA51A15", color: "#b07000", fw: "normal" };
  if (v === "I") return { bg: "#FBF7F3", color: "#404040", fw: "normal" };
  if (v === "R/C") return { bg: "#D9532B15", color: "#D9532B", fw: "bold" };
  return { bg: "transparent", color: "#ccc", fw: "normal" };
}

export default function RecommendationRACI() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      {/* Banner */}
      <div className="bg-[#D9532B12] border border-[#D9532B40] rounded-lg px-4 py-2 mb-4">
        <p className="text-xs font-bold text-[#D9532B]">Hidden dual ownership is a delay signal</p>
        <p className="text-[11px] text-[#404040]">Rows flagged in orange indicate steps with unclear or overlapping accountability.</p>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        RACI: Recommendation to Live Portfolio
      </p>
      <p className="text-xs text-[#404040] mb-3">
        A portfolio action is only as clear as the ownership map that sits behind the approval language.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          { code: "R", label: "Responsible", color: "#2294BD" },
          { code: "A", label: "Accountable", color: "#000000" },
          { code: "C", label: "Consulted", color: "#b07000" },
          { code: "I", label: "Informed", color: "#404040" },
        ].map((l) => (
          <div key={l.code} className="flex items-center gap-1.5">
            <span
              className="text-xs font-bold w-5 h-5 rounded flex items-center justify-center"
              style={{ backgroundColor: l.color + "20", color: l.color }}
            >
              {l.code}
            </span>
            <span className="text-xs text-[#404040]">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 text-xs font-bold uppercase tracking-wider bg-[#000000] text-white rounded-tl-lg" style={{ minWidth: 130 }}>
                Decision Step
              </th>
              {cols.map((col, i) => (
                <th
                  key={i}
                  className="text-center px-2 py-2 text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: "#404040",
                    minWidth: 72,
                    borderRadius: i === cols.length - 1 ? "0 8px 0 0" : undefined,
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <React.Fragment key={ri}>
                <tr className={ri % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                  <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">
                    {row.step}
                  </td>
                  {cols.map((col) => {
                    const v = row[col.key] as RACIValue;
                    const style = cellColor(v);
                    return (
                      <td
                        key={col.key}
                        className="text-center px-2 py-2.5 border-b border-[#E8DDD4]"
                        style={{ backgroundColor: style.bg }}
                      >
                        <span
                          className="text-xs font-bold"
                          style={{ color: style.color, fontWeight: style.fw as React.CSSProperties["fontWeight"] }}
                        >
                          {v || "–"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
                {row.flag && (
                  <tr>
                    <td colSpan={cols.length + 1} className="px-3 py-1 border-b border-[#E8DDD4]">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded"
                        style={{ backgroundColor: "#D9532B18", color: "#D9532B" }}
                      >
                        ⚠ {row.flag}
                      </span>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: a portfolio action is only as clear as the ownership map that sits behind the approval language.
      </p>
    </div>
  );
}
