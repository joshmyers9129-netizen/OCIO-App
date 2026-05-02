import React from "react";

// Day 01 Visuals
const Day01DecisionRightsSpectrum = React.lazy(() => import("./day01/DecisionRightsSpectrum"));
const Day01MandateRACI = React.lazy(() => import("./day01/MandateRACI"));
const Day01OfferingComparisonTable = React.lazy(() => import("./day01/OfferingComparisonTable"));
const Day01ServiceModelFitMatrix = React.lazy(() => import("./day01/ServiceModelFitMatrix"));

// Day 02 Visuals
const Day02BusinessModelStack = React.lazy(() => import("./day02/BusinessModelStack"));
const Day02DNAtoFitMap = React.lazy(() => import("./day02/DNAtoFitMap"));
const Day02OCIOHistoryTimeline = React.lazy(() => import("./day02/OCIOHistoryTimeline"));
const Day02ProviderDNAMatrix = React.lazy(() => import("./day02/ProviderDNAMatrix"));

// Day 03 Visuals
const Day03ArchetypePriorityTable = React.lazy(() => import("./day03/ArchetypePriorityTable"));
const Day03ClientArchetypeMatrix = React.lazy(() => import("./day03/ClientArchetypeMatrix"));
const Day03ConstraintStack = React.lazy(() => import("./day03/ConstraintStack"));
const Day03EnterpriseLinkageMap = React.lazy(() => import("./day03/EnterpriseLinkageMap"));

// Day 04 Visuals
const Day04ClientSideStakeholderMap = React.lazy(() => import("./day04/ClientSideStakeholderMap"));
const Day04RecommendationRACI = React.lazy(() => import("./day04/RecommendationRACI"));
const Day04StakeholderObjectiveGrid = React.lazy(() => import("./day04/StakeholderObjectiveGrid"));

// Day 05 Visuals
const Day05DecisionRightsMatrix = React.lazy(() => import("./day05/DecisionRightsMatrix"));
const Day05DelegationLadder = React.lazy(() => import("./day05/DelegationLadder"));
const Day05EscalationArchitecture = React.lazy(() => import("./day05/EscalationArchitecture"));

// Day 06 Visuals
const Day06HoldabilityUnderStress = React.lazy(() => import("./day06/HoldabilityUnderStress"));
const Day06InstitutionalPortfolioDesignFramework = React.lazy(() => import("./day06/InstitutionalPortfolioDesignFramework"));
const Day06PolicyDifferencesByArchetype = React.lazy(() => import("./day06/PolicyDifferencesByArchetype"));

// Day 07 Visuals
const Day07AssumptionRangeTable = React.lazy(() => import("./day07/AssumptionRangeTable"));
const Day07RiskBudgetWaterfall = React.lazy(() => import("./day07/RiskBudgetWaterfall"));
const Day07ScenarioDecisionGrid = React.lazy(() => import("./day07/ScenarioDecisionGrid"));

// Day 08 Visuals
const Day08FundedStatusScoreboards = React.lazy(() => import("./day08/FundedStatusScoreboards"));
const Day08GlidepathDecisionMap = React.lazy(() => import("./day08/GlidepathDecisionMap"));
const Day08PensionBalanceSheetMap = React.lazy(() => import("./day08/PensionBalanceSheetMap"));

// Day 09 Visuals
const Day09CollateralWaterfall = React.lazy(() => import("./day09/CollateralWaterfall"));
const Day09KeyRateCompletionMap = React.lazy(() => import("./day09/KeyRateCompletionMap"));
const Day09LDIProgramAnatomy = React.lazy(() => import("./day09/LDIProgramAnatomy"));

// Day 10 Visuals
const Day10GovernanceIlliquidityMap = React.lazy(() => import("./day10/GovernanceIlliquidityMap"));
const Day10PerpetualPoolReserveLadder = React.lazy(() => import("./day10/PerpetualPoolReserveLadder"));
const Day10SpendingAndReturnTriangle = React.lazy(() => import("./day10/SpendingAndReturnTriangle"));

// Day 11 Visuals
const Day11EnterpriseCashflowSensitivityMap = React.lazy(() => import("./day11/EnterpriseCashflowSensitivityMap"));
const Day11MultiPoolReportingStack = React.lazy(() => import("./day11/MultiPoolReportingStack"));
const Day11PoolSegmentationLadder = React.lazy(() => import("./day11/PoolSegmentationLadder"));

// Day 12 Visuals
const Day12BenchmarkStackBySleeve = React.lazy(() => import("./day12/BenchmarkStackBySleeve"));
const Day12LineupArchitectureMap = React.lazy(() => import("./day12/LineupArchitectureMap"));
const Day12SleeveJobScorecard = React.lazy(() => import("./day12/SleeveJobScorecard"));

