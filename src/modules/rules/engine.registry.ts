import { FloorAreaEngine } from './engines/floor-area.engine';
import { HotWaterCyliderEngine } from './engines/hot-water-cylinder.engine';
import { InsulationLevelEngine } from './engines/insulation-level.engine';
import { RadiatorsPriceEngine } from './engines/radiators-price.engine';

export const engineRegistry = {
  floorAreaEngine: new FloorAreaEngine(),
  radiatorsPriceEngine: new RadiatorsPriceEngine(),
  hotWaterCyliderEngine: new HotWaterCyliderEngine(),
  insulationLevelEngine: new InsulationLevelEngine(),
};
