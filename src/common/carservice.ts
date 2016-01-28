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

  constructor(capacity: number = 21.2) {
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }
}
