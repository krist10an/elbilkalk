import {UnitPreference} from './unitpreferenceservice.ts'

describe('UnitPreference', function() {
    it('normalizes unit correctly', function() {
      var up = new UnitPreference();
      expect(up.normalized(1)).toEqual(100);
    });
    it('has correct unit', function() {
      var up = new UnitPreference();
      expect(up.unitName()).toEqual("kWh/100km");
    });
});
