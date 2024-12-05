import { Controller, Get, Query } from '@nestjs/common';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Get('evaluate')
  async evaluate(
    @Query()
    query: Record<string, any>,
  ) {
    const facts = {
      age: query.age ? Number(query.age) : undefined,
      salary: query.salary ? Number(query.salary) : undefined,
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
}
