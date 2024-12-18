import { Injectable, OnModuleInit } from '@nestjs/common';
import { FloorAreaEngine } from './engines/floor-area.engine';
import { HotWaterCyliderEngine } from './engines/hot-water-cylinder.engine';
import { InsulationLevelEngine } from './engines/insulation-level.engine';
import { RadiatorsPriceEngine } from './engines/radiators-price.engine';

import { RuleEngineBase } from './engines/rule-engine.base';

@Injectable()
export class RulesService implements OnModuleInit {
  private engines: RuleEngineBase[] = [];

  onModuleInit() {
    this.setupEngines();
  }

  private setupEngines() {
    this.engines.push(new FloorAreaEngine());
    this.engines.push(new RadiatorsPriceEngine());
    this.engines.push(new HotWaterCyliderEngine());
    this.engines.push(new InsulationLevelEngine());
  }

  private identifyEngines(query: Record<string, any>): RuleEngineBase[] {
    return this.engines.filter((engine) => {
      const facts = engine.extractFacts(query);
      return Object.values(facts).every((fact) => fact !== undefined);
    });
  }

  async evaluate(query: Record<string, any>) {
    const enginesToRun = this.identifyEngines(query);

    if (enginesToRun.length === 0) {
      console.warn('No matching engines found for the provided query.');
      return [];
    }

    const allResults: { type: string; value: any }[] = [];

    for (const engine of enginesToRun) {
      try {
        const engineResults = await engine.evaluate(query);
        console.log(`Results from ${engine.constructor.name}:`, engineResults);
        if (engineResults && engineResults.length > 0) {
          allResults.push(...engineResults);
        }
      } catch (error) {
        console.error(
          `Error running engine "${engine.constructor.name}":`,
          error,
        );
      }
    }

    return allResults;
  }
}
