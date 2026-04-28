/**
 * OCIO app visual registry.
 * All custom visual components are registered here by their visualId.
 */
import type React from "react";

import { Day01MarketSpectrum, Day01OutsourcingFitMatrix } from "./day01";
import { Day02OcioHistoryTimeline, Day02ProviderFamilyTree } from "./day02";
import { Day03ClientArchetypeComparison, Day03OcioFitByArchetype } from "./day03";
import { Day04ClientStakeholderMap, Day04RaciWorkflow } from "./day04";
import { Day05DelegationLadder, Day05DecisionRightsMatrix } from "./day05";
import { Day06PortfolioDesignFramework, Day06PolicyDifferencesByClient } from "./day06";
import { Day07CmaDecisionWorkflow, Day07RiskBudgetWaterfall } from "./day07";
import { Day08PensionBalanceSheet, Day08GlidePathDesign } from "./day08";
import { Day09LdiAnatomy, Day09CollateralWaterfall } from "./day09";
import { Day10SpendingReturnTriangle, Day10GovernanceIlliquidityMap } from "./day10";
import { Day11PoolSegmentationLadder, Day11CashflowSensitivityMap } from "./day11";
import { Day12LineupArchitectureMap, Day12BenchmarkStack } from "./day12";
import { Day13PolicyToLivePortfolio, Day13OverlayPlumbing } from "./day13";
import { Day14PacingJCurve, Day14IlliquidityBudgetStack } from "./day14";
import { Day15LiquidityCalendar, Day15LiquidityWaterfall } from "./day15";
import { Day16BenchmarkAttributionTree, Day16BoardDashboard } from "./day16";
import { Day17CrisisDecisionTree, Day17DenominatorEffectChart } from "./day17";
import { Day18OcioTeamOperatingModel, Day18RaciCommitteeCalendar } from "./day18";
import { Day19ProviderLandscapeMap, Day19ProviderEvaluationScorecard } from "./day19";
import { Day20ClientDiagnosisWorksheet, Day20RecommendationStructure } from "./day20";

export const LESSON_VISUALS: Record<string, React.ComponentType> = {
  "day01-market-spectrum": Day01MarketSpectrum,
  "day01-outsourcing-fit-matrix": Day01OutsourcingFitMatrix,
  "day02-ocio-history-timeline": Day02OcioHistoryTimeline,
  "day02-provider-family-tree": Day02ProviderFamilyTree,
  "day03-client-archetype-comparison": Day03ClientArchetypeComparison,
  "day03-ocio-fit-by-archetype": Day03OcioFitByArchetype,
  "day04-client-stakeholder-map": Day04ClientStakeholderMap,
  "day04-raci-workflow": Day04RaciWorkflow,
  "day05-delegation-ladder": Day05DelegationLadder,
  "day05-decision-rights-matrix": Day05DecisionRightsMatrix,
  "day06-portfolio-design-framework": Day06PortfolioDesignFramework,
  "day06-policy-differences-by-client": Day06PolicyDifferencesByClient,
  "day07-cma-decision-workflow": Day07CmaDecisionWorkflow,
  "day07-risk-budget-waterfall": Day07RiskBudgetWaterfall,
  "day08-pension-balance-sheet": Day08PensionBalanceSheet,
  "day08-glide-path-design": Day08GlidePathDesign,
  "day09-ldi-anatomy": Day09LdiAnatomy,
  "day09-collateral-waterfall": Day09CollateralWaterfall,
  "day10-spending-return-triangle": Day10SpendingReturnTriangle,
  "day10-governance-illiquidity-map": Day10GovernanceIlliquidityMap,
  "day11-pool-segmentation-ladder": Day11PoolSegmentationLadder,
  "day11-cashflow-sensitivity-map": Day11CashflowSensitivityMap,
  "day12-lineup-architecture-map": Day12LineupArchitectureMap,
  "day12-benchmark-stack": Day12BenchmarkStack,
  "day13-policy-to-live-portfolio": Day13PolicyToLivePortfolio,
  "day13-overlay-plumbing": Day13OverlayPlumbing,
  "day14-pacing-jcurve": Day14PacingJCurve,
  "day14-illiquidity-budget-stack": Day14IlliquidityBudgetStack,
  "day15-liquidity-calendar": Day15LiquidityCalendar,
  "day15-liquidity-waterfall": Day15LiquidityWaterfall,
  "day16-benchmark-attribution-tree": Day16BenchmarkAttributionTree,
  "day16-board-dashboard": Day16BoardDashboard,
  "day17-crisis-decision-tree": Day17CrisisDecisionTree,
  "day17-denominator-effect-chart": Day17DenominatorEffectChart,
  "day18-ocio-team-operating-model": Day18OcioTeamOperatingModel,
  "day18-raci-committee-calendar": Day18RaciCommitteeCalendar,
  "day19-provider-landscape-map": Day19ProviderLandscapeMap,
  "day19-provider-evaluation-scorecard": Day19ProviderEvaluationScorecard,
  "day20-client-diagnosis-worksheet": Day20ClientDiagnosisWorksheet,
  "day20-recommendation-structure": Day20RecommendationStructure,
};
