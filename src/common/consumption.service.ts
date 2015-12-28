import {CarService} from './car.service'
import {UnitPreference} from './unitpreference.service'

export class CalcService {
  constructor(
    private _car: CarService,
    private _unitPreference: UnitPreference
   ) { }

  unitName() {
    return this._unitPreference.unitName()
  }
  calculate_distance(soc, consumption) {
    return this._car.getCapacity() * (soc / 100.0) / this._unitPreference.normalized(consumption);
  }
  calculate_consumption(soc, distance) {
    return this._car.getCapacity() * (soc / 100.0) / distance * 100;
  }
  calculate_charge(distance, consumption) {
    var required_kwh = distance * this._unitPreference.normalized(consumption);
    return required_kwh / this._car.getCapacity() * 100;
  }
}