// Day 13 Visuals
const Day13ApprovedDecisionToLivePortfolio = React.lazy(() => import("./day13/ApprovedDecisionToLivePortfolio"));
const Day13ImplementationControlChecklist = React.lazy(() => import("./day13/ImplementationControlChecklist"));
const Day13OverlayAndCollateralPlumbing = React.lazy(() => import("./day13/OverlayAndCollateralPlumbing"));

// Day 14 Visuals
const Day14CommitmentGovernanceCalendar = React.lazy(() => import("./day14/CommitmentGovernanceCalendar"));
const Day14IlliquidityBudgetStack = React.lazy(() => import("./day14/IlliquidityBudgetStack"));
const Day14PacingAndJCurveFramework = React.lazy(() => import("./day14/PacingAndJCurveFramework"));

// Day 15 Visuals
const Day15LiquidityStressDashboard = React.lazy(() => import("./day15/LiquidityStressDashboard"));
const Day15LiquidityWaterfall = React.lazy(() => import("./day15/LiquidityWaterfall"));
const Day15TwelveMonthLiquidityCalendar = React.lazy(() => import("./day15/TwelveMonthLiquidityCalendar"));

// Day 16 Visuals
const Day16BenchmarkAndAttributionTree = React.lazy(() => import("./day16/BenchmarkAndAttributionTree"));
const Day16BoardReadyDashboard = React.lazy(() => import("./day16/BoardReadyDashboard"));
const Day16PerformanceNarrativeBridge = React.lazy(() => import("./day16/PerformanceNarrativeBridge"));

// Day 17 Visuals
const Day17CrisisDecisionTree = React.lazy(() => import("./day17/CrisisDecisionTree"));
const Day17CrisisMonitoringScoreboard = React.lazy(() => import("./day17/CrisisMonitoringScoreboard"));
const Day17DenominatorEffectMechanics = React.lazy(() => import("./day17/DenominatorEffectMechanics"));

// Day 18 Visuals
const Day18CapacitySuccessionAndConflictMap = React.lazy(() => import("./day18/CapacitySuccessionAndConflictMap"));
const Day18OCIOTeamOperatingModel = React.lazy(() => import("./day18/OCIOTeamOperatingModel"));
const Day18WeeklyWorkflowAndHandoffCalendar = React.lazy(() => import("./day18/WeeklyWorkflowAndHandoffCalendar"));

// Day 19 Visuals
const Day19FeeAndConflictMap = React.lazy(() => import("./day19/FeeAndConflictMap"));
const Day19ImplementationReadinessChecklist = React.lazy(() => import("./day19/ImplementationReadinessChecklist"));
const Day19OCIOProviderEvaluationScorecard = React.lazy(() => import("./day19/OCIOProviderEvaluationScorecard"));

// Day 20 Visuals
const Day20DecisionMemoAnatomy = React.lazy(() => import("./day20/DecisionMemoAnatomy"));
const Day20ImplementationRoadmap = React.lazy(() => import("./day20/ImplementationRoadmap"));
const Day20MandateBlueprint = React.lazy(() => import("./day20/MandateBlueprint"));
const Day20RiskRegister = React.lazy(() => import("./day20/RiskRegister"));

