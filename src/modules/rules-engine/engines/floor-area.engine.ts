import floorAreaRules from '../rules/floor-area.rule';
import { RuleEngineBase } from './rule-engine.base';

export class FloorAreaEngine extends RuleEngineBase {
  protected loadRules() {
    floorAreaRules.forEach((rule) => {
      this.engine.addRule(rule);
    });
  }

  extractFacts(query: Record<string, any>) {
    const { propertyType, noRooms } = query;
    return { propertyType, noRooms: Number(noRooms) };
  }
}
