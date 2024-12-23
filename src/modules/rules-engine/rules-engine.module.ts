import { Module } from '@nestjs/common';
import { RulesEngineController } from './rules-engine.controller';
import { RulesEngineService } from './rules-engine.service';

@Module({
  controllers: [RulesEngineController],
  providers: [RulesEngineService],
})
export class RulesEngineModule {}
