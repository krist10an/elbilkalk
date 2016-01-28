import {CarService} from './carservice'
import {UnitPreference} from './unitpreferenceservice'
import {CalcService} from './consumptionservice'
import {ConsumptionUnit} from './unitpreferenceservice'

describe('CalcService', function() {
    var cs;
    beforeEach(function() {
      var up = new UnitPreference()
      up.setUnit(ConsumptionUnit.KWH);
      cs = new CalcService(new CarService(20), up);
    });
    afterEach(function() {
      cs = null;
    });

    it('distance calculated correctly', function() {
      // 100% @ 10 kWh/100km = 200km
      expect(cs.calculate_distance(100, 10)).toEqual(200);
      // 75% @ 15 kWh/100km = 100km
      expect(cs.calculate_distance(75, 15)).toEqual(100);
    });
    it('consumption calculated correctly', function() {
      // 100% @ 100km = 20 kWh/100km
      expect(cs.calculate_consumption(100, 100)).toEqual(20);
      // 75% @ 100km = 15 kWh/100km
      expect(cs.calculate_consumption(75, 100)).toEqual(15);
    });
    it('charge calculated correctly', function() {
      // 100km @ 20 kWh/100km = 100%
      expect(cs.calculate_charge(100, 20)).toEqual(100);
      // 100km @ 15 kWh/100km = 75%
      expect(cs.calculate_charge(100, 15)).toEqual(75);
    });
});
