import { Module } from '@nestjs/common';
import { RulesEngineModule } from '../rules-engine/rules-engine.module';
import { RulesEngineService } from '../rules-engine/rules-engine.service';
import { HeatPumpController } from './heat-pump.controller';
import { HeatPumpService } from './heat-pump.service';

@Module({
  imports: [RulesEngineModule],
  controllers: [HeatPumpController],
  providers: [HeatPumpService, RulesEngineService],
})
export class HeatPumpModule {}
