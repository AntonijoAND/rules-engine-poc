// heat-pump.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { HeatPumpService } from './heat-pump.service';

@Controller('heat-pump')
export class HeatPumpController {
  constructor(private readonly heatPumpService: HeatPumpService) {}

  @Get('/calculate')
  async calculate(@Query() query: Record<string, any>): Promise<number> {
    return this.heatPumpService.calculate(query);
  }
}
