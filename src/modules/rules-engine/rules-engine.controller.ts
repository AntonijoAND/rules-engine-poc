import { Controller, Get, Query } from '@nestjs/common';
import { RulesEngineService } from './rules-engine.service';

@Controller('rules')
export class RulesEngineController {
  constructor(private readonly rulesEngineService: RulesEngineService) {}

  @Get('/evaluate')
  async evaluate(
    @Query()
    query: Record<string, any>,
  ) {
    console.log('EVALUATE ENDPOINT');
    return this.rulesEngineService.evaluate(query);
  }
}
