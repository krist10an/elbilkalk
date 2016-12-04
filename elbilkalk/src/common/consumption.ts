import {Component} from 'angular2/core'

export class Consumption {
  public soc: number;
  public distance: number;
  public consumption: number;

  constructor(soc: number, consumption: number, distance: number) {
    this.soc = soc;
    this.consumption = consumption;
    this.distance = distance;
  }
}