export const LESSON_VISUALS: Record<string, React.ComponentType> = {
  // Day 01
  "day-01-decision-rights-spectrum": Day01DecisionRightsSpectrum,
  "day-01-mandate-raci": Day01MandateRACI,
  "day-01-offering-comparison-table": Day01OfferingComparisonTable,
  "day-01-service-model-fit-matrix": Day01ServiceModelFitMatrix,

  // Day 02
  "day-02-business-model-stack": Day02BusinessModelStack,
  "day-02-dna-to-fit-map": Day02DNAtoFitMap,
  "day-02-ocio-history-timeline": Day02OCIOHistoryTimeline,
  "day-02-provider-dna-matrix": Day02ProviderDNAMatrix,

  // Day 03
  "day-03-archetype-priority-table": Day03ArchetypePriorityTable,
  "day-03-client-archetype-matrix": Day03ClientArchetypeMatrix,
  "day-03-constraint-stack": Day03ConstraintStack,
  "day-03-enterprise-linkage-map": Day03EnterpriseLinkageMap,

  // Day 04
  "day-04-client-side-stakeholder-map": Day04ClientSideStakeholderMap,
  "day-04-recommendation-raci": Day04RecommendationRACI,
  "day-04-stakeholder-objective-grid": Day04StakeholderObjectiveGrid,

  // Day 05
  "day-05-decision-rights-matrix": Day05DecisionRightsMatrix,
  "day-05-delegation-ladder": Day05DelegationLadder,
  "day-05-escalation-architecture": Day05EscalationArchitecture,

  // Day 06
  "day-06-holdability-under-stress": Day06HoldabilityUnderStress,
  "day-06-institutional-portfolio-design-framework": Day06InstitutionalPortfolioDesignFramework,
  "day-06-policy-differences-by-archetype": Day06PolicyDifferencesByArchetype,

  // Day 07
  "day-07-assumption-range-table": Day07AssumptionRangeTable,
  "day-07-risk-budget-waterfall": Day07RiskBudgetWaterfall,
  "day-07-scenario-decision-grid": Day07ScenarioDecisionGrid,

  // Day 08
  "day-08-funded-status-scoreboards": Day08FundedStatusScoreboards,
  "day-08-glide-path-decision-map": Day08GlidepathDecisionMap,
  "day-08-pension-balance-sheet-map": Day08PensionBalanceSheetMap,

  // Day 09
  "day-09-collateral-waterfall": Day09CollateralWaterfall,
  "day-09-key-rate-completion-map": Day09KeyRateCompletionMap,
  "day-09-ldi-program-anatomy": Day09LDIProgramAnatomy,

  // Day 10
  "day-10-governance-illiquidity-map": Day10GovernanceIlliquidityMap,
  "day-10-perpetual-pool-reserve-ladder": Day10PerpetualPoolReserveLadder,
  "day-10-spending-and-return-triangle": Day10SpendingAndReturnTriangle,

  // Day 11
  "day-11-enterprise-cashflow-sensitivity-map": Day11EnterpriseCashflowSensitivityMap,
  "day-11-multi-pool-reporting-stack": Day11MultiPoolReportingStack,
  "day-11-pool-segmentation-ladder": Day11PoolSegmentationLadder,

  // Day 12
  "day-12-benchmark-stack-by-sleeve": Day12BenchmarkStackBySleeve,
  "day-12-lineup-architecture-map": Day12LineupArchitectureMap,
  "day-12-sleeve-job-scorecard": Day12SleeveJobScorecard,

  // Day 13
  "day-13-approved-decision-to-live-portfolio": Day13ApprovedDecisionToLivePortfolio,
  "day-13-implementation-control-checklist": Day13ImplementationControlChecklist,
  "day-13-overlay-and-collateral-plumbing": Day13OverlayAndCollateralPlumbing,

  // Day 14
  "day-14-commitment-governance-calendar": Day14CommitmentGovernanceCalendar,
  "day-14-illiquidity-budget-stack": Day14IlliquidityBudgetStack,
  "day-14-pacing-and-j-curve-framework": Day14PacingAndJCurveFramework,

  // Day 15
  "day-15-liquidity-stress-dashboard": Day15LiquidityStressDashboard,
  "day-15-liquidity-waterfall": Day15LiquidityWaterfall,
  "day-15-twelve-month-liquidity-calendar": Day15TwelveMonthLiquidityCalendar,

  // Day 16
  "day-16-benchmark-and-attribution-tree": Day16BenchmarkAndAttributionTree,
  "day-16-board-ready-dashboard": Day16BoardReadyDashboard,
  "day-16-performance-narrative-bridge": Day16PerformanceNarrativeBridge,

  // Day 17
  "day-17-crisis-decision-tree": Day17CrisisDecisionTree,
  "day-17-crisis-monitoring-scoreboard": Day17CrisisMonitoringScoreboard,
  "day-17-denominator-effect-mechanics": Day17DenominatorEffectMechanics,

  // Day 18
  "day-18-capacity-succession-and-conflict-map": Day18CapacitySuccessionAndConflictMap,
  "day-18-ocio-team-operating-model": Day18OCIOTeamOperatingModel,
  "day-18-weekly-workflow-and-handoff-calendar": Day18WeeklyWorkflowAndHandoffCalendar,

  // Day 19
  "day-19-fee-and-conflict-map": Day19FeeAndConflictMap,
  "day-19-implementation-readiness-checklist": Day19ImplementationReadinessChecklist,
  "day-19-ocio-provider-evaluation-scorecard": Day19OCIOProviderEvaluationScorecard,

  // Day 20
  "day-20-decision-memo-anatomy": Day20DecisionMemoAnatomy,
  "day-20-implementation-roadmap": Day20ImplementationRoadmap,
  "day-20-mandate-blueprint": Day20MandateBlueprint,
  "day-20-risk-register": Day20RiskRegister,
};
