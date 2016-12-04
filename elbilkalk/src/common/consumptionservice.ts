import {Injectable} from 'angular2/core';
import {CarService} from './carservice'
import {UnitPreference} from './unitpreferenceservice'

@Injectable()
export class CalcService {
  constructor(
    private _carService: CarService,
    private _unitPreference: UnitPreference
   ) {
  }

  unitName() {
    return this._unitPreference.unitName()
  }
  calculate_distance(soc, consumption) {
    return this._carService.getCapacity() * (soc / 100.0) / this._unitPreference.normalized(consumption);
  }
  calculate_consumption(soc, distance) {
    return this._carService.getCapacity() * (soc / 100.0) / distance * 100;
  }
  calculate_charge(distance, consumption) {
    var required_kwh = distance * this._unitPreference.normalized(consumption);
    return required_kwh / this._carService.getCapacity() * 100;
  }
}
