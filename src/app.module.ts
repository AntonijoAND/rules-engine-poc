import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeatPumpModule } from './modules/heat-pump/heat-pump.module';
import { RulesEngineModule } from './modules/rules-engine/rules-engine.module';

@Module({
  imports: [RulesEngineModule, HeatPumpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
