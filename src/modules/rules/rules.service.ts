import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { Engine } from 'json-rules-engine';
import * as path from 'path';

@Injectable()
export class RulesService implements OnModuleInit {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  async onModuleInit() {
    await this.loadRules();
  }

  private async loadRules() {
    const rulesDirectory = path.join(__dirname, 'rules');
    const ruleFiles = fs.readdirSync(rulesDirectory);

    for (const file of ruleFiles) {
      if (file.endsWith('.rule.js')) {
        const ruleModule = await import(path.join(rulesDirectory, file));
        const rules = ruleModule.default || ruleModule;

        if (Array.isArray(rules)) {
          rules.forEach((rule) => this.engine.addRule(rule));
        } else {
          console.warn(`File ${file} does not export an array of rules.`);
        }
      }
    }
  }

  addRule(rule: any) {
    this.engine.addRule(rule);
  }

  async evaluate(facts: Record<string, any>) {
    const results = await this.engine.run(facts);

    return results.events.map((event) => ({
      type: event.type,
      value: event.params.value,
    }));
  }

  async calculate(facts: Record<string, any>, temperatureDifference: string) {
    const data = await this.evaluate(facts);

    console.log('DATA', data);

    const floorArea = data.find((item) => item.type === 'floorArea')?.value;
    const heatLossCoefficient = data.find(
      (item) => item.type === 'heatLossCoeficient',
    )?.value;
    const radiatorsPrice = data.find(
      (item) => item.type === 'radiatorsPrice',
    )?.value;
    const hotWaterCylinderSize = data.find(
      (item) => item.type === 'hotWaterCylinderSize',
    )?.value;

    const heatPumpSize =
      (floorArea * heatLossCoefficient * Number(temperatureDifference)) / 1000;

    console.log('HEAT PUMP SIZE', heatPumpSize);

    const totalPrice = heatPumpSize + hotWaterCylinderSize + radiatorsPrice;

    return totalPrice;
  }
}
