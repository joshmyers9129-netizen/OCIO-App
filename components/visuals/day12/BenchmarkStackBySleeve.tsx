import React from "react";

const benchmarkTree = {
  level: "Strategic",
  label: "Total Portfolio",
  benchmark: "Custom Policy Mix (e.g., 60% Global Eq / 30% Fixed / 10% Alts)",
  color: "#000000",
  question: "Did the policy work for the institution?",
  children: [
    {
      level: "Sleeve",
      label: "Global Equity Sleeve",
      benchmark: "MSCI ACWI (policy weight)",
      color: "#2294BD",
      question: "Did equity behave as intended?",
      children: [
        {
          level: "Manager",
          label: "Core Beta Manager",
          benchmark: "MSCI ACWI (full index)",
          color: "#2294BD",
          question: "Did the mandate track the sleeve benchmark?",
          children: [],
        },
        {
          level: "Manager",
          label: "Active Specialist",
          benchmark: "MSCI ACWI + 200bps expected excess",
          color: "#2294BD",
          question: "Did the mandate deliver differentiated return?",
          children: [],
        },
      ],
    },
    {
      level: "Sleeve",
      label: "Liability / Duration Sleeve",
      benchmark: "Custom liability index (plan-specific)",
      color: "#404040",
      question: "Did the sleeve move with the liability?",
      children: [
        {
          level: "Manager",
          label: "Long Bond Mandate",
          benchmark: "Bloomberg Long Govt/Credit",
          color: "#404040",
          question: "Did the physical hedge carry duration?",
          children: [],
        },
        {
          level: "Completion",
          label: "Overlay / Completion Sleeve",
          benchmark: "Custom completion benchmark",
          color: "#FAA51A",
          question: "Did completion close the residual gap?",
          note: "Custom benchmark — cannot use standard index",
          flagCustom: true,
          children: [],
        },
      ],
    },
    {
      level: "Sleeve",
      label: "Private Assets Sleeve",
      benchmark: "PME (public market equivalent)",
      color: "#D9532B",
      question: "Did illiquid assets earn the illiquidity premium?",
      children: [
        {
          level: "Manager",
          label: "PE / Private Credit Commingled",
          benchmark: "Vintage-matched PME",
          color: "#D9532B",
          question: "Did vintage and strategy deliver against public alternative?",
          children: [],
        },
      ],
    },
  ],
};

interface TreeNode {
  level: string;
  label: string;
  benchmark: string;
  color: string;
  question: string;
  note?: string;
  flagCustom?: boolean;
  children: TreeNode[];
}

function TreeRow({ node, depth }: { node: TreeNode; depth: number }) {
  const indent = depth * 24;
  return (
    <div>
      <div
        className="flex items-start gap-2 rounded-lg p-2.5 mb-1.5 border-l-4"
        style={{
          marginLeft: indent,
          borderLeftColor: node.color,
          backgroundColor: node.color + "0C",
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase"
              style={{ backgroundColor: node.color + "20", color: node.color === "#000000" || node.color === "#404040" ? "#404040" : node.color }}
            >
              {node.level}
            </span>
            <p className="text-xs font-bold text-[#1A1A1A]">{node.label}</p>
            {node.flagCustom && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#FAA51A18", color: "#b07000" }}>Custom</span>
            )}
          </div>
          <p className="text-[10px] text-[#404040]">
            <span className="font-semibold">Benchmark:</span> {node.benchmark}
          </p>
          <p className="text-[10px] text-[#404040] italic">{node.question}</p>
          {node.note && (
            <p className="text-[10px] font-semibold text-[#b07000] mt-0.5">{node.note}</p>
          )}
        </div>
      </div>
      {node.children.map((child, i) => (
        <TreeRow key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function BenchmarkStackBySleeve() {
  return (
    <div className="w-full bg-white rounded-xl p-6 border border-[#E8DDD4]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#404040] mb-1">
        Benchmark Stack by Sleeve
      </p>
      <div className="inline-block bg-[#2294BD14] border border-[#2294BD30] rounded px-3 py-1.5 mb-4">
        <p className="text-xs font-semibold text-[#2294BD]">Benchmark clarity reduces false positives in monitoring.</p>
      </div>
      <p className="text-xs text-[#404040] mb-4">
        Benchmarks become more useful when they follow the architecture of the portfolio rather than the convenience of the report.
      </p>

      {/* Level legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          { color: "#000000", level: "Strategic", q: "Did the policy work?" },
          { color: "#2294BD", level: "Sleeve", q: "Did this role behave as intended?" },
          { color: "#404040", level: "Manager", q: "Did the mandate execute the sleeve job?" },
          { color: "#FAA51A", level: "Completion", q: "Did implementation close the gap?" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded" style={{ backgroundColor: l.color }} />
            <span className="text-[10px] text-[#404040]">
              <strong>{l.level}:</strong> {l.q}
            </span>
          </div>
        ))}
      </div>

      <TreeRow node={benchmarkTree} depth={0} />

      <p className="text-xs text-[#404040] mt-3 pt-3 border-t border-[#E8DDD4]">
        Teaching point: benchmarks become more useful when they follow the architecture of the portfolio rather than the convenience of the report.
      </p>
    </div>
  );
}
