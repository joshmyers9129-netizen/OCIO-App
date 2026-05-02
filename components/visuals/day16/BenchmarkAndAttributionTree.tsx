import React from "react";

const tree = {
  level: "Policy",
  label: "Total Portfolio",
  benchmark: "Custom Policy Mix",
  question: "Did the strategy work?",
  color: "#000000",
  children: [
    {
      level: "Sleeve",
      label: "Equity Sleeve",
      benchmark: "MSCI ACWI (policy weight)",
      question: "Did this role behave correctly?",
      color: "#2294BD",
      children: [
        {
          level: "Manager",
          label: "Core Beta Manager",
          benchmark: "MSCI ACWI (full index)",
          question: "Did the mandate execute its job?",
          color: "#2294BD",
          children: [],
        },
        {
          level: "Manager",
          label: "Active Specialist",
          benchmark: "MSCI ACWI + 200bps",
          question: "Did the mandate execute its job?",
          color: "#2294BD",
          children: [],
        },
      ],
    },
    {
      level: "Sleeve",
      label: "Fixed Income / LDI Sleeve",
      benchmark: "Custom liability / Bloomberg index",
      question: "Did this role behave correctly?",
      color: "#404040",
      children: [
        {
          level: "Manager",
          label: "Long Bond Mandate",
          benchmark: "Bloomberg Long Govt/Credit",
          question: "Did the mandate execute its job?",
          color: "#404040",
          children: [],
        },
      ],
    },
    {
      level: "Sleeve",
      label: "Private Assets Sleeve",
      benchmark: "PME (vintage-matched)",
      question: "Did this role behave correctly?",
      color: "#FAA51A",
      children: [
        {
          level: "Manager",
          label: "PE / Private Credit",
          benchmark: "Vintage-matched PME",
          question: "Did the mandate execute its job?",
          color: "#FAA51A",
          children: [],
        },
      ],
    },
  ],
};

const sideBranch = [
  { label: "Funded-Status Lens", example: "Asset gain vs. liability move", color: "#D9532B" },
  { label: "Spending-Support Lens", example: "Return vs. spending + inflation", color: "#D9532B" },
  { label: "Reserve-Adequacy Lens", example: "Return vs. reserve drawdown rate", color: "#D9532B" },
];

interface TreeNode {
  level: string;
  label: string;
  benchmark: string;
  question: string;
  color: string;
  children: TreeNode[];
}

function TreeRow({ node, depth }: { node: TreeNode; depth: number }) {
  const indent = depth * 20;
  return (
    <div>
      <div
        className="flex items-start gap-2 rounded-lg p-2 mb-1 border-l-4"
        style={{
          marginLeft: indent,
          borderLeftColor: node.color,
          backgroundColor: node.color + "0C",
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase"
              style={{ backgroundColor: node.color + "22", color: node.color === "#000000" || node.color === "#404040" ? "#404040" : node.color }}
            >
              {node.level}
            </span>
            <p className="text-xs font-bold text-[#1A1A1A]">{node.label}</p>
          </div>
          <p className="text-[10px] text-[#404040]"><span className="font-semibold">Benchmark:</span> {node.benchmark}</p>
          <p className="text-[10px] italic text-[#404040]">{node.question}</p>
        </div>
      </div>
      {node.children.map((child, i) => (
        <TreeRow key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function BenchmarkAndAttributionTree() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Benchmark and Attribution Tree
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Different benchmarks answer different questions.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Performance reporting gets clearer when every number has a defined job.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          { color: "#000000", level: "Policy", q: "Did the strategy work?" },
          { color: "#2294BD", level: "Sleeve", q: "Did this role behave correctly?" },
          { color: "#404040", level: "Manager", q: "Did the mandate execute its job?" },
          { color: "#D9532B", level: "Objective-Relative", q: "Did the institution's real position improve?" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: l.color }} />
            <span className="text-[10px] text-[#404040]">
              <strong>{l.level}:</strong> {l.q}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        {/* Main tree */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-[#404040] uppercase tracking-wider mb-2">Main Measurement Hierarchy</p>
          <TreeRow node={tree} depth={0} />
        </div>

        {/* Side branch: objective-relative */}
        <div className="w-48 flex-shrink-0">
          <p className="text-[10px] font-bold text-[#404040] uppercase tracking-wider mb-2">Objective-Relative Lenses</p>
          <div className="space-y-2">
            {sideBranch.map((branch, i) => (
              <div
                key={i}
                className="rounded-lg p-2.5 border-l-4"
                style={{ borderLeftColor: branch.color, backgroundColor: branch.color + "0C" }}
              >
                <p className="text-xs font-bold text-[#1A1A1A] mb-0.5">{branch.label}</p>
                <p className="text-[10px] italic text-[#404040]">{branch.example}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg p-2.5 bg-[#D9532B10] border border-[#D9532B30]">
            <p className="text-[10px] font-bold text-[#D9532B]">These lenses ask: Did the institution's real position improve?</p>
          </div>
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Measurement Layer</th>
              <th className="text-left px-3 py-2">Question Answered</th>
              <th className="text-left px-3 py-2 rounded-tr-lg">Typical Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              { layer: "Policy", q: "Did the strategy work?", ex: "Custom policy mix" },
              { layer: "Sleeve", q: "Did this role behave correctly?", ex: "Asset-class benchmark" },
              { layer: "Manager", q: "Did the mandate execute its job?", ex: "Mandate comparator" },
              { layer: "Objective-relative", q: "Did the institution's real position improve?", ex: "Funded-status or spending lens" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBF7F3]"}>
                <td className="px-3 py-2.5 font-bold text-[#1A1A1A] border-b border-[#E8DDD4]">{row.layer}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.q}</td>
                <td className="px-3 py-2.5 text-[#404040] border-b border-[#E8DDD4]">{row.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: performance reporting gets clearer when every number has a defined job.
      </p>
    </div>
  );
}
