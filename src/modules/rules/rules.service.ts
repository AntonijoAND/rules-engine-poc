import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { Engine } from 'json-rules-engine';
import * as path from 'path';

@Injectable()
export class RulesService implements OnModuleInit {
  private engine: Engine;
  private rules: any[] = [];

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
          rules.forEach((rule) => {
            this.engine.addRule(rule);
            this.rules.push(rule);
          });
        } else {
          console.warn(`File ${file} does not export an array of rules.`);
        }
      }
    }
  }

  addRule(rule: any) {
    this.engine.addRule(rule);
    this.rules.push(rule);
  }

  private extractFactsFromQuery(query: Record<string, any>) {
    const facts: Record<string, any> = {};
    const factSet = new Set<string>();

    for (const rule of this.rules) {
      for (const condition of rule.conditions.all) {
        factSet.add(condition.fact);
      }
    }

    for (const factName of factSet) {
      if (query[factName] !== undefined) {
        const rawValue = query[factName];
        const factValue = isNaN(rawValue) ? rawValue : Number(rawValue);
        facts[factName] = factValue;

        console.log(
          `Extracted Fact - Name: ${factName}, Value: ${factValue}, Type: ${typeof factValue}`,
        );
      } else {
        console.warn(`Fact "${factName}" is missing in query. Skipping...`);
      }
    }

    return facts;
  }

  async evaluate(query: Record<string, any>) {
    const facts = this.extractFactsFromQuery(query);

    console.log('Extracted Facts:', JSON.stringify(facts, null, 2));

    const filteredRules = this.rules.filter((rule) =>
      rule.conditions.all.every((condition) =>
        facts.hasOwnProperty(condition.fact),
      ),
    );

    if (filteredRules.length === 0) {
      console.log('No applicable rules found for the provided query.');
      return [];
    }

    // Create a temporary engine for the filtered rules
    const tempEngine = new Engine();
    filteredRules.forEach((rule) => tempEngine.addRule(rule));

    // Run the engine with the extracted facts
    try {
      const results = await tempEngine.run(facts);

      if (results.events.length === 0) {
        console.log('No events triggered for the provided facts.');
        return [];
      }

      const triggeredEvents = results.events.map((event) => ({
        type: event.type,
        value: event.params.value,
      }));

      console.log('Triggered Events:', triggeredEvents);

      return triggeredEvents;
    } catch (error) {
      console.error('Error during rule evaluation:', error);
      throw error;
    }
  }

  async calculate(facts: Record<string, any>): Promise<number> {
    const data = await this.evaluate(facts);

    console.log('DATA', data);

    const {
      floorArea = 0,
      heatLossCoeficient: heatLossCoefficient = 0,
      radiatorsPrice = 0,
      hotWaterCylinderSize = 0,
    } = Object.fromEntries(data.map(({ type, value }) => [type, value]));

    const heatPumpSize =
      (floorArea *
        heatLossCoefficient *
        Number(facts.temperatureDifference || 0)) /
      1000;

    console.log('HEAT PUMP SIZE', heatPumpSize);

    return heatPumpSize + hotWaterCylinderSize + radiatorsPrice;
  }
}
