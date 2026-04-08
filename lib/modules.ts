import { lessonContents } from "./lessonContent";
import { Difficulty, Lesson, LessonContent, Module } from "./types";

const MODULE_ID = "ocio-education";

const LESSON_OVERRIDES: Record<
  string,
  {
    topics: string[];
    difficulty: Difficulty;
    prerequisites: string[];
  }
> = {
  "day-01": {
    topics: ["ocio-market-map", "delegation-models", "institutional-outsourcing"],
    difficulty: "foundational",
    prerequisites: [],
  },
  "day-02": {
    topics: ["ocio-industry-history", "provider-origins", "market-evolution"],
    difficulty: "foundational",
    prerequisites: ["day-01"],
  },
  "day-03": {
    topics: ["client-archetypes", "institutional-pools", "client-fit"],
    difficulty: "foundational",
    prerequisites: ["day-01", "day-02"],
  },
  "day-04": {
    topics: ["stakeholder-mapping", "committee-dynamics", "client-translation"],
    difficulty: "foundational",
    prerequisites: ["day-03"],
  },
  "day-05": {
    topics: ["governance-delegation", "ips-design", "decision-rights"],
    difficulty: "foundational",
    prerequisites: ["day-01", "day-04"],
  },
  "day-06": {
    topics: [
      "strategic-asset-allocation",
      "institutional-objectives",
      "policy-portfolio-design"
    ],
    difficulty: "intermediate",
    prerequisites: ["day-03", "day-05"],
  },
  "day-07": {
    topics: ["capital-markets-assumptions", "scenario-analysis", "risk-budgeting"],
    difficulty: "intermediate",
    prerequisites: ["day-06"],
  },
  "day-08": {
    topics: ["db-pensions", "funded-status", "glide-path-design"],
    difficulty: "intermediate",
    prerequisites: ["day-03", "day-06"],
  },
  "day-09": {
    topics: ["ldi-program-design", "hedge-ratios", "collateral-management"],
    difficulty: "intermediate",
    prerequisites: ["day-07", "day-08"],
  },
  "day-10": {
    topics: [
      "endowments-foundations",
      "spending-rules",
      "intergenerational-equity"
    ],
    difficulty: "intermediate",
    prerequisites: ["day-03", "day-06"],
  },
  "day-11": {
    topics: [
      "operating-pools",
      "balance-sheet-sensitive-portfolios",
      "enterprise-liquidity"
    ],
    difficulty: "intermediate",
    prerequisites: ["day-03", "day-06"],
  },
  "day-12": {
    topics: ["manager-structure", "benchmark-design", "portfolio-sleeves"],
    difficulty: "intermediate",
    prerequisites: ["day-05", "day-06"],
  },
  "day-13": {
    topics: ["implementation-toolkit", "rebalancing-transitions", "overlay-management"],
    difficulty: "advanced",
    prerequisites: ["day-05", "day-12"],
  },
  "day-14": {
    topics: [
      "private-markets-program-design",
      "commitment-pacing",
      "illiquidity-budgeting"
    ],
    difficulty: "advanced",
    prerequisites: ["day-06", "day-12", "day-13"],
  },
  "day-15": {
    topics: ["liquidity-forecasting", "cash-flow-governance", "treasury-coordination"],
    difficulty: "advanced",
    prerequisites: ["day-09", "day-13", "day-14"],
  },
  "day-16": {
    topics: ["performance-attribution", "client-reporting", "benchmark-framing"],
    difficulty: "advanced",
    prerequisites: ["day-08", "day-10", "day-11", "day-13"],
  },
  "day-17": {
    topics: ["stress-risk-management", "denominator-effect", "crisis-governance"],
    difficulty: "advanced",
    prerequisites: ["day-13", "day-15", "day-16"],
  },
  "day-18": {
    topics: ["investment-team-operations", "manager-research", "client-delivery"],
    difficulty: "advanced",
    prerequisites: ["day-12", "day-13", "day-16"],
  },
  "day-19": {
    topics: ["provider-diligence", "rfp-process", "fee-conflicts"],
    difficulty: "advanced",
    prerequisites: ["day-02", "day-05", "day-18"],
  },
  "day-20": {
    topics: ["ocio-capstone", "mandate-design", "client-communication"],
    difficulty: "advanced",
    prerequisites: ["day-05", "day-06", "day-13", "day-19"],
  },
};

const NON_OBJECTIVE_TITLES = new Set([
  "Meeting cold open",
  "Transfer map for this lesson",
  "Weak answer versus strong answer",
  "Meeting application",
  "Allocator application",
  "Decision relevance",
  "Curriculum links",
  "Further learning",
  "Checkpoint synthesis",
]);

function getDayNumber(lessonId: string): number {
  const match = lessonId.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function getLessonTitle(content: LessonContent): string {
  return (
    content.blocks.find((block) => block.type === "framing")?.title ??
    content.blocks.find((block) => block.title && !NON_OBJECTIVE_TITLES.has(block.title))
      ?.title ??
    content.lessonId
  );
}

function estimateMinutes(content: LessonContent): number {
  const textParts = [
    ...content.blocks.flatMap((block) => [
      block.title,
      block.content,
      block.caption,
      block.whyItMatters,
      block.sourceNote,
    ]),
    ...content.quiz.flatMap((question) =>
      question.type === "multiple-choice"
        ? [question.prompt, ...question.options, question.correctAnswer]
        : [question.prompt, question.modelAnswer]
    ),
    ...content.sources,
  ].filter((value): value is string => Boolean(value));

  const wordCount = textParts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(35, Math.min(50, Math.round(wordCount / 180) + 10));
}

function deriveLearningObjectives(content: LessonContent): string[] {
  const objectives = content.blocks
    .filter((block) => {
      if (!block.title || NON_OBJECTIVE_TITLES.has(block.title)) return false;
      if (block.title.startsWith("Visual:")) return false;
      return block.type === "teaching" || block.type === "example" || block.type === "framing";
    })
    .map((block) => block.title)
    .filter((title, index, all) => all.indexOf(title) === index)
    .slice(0, 3);

  return objectives.length > 0
    ? objectives
    : ["Understand the core lesson framing and apply it in practice"];
}

const lessons: Lesson[] = lessonContents
  .map((content) => {
    const override = LESSON_OVERRIDES[content.lessonId];
    if (!override) {
      throw new Error(`Missing lesson metadata override for ${content.lessonId}`);
    }

    return {
      lessonId: content.lessonId,
      dayNumber: getDayNumber(content.lessonId),
      title: getLessonTitle(content),
      estimatedMinutes: estimateMinutes(content),
      topics: override.topics,
      difficulty: override.difficulty,
      prerequisites: override.prerequisites,
      learningObjectives: deriveLearningObjectives(content),
    };
  })
  .sort((a, b) => a.dayNumber - b.dayNumber);

export const modules: Module[] = [
  {
    moduleId: MODULE_ID,
    moduleTitle: "OCIO Education",
    description:
      "A 20-day OCIO curriculum covering the delegated-investment model, client archetypes, governance, strategic asset allocation, pension and LDI design, implementation, private markets, liquidity, reporting, risk, team structure, provider diligence, and client-ready recommendation framing.",
    lessons,
  },
];

export function getModuleById(moduleId: string): Module | undefined {
  return modules.find((entry) => entry.moduleId === moduleId);
}

export const DEFAULT_MODULE_ID = MODULE_ID;

export function getDefaultModule(): Module {
  const defaultModule = getModuleById(DEFAULT_MODULE_ID);
  if (!defaultModule) throw new Error(`Default module "${DEFAULT_MODULE_ID}" not found`);
  return defaultModule;
}

