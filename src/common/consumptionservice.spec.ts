import {CarService} from './carservice'
import {UnitPreference} from './unitpreferenceservice'
import {CalcService} from './consumptionservice'

describe('CalcService', function() {
    it('distance calculated correctly', function() {
      var cs = new CalcService(new CarService(20), new UnitPreference());
      expect(cs.calculate_distance(100, 10)).toEqual(200);
      // 75% @ 15 kWh/100km = 100km
      expect(cs.calculate_distance(75, 15)).toEqual(100);
    });
    it('consumption calculated correctly', function() {
      var cs = new CalcService(new CarService(20), new UnitPreference());
      expect(cs.calculate_consumption(100, 100)).toEqual(20);
      // 75% @ 100km = 15 kWh/100km
      expect(cs.calculate_consumption(75, 100)).toEqual(15);
    });
    it('charge calculated correctly', function() {
      var cs = new CalcService(new CarService(20), new UnitPreference());
      expect(cs.calculate_charge(100, 20)).toEqual(100);
      // 100km @ 15 kWh/100km = 75%
      expect(cs.calculate_charge(100, 15)).toEqual(75);
    });
});
