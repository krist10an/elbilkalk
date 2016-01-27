import {UnitPreference} from './unitpreferenceservice'
import {ConsumptionUnit} from './unitpreferenceservice'

describe('UnitPreference kWh', function() {
    var up;
    beforeEach(function() {
      up = new UnitPreference(ConsumptionUnit.Kwh);
    });
    afterEach(function() {
      up = null;
    });

    it('normalizes unit correctly', function() {
      expect(up.normalized(100)).toEqual(1);
    });
    it('has correct unit', function() {
      expect(up.unitName()).toEqual("kWh/100km");
    });
    it('normalizes and denormalized', function() {
      expect(up.denormalized(up.normalized(17))).toEqual(17);
    });
});

describe('UnitPreference wh', function() {
    var up;
    beforeEach(function() {
      up = new UnitPreference(ConsumptionUnit.Wh);
    });
    afterEach(function() {
      up = null;
    });
    it('wh normalizes unit correctly', function() {
      expect(up.normalized(150)).toEqual(0.15);
    });
    it('has correct unit', function() {
      expect(up.unitName()).toEqual("Wh/km");
    });
    it('normalizes and denormalized', function() {
      expect(up.denormalized(up.normalized(17))).toEqual(17);
    });

});
