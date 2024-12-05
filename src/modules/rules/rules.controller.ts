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
    const facts = {
      noBedrooms: query.noBedrooms ? Number(query.noBedrooms) : undefined,
      radiators: query.radiators ? Number(query.radiators) : undefined,
      insulationLevel: query.insulationLevel
        ? query.insulationLevel
        : undefined,
      propertyType: query.propertyType ? query.propertyType : undefined,
      noRooms: query.noRooms ? query.noRooms : undefined,
    };

    return this.rulesService.evaluate(facts);
  }

  @Get('/calculate')
  async calculate(
    @Query()
    query: Record<string, any>,
  ) {
    const facts = {
      noBedrooms: query.noBedrooms ? Number(query.noBedrooms) : undefined,
      radiators: query.radiators ? Number(query.radiators) : undefined,
      insulationLevel: query.insulationLevel
        ? query.insulationLevel
        : undefined,
      propertyType: query.propertyType ? query.propertyType : undefined,
      noRooms: query.noRooms ? query.noRooms : undefined,
    };

    return this.rulesService.calculate(facts, query.temperatureDifference);
  }
}
