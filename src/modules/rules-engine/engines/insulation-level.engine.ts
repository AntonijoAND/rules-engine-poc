import insulationLevelRules from '../rules/insulation-level.rule';
import { RuleEngineBase } from './rule-engine.base';

export class InsulationLevelEngine extends RuleEngineBase {
  protected loadRules() {
    insulationLevelRules.forEach((rule) => {
      this.engine.addRule(rule);
    });
  }

  extractFacts(query: Record<string, any>) {
    const { insulationLevel } = query;
    return { insulationLevel };
  }
}
