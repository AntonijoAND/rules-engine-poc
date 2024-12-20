import { Injectable } from '@nestjs/common';
import { RulesEngineService } from '../rules-engine/rules-engine.service';

@Injectable()
export class HeatPumpService {
  constructor(private readonly rulesEngineService: RulesEngineService) {}

  async calculate(query: Record<string, any>): Promise<number> {
    const data = await this.rulesEngineService.evaluate(query);

    console.log('DATA', data);

    const {
      floorArea = 0,
      heatLossCoefficient = 1,
      radiatorsPrice = 0,
      hotWaterCylinderSize = 0,
    } = Object.fromEntries(data.map(({ type, value }) => [type, value]));

    // Calculate the heat pump size
    const heatPumpSize =
      (floorArea *
        heatLossCoefficient *
        Number(query.temperatureDifference || 1)) /
      1000;

    console.log('HEAT PUMP SIZE', heatPumpSize);

    // Return the final calculation based on the presence of hot water cylinder size
    if (hotWaterCylinderSize) {
      return heatPumpSize + hotWaterCylinderSize + radiatorsPrice;
    } else {
      return heatPumpSize + radiatorsPrice;
    }
  }
}
