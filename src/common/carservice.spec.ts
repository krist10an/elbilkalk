import {CarService} from './carservice.ts'

describe('CarService', function() {
    it('has correct capacity', function() {
      var car = new CarService(32);
      expect(car.getCapacity()).toEqual(32);
    });
});
