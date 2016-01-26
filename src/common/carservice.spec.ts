import {CarService} from './carservice.ts'

describe('CarService', function() {
    it('has correct capacity', function() {
      var car = new CarService();
      expect(car.getCapacity()).toEqual(21.2);
    });
});
