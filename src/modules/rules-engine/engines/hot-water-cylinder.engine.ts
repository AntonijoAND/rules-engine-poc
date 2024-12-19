import hotWaterCyliderRules from '../rules/hot-water-cylinder.rule';
import { RuleEngineBase } from './rule-engine.base';

export class HotWaterCyliderEngine extends RuleEngineBase {
  protected loadRules() {
    hotWaterCyliderRules.forEach((rule) => {
      this.engine.addRule(rule);
    });
  }

  extractFacts(query: Record<string, any>) {
    const { noBedrooms } = query;
    return { noBedrooms: Number(noBedrooms) };
  }
}
