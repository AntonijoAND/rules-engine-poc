import radiatorsPriceRules from '../rules/radiators.rule';
import { RuleEngineBase } from './rule-engine.base';

export class RadiatorsPriceEngine extends RuleEngineBase {
  protected loadRules() {
    radiatorsPriceRules.forEach((rule) => {
      this.engine.addRule(rule);
    });
  }

  extractFacts(query: Record<string, any>) {
    const { radiators } = query;
    return { radiators: Number(radiators) };
  }
}
