import {Injectable} from 'angular2/core';

export enum ConsumptionUnit { Kwh, Wh };

@Injectable()
export class UnitPreference {
  private conversion_factor: number;
  private name: string;

  constructor(unit: ConsumptionUnit) {
    if (unit == ConsumptionUnit.Wh) {
      // 1000 Wh/km == 1 kWh/km
      this.conversion_factor = 1000;
      this.name = "Wh/km"
    } else {
      // 100 kWh/100km == 1 kWh/100km
      this.conversion_factor = 100;
      this.name = "kWh/100km"
    }
  }

  normalized(input): number {
    // Normalize to kWh/km
    return input / this.conversion_factor;
  }
  denormalized(input): number {
    // Denormalize from kWh/km back to selected unit
    return input * this.conversion_factor;
  }
  unitName(): string {
    return this.name;
  }
}
