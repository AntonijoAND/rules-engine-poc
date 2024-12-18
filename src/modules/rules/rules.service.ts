import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { Engine } from 'json-rules-engine';
import * as path from 'path';

@Injectable()
export class RulesService implements OnModuleInit {
  private engines: Map<string, Engine> = new Map();
  private rules: Record<string, any[]> = {};

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
          for (const rule of rules) {
            const engineName = rule.engine || 'default';
            if (!this.engines.has(engineName)) {
              this.engines.set(engineName, new Engine());
              this.rules[engineName] = [];
            }
            this.engines.get(engineName).addRule(rule);
            this.rules[engineName].push(rule);
          }
        } else {
          console.warn(`File ${file} does not export an array of rules.`);
        }
      }
    }
  }

  private identifyEnginesBasedOnFacts(query: Record<string, any>): string[] {
    const matchingEngines: string[] = [];

    for (const [engineName, ruleSet] of Object.entries(this.rules)) {
      const requiredFacts = new Set<string>();

      ruleSet.forEach((rule) => {
        rule.conditions.all.forEach((condition) => {
          requiredFacts.add(condition.fact);
        });
      });

      const hasRelevantFacts = [...requiredFacts].some((fact) => fact in query);

      if (hasRelevantFacts) {
        matchingEngines.push(engineName);
      }
    }

    return matchingEngines;
  }

  private extractFactsForEngine(
    query: Record<string, any>,
    engineName: string,
  ) {
    const facts: Record<string, any> = {};
    const ruleSet = this.rules[engineName] || [];

    const factSet = new Set<string>();
    for (const rule of ruleSet) {
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
    const engineNames = this.identifyEnginesBasedOnFacts(query);

    console.log('ENGINE NAMES:', engineNames);

    if (engineNames.length === 0) {
      console.warn(
        `No matching engines found for provided facts. Query: ${JSON.stringify(query)}`,
      );
      return [];
    }

    const results: Array<{ type: string; value: any }> = [];

    for (const engineName of engineNames) {
      if (!this.engines.has(engineName)) {
        console.warn(`Engine "${engineName}" is not registered.`);
        continue;
      }

      const engine = this.engines.get(engineName);
      const facts = this.extractFactsForEngine(query, engineName);

      console.log(
        `Running Engine: ${engineName}, Facts:`,
        JSON.stringify(facts, null, 2),
      );

      try {
        const engineResults = await engine.run(facts);
        const engineEvents = engineResults.events.map((event) => ({
          type: event.type,
          value: event.params.value,
        }));

        console.log(`Triggered Events for "${engineName}":`, engineEvents);

        results.push(...engineEvents);
      } catch (error) {
        console.error(
          `Error during evaluation for engine "${engineName}":`,
          error,
        );
      }
    }

    if (results.length === 0) {
      console.log('No events triggered for any engines.');
    }

    return results;
  }

  async calculate(query: Record<string, any>): Promise<number> {
    const data = await this.evaluate(query);

    const {
      floorArea,
      heatLossCoefficient,
      radiatorsPrice,
      hotWaterCylinderSize,
    } = Object.fromEntries(data.map(({ type, value }) => [type, value]));

    const heatPumpSize =
      (floorArea *
        heatLossCoefficient *
        Number(query.temperatureDifference || 0)) /
      1000;

    if (hotWaterCylinderSize) {
      return heatPumpSize + hotWaterCylinderSize + radiatorsPrice;
    } else {
      return heatPumpSize + radiatorsPrice;
    }
  }
}
