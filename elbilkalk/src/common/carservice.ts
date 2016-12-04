import {Injectable} from 'angular2/core';

interface ICarCapacity {
    capacity: number;
    getCapacity();
}

@Injectable()
export class CarService implements ICarCapacity {
  capacity: number;


  constructor() {
    this.capacity = 21.2;
  }

  setCapacity(cap: number) {
    this.capacity = cap;
    return this
  }

  getCapacity() {
    return this.capacity;
  }
}
