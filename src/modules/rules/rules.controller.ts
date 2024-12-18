import { Controller, Get, Query } from '@nestjs/common';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Get('/evaluate')
  async evaluate(
    @Query()
    query: Record<string, any>,
  ) {
    return this.rulesService.evaluate(query);
  }

  @Get('/calculate')
  async calculate(
    @Query()
    query: Record<string, any>,
  ) {
    return this.rulesService.calculate(query);
  }
}
